import React from 'react';
import { FolderGit2, ExternalLink } from 'lucide-react';
import { ResumeProject } from '@/data/resume';

export interface ProjectsSectionProps {
  projects: ResumeProject[];
  className?: string;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  projects,
  className = '',
}) => {
  return (
    <section className={`space-y-6 ${className}`}>
      <div className="flex items-center space-x-3 border-b border-border/60 pb-3">
        <div className="p-2 rounded-xl bg-primary/10 border border-primary/20 text-primary">
          <FolderGit2 className="h-5 w-5" />
        </div>
        <h2 className="text-2xl font-bold text-foreground tracking-tight">Featured Projects</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border border-border bg-card p-6 rounded-2xl flex flex-col justify-between space-y-4 hover:border-primary/50 transition-colors shadow-sm print:border-line print:bg-white print:p-4"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-bold text-foreground">{project.title}</h3>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 transition-colors print:hidden"
                    title="View Project"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                )}
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {project.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-2 border-t border-border/40">
              {project.techStack.map((tech, tIdx) => (
                <span
                  key={tIdx}
                  className="bg-secondary text-foreground text-[11px] font-mono px-2 py-0.5 rounded border border-border"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
