import { ResearchTool } from '@/types/research';

export const RESEARCH_TOOLS: ResearchTool[] = [
  {
    id: 'hrm-flagship',
    inDevMessage: { highlight: 'Intended to run locally on your own server.', rest: ' No live site available.' },
    taxonomyBucket: 'product',
    title: 'HRM (Heart Rate Monitor)',
    description: 'Web Bluetooth heart-rate telemetry synced across multiple clients via persistent WebSocket server, with Spotify API integration and a synchronized timer. Built end-to-end as a DevAI-assisted engineering project.',
    category: 'Product Development',
    status: 'Active',
    tags: ['React', 'Web Bluetooth', 'Spotify API', 'Product'],
    sourceUrl: 'https://github.com/arii/hrm',
    isFlagship: true,
    imageAlt: 'Screenshot of the HRM heart rate monitor training dashboard with real-time biometric telemetry and Spotify integration'
  },
  {
    id: 'repo-auditor-ai',
    inDevMessage: { highlight: 'Available now for testing', rest: ' with your own repository.' },
    taxonomyBucket: 'product',
    title: 'RepoAuditor',
    description: 'Automated GitHub PR auditing built on a Gemini-driven CI/CD pipeline with Jules autonomous coding agent integration. An independent project demonstrating agentic engineering workflow — not prior paid work.',
    category: 'DevAI Tooling',
    status: 'Active',
    tags: ['DevAI', 'GitHub API', 'Multi-Agent', 'Workflow'],
    externalUrl: 'https://repo-auditor-ai.vercel.app/',
    externalLinkDisplayLabel: 'View Details',
    sourceUrl: 'https://github.com/arii/hrm-project-management',
    isFlagship: true,
    imageAlt: 'Screenshot of the RepoAuditor workflow console displaying multi-repo pull request audit findings and issue prioritization'
  },
  {
    id: 'boomtick-blog',
    inDevMessage: { highlight: 'RAG + LLM tooling in active development.', rest: ' This site is the production environment where those pipelines are being built and validated.' },
    taxonomyBucket: 'product',
    title: 'BoomTick.blog',
    subtitle: 'LIVE DEVELOPMENT ENVIRONMENT',
    description: 'West Coast Swing community platform and active testbed for RAG pipelines and LLM-assisted content workflows currently in development. Includes SEO-optimized publishing, analytics, and Printful API integration for automated merch listing generation.',
    category: 'Product development',
    status: 'Active dev',
    tags: ['Next.js', 'LLM Workflows', 'SEO'],
    externalUrl: 'https://boomtick.blog',
    externalLinkDisplayLabel: 'View Details',
    sourceUrl: 'https://github.com/arii/tech-dancer',
    isFlagship: true,
    customPreview: {
      logo: { prefix: 'boom', accent: 'tick', suffix: '.blog' },
      headline: [{ text: 'Pack smart.' }, { text: 'Dance more.', accent: 'Dance more.' }],
      tagline: "The west coast swing dancer's guide to gear, travel, and better dance weekends."
    }
  },
  {
    id: 'boop-light-detector',
    taxonomyBucket: 'product',
    title: 'Boop Light Detector',
    subtitle: 'ACCESSIBILITY IOS APP',
    description: 'iOS application detecting ambient light levels with real-time sound pitch interpretation designed for blind and visually impaired users (over 6,000+ downloads).',
    category: 'Mobile & Accessibility',
    status: 'Published',
    tags: ['iOS', 'Swift', 'Signal Processing', 'Accessibility'],
    externalUrl: 'http://arii.github.io/boop/',
    externalLinkDisplayLabel: 'Visit Project Page',
    isFlagship: true
  },
  {
    id: 'gitops-pr-reviewer',
    taxonomyBucket: 'infrastructure',
    title: 'GitOps Code Review Agent',
    subtitle: 'Automated PR Auditing',
    description: 'LLM-powered PR auditing using GitHub Actions. Reviews code style and pattern consistency on every pull request. The foundation for the RAG-grounded review pipeline being built into RepoAuditor.',
    category: 'DevAI System',
    status: 'Active',
    tags: ['GitHub Actions', 'LLM', 'PR Automation'],
    canonicalPath: '/research/gitops-pr-reviewer',
    sourceUrl: 'https://github.com/arii/tech-dancer/tree/main/dev-tools'
  },
  {
    id: 'deployment-impact-analyzer',
    taxonomyBucket: 'infrastructure',
    title: 'Blast-Radius Analyzer',
    subtitle: 'VISUAL IMPACT ANALYSIS PIPELINE',
    description: 'CI pipeline that determines which pages are visually affected by a pull request. Uses dependency-cruiser to trace changed files through the import graph, then captures Playwright screenshots of affected routes, runs pixelmatch pixel diffs, crops changed regions, and generates a deployment review report with severity scores. Agent integration in progress.',
    category: 'DevAI System',
    status: 'Active',
    tags: ['Playwright', 'Pixelmatch', 'Dependency Graph', 'CI/CD'],
    canonicalPath: '/research/deployment-impact-analyzer',
    sourceUrl: 'https://github.com/arii/tech-dancer/tree/main/dev-tools',
    isFlagship: true
  },
  {
    id: 'ux-auditor',
    taxonomyBucket: 'infrastructure',
    title: 'Visual Regression & UX Auditor',
    subtitle: 'PLAYWRIGHT VISUAL REGRESSION',
    description: 'Automated visual regression testing using Playwright and pixelmatch. Captures full-page screenshots before and after a PR, computes pixel-level diffs, crops the bounding box of changed regions, and scores severity by percentage of changed pixels. Part of the Blast-Radius Analyzer pipeline.',
    category: 'Perception Debugging',
    status: 'Active',
    tags: ['Playwright', 'Pixelmatch', 'Screenshot Diff', 'CI/CD'],
    canonicalPath: '/research/ux-auditor',
    sourceUrl: 'https://github.com/arii/tech-dancer/tree/main/dev-tools'
  },
  {
    id: 'wcs-scraper',
    taxonomyBucket: 'infrastructure',
    title: 'High-Scale Telemetry Ingestion ETL',
    subtitle: 'Scraper-to-Parquet Pipeline',
    description: 'A data engineering showcase for Dev AI systems, transforming raw competitive dance records into compressed Parquet formats. This enables efficient RAG indexing and complex analytical queries.',
    category: 'Data Engineering',
    status: 'Active',
    tags: ['ETL', 'Apache Parquet', 'Scraping', 'Data Pipelines'],
    canonicalPath: '/research/wcs-scraper-initial-sync'
  },
  {
    id: 'blog-drafter',
    taxonomyBucket: 'infrastructure',
    title: 'AI Blog Drafter',
    subtitle: 'Human-in-the-Loop Content Engine',
    description: 'A prompt engineering platform designed for brand-consistent content generation. It combines RAG over existing blog posts with a human-in-the-loop workflow to maintain editorial quality.',
    category: 'Content Tools',
    status: 'Active',
    tags: ['LLM', 'Content Generation', 'Productivity'],
    canonicalPath: '/research/blog-drafter'
  },
  {
    id: 'ecommerce-automation',
    taxonomyBucket: 'infrastructure',
    title: 'Ecommerce Automation Experiments',
    subtitle: 'Printful & Merch Pipeline',
    description: 'Automated merch operations including programmatic design generation, Printful API storefront sync, and incoming Amazon affiliate integration workflows.',
    category: 'Business Automation',
    status: 'In Progress',
    tags: ['Printful API', 'Image Gen', 'Amazon Sync', 'Workflow'],
    canonicalPath: '/research/ecommerce-automation'
  },
  {
    id: 'versiontruth',
    taxonomyBucket: 'infrastructure',
    title: 'VersionTruth',
    subtitle: 'The antidote to version hallucinations',
    description: 'The antidote to version hallucinations: real-time ground-truth for npm, Node, and GitHub Actions.',
    category: 'DevAI Tooling',
    status: 'Active',
    tags: ['versions', 'ci', 'dependencies', 'hallucination-mitigation', 'npm', 'node', 'github-actions', 'agents'],
    canonicalPath: '/research/versiontruth',
    sourceUrl: 'https://github.com/arii/tech-dancer/tree/main/api'
  }
];
