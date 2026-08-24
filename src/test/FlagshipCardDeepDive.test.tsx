import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import FlagshipCard from '../components/FlagshipCard';
import { flagshipTools } from '../data/research/flagshipTools';
import { systemTools } from '../data/research/systemTools';

describe('FlagshipCard Deep-Dive Linking', () => {
  it('renders "Read Deep-Dive" for boomtick-blog and navigates to ai-experiments', () => {
    const boomtickTool = flagshipTools.find((t) => t.id === 'boomtick-blog');
    expect(boomtickTool).toBeDefined();
    expect(boomtickTool?.canonicalPath).toBe('/research/ai-experiments');

    const handleNavigate = vi.fn();
    render(<FlagshipCard tool={boomtickTool!} onNavigate={handleNavigate} onImageClick={() => {}} />);

    const deepDiveBtn = screen.getByRole('button', { name: /Read Deep-Dive/i });
    expect(deepDiveBtn).toBeInTheDocument();

    fireEvent.click(deepDiveBtn);
    expect(handleNavigate).toHaveBeenCalledWith('ai-experiments');
  });

  it('renders "Read Deep-Dive" for repo-auditor-ai and navigates to gitops-pr-reviewer', () => {
    const repoAuditorTool = flagshipTools.find((t) => t.id === 'repo-auditor-ai');
    expect(repoAuditorTool).toBeDefined();
    expect(repoAuditorTool?.canonicalPath).toBe('/research/gitops-pr-reviewer');

    const handleNavigate = vi.fn();
    render(<FlagshipCard tool={repoAuditorTool!} onNavigate={handleNavigate} onImageClick={() => {}} />);

    const deepDiveBtn = screen.getByRole('button', { name: /Read Deep-Dive/i });
    expect(deepDiveBtn).toBeInTheDocument();

    fireEvent.click(deepDiveBtn);
    expect(handleNavigate).toHaveBeenCalledWith('gitops-pr-reviewer');
  });

  it('renders "Read Deep-Dive" for deployment-impact-analyzer and navigates to deployment-impact-analyzer', () => {
    const impactTool = systemTools.find((t) => t.id === 'deployment-impact-analyzer');
    expect(impactTool).toBeDefined();
    expect(impactTool?.canonicalPath).toBe('/research/deployment-impact-analyzer');

    const handleNavigate = vi.fn();
    render(<FlagshipCard tool={impactTool!} onNavigate={handleNavigate} onImageClick={() => {}} />);

    const deepDiveBtn = screen.getByRole('button', { name: /Read Deep-Dive/i });
    expect(deepDiveBtn).toBeInTheDocument();

    fireEvent.click(deepDiveBtn);
    expect(handleNavigate).toHaveBeenCalledWith('deployment-impact-analyzer');
  });
});
