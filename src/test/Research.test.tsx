import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import ResearchCard from '@/components/ResearchCard';
import ResearchListPage from '@/pages/ResearchListPage';
import { ResearchPost } from '@/data/research';

const mockPost: ResearchPost = {
  id: 'test-post',
  slug: 'test-post',
  title: 'Test Robotics Title',
  date: '2026-08-01',
  readingTime: '5 min read',
  tags: ['Robotics', 'Testing'],
  category: 'Testing',
  summary: 'Summary of the test post.',
  content: '# Test Title\nTest Content'
};

describe('ResearchCard Component', () => {
  it('renders title, summary, and tags accurately', () => {
    render(<ResearchCard post={mockPost} onSelect={() => {}} />);

    // Check with direct matching
    expect(screen.getByText('Test Robotics Title')).toBeInTheDocument();
    expect(screen.getByText('Summary of the test post.')).toBeInTheDocument();
    expect(screen.getByText('Robotics')).toBeInTheDocument();
  });

  it('triggers onSelect when clicked', () => {
    const handleSelect = vi.fn();
    render(<ResearchCard post={mockPost} onSelect={handleSelect} />);

    fireEvent.click(screen.getByRole('button'));
    expect(handleSelect).toHaveBeenCalledWith('test-post');
  });
});

describe('ResearchListPage Component', () => {
  it('renders standard header and flagship tools', () => {
    render(
      <MemoryRouter>
        <ResearchListPage onNavigate={() => {}} />
      </MemoryRouter>
    );

    expect(screen.getByText('DevAI Portfolio')).toBeInTheDocument();
    expect(screen.getByText('HRM (Heart Rate Monitor)')).toBeInTheDocument();

    const repoAuditorMatches = screen.getAllByText('RepoAuditor AI');
    expect(repoAuditorMatches.length).toBeGreaterThan(0);
    expect(repoAuditorMatches[0]).toBeInTheDocument();
  });

  it('renders other engineering tools', () => {
    render(
      <MemoryRouter>
        <ResearchListPage onNavigate={() => {}} />
      </MemoryRouter>
    );

    const matches = screen.getAllByText('Optimizing Heterogeneous CI/CD Pipelines with GitHub Actions');
    expect(matches.length).toBeGreaterThan(0);
    expect(matches[0]).toBeInTheDocument();
  });
});
