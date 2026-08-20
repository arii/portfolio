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

  it('renders ResearchListPage correctly and excludes DevAI system tools', () => {
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

    // Verify robotics autonomous tools render properly
    expect(screen.getByText(/BeaverWorks Summer Institute/)).toBeInTheDocument();
    expect(screen.getByText(/Boop Light Detector/)).toBeInTheDocument();

    // DevAI tools should NOT be rendered on the Robotics Research page
    const devAiTitles = [
      'Visual Regression & UX Auditor',
      'AI Blog Drafter',
      'Ecommerce Automation Experiments'
    ];

    devAiTitles.forEach((title) => {
      expect(screen.queryByText((content) => content.includes(title))).toBeNull();
    });
  });
});
