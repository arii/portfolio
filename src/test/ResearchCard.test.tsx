import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import ResearchCard from '@/components/ResearchCard';
import { ResearchPost } from '@/types/research';

const mockPost: ResearchPost = {
  slug: 'test-post',
  title: 'Test Robotics Title',
  date: '2026-08-01',
  readingTime: '5 min read',
  tags: ['Robotics', 'Testing'],
  summary: 'Summary of the test post.',
  content: '# Test Title\nTest Content'
};

describe('ResearchCard Component', () => {
  it('renders title, summary, and tags accurately', () => {
    render(<ResearchCard post={mockPost} onSelect={() => {}} />);

    expect(screen.getByText('Test Robotics Title')).toBeInTheDocument();
    expect(screen.getByText('Summary of the test post.')).toBeInTheDocument();
    expect(screen.getByText('$robotics')).toBeInTheDocument();
  });

  it('triggers onSelect when clicked', () => {
    const handleSelect = vi.fn();
    render(<ResearchCard post={mockPost} onSelect={handleSelect} />);

    fireEvent.click(screen.getByRole('button'));
    expect(handleSelect).toHaveBeenCalledWith('test-post');
  });
});
