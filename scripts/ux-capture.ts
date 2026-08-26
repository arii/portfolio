import { chromium, type Page } from 'playwright';
import path from 'path';
import fs from 'fs';

async function disableAnimations(page: Page) {
  await page.addStyleTag({
    content: `
      *, *::before, *::after {
        animation: none !important;
        transition: none !important;
        animation-duration: 0s !important;
        transition-duration: 0s !important;
        view-transition-name: none !important;
        scroll-behavior: auto !important;
      }
    `
  });
}

async function capture(url: string, width: number, height: number, outputPath: string) {
  const isHeadless = process.env.HEADLESS !== 'false';
  const browser = await chromium.launch({ headless: isHeadless });
  const page = await browser.newPage({
    viewport: { width, height }
  });

  try {
    console.log(`Navigating to ${url}...`);
    await page.goto(url, { waitUntil: 'networkidle' });

    // Inject styles to hide common popups or banners if needed
    await disableAnimations(page);

    console.log(`Capturing screenshot (${width}x${height}) [Headless: ${isHeadless}]...`);
    await page.screenshot({ path: outputPath, fullPage: false });
    console.log(`Screenshot saved to ${outputPath}`);
  } catch (error) {
    console.error(`Failed to capture ${url}:`, error);
  } finally {
    await browser.close();
  }
}

const args = process.argv.slice(2);
const url = args.find(arg => arg.startsWith('http')) || 'https://boomtick.blog';
const targetViewport = args.find(arg => ['mobile', 'tablet', 'desktop'].includes(arg));

const viewports = [
  { name: 'mobile', width: 390, height: 844 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'desktop', width: 1440, height: 900 }
];

(async () => {
  const outputDir = path.join(process.cwd(), 'public', 'ux-audits');

  // Cache eviction: cleanup existing audits before run if not targeting a specific viewport
  if (!targetViewport && fs.existsSync(outputDir)) {
    console.log(`Cleaning up existing audits in ${outputDir}...`);
    fs.rmSync(outputDir, { recursive: true, force: true });
  }

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const vpsToCapture = targetViewport
    ? viewports.filter(vp => vp.name === targetViewport)
    : viewports;

  if (vpsToCapture.length === 0 && targetViewport) {
    console.error(`Invalid viewport: ${targetViewport}. Available: mobile, tablet, desktop`);
    process.exit(1);
  }

  for (const vp of vpsToCapture) {
    const filename = `audit-${vp.name}.png`;
    const outputPath = path.join(outputDir, filename);
    await capture(url, vp.width, vp.height, outputPath);
  }
})();
