/**
 * SINGLE SOURCE OF TRUTH & CONTENT OWNERSHIP RULE:
 * - OVERVIEW (this page/data) is the pitch: Philosophy + short teasers (1-2 sentences).
 *   Teaser cards and icon-feature rows must stay short (1-2 sentences) and MUST NEVER
 *   be edited to match full text on Portfolio/Resume/About. If a teaser and its target page
 *   ever share a verbatim sentence, shorten the teaser.
 * - PORTFOLIO is the project catalog (sole owner of project/article full descriptions).
 * - RESUME is the professional record (sole owner of publications, credentials, dissertation abstracts).
 * - ABOUT is the person (narrative bio + credibility lines + outlinks to Portfolio & Resume).
 */

export interface PhilosophyTenet {
  id: string;
  title: string;
  description: string;
}

export interface FocusArea {
  id: string;
  title: string;
  description: string;
  actionText: string;
}

export interface FeatureCallout {
  id: string;
  title: string;
  description: string;
  iconName: 'compass' | 'workflow' | 'server' | 'laptop' | 'cloud';
}

export interface HeroContent {
  brandTitle: string;
  brandRole: string;
  name: string;
  title: string;
  bioParagraphs: string[];
}

export interface HeroData {
  badge?: string;
  name: string;
  title: string;
  subheading?: string;
  bioParagraphs: string[];
}

export const heroContent: HeroContent = {
  brandTitle: 'Ariel Anders Portfolio',
  brandRole: 'Roboticist & Agentic Orchestration Architect',
  name: 'Ariel Anders, PhD',
  title: 'Roboticist & Senior Software Engineer',
  bioParagraphs: [
    'I architect reliable autonomous systems for physical robots and build agentic workflows that autonomously engineer full-stack software.',
    'I am an MIT CSAIL roboticist whose work focuses on building reliable autonomous systems. My research focused on learning physics-based models for planning under uncertainty. I bring deep experience across research and industry, from robot manipulation to social navigation in dynamic indoor environments and autonomous driving.',
    'Over the past year, I’ve built stateful, multi-agent workflows for software development, using AI to engineer feature-rich applications while maintaining code quality and architectural standards, bringing robotics-grade reliability to DevAI.',
  ],
};

// Retain HERO_DATA alias for compatibility if referenced elsewhere
export const HERO_DATA: HeroData = {
  name: heroContent.name,
  title: heroContent.title,
  subheading: heroContent.bioParagraphs[0],
  bioParagraphs: heroContent.bioParagraphs,
};

export const PHILOSOPHY_TENETS: PhilosophyTenet[] = [
  {
    id: 'ai-rigor',
    title: 'AI-Accelerated Rigor',
    description:
      'AI should raise the bar, not lower it. I build agentic CI/CD workflows and automated reviews that enforce architecture guidelines and catch technical debt — accelerating development without compromising rigor.',
  },
  {
    id: 'robot-behavior',
    title: 'Make Robots Behave',
    description:
      'Robots operate in environments that are uncertain and hard to model. I combine learning, planning, and careful system design to make their behavior reliable in the real world.',
  },
];

export const FOCUS_AREAS: FocusArea[] = [
  {
    id: 'devai-products',
    title: "Products built with DevAI",
    description: "Live full-stack consumer apps and platforms built with autonomous agent workflows.",
    actionText: "View Products →",
  },
  {
    id: 'devai-tools',
    title: "Building DevAI Tools",
    description: "Agentic CI/CD workflows, automated code-auditing bots, and RAG-driven infrastructure for modern software engineering",
    actionText: "See How It's Built →",
  },
  {
    id: 'robotics-research',
    title: "Robotics Research & Publications",
    description: "Academic contributions in robotic manipulation, task and motion planning (TAMP) under uncertainty, multi-robot coordination, and robotics education.",
    actionText: "Read Research →",
  },
];

export const FEATURE_CALLOUTS: FeatureCallout[] = [
  {
    id: 'motion-planning',
    title: 'Motion Planning & Autonomy',
    description: 'Behavior trees, conformant planning under uncertainty, real-time obstacle avoidance.',
    iconName: 'compass',
  },
  {
    id: 'devai-workflows',
    title: 'Agentic DevAI',
    description: 'LLM-driven CI/CD, RAG context systems, automated PR review.',
    iconName: 'workflow',
  },
  {
    id: 'production-systems',
    title: 'Production Software',
    description: 'C++/Python robot software engineered for reliability, not just research code.',
    iconName: 'laptop',
  },
  {
    id: 'deployment-edge',
    title: 'Deployment & Edge Infrastructure',
    description: 'Containerized ROS 2 middleware, cloud/IoT pipelines, CI/CD automation.',
    iconName: 'cloud',
  },
];
