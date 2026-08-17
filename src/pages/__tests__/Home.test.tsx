import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import Home from '../Home';

describe('Home Page', () => {
  it('renders Ariel Anders Portfolio hero heading without AI slop taglines', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );

    expect(screen.getByText('Ariel Anders, PhD')).toBeInTheDocument();
    expect(screen.getByText(/Shipping Production Software Across Domains/i)).toBeInTheDocument();
    expect(screen.queryByText(/Build smart\. Ship more\./i)).not.toBeInTheDocument();

  });

  it('renders action links to Products, Infrastructure and Research sections', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );

    expect(screen.getByText('How I Work')).toBeInTheDocument();
    expect(screen.getByText('View Live Products')).toBeInTheDocument();
    expect(screen.getByText('Inspect Infrastructure')).toBeInTheDocument();
    expect(screen.getByText('Read Architecture Studies')).toBeInTheDocument();
  });
});
