import React from 'react';
import { FolderGit2 } from 'lucide-react';
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 print:grid-cols-2 print:gap-4">
        {projects.map((project, idx) => (
          <div key={idx} className="bg-card border border-border p-4 rounded-xl print:border-none print:p-0 print:bg-transparent">
            <h3 className="text-sm font-bold text-foreground print:text-black mb-1">{project.title}</h3>
            <p className="text-xs text-muted-foreground leading-relaxed print:text-gray-800">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
