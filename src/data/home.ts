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
    'I build reliable software for robotics and autonomous systems, from motion planning and localization to production infrastructure and AI-assisted development.',
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
      'I build agentic CI/CD workflows and automated code reviews that aggressively catch technical debt—accelerating engineering speed without compromising rigor.',
  },
  {
    id: 'robot-behavior',
    title: 'Make Robots Behave',
    description:
      'I combine machine learning, motion planning, and precise system design to ensure predictable, reliable robotic performance in uncertain environments.',
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
    title: "DevAI Orchestration",
    description: "How I build: Engineering multi-agent workflows, automated code-auditing guardrails, and agentic CI/CD pipelines to enforce production standards.",
    actionText: "Read Articles →",
  },
  {
    id: 'robotics-research',
    title: "Robotics Research",
    description: "Research and publications spanning robotics, motion planning, autonomy, and real-world systems.",
    actionText: "Read Research →",
  },
];

export const FEATURE_CALLOUTS: FeatureCallout[] = [
  {
    id: 'motion-planning',
    title: 'Motion Planning & Autonomy',
    description: 'Planning and autonomy for reliable real-world robotic systems.',
    iconName: 'compass',
  },
  {
    id: 'devai-workflows',
    title: 'Agentic DevAI',
    description: 'AI agents and developer tooling for modern software engineering.',
    iconName: 'workflow',
  },
  {
    id: 'production-systems',
    title: 'Production Software',
    description: 'Production C++, Python, and ROS 2 for real-time onboard autonomy.',
    iconName: 'laptop',
  },
  {
    id: 'deployment-edge',
    title: 'Deployment & Edge Infrastructure',
    description: 'Docker, CI/CD, cloud, and robotics deployment infrastructure.',
    iconName: 'cloud',
  },
];
