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
    expect(screen.getByText(/Robotics & DevAI/i)).toBeInTheDocument();
    expect(screen.queryByText(/Build smart\. Ship more\./i)).not.toBeInTheDocument();
  });

  it('renders updated subheading, bio, and engineering philosophy', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );

    expect(
      screen.getByText(/I architect reliable autonomous systems for physical robots and build agentic workflows/i)
    ).toBeInTheDocument();

    expect(screen.getByText(/MIT CSAIL roboticist/i)).toBeInTheDocument();
    expect(screen.getByText(/Robust AI/i)).toBeInTheDocument();
    expect(screen.getByText(/Waymo/i)).toBeInTheDocument();
    expect(screen.getByText(/CIV/i)).toBeInTheDocument();

    expect(screen.getByText(/AI-Accelerated Rigor:/i)).toBeInTheDocument();
    expect(screen.getByText(/Reliable Robot Behavior:/i)).toBeInTheDocument();
    expect(screen.getByText(/Production Robot Software:/i)).toBeInTheDocument();
  });

  it('renders action links to Products, Infrastructure and Research sections', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );

    expect(screen.getByText('View portfolio')).toBeInTheDocument();
    expect(screen.getByText('View Live Products')).toBeInTheDocument();
    expect(screen.getByText('Inspect Infrastructure')).toBeInTheDocument();
    expect(screen.getByText('Read Architecture Studies')).toBeInTheDocument();
  });
});
