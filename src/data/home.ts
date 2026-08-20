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

export interface HeroData {
  badge: string;
  name: string;
  title: string;
  subheading: string;
  bioParagraphs: string[];
}

export const HERO_DATA: HeroData = {
  badge: 'Robotics & DevAI — Autonomous Systems & AI Orchestration',
  name: 'Ariel Anders, PhD',
  title: 'Roboticist & Senior Software Engineer',
  subheading:
    'I architect reliable autonomous systems for physical robots and build agentic workflows that autonomously engineer full-stack software.',
  bioParagraphs: [
    'I am an MIT CSAIL roboticist and have worked in the industry since completing my PhD on reliable robot manipulation combining learning and planning techniques. At Robust.AI, I was the tech lead for the behavior team, developing reactive social navigation behaviors. At Waymo, I worked on the planning team to reduce traffic congestion during passenger pickup and drop-off. Most recently at Civ Robotics, I built and optimized production state estimation pipelines to increase fleet uptime.',
    'I have spent the past year building stateful, multi-agent orchestrations. Because autonomous systems require strict code health, I use these workflows to engineer feature-rich applications and enforce continuous architectural standards—bringing robotics-grade reliability to DevAI.',
  ],
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
