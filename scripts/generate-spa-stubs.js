import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DIST_DIR = path.resolve(__dirname, '../dist');
const CONTENT_DIR = path.resolve(__dirname, '../src/content/research');

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

export function generateSpaStubs() {
  const indexHtmlPath = path.join(DIST_DIR, 'index.html');
  if (!fs.existsSync(indexHtmlPath)) {
    console.error(`❌ Error: dist/index.html not found at ${indexHtmlPath}. Run vite build first.`);
    process.exit(1);
  }

  const indexHtmlContent = fs.readFileSync(indexHtmlPath, 'utf-8');

  // 1. Generate dist/404.html for GitHub Pages fallback with sessionStorage redirect script
  const spa404Script = `<script>
    (function() {
      var path = window.location.pathname + window.location.search + window.location.hash;
      sessionStorage.setItem('ghpages_redirect', path);
    })();
  </script>`;

  let html404Content = indexHtmlContent;
  if (html404Content.includes('<head>')) {
    html404Content = html404Content.replace('<head>', `<head>\n    ${spa404Script}`);
  } else {
    html404Content = spa404Script + html404Content;
  }

  const fallbackPath = path.join(DIST_DIR, '404.html');
  fs.writeFileSync(fallbackPath, html404Content, 'utf-8');
  console.log(`✅ Generated GitHub Pages fallback at ${fallbackPath}`);

  // 2. Core routes to stub
  const routes = ['about', 'devai', 'research', 'resume', 'portfolio'];

  // 3. Article routes from src/content/research/
  if (fs.existsSync(CONTENT_DIR)) {
    const files = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith('.md'));

    for (const file of files) {
      const slug = file.replace('.md', '');
      const filePath = path.join(CONTENT_DIR, file);
      const content = fs.readFileSync(filePath, 'utf-8');
      const category = parseFrontmatterCategory(content);

      const isRobotics = category.toLowerCase().includes('robotics');
      const primarySection = isRobotics ? 'research' : 'devai';

      routes.push(`${primarySection}/${slug}`);
    }
  }

  // Deduplicate routes
  const uniqueRoutes = Array.from(new Set(routes));

  // 4. Create directory stub index.html for each route
  let stubCount = 0;
  for (const route of uniqueRoutes) {
    const routeDir = path.join(DIST_DIR, route);
    if (!fs.existsSync(routeDir)) {
      fs.mkdirSync(routeDir, { recursive: true });
    }
    const stubFilePath = path.join(routeDir, 'index.html');
    fs.writeFileSync(stubFilePath, indexHtmlContent, 'utf-8');
    stubCount++;
  }

  console.log(`✅ Generated ${stubCount} SPA 200 OK directory stubs in dist/`);
}

// Run directly if called as main module
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  generateSpaStubs();
}
