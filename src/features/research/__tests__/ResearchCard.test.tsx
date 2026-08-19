import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import ResearchCard from '../ResearchCard';
import { RESEARCH_PROJECTS, ResearchProject } from '@/config/researchProjects';

describe('features/research/ResearchCard Component', () => {
  const sampleProject: ResearchProject = {
    id: 'test-project',
    title: 'Test Project Title',
    subtitle: 'Test Project Subtitle',
    description: 'Test project description content.',
    imageSrc: '/assets/research/test.png',
    imageAlt: 'Test image alt',
    tags: ['Robotics', 'AI'],
    publicationUrl: 'https://example.com/paper'
  };

  it('renders project title, subtitle, description, tags, and image', () => {
    render(<ResearchCard project={sampleProject} />);

    expect(screen.getByText('Test Project Title')).toBeInTheDocument();
    expect(screen.getByText('Test Project Subtitle')).toBeInTheDocument();
    expect(screen.getByText('Test project description content.')).toBeInTheDocument();
    expect(screen.getByText('Robotics')).toBeInTheDocument();
    expect(screen.getByText('AI')).toBeInTheDocument();

    const img = screen.getByAltText('Test image alt');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', '/assets/research/test.png');
  });

  it('renders publication link when publicationUrl is provided', () => {
    render(<ResearchCard project={sampleProject} />);

    const link = screen.getByRole('link', { name: /read publication/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', 'https://example.com/paper');
    expect(link).toHaveAttribute('target', '_blank');
  });

  it('does not render publication link when publicationUrl is missing', () => {
    const projectNoLink: ResearchProject = {
      ...sampleProject,
      publicationUrl: undefined
    };

    render(<ResearchCard project={projectNoLink} />);
    expect(screen.queryByRole('link', { name: /read publication/i })).not.toBeInTheDocument();
  });

  it('renders RESEARCH_PROJECTS fixtures accurately', () => {
    RESEARCH_PROJECTS.forEach((proj) => {
      const { unmount } = render(<ResearchCard project={proj} />);
      expect(screen.getByText(proj.title)).toBeInTheDocument();
      expect(screen.getByText(proj.subtitle)).toBeInTheDocument();
      unmount();
    });
  });
});
