import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import FlagshipCard from '@/components/FlagshipCard';
import ResearchDetailPage from '@/pages/ResearchDetailPage';
import { ResearchTool } from '@/types/research';

describe('Card UX & Detail Page Navigation Improvements', () => {
  it('navigates to canonical path slug when FlagshipCard container is clicked', () => {
    const handleNavigate = vi.fn();
    const mockTool: ResearchTool = {
      id: 'test-flagship',
      title: 'Test Flagship Project',
      description: 'Test description',
      category: 'Test Category',
      status: 'Active',
      tags: ['React'],
      canonicalPath: '/research/cad-cam-dental-workflow'
    };

    render(<FlagshipCard tool={mockTool} onNavigate={handleNavigate} onImageClick={() => {}} />);

    const cardButton = screen.getByRole('button', { name: /Test Flagship Project/i });
    expect(cardButton).toBeInTheDocument();

    fireEvent.click(cardButton);
    expect(handleNavigate).toHaveBeenCalledWith('cad-cam-dental-workflow');
  });

  it('renders Download PDF Report link on ResearchDetailPage when associated tool has pdfUrl', () => {
    const handleBack = vi.fn();
    render(<ResearchDetailPage slug="cad-cam-dental-workflow" onBack={handleBack} />);

    const pdfDownloadLink = screen.getByRole('link', { name: /Download PDF Report/i });
    expect(pdfDownloadLink).toBeInTheDocument();
    expect(pdfDownloadLink).toHaveAttribute(
      'href',
      'https://raw.githubusercontent.com/arii/arii.github.io/main/reports/report_dental.pdf'
    );
  });

  it('renders Duckietown detail page with content and embedded videos', () => {
    const handleBack = vi.fn();
    render(<ResearchDetailPage slug="duckietown" onBack={handleBack} />);

    expect(screen.getAllByText('MIT Duckietown (Autonomous Taxi Fleet)').length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Inaugural MIT 2.166 Class/i).length).toBeGreaterThan(0);

    const { container } = render(<ResearchDetailPage slug="duckietown" onBack={handleBack} />);

    const iframes = Array.from(container.querySelectorAll('iframe'));
    expect(iframes.length).toBe(0); // With #no-embed, no iframes are generated
    const images = Array.from(container.querySelectorAll('img'));
    const imageSrcs = images.map(img => img.getAttribute('src'));
    expect(imageSrcs).toContain('/assets/research/duckietown/oreo_wheelie.gif');
    expect(imageSrcs).toContain('/assets/research/duckietown/navigation_2.gif');
    expect(imageSrcs).toContain('/assets/research/duckietown/navigation_1.gif');
  });

  it('renders standardized aspect ratio and object-cover classes for undergraduate projects gallery images', () => {
    const handleBack = vi.fn();
    const { container } = render(<ResearchDetailPage slug="undergraduate-projects" onBack={handleBack} />);

    const images = Array.from(container.querySelectorAll('img'));
    const galleryImage = images.find(img => img.getAttribute('src') === '/assets/research/undergraduate-projects/ce118-001.webp');

    expect(galleryImage).toBeInTheDocument();
    expect(galleryImage?.className).toContain('object-cover');

    const imageContainer = galleryImage?.closest('.aspect-\\[4\\/3\\]');
    expect(imageContainer).toBeInTheDocument();
  });
});
