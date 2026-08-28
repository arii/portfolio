import { ResearchTool } from '@/types/research';

export const flagshipTools: ResearchTool[] = [
  {
    id: 'hrm-flagship',
    inDevMessage: { highlight: 'Intended to run locally on your own server.', rest: ' No live site available.' },
    taxonomyBucket: 'product',
    title: 'HRM (Heart Rate Monitor)',
    description: "Real-time Web Bluetooth HR telemetry synchronized across multi-client sessions via WebSockets, featuring dynamic zone calculations, Spotify SDK automation, and workout analytics. Originally prototyped in 2020 for remote training, HRM's v2 rewrite served as the foundational testbed for [RepoAuditor](https://repo-auditor-ai.vercel.app/) and autonomous CI/CD PR review guardrails.",
    category: 'Product Development',
    status: 'Live',
    tags: ['React', 'Web Bluetooth', 'WebSockets', 'Spotify API', 'DevAI Testbed'],
    canonicalPath: '/devai/hrm-architecture',
    externalUrl: 'https://arii.github.io/hrm/',
    externalLinkDisplayLabel: 'Live Demo',
    sourceUrl: 'https://github.com/arii/hrm',
    isFlagship: true,
    imageAlt: 'Screenshot of the HRM heart rate monitor training dashboard with real-time biometric telemetry and Spotify integration'
  },
  {
    id: 'repo-auditor-ai',
    inDevMessage: { highlight: 'Available now for testing', rest: ' with your own repository.' },
    taxonomyBucket: 'product',
    title: 'RepoAuditor',
    description: 'I engineered a live, open-access agent orchestration platform for automated repository audits and health monitoring. Implemented multi-model PR reviews, custom rule constraints, and autonomous triage workflows accessible to any GitHub developer.',
    category: 'DEVAI TOOLKIT',
    status: 'Live',
    tags: ['DevAI', 'GitHub API', 'Multi-Agent', 'Workflow'],
    externalUrl: 'https://repo-auditor-ai.vercel.app/',
    externalLinkDisplayLabel: 'Live Demo',
    sourceUrl: 'https://github.com/arii/hrm-project-management',
    isFlagship: true,
    imageAlt: 'Screenshot of the RepoAuditor workflow console displaying multi-repo pull request audit findings and issue prioritization'
  },
  {
    id: 'boomtick-blog',
    inDevMessage: { highlight: 'RAG + LLM tooling in active development.', rest: ' This site is the production environment where I am building and validating those pipelines.' },
    taxonomyBucket: 'product',
    title: 'BoomTick.blog',
    subtitle: 'LIVE DEVELOPMENT ENVIRONMENT',
    description: 'I built a West Coast Swing community platform and active testbed for RAG pipelines and LLM-assisted content workflows currently in development. Includes SEO-optimized publishing, analytics, and experiments with Printful API integration for automated merch listing generation.',
    category: 'Product development',
    status: 'In development',
    tags: ['Next.js', 'LLM workflows', 'SEO'],
    externalUrl: 'https://boomtick.blog',
    externalLinkDisplayLabel: 'Live Demo',
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
    description: 'I developed a conformant planning approach to reliable robot manipulation under severe sensing and control uncertainty. Combines fixture-augmented plan optimization and physics-driven belief state transitions to increase assembly reliability from 1.9% to 80.7% on a PR2 robot.',
    category: 'Robotics & AI',
    status: 'Completed (2019)',
    tags: ['PR2', 'Conformant planning', 'Belief state', 'Manipulation', 'MIT CSAIL'],
    isFlagship: true,
    canonicalPath: '/research/conformant-planning-manipulation',
    image: '/assets/research/phd/icra_presentation.gif',
    imageAlt: 'PR2 robot executing conformant planning manipulation and reliable block alignment during ICRA presentation',
    externalUrl: 'https://dspace.mit.edu/entities/publication/d489a172-efbf-4e35-b81c-04e4acf3d24d',
    externalLinkDisplayLabel: 'MIT DSpace Thesis'
  },
  {
    id: 'masters-thesis',
    taxonomyBucket: 'product',
    title: 'Learning a Strategy for Whole-Arm Grasping',
    subtitle: 'MIT S.M. THESIS — CSAIL',
    description: 'I investigated reinforcement learning policies for bimanual and whole-arm grasping of bulky, irregular objects under real-world physical uncertainty. I formulated contact-rich control strategies that use compliant arm surfaces and multi-modal feedback to stabilize grasping without prior geometric part models.',
    category: 'Robotics & AI',
    status: 'Completed (2014)',
    tags: ['Whole-arm grasping', 'Bimanual manipulation', 'Reinforcement learning', 'Sensorimotor control', 'Tactile feedback', 'MIT CSAIL'],
    isFlagship: true,
    image: '/assets/research/masters-thesis/pr2_grasp_3.gif',
    imageAlt: 'PR2 robot executing whole-arm contact and grasping strategy on irregular objects',
    canonicalPath: '/research/masters-thesis',
    externalUrl: 'https://dspace.mit.edu/entities/publication/ead0c10d-3401-46a1-bcc5-42f5a56fe0b8',
    externalLinkDisplayLabel: 'MIT DSpace Thesis'
  }
];
