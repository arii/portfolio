import { describe, it, expect, vi } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';

type FetchHandler = (event: { request: Request; respondWith: (p: Promise<Response | undefined>) => void }) => void;

function loadWorker(cached: Response | undefined, network: () => Promise<Response>) {
  const handlers: Record<string, FetchHandler> = {};
  const cache = { put: vi.fn(), addAll: vi.fn(() => Promise.resolve()) };
  const context = {
    self: {
      location: new URL('https://arii.github.io/sw.js'),
      addEventListener: (type: string, handler: FetchHandler) => { handlers[type] = handler; },
      skipWaiting: vi.fn(),
      clients: { claim: vi.fn() },
    },
    caches: {
      match: vi.fn(() => Promise.resolve(cached)),
      open: vi.fn(() => Promise.resolve(cache)),
      keys: vi.fn(() => Promise.resolve([])),
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
  return { respond, fetch: context.fetch };
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
    expect(source).toContain("const CACHE_NAME = 'arii-portfolio-__BUILD_ID__';");
  });
});
