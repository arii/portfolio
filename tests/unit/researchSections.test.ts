import { describe, it, expect } from 'vitest';
import { getAllResearchPosts } from '@/data/research';
import { getPrimarySection, RESEARCH_ONLY_SLUGS } from '@/data/researchSections';

describe('getPrimarySection', () => {
  it('routes robotics categories and research-only slugs to /research, everything else to /devai', () => {
    expect(getPrimarySection({ slug: 'x', category: 'Robotics & Hardware' })).toBe('research');
    expect(getPrimarySection({ slug: 'bwsi-racecar', category: 'Education & Autonomous Systems' })).toBe('research');
    expect(getPrimarySection({ slug: 'x', category: 'DevAI' })).toBe('devai');
    expect(getPrimarySection({ slug: 'x' })).toBe('devai');
  });

  it('lists only slugs that have a post', () => {
    const slugs = new Set(getAllResearchPosts().map((p) => p.slug));
    expect(RESEARCH_ONLY_SLUGS.filter((slug) => !slugs.has(slug))).toEqual([]);
  });

});
