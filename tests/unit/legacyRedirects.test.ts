import { describe, it, expect } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';
import { generateSpaStubs, LEGACY_REDIRECTS } from '../../scripts/generate-spa-stubs.js';
import { flagshipTools } from '../../src/data/research/flagshipTools';
import { systemTools } from '../../src/data/research/systemTools';
import { getPrimarySection } from '../../src/data/researchSections';

const distDir = path.resolve(__dirname, '../../dist');
const contentDir = path.resolve(__dirname, '../../src/content/research');

const readStub = (rel: string) => fs.readFileSync(path.join(distDir, rel), 'utf-8');

describe('Search Console redirects and canonical paths', () => {
  it('writes a single-hop redirect stub for each legacy URL', () => {
    fs.mkdirSync(distDir, { recursive: true });
    const indexHtmlPath = path.join(distDir, 'index.html');
    if (!fs.existsSync(indexHtmlPath)) {
      fs.copyFileSync(path.resolve(__dirname, '../../index.html'), indexHtmlPath);
    }
    generateSpaStubs();

    for (const { from, to } of LEGACY_REDIRECTS) {
      const html = readStub(from.endsWith('.html') ? from : `${from}/index.html`);
      expect(html).toContain(`<meta http-equiv="refresh" content="0; url=${to}" />`);
      expect(html).toContain('<meta name="robots" content="noindex, follow" />');
    }
    expect(readStub('research/ai-experiments/index.html')).toContain('url=/devai/ai-experiments/');
  });

  it('points every tool canonicalPath at the section that serves the article', () => {
    const slugs = new Set(fs.readdirSync(contentDir).map((f) => f.replace(/\.md$/, '')));
    for (const tool of [...flagshipTools, ...systemTools]) {
      const match = tool.canonicalPath?.match(/^\/(research|devai)\/([^/]+)\/$/);
      if (!match || !slugs.has(match[2])) continue;
      const category = fs.readFileSync(path.join(contentDir, `${match[2]}.md`), 'utf-8').match(/category:\s*["']?([^"'\n]+)/)?.[1];
      expect(`${tool.id}: /${match[1]}/`).toBe(`${tool.id}: /${getPrimarySection({ slug: match[2], category })}/`);
    }
  });
});
