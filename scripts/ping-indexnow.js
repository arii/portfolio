import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const INDEXNOW_KEY = '85edc7eb17be73d24bb08393f5087474';
export const HOST = 'arii.github.io';
export const KEY_LOCATION = `https://${HOST}/${INDEXNOW_KEY}.txt`;
export const INDEXNOW_ENDPOINT = 'https://api.indexnow.org/indexnow';

export function extractUrlsFromSitemap(sitemapPath) {
  if (!fs.existsSync(sitemapPath)) {
    return [];
  }
  const content = fs.readFileSync(sitemapPath, 'utf-8');
  const locMatches = content.matchAll(/<loc>(.*?)<\/loc>/g);
  const urls = [];
  for (const match of locMatches) {
    if (match[1]) {
      urls.push(match[1].trim());
    }
  }
  return Array.from(new Set(urls));
}

export function buildIndexNowPayload(sitemapPath) {
  const fallbackSitemapPath = path.resolve(__dirname, '../public/sitemap.xml');
  const targetPath = sitemapPath || (fs.existsSync(fallbackSitemapPath) ? fallbackSitemapPath : null);

  let urlList = targetPath ? extractUrlsFromSitemap(targetPath) : [];

  if (urlList.length === 0) {
    urlList = [
      `https://${HOST}/`,
      `https://${HOST}/about`,
      `https://${HOST}/devai`,
      `https://${HOST}/research`,
      `https://${HOST}/resume`,
    ];
  }

  return {
    host: HOST,
    key: INDEXNOW_KEY,
    keyLocation: KEY_LOCATION,
    urlList,
  };
}

export async function pingIndexNow(payload = buildIndexNowPayload()) {
  console.log(`📡 Submitting ${payload.urlList.length} URLs to IndexNow (${INDEXNOW_ENDPOINT})...`);

  try {
    const response = await fetch(INDEXNOW_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(payload),
    });

    if (response.ok || response.status === 202) {
      console.log(`✅ IndexNow ping succeeded with status ${response.status}`);
      return true;
    } else {
      const errorText = await response.text();
      console.error(`⚠️ IndexNow ping returned status ${response.status}: ${errorText}`);
      return false;
    }
  } catch (err) {
    console.error(`❌ IndexNow ping failed:`, err);
    return false;
  }
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  pingIndexNow();
}
