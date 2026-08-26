import React from 'react';
import { Download, Columns, LayoutGrid } from 'lucide-react';
import { Box, Stack } from '@/components/layout';

export interface ResumeHeaderProps {
  pdfUrl: string;
  layoutMode?: 'split' | 'full';
  onLayoutModeChange?: (mode: 'split' | 'full') => void;
}

export const ResumeHeader: React.FC<ResumeHeaderProps> = ({
  pdfUrl,
  layoutMode = 'split',
  onLayoutModeChange
}) => {
  return (
    <Box as="header" className="border-b border-line/20 pb-6 sm:pb-8">
      <Stack direction="row" justify="between" align="center" className="flex-col sm:flex-row gap-4">
        <Stack direction="col" className="space-y-1">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-text-main leading-tight font-display">
            <span className="print:hidden">Resume</span>
            <span className="hidden print:inline text-black">Ariel Anders, PhD</span>
          </h1>
          <p className="text-text-dim text-sm sm:text-base leading-relaxed print:text-black">
            Roboticist &amp; Senior Software Engineer &middot; Professional experience, technical skills, and education.
          </p>
        </Stack>

        <Stack direction="row" align="center" className="print:hidden shrink-0 gap-3">
          {onLayoutModeChange && (
            <Stack direction="row" align="center" className="p-1 rounded-lg bg-surface border border-line text-xs font-medium hidden lg:flex">
              <button
                type="button"
                onClick={() => onLayoutModeChange('split')}
                className={`px-2.5 py-1.5 rounded-md transition-colors ${
                  layoutMode === 'split'
                    ? 'bg-primary/20 text-primary font-semibold'
                    : 'text-text-dim hover:text-text-main'
                }`}
                aria-label="Two Column Split View"
                title="Two Column View"
              >
                <Stack direction="row" align="center" className="gap-1.5">
                  <Columns className="w-3.5 h-3.5" />
                  <span>Split View</span>
                </Stack>
              </button>
              <button
                type="button"
                onClick={() => onLayoutModeChange('full')}
                className={`px-2.5 py-1.5 rounded-md transition-colors ${
                  layoutMode === 'full'
                    ? 'bg-primary/20 text-primary font-semibold'
                    : 'text-text-dim hover:text-text-main'
                }`}
                aria-label="Full Width View"
                title="Full Width Experience View"
              >
                <Stack direction="row" align="center" className="gap-1.5">
                  <LayoutGrid className="w-3.5 h-3.5" />
                  <span>Full Width</span>
                </Stack>
              </button>
            </Stack>
          )}

          <a
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-foreground text-background hover:bg-foreground/90 transition-colors px-4 py-2 rounded-lg text-sm font-semibold cursor-pointer min-h-[40px]"
          >
            <Stack direction="row" align="center" className="gap-2">
              <Download className="w-4 h-4" />
              <span>View PDF</span>
            </Stack>
          </a>
        </Stack>
      </Stack>
    </Box>
  );
};
