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


  it('renders bottom feature callouts row', () => {
    const handleNavigate = vi.fn();
    render(
      <MemoryRouter>
        <Home onNavigate={handleNavigate} />
      </MemoryRouter>
    );

    expect(screen.getByText('Algorithmic Motion Planning')).toBeInTheDocument();
    expect(screen.getByText('DevAI & AI Workflows')).toBeInTheDocument();
    expect(screen.getByText('Production Systems Architecture')).toBeInTheDocument();
  });

  it('triggers navigation callback when focus area cards or portfolio button are clicked', () => {
    const handleNavigate = vi.fn();
    render(
      <MemoryRouter>
        <Home onNavigate={handleNavigate} />
      </MemoryRouter>
    );

    const viewWorkBtn = screen.getByRole('button', { name: /view work/i });
    fireEvent.click(viewWorkBtn);
    expect(handleNavigate).toHaveBeenCalledWith('portfolio');

    const productsCard = screen.getByText("Products I've Shipped");
    fireEvent.click(productsCard);
    expect(handleNavigate).toHaveBeenCalledWith('products');
  });
});
