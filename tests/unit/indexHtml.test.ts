import { describe, it, expect } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';

describe('index.html SEO & Accessibility Tags', () => {
  it('contains lang="en" on the html tag and a meta description of appropriate length', () => {
    const indexPath = path.resolve(__dirname, '../../index.html');
    const htmlContent = fs.readFileSync(indexPath, 'utf-8');

    expect(htmlContent).toMatch(/<html[^>]*\slang="en"/);

    const descMatch = htmlContent.match(/<meta[^>]*\sname="description"[^>]*\scontent="([^"]+)"/);
    expect(descMatch).not.toBeNull();
    const descContent = descMatch![1];
    expect(descContent.length).toBeGreaterThanOrEqual(120);
    expect(descContent.length).toBeLessThanOrEqual(158);
  });

  it('contains title under 60 characters with front-loaded keywords', () => {
    const indexPath = path.resolve(__dirname, '../../index.html');
    const htmlContent = fs.readFileSync(indexPath, 'utf-8');

    const titleMatch = htmlContent.match(/<title>([^<]+)<\/title>/);
    expect(titleMatch).not.toBeNull();
    const titleContent = titleMatch![1].replace(/&amp;/g, '&');
    expect(titleContent.length).toBeLessThanOrEqual(60);
    expect(titleContent).toContain('AI & Robotics Engineering Portfolio | Ariel Anders, PhD');
  });

  it('contains structured fallback JSON-LD @graph script matching Person & Service', () => {
    const indexPath = path.resolve(__dirname, '../../index.html');
    const htmlContent = fs.readFileSync(indexPath, 'utf-8');

    expect(htmlContent).toContain('<script type="application/ld+json">');
    expect(htmlContent).toContain('"@graph":');
    expect(htmlContent).toContain('"@type": "Person"');
    expect(htmlContent).toContain('"name": "Ariel Anders, PhD"');
    expect(htmlContent).toContain('"jobTitle": "Robotics & AI Consulting Engineer"');
    expect(htmlContent).toContain('"name": "Massachusetts Institute of Technology (MIT)"');
    expect(htmlContent).toContain('"@type": "Service"');
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
