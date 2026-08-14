import React from 'react';
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
    expect(screen.getByText('Senior Roboticist & DevAI Engineer')).toBeInTheDocument();
    expect(screen.queryByText(/Build smart\. Ship more\./i)).not.toBeInTheDocument();
    expect(screen.queryByText(/boomtick\.blog/i)).not.toBeInTheDocument();
  });

  it('renders action links to DevAI and Technical Research sections', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );

    expect(screen.getByText('Explore DevAI Portfolio')).toBeInTheDocument();
    expect(screen.getByText('Read Technical Deep Dives')).toBeInTheDocument();
  });
});
