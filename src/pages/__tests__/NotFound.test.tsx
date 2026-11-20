import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { describe, it, expect } from 'vitest';
import NotFound from '../NotFound';

describe('NotFound page', () => {
  it('renders a heading and navigation links home', () => {
    render(
      <HelmetProvider>
        <MemoryRouter initialEntries={['/cobrowser/']}>
          <NotFound />
        </MemoryRouter>
      </HelmetProvider>
    );
    expect(screen.getByRole('heading', { name: /page not found/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('href', '/');
  });
});
