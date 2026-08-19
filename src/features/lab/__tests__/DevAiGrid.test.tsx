import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import DevAiGrid from '../DevAiGrid';
import { DEVAI_PROJECTS } from '@/config/devAiProjects';

describe('DevAiGrid Component', () => {
  it('renders all 5 projects from DEVAI_PROJECTS config', () => {
    render(<DevAiGrid />);

    DEVAI_PROJECTS.forEach((project) => {
      expect(screen.getByText(project.title)).toBeInTheDocument();
      expect(screen.getByText(project.description)).toBeInTheDocument();
    });
  });

  it('renders category badges, metrics, and external project links correctly', () => {
    render(<DevAiGrid />);

    // Verify categories
    expect(screen.getAllByText('Software').length).toBeGreaterThan(0);
    expect(screen.getByText('Robotics')).toBeInTheDocument();
    expect(screen.getByText('Education')).toBeInTheDocument();
    expect(screen.getByText('Web')).toBeInTheDocument();

    // Verify metrics
    expect(screen.getByText('6,000+ Downloads')).toBeInTheDocument();

    // Verify external links
    const externalLinks = screen.getAllByRole('link', { name: /view project/i });
    expect(externalLinks.length).toBe(5);
    expect(externalLinks[0]).toHaveAttribute('href', 'http://arii.github.io/boop/');
  });
});
