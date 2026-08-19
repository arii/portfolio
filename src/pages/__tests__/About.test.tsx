import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import About from '../About';

describe('About Page Content Ownership', () => {
  it('renders bio, advisor credibility line, and resume outlink', () => {
    render(<About />);

    expect(screen.getByText('Ariel Anders, PhD')).toBeInTheDocument();
    expect(screen.getByText('Professional Summary')).toBeInTheDocument();
    expect(
      screen.getByText((content) =>
        content.includes('applying robotics-grade software rigor to autonomous AI engineering agents')
      )
    ).toBeInTheDocument();

    expect(
      screen.getByText('Advised by Leslie Kaelbling & Tomas Lozano-Perez')
    ).toBeInTheDocument();

    expect(
      screen.getByText('View full publications & experience →')
    ).toBeInTheDocument();
  });

  it('does NOT render Core Pillars philosophy cards or Currently Exploring section', () => {
    render(<About />);

    expect(screen.queryByText('Core Pillars')).not.toBeInTheDocument();
    expect(screen.queryByText('AI-Accelerated Rigor')).not.toBeInTheDocument();
    expect(screen.queryByText('Reliable Robot Behavior')).not.toBeInTheDocument();
    expect(screen.queryByText('Production Robot Software')).not.toBeInTheDocument();

    expect(screen.queryByText('Currently Exploring')).not.toBeInTheDocument();
    expect(screen.queryByText('Agentic Workflows')).not.toBeInTheDocument();
  });

  it('renders updated career highlights including UCSC, MIT 2012–2020, Civ Robotics, and DevAI', () => {
    render(<About />);

    expect(screen.getByText('UCSC (Computer Engineering, BS)')).toBeInTheDocument();
    expect(screen.getByText('2008 – 2012')).toBeInTheDocument();
    expect(screen.getByText('2012 – 2020')).toBeInTheDocument();
    expect(screen.getByText('2025 – 2026')).toBeInTheDocument();
    expect(screen.getByText('2026 – Present')).toBeInTheDocument();

    expect(screen.getByText('Civ Robotics')).toBeInTheDocument();
    expect(screen.getByText('DevAI')).toBeInTheDocument();
  });
});
