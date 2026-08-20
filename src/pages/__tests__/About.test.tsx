import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import About from '../About';

describe('About Page Content Ownership', () => {
  it('renders bio, advisor credibility line, and resume outlink', () => {
    render(<About />);

    expect(screen.getByText('Ariel Anders, PhD')).toBeInTheDocument();
    expect(screen.getByText('Education')).toBeInTheDocument();
    expect(screen.getByText('PhD Focus')).toBeInTheDocument();
    expect(screen.getByText('PhD Advisors')).toBeInTheDocument();
    expect(screen.getByText('Awards & Honors')).toBeInTheDocument();
    expect(screen.getByText('Motion planning under uncertainty for robot manipulation')).toBeInTheDocument();
    expect(screen.getByText('Leslie Kaelbling & Tomas Lozano-Perez')).toBeInTheDocument();
    expect(
      screen.getByText((content) =>
        content.includes('applying robotics-grade software rigor to autonomous AI engineering agents')
      )
    ).toBeInTheDocument();

    expect(
      screen.getByText('Leslie Kaelbling & Tomas Lozano-Perez')
    ).toBeInTheDocument();

    expect(
      screen.getByText('San Francisco, CA')
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

  it('renders simplified career highlights and abbreviated education entries', () => {
    render(<About />);

    expect(screen.getByText('2012 – 2014: MIT EECS SM')).toBeInTheDocument();
    expect(screen.getByText('2014 – 2019: MIT EECS PhD')).toBeInTheDocument();

    expect(screen.getByText('2012 – 2019')).toBeInTheDocument();
    expect(screen.getByText('2019 – 2022')).toBeInTheDocument();
    expect(screen.getByText('2022 – 2024')).toBeInTheDocument();
    expect(screen.getByText('2025 – 2026')).toBeInTheDocument();
    expect(screen.getByText('2026 – Present')).toBeInTheDocument();

    expect(screen.getByText('MIT CSAIL')).toBeInTheDocument();
    expect(screen.getByText('Robust.AI')).toBeInTheDocument();
    expect(screen.getByText('Waymo')).toBeInTheDocument();
    expect(screen.getByText('Civ Robotics')).toBeInTheDocument();
    expect(screen.getByText('DevAI')).toBeInTheDocument();

    expect(
      screen.getByText((content) => content.includes('Learning and Intelligent Systems (LIS) group'))
    ).toBeInTheDocument();
    expect(
      screen.getByText((content) => content.includes('Senior software engineer in the Planning team'))
    ).toBeInTheDocument();
  });
});
