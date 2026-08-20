import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navigation from '../Navigation';

describe('Navigation Header Component', () => {
  it('renders updated brand title and brand role', () => {
    render(
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>
    );

    expect(screen.getByText('Ariel Anders Portfolio')).toBeInTheDocument();
    expect(screen.getByText('Roboticist & Agentic Orchestration Architect')).toBeInTheDocument();
  });

  it('renders standard navigation links', () => {
    render(
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>
    );

    expect(screen.getByText('Overview')).toBeInTheDocument();
    expect(screen.getByText('DevAI')).toBeInTheDocument();
    expect(screen.getByText('Research')).toBeInTheDocument();
    expect(screen.getByText('Resume')).toBeInTheDocument();
  });
});
