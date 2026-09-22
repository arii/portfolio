import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import ResearchCard from '../components/ResearchCard';
import { ResearchPost } from '../types/research';

const mockPost: ResearchPost = {
  slug: 'test-robotics-post',
  title: 'Test Robotics Title',
  category: 'Robotics',
  date: '2026-08-01',
  readingTime: '5 min read',
  tags: ['Robotics', 'Testing'],
  summary: 'Summary of the test post.',
  content: 'Full content of the test post.'
};

describe('ResearchCard Component', () => {
  it('renders title, summary, and tags accurately', () => {
    const mockOnSelect = vi.fn();
    render(
      <MemoryRouter>
        <ResearchCard post={mockPost} onSelect={mockOnSelect} />
      </MemoryRouter>
    );

    expect(screen.getByText('Test Robotics Title')).toBeInTheDocument();
    expect(screen.getByText('Summary of the test post.')).toBeInTheDocument();
    expect(screen.getByText('Robotics')).toBeInTheDocument();
  });

  it('renders semantic link and triggers onSelect when clicked', () => {
    const mockOnSelect = vi.fn();
    render(
      <MemoryRouter>
        <ResearchCard post={mockPost} onSelect={mockOnSelect} />
      </MemoryRouter>
    );

    const link = screen.getByRole('link', { name: /Read article: Test Robotics Title/i });
    expect(link).toHaveAttribute('href', '/research/test-robotics-post');
    fireEvent.click(link);

    expect(mockOnSelect).toHaveBeenCalledWith('test-robotics-post');
    expect(mockOnSelect).toHaveBeenCalledTimes(1);
  });
});
