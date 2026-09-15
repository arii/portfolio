import { describe, it, expect } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';

describe('SPA Deep-Linking & 404 Redirect Handling', () => {
  it('public/404.html contains hierarchical depth probing redirection script and fallback UI', () => {
    const public404Path = path.resolve(__dirname, '../../public/404.html');
    expect(fs.existsSync(public404Path)).toBe(true);

    const html = fs.readFileSync(public404Path, 'utf-8');
    expect(html).toContain('ghpages_redirect');
    expect(html).toContain('ghpages_redirect_count');
    expect(html).toContain('maxRedirects');
    expect(html).toContain('getBaseAndRoute');
    expect(html).toContain('/preview');
    expect(html).toContain('/portfolio');
    expect(html).toContain('Return to Portfolio Home');
  });

  it('public/_redirects contains Cloudflare Pages / Netlify SPA 200 OK rewrite directive', () => {
    const redirectsPath = path.resolve(__dirname, '../../public/_redirects');
    expect(fs.existsSync(redirectsPath)).toBe(true);

    const content = fs.readFileSync(redirectsPath, 'utf-8');
    expect(content).toMatch(/\/\*\s+\/index\.html\s+200/);
  });

  it('public/vercel.json contains Vercel SPA rewrite rule returning index.html', () => {
    const vercelJsonPath = path.resolve(__dirname, '../../public/vercel.json');
    expect(fs.existsSync(vercelJsonPath)).toBe(true);

    const json = JSON.parse(fs.readFileSync(vercelJsonPath, 'utf-8'));
    expect(json.rewrites).toBeDefined();
    expect(json.rewrites).toEqual([
      {
        source: '/(.*)',
        destination: '/index.html',
      },
    ]);
  });

  it('index.html head script contains SPA query parameter parser and sessionStorage cleanup', () => {
    const indexHtmlPath = path.resolve(__dirname, '../../index.html');
    const html = fs.readFileSync(indexHtmlPath, 'utf-8');

    expect(html).toContain("if (l.search[1] === '/' )");
    expect(html).toContain("replaceState(null, null");
    expect(html).toContain("sessionStorage.removeItem('ghpages_redirect')");
    expect(html).toContain("sessionStorage.removeItem('ghpages_redirect_count')");
  });

  it('dist/404.html matches public/404.html post build', () => {
    const dist404Path = path.resolve(__dirname, '../../dist/404.html');
    const public404Path = path.resolve(__dirname, '../../public/404.html');

    if (fs.existsSync(dist404Path)) {
      const distContent = fs.readFileSync(dist404Path, 'utf-8');
      const publicContent = fs.readFileSync(public404Path, 'utf-8');
      expect(distContent).toBe(publicContent);
    }
  });
});
