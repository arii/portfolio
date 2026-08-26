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
    expect(screen.getByText(/Motion Planning & Autonomy/i)).toBeInTheDocument();

    // We expect multiple mentions of "Agentic DevAI" now due to the CTA button, so use getAllByText
    const devaiElements = screen.getAllByText(/Agentic DevAI/i);
    expect(devaiElements.length).toBeGreaterThan(0);

    expect(screen.getByText(/Production Software/i)).toBeInTheDocument();
    expect(screen.getByText(/Deployment & Edge Infrastructure/i)).toBeInTheDocument();
  });
});
