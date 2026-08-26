import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SITE_URL = 'https://arii.github.io';
const PUBLIC_DIR = path.resolve(__dirname, '../public');
const CONTENT_DIR = path.resolve(__dirname, '../src/content/research');

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

export function generateSitemap() {
  const today = new Date().toISOString().split('T')[0];
  const entries = [];

  // Core Pages
  const corePages = [
    { path: '/', hash: '', priority: '1.0', changefreq: 'weekly' },
    { path: '/devai', hash: '/#/devai', priority: '0.9', changefreq: 'weekly' },
    { path: '/research', hash: '/#/research', priority: '0.9', changefreq: 'weekly' },
    { path: '/about', hash: '/#/about', priority: '0.8', changefreq: 'monthly' },
    { path: '/resume', hash: '/#/resume', priority: '0.8', changefreq: 'monthly' },
  ];

  for (const page of corePages) {
    if (page.path !== '') {
      entries.push({
        url: `${SITE_URL}${page.path}`,
        lastmod: today,
        changefreq: page.changefreq,
        priority: page.priority,
      });
    }
    entries.push({
      url: `${SITE_URL}${page.hash}`,
      lastmod: today,
      changefreq: page.changefreq,
      priority: page.priority,
    });
  }

  // Articles from src/content/research/
  if (fs.existsSync(CONTENT_DIR)) {
    const files = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith('.md'));

    for (const file of files) {
      const slug = file.replace('.md', '');
      const filePath = path.join(CONTENT_DIR, file);
      const content = fs.readFileSync(filePath, 'utf-8');
      const lastmod = parseFrontmatterDate(content);
      const category = parseFrontmatterCategory(content);

      const isRobotics = category.toLowerCase().includes('robotics');
      const primarySection = isRobotics ? 'research' : 'devai';

      entries.push({
        url: `${SITE_URL}/${primarySection}/${slug}`,
        lastmod,
        changefreq: 'monthly',
        priority: '0.7',
      });
      entries.push({
        url: `${SITE_URL}/#/${primarySection}/${slug}`,
        lastmod,
        changefreq: 'monthly',
        priority: '0.7',
      });
    }
  }

  // Deduplicate entries by URL
  const uniqueMap = new Map();
  for (const entry of entries) {
    uniqueMap.set(entry.url, entry);
  }
  const uniqueEntries = Array.from(uniqueMap.values());

  const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${uniqueEntries
  .map(
    (e) => `  <url>
    <loc>${e.url}</loc>
    <lastmod>${e.lastmod}</lastmod>
    <changefreq>${e.changefreq}</changefreq>
    <priority>${e.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`;

  if (!fs.existsSync(PUBLIC_DIR)) {
    fs.mkdirSync(PUBLIC_DIR, { recursive: true });
  }

  const outputPath = path.join(PUBLIC_DIR, 'sitemap.xml');
  fs.writeFileSync(outputPath, xmlContent, 'utf-8');
  console.log(`✅ Generated sitemap.xml with ${uniqueEntries.length} routes at ${outputPath}`);
}

// Run directly if called as main module
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  generateSitemap();
}
