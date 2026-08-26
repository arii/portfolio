import React from 'react';
import { Download } from 'lucide-react';

export interface ResumeHeaderProps {
  pdfUrl: string;
}

export const ResumeHeader: React.FC<ResumeHeaderProps> = ({
  pdfUrl
}) => {
  return (
    <header className="border-b border-line/20 pb-6 sm:pb-8">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-4">
        <div className="space-y-1">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-text-main leading-tight">
            <span className="print:hidden">Resume</span>
            <span className="hidden print:inline text-black">Ariel Anders, PhD</span>
          </h1>
          <p className="text-text-dim text-sm sm:text-base leading-relaxed print:text-black">
            Roboticist &amp; Senior Software Engineer &middot; Professional experience, technical skills, and education.
          </p>
        </div>

        <div className="print:hidden shrink-0">
          <a
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-foreground text-background hover:bg-foreground/90 transition-colors px-4 py-2.5 rounded-lg text-sm font-semibold cursor-pointer min-h-[44px]"
          >
            <Download className="w-4 h-4" />
            <span>View PDF</span>
          </a>
        </div>
      </div>
    </header>
  );
};
