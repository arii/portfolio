import React from 'react';
import { Code2 } from 'lucide-react';
import { ResumeSkillCategory } from '@/data/resume';

export interface SkillsSectionProps {
  skills: ResumeSkillCategory[];
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ skills }) => {
  return (
    <section className="mb-12 print:mb-8 print:break-inside-avoid">
      <div className="flex items-center space-x-3 mb-6 border-b border-border/40 pb-2 print:border-b-2 print:border-black">
        <Code2 className="h-6 w-6 text-primary print:text-black" />
        <h2 className="text-2xl font-bold text-foreground print:text-black uppercase tracking-wider">Technical Skills</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 print:grid-cols-2 print:gap-4">
        {skills.map((skillGroup, idx) => (
          <div key={idx} className="space-y-1.5 print:space-y-1">
            <h3 className="text-xs font-mono uppercase tracking-widest text-muted-foreground print:text-black font-bold">
              {skillGroup.category}
            </h3>
            <p className="text-sm text-foreground print:text-gray-800 leading-relaxed">
              {skillGroup.skills}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
