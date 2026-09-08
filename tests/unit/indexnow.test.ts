import { describe, it, expect } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  INDEXNOW_KEY,
  HOST,
  KEY_LOCATION,
  INDEXNOW_ENDPOINT,
  buildIndexNowPayload,
  extractUrlsFromSitemap,
} from '../../scripts/ping-indexnow.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

describe('IndexNow API Key Verification & Payload Configuration', () => {
  it('verifies public/ verification key file exists with exact key content', () => {
    const keyPath = path.resolve(__dirname, `../../public/${INDEXNOW_KEY}.txt`);
    expect(fs.existsSync(keyPath)).toBe(true);

    const keyContent = fs.readFileSync(keyPath, 'utf-8').trim();
    expect(keyContent).toBe(INDEXNOW_KEY);
    expect(keyContent).toBe('85edc7eb17be73d24bb08393f5087474');
  });

  it('builds valid IndexNow submission payload matching API specification', () => {
    const sitemapPath = path.resolve(__dirname, '../../public/sitemap.xml');
    const payload = buildIndexNowPayload(sitemapPath);

    expect(payload.host).toBe(HOST);
    expect(payload.host).toBe('arii.github.io');
    expect(payload.key).toBe(INDEXNOW_KEY);
    expect(payload.keyLocation).toBe(KEY_LOCATION);
    expect(payload.keyLocation).toBe('https://arii.github.io/85edc7eb17be73d24bb08393f5087474.txt');
    expect(INDEXNOW_ENDPOINT).toBe('https://api.indexnow.org/indexnow');

    expect(Array.isArray(payload.urlList)).toBe(true);
    expect(payload.urlList.length).toBeGreaterThan(0);
    expect(payload.urlList).toContain('https://arii.github.io/');
    expect(payload.urlList).toContain('https://arii.github.io/devai');
    expect(payload.urlList).toContain('https://arii.github.io/research');
  });

  it('correctly extracts canonical URLs from sitemap XML content', () => {
    const tempSitemap = path.resolve(__dirname, 'temp_sitemap_test.xml');
    const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://arii.github.io/</loc>
  </url>
  <url>
    <loc>https://arii.github.io/about</loc>
  </url>
</urlset>`;

    fs.writeFileSync(tempSitemap, xmlContent, 'utf-8');

    try {
      const urls = extractUrlsFromSitemap(tempSitemap);
      expect(urls).toEqual(['https://arii.github.io/', 'https://arii.github.io/about']);
    } finally {
      if (fs.existsSync(tempSitemap)) {
        fs.unlinkSync(tempSitemap);
      }
    }
  });
});
