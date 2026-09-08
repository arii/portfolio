import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';
import { generateIndexNowKeyFiles, getIndexNowKey } from '../../scripts/generate-indexnow-key.js';
import { parseSitemapUrls, submitIndexNowUrls, pingIndexNow } from '../../scripts/ping-indexnow.js';

describe('IndexNow Integration', () => {
  const originalEnv = process.env;

  beforeEach(() => {
    process.env = { ...originalEnv };
  });

  afterEach(() => {
    process.env = originalEnv;
  });

  describe('generateIndexNowKeyFiles & getIndexNowKey', () => {
    it('returns null when no key is in environment', () => {
      delete process.env.INDEXNOW_KEY;
      delete process.env.VITE_INDEXNOW_KEY;

      expect(getIndexNowKey()).toBeNull();
      expect(generateIndexNowKeyFiles()).toBeNull();
    });

    it('reads key from INDEXNOW_KEY or VITE_INDEXNOW_KEY', () => {
      process.env.INDEXNOW_KEY = 'testkey12345';
      expect(getIndexNowKey()).toBe('testkey12345');

      delete process.env.INDEXNOW_KEY;
      process.env.VITE_INDEXNOW_KEY = 'vitekey67890';
      expect(getIndexNowKey()).toBe('vitekey67890');
    });

    it('creates key files in public/ and dist/ when environment variable is present', () => {
      const testKey = 'abc123def456';
      process.env.INDEXNOW_KEY = testKey;

      const publicDir = path.resolve(__dirname, '../../public');
      const distDir = path.resolve(__dirname, '../../dist');

      if (!fs.existsSync(distDir)) {
        fs.mkdirSync(distDir, { recursive: true });
      }

      const generatedKey = generateIndexNowKeyFiles();
      expect(generatedKey).toBe(testKey);

      const publicFilePath = path.join(publicDir, `${testKey}.txt`);
      const distFilePath = path.join(distDir, `${testKey}.txt`);

      expect(fs.existsSync(publicFilePath)).toBe(true);
      expect(fs.readFileSync(publicFilePath, 'utf-8')).toBe(`${testKey}\n`);

      expect(fs.existsSync(distFilePath)).toBe(true);
      expect(fs.readFileSync(distFilePath, 'utf-8')).toBe(`${testKey}\n`);

      // Cleanup generated test files
      if (fs.existsSync(publicFilePath)) fs.unlinkSync(publicFilePath);
      if (fs.existsSync(distFilePath)) fs.unlinkSync(distFilePath);
    });
  });

  describe('parseSitemapUrls', () => {
    it('returns empty array if sitemap path does not exist', () => {
      const urls = parseSitemapUrls(path.resolve(__dirname, 'non-existent-sitemap.xml'));
      expect(urls).toEqual([]);
    });

    it('extracts canonical URLs from sitemap XML content', () => {
      const sitemapPath = path.resolve(__dirname, '../../public/sitemap.xml');
      if (fs.existsSync(sitemapPath)) {
        const urls = parseSitemapUrls(sitemapPath);
        expect(urls.length).toBeGreaterThan(0);
        expect(urls).toContain('https://arii.github.io/');
        expect(urls).toContain('https://arii.github.io/devai');
      }
    });
  });

  describe('submitIndexNowUrls & pingIndexNow', () => {
    it('skips submission if key is missing', async () => {
      const res = await submitIndexNowUrls({ host: 'arii.github.io', key: '', urlList: ['https://arii.github.io/'] });
      expect(res.success).toBe(false);
      expect(res.reason).toBe('missing_key');
    });

    it('skips submission if urlList is empty', async () => {
      const res = await submitIndexNowUrls({ host: 'arii.github.io', key: 'somekey', urlList: [] });
      expect(res.success).toBe(false);
      expect(res.reason).toBe('no_urls');
    });

    it('returns missing_key status in pingIndexNow when env vars are unconfigured', async () => {
      delete process.env.INDEXNOW_KEY;
      delete process.env.VITE_INDEXNOW_KEY;

      const res = await pingIndexNow();
      expect(res.success).toBe(false);
      expect(res.reason).toBe('missing_key');
    });
  });

  describe('.gitignore pattern validation for IndexNow verification files', () => {
    it('ensures .gitignore rules properly ignore public/*.txt without ignoring core system files', () => {
      const gitignorePath = path.resolve(__dirname, '../../.gitignore');
      expect(fs.existsSync(gitignorePath)).toBe(true);

      const content = fs.readFileSync(gitignorePath, 'utf-8');
      expect(content).toContain('public/*.txt');
      expect(content).toContain('!public/robots.txt');
      expect(content).toContain('!public/llms.txt');
      expect(content).toContain('!public/llms-full.txt');
    });
  });
});
