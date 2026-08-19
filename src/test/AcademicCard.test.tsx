import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import AcademicCard from '@/components/AcademicCard';

describe('AcademicCard Component', () => {
  const paper = {
    id: 'test-paper',
    title: 'Test Robotics Paper',
    type: 'Conference Paper',
    year: '2024',
    authors: ['Ariel S. Anders'],
    venue: 'ICRA 2024',
    summary: 'A novel approach to robotic manipulation.',
    tags: ['Robotics', 'Manipulation', 'AI', 'Planning', 'Control'],
    link: 'https://example.com/paper.pdf'
  };

  it('renders compact view with title, venue, year, and limited tags', () => {
    render(<AcademicCard paper={paper} />);

    expect(screen.getByText('Test Robotics Paper')).toBeInTheDocument();
    expect(screen.getByText('ICRA 2024')).toBeInTheDocument();
    expect(screen.getByText('2024')).toBeInTheDocument();
    expect(screen.getByText('Robotics')).toBeInTheDocument();
    expect(screen.getByText('+2 more')).toBeInTheDocument();
    expect(screen.getByText('Read Abstract')).toBeInTheDocument();
  });

  it('expands abstract and shows all tags on toggle click', () => {
    render(<AcademicCard paper={paper} />);

    const readAbstractBtn = screen.getByText('Read Abstract');
    fireEvent.click(readAbstractBtn);

    expect(screen.getByText('Hide Details')).toBeInTheDocument();
    expect(screen.getByText(/Authors: Ariel S. Anders/i)).toBeInTheDocument();
    expect(screen.getByText('Planning')).toBeInTheDocument();
    expect(screen.getByText('Control')).toBeInTheDocument();
  });
});
