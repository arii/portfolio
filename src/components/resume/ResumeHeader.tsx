import React from 'react';
import { Download, Columns, LayoutGrid } from 'lucide-react';

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
    <header className="border-b border-line/20 pb-6 sm:pb-8">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
        <div className="space-y-1">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-text-main leading-tight">
            <span className="print:hidden">Resume</span>
            <span className="hidden print:inline text-black">Ariel Anders, PhD</span>
          </h1>
          <p className="text-text-dim text-sm sm:text-base leading-relaxed print:text-black">
            Roboticist &amp; Senior Software Engineer &middot; Professional experience, technical skills, and education.
          </p>
        </div>

        <div className="print:hidden shrink-0 flex items-center gap-3">
          {onLayoutModeChange && (
            <div className="inline-flex p-1 rounded-lg bg-surface border border-line text-xs font-medium">
              <button
                type="button"
                onClick={() => onLayoutModeChange('split')}
                className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md transition-colors ${
                  layoutMode === 'split'
                    ? 'bg-primary/20 text-primary font-semibold'
                    : 'text-text-dim hover:text-text-main'
                }`}
                aria-label="Two Column Split View"
                title="Two Column View"
              >
                <Columns className="w-3.5 h-3.5" />
                <span className="hidden md:inline">Split View</span>
              </button>
              <button
                type="button"
                onClick={() => onLayoutModeChange('full')}
                className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md transition-colors ${
                  layoutMode === 'full'
                    ? 'bg-primary/20 text-primary font-semibold'
                    : 'text-text-dim hover:text-text-main'
                }`}
                aria-label="Full Width View"
                title="Full Width Experience View"
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span className="hidden md:inline">Full Width</span>
              </button>
            </div>
          )}

          <a
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-foreground text-background hover:bg-foreground/90 transition-colors px-4 py-2 rounded-lg text-sm font-semibold cursor-pointer min-h-[40px]"
          >
            <Download className="w-4 h-4" />
            <span>View PDF</span>
          </a>
        </div>
      </div>
    </header>
  );
};
