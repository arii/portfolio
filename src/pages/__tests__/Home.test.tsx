import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Home } from '../Home';

describe('Home Page', () => {
  it('renders hero title and role hierarchy correctly', () => {
    const handleNavigate = vi.fn();
    render(
      <MemoryRouter>
        <Home onNavigate={handleNavigate} />
      </MemoryRouter>
    );

    expect(screen.getByRole('heading', { level: 1, name: /Ariel Anders, PhD/i })).toBeInTheDocument();
    expect(screen.getByText('Roboticist & Senior Software Engineer')).toBeInTheDocument();
  });

  it('renders all three distilled bio paragraphs without outdated employer listings', () => {
    const handleNavigate = vi.fn();
    render(
      <MemoryRouter>
        <Home onNavigate={handleNavigate} />
      </MemoryRouter>
    );

    expect(
      screen.getByText(/I architect reliable autonomous systems for physical robots and build agentic workflows that autonomously engineer full-stack software\./i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/I am an MIT CSAIL roboticist whose work focuses on building reliable autonomous systems\./i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Over the past year, I’ve built stateful, multi-agent workflows for software development/i)
    ).toBeInTheDocument();

    // Verify removed employer list is absent from the hero
    expect(screen.queryByText(/At Robust AI, I was the tech lead/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/At Waymo, I worked on the planning team/i)).not.toBeInTheDocument();
  });

  it('does not render the removed hero badge', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    expect(screen.queryByText(/✨ Robotics & DevAI/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Autonomous Systems & AI Orchestration/i)).not.toBeInTheDocument();
  });

  it('renders engineering philosophy callout and tenets', () => {
    const handleNavigate = vi.fn();
    render(
      <MemoryRouter>
        <Home onNavigate={handleNavigate} />
      </MemoryRouter>
    );

    expect(screen.getByText('Engineering Philosophy')).toBeInTheDocument();
    expect(screen.getByText('AI-Accelerated Rigor')).toBeInTheDocument();
    expect(
      screen.getByText(/AI should raise the bar, not lower it/i)
    ).toBeInTheDocument();
    expect(screen.getByText('Make Robots Behave')).toBeInTheDocument();
    expect(
      screen.getByText(/Robots operate in environments that are uncertain and hard to model/i)
    ).toBeInTheDocument();
  });

  it('renders bottom feature callouts row with all 4 domain pillars', () => {
    const handleNavigate = vi.fn();
    render(
      <MemoryRouter>
        <Home onNavigate={handleNavigate} />
      </MemoryRouter>
    );

    expect(screen.getByText('Motion Planning & Autonomy')).toBeInTheDocument();
    expect(screen.getByText('Agentic DevAI')).toBeInTheDocument();
    expect(screen.getByText('Production Software')).toBeInTheDocument();
    expect(screen.getByText('Deployment & Edge Infrastructure')).toBeInTheDocument();
  });

  it('renders both Agentic AI and Robotics Research CTA buttons with correct attributes', () => {
    const handleNavigate = vi.fn();
    render(
      <MemoryRouter>
        <Home onNavigate={handleNavigate} />
      </MemoryRouter>
    );

    const aiBtn = screen.getByRole('link', { name: /view agentic ai work/i });
    const roboticsBtn = screen.getByRole('link', { name: /view robotics research/i });

    expect(aiBtn).toBeInTheDocument();
    expect(aiBtn).toHaveAttribute('href', '/devai');

    expect(roboticsBtn).toBeInTheDocument();
    expect(roboticsBtn).toHaveAttribute('href', '/research');

    fireEvent.click(aiBtn);
    expect(handleNavigate).toHaveBeenCalledWith('devai');

    fireEvent.click(roboticsBtn);
    expect(handleNavigate).toHaveBeenCalledWith('research');
  });

  it('triggers navigation callback when focus area cards are clicked', () => {
    const handleNavigate = vi.fn();
    render(
      <MemoryRouter>
        <Home onNavigate={handleNavigate} />
      </MemoryRouter>
    );

    const productsCard = screen.getByText('Products built with DevAI');
    fireEvent.click(productsCard);
    expect(handleNavigate).toHaveBeenCalledWith('/devai');
  });
});
