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
    const { getAllByRole } = render(<FlagshipCard tool={tool!} onNavigate={handleNavigate} onImageClick={() => {}} />);

    const deepDiveBtn = getAllByRole('link', { name: /Deep-Dive/i }).find(btn => btn.textContent?.includes('Deep-Dive'));
    expect(deepDiveBtn).toBeInTheDocument();

    fireEvent.click(deepDiveBtn!);

    expect(handleNavigate).toHaveBeenCalledWith(expectedSlug);
  };

  it('does not render "Deep-Dive" for boomtick-blog since canonicalPath is removed', () => {
    const boomtickTool = flagshipTools.find((t) => t.id === 'boomtick-blog');
    expect(boomtickTool).toBeDefined();
    expect(boomtickTool?.canonicalPath).toBeUndefined();

    const handleNavigate = vi.fn();
    render(<FlagshipCard tool={boomtickTool!} onNavigate={handleNavigate} onImageClick={() => {}} />);

    const deepDiveBtns = screen.queryAllByRole('link', { name: /Deep-Dive/i });
    expect(deepDiveBtns.length).toBe(0);
  });

  it('does not render "Deep-Dive" for repo-auditor-ai since canonicalPath is removed', () => {
    const repoAuditorTool = flagshipTools.find((t) => t.id === 'repo-auditor-ai');
    expect(repoAuditorTool).toBeDefined();
    expect(repoAuditorTool?.canonicalPath).toBeUndefined();

    const handleNavigate = vi.fn();
    render(<FlagshipCard tool={repoAuditorTool!} onNavigate={handleNavigate} onImageClick={() => {}} />);

    const deepDiveBtns = screen.queryAllByRole('link', { name: /Deep-Dive/i });
    expect(deepDiveBtns.length).toBe(0);
  });

  it('renders "Deep-Dive" for deployment-impact-analyzer and navigates to deployment-impact-analyzer', () => {
    const impactTool = { ...systemTools.find((t) => t.id === 'deployment-impact-analyzer')! };
    impactTool.externalUrl = undefined;
    impactTool.sourceUrl = undefined;
    verifyDeepDiveNavigation(impactTool, '/devai/deployment-impact-analyzer/', 'deployment-impact-analyzer');
  });

  it('renders "Deep-Dive" and "Open HRM App" for hrm-flagship and navigates correctly', () => {
    const hrmTool = flagshipTools.find((t) => t.id === 'hrm-flagship');
    expect(hrmTool).toBeDefined();
    expect(hrmTool?.canonicalPath).toBe('/devai/hrm-architecture/');
    expect(hrmTool?.externalUrl).toBe('https://arii.github.io/hrm/');

    verifyDeepDiveNavigation(hrmTool, '/devai/hrm-architecture/', 'hrm-architecture');

    // Also verify Open HRM App external link button
    const handleNavigate = vi.fn();
    render(<FlagshipCard tool={hrmTool!} onNavigate={handleNavigate} onImageClick={() => {}} />);
    const liveDemoLink = screen.getAllByRole('link', { name: /Open HRM App/i })[0];
    expect(liveDemoLink).toBeInTheDocument();
    expect(liveDemoLink).toHaveAttribute('href', 'https://arii.github.io/hrm/');
  });

  it('clicking Master\'s thesis card navigates to deep-dive instead of opening external DSpace URL', () => {
    const mastersTool = flagshipTools.find((t) => t.id === 'masters-thesis');
    expect(mastersTool).toBeDefined();
    expect(mastersTool?.externalUrl).toContain('dspace.mit.edu');

    const handleNavigate = vi.fn();
    const originalOpen = window.open;
    window.open = vi.fn();

    render(<FlagshipCard tool={mastersTool!} onNavigate={handleNavigate} onImageClick={() => {}} />);

    const card = screen.getByRole('link', { name: mastersTool!.title });
    fireEvent.click(card);

    expect(handleNavigate).toHaveBeenCalledWith('masters-thesis');
    expect(window.open).not.toHaveBeenCalled();

    window.open = originalOpen;
  });

  it('clicking PhD thesis card navigates to deep-dive instead of opening external DSpace URL', () => {
    const phdTool = flagshipTools.find((t) => t.id === 'phd-thesis');
    expect(phdTool).toBeDefined();
    expect(phdTool?.externalUrl).toContain('dspace.mit.edu');

    const handleNavigate = vi.fn();
    const originalOpen = window.open;
    window.open = vi.fn();

    render(<FlagshipCard tool={phdTool!} onNavigate={handleNavigate} onImageClick={() => {}} />);

    const card = screen.getByRole('link', { name: phdTool!.title });
    fireEvent.click(card);

    expect(handleNavigate).toHaveBeenCalledWith('conformant-planning-manipulation');
    expect(window.open).not.toHaveBeenCalled();

    window.open = originalOpen;
  });
});
