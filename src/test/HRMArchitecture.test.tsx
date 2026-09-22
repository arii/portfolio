import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { getResearchPostBySlug } from '@/data/research';
import { flagshipTools } from '@/data/research/flagshipTools';
import FlagshipCard from '@/components/FlagshipCard';
import ResearchDetailPage from '@/pages/ResearchDetailPage';
import DevAI from '@/pages/DevAI';

describe('HRM Architecture & Navigation Integration', () => {
  it('loads the hrm-architecture markdown post correctly', () => {
    const post = getResearchPostBySlug('hrm-architecture');
    expect(post).toBeDefined();
    expect(post?.title).toBe('HRM: Real-Time Biometric Telemetry & Workouts');
    expect(post?.category).toBe('DevAI');
    expect(post?.tags).toContain('React');
    expect(post?.tags).toContain('Web Bluetooth');
    expect(post?.tags).toContain('WebSockets');
    expect(post?.summary.length).toBeGreaterThan(20);
    expect(post?.content).toContain('The Heart Rate Monitor (HRM) project');
  });

  it('hrm-flagship has correct canonicalPath and externalUrl', () => {
    const hrm = flagshipTools.find((t) => t.id === 'hrm-flagship');
    expect(hrm).toBeDefined();
    expect(hrm?.canonicalPath).toBe('/devai/hrm-architecture/');
    expect(hrm?.externalUrl).toBe('https://arii.github.io/hrm/');
    expect(hrm?.sourceUrl).toBe('https://github.com/arii/hrm');
    expect(hrm?.externalLinkDisplayLabel).toBe('Live Demo');
  });

  it('FlagshipCard triggers onNavigate with "hrm-architecture" (not nested /devai/devai/)', () => {
    const hrm = flagshipTools.find((t) => t.id === 'hrm-flagship');
    const handleNavigate = vi.fn();

    render(
      <FlagshipCard
        tool={hrm!}
        onNavigate={handleNavigate}
        onImageClick={() => {}}
      />
    );

    const deepDiveBtn = screen.getAllByRole('button', { name: /Deep-Dive/i }).find(btn => btn.textContent?.includes('Deep-Dive'));
    expect(deepDiveBtn).toBeInTheDocument();
    fireEvent.click(deepDiveBtn!);

    expect(handleNavigate).toHaveBeenCalledWith('hrm-architecture');
  });

  it('renders ResearchDetailPage for hrm-architecture with metadata and actions', () => {
    render(
      <MemoryRouter>
        <ResearchDetailPage slug="hrm-architecture" onBack={() => {}} />
      </MemoryRouter>
    );

    // Checks header & content
    expect(screen.getByRole('heading', { level: 1, name: /HRM: Real-Time Biometric Telemetry & Workouts/i })).toBeInTheDocument();

    // Checks matching tool action buttons: Live Demo & Source Repository
    const liveDemoLink = screen.getByRole('link', { name: /Live Demo/i });
    expect(liveDemoLink).toHaveAttribute('href', 'https://arii.github.io/hrm/');

    const sourceLink = screen.getByRole('link', { name: /Source Repository/i });
    expect(sourceLink).toHaveAttribute('href', 'https://github.com/arii/hrm');
  });

  it('renders DevAI detail route when slug is hrm-architecture', () => {
    render(
      <MemoryRouter initialEntries={['/devai/hrm-architecture']}>
        <Routes>
          <Route path="/devai/:slug" element={<DevAI />} />
          <Route path="/devai" element={<DevAI />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByRole('heading', { level: 1, name: /HRM: Real-Time Biometric Telemetry & Workouts/i })).toBeInTheDocument();
  });
});
