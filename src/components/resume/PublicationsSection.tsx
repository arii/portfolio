import React from 'react';
import { FileText, ExternalLink } from 'lucide-react';
import { ResumePublication } from '@/data/resume';

export interface PublicationsSectionProps {
  publications: ResumePublication[];
  scholarUrl: string;
  isCollapsible?: boolean;
  isExpanded?: boolean;
  onToggleExpand?: () => void;
}

export const PublicationsSection: React.FC<PublicationsSectionProps> = ({
  publications,
  scholarUrl,
  isCollapsible,
  isExpanded,
  onToggleExpand
}) => {
  const displayedPublications = isCollapsible && !isExpanded ? publications.slice(0, 1) : publications;

  return (
    <section className="mb-10 print:mb-6 print:break-inside-avoid">
      <div className="flex items-center justify-between mb-4 border-b border-border/40 pb-2 print:border-b-2 print:border-black">
        <div className="flex items-center space-x-2.5">
          <FileText className="h-5 w-5 text-primary print:text-black" />
          <h2 className="text-xl font-semibold text-foreground print:text-black">Publications & Theses</h2>
        </div>
        <div className="flex items-center gap-3 print:hidden">
          {isCollapsible && onToggleExpand && (
            <button
              type="button"
              onClick={onToggleExpand}
              className="text-xs font-semibold text-primary hover:text-primary/80 bg-primary/10 hover:bg-primary/20 px-3 py-1.5 rounded-full transition-colors print:hidden min-h-[44px] min-w-[80px]"
              aria-expanded={isExpanded}
              aria-controls="publications-content"
            >
              {isExpanded ? 'Collapse' : 'Expand'}
            </button>
          )}
          <a
            href={scholarUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline min-h-[44px]"
          >
            <span>Google Scholar</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>

      <div id="publications-content" className="space-y-3">
        {displayedPublications.map((pub) => (
          <div
            key={pub.id}
            className="bg-card/40 border border-border/60 p-3.5 rounded-xl space-y-1.5 hover:border-primary/40 transition-colors print:bg-transparent print:border-none print:p-0"
          >
            <div className="flex items-start justify-between gap-2">
              <div className="space-y-0.5">
                <div className="flex items-center gap-1.5 flex-wrap">
                  <span className="px-1.5 py-0.5 text-[9px] font-mono uppercase font-bold rounded bg-secondary text-foreground print:bg-transparent print:text-black print:border print:border-black">
                    {pub.type}
                  </span>
                  <span className="text-[11px] text-muted-foreground font-mono">{pub.year}</span>
                </div>
                <h3 className="text-xs font-bold text-foreground print:text-black leading-snug">
                  {pub.title}
                </h3>
              </div>
              {pub.link && (
                <a
                  href={pub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors shrink-0 mt-0.5 print:hidden"
                  title="View Publication"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>

            {pub.authors && pub.authors.length > 0 && (
              <p className="text-[11px] text-muted-foreground font-medium">{pub.authors.join(', ')}</p>
            )}

            {pub.venue && (
              <p className="text-[11px] text-muted-foreground/80 italic print:text-text-body">{pub.venue}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
