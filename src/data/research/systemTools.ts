import { ResearchTool } from '@/types/research';

export const systemTools: ResearchTool[] = [
  {
    id: 'gitops-pr-reviewer',
    taxonomyBucket: 'infrastructure',
    title: 'Boomtick DevAI PR Reviewer & MCP Architecture',
    subtitle: 'Automated PR Auditing & Dual-Layer Harness',
    description: 'I engineered an LLM-powered PR auditing pipeline and dual-layer harness combining boomtick-mcp for agentic tool calls and td-cli for deterministic execution and GitHub Actions automation.',
    category: 'DevAI System',
    status: 'Active',
    tags: ['GitHub Actions', 'MCP', 'CLI', 'Gemini', 'DevAI', 'PR automation'],
    canonicalPath: '/research/gitops-pr-reviewer',
    sourceUrl: 'https://github.com/arii/boomtick',
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
    description: 'Traces code changes through import graphs to execute targeted Playwright visual validation, catching layout shifts from AI-generated code and cutting screenshot volume by up to 90%.',
    category: 'DevAI System',
    status: 'Active',
    tags: ['Playwright', 'CI/CD', 'UX Audit', 'Dependency graph', 'Pixelmatch'],
    canonicalPath: '/research/deployment-impact-analyzer',
    sourceUrl: 'https://github.com/arii/boomtick',
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
    inDevMessage: { highlight: '⚠ Hackathon submission (NandaHack, 2026)', rest: '— not yet in production' },
    taxonomyBucket: 'infrastructure',
    title: 'VersionTruth: Eliminating Version Hallucinations in Agentic CI',
    subtitle: 'The antidote to version hallucinations',
    description: 'I created a tool that provides real-time ground-truth for npm, Node, and GitHub Actions, built as a live agent skill for NandaHack.',
    category: 'DevAI Tooling',
    status: 'Active',
    tags: ['Versions', 'CI', 'Dependencies', 'Hallucination-mitigation', 'npm', 'Node', 'GitHub Actions', 'Agents'],
    canonicalPath: '/research/versiontruth',
    sourceUrl: 'https://github.com/arii/tech-dancer/tree/main/api'
  }
];
