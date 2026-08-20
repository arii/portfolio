import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import DevAIListPage from '../DevAIListPage';
import { HelmetProvider } from 'react-helmet-async';
import { DEVAI_FLAGSHIPS } from '@/data/devai-projects';

describe('DevAIListPage Deduplication', () => {
  it('does not duplicate flagship projects or canonical path articles in the technical articles grid', () => {
    const handleNavigate = vi.fn();
    render(
      <HelmetProvider>
        <DevAIListPage onNavigate={handleNavigate} />
      </HelmetProvider>
    );

    // Get flagship titles from DEVAI_FLAGSHIPS
    const flagshipTitles = DEVAI_FLAGSHIPS.map((t) => t.title);

    // Each flagship title should appear exactly once on the page
    flagshipTitles.forEach((title) => {
      const titleElements = screen.getAllByText((content) => content.includes(title));
      expect(titleElements.length).toBe(1);
    });
  });

  it('renders all flagship and article cards with unique keys/titles', () => {
    const handleNavigate = vi.fn();
    const { container } = render(
      <HelmetProvider>
        <DevAIListPage onNavigate={handleNavigate} />
      </HelmetProvider>
    );

    const articleSection = container.querySelector('#articles');
    expect(articleSection).not.toBeNull();

    // Ensure Blast-Radius Analyzer (deployment-impact-analyzer) is in Flagship section and NOT in Articles section
    const flagshipSection = container.querySelector('#flagship');
    expect(flagshipSection?.textContent).toContain('Blast-Radius Analyzer');
    expect(articleSection?.textContent).not.toContain('Blast-Radius Analyzer');
  });
});
