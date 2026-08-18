import { ResearchTool } from '@/types/research';

export const flagshipTools: ResearchTool[] = [
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
    id: 'phd-thesis',
    taxonomyBucket: 'product',
    title: 'Reliable Robotic Manipulation',
    subtitle: 'MIT CSAIL PH.D. THESIS',
    description: 'Conformant planning and belief state uncertainty funneling for PR2 robotic manipulation. Designed mechanical fixtures and action noise models that elevated complex assembly reliability from 1.9% to 80.7% without sensor feedback.',
    category: 'Robotics & AI',
    status: 'Completed (2019)',
    tags: ['Robotics', 'Belief State', 'Conformant Planning', 'TAMP', 'PR2'],
    isFlagship: true,
    image: 'assets/research/phd-thesis.svg',
    imageAlt: 'Visualization of PR2 robotic manipulation, belief state probability distribution ellipses, and conformant assembly reliability gains',
    externalUrl: 'https://dspace.mit.edu/handle/1721.1/122822',
    externalLinkDisplayLabel: 'MIT DSpace Thesis',
    sourceUrl: 'https://scholar.google.com/citations?user=NM6SfiEAAAAJ&hl=en'
  }
];
