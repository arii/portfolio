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
});
