import React from 'react';
import { GraduationCap } from 'lucide-react';
import { ResumeEducation } from '@/data/resume';

export interface EducationSectionProps {
  education: ResumeEducation[];
}

export const EducationSection: React.FC<EducationSectionProps> = ({ education }) => {
  return (
    <section className="mb-12 print:mb-8 print:break-inside-avoid">
      <div className="flex items-center space-x-3 mb-6 border-b border-border/40 pb-2 print:border-b-2 print:border-black">
        <GraduationCap className="h-6 w-6 text-primary print:text-black" />
        <h2 className="text-2xl font-bold text-foreground print:text-black uppercase tracking-wider">Education</h2>
      </div>
      <div className="space-y-8 print:space-y-6">
        {education.map((edu, idx) => (
          <div key={idx} className="space-y-2">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between print:flex-row print:justify-between">
              <h3 className="text-lg font-bold text-foreground print:text-black leading-tight">{edu.degree}</h3>
              <span className="text-sm font-mono text-muted-foreground print:text-gray-700 whitespace-nowrap mt-1 sm:mt-0">{edu.period}</span>
            </div>
            <div className="text-base font-semibold text-primary print:text-black">{edu.institution}</div>
            {edu.details && (
              <p className="text-sm text-muted-foreground italic print:text-gray-800">{edu.details}</p>
            )}
            {edu.researchFocus && (
              <div className="mt-3 p-4 bg-secondary/30 rounded-xl border border-border print:bg-transparent print:border-l-2 print:border-black print:rounded-none print:p-0 print:pl-3 print:mt-2">
                <h4 className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-1.5 print:text-black print:font-bold">Research Focus</h4>
                <p className="text-sm text-muted-foreground leading-relaxed print:text-gray-800 print:text-[13px]">{edu.researchFocus}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
