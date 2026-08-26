import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import DevAIListPage from '../DevAIListPage';
import { HelmetProvider } from 'react-helmet-async';
import { DEVAI_FLAGSHIPS } from '@/data/devai-projects';

describe('DevAIListPage Deduplication', () => {
  it('renders products built with DevAI flagship section and articles section without duplicated cards', () => {
    const mockNavigate = vi.fn();
    render(
      <HelmetProvider>
        <DevAIListPage onNavigate={mockNavigate} />
      </HelmetProvider>
    );

    // Verify products built with DevAI section exists
    expect(screen.getByText('Products built with DevAI')).toBeInTheDocument();

    // Verify each flagship tool in DEVAI_FLAGSHIPS is rendered
    DEVAI_FLAGSHIPS.forEach((tool) => {
      expect(screen.getByText(tool.title)).toBeInTheDocument();
    });

    // Check that flagship canonical paths / slugs (e.g., gitops-pr-reviewer, ai-experiments)
    // do not cause duplicate cards in the DevAI Orchestration articles section.
    // For example, BoomTick.blog links to /research/ai-experiments, so "AI Experiments" article card
    // should be excluded from DevAI Orchestration section to prevent duplicate representation.
    // RepoAuditor links to /research/gitops-pr-reviewer.
    const flagshipTitles = DEVAI_FLAGSHIPS.map((t) => t.title);

    // Check all article card titles rendered in the articles section
    // 'GitHub Actions LLM Code Review Automated' (gitops-pr-reviewer) and 'AI Experiments' should not appear as separate cards
    // since their flagship counterparts (RepoAuditor and BoomTick.blog) are displayed in Flagships.
    expect(screen.queryByText('AI Experiments')).not.toBeInTheDocument();
  });
});
