import { describe, it, expect } from 'vitest';
import React from 'react';
import { render } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import SEO from '@/components/SEO';
import fs from 'node:fs';
import path from 'node:path';
import { generateSitemap } from '../../scripts/generate-sitemap.js';
import { getPersonAndProfileSchema, getServiceSchema, getSoftwareSchema, getTechArticleSchema } from '@/utils/schema';

describe('SEO Component & Search Configuration', () => {
  it('renders title, description, canonical link, and social tags via Helmet', async () => {
    const testJsonLd = getPersonAndProfileSchema('/devai/versiontruth');

    render(
      <HelmetProvider>
        <SEO
          title="Custom Page Title"
          description="Explore custom page description for testing technical SEO metadata compliance across the portfolio framework."
          canonicalUrl="/devai/versiontruth"
          ogType="article"
          ogImage="/assets/research/versiontruth.png"
          jsonLd={testJsonLd}
        />
      </HelmetProvider>
    );

    expect(document.title).toBe('Custom Page Title | Ariel Anders, PhD');

    const descMeta = document.querySelector('meta[name="description"]');
    expect(descMeta?.getAttribute('content')).toContain('Explore custom page description');

    const canonicalLink = document.querySelector('link[rel="canonical"]');
    expect(canonicalLink?.getAttribute('href')).toBe('https://arii.github.io/devai/versiontruth');

    const ogTypeMeta = document.querySelector('meta[property="og:type"]');
    expect(ogTypeMeta?.getAttribute('content')).toBe('article');

    const ogImageMeta = document.querySelector('meta[property="og:image"]');
    expect(ogImageMeta?.getAttribute('content')).toBe('https://arii.github.io/assets/research/versiontruth.png');

    const twitterCardMeta = document.querySelector('meta[name="twitter:card"]');
    expect(twitterCardMeta?.getAttribute('content')).toBe('summary_large_image');

    const jsonLdScript = document.querySelector('script[type="application/ld+json"]');
    expect(jsonLdScript).not.toBeNull();
    expect(jsonLdScript?.textContent).toContain('"@type":"ProfilePage"');
    expect(jsonLdScript?.textContent).toContain('"name":"Ariel Anders, PhD"');
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

  it('generates clean public/sitemap.xml containing active canonical routes without hashes or deprecated tags', () => {
    generateSitemap();

    const sitemapPath = path.resolve(__dirname, '../../public/sitemap.xml');
    expect(fs.existsSync(sitemapPath)).toBe(true);

    const xml = fs.readFileSync(sitemapPath, 'utf-8');
    expect(xml).toContain('<?xml version="1.0" encoding="UTF-8"?>');
    expect(xml).toContain('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">');
    expect(xml).toContain('<loc>https://arii.github.io/</loc>');
    expect(xml).toContain('<loc>https://arii.github.io/devai</loc>');
    expect(xml).toContain('<loc>https://arii.github.io/research</loc>');
    expect(xml).toContain('<loc>https://arii.github.io/about</loc>');
    expect(xml).toContain('<loc>https://arii.github.io/resume</loc>');
    expect(xml).not.toContain('<priority>');
    expect(xml).not.toContain('<changefreq>');
    expect(xml).not.toContain('/#/devai');
  });

  it('validates JSON-LD schema generators for Google Search Gallery standards', () => {
    const profile = getPersonAndProfileSchema('/about');
    expect(profile['@type']).toBe('ProfilePage');
    expect(profile.mainEntity.name).toBe('Ariel Anders, PhD');
    expect(profile.mainEntity.jobTitle).toBe('Roboticist & AI Engineer');
    expect(profile.mainEntity.alumniOf.name).toBe('Massachusetts Institute of Technology (MIT)');
    expect(profile.mainEntity.knowsAbout).toContain('Autonomous Systems');

    const service = getServiceSchema();
    expect(service['@type']).toBe('Service');
    expect(service.provider.name).toBe('Ariel Anders, PhD');
    expect(service.hasOfferCatalog.itemListElement).toHaveLength(3);

    const software = getSoftwareSchema({
      name: 'GitOps PR Reviewer',
      description: 'Autonomous AI-powered pull request reviewer.',
      codeRepository: 'https://github.com/arii/portfolio',
    });
    expect(software['@type']).toBe('SoftwareSourceCode');
    expect(software.name).toBe('GitOps PR Reviewer');
    expect(software.author.name).toBe('Ariel Anders, PhD');

    const article = getTechArticleSchema({
      headline: 'Conformant Planning and Manipulation',
      description: 'PhD research on planning under uncertainty.',
      canonicalPath: '/research/conformant-planning-manipulation',
    });
    expect(article['@type']).toBe('TechArticle');
    expect(article.proficiencyLevel).toBe('Expert');
    expect(article.articleSection).toBe('Robotics & AI');
    expect(article.author.name).toBe('Ariel Anders, PhD');
  });
});
