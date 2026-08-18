import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import ResearchListPage from '../ResearchListPage';

describe('ResearchListPage Deduplication', () => {
  it('renders flagship section and single articles grid, omitting 3-column section', () => {
    const handleNavigate = vi.fn();
    render(<ResearchListPage onNavigate={handleNavigate} />);

    expect(screen.getByText('DevAI & Technical Research')).toBeInTheDocument();
    expect(screen.getByText('Flagship Projects')).toBeInTheDocument();
    expect(screen.getByText('Articles & Research Studies')).toBeInTheDocument();

    // Verify 3-column section titles are removed
    expect(screen.queryByText('Engineering Systems')).not.toBeInTheDocument();
    expect(screen.queryByText('Data & Content Systems')).not.toBeInTheDocument();
    expect(screen.queryByText('Ecommerce Experiments')).not.toBeInTheDocument();
  });
});
