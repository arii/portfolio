import { ResearchTool } from '@/types/research';

export const systemTools: ResearchTool[] = [
  {
    id: 'gitops-pr-reviewer',
    taxonomyBucket: 'infrastructure',
    title: 'GitHub Actions LLM Code Review Automated',
    subtitle: 'Automated PR Auditing',
    description: 'I developed an LLM-powered PR auditing pipeline that performs automated review and structured feedback on pull requests.',
    category: 'DevAI System',
    status: 'Active',
    tags: ['GitHub Actions', 'LLM', 'PR automation'],
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
    description: 'I built a semantic visual impact analysis pipeline that cuts visual-review screenshots by up to 90% by tracing code changes through the import graph.',
    category: 'DevAI System',
    status: 'Active',
    tags: ['Playwright', 'Pixelmatch', 'Dependency graph', 'CI/CD'],
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
    tags: ['ETL', 'WCS Scraper', 'Printful API', 'LLM', 'RAG', 'Automation'],
    canonicalPath: '/research/ai-experiments'
  },
  {
    id: 'versiontruth',
    taxonomyBucket: 'infrastructure',
    title: 'Version Truth & Hackathons Submission',
    subtitle: 'The antidote to version hallucinations',
    description: 'I created a tool that provides real-time ground-truth for npm, Node, and GitHub Actions, built as a live agent skill for NandaHack.',
    category: 'DevAI Tooling',
    status: 'Active',
    tags: ['Versions', 'CI', 'Dependencies', 'Hallucination-mitigation', 'npm', 'Node', 'GitHub Actions', 'Agents'],
    canonicalPath: '/research/versiontruth',
    sourceUrl: 'https://github.com/arii/tech-dancer/tree/main/api'
  }
];
