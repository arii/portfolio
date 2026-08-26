import { execFileSync } from 'child_process';
import fs from 'fs';
import path from 'path';

async function runLighthouse() {
  const routesPath = path.join(process.cwd(), 'artifacts', 'ux-audit', 'routes.json');
  if (!fs.existsSync(routesPath)) {
    console.error('routes.json not found. Run route discovery first.');
    process.exit(1);
  }

  const { routes } = JSON.parse(fs.readFileSync(routesPath, 'utf-8'));
  let baseUrl = 'http://localhost:3000';
  
  const configPath = path.join(process.cwd(), 'scripts', 'visual_guidelines.json');
  if (fs.existsSync(configPath)) {
    try {
      const config = JSON.parse(fs.readFileSync(configPath, 'utf-8'));
      if (config.baseUrl) baseUrl = config.baseUrl;
    } catch {
      // fallback
    }
  }

  const lighthouseDir = path.join(process.cwd(), 'artifacts', 'ux-audit', 'lighthouse');
  if (!fs.existsSync(lighthouseDir)) {
    fs.mkdirSync(lighthouseDir, { recursive: true });
  }

  // Limit to key routes (non-dynamic patterns)
  const keyRoutes = routes.filter((r: string) => !r.includes(':') && routes.indexOf(r) < 10);

  for (const route of keyRoutes) {
    const url = `${baseUrl}${route}`;
    const slug = route.replace(/\//g, '_') || 'home';
    const reportPath = path.join(lighthouseDir, slug);

    console.log(`Running Lighthouse for ${url}...`);
    try {
      if (!/^https?:\/\/[a-zA-Z0-9][-a-zA-Z0-9@:%._+~#=]{1,256}(\.[a-zA-Z0-9()]{1,6})?\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)$/.test(url)) {
        throw new Error(`Invalid URL format: ${url}`);
      }
      if (!/^[\w\-/:\\.]+$/.test(reportPath)) {
        throw new Error(`Invalid report path format: ${reportPath}`);
      }

      execFileSync('npx', [
        'lighthouse',
        url,
        '--output=json',
        '--output=html',
        `--output-path=${reportPath}`,
        '--chrome-flags=--headless',
        '--only-categories=performance,accessibility,best-practices,seo'
      ], { stdio: 'inherit' });
    } catch (error) {
      console.error(`Lighthouse failed for ${route}:`, error);
    }
  }
}

runLighthouse().catch(console.error);
