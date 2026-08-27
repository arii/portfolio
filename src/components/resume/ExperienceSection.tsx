import React, { useRef, useEffect } from 'react';
import { Briefcase, ExternalLink } from 'lucide-react';
import { ResumeExperience } from '@/data/resume';

export interface ExperienceSectionProps {
  experiences: ResumeExperience[];
  isCollapsible?: boolean;
  isExpanded?: boolean;
  onToggleExpand?: () => void;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({
  experiences,
  isCollapsible,
  isExpanded,
  onToggleExpand
}) => {
  const primaryExperiences = isCollapsible ? experiences.slice(0, 4) : experiences;
  const legacyExperiences = isCollapsible ? experiences.slice(4) : [];
  const legacyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isCollapsible && isExpanded && legacyRef.current) {
      legacyRef.current.focus();
    }
  }, [isExpanded, isCollapsible]);

  const renderExperienceItem = (exp: ResumeExperience, idx: number, isLegacy = false) => (
    <div
      key={idx}
      ref={isLegacy && idx === 4 ? legacyRef : undefined}
      tabIndex={isLegacy && idx === 4 ? -1 : undefined}
      id={isLegacy && idx === 4 ? "legacy-experience" : undefined}
      className="relative pl-4 sm:pl-6 border-l-2 border-border print:border-black print:pl-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20 rounded-lg"
    >
      <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-1.5 print:bg-black" />
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-1 print:flex-row print:justify-between print:mb-0.5">
        <div className="flex items-center gap-2 flex-wrap">
          <h3 className="text-lg font-bold text-foreground print:text-black leading-tight">{exp.title}</h3>
          {exp.link && (
            <a href={exp.link} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors print:hidden">
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
        <span className="text-xs font-mono text-muted-foreground print:text-text-dim whitespace-nowrap mt-1 sm:mt-0">{exp.period}</span>
      </div>
      <div className="text-primary font-semibold mb-2 text-base print:text-black print:mb-1">{exp.company}</div>
      {exp.description && (
        <p className="text-sm text-muted-foreground mb-3 leading-relaxed print:text-text-body print:mb-2">{exp.description}</p>
      )}

      {/* Direct Points */}
      {exp.points && (
        <ul className="space-y-1.5 print:space-y-1 mb-3 pl-1">
          {exp.points.map((point, pIdx) => (
            <li key={pIdx} className="flex gap-2 text-sm text-muted-foreground leading-relaxed print:text-text-body print:text-[13px]">
              <span className="text-primary print:text-black mt-0.5 opacity-70">•</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      )}

      {/* Grouped Sub-Roles (e.g. Robust.AI multi-role) with Indentation */}
      {exp.subRoles && exp.subRoles.length > 0 && (
        <div className="mt-3 space-y-4 pt-2 border-t border-border/40 print:border-border">
          {exp.subRoles.map((subRole, sIdx) => (
            <div key={sIdx} className="space-y-2 pl-4 border-l-2 border-border/60 print:border-border">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
                <span className="text-sm font-bold text-foreground print:text-black">{subRole.title}</span>
                <span className="text-xs font-mono text-muted-foreground print:text-text-dim">{subRole.period}</span>
              </div>
              <ul className="space-y-1.5">
                {subRole.points.map((point, pIdx) => (
                  <li key={pIdx} className="flex gap-2 text-sm text-muted-foreground leading-relaxed print:text-text-body print:text-[13px]">
                    <span className="text-primary print:text-black mt-0.5 opacity-70">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <section className="mb-12 print:mb-8">
      <div className="flex items-center space-x-3 mb-6 border-b border-border/40 pb-2 print:border-b-2 print:border-black">
        <Briefcase className="h-6 w-6 text-primary print:text-black" />
        <h2 className="text-2xl font-bold text-foreground print:text-black uppercase tracking-wider font-display">Experience</h2>
      </div>
      <div className="space-y-8 print:space-y-6">
        {primaryExperiences.map((exp, idx) => renderExperienceItem(exp, idx))}

        {isCollapsible && legacyExperiences.length > 0 && (
          <div className="pt-4 flex justify-center print:hidden">
            <button
              type="button"
              onClick={onToggleExpand}
              className="text-xs font-semibold text-primary hover:text-primary/80 bg-primary/10 hover:bg-primary/20 px-4 py-2 rounded-full transition-colors min-h-[44px]"
              aria-expanded={isExpanded}
              aria-controls="legacy-experience"
            >
              {isExpanded ? 'Hide Legacy Roles & Internships' : 'Show Legacy Roles & Internships'}
            </button>
          </div>
        )}

        {(isExpanded || !isCollapsible || typeof window === 'undefined' ? legacyExperiences : []).map((exp, idx) =>
          renderExperienceItem(exp, idx + 4, true)
        )}
      </div>
    </section>
  );
};
