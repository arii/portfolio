import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import FlagshipCard from '../components/FlagshipCard';
import { flagshipTools } from '../data/research/flagshipTools';
import { systemTools } from '../data/research/systemTools';
import { ResearchTool } from '../types/research';

describe('FlagshipCard Deep-Dive Linking', () => {
  const verifyDeepDiveNavigation = (
    tool: ResearchTool | undefined,
    expectedPath: string,
    expectedSlug: string
  ) => {
    expect(tool).toBeDefined();
    expect(tool?.canonicalPath).toBe(expectedPath);

    const handleNavigate = vi.fn();
    render(<FlagshipCard tool={tool!} onNavigate={handleNavigate} onImageClick={() => {}} />);

    const deepDiveBtn = screen.getAllByRole('button', { name: /Deep-Dive/i })[0];
    expect(deepDiveBtn).toBeInTheDocument();

    fireEvent.click(deepDiveBtn);
    expect(handleNavigate).toHaveBeenCalledWith(expectedSlug);
  };

  it('renders "Read Deep-Dive" for boomtick-blog and navigates to ai-experiments', () => {
    const boomtickTool = flagshipTools.find((t) => t.id === 'boomtick-blog');
    verifyDeepDiveNavigation(boomtickTool, '/research/ai-experiments', 'ai-experiments');
  });

  it('renders "Read Deep-Dive" for repo-auditor-ai and navigates to gitops-pr-reviewer', () => {
    const repoAuditorTool = flagshipTools.find((t) => t.id === 'repo-auditor-ai');
    verifyDeepDiveNavigation(repoAuditorTool, '/research/gitops-pr-reviewer', 'gitops-pr-reviewer');
  });

  it('renders "Read Deep-Dive" for deployment-impact-analyzer and navigates to deployment-impact-analyzer', () => {
    const impactTool = systemTools.find((t) => t.id === 'deployment-impact-analyzer');
    verifyDeepDiveNavigation(impactTool, '/research/deployment-impact-analyzer', 'deployment-impact-analyzer');
  });
});
