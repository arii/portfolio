import { chromium } from '@playwright/test';
import { startPreview, stopPreview, waitForServer } from './impact-review-utils';
import path from 'path';
import fs from 'fs';

const PORT = 4175;
const BASE_URL = `http://127.0.0.1:${PORT}`;

const IGNORED_ERRORS = [
  /Vercel Web Analytics/,
  /gtag is not defined/,
  /chrome-extension/,
  /Failed to load resource: net::ERR_BLOCKED_BY_CLIENT/,
  /Failed to load resource: net::ERR_BLOCKED_BY_RESPONSE.NotSameOrigin/
];

function isIgnored(msg: string): boolean {
  return IGNORED_ERRORS.some(pattern =>
    pattern instanceof RegExp ? pattern.test(msg) : msg.includes(pattern)
  );
}

async function autoscroll(page: any) {
  await page.evaluate(async () => {
    await new Promise<void>((resolve) => {
      let totalHeight = 0;
      const distance = 200;
      const timer = setInterval(() => {
        const scrollHeight = document.body.scrollHeight;
        window.scrollBy(0, distance);
        totalHeight += distance;

        if (totalHeight >= scrollHeight) {
          clearInterval(timer);
          // Scroll back to top
          window.scrollTo(0, 0);
          resolve();
        }
      }, 50);
    });
  });
}

async function main() {
  console.log('🚀 Starting Smoke Test with Autoscroll...');
  const server = startPreview(process.cwd(), PORT);

  try {
    await waitForServer(BASE_URL);
    console.log(`✅ Server is ready at ${BASE_URL}`);

    const browser = await chromium.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
    const page = await browser.newPage();

    const consoleErrors: string[] = [];
    const pageErrors: string[] = [];

    page.on('console', (msg) => {
      if (msg.type() === 'error' && !isIgnored(msg.text())) {
        consoleErrors.push(`[Console Error] ${msg.text()}`);
      }
    });

    page.on('pageerror', (err) => {
      if (!isIgnored(err.message)) {
        pageErrors.push(`[Page Error] ${err.message}`);
      }
    });

    // Start with the home page and core pages
    const visited = new Set<string>();
    const queue: string[] = [
      `${BASE_URL}/#/`,
      `${BASE_URL}/#/devai`,
      `${BASE_URL}/#/research`,
      `${BASE_URL}/#/resume`,
      `${BASE_URL}/#/about`
    ];

    // Find all markdown content files to queue individual detail pages
    const contentDir = path.join(process.cwd(), 'src/content/research');
    if (fs.existsSync(contentDir)) {
      const mdFiles = fs.readdirSync(contentDir).filter(file => file.endsWith('.md'));
      const slugs = mdFiles.map(file => file.replace('.md', ''));
      for (const slug of slugs) {
        queue.push(`${BASE_URL}/#/research/${slug}`);
        queue.push(`${BASE_URL}/#/devai/${slug}`);
      }
    }

    let hasFailure = false;

    while (queue.length > 0) {
      const currentUrl = queue.shift()!;
      if (visited.has(currentUrl)) continue;
      visited.add(currentUrl);

      console.log(`🌐 Testing page: ${currentUrl}`);
      consoleErrors.length = 0;
      pageErrors.length = 0;

      const response = await page.goto(currentUrl, { waitUntil: 'networkidle', timeout: 30000 });

      // Check HTTP response status (if page is outside HashRouter fallback routing)
      if (response && response.status() >= 400) {
        console.error(`❌ HTTP Error: Received status code ${response.status()} for ${currentUrl}`);
        hasFailure = true;
      }

      // Check if the page didn't crash or load blank (check for layout main element)
      const hasMainContent = await page.evaluate(() => {
        return !!document.querySelector('main') || !!document.querySelector('#root');
      });
      if (!hasMainContent) {
        console.error(`❌ Error: Page loaded blank (missing main/root element) for ${currentUrl}`);
        hasFailure = true;
      }

      // Scroll to trigger lazy loading of images
      await autoscroll(page);
      await page.waitForTimeout(800); // Give images a moment to load/render

      // Check for console/JS errors
      if (consoleErrors.length > 0 || pageErrors.length > 0) {
        console.error(`❌ JS Errors detected on ${currentUrl}:`);
        consoleErrors.forEach(err => console.error(`  - ${err}`));
        pageErrors.forEach(err => console.error(`  - ${err}`));
        hasFailure = true;
      }

      // Check for broken images
      const brokenImages = await page.evaluate(() => {
        const images = Array.from(document.querySelectorAll('img'));
        return images
          .filter(img => !img.complete || img.naturalWidth === 0)
          .map(img => img.src || img.getAttribute('src') || 'unknown');
      });

      // Also check if any SafeImage divs with fallback alt / broken state exist
      const fallbackIndicators = await page.evaluate(() => {
        const divs = Array.from(document.querySelectorAll('div[role="img"]'));
        return divs
          .filter(div => div.textContent && div.textContent.includes('Preview unavailable'))
          .map(div => `Div fallback: ${div.textContent} (Aria-label: ${div.getAttribute('aria-label')})`);
      });

      const allBroken = [...brokenImages, ...fallbackIndicators];

      if (allBroken.length > 0) {
        console.error(`❌ Broken images or fallback states detected on ${currentUrl}:`);
        allBroken.forEach(src => console.error(`  - ${src}`));
        hasFailure = true;
      }

      // Discover internal link anchors (for custom links/routing links)
      const internalLinks = await page.evaluate((base) => {
        const anchors = Array.from(document.querySelectorAll('a[href]'));
        return anchors
          .map(a => (a as HTMLAnchorElement).href)
          .filter(href => href.startsWith(base));
      }, BASE_URL);

      for (const link of internalLinks) {
        if (!visited.has(link) && !queue.includes(link)) {
          if (!link.includes('/assets/')) {
            queue.push(link);
          }
        }
      }
    }

    await browser.close();

    if (hasFailure) {
      console.error('❌ Smoke test completed with failures.');
      process.exit(1);
    } else {
      console.log(`✅ Smoke test completed successfully! Visited ${visited.size} pages.`);
      process.exit(0);
    }

  } catch (error) {
    console.error('❌ Smoke test crashed:', error);
    process.exit(1);
  } finally {
    stopPreview(server);
  }
}

main();
