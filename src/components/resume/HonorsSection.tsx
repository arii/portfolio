import React from 'react';
import { Award, ExternalLink } from 'lucide-react';
import { ResumeHonor } from '@/data/resume';

export interface HonorsSectionProps {
  honors: ResumeHonor[];
  isCollapsible?: boolean;
  isExpanded?: boolean;
  onToggleExpand?: () => void;
}

export const HonorsSection: React.FC<HonorsSectionProps> = ({
  honors,
  isCollapsible,
  isExpanded,
  onToggleExpand
}) => {
  const displayedHonors = isCollapsible && !isExpanded ? honors.slice(0, 1) : honors;

  return (
    <section className="mb-12 print:mb-8 print:break-inside-avoid">
      <div className="flex items-center justify-between mb-6 border-b border-border/40 pb-2 print:border-b-2 print:border-black">
        <div className="flex items-center space-x-3">
          <Award className="h-6 w-6 text-primary print:text-black" />
          <h2 className="text-2xl font-bold text-foreground print:text-black uppercase tracking-wider">Honors & Recognition</h2>
        </div>
        {isCollapsible && onToggleExpand && (
          <button
            type="button"
            onClick={onToggleExpand}
            className="text-xs font-semibold text-primary hover:underline font-mono print:hidden min-h-[40px] px-2"
            aria-expanded={isExpanded}
          >
            {isExpanded ? '[ Collapse ]' : '[ Expand ]'}
          </button>
        )}
      </div>
      <div className="space-y-3">
        {displayedHonors.map((honor, idx) => (
          <div key={idx} className="flex items-start justify-between gap-3 text-sm">
            <div className="space-y-0.5">
              <div className="flex items-center gap-1.5 flex-wrap">
                <span className="font-semibold text-foreground print:text-black block leading-snug">{honor.title}</span>
                {honor.link && (
                  <a href={honor.link} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors print:hidden">
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
              {honor.organization && (
                <span className="text-xs text-muted-foreground print:text-text-dim block">{honor.organization}</span>
              )}
            </div>
            <span className="text-xs font-mono text-muted-foreground print:text-text-dim whitespace-nowrap shrink-0">{honor.year}</span>
          </div>
        ))}
      </div>
    </section>
  );
};
