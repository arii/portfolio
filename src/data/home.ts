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
  iconName: 'compass' | 'workflow' | 'server' | 'cloud';
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
    'I am an MIT CSAIL roboticist and have worked in the industry since completing my PhD on reliable robot manipulation combining learning and planning techniques. At Robust AI, I was the tech lead for the behavior team, developing reactive social navigation behaviors. At Waymo, I worked on the planning team to reduce traffic congestion during passenger pickup and drop-off. Most recently at CIV, I built and optimized production state estimation pipelines to increase fleet uptime.',
    'I have spent the past year building stateful, multi-agent orchestrations. Because autonomous systems require strict code health, I use these workflows to engineer feature-rich applications and enforce continuous architectural standards—bringing robotics-grade reliability to DevAI.',
  ],
};

export const PHILOSOPHY_TENETS: PhilosophyTenet[] = [
  {
    id: 'ai-rigor',
    title: 'AI-Accelerated Rigor',
    description:
      'AI should raise the bar, not lower it. I develop agentic CI/CD workflows and automated code reviews to code-gen patches, resolve architecture guidelines, and triage technical debt faster.',
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
      'Delivering maintainable, production-ready software built with rigorous engineering standards, automated verification, and clean architectural design.',
  },
];

export const FOCUS_AREAS: FocusArea[] = [
  {
    id: 'products',
    title: "Products I've Shipped",
    description: 'Live full-stack consumer apps and platforms built with autonomous agent workflows.',
    actionText: 'View Products',
  },
  {
    id: 'infrastructure',
    title: 'Engineering Infrastructure',
    description: 'Autonomous code-review agents, CI pipelines, and quality gates enforcing strict software standards.',
    actionText: 'Inspect Tooling',
  },
  {
    id: 'research',
    title: 'Articles & Research',
    description: 'System architecture breakdowns, engineering post-mortems, and DevAI case studies.',
    actionText: 'Read Studies',
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
      'Authoring production-quality C++, Python, and ROS 2 middleware for robust state estimation and real-time robot software.',
    iconName: 'server',
  },
  {
    id: 'deployment-edge',
    title: 'Deployment & Edge Infrastructure Experience',
    description:
      'Building containerized robotics applications and automated cloud/IoT pipelines using Docker, AWS IoT, and CI/CD automation.',
    iconName: 'cloud',
  },
];
