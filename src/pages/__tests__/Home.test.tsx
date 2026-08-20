import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Home } from '../Home';

describe('Home Page', () => {
  it('renders hero title, role, and exact subheading', () => {
    const handleNavigate = vi.fn();
    render(
      <MemoryRouter>
        <Home onNavigate={handleNavigate} />
      </MemoryRouter>
    );

    expect(screen.getByText('Ariel Anders, PhD')).toBeInTheDocument();
    expect(screen.getByText('Roboticist & Senior Software Engineer')).toBeInTheDocument();
    expect(
      screen.getByText(
        'I architect reliable autonomous systems for physical robots and build agentic workflows that autonomously engineer full-stack software.'
      )
    ).toBeInTheDocument();
  });

  it('renders bio paragraphs in hero card', () => {
    const handleNavigate = vi.fn();
    render(
      <MemoryRouter>
        <Home onNavigate={handleNavigate} />
      </MemoryRouter>
    );

    expect(
      screen.getByText((content) =>
        content.includes('I am an MIT CSAIL roboticist and have worked in the industry')
      )
    ).toBeInTheDocument();
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
    expect(screen.queryByText('Production Robot Software')).not.toBeInTheDocument();
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

  it('does not render outdated single portfolio CTA', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    expect(screen.queryByRole('link', { name: /^view portfolio/i })).not.toBeInTheDocument();
    expect(screen.queryByRole('button', { name: /^view portfolio/i })).not.toBeInTheDocument();
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
