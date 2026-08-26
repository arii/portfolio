import { describe, it, expect } from 'vitest';
import { flagshipTools } from '@/data/research/flagshipTools';
import { getResearchPostBySlug } from '@/data/research';
describe('PhD Research Data Consolidation', () => {
  it('links PhD thesis flagship card to the consolidated conformant planning article', () => {
    const phdFlagship = flagshipTools.find((tool) => tool.id === 'phd-thesis');
    expect(phdFlagship).toBeDefined();
    expect(phdFlagship?.canonicalPath).toBe('/research/conformant-planning-manipulation');
    expect(phdFlagship?.description).toContain('1.9%');
    expect(phdFlagship?.description).toContain('80.7%');
  });

  it('retrieves consolidated PhD research article content', () => {
    const post = getResearchPostBySlug('conformant-planning-manipulation');
    expect(post).toBeDefined();
    expect(post?.title).toBe('Reliably Arranging Objects: A Conformant Planning Approach to Robot Manipulation');
    expect(post?.content).toContain('PR2');
    expect(post?.content).toContain('Belief-State Transition Search & Noise Characterization');
  });
});
