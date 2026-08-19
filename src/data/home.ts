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
  discipline: 'robotics' | 'devai' | 'both';
}

export interface FeatureCallout {
  id: string;
  title: string;
  description: string;
  iconName: 'compass' | 'workflow' | 'server';
}

export interface CompanyBadge {
  name: string;
  role: string;
}

export interface HeroData {
  badge: string;
  name: string;
  title: string;
  subheading: string;
  bioParagraphs: string[];
  companies: CompanyBadge[];
}

export const HERO_DATA: HeroData = {
  badge: 'Robotics & DevAI — Autonomous Systems & AI Orchestration',
  name: 'Ariel Anders, PhD',
  title: 'Roboticist & Senior Software Engineer',
  subheading:
    'I architect reliable autonomous systems for physical robots and build agentic workflows that autonomously engineer full-stack software.',
  companies: [
    { name: 'MIT CSAIL', role: 'PhD Robotics' },
    { name: 'Robust AI', role: 'Behavior Lead' },
    { name: 'Waymo', role: 'Planning Eng' },
    { name: 'Civ Robotics', role: 'State Est Lead' },
  ],
  bioParagraphs: [
    'MIT CSAIL PhD with industry experience leading behavior, motion planning, and state estimation across autonomous vehicles and industrial fleets. Currently applying robotics-grade software reliability to stateful multi-agent systems and DevAI tooling.',
  ],
};

export const PHILOSOPHY_TENETS: PhilosophyTenet[] = [
  {
    id: 'ai-rigor',
    title: 'AI-Accelerated Rigor',
    description:
      'AI should raise the bar, not lower it. I develop agentic CI/CD workflows and automated code reviews to code-gen patches, resolve architecture guidelines, and triage and prevent technical debt faster.',
  },
  {
    id: 'robot-behavior',
    title: 'Reliable Robot Behavior',
    description:
      'Developing onboard motion planning, reactive social navigation, and behavior software across autonomous vehicles, indoor robots in unstructured environments, and robotic manipulation.',
  },
  {
    id: 'production-software',
    title: 'Production Robot Software',
    description:
      'Authoring production-quality C++, Python, and ROS 2 software using Docker and AWS IoT to build automated pipelines and containerized robotics applications for high fleet uptime.',
  },
];

export const FOCUS_AREAS: FocusArea[] = [
  {
    id: 'products',
    title: "Products I've Shipped",
    description: 'Live full-stack consumer apps and platforms built with autonomous agent workflows.',
    actionText: 'View Products',
    discipline: 'devai',
  },
  {
    id: 'infrastructure',
    title: 'Engineering Infrastructure',
    description: 'Autonomous code-review agents, CI pipelines, and quality gates enforcing strict software standards.',
    actionText: 'Inspect Tooling',
    discipline: 'devai',
  },
  {
    id: 'research',
    title: 'Articles & Research',
    description: 'System architecture breakdowns, engineering post-mortems, and DevAI case studies.',
    actionText: 'Read Studies',
    discipline: 'robotics',
  },
];

export const FEATURE_CALLOUTS: FeatureCallout[] = [
  {
    id: 'motion-planning',
    title: 'Algorithmic Motion Planning',
    description:
      'Behavior trees, conformant planning under uncertainty, and dynamic obstacle avoidance built for real-time robot safety.',
    iconName: 'compass',
  },
  {
    id: 'devai-workflows',
    title: 'DevAI & AI Workflows',
    description:
      'Leveraging LLMs, RAG context systems, and automated PR review agents to accelerate engineering cycles and technical debt cleanup.',
    iconName: 'workflow',
  },
  {
    id: 'production-systems',
    title: 'Production Systems Architecture',
    description:
      'Production C++, ROS 2, Python, and cloud/IoT pipelines engineered for high uptime, maintainability, and clean system design.',
    iconName: 'server',
  },
];
