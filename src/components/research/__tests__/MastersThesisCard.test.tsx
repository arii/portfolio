import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import MastersThesisCard from '../MastersThesisCard';
import { mastersThesisData } from '@/data/research/theses';

describe('MastersThesisCard Component', () => {
  it('renders thesis title, institution, degree type, and action URL', () => {
    render(<MastersThesisCard />);

    expect(
      screen.getByText('Learning a Strategy for Whole-Arm Grasping')
    ).toBeInTheDocument();
    expect(screen.getByText("Master's Thesis")).toBeInTheDocument();
    expect(screen.getAllByText('MIT CSAIL').length).toBeGreaterThan(0);

    const dspaceLink = screen.getByRole('link', {
      name: /MIT DSpace Publication/i,
    });
    expect(dspaceLink).toHaveAttribute('href', mastersThesisData.dspaceUrl);
    expect(dspaceLink).toHaveAttribute('target', '_blank');
    expect(dspaceLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('renders image banner with appropriate alt text', () => {
    render(<MastersThesisCard />);
    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('src', mastersThesisData.imageSrc);
    expect(image).toHaveAttribute('alt', mastersThesisData.imageAlt);
  });
});
