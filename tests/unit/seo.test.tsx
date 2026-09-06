import { describe, it, expect } from 'vitest';
import React from 'react';
import { render } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import SEO from '@/components/SEO';
import fs from 'node:fs';
import path from 'node:path';
import { generateSitemap } from '../../scripts/generate-sitemap.js';
import {
  getPersonAndProfileSchema,
  getServiceSchema,
  getSoftwareSchema,
  getTechArticleSchema,
  getScholarlyArticleSchema,
  getBreadcrumbSchema,
  getOrganizationSchema,
  getSiteNavigationSchema,
  getFAQSchema,
  getVideoObjectSchema,
} from '@/utils/schema';

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
    expect(jsonLdScript?.textContent).toContain('"@graph"');
    expect(jsonLdScript?.textContent).toContain('"name":"Ariel Anders, PhD"');
  });

  it('verifies public/robots.txt, public/llms.txt, and public/llms-full.txt compliance', () => {
    const robotsPath = path.resolve(__dirname, '../../public/robots.txt');
    expect(fs.existsSync(robotsPath)).toBe(true);

    const robotsContent = fs.readFileSync(robotsPath, 'utf-8');
    expect(robotsContent).toContain('User-agent: *');
    expect(robotsContent).toContain('Allow: /');
    expect(robotsContent).toContain('Sitemap: https://arii.github.io/sitemap.xml');

    const llmsPath = path.resolve(__dirname, '../../public/llms.txt');
    expect(fs.existsSync(llmsPath)).toBe(true);

    const llmsContent = fs.readFileSync(llmsPath, 'utf-8');
    expect(llmsContent).toMatch(/^# Ariel Anders, PhD/m);
    expect(llmsContent).toMatch(/^> /m);
    expect(llmsContent).toContain('## Core Pages');
    expect(llmsContent).toContain('## Agentic DevAI & Infrastructure');
    expect(llmsContent).toContain('## Robotics & AI Research');
    expect(llmsContent).toContain('## External Links & Profiles');
    expect(llmsContent).toContain('## Optional');
    expect(llmsContent).toContain('- [Home](https://arii.github.io/):');
    expect(llmsContent).toContain('https://arii.github.io/llms-full.txt');

    const llmsFullPath = path.resolve(__dirname, '../../public/llms-full.txt');
    expect(fs.existsSync(llmsFullPath)).toBe(true);

    const llmsFullContent = fs.readFileSync(llmsFullPath, 'utf-8');
    expect(llmsFullContent).toContain('# Ariel Anders, PhD — Full Portfolio & Engineering Documentation');
    expect(llmsFullContent).toContain('## Document: Automating PR Reviews with GitHub Actions, Gemini, and Boomtick DevAI (gitops-pr-reviewer)');
    expect(llmsFullContent).toContain('## Document: Reliably Arranging Objects: A Conformant Planning Approach to Robot Manipulation (conformant-planning-manipulation)');
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

  it('validates JSON-LD schema generators for Google Search Gallery and Schema.org standards', () => {
    const profile = getPersonAndProfileSchema('/about');
    expect(profile['@graph']).toBeDefined();
    const person = profile['@graph'].find((e: any) => e['@type'] === 'Person');
    expect(person.name).toBe('Ariel Anders, PhD');
    expect(person.jobTitle).toBe('Robotics & AI Consulting Engineer');
    expect(person.email).toBe('anders.ariel@gmail.com');
    expect(person.hasCredential).toHaveLength(2);

    const orgInProfile = profile['@graph'].find((e: any) =>
      Array.isArray(e['@type']) ? e['@type'].includes('ProfessionalService') : e['@type'] === 'ProfessionalService'
    );
    expect(orgInProfile).toBeDefined();
    expect(orgInProfile.name).toBe('Ariel Anders AI & Robotics Consulting');

    const siteNavInProfile = profile['@graph'].filter((e: any) => e['@type'] === 'SiteNavigationElement');
    expect(siteNavInProfile.length).toBeGreaterThanOrEqual(5);

    const service = getServiceSchema();
    expect(service['@type']).toBe('Service');
    expect(service.name).toBe('Robotics & Multi-Agent AI Consulting');
    expect(service.hasOfferCatalog.itemListElement).toHaveLength(2);

    const org = getOrganizationSchema();
    expect(org['@type']).toEqual(['ProfessionalService', 'Organization']);
    expect(org.name).toBe('Ariel Anders AI & Robotics Consulting');
    expect(org.logo['@type']).toBe('ImageObject');
    expect(org.address.addressLocality).toBe('San Francisco');

    const siteNav = getSiteNavigationSchema();
    expect(siteNav).toHaveLength(5);
    expect(siteNav[0].name).toBe('Overview');
    expect(siteNav[0].url).toBe('https://arii.github.io');

    const software = getSoftwareSchema({
      name: 'GitOps PR Reviewer',
      description: 'Autonomous AI-powered pull request reviewer.',
      codeRepository: 'https://github.com/arii/portfolio',
    });
    expect(software['@type']).toBe('SoftwareSourceCode');
    expect(software.name).toBe('GitOps PR Reviewer');
    expect(software.author['@id']).toContain('/about#person');

    const techArticle = getTechArticleSchema({
      headline: 'Multi-Agent Workflows',
      description: 'Multi-agent orchestration.',
      canonicalPath: '/devai/gitops-pr-reviewer',
    });
    expect(techArticle['@type']).toBe('TechArticle');
    expect(techArticle.proficiencyLevel).toBe('Expert');
    expect(techArticle.image['@type']).toBe('ImageObject');
    expect(techArticle.image.width).toBe(1200);

    const scholarlyArticle = getScholarlyArticleSchema({
      headline: 'Conformant Planning and Manipulation',
      abstract: 'PhD research on planning under uncertainty.',
      canonicalPath: '/research/conformant-planning-manipulation',
    });
    expect(scholarlyArticle['@type']).toBe('ScholarlyArticle');
    expect(scholarlyArticle.sameAs).toBe('https://scholar.google.com/citations?user=NM6SfiEAAAAJ&hl=en');
    expect(scholarlyArticle.image['@type']).toBe('ImageObject');

    const breadcrumb = getBreadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Research', path: '/research' },
      { name: 'Conformant Planning', path: '/research/conformant-planning-manipulation' },
    ]);
    expect(breadcrumb['@type']).toBe('BreadcrumbList');
    expect(breadcrumb.itemListElement).toHaveLength(3);
    expect(breadcrumb.itemListElement[0]).toEqual({
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://arii.github.io/',
    });
    expect(breadcrumb.itemListElement[1]).toEqual({
      '@type': 'ListItem',
      position: 2,
      name: 'Research',
      item: 'https://arii.github.io/research',
    });
    expect(breadcrumb.itemListElement[2]).toEqual({
      '@type': 'ListItem',
      position: 3,
      name: 'Conformant Planning',
      item: 'https://arii.github.io/research/conformant-planning-manipulation',
    });

    const faq = getFAQSchema([
      { question: 'What services do you offer?', answer: 'AI and robotics consulting.' },
    ]);
    expect(faq['@type']).toBe('FAQPage');
    expect(faq.mainEntity).toHaveLength(1);
    expect(faq.mainEntity[0].name).toBe('What services do you offer?');

    const video = getVideoObjectSchema({
      name: 'Duckietown Autonomous Driving',
      description: 'Autonomous lane following and obstacle avoidance.',
      contentUrl: 'https://www.youtube.com/watch?v=rPpewHIF2KU',
      embedUrl: 'https://www.youtube.com/embed/rPpewHIF2KU',
    });
    expect(video['@type']).toBe('VideoObject');
    expect(video.name).toBe('Duckietown Autonomous Driving');
    expect(video.embedUrl).toBe('https://www.youtube.com/embed/rPpewHIF2KU');
  });

  it('verifies internal linking strategy targeting https://arii.github.io/about in portfolio articles', () => {
    const researchDir = path.resolve(__dirname, '../../src/content/research');
    const mdFiles = fs.readdirSync(researchDir).filter((file) => file.endsWith('.md'));

    const internalLinks: Array<{ file: string; match: string; anchorText: string }> = [];

    for (const file of mdFiles) {
      const content = fs.readFileSync(path.join(researchDir, file), 'utf-8');
      const regex = /\[([^\]]+)\]\((https:\/\/arii\.github\.io\/about|\/about)\)/g;
      let match: RegExpExecArray | null;
      while ((match = regex.exec(content)) !== null) {
        internalLinks.push({
          file,
          anchorText: match[1],
          match: match[0],
        });
      }
    }

    expect(internalLinks.length).toBeGreaterThan(0);
    const anchorTexts = internalLinks.map((l) => l.anchorText);
    expect(anchorTexts.some((text) => text.includes('consulting'))).toBe(true);
    expect(anchorTexts.some((text) => text.includes('advisory'))).toBe(true);
  });
});
