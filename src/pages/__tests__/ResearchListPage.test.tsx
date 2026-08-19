import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import DevAIListPage from '../DevAIListPage';
import ResearchListPage from '../ResearchListPage';
import { HelmetProvider } from 'react-helmet-async';

describe('DevAI and Research List Pages', () => {
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

  it('renders ResearchListPage correctly with category filter bar and accordions', () => {
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

    // Verify domain group headers exist
    expect(screen.getByText('Autonomous Systems & Robotics')).toBeInTheDocument();
    expect(screen.getByText('Accessibility & Tools')).toBeInTheDocument();
    expect(screen.getByText('MIT Initiatives & Community')).toBeInTheDocument();
  });

  it('filters research items when filter category pill is clicked', () => {
    const handleNavigate = vi.fn();
    render(
      <HelmetProvider>
        <ResearchListPage onNavigate={handleNavigate} />
      </HelmetProvider>
    );

    const accessibilityFilterBtn = screen.getByRole('button', { name: 'Accessibility' });
    fireEvent.click(accessibilityFilterBtn);

    expect(screen.getByText('Accessibility & Tools')).toBeInTheDocument();
    expect(screen.queryByText('Autonomous Systems & Robotics')).not.toBeInTheDocument();
  });
});
