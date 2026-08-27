import React from 'react';
import { Code2 } from 'lucide-react';
import { ResumeSkillGroup } from '@/data/resume';

export interface SkillsSectionProps {
  skills: ResumeSkillGroup[];
  isCollapsible?: boolean;
  isExpanded?: boolean;
  onToggleExpand?: () => void;
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({
  skills,
  isCollapsible,
  isExpanded,
  onToggleExpand
}) => {
  const displayedSkills = isCollapsible && !isExpanded ? skills.slice(0, 2) : skills;

  return (
    <section className="mb-12 print:mb-8 print:break-inside-avoid">
      <div className="flex items-center justify-between mb-6 border-b border-border/40 pb-2 print:border-b-2 print:border-black">
        <div className="flex items-center space-x-3">
          <Code2 className="h-6 w-6 text-primary print:text-black" />
          <h2 className="text-2xl font-bold text-foreground print:text-black uppercase tracking-wider ">Technical Skills</h2>
        </div>
        {isCollapsible && onToggleExpand && (
          <button
            type="button"
            onClick={onToggleExpand}
            className="text-xs font-semibold text-primary hover:text-primary/80 bg-primary/10 hover:bg-primary/20 px-3 py-1.5 rounded-full transition-colors print:hidden min-h-[44px] min-w-[80px]"
            aria-expanded={isExpanded}
            aria-controls="skills-content"
          >
            {isExpanded ? 'Collapse' : 'Expand'}
          </button>
        )}
      </div>
      <div id="skills-content" className="space-y-6">
        {displayedSkills.map((skillGroup, idx) => {
          const skillsList = Array.isArray(skillGroup.skills)
            ? skillGroup.skills
            : (skillGroup.skills as string).split(',').map(s => s.trim());

          return (
            <div key={idx} className="space-y-2">
              <h3 className="text-xs uppercase tracking-widest text-muted-foreground print:text-black font-bold">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {skillsList.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-secondary text-foreground border border-border/60 print:border-border print:bg-transparent print:text-black"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
