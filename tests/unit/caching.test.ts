import { describe, it, expect } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';

describe('Static Asset Caching & Service Worker Configuration', () => {
  it('configures deterministic content-based asset hashing in vite.config.ts', () => {
    const viteConfigPath = path.resolve(__dirname, '../../vite.config.ts');
    const viteConfigContent = fs.readFileSync(viteConfigPath, 'utf-8');

    expect(viteConfigContent).toContain("entryFileNames: 'assets/[name]-[hash].js'");
    expect(viteConfigContent).toContain("chunkFileNames: 'assets/[name]-[hash].js'");
    expect(viteConfigContent).toContain("assetFileNames: 'assets/[name]-[hash][extname]'");
  });

  it('contains public/sw.js service worker with expected caching strategies', () => {
    const swPath = path.resolve(__dirname, '../../public/sw.js');
    expect(fs.existsSync(swPath)).toBe(true);

    const swContent = fs.readFileSync(swPath, 'utf-8');
    expect(swContent).toContain('CACHE_NAME');
    expect(swContent).toContain('isHashedAsset');
    expect(swContent).toContain("request.mode === 'navigate'");
    expect(swContent).toContain('caches.open');
  });

  it('contains public/_headers with immutable cache-control directives for assets', () => {
    const headersPath = path.resolve(__dirname, '../../public/_headers');
    expect(fs.existsSync(headersPath)).toBe(true);

    const headersContent = fs.readFileSync(headersPath, 'utf-8');
    expect(headersContent).toContain('/assets/*');
    expect(headersContent).toContain('max-age=31536000, immutable');
    expect(headersContent).toContain('/sw.js');
    expect(headersContent).toContain('max-age=0, must-revalidate');
  });

  it('registers the service worker in main.tsx', () => {
    const mainTsxPath = path.resolve(__dirname, '../../src/main.tsx');
    const mainTsxContent = fs.readFileSync(mainTsxPath, 'utf-8');

    expect(mainTsxContent).toContain('registerServiceWorker');

    const registerSwPath = path.resolve(__dirname, '../../src/registerServiceWorker.ts');
    expect(fs.existsSync(registerSwPath)).toBe(true);
  });
});
