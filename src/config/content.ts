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
