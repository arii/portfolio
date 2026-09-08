import fs from 'node:fs';
import path from 'node:path';
import http from 'node:http';
import https from 'node:https';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const HOST = 'arii.github.io';
const INDEXNOW_ENDPOINT = 'https://api.indexnow.org/indexnow';

export function parseSitemapUrls(sitemapPath) {
  if (!fs.existsSync(sitemapPath)) {
    console.warn(`⚠️ Sitemap file not found at ${sitemapPath}`);
    return [];
  }

  const content = fs.readFileSync(sitemapPath, 'utf-8');
  const urls = [];
  const locRegex = /<loc>(https?:\/\/[^<]+)<\/loc>/g;
  let match;

  while ((match = locRegex.exec(content)) !== null) {
    if (match[1]) {
      urls.push(match[1].trim());
    }
  }

  return urls;
}

export async function submitIndexNowUrls({ host = HOST, key, urlList, endpoint = INDEXNOW_ENDPOINT }) {
  if (!key || !key.trim()) {
    console.log('ℹ️ IndexNow key not provided (INDEXNOW_KEY / VITE_INDEXNOW_KEY missing). Skipping submission.');
    return { success: false, reason: 'missing_key' };
  }

  if (!urlList || urlList.length === 0) {
    console.log('ℹ️ No URLs found for IndexNow submission.');
    return { success: false, reason: 'no_urls' };
  }

  const payload = {
    host,
    key: key.trim(),
    keyLocation: `https://${host}/${key.trim()}.txt`,
    urlList,
  };

  const payloadData = JSON.stringify(payload);
  const targetUrl = new URL(endpoint);

  const options = {
    hostname: targetUrl.hostname,
    port: targetUrl.port || (targetUrl.protocol === 'https:' ? 443 : 80),
    path: targetUrl.pathname + targetUrl.search,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Content-Length': Buffer.byteLength(payloadData),
    },
  };

  const transport = targetUrl.protocol === 'https:' ? https : http;

  return new Promise((resolve) => {
    const req = transport.request(options, (res) => {
      let body = '';
      res.on('data', (chunk) => {
        body += chunk;
      });
      res.on('end', () => {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          console.log(`✅ IndexNow submission successful (${res.statusCode}): Submitted ${urlList.length} URLs for ${host}`);
          resolve({ success: true, statusCode: res.statusCode, response: body });
        } else {
          console.warn(`⚠️ IndexNow submission returned status ${res.statusCode}: ${body}`);
          resolve({ success: false, statusCode: res.statusCode, response: body });
        }
      });
    });

    req.on('error', (err) => {
      console.error(`❌ IndexNow submission failed with error: ${err.message}`);
      resolve({ success: false, error: err.message });
    });

    req.write(payloadData);
    req.end();
  });
}

export async function pingIndexNow() {
  const key = process.env.INDEXNOW_KEY || process.env.VITE_INDEXNOW_KEY;
  if (!key || !key.trim()) {
    console.log('ℹ️ INDEXNOW_KEY or VITE_INDEXNOW_KEY environment variable is not set. Skipping IndexNow ping.');
    return { success: false, reason: 'missing_key' };
  }

  const publicSitemap = path.resolve(__dirname, '../public/sitemap.xml');
  const distSitemap = path.resolve(__dirname, '../dist/sitemap.xml');
  const sitemapPath = fs.existsSync(distSitemap) ? distSitemap : publicSitemap;

  const urlList = parseSitemapUrls(sitemapPath);
  console.log(`📡 Extracted ${urlList.length} canonical URLs from sitemap for IndexNow notification.`);

  return await submitIndexNowUrls({
    host: HOST,
    key: key.trim(),
    urlList,
  });
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  pingIndexNow().catch((err) => {
    console.error('Unhandled error pinging IndexNow:', err);
    process.exit(1);
  });
}
