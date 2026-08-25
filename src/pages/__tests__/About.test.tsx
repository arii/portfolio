import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import About from '../About';

describe('About Page Content Ownership', () => {
  it('renders bio, advisor credibility line, and resume outlink', () => {
    render(<About />);

    expect(screen.getByText('About Ariel')).toBeInTheDocument();
    expect(screen.getByText('Education')).toBeInTheDocument();
    expect(screen.getByText('Honors')).toBeInTheDocument();
    expect(
      screen.getByText('robotics-grade reliability to AI-assisted engineering')
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

    expect(screen.getByText('MIT EECS PhD 2019 · SM 2014')).toBeInTheDocument();

    expect(screen.getByText('2012 – 2019')).toBeInTheDocument();
    expect(screen.getByText('2019 – 2022')).toBeInTheDocument();
    expect(screen.getByText('2022 – 2024')).toBeInTheDocument();
    expect(screen.getByText('2025 – 2026')).toBeInTheDocument();

    expect(screen.getByText('MIT CSAIL')).toBeInTheDocument();
    expect(screen.getByText('Robust.AI')).toBeInTheDocument();
    expect(screen.getByText('Waymo')).toBeInTheDocument();
    expect(screen.getByText('Civ Robotics')).toBeInTheDocument();

    expect(
      screen.getByText((content) => content.includes('Learning and Intelligent Systems (LIS) group'))
    ).toBeInTheDocument();
    expect(
      screen.getByText((content) => content.includes('Planning team'))
    ).toBeInTheDocument();
  });
});
