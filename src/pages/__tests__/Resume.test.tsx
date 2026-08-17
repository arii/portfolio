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

    // Header name, summary & PDF button
    expect(screen.getByText('Ariel Anders, PhD')).toBeInTheDocument();
    expect(screen.getByText(/Roboticist and Senior Software Engineer with an MIT CSAIL PhD/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Export PDF/i })).toBeInTheDocument();

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
    expect(screen.getByRole('heading', { name: /^Teaching & Leadership$/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /^Impact Projects$/i })).toBeInTheDocument();

    // Experience timeline & nested sub-roles
    expect(screen.getByText('Civ Robotics')).toBeInTheDocument();
    expect(screen.getByText('Senior Roboticist / Tech Lead')).toBeInTheDocument();
    expect(screen.getByText('Robust.AI')).toBeInTheDocument();
    expect(screen.getByText(/Real-Time Telemetry: Built Web Bluetooth/i)).toBeInTheDocument();

    // Publications & Google Scholar link
    expect(screen.getByText(/Reliably Arranging Objects: A Conformant Planning Approach/i)).toBeInTheDocument();

    // Skills badge pills
    expect(screen.getByText('Motion Planning')).toBeInTheDocument();
    expect(screen.getByText('C++')).toBeInTheDocument();
    expect(screen.getByText('ROS 1 / 2')).toBeInTheDocument();

    // Honors & Recognition
    expect(screen.getByText(/Robohub’s 30 Women in Robotics/i)).toBeInTheDocument();
    expect(screen.getByText(/MIT Graduate Women of Excellence/i)).toBeInTheDocument();

    // Teaching & Leadership
    expect(screen.getByText(/Frederick C. Hennie III Teaching Award/i)).toBeInTheDocument();

    // Impact projects & metric tags
    expect(screen.getByText(/Accessible Tech: Boop Light Detector/i)).toBeInTheDocument();
    expect(screen.getByText('6,000+ App Store Downloads')).toBeInTheDocument();
  });
});
