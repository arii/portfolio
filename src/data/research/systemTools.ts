import { ResearchTool } from '@/types/research';

export const systemTools: ResearchTool[] = [
  {
    id: 'gitops-pr-reviewer',
    taxonomyBucket: 'infrastructure',
    title: 'GitOps Code Review Agent',
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
    description: 'Automated visual regression testing using Playwright and pixelmatch to capture screenshot diffs and score visual severity.',
    category: 'Perception Debugging',
    status: 'Active',
    tags: ['Playwright', 'Pixelmatch', 'Screenshot Diff', 'CI/CD'],
    canonicalPath: '/research/ux-auditor',
    sourceUrl: 'https://github.com/arii/tech-dancer/tree/main/dev-tools',
    parentFlagship: {
      id: 'deployment-impact-analyzer',
      title: 'Blast-Radius Analyzer'
    }
  },
  {
    id: 'ai-experiments',
    taxonomyBucket: 'infrastructure',
    title: 'AI Experiments (In Progress)',
    subtitle: 'Scraper, Ecommerce & Content Generation Pipelines',
    description: 'A consolidated collection of active AI experiments and automated routines: WCS event telemetry ingestion ETL, Printful API storefront sync, and RAG-driven AI blog drafting.',
    category: 'AI Experiments (In Progress)',
    status: 'In Progress',
    tags: ['ETL', 'WCS Scraper', 'Printful API', 'LLM', 'RAG', 'Automation'],
    canonicalPath: '/research/ai-experiments',
    sourceUrl: 'https://github.com/arii/tech-dancer'
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
