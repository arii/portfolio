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
    // Mock window.open
    const originalOpen = window.open;
    window.open = vi.fn();

    const handleNavigate = vi.fn();
    const { getAllByRole } = render(<FlagshipCard tool={tool!} onNavigate={handleNavigate} onImageClick={() => {}} />);

    // get the Deep-Dive button explicitly inside the card (not the main card click handler which opens externalUrl)
    const deepDiveBtn = getAllByRole('button', { name: /Deep-Dive/i }).find(btn => btn.textContent?.includes('Deep-Dive'));
    expect(deepDiveBtn).toBeInTheDocument();

    fireEvent.click(deepDiveBtn!);

    // Test logic expects handleNavigate to be called with the targetSlug.
    // Wait, the primary action handles propagation differently now.
    expect(handleNavigate).toHaveBeenCalledWith(expectedSlug);

    // Restore window.open
    window.open = originalOpen;
  };

  it('does not render "Deep-Dive" for boomtick-blog since canonicalPath is removed', () => {
    const boomtickTool = flagshipTools.find((t) => t.id === 'boomtick-blog');
    expect(boomtickTool).toBeDefined();
    expect(boomtickTool?.canonicalPath).toBeUndefined();

    const handleNavigate = vi.fn();
    render(<FlagshipCard tool={boomtickTool!} onNavigate={handleNavigate} onImageClick={() => {}} />);

    const deepDiveBtns = screen.queryAllByRole('button', { name: /Deep-Dive/i });
    expect(deepDiveBtns.length).toBe(0);
  });

  it('does not render "Deep-Dive" for repo-auditor-ai since canonicalPath is removed', () => {
    const repoAuditorTool = flagshipTools.find((t) => t.id === 'repo-auditor-ai');
    expect(repoAuditorTool).toBeDefined();
    expect(repoAuditorTool?.canonicalPath).toBeUndefined();

    const handleNavigate = vi.fn();
    render(<FlagshipCard tool={repoAuditorTool!} onNavigate={handleNavigate} onImageClick={() => {}} />);

    const deepDiveBtns = screen.queryAllByRole('button', { name: /Deep-Dive/i });
    expect(deepDiveBtns.length).toBe(0);
  });

  it('renders "Deep-Dive" for deployment-impact-analyzer and navigates to deployment-impact-analyzer', () => {
    const impactTool = { ...systemTools.find((t) => t.id === 'deployment-impact-analyzer')! };
    impactTool.externalUrl = undefined;
    impactTool.sourceUrl = undefined;
    verifyDeepDiveNavigation(impactTool, '/research/deployment-impact-analyzer', 'deployment-impact-analyzer');
  });
});
