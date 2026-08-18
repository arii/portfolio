import { render, screen, fireEvent } from '@testing-library/react';
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

    // Header name, title, summary & PDF button
    expect(screen.getByText('Ariel Anders, PhD')).toBeInTheDocument();
    expect(screen.getByText('Roboticist & Senior Software Engineer')).toBeInTheDocument();
    expect(screen.getByText(/Roboticist and Senior Software Engineer with an MIT CSAIL PhD/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Export PDF/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Export PDF/i })).toHaveAttribute('href', 'https://drive.google.com/file/d/14V6KjfEMO12uwNQAhY1OMy2d-_vkGXK_/view');

    // Social header links (Google Scholar link appears in header & publications section)
    const scholarLinks = screen.getAllByRole('link', { name: /Google Scholar/i });
    expect(scholarLinks.length).toBeGreaterThanOrEqual(1);
    expect(screen.getByRole('link', { name: /Email/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /LinkedIn/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /GitHub/i })).toBeInTheDocument();

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
    expect(screen.getByText('Motion Planning')).toBeInTheDocument();
    expect(screen.getByText('C++')).toBeInTheDocument();
    expect(screen.getByText('Matlab')).toBeInTheDocument();
    expect(screen.getByText('Gemini API')).toBeInTheDocument();
    expect(screen.getByText('Unix / Mac / Windows')).toBeInTheDocument();

    // Impact Project Tech Stack Badge Tags
    expect(screen.getByText('Swift / Objective-C')).toBeInTheDocument();
    expect(screen.getByText('MindHandHeart Grant')).toBeInTheDocument();
    expect(screen.getByText('Acoustic Feedback')).toBeInTheDocument();

    // Publications & Detailed Paper Entries
    expect(screen.getByText(/Reliably Arranging Objects: A Conformant Planning Approach/i)).toBeInTheDocument();
    expect(screen.getByText(/Policy Search for Multi-Robot Coordination under Uncertainty/i)).toBeInTheDocument();
    expect(screen.getByText(/Active Fume Hood Sash Height Monitoring/i)).toBeInTheDocument();

    const abstractToggle = screen.getByRole('button', { name: /View PhD Abstract & Findings/i });
    expect(abstractToggle).toBeInTheDocument();

    // Expand abstract
    fireEvent.click(abstractToggle);
    expect(screen.getByText(/Fixture Placement:/i)).toBeInTheDocument();
    expect(screen.getByText(/Noise Characterization:/i)).toBeInTheDocument();
  });
});
