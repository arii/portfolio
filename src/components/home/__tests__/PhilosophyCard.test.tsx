import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import PhilosophyCard from '../PhilosophyCard';

describe('PhilosophyCard Component', () => {
  it('renders all three engineering philosophy pillars', () => {
    render(<PhilosophyCard />);
    expect(screen.getByText('Engineering Philosophy')).toBeInTheDocument();
    expect(screen.getByText('AI-Accelerated Rigor')).toBeInTheDocument();
    expect(screen.getByText('Reliable Robot Behavior')).toBeInTheDocument();
    expect(screen.getByText('Production Robot Software')).toBeInTheDocument();
  });
});
