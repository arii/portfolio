import React from 'react';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';
import { ResumeEducation } from '@/data/resume';

export interface EducationSectionProps {
  education: ResumeEducation[];
  className?: string;
}

export const EducationSection: React.FC<EducationSectionProps> = ({
  education,
  className = '',
}) => {
  return (
    <section className={`space-y-6 ${className}`}>
      <div className="flex items-center space-x-3 border-b border-border/60 pb-3">
        <div className="p-2 rounded-xl bg-primary/10 border border-primary/20 text-primary">
          <GraduationCap className="h-5 w-5" />
        </div>
        <h2 className="text-2xl font-bold text-foreground tracking-tight">Education</h2>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {education.map((item, index) => (
          <div
            key={index}
            className="border border-border bg-card p-6 rounded-2xl space-y-2.5 hover:border-primary/50 transition-colors shadow-sm print:border-line print:bg-white print:p-4"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <div>
                <h3 className="text-lg font-bold text-foreground">{item.degree}</h3>
                <p className="text-sm font-semibold text-primary">{item.institution}</p>
              </div>
              <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground font-mono">
                <span className="flex items-center space-x-1 bg-secondary px-2.5 py-1 rounded-md border border-border print:border-none print:p-0">
                  <Calendar className="h-3.5 w-3.5 mr-1" />
                  {item.period}
                </span>
                {item.location && (
                  <span className="flex items-center space-x-1">
                    <MapPin className="h-3.5 w-3.5 text-muted-foreground" />
                    {item.location}
                  </span>
                )}
              </div>
            </div>

            {item.details && item.details.length > 0 && (
              <ul className="space-y-1 pt-2 border-t border-border/40 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {item.details.map((detail, dIdx) => (
                  <li key={dIdx} className="flex items-start space-x-2">
                    <span className="text-primary mt-1 text-xs font-bold">•</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default EducationSection;
