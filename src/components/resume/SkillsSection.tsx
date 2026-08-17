import React from 'react';
import { Code } from 'lucide-react';

export interface SkillsSectionProps {
  skills: string[];
  className?: string;
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({
  skills,
  className = '',
}) => {
  return (
    <section className={`space-y-6 ${className}`}>
      <div className="flex items-center space-x-3 border-b border-border/60 pb-3">
        <div className="p-2 rounded-xl bg-primary/10 border border-primary/20 text-primary">
          <Code className="h-5 w-5" />
        </div>
        <h2 className="text-2xl font-bold text-foreground tracking-tight">Technical Skills</h2>
      </div>

      <div className="border border-border bg-card p-6 rounded-2xl shadow-sm print:border-line print:bg-white print:p-4">
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="bg-secondary hover:bg-primary/10 text-foreground font-medium text-xs px-3 py-1.5 rounded-xl border border-border transition-colors hover:border-primary/40 cursor-default"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
