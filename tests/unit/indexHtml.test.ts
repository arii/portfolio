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
});
