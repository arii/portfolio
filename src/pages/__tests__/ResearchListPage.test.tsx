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
    expect(screen.getByText('Products built with DevAI')).toBeInTheDocument();
    expect(screen.getByText('DevAI Orchestration')).toBeInTheDocument();
    expect(screen.queryByText(/Delivery Bots/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/BeaverWorks/i)).not.toBeInTheDocument();
  });

  it('renders ResearchListPage correctly with Delivery Bots and BeaverWorks RACECAR', () => {
    const handleNavigate = vi.fn();
    render(
      <HelmetProvider>
        <ResearchListPage onNavigate={handleNavigate} />
      </HelmetProvider>
    );

    expect(screen.getByText('Robotics & Algorithmic Research')).toBeInTheDocument();
    expect(screen.getByText('Graduate Theses')).toBeInTheDocument();
    expect(screen.getByText('Peer-Reviewed Publications')).toBeInTheDocument();
    expect(screen.getByText('Robotics and Academic Projects')).toBeInTheDocument();
    expect(screen.getAllByText(/Delivery Bots/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/BeaverWorks/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Duckietown/i).length).toBeGreaterThan(0);
  });
});
