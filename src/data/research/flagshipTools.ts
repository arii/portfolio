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
    canonicalPath: '/research/gitops-pr-reviewer',
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
    canonicalPath: '/research/ecommerce-automation',
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
    title: 'Reliably Arranging Objects',
    subtitle: 'MIT CSAIL PH.D. THESIS',
    description: 'Conformant planning approach to reliable robot manipulation under severe sensing and control uncertainty. Combines fixture-augmented plan optimization and physics-driven belief state transitions to elevate assembly reliability from 1.9% to 80.7% on a PR2 robot.',
    category: 'Robotics & AI',
    status: 'Completed (2019)',
    tags: ['PR2', 'Conformant Planning', 'Belief State', 'Manipulation', 'MIT CSAIL'],
    isFlagship: true,
    image: '/assets/research/phd/sixblock.png',
    imageAlt: 'PR2 robot reliably arranging blocks using conformant planning without external sensing feedback',
    canonicalPath: '/research/phd-thesis',
    videoUrl: 'https://www.youtube.com/watch?v=so-9kkQXlxc&list=PLEcASxU_mgVi6kMdElumAUh-gJW4wCOUV',
    externalUrl: 'https://dspace.mit.edu/handle/1721.1/122822',
    externalLinkDisplayLabel: 'MIT DSpace Thesis',
    sourceUrl: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=NM6SfiEAAAAJ&citation_for_view=NM6SfiEAAAAJ:4DMP91E08xMC'
  },
  {
    id: 'masters-thesis',
    taxonomyBucket: 'product',
    title: 'Learning a Strategy for Whole-Arm Grasping',
    subtitle: 'MIT S.M. THESIS — CSAIL',
    description: 'Investigated tactile-driven, sensorimotor reinforcement learning policies for bimanual and whole-arm grasping of bulky, irregular objects under real-world physical uncertainty. Formulated contact-rich control strategies that leverage compliant arm surfaces and multi-modal feedback to stabilize grasping without prior geometric part models.',
    category: 'Robotics & AI',
    status: 'Completed (2014)',
    tags: ['Whole-Arm Grasping', 'Bimanual Manipulation', 'Reinforcement Learning', 'Sensorimotor Control', 'Tactile Feedback', 'MIT CSAIL'],
    isFlagship: true,
    image: '/assets/research/masters-thesis.png',
    imageAlt: 'Robot manipulator executing whole-arm contact and grasping strategy on irregular objects',
    canonicalPath: '/research/masters-thesis',
    externalUrl: 'https://dspace.mit.edu/entities/publication/ead0c10d-3401-46a1-bcc5-42f5a56fe0b8',
    externalLinkDisplayLabel: 'MIT DSpace Thesis'
  }
];
