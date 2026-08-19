import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Footer from '@/layouts/Footer';

describe('Footer Component', () => {
  it('renders updated copyright text with degree', () => {
    render(<Footer />);
    expect(screen.getByText(/Ariel Anders, PhD/i)).toBeInTheDocument();
  });

  it('renders the Maya Angelou quote beneath copyright', () => {
    render(<Footer />);
    expect(
      screen.getByText(/Try to be a rainbow in someone’s cloud/i)
    ).toBeInTheDocument();
  });

  it('renders only LinkedIn and GitHub social links and excludes email', () => {
    render(<Footer />);
    expect(screen.getByRole('link', { name: /linkedin/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /github/i })).toBeInTheDocument();
    expect(screen.queryByRole('link', { name: /email/i })).not.toBeInTheDocument();
  });

  it('does not render outdated location or metadata on the right side', () => {
    render(<Footer />);
    expect(screen.queryByText(/San Francisco, CA/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/arii\.github\.io/i)).not.toBeInTheDocument();
  });
});
