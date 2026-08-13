import { ResearchPost } from './research.types';

export const RESEARCH_POSTS_PART2: ResearchPost[] = [
  {
    id: 'deployment-impact-analyzer',
    slug: 'deployment-impact-analyzer',
    title: 'Deployment Impact Analyzer',
    subtitle: 'Determining affected routes & visual changes per PR',
    date: '2026-06-05',
    readingTime: '6 min read',
    tags: ['Playwright', 'Pixelmatch', 'Dependency Graph', 'CI/CD'],
    category: 'DevAI System',
    summary: 'Continuous Integration pipeline that determines which routes and visual components are affected by a pull request.',
    sourceUrl: 'https://github.com/arii/deployment-impact-analyzer',
    customPreview: {
      logo: { prefix: 'Impact', accent: 'Analyzer', suffix: '' },
      headline: [
        { text: 'Isolate UI regression ' },
        { text: 'using pixelmatch & graph analytics', accent: true }
      ],
      tagline: 'Build-time import tree resolution & Playwright visual diffing.'
    },
    content: `
# Deployment Impact Analyzer

Continuous Integration pipeline that determines which routes and visual components are affected by a pull request.

## Deep-Dive Analysis

Tracing change propagation through React applications is traditionally slow or incomplete. The Deployment Impact Analyzer automates this by constructing a local import graph:

\`\`\`bash
dependency-cruiser --output-type json src/
\`\`\`

By mapping modified source files to individual routes, the CI runner targets only affected endpoints. It fires up headless Playwright instances to capture post-change screenshots, compares them to baseline images via pixelmatch, and scores layout regression automatically.
`.trim()
  },
  {
    id: 'wcs-scraper',
    slug: 'wcs-scraper',
    title: 'High-Scale Telemetry Ingestion ETL',
    subtitle: 'Transforming raw records into compressed Parquet formats',
    date: '2026-05-12',
    readingTime: '5 min read',
    tags: ['ETL', 'Apache Parquet', 'Scraping', 'Data Pipelines'],
    category: 'Data Engineering',
    status: 'stable',
    summary: 'A data engineering showcase for DevAI systems, transforming raw competitive records into compressed Parquet formats.',
    content: `
# High-Scale Telemetry Ingestion ETL

A data engineering showcase for DevAI systems, transforming raw competitive records into compressed Parquet formats.

## Architecture

This pipeline automates raw competitive record collection from various historical repositories, performs deduplication, and formats data directly to Parquet.

This enables super-fast analytical RAG indexing and complex analytics queries over tens of thousands of event records with minimal overhead.
`.trim()
  },
  {
    id: 'blog-drafter',
    slug: 'blog-drafter',
    title: 'AI Blog Drafter',
    subtitle: 'A human-in-the-loop editorial platform designed for brand consistency',
    date: '2026-03-22',
    readingTime: '4 min read',
    tags: ['LLM', 'Content Generation', 'Productivity'],
    category: 'Content Tools',
    status: 'stable',
    summary: 'A human-in-the-loop editorial platform designed for brand-consistent content generation.',
    content: `
# AI Blog Drafter

A human-in-the-loop editorial platform designed for brand-consistent content generation.

## Key Focus Areas

- **RAG-based Ingestion:** Indexes historical articles to extract distinct tone, vocabulary, and formatting guidelines.
- **Dynamic Content Scaffolding:** Drafts complete skeletons with proper section headings and initial data hooks.
- **Editorial Loop:** Provides an interactive editing experience for final human polish.
`.trim()
  },
  {
    id: 'ecommerce-automation',
    slug: 'ecommerce-automation',
    title: 'Ecommerce Automation Experiments',
    subtitle: 'Programmatic storefront sync and incoming affiliate integrations',
    date: '2026-02-15',
    readingTime: '3 min read',
    tags: ['Printful API', 'Image Gen', 'Amazon Sync', 'Workflow'],
    category: 'Business Automation',
    status: 'experimental',
    summary: 'Automated merch operations including programmatic design generation, Printful API storefront sync, and incoming Amazon affiliate integration workflows.',
    content: `
# Ecommerce Automation Experiments

Automated merch operations including programmatic design generation, Printful API storefront sync, and incoming Amazon affiliate integration workflows.

## Objectives

- **Storefront Sync:** Synchronizes custom designs directly to ecommerce listings without manual data entry.
- **Affiliate Integrations:** Automatically matches blog content recommendations to Amazon affiliate targets.
`.trim()
  }
];
