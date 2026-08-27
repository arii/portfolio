import React from 'react';
import { GraduationCap } from 'lucide-react';
import { ResumeEducation } from '@/data/resume';

export interface EducationSectionProps {
  education: ResumeEducation[];
  isCollapsible?: boolean;
  isExpanded?: boolean;
  onToggleExpand?: () => void;
}

export const EducationSection: React.FC<EducationSectionProps> = ({
  education,
  isCollapsible,
  isExpanded,
  onToggleExpand
}) => {
  const displayedEducation = isCollapsible && !isExpanded ? education.slice(0, 1) : education;

  return (
    <section className="mb-12 print:mb-8 print:break-inside-avoid">
      <div className="flex items-center justify-between mb-6 border-b border-border/40 pb-2 print:border-b-2 print:border-black">
        <div className="flex items-center space-x-3">
          <GraduationCap className="h-6 w-6 text-primary print:text-black" />
          <h2 className="text-2xl font-bold text-foreground print:text-black uppercase tracking-wider ">Education</h2>
        </div>
        {isCollapsible && onToggleExpand && (
          <button
            type="button"
            onClick={onToggleExpand}
            className="text-xs font-semibold text-primary hover:text-primary/80 bg-primary/10 hover:bg-primary/20 px-3 py-1.5 rounded-full transition-colors print:hidden min-h-[44px] min-w-[80px]"
            aria-expanded={isExpanded}
            aria-controls="education-content"
          >
            {isExpanded ? 'Collapse' : 'Expand'}
          </button>
        )}
      </div>
      <div id="education-content" className="space-y-6 print:space-y-4">
        {displayedEducation.map((edu, idx) => (
          <div key={idx} className="space-y-1.5">
            <div className="flex flex-col justify-between gap-1">
              <h3 className="text-sm font-bold text-foreground print:text-black leading-snug">{edu.degree}</h3>
              <span className="text-xs  text-muted-foreground print:text-text-dim">{edu.period}</span>
            </div>
            <div className="text-xs font-semibold text-primary print:text-black">{edu.institution}</div>
            {edu.details && (
              <p className="text-xs text-muted-foreground italic print:text-text-body">{edu.details}</p>
            )}
            {edu.researchFocus && (
              <div className="mt-2 p-3 bg-secondary/30 rounded-xl border border-border/60 print:bg-transparent print:border-l-2 print:border-black print:rounded-none print:p-0 print:pl-3">
                <p className="text-xs text-muted-foreground leading-relaxed print:text-text-body">{edu.researchFocus}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
