import { ResearchTool } from '@/types/research';

export const systemTools: ResearchTool[] = [
  {
    id: 'gitops-pr-reviewer',
    taxonomyBucket: 'infrastructure',
    title: 'Boomtick DevAI PR Reviewer & MCP Architecture',
    subtitle: 'Automated PR Auditing & Dual-Layer Harness',
    description: 'Autonomous LLM-powered PR auditing pipeline and dual-layer harness combining boomtick-mcp for agentic tool calls and td CLI for deterministic execution and GitHub Actions automation.',
    category: 'DevAI System',
    status: 'Active',
    tags: ['GitHub Actions', 'MCP', 'CLI', 'Gemini', 'DevAI', 'PR automation'],
    canonicalPath: '/research/gitops-pr-reviewer/',
    image: '/assets/research/boomtick-devai-tools/boomtick-cli-audit.webp',
    imageAlt: 'Boomtick CLI audit and health check terminal output',
    sourceUrl: 'https://github.com/arii/boomtick',
    parentFlagship: {
      id: 'boomtick',
      title: 'Boomtick'
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
    canonicalPath: '/research/deployment-impact-analyzer/',
    image: '/assets/research/ai-experiments/ux-auditor.webp',
    imageAlt: 'Visual impact analysis and UX audit visual diff comparison console',
    sourceUrl: 'https://github.com/arii/boomtick',
    isFlagship: true
  },
  {
    id: 'ai-experiments',
    taxonomyBucket: 'infrastructure',
    title: 'AI Experiments & RAG Pipelines',
    subtitle: 'WCS Scraper, Ecommerce Automation, and AI Blog Drafter',
    description: 'A collection of custom developer tools, background ETL pipelines, vector-indexed RAG retrieval systems, and automated merchandising workflows.',
    category: 'AI Experiments',
    status: 'In Progress',
    tags: ['ETL', 'WCS Scraper', 'Printful API', 'LLM', 'RAG', 'Automation'],
    canonicalPath: '/research/ai-experiments/',
    image: '/assets/research/ai-experiments/blog-drafter.webp',
    imageAlt: 'AI Blog Drafter prompt generation and contextual vector retrieval interface'
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
    canonicalPath: '/research/versiontruth/',
    sourceUrl: 'https://github.com/arii/tech-dancer/tree/main/api'
  }
];
