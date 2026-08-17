import React from 'react';
import { FolderGit2, ExternalLink } from 'lucide-react';
import { ResumeProject } from '@/data/resume';

export interface ProjectsSectionProps {
  projects: ResumeProject[];
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => {
  return (
    <section className="mb-12 print:mb-8 print:break-inside-avoid">
      <div className="flex items-center space-x-3 mb-6 border-b border-border/40 pb-2 print:border-b-2 print:border-black">
        <FolderGit2 className="h-6 w-6 text-primary print:text-black" />
        <h2 className="text-2xl font-bold text-foreground print:text-black uppercase tracking-wider">Impact Projects</h2>
      </div>
      <div className="space-y-4">
        {projects.map((project, idx) => (
          <div key={idx} className="bg-card border border-border/80 p-4 rounded-xl space-y-2 hover:border-primary/50 transition-colors print:border-none print:p-0 print:bg-transparent">
            <div className="flex items-start justify-between gap-2">
              <div className="flex items-center gap-1.5 flex-wrap">
                <h3 className="text-sm font-bold text-foreground print:text-black">{project.title}</h3>
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors print:hidden">
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
              {project.metric && (
                <span className="shrink-0 px-2 py-0.5 text-[10px] font-mono font-semibold rounded-md bg-primary/10 text-primary border border-primary/20 print:border-gray-400 print:text-black print:bg-transparent">
                  {project.metric}
                </span>
              )}
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed print:text-gray-800">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
