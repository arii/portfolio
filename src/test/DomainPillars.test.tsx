import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import Home from '@/pages/Home';

describe('Domain Pillars Component', () => {
  it('renders all four domain pillars without redundancy', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    expect(screen.getByText(/Algorithmic Motion Planning/i)).toBeInTheDocument();
    expect(screen.getByText(/DevAI & AI Workflows/i)).toBeInTheDocument();
    expect(screen.getByText(/Production Systems Architecture/i)).toBeInTheDocument();
    expect(screen.getByText(/Deployment & Edge Infrastructure Experience/i)).toBeInTheDocument();
  });
});
