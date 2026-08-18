import { ResearchTool } from '@/types/research';

export const OTHER_TOOLS: ResearchTool[] = [
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
    title: 'VersionTruth',
    subtitle: 'The antidote to version hallucinations',
    description: 'The antidote to version hallucinations: real-time ground-truth for npm, Node, and GitHub Actions.',
    category: 'DevAI Tooling',
    status: 'Active',
    tags: ['versions', 'ci', 'dependencies', 'hallucination-mitigation', 'npm', 'node', 'github-actions', 'agents'],
    canonicalPath: '/research/versiontruth',
    sourceUrl: 'https://github.com/arii/tech-dancer/tree/main/api'
  },
  {
    id: 'boop-light-detector',
    taxonomyBucket: 'product',
    title: 'Boop Light Detector',
    description: 'iOS accessibility utility translating ambient light intensity into audible frequencies for visually impaired users (6,000+ downloads).',
    category: 'Accessibility & Mobile',
    status: 'Completed',
    tags: ['iOS', 'Accessibility', 'Audio', 'Mobile']
  },
  {
    id: 'light-therapy-mit',
    taxonomyBucket: 'infrastructure',
    title: 'Light Therapy at MIT',
    description: 'Campus-wide seasonal affective disorder (SAD) wellness initiative funded by the MindHandHeart Innovation Fund.',
    category: 'Community Health & Wellness',
    status: 'Completed',
    tags: ['MindHandHeart', 'Community', 'Wellness', 'MIT']
  },
  {
    id: 'leac-monitoring-software',
    taxonomyBucket: 'infrastructure',
    title: 'Lab Energy Assessment Center (LEAC) Monitoring Software',
    description: 'Network monitoring software and energy audit infrastructure for fume hood efficiency (MIT Green Labs Innovation Award).',
    category: 'Sustainability & Energy',
    status: 'Completed',
    tags: ['Sustainability', 'Hardware', 'Energy Audit', 'MIT Green Labs']
  },
  {
    id: 'robocon-mit',
    taxonomyBucket: 'infrastructure',
    title: 'RoboCon MIT',
    description: 'Cross-departmental robotics research conference organization and web platform.',
    category: 'Robotics Community',
    status: 'Completed',
    tags: ['Robotics', 'Conference', 'Web Platform', 'MIT']
  },
  {
    id: 'cad-cam-dental-workflow',
    taxonomyBucket: 'product',
    title: 'CAD/CAM Robotic Dental Crowning Workflow',
    description: 'Robotic UI and verified experimental workflows for autonomous dental crowning.',
    category: 'Medical Robotics',
    status: 'Completed',
    tags: ['Robotics', 'Medical UI', 'CAD/CAM', 'Bionics Lab UCSC']
  }
];
