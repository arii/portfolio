import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import DevAIListPage from '../DevAIListPage';
import ResearchListPage from '../ResearchListPage';
import { HelmetProvider } from 'react-helmet-async';

describe('DevAI and Research List Page Deduplication', () => {
  it('renders DevAIListPage correctly', () => {
    const handleNavigate = vi.fn();
    render(
      <HelmetProvider>
        <DevAIListPage onNavigate={handleNavigate} />
      </HelmetProvider>
    );

    expect(screen.getByText('DevAI & Software Systems')).toBeInTheDocument();
    expect(screen.getByText('Flagship Applications & Tooling')).toBeInTheDocument();
    expect(screen.getByText('Technical Articles & Deep Dives')).toBeInTheDocument();
  });

  it('renders ResearchListPage correctly', () => {
    const handleNavigate = vi.fn();
    render(
      <HelmetProvider>
        <ResearchListPage onNavigate={handleNavigate} />
      </HelmetProvider>
    );

    expect(screen.getByText('Robotics & Algorithmic Research')).toBeInTheDocument();
    expect(screen.getByText('Doctoral & Graduate Theses')).toBeInTheDocument();
    expect(screen.getByText('Peer-Reviewed Publications')).toBeInTheDocument();
    expect(screen.getByText('Applied Systems & Infrastructure Projects')).toBeInTheDocument();
  });
});
