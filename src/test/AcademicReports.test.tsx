import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import fs from 'fs';
import path from 'path';
import { ACADEMIC_PAPERS } from '@/data/academicResearch';
import { autonomousTools } from '@/data/research/autonomousTools';
import { getResearchPostBySlug } from '@/data/research';
import AcademicCard from '@/components/AcademicCard';
import ToolCard from '@/components/ToolCard';

describe('Academic Research Project Reports (PDFs)', () => {
  const expectedPdfFiles = [
    'report_dental.pdf',
    'report_ml.pdf',
    'report_6375.pdf',
    'report_ce118.pdf',
    'report_ce121.pdf'
  ];

  it('verifies all 5 PDF report files exist in public/reports with non-zero size', () => {
    expectedPdfFiles.forEach((filename) => {
      const filePath = path.join(process.cwd(), 'public', 'reports', filename);
      expect(fs.existsSync(filePath)).toBe(true);
      const stats = fs.statSync(filePath);
      expect(stats.size).toBeGreaterThan(0);
    });
  });

  it('includes pdfUrl on relevant academic papers data entries', () => {
    const papersWithPdf = ACADEMIC_PAPERS.filter((p) => p.pdfUrl);
    expect(papersWithPdf.length).toBeGreaterThanOrEqual(5);

    const dentalPaper = ACADEMIC_PAPERS.find((p) => p.id === 'nsbe-dental-2012');
    expect(dentalPaper?.pdfUrl).toBe('/reports/report_dental.pdf');

    const mlPaper = ACADEMIC_PAPERS.find((p) => p.id === 'ml-lis-2012');
    expect(mlPaper?.pdfUrl).toBe('/reports/report_ml.pdf');
  });

  it('includes pdfUrl on relevant autonomous tools entries', () => {
    const toolsWithPdf = autonomousTools.filter((t) => t.pdfUrl);
    expect(toolsWithPdf.length).toBeGreaterThanOrEqual(5);

    const dentalTool = autonomousTools.find((t) => t.id === 'cad-cam-dental-workflow');
    expect(dentalTool?.pdfUrl).toBe('/reports/report_dental.pdf');
  });

  it('renders Download PDF Report button in AcademicCard when paper.pdfUrl is provided', () => {
    const mockPaper = {
      id: 'test-paper',
      title: 'Test Paper Title',
      type: 'Research Report',
      year: '2022',
      authors: ['Author A'],
      venue: 'Test Venue',
      summary: 'Test summary statement.',
      tags: ['TestTag'],
      pdfUrl: '/reports/report_dental.pdf'
    };

    render(<AcademicCard paper={mockPaper} />);
    const pdfLink = screen.getByRole('link', { name: /Download PDF Report/i });
    expect(pdfLink).toBeInTheDocument();
    expect(pdfLink).toHaveAttribute('href', '/reports/report_dental.pdf');
  });

  it('renders PDF Report Available badge in ToolCard when tool.pdfUrl is provided', () => {
    const mockTool = {
      id: 'test-tool',
      title: 'Test Tool',
      description: 'Test description',
      category: 'Test Category',
      status: 'Completed',
      tags: ['TestTag'],
      canonicalPath: '/research/cad-cam-dental-workflow',
      pdfUrl: '/reports/report_dental.pdf'
    };

    render(<ToolCard tool={mockTool} onNavigate={() => {}} />);
    expect(screen.getByText(/PDF Report Available/i)).toBeInTheDocument();
  });

  it('parses research posts with PDF download links from markdown files', () => {
    const dentalPost = getResearchPostBySlug('cad-cam-dental-workflow');
    expect(dentalPost).toBeDefined();
    expect(dentalPost?.content).toContain('/reports/report_dental.pdf');

    const mlPost = getResearchPostBySlug('report-ml-lis');
    expect(mlPost).toBeDefined();
    expect(mlPost?.content).toContain('/reports/report_ml.pdf');
  });
});
