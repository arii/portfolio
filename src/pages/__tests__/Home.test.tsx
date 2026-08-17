import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Home } from '../Home';

describe('Home Page', () => {
  it('renders hero title, role, and exact subheading', () => {
    const handleNavigate = vi.fn();
    render(<Home onNavigate={handleNavigate} />);

    expect(screen.getByText('Ariel Anders, PhD')).toBeInTheDocument();
    expect(screen.getByText('Roboticist & Senior Software Engineer')).toBeInTheDocument();
    expect(
      screen.getByText(
        'I architect reliable autonomous systems for physical robots and build agentic workflows that autonomously engineer full-stack software.'
      )
    ).toBeInTheDocument();
  });

  it('renders career badge strip', () => {
    const handleNavigate = vi.fn();
    render(<Home onNavigate={handleNavigate} />);

    expect(screen.getByText('MIT CSAIL PhD')).toBeInTheDocument();
    expect(screen.getByText('Civ Robotics')).toBeInTheDocument();
    expect(screen.getByText('Waymo')).toBeInTheDocument();
    expect(screen.getByText('Robust.AI')).toBeInTheDocument();
  });

  it('renders engineering philosophy section and tenets', () => {
    const handleNavigate = vi.fn();
    render(<Home onNavigate={handleNavigate} />);

    expect(screen.getByText('Engineering Philosophy')).toBeInTheDocument();
    expect(screen.getByText('AI-Accelerated Rigor')).toBeInTheDocument();
    expect(screen.getByText('Reliable Robot Behavior')).toBeInTheDocument();
    expect(screen.getByText('Production Robot Software')).toBeInTheDocument();
  });

  it('triggers navigation callback when cards or portfolio button are clicked', () => {
    const handleNavigate = vi.fn();
    render(<Home onNavigate={handleNavigate} />);

    const portfolioBtn = screen.getByRole('button', { name: /view portfolio/i });
    fireEvent.click(portfolioBtn);
    expect(handleNavigate).toHaveBeenCalledWith('portfolio');

    const productsCard = screen.getByText('Shipped Products');
    fireEvent.click(productsCard);
    expect(handleNavigate).toHaveBeenCalledWith('products');
  });
});
