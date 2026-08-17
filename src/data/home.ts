export interface ExperienceBadge {
  company: string;
  role: string;
  tags: string[];
}

export interface PhilosophyTenet {
  title: string;
  desc: string;
}

export interface FocusCardData {
  title: string;
  desc: string;
  tags: string[];
  link: string;
  linkText: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export const HERO_SUBHEADING =
  "I architect reliable autonomous systems for physical robots and build agentic workflows that autonomously engineer full-stack software.";

export const HERO_BIO = [
  "I am an MIT CSAIL roboticist and have worked in the industry since completing my PhD on reliable robot manipulation combining learning and planning techniques. At Robust AI, I was the tech lead for the behavior team, developing reactive social navigation behaviors. At Waymo, I worked on the planning team to reduce traffic congestion during passenger pickup and drop-off. Most recently at Civ Robotics, I built and optimized production state estimation pipelines to increase fleet uptime.",
  "I have spent the past year building stateful, multi-agent orchestrations. Because autonomous systems require strict code health, I use these workflows to engineer feature-rich applications and enforce continuous architectural standards—bringing robotics-grade reliability to DevAI."
];

export const EXPERIENCE_BADGES: ExperienceBadge[] = [
  {
    company: "Civ Robotics",
    role: "State Estimation & Fleet Uptime",
    tags: ["Autonomous Surveying", "IMU & Localization"]
  },
  {
    company: "Waymo",
    role: "Planning & Congestion Reduction",
    tags: ["Autonomous Vehicles", "Motion Planning"]
  },
  {
    company: "Robust AI",
    role: "Behavior Team Tech Lead",
    tags: ["Mobile Manipulation", "Social Navigation"]
  },
  {
    company: "MIT CSAIL",
    role: "PhD Robotics Manipulation",
    tags: ["Conformant Planning", "Robot Manipulation"]
  }
];

export const PHILOSOPHY_TENETS: PhilosophyTenet[] = [
  {
    title: "AI-Accelerated Rigor",
    desc: "AI should raise the bar, not lower it. I develop agentic CI/CD workflows and automated code reviews to code-gen patches, resolve architecture guidelines, and triage and prevent technical debt faster."
  },
  {
    title: "Reliable Robot Behavior",
    desc: "Developing onboard motion planning, reactive social navigation, and behavior software across autonomous vehicles, indoor robots in unstructured environments, and robotic manipulation."
  },
  {
    title: "Production Robot Software",
    desc: "Authoring production-quality C++, Python, and ROS 2 software using Docker and AWS IoT to build automated pipelines and containerized robotics applications for high fleet uptime."
  }
];

export const FOCUS_CARDS: FocusCardData[] = [
  {
    title: "Products I've Shipped",
    desc: "Live full-stack consumer apps and community platforms built with autonomous agent workflows.",
    tags: ["WebSockets", "BLE", "React", "Next.js"],
    link: "/research#products",
    linkText: "View Live Products"
  },
  {
    title: "Engineering Infrastructure",
    desc: "Autonomous code-review agents, CI pipelines, and quality gates enforcing strict software standards.",
    tags: ["Playwright", "GitHub Actions", "Docker", "DevAI"],
    link: "/research#infrastructure",
    linkText: "Inspect Infrastructure"
  },
  {
    title: "Articles & Research",
    desc: "System architecture breakdowns, engineering post-mortems, and DevAI case studies.",
    tags: ["ICRA", "IJRR", "Postmortems", "Architecture"],
    link: "/research#articles",
    linkText: "Read Architecture Studies"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Motion Planning & Robotics",
    items: ["Behavior Trees", "Conformant Planning", "State Estimation", "ROS 2 / C++ Safety Systems", "Python"]
  },
  {
    category: "DevAI & Production Engineering",
    items: ["Multi-Agent Orchestration", "Automated PR Reviews", "Context-Driven CI/CD", "AWS IoT", "Fleet Architecture", "Playwright"]
  }
];
