import { describe, it, expect } from 'vitest';
import { FEATURED_CARDS } from '@/config/content';

describe('FEATURED_CARDS Configuration', () => {
  it('contains exactly three middle-row featured cards', () => {
    expect(FEATURED_CARDS).toHaveLength(3);
  });

  it('renders the consulting card first with a booking CTA', () => {
    const card = FEATURED_CARDS.find((c) => c.id === 'consulting');
    expect(card).toBeDefined();
    expect(card?.title).toBe('Robotics & AI Consulting');
    expect(card?.ctaText).toBe('Work With Me');
    expect(card?.href).toBe('/consulting');
  });

  it('renders consolidated copy for Build with AI & DevAI Orchestration', () => {
    const card = FEATURED_CARDS.find((c) => c.id === 'devai');
    expect(card).toBeDefined();
    expect(card?.title).toBe('Build with AI & DevAI Orchestration');
    expect(card?.ctaText).toBe('Explore DevAI Platform');
    expect(card?.href).toBe('/devai');
  });

  it('renders updated copy for Robotics Research', () => {
    const card = FEATURED_CARDS.find((c) => c.id === 'robotics-research');
    expect(card).toBeDefined();
    expect(card?.title).toBe('Robotics Research');
    expect(card?.ctaText).toBe('Read Research');
  });
});
