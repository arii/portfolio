import fs from 'fs';
import path from 'path';

const STATIC_ROUTES = [
  '/',
  '/devai',
  '/research',
  '/resume',
  '/about'
];

const CONTENT_DIRS = {
  '/devai/:slug': 'src/content/research',
  '/research/:slug': 'src/content/research'
};

function getSlugs(dir: string): string[] {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir)
    .filter(f => f.endsWith('.md'))
    .map(f => f.replace('.md', ''));
}

async function discoverRoutes() {
  const routes = [...STATIC_ROUTES];

  for (const [pattern, dirOrDirs] of Object.entries(CONTENT_DIRS)) {
    const dirs = Array.isArray(dirOrDirs) ? dirOrDirs : [dirOrDirs];
    for (const dir of dirs) {
      const slugs = getSlugs(dir);
      slugs.forEach(slug => {
        routes.push(pattern.replace(':slug', slug));
      });
    }
  }

  const outputDir = path.join(process.cwd(), 'artifacts', 'ux-audit');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const outputPath = path.join(outputDir, 'routes.json');
  fs.writeFileSync(outputPath, JSON.stringify({ routes }, null, 2));
  console.log(`Discovered ${routes.length} routes. Saved to ${outputPath}`);
}

discoverRoutes().catch(console.error);
