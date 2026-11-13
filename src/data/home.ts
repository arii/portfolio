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

export const heroContent: HeroContent = {
  brandTitle: 'Ariel Anders Portfolio',
  brandRole: 'Roboticist & Senior Software Engineer',
  name: 'Ariel Anders, PhD',
  title: 'Roboticist & Senior Software Engineer',
  bioParagraphs: [
    'I build reliable software for robotics and autonomous systems, from motion planning and localization to production infrastructure and AI-assisted development.',
    'Available for senior/staff engineering leadership, technical audits, and advisory for teams shipping autonomous systems.',
  ],
};

export const PHILOSOPHY_TENETS: PhilosophyTenet[] = [
  {
    id: 'ai-rigor',
    title: 'AI-Accelerated Rigor',
    description:
      'I build agentic CI/CD workflows and automated code reviews that catch technical debt early and keep engineering speed high.',
  },
  {
    id: 'robot-behavior',
    title: 'Make Robots Behave',
    description:
      'I combine machine learning, motion planning, and precise system design to ensure predictable, reliable robotic performance in uncertain environments.',
  },
];

export const FEATURE_CALLOUTS: FeatureCallout[] = [
  {
    id: 'motion-planning',
    title: 'Motion Planning & Autonomy',
    description: 'For robots that work in the real world',
    iconName: 'compass',
  },
  {
    id: 'devai-workflows',
    title: 'Agentic DevAI',
    description: 'AI agents and developer tooling that survive contact with production',
    iconName: 'workflow',
  },
  {
    id: 'production-systems',
    title: 'Production Software',
    description: 'Production Python, C++, and ROS 2 for real-time onboard autonomy',
    iconName: 'laptop',
  },
  {
    id: 'deployment-edge',
    title: 'Deployment & Edge Infrastructure',
    description: 'Docker, CI/CD, cloud, and getting robots deployed',
    iconName: 'cloud',
  },
];
