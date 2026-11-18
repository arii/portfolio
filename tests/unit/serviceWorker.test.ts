import { describe, it, expect, vi } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';

type FetchHandler = (event: { request: Request; respondWith: (p: Promise<Response | undefined>) => void }) => void;

function loadWorker(cached: Response | undefined, network: () => Promise<Response>, cacheNames: string[] = []) {
  const handlers: Record<string, FetchHandler> = {};
  const cache = { put: vi.fn(), addAll: vi.fn(() => Promise.resolve()), match: vi.fn(() => Promise.resolve(cached)) };
  const context = {
    self: {
      location: new URL('https://arii.github.io/sw.js'),
      registration: { scope: 'https://arii.github.io/' },
      addEventListener: (type: string, handler: FetchHandler) => { handlers[type] = handler; },
      skipWaiting: vi.fn(),
      clients: { claim: vi.fn() },
    },
    caches: {
      match: vi.fn(() => Promise.reject(new Error('worker must not read other scopes\' caches'))),
      open: vi.fn(() => Promise.resolve(cache)),
      keys: vi.fn(() => Promise.resolve(cacheNames)),
      delete: vi.fn(),
    },
    fetch: vi.fn(network),
    URL,
    Promise,
    console,
  };
  vm.runInNewContext(fs.readFileSync(path.resolve(process.cwd(), 'public/sw.js'), 'utf-8'), context);
  const respond = (url: string) => {
    let result: Promise<Response | undefined> | undefined;
    handlers.fetch({ request: new Request(url), respondWith: (p) => { result = p; } });
    return result;
  };
  const activate = () => {
    let done: Promise<unknown> | undefined;
    (handlers.activate as unknown as (e: { waitUntil: (p: Promise<unknown>) => void }) => void)({ waitUntil: (p) => { done = p; } });
    return done;
  };
  return { respond, activate, fetch: context.fetch, deleteCache: context.caches.delete };
}

describe('service worker', () => {
  const stale = new Response('stale');

  it('revalidates unhashed scripts against the network instead of serving the cached copy forever', async () => {
    const sw = loadWorker(stale, () => Promise.resolve(new Response('fresh')));
    const res = await sw.respond('https://arii.github.io/previews/dashboard.js');
    expect(sw.fetch).toHaveBeenCalledTimes(1);
    expect(await res?.text()).toBe('fresh');
  });

  it('falls back to the cache for unhashed files when offline', async () => {
    const sw = loadWorker(stale, () => Promise.reject(new TypeError('offline')));
    const res = await sw.respond('https://arii.github.io/hrm/app.js');
    expect(await res?.text()).toBe('stale');
  });

  it('keeps a build-id placeholder in the cache name so each deploy evicts old caches', () => {
    const source = fs.readFileSync(path.resolve(process.cwd(), 'public/sw.js'), 'utf-8');
    expect(source).toContain('const CACHE_NAME = `${CACHE_PREFIX}__BUILD_ID__`;');
  });

  it('on activate evicts only its own scope\'s old builds and the legacy shared cache', async () => {
    const sw = loadWorker(undefined, () => Promise.resolve(new Response('')), [
      'arii-portfolio-v1',
      'arii-portfolio:https://arii.github.io/:oldbuild',
      'arii-portfolio:https://arii.github.io/portfolio/preview/pr-1/:abc',
      'arii-portfolio:https://arii.github.io/:__BUILD_ID__',
    ]);
    await sw.activate();
    expect(sw.deleteCache.mock.calls.map(([name]) => name)).toEqual([
      'arii-portfolio-v1',
      'arii-portfolio:https://arii.github.io/:oldbuild',
    ]);
  });
});
