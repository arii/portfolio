import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ACADEMIC_PAPERS } from '@/data/academicResearch';
import { autonomousTools } from '@/data/research/autonomousTools';
import { getResearchPostBySlug } from '@/data/research';
import AcademicCard from '@/components/AcademicCard';
import ToolCard from '@/components/ToolCard';

describe('Academic Research Project Reports (PDFs)', () => {
  it('excludes report entries from ACADEMIC_PAPERS and ensures they are in project cards', () => {
    const dentalPaper = ACADEMIC_PAPERS.find((p) => p.id === 'nsbe-dental-2012');
    expect(dentalPaper).toBeUndefined();

    const classReportInAcademic = ACADEMIC_PAPERS.find((p) => p.id === 'ml-lis-2012');
    expect(classReportInAcademic).toBeUndefined();
  });

  it('includes external raw github pdfUrl on relevant autonomous tools entries', () => {
    const toolsWithPdf = autonomousTools.filter((t) => t.pdfUrl);
    expect(toolsWithPdf.length).toBeGreaterThanOrEqual(5);

    const dentalTool = autonomousTools.find((t) => t.id === 'cad-cam-dental-workflow');
    expect(dentalTool?.pdfUrl).toBe('https://raw.githubusercontent.com/arii/arii.github.io/main/reports/report_dental.pdf');
  });

  it('renders Download PDF Report and Watch Video buttons in AcademicCard when properties are provided', () => {
    const mockPaper = {
      id: 'test-paper',
      title: 'Test Paper Title',
      type: 'Research Report',
      year: '2022',
      authors: ['Author A'],
      venue: 'Test Venue',
      summary: 'Test summary statement.',
      tags: ['TestTag'],
      pdfUrl: 'https://raw.githubusercontent.com/arii/arii.github.io/main/reports/report_dental.pdf',
      videoUrl: 'https://www.youtube.com/watch?v=so-9kkQXlxc',
      playlistUrl: 'https://www.youtube.com/playlist?list=PLEcASxU_mgVi6kMdElumAUh-gJW4wCOUV'
    };

    render(<AcademicCard paper={mockPaper} />);
    const pdfLink = screen.getByRole('link', { name: /Download PDF Report/i });
    expect(pdfLink).toBeInTheDocument();
    expect(pdfLink).toHaveAttribute('href', 'https://raw.githubusercontent.com/arii/arii.github.io/main/reports/report_dental.pdf');

    const videoLink = screen.getByRole('link', { name: /Watch Video Demo/i });
    expect(videoLink).toBeInTheDocument();
    expect(videoLink).toHaveAttribute('href', 'https://www.youtube.com/watch?v=so-9kkQXlxc');

    const playlistLink = screen.getByRole('link', { name: /Watch Playlist/i });
    expect(playlistLink).toBeInTheDocument();
    expect(playlistLink).toHaveAttribute('href', 'https://www.youtube.com/playlist?list=PLEcASxU_mgVi6kMdElumAUh-gJW4wCOUV');
  });

  it('renders PDF Report and Video badges in ToolCard when properties are provided', () => {
    const mockTool = {
      id: 'test-tool',
      title: 'Test Tool',
      description: 'Test description',
      category: 'Test Category',
      status: 'Completed',
      tags: ['TestTag'],
      canonicalPath: '/research/cad-cam-dental-workflow',
      pdfUrl: 'https://raw.githubusercontent.com/arii/arii.github.io/main/reports/report_dental.pdf',
      videoUrl: 'https://www.youtube.com/watch?v=so-9kkQXlxc'
    };

    render(<ToolCard tool={mockTool} onNavigate={() => {}} />);
    expect(screen.getByText(/PDF Report/i)).toBeInTheDocument();
    expect(screen.getByText(/Video Demo/i)).toBeInTheDocument();
  });

  it('parses research posts with PDF download links from markdown files', () => {
    const dentalPost = getResearchPostBySlug('cad-cam-dental-workflow');
    expect(dentalPost).toBeDefined();
    expect(dentalPost?.content).toContain('https://raw.githubusercontent.com/arii/arii.github.io/main/reports/report_dental.pdf');

    const mlPost = getResearchPostBySlug('report-ml-lis');
    expect(mlPost).toBeDefined();
    expect(mlPost?.content).toContain('https://raw.githubusercontent.com/arii/arii.github.io/main/reports/report_ml.pdf');
  });
});
