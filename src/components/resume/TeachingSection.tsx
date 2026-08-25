import React from 'react';
import { BookOpen } from 'lucide-react';
import { ResumeTeaching } from '@/data/resume';

export interface TeachingSectionProps {
  teaching: ResumeTeaching[];
}

export const TeachingSection: React.FC<TeachingSectionProps> = ({ teaching }) => {
  return (
    <section className="mb-12 print:mb-8 print:break-inside-avoid">
      <div className="flex items-center space-x-3 mb-6 border-b border-border/40 pb-2 print:border-b-2 print:border-black">
        <BookOpen className="h-6 w-6 text-primary print:text-black" />
        <h2 className="text-2xl font-bold text-foreground print:text-black uppercase tracking-wider">Teaching & Leadership</h2>
      </div>
      <div className="space-y-4">
        {teaching.map((item, idx) => (
          <div key={idx} className="space-y-1">
            <div className="flex items-baseline justify-between gap-2">
              <h3 className="text-sm font-bold text-foreground print:text-black">{item.title}</h3>
              <span className="text-xs font-mono text-muted-foreground print:text-text-dim shrink-0">{item.period}</span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed print:text-text-body">{item.details}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
