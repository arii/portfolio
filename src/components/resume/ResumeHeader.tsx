import React from 'react';
import { Download, ExternalLink } from 'lucide-react';
import { ResumeSocialLink } from '@/data/resume';

export interface ResumeHeaderProps {
  name: string;
  pdfUrl: string;
}

const SocialIcon: React.FC<{ type: ResumeSocialLink['type'] }> = ({ type }) => {
  switch (type) {
    case 'scholar':
      return (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-24L0 9.5l4.8 3.8v5.7h2.4v-3.8l4.8 3.8 12-9.5L12 0z" />
        </svg>
      );
    case 'mail':
      return (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="16" x="2" y="4" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      );
    case 'linkedin':
      return (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      );
    case 'github':
      return (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
        </svg>
      );
  }
};

export const ResumeHeader: React.FC<ResumeHeaderProps> = ({
  name,
  pdfUrl
}) => {
  return (
    <header className="border-b border-border/60 pb-4 md:pb-6 print:border-b-2 print:border-black print:pb-4">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-foreground leading-tight print:text-black">
            {name}
          </h1>
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
