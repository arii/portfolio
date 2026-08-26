import { render, screen } from '@testing-library/react';
import Resume from '../Resume';
import { describe, it, expect } from 'vitest';

window.matchMedia = window.matchMedia || function() {
  return {
    matches: false,
    addListener: function() {},
    removeListener: function() {}
  };
};

describe('Resume Page', () => {
  it('renders all sections and updated content correctly', () => {
    render(<Resume />);

    // Header title & PDF button
    expect(screen.getByText('Resume')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /View PDF/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /View PDF/i })).toHaveAttribute('href', 'https://drive.google.com/file/d/14V6KjfEMO12uwNQAhY1OMy2d-_vkGXK_/view');

    // Scholar link appears in publications section
    const scholarLinks = screen.getAllByRole('link', { name: /Google Scholar/i });
    expect(scholarLinks.length).toBeGreaterThanOrEqual(1);

    // Section Headings
    expect(screen.getByRole('heading', { name: /^Experience$/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /^Publications & Theses$/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /^Technical Skills$/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /^Education$/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /^Honors & Recognition$/i })).toBeInTheDocument();
    expect(screen.getByText(/Robohub’s 30 Women in Robotics You Need to Know About/i)).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /^Teaching & Leadership$/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /^Impact Projects$/i })).toBeInTheDocument();

    // Experience timeline & nested sub-roles
    expect(screen.getByText('Civ Robotics')).toBeInTheDocument();
    expect(screen.getByText('Senior Roboticist / Tech Lead')).toBeInTheDocument();
    expect(screen.getByText('Robust.AI')).toBeInTheDocument();

    // Skills badge pills
    expect(screen.getByText('Motion planning')).toBeInTheDocument();
    expect(screen.getByText('C++')).toBeInTheDocument();
    expect(screen.getByText('Matlab')).toBeInTheDocument();
    expect(screen.getByText('Gemini API')).toBeInTheDocument();
    expect(screen.getByText('Unix / Mac / Windows')).toBeInTheDocument();

    // Impact Project Tech Stack Badge Tags
    expect(screen.getByText('Swift / Objective-C')).toBeInTheDocument();
    expect(screen.getByText('MindHandHeart Grant')).toBeInTheDocument();
    expect(screen.getByText('Acoustic Feedback')).toBeInTheDocument();

    // Publications & Detailed Paper Entries
    expect(screen.getByText(/Reliably Arranging Objects in Uncertain Domains/i)).toBeInTheDocument();
    expect(screen.getByText(/Policy Search for Multi-Robot Coordination under Uncertainty/i)).toBeInTheDocument();
    expect(screen.getByText(/Active Fume Hood Sash Height Monitoring/i)).toBeInTheDocument();
  });
});
