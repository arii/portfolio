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

  it('does NOT render Core Pillars philosophy cards', () => {
    render(<About />);

    expect(screen.queryByText('Core Pillars')).not.toBeInTheDocument();
    expect(screen.queryByText('AI-Accelerated Rigor')).not.toBeInTheDocument();
    expect(screen.queryByText('Reliable Robot Behavior')).not.toBeInTheDocument();
    expect(screen.queryByText('Production Robot Software')).not.toBeInTheDocument();
  });
});
