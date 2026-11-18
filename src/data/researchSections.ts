// Plain, import-free module: also loaded by scripts/generate-sitemap.js (node) and scripts/generate-spa-stubs.js (tsx).
export type PrimarySection = 'research' | 'devai';

export const RESEARCH_ONLY_SLUGS: readonly string[] = [
  'bwsi-racecar',
  'delivery-bots',
  'leac-monitoring-software',
  'light-therapy-mit',
  'boop-light-detector',
];

export function getPrimarySection(post: { slug: string; category?: string }): PrimarySection {
  const isRobotics = (post.category || '').toLowerCase().includes('robotics');
  return isRobotics || RESEARCH_ONLY_SLUGS.includes(post.slug) ? 'research' : 'devai';
}
