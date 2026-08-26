import React from 'react';
import { FolderGit2, ExternalLink } from 'lucide-react';
import { ResumeProject } from '@/data/resume';

export interface ProjectsSectionProps {
  projects: ResumeProject[];
  isCollapsible?: boolean;
  isExpanded?: boolean;
  onToggleExpand?: () => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  projects,
  isCollapsible,
  isExpanded,
  onToggleExpand
}) => {
  const displayedProjects = isCollapsible && !isExpanded ? projects.slice(0, 1) : projects;

  return (
    <section className="mb-10 print:mb-6 print:break-inside-avoid">
      <div className="flex items-center justify-between mb-4 border-b border-border/40 pb-2 print:border-b-2 print:border-black">
        <div className="flex items-center space-x-2.5">
          <FolderGit2 className="h-5 w-5 text-primary print:text-black" />
          <h2 className="text-xl font-bold text-foreground print:text-black uppercase tracking-wider">Impact Projects</h2>
        </div>
        {isCollapsible && onToggleExpand && (
          <button
            type="button"
            onClick={onToggleExpand}
            className="text-xs font-semibold text-primary hover:underline font-mono print:hidden min-h-[40px] px-2"
            aria-expanded={isExpanded}
          >
            {isExpanded ? '[ Collapse ]' : '[ Expand ]'}
          </button>
        )}
      </div>
      <div className="space-y-3.5">
        {displayedProjects.map((project, idx) => (
          <div key={idx} className="bg-card border border-border/80 p-3.5 rounded-xl space-y-2 hover:border-primary/50 transition-colors print:border-none print:p-0 print:bg-transparent">
            <div className="flex items-start justify-between gap-2">
              <div className="flex items-center gap-1.5 flex-wrap">
                <h3 className="text-xs font-bold text-foreground print:text-black">{project.title}</h3>
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors print:hidden" title="Direct Outbound Link">
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
              {project.metric && (
                <span className="shrink-0 px-2 py-0.5 text-[10px] font-mono font-semibold rounded-md bg-primary/10 text-primary border border-primary/20 print:border-border print:text-black print:bg-transparent">
                  {project.metric}
                </span>
              )}
            </div>
            <p className="text-[11px] text-muted-foreground leading-relaxed print:text-text-body">{project.description}</p>
            {project.techStack && (
              <div className="flex flex-wrap gap-1 pt-1 print:hidden">
                {project.techStack.map((tech, tIdx) => (
                  <span key={tIdx} className="px-1.5 py-0.5 text-[9px] font-mono rounded bg-secondary/80 text-foreground border border-border/50">
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
