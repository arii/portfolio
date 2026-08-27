import React from 'react';
import { BookOpen } from 'lucide-react';
import { ResumeTeaching } from '@/data/resume';

export interface TeachingSectionProps {
  teaching: ResumeTeaching[];
  isCollapsible?: boolean;
  isExpanded?: boolean;
  onToggleExpand?: () => void;
}

export const TeachingSection: React.FC<TeachingSectionProps> = ({
  teaching,
  isCollapsible,
  isExpanded,
  onToggleExpand
}) => {
  const displayedTeaching = isCollapsible && !isExpanded ? teaching.slice(0, 1) : teaching;

  return (
    <section className="mb-12 print:mb-8 print:break-inside-avoid">
      <div className="flex items-center justify-between mb-6 border-b border-border/40 pb-2 print:border-b-2 print:border-black">
        <div className="flex items-center space-x-3">
          <BookOpen className="h-6 w-6 text-primary print:text-black" />
          <h2 className="text-2xl font-semibold text-foreground print:text-black">Teaching & Leadership</h2>
        </div>
        {isCollapsible && onToggleExpand && (
          <button
            type="button"
            onClick={onToggleExpand}
            className="text-xs font-semibold text-primary hover:text-primary/80 bg-primary/10 hover:bg-primary/20 px-3 py-1.5 rounded-md transition-colors print:hidden min-h-[44px] min-w-[80px]"
            aria-expanded={isExpanded}
            aria-controls="teaching-content"
          >
            {isExpanded ? 'Collapse' : 'Expand'}
          </button>
        )}
      </div>
      <div id="teaching-content" className="space-y-4">
        {displayedTeaching.map((item, idx) => (
          <div key={idx} className="space-y-1">
            <div className="flex items-baseline justify-between gap-2">
              <h3 className="text-sm font-bold text-foreground print:text-black">{item.title}</h3>
              <span className="text-xs text-muted-foreground font-medium print:text-text-dim shrink-0">{item.period}</span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed print:text-text-body">{item.details}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
