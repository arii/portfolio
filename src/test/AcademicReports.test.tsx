import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { autonomousTools } from '@/data/research/autonomousTools';
import { getResearchPostBySlug } from '@/data/research';
import ToolCard from '@/components/ToolCard';

describe('Academic Research Project Reports (PDFs)', () => {
  it('includes external raw github pdfUrl on relevant autonomous tools entries', () => {
    const toolsWithPdf = autonomousTools.filter((t) => t.pdfUrl);
    expect(toolsWithPdf.length).toBeGreaterThanOrEqual(1);

    const dentalTool = autonomousTools.find((t) => t.id === 'cad-cam-dental-workflow');
    expect(dentalTool?.pdfUrl).toBe('https://raw.githubusercontent.com/arii/arii.github.io/main/reports/report_dental.pdf');

    const gradProjects = autonomousTools.find((t) => t.id === 'graduate-engineering-projects');
    expect(gradProjects).toBeDefined();
    const pdfLinks = gradProjects?.mediaLinks?.filter(l => l.type === 'pdf');
    expect(pdfLinks?.length).toBe(2);
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

    const mlPost = getResearchPostBySlug('graduate-engineering-projects');
    expect(mlPost).toBeDefined();
    expect(mlPost?.content).toContain('https://raw.githubusercontent.com/arii/arii.github.io/main/reports/report_ml.pdf');
  });
});
