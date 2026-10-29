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
    id: 'consulting',
    title: "Robotics & AI Consulting",
    description: "Fixed-scope audits and advisory for teams shipping navigation, localization, and autonomy.",
    ctaText: "Work With Me",
    href: "/consulting",
  },
  {
    id: 'devai',
    title: "Build with AI & DevAI Orchestration",
    description: "Full-stack apps, multi-agent orchestration, automated code-auditing guardrails, and developer tooling built with autonomous workflows.",
    ctaText: "Explore DevAI Platform",
    href: "/devai",
  },
  {
    id: 'robotics-research',
    title: "Robotics Research",
    description: "Research and publications spanning robotics, motion planning, autonomy, and real-world systems.",
    ctaText: "Read Research",
    href: "/research",
  },
];
