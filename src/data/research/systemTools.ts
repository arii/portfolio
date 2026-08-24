import { ResearchTool } from '@/types/research';

export const systemTools: ResearchTool[] = [
  {
    id: 'gitops-pr-reviewer',
    taxonomyBucket: 'infrastructure',
    title: 'GitHub Actions LLM Code Review Automated',
    subtitle: 'Automated PR Auditing',
    description: 'LLM-powered PR auditing pipeline that performs automated review and structured feedback on pull requests.',
    category: 'DevAI System',
    status: 'Active',
    tags: ['GitHub Actions', 'LLM', 'PR Automation'],
    canonicalPath: '/research/gitops-pr-reviewer',
    sourceUrl: 'https://github.com/arii/tech-dancer/tree/main/dev-tools',
    parentFlagship: {
      id: 'repo-auditor-ai',
      title: 'RepoAuditor'
    }
  },
  {
    id: 'deployment-impact-analyzer',
    taxonomyBucket: 'infrastructure',
    title: 'Visual Impact / UX Audit',
    subtitle: 'VISUAL IMPACT ANALYSIS PIPELINE',
    description: 'CI pipeline that determines which pages are visually affected by a pull request. Uses dependency-cruiser to trace changed files through the import graph, then captures Playwright screenshots of affected routes, runs pixelmatch pixel diffs, crops changed regions, and generates a deployment review report with severity scores.',
    category: 'DevAI System',
    status: 'Active',
    tags: ['Playwright', 'Pixelmatch', 'Dependency Graph', 'CI/CD'],
    canonicalPath: '/research/deployment-impact-analyzer',
    sourceUrl: 'https://github.com/arii/tech-dancer/tree/main/dev-tools',
    isFlagship: true
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
    canonicalPath: '/research/wcs-scraper'
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
    title: 'Version Truth & Hackathons Submission',
    subtitle: 'The antidote to version hallucinations',
    description: 'The antidote to version hallucinations: real-time ground-truth for npm, Node, and GitHub Actions, built as a live agent skill for NandaHack.',
    category: 'DevAI Tooling',
    status: 'Active',
    tags: ['versions', 'ci', 'dependencies', 'hallucination-mitigation', 'npm', 'node', 'github-actions', 'agents'],
    canonicalPath: '/research/versiontruth',
    sourceUrl: 'https://github.com/arii/tech-dancer/tree/main/api'
  }
];
