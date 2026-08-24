export * from './researchProjects';

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'research' | 'devai';
  tags: string[];
  description: string;
  date: string;
  readTime?: string;
  status?: 'Completed' | 'In Progress';
  metrics?: string;
  imageAlt?: string;
  imageUrl?: string;
}

export const portfolioItems: PortfolioItem[] = [
  // --- RESEARCH ITEMS ---
  {
    id: 'leac-monitoring',
    title: 'Lab Energy Assessment Center (LEAC) Monitoring Software',
    category: 'research',
    tags: ['Sustainability', 'Hardware', 'Energy Audit', 'MIT Green Labs', 'Software'],
    description: 'Lead Technology Developer creating network monitoring software and energy audit infrastructure to analyze lab energy consumption in fume hoods (MIT Green Labs Innovation Award).',
    date: '2017-05-15',
    readTime: '5 min read',
    status: 'Completed',
    imageAlt: 'LEAC server network monitoring interface'
  },
  {
    id: 'light-therapy-mit',
    title: 'Light Therapy at MIT',
    category: 'research',
    tags: ['MindHandHeart', 'Community', 'Wellness', 'MIT'],
    description: 'Campus-wide seasonal affective disorder (SAD) wellness initiative funded by the MindHandHeart Innovation Fund, providing ambient light evaluation and accessible therapy installations.',
    date: '2016-11-12',
    readTime: '5 min read',
    status: 'Completed',
    imageAlt: 'Light therapy lamps and installation setup at MIT'
  },
  {
    id: 'boop-light-detector',
    title: 'Boop Light Detector App',
    category: 'research',
    tags: ['iOS', 'Accessibility', 'Audio', 'Mobile', 'Software'],
    description: 'iOS accessibility utility translating ambient light intensity into audible frequencies for visually impaired users (6,000+ downloads). Detects light levels from daylight to router indicators.',
    date: '2016-08-10',
    readTime: '6 min read',
    status: 'Completed',
    metrics: '6,000+ Downloads',
    imageAlt: 'User testing the Boop Light Detector mobile app'
  },
  // --- DEVAI ITEMS ---
  {
    id: 'hrm-flagship',
    title: 'Human-Robot Mutualism (PhD Thesis)',
    category: 'devai',
    tags: ['PhD Thesis', 'MIT CSAIL', 'Belief States', 'Manipulation'],
    description: 'Conformant planning and bimanual dynamic manipulation framework.',
    date: '2021-05-20',
    status: 'Completed'
  },
  {
    id: 'repo-auditor-ai',
    title: 'RepoAuditor AI',
    category: 'devai',
    tags: ['DevAI', 'LLM', 'GitHub Actions', 'Code Review'],
    description: 'Automated PR auditing pipeline using structured LLM feedback.',
    date: '2024-01-10',
    status: 'In Progress'
  },
  {
    id: 'boomtick-blog',
    title: 'BoomTick Blog & Agentic Engine',
    category: 'devai',
    tags: ['DevAI', 'RAG', 'Content Pipeline', 'Agentic Workflows'],
    description: 'Autonomous content drafting and RAG-augmented technical blog generation engine.',
    date: '2024-03-01',
    status: 'In Progress'
  },
  {
    id: 'deployment-impact-analyzer',
    title: 'Blast-Radius Analyzer',
    category: 'devai',
    tags: ['Playwright', 'Pixelmatch', 'CI/CD', 'Dependency Graph'],
    description: 'CI pipeline determining visual impact of code changes on routes.',
    date: '2024-02-15',
    status: 'In Progress'
  }
];

export interface FeaturedCardItem {
  id: string;
  title: string;
  description: string;
  ctaText: string;
  href: string;
  badge?: string;
}

export const FEATURED_CARDS: FeaturedCardItem[] = [
  {
    id: 'devai-products',
    title: "Products built with DevAI",
    description: "Live full-stack consumer apps and platforms built with autonomous agent workflows.",
    ctaText: "View Products",
    href: "/devai",
  },
  {
    id: 'devai-tools',
    title: "DevAI Orchestration",
    description: "How I build: Engineering multi-agent workflows, automated code-auditing guardrails, and agentic CI/CD pipelines to enforce production standards.",
    ctaText: "Read Articles",
    href: "/devai#articles",
  },
  {
    id: 'robotics-research',
    title: "Robotics Research",
    description: "Research and publications spanning robotics, motion planning, autonomy, and real-world systems.",
    ctaText: "Read Research",
    href: "/research",
  },
];
