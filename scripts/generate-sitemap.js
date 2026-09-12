import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SITE_URL = 'https://arii.github.io';
const PUBLIC_DIR = path.resolve(__dirname, '../public');
const CONTENT_DIR = path.resolve(__dirname, '../src/content/research');
const LICENSE_URL = 'https://creativecommons.org/licenses/by-nc-nd/4.0/';

function parseFrontmatterTitle(content) {
  const match = content.match(/^---\r?\n([\s\S]+?)\r?\n---/);
  if (match) {
    const yaml = match[1];
    const titleMatch = yaml.match(/title:\s*["']?([^"'\n]+)["']?/);
    if (titleMatch) {
      return titleMatch[1].trim();
    }
  }
  return 'Ariel Anders Portfolio Article';
}

function parseFrontmatterDate(content) {
  const match = content.match(/^---\r?\n([\s\S]+?)\r?\n---/);
  if (match) {
    const yaml = match[1];
    const dateMatch = yaml.match(/date:\s*["']?([0-9]{4}-[0-9]{2}-[0-9]{2})["']?/);
    if (dateMatch) {
      return dateMatch[1];
    }
  }
  return new Date().toISOString().split('T')[0];
}

function parseFrontmatterCategory(content) {
  const match = content.match(/^---\r?\n([\s\S]+?)\r?\n---/);
  if (match) {
    const yaml = match[1];
    const catMatch = yaml.match(/category:\s*["']?([^"'\n]+)["']?/);
    if (catMatch) {
      return catMatch[1].trim();
    }
  }
  return 'DevAI';
}

function escapeXml(str) {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function extractMarkdownImages(articleTitle, content) {
  const images = [];
  // Regex to match markdown images: ![alt](url)
  const imageRegex = /!\[([^\]]*)\]\(([^)]+)\)/g;
  let match;

  while ((match = imageRegex.exec(content)) !== null) {
    let alt = match[1] || '';
    let rawUrl = match[2] || '';

    // Remove hash modifiers from url
    const cleanPath = rawUrl.split('#')[0].trim();
    if (!cleanPath) continue;

    // Normalize absolute asset URL
    const loc = cleanPath.startsWith('http')
      ? cleanPath
      : `${SITE_URL}${cleanPath.startsWith('/') ? '' : '/'}${cleanPath}`;

    // Extract title / caption from alt text if pipe-delimited
    let caption = alt;
    if (alt.includes('|')) {
      caption = alt.split('|')[0].trim();
    }

    // Clean caption formatting
    caption = caption
      .replace(/^Figure:\s*/i, '')
      .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // remove markdown links in alt
      .trim();

    images.push({
      loc,
      title: articleTitle,
      caption: caption || articleTitle,
      license: LICENSE_URL,
    });
  }

  // Deduplicate images by loc
  const uniqueImages = [];
  const seenLocs = new Set();
  for (const img of images) {
    if (!seenLocs.has(img.loc)) {
      seenLocs.add(img.loc);
      uniqueImages.push(img);
    }
  }

  return uniqueImages;
}

export function generateSitemap() {
  const today = new Date().toISOString().split('T')[0];
  const entries = [];

  // Core Hero Portrait image entry
  const heroPortrait = {
    loc: `${SITE_URL}/assets/roboticist.jpg`,
    title: 'Ariel Anders, PhD - AI & Robotics Engineer',
    caption: 'Ariel Anders, PhD in Electrical Engineering and Computer Science from MIT CSAIL.',
    license: LICENSE_URL,
  };

  // Core Canonical Pages
  const corePages = ['/', '/devai', '/research', '/about', '/resume'];

  for (const pagePath of corePages) {
    const url = pagePath === '/' ? `${SITE_URL}/` : `${SITE_URL}${pagePath}`;
    const images = (pagePath === '/' || pagePath === '/about') ? [heroPortrait] : [];
    entries.push({
      url,
      lastmod: today,
      images,
    });
  }

  // Articles from src/content/research/
  if (fs.existsSync(CONTENT_DIR)) {
    const files = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith('.md'));

    for (const file of files) {
      const slug = file.replace('.md', '');
      const filePath = path.join(CONTENT_DIR, file);
      const content = fs.readFileSync(filePath, 'utf-8');
      const articleTitle = parseFrontmatterTitle(content);
      const lastmod = parseFrontmatterDate(content);
      const category = parseFrontmatterCategory(content);

      const researchOnlySlugs = ['bwsi-racecar', 'delivery-bots', 'leac-monitoring-software', 'light-therapy-mit', 'boop-light-detector', 'autonomous-drone-line-following'];
      const isRobotics = category.toLowerCase().includes('robotics') || researchOnlySlugs.includes(slug);
      const primarySection = isRobotics ? 'research' : 'devai';

      const images = extractMarkdownImages(articleTitle, content);

      entries.push({
        url: `${SITE_URL}/${primarySection}/${slug}`,
        lastmod,
        images,
      });
    }
  }

  // Deduplicate entries by URL
  const uniqueMap = new Map();
  for (const entry of entries) {
    if (!uniqueMap.has(entry.url)) {
      uniqueMap.set(entry.url, entry);
    } else {
      // Merge images if duplicate route
      const existing = uniqueMap.get(entry.url);
      existing.images = [...existing.images, ...entry.images];
    }
  }
  const uniqueEntries = Array.from(uniqueMap.values());

  const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${uniqueEntries
  .map((e) => {
    let xml = `  <url>\n    <loc>${e.url}</loc>\n    <lastmod>${e.lastmod}</lastmod>`;
    if (e.images && e.images.length > 0) {
      for (const img of e.images) {
        xml += `\n    <image:image>
      <image:loc>${escapeXml(img.loc)}</image:loc>
      <image:title>${escapeXml(img.title)}</image:title>
      <image:caption>${escapeXml(img.caption)}</image:caption>
      <image:license>${escapeXml(img.license)}</image:license>
    </image:image>`;
      }
    }
    xml += `\n  </url>`;
    return xml;
  })
  .join('\n')}
</urlset>
`;

  if (!fs.existsSync(PUBLIC_DIR)) {
    fs.mkdirSync(PUBLIC_DIR, { recursive: true });
  }

  const outputPath = path.join(PUBLIC_DIR, 'sitemap.xml');
  fs.writeFileSync(outputPath, xmlContent, 'utf-8');
  console.log(`✅ Generated clean image sitemap.xml with ${uniqueEntries.length} canonical routes at ${outputPath}`);
}

// Run directly if called as main module
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  generateSitemap();
}
