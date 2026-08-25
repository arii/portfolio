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
    id: 'ai-experiments',
    taxonomyBucket: 'infrastructure',
    title: 'AI Experiments',
    subtitle: 'WCS Scraper, Ecommerce Automation, and AI Blog Drafter',
    description: 'A collection of custom dev tools, background ETL pipelines, and automated workflows I am currently building.',
    category: 'AI Experiments',
    status: 'In Progress',
    tags: ['ETL', 'WCS Scraper', 'Printful API', 'LLM', 'RAG', 'Automation', 'Visual Testing'],
    canonicalPath: '/research/ai-experiments'
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
