import { describe, it, expect } from 'vitest';
import React from 'react';
import { render } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import SEO from '@/components/SEO';
import fs from 'node:fs';
import path from 'node:path';
import { generateSitemap } from '../../scripts/generate-sitemap.js';

describe('SEO Component & Search Configuration', () => {
  it('renders title, description, canonical link, and social tags via Helmet', async () => {
    render(
      <HelmetProvider>
        <SEO
          title="Custom Page Title"
          description="Custom page description for testing."
          canonicalUrl="/devai/versiontruth"
          ogType="article"
          ogImage="/assets/research/versiontruth.png"
        />
      </HelmetProvider>
    );

    expect(document.title).toBe('Custom Page Title | Ariel Anders');

    const descMeta = document.querySelector('meta[name="description"]');
    expect(descMeta?.getAttribute('content')).toBe('Custom page description for testing.');

    const canonicalLink = document.querySelector('link[rel="canonical"]');
    expect(canonicalLink?.getAttribute('href')).toBe('https://arii.github.io/devai/versiontruth');

    const ogTypeMeta = document.querySelector('meta[property="og:type"]');
    expect(ogTypeMeta?.getAttribute('content')).toBe('article');

    const ogImageMeta = document.querySelector('meta[property="og:image"]');
    expect(ogImageMeta?.getAttribute('content')).toBe('https://arii.github.io/assets/research/versiontruth.png');

    const twitterCardMeta = document.querySelector('meta[name="twitter:card"]');
    expect(twitterCardMeta?.getAttribute('content')).toBe('summary_large_image');
  });

  it('verifies public/robots.txt rules and Sitemap URL', () => {
    const robotsPath = path.resolve(__dirname, '../../public/robots.txt');
    expect(fs.existsSync(robotsPath)).toBe(true);

    const content = fs.readFileSync(robotsPath, 'utf-8');
    expect(content).toContain('User-agent: *');
    expect(content).toContain('Allow: /');
    expect(content).toContain('Disallow: /artifacts/');
    expect(content).toContain('Sitemap: https://arii.github.io/sitemap.xml');
  });

  it('generates public/sitemap.xml containing all active routes', () => {
    generateSitemap();

    const sitemapPath = path.resolve(__dirname, '../../public/sitemap.xml');
    expect(fs.existsSync(sitemapPath)).toBe(true);

    const xml = fs.readFileSync(sitemapPath, 'utf-8');
    expect(xml).toContain('<?xml version="1.0" encoding="UTF-8"?>');
    expect(xml).toContain('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">');
    expect(xml).toContain('<loc>https://arii.github.io/</loc>');
    expect(xml).toContain('<loc>https://arii.github.io/#/devai</loc>');
    expect(xml).toContain('<loc>https://arii.github.io/#/research</loc>');
    expect(xml).toContain('<loc>https://arii.github.io/#/about</loc>');
    expect(xml).toContain('<loc>https://arii.github.io/#/resume</loc>');
    expect(xml).toContain('duckietown');
    expect(xml).toContain('versiontruth');
  });
});
