import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import Footer from '@/layouts/Footer';

const renderFooter = () =>
  render(
    <MemoryRouter>
      <Footer />
    </MemoryRouter>
  );

describe('Footer Component', () => {
  it('renders updated copyright text with degree', () => {
    renderFooter();
    expect(screen.getByText(/Ariel Anders, PhD/i)).toBeInTheDocument();
  });

  it('renders the Maya Angelou quote beneath copyright', () => {
    renderFooter();
    expect(
      screen.getByText(/Try to be a rainbow in someone’s cloud/i)
    ).toBeInTheDocument();
  });

  it('renders LinkedIn, GitHub, and BoomTick social links and excludes email', () => {
    renderFooter();
    expect(screen.getByRole('link', { name: /linkedin/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /github/i })).toBeInTheDocument();
    const boomtickLink = screen.getByRole('link', { name: /boomtick/i });
    expect(boomtickLink).toBeInTheDocument();
    expect(boomtickLink).toHaveAttribute('href', 'https://boomtick.blog');
    expect(screen.queryByRole('link', { name: /email/i })).not.toBeInTheDocument();
  });

  it('renders a consulting link to the consulting page', () => {
    renderFooter();
    const consultingLink = screen.getByRole('link', { name: /Ariel Anders Consulting/i });
    expect(consultingLink).toBeInTheDocument();
    expect(consultingLink).toHaveAttribute('href', '/consulting');
  });

  it('does not render outdated location or metadata on the right side', () => {
    renderFooter();
    expect(screen.queryByText(/San Francisco, CA/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/arii\.github\.io/i)).not.toBeInTheDocument();
  });
});
