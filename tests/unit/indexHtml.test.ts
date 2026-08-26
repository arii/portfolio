import { describe, it, expect } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';

describe('index.html SEO & Accessibility Tags', () => {
  it('contains lang="en" on the html tag and a meta description', () => {
    const indexPath = path.resolve(__dirname, '../../index.html');
    const htmlContent = fs.readFileSync(indexPath, 'utf-8');

    expect(htmlContent).toMatch(/<html[^>]*\slang="en"/);
    expect(htmlContent).toMatch(/<meta[^>]*\sname="description"[^>]*\scontent="[^"]+"/);
  });

  it('links to valid favicon SVG with brand lettermark elements', () => {
    const indexPath = path.resolve(__dirname, '../../index.html');
    const htmlContent = fs.readFileSync(indexPath, 'utf-8');

    const faviconMatch = htmlContent.match(/<link[^>]*rel="icon"[^>]*href="([^"]+)"/);
    expect(faviconMatch).not.toBeNull();

    const faviconHref = faviconMatch![1].replace(/^\//, '');
    const faviconPath = path.resolve(__dirname, '../../public', faviconHref);
    expect(fs.existsSync(faviconPath)).toBe(true);

    const svgContent = fs.readFileSync(faviconPath, 'utf-8');
    expect(svgContent).toContain('<svg');
    expect(svgContent).toContain('viewBox="0 0 256 256"');
    expect(svgContent).toContain('#f59e0b'); // Brand amber accent color
  });
});
