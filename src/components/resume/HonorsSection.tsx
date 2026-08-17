import React from 'react';
import { Award } from 'lucide-react';
import { ResumeHonor } from '@/data/resume';

export interface HonorsSectionProps {
  honors: ResumeHonor[];
}

export const HonorsSection: React.FC<HonorsSectionProps> = ({ honors }) => {
  return (
    <section className="mb-12 print:mb-8 print:break-inside-avoid">
      <div className="flex items-center space-x-3 mb-6 border-b border-border/40 pb-2 print:border-b-2 print:border-black">
        <Award className="h-6 w-6 text-primary print:text-black" />
        <h2 className="text-2xl font-bold text-foreground print:text-black uppercase tracking-wider">Honors & Recognition</h2>
      </div>
      <div className="space-y-3">
        {honors.map((honor, idx) => (
          <div key={idx} className="flex items-start justify-between gap-3 text-sm">
            <div className="space-y-0.5">
              <span className="font-semibold text-foreground print:text-black block leading-snug">{honor.title}</span>
              {honor.organization && (
                <span className="text-xs text-muted-foreground print:text-gray-700 block">{honor.organization}</span>
              )}
            </div>
            <span className="text-xs font-mono text-muted-foreground print:text-gray-700 whitespace-nowrap shrink-0">{honor.year}</span>
          </div>
        ))}
      </div>
    </section>
  );
};
