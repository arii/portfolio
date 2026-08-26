const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

async function run() {
  const browser = await chromium.launch({ headless: true });

  const scenarios = [
    { name: 'desktop', width: 1280, height: 800 },
    { name: 'mobile', width: 375, height: 667 },
  ];

  for (const scenario of scenarios) {
    const context = await browser.newContext({
      viewport: { width: scenario.width, height: scenario.height },
      deviceScaleFactor: 2,
    });
    const page = await context.newPage();

    // Go to the DevAI page and navigate to the VersionTruth article
    await page.goto('http://localhost:3000/devai');
    await page.waitForLoadState('networkidle');

    await page.click('text=VersionTruth: Eliminating Version Hallucinations in Agentic CI');
    await page.waitForLoadState('networkidle');

    // Wait for the mermaid diagram to render
    await page.waitForSelector('.mermaid-container svg', { timeout: 10000 }).catch(() => console.log('Mermaid container not found or timeout'));

    // Capture the entire page layout
    await page.screenshot({ path: `version-truth-article-${scenario.name}.png`, fullPage: true });

    // Focus on the diagram specifically
    const diagram = await page.$('.mermaid-container');
    if (diagram) {
       await diagram.screenshot({ path: `version-truth-diagram-${scenario.name}.png` });
    }

    await context.close();
  }

  await browser.close();
}

run().catch(console.error);
