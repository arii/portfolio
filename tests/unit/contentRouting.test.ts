import { describe, it, expect } from 'vitest';
import { portfolioItems } from '@/config/content';

import { autonomousTools } from '@/data/research/autonomousTools';

describe('Portfolio Content Categorization', () => {
  const targetIds = ['leac-monitoring', 'light-therapy-mit', 'boop-light-detector'];
  const academicReportSlugs = ['report-6375-rsa', 'report-ml-lis', 'report-ce118-mechatronics', 'report-ce121-microprocessor'];

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

  it('should include academic and microprocessor report items in autonomous/research tools', () => {
    const autonomousIds = autonomousTools.map((t) => t.id);
    academicReportSlugs.forEach((slug) => {
      expect(autonomousIds).toContain(slug);
    });
  });
});
