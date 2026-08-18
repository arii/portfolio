import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import ToolCard from '@/components/ToolCard';
import { ResearchTool } from '@/types/research';

describe('ToolCard Component with parentFlagship cross-linking', () => {
  const mockToolWithParent: ResearchTool = {
    id: 'gitops-pr-reviewer',
    title: 'GitOps Code Review Agent',
    description: 'LLM-powered PR auditing pipeline',
    category: 'DevAI System',
    status: 'Active',
    tags: ['GitHub Actions', 'LLM'],
    parentFlagship: {
      id: 'repo-auditor-ai',
      title: 'RepoAuditor'
    }
  };

  it('renders "Part of RepoAuditor" cross-link tag when parentFlagship is provided', () => {
    const onNavigate = vi.fn();
    render(<ToolCard tool={mockToolWithParent} onNavigate={onNavigate} />);

    expect(screen.getByText('RepoAuditor')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Part of RepoAuditor flagship project/i })).toBeInTheDocument();
  });

  it('scrolls to #flagship when "Part of RepoAuditor" tag is clicked', () => {
    const onNavigate = vi.fn();
    render(<ToolCard tool={mockToolWithParent} onNavigate={onNavigate} />);

    const flagshipElem = document.createElement('div');
    flagshipElem.id = 'flagship';
    flagshipElem.scrollIntoView = vi.fn();
    document.body.appendChild(flagshipElem);

    const crossLink = screen.getByRole('link', { name: /Part of RepoAuditor flagship project/i });
    fireEvent.click(crossLink);

    expect(flagshipElem.scrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' });

    document.body.removeChild(flagshipElem);
  });
});
