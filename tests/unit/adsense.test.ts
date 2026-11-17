import { describe, it, expect } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';

const PUBLISHER = 'ca-pub-2398582836159289';

describe('AdSense', () => {
  it('loads the AdSense script for the publisher that ads.txt authorizes', () => {
    const html = fs.readFileSync(path.resolve(process.cwd(), 'index.html'), 'utf-8');
    const adsTxt = fs.readFileSync(path.resolve(process.cwd(), 'public/ads.txt'), 'utf-8');
    expect(html).toContain(
      `<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${PUBLISHER}" crossorigin="anonymous"></script>`
    );
    expect(adsTxt).toContain(PUBLISHER.replace('ca-', ''));
  });
});
