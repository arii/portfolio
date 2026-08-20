import { describe, it, expect } from 'vitest';
import { FEATURED_CARDS } from '@/config/content';

describe('FEATURED_CARDS Configuration', () => {
  it('contains exactly three middle-row featured cards', () => {
    expect(FEATURED_CARDS).toHaveLength(3);
  });

  it('renders updated copy for Products built with DevAI', () => {
    const card = FEATURED_CARDS.find((c) => c.id === 'devai-products');
    expect(card).toBeDefined();
    expect(card?.title).toBe('Products built with DevAI');
    expect(card?.ctaText).toBe('View Products');
  });

  it('renders updated copy for Building DevAI Tools', () => {
    const card = FEATURED_CARDS.find((c) => c.id === 'devai-tools');
    expect(card).toBeDefined();
    expect(card?.title).toBe('Building DevAI Tools');
    expect(card?.ctaText).toBe("See How It's Built");
  });

  it('renders updated copy for Robotics Research & Publications', () => {
    const card = FEATURED_CARDS.find((c) => c.id === 'robotics-research');
    expect(card).toBeDefined();
    expect(card?.title).toBe('Robotics Research & Publications');
    expect(card?.ctaText).toBe('Read Research');
  });
});
