import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import ResearchListPage from '../pages/ResearchListPage';
import { RESEARCH_TOOLS } from '../data/researchTools';

describe('PhD Thesis Flagship Project', () => {
  it('includes PhD thesis as a Flagship project with correct attributes in RESEARCH_TOOLS', () => {
    const phdTool = RESEARCH_TOOLS.find((t) => t.id === 'phd-thesis');
    expect(phdTool).toBeDefined();
    expect(phdTool?.isFlagship).toBe(true);
    expect(phdTool?.image).toBe('/assets/research/phd/sixblock.png');
    expect(phdTool?.externalUrl).toBe('https://dspace.mit.edu/handle/1721.1/122822');
    expect(phdTool?.externalLinkDisplayLabel).toBe('MIT DSpace Thesis');
    expect(phdTool?.description).toContain('1.9% to 80.7%');
  });

  it('renders PhD Thesis as a flagship project card with media and external link on ResearchListPage', () => {
    render(<ResearchListPage onNavigate={() => {}} />);

    expect(screen.getByText('Reliably Arranging Objects')).toBeInTheDocument();
    expect(screen.getByText('MIT CSAIL PH.D. THESIS')).toBeInTheDocument();
    expect(screen.getAllByText('MIT DSpace Thesis')[0]).toBeInTheDocument();

    const phdImage = screen.getByAltText(/PR2 robot reliably arranging blocks/i);
    expect(phdImage).toBeInTheDocument();
    expect(phdImage).toHaveAttribute('src', '/assets/research/phd/sixblock.png');
  });
});
