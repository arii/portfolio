import { render, screen } from '@testing-library/react';
import Resume from '../Resume';
import { describe, it, expect } from 'vitest';

// Mock matchMedia to bypass jsdom issues with print styles if any
window.matchMedia = window.matchMedia || function() {
  return {
    matches: false,
    addListener: function() {},
    removeListener: function() {}
  };
};

describe('Resume Page', () => {
  it('renders the main sections of the resume', () => {
    render(<Resume />);

    // Check main headers
    expect(screen.getByText('Ariel Anders, PhD')).toBeInTheDocument();
    expect(screen.getByText('Experience')).toBeInTheDocument();
    expect(screen.getByText('Education')).toBeInTheDocument();
    expect(screen.getByText('Technical Skills')).toBeInTheDocument();
    expect(screen.getByText('Impact Projects')).toBeInTheDocument();

    // Check specific resume content renders
    expect(screen.getByText('Senior Algorithms Developer')).toBeInTheDocument();
    expect(screen.getByText('Civ Robotics')).toBeInTheDocument();

    // Check for Export PDF button
    expect(screen.getByRole('button', { name: /Export PDF/i })).toBeInTheDocument();
  });
});
