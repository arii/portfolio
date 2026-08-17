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

  it('renders updated subheading, bio, and company track record', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );

    expect(
      screen.getByText(/I architect reliable autonomous systems/i)
    ).toBeInTheDocument();

    expect(screen.getAllByText(/MIT CSAIL/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Robust\.AI/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Waymo/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Civ Robotics/i).length).toBeGreaterThan(0);
  });

  it('renders engineering philosophy section and tenets', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );

    expect(screen.getByText('Engineering Philosophy')).toBeInTheDocument();
    expect(screen.getByText('AI-Accelerated Rigor')).toBeInTheDocument();
    expect(screen.getByText('Reliable Robot Behavior')).toBeInTheDocument();
    expect(screen.getByText('Production Robot Software')).toBeInTheDocument();
  });

  it('renders focus cards with tech tags and action links', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );

    expect(screen.getByText('View portfolio')).toBeInTheDocument();
    expect(screen.getByText('View Live Products')).toBeInTheDocument();
    expect(screen.getByText('Inspect Infrastructure')).toBeInTheDocument();
    expect(screen.getByText('Read Architecture Studies')).toBeInTheDocument();

    expect(screen.getByText('WebSockets')).toBeInTheDocument();
    expect(screen.getAllByText('Playwright').length).toBeGreaterThan(0);
    expect(screen.getByText('ICRA')).toBeInTheDocument();
  });

  it('renders core engineering stack grid', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );

    expect(screen.getByText('Core Engineering Stack')).toBeInTheDocument();
    expect(screen.getByText('ROS 2')).toBeInTheDocument();
  });
});
