import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();

  // Navigate to the DevAI page
  await page.goto('http://localhost:3000/#/devai', { waitUntil: 'networkidle' });

  // Set viewport to 1920x1080
  await page.setViewportSize({ width: 1920, height: 1080 });

  // Take screenshot
  await page.screenshot({ path: '/tmp/devai-page.png', fullPage: true });

  await browser.close();
})();
