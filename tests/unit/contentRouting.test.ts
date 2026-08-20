import { describe, it, expect } from 'vitest';
import { portfolioItems } from '@/config/content';

describe('Portfolio Content Categorization', () => {
  const targetIds = ['leac-monitoring', 'light-therapy-mit', 'boop-light-detector'];

  it('should categorize LEAC, Light Therapy, and Boop strictly under research', () => {
    const researchItems = portfolioItems.filter((item) => item.category === 'research');
    const researchIds = researchItems.map((item) => item.id);

    targetIds.forEach((id) => {
      expect(researchIds).toContain(id);
    });
  });

  it('should not contain LEAC, Light Therapy, or Boop under devai', () => {
    const devAiItems = portfolioItems.filter((item) => item.category === 'devai');
    const devAiIds = devAiItems.map((item) => item.id);

    targetIds.forEach((id) => {
      expect(devAiIds).not.toContain(id);
    });
  });
});
