import React from 'react';
import type { ResearchProject } from '@/config/researchProjects';
import SafeImage from '@/components/ui/SafeImage';

export interface ResearchCardProps {
  project: ResearchProject;
}

export const ResearchCard: React.FC<ResearchCardProps> = ({ project }) => {
  return (
    <article className="flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all hover:shadow-md">
      <div className="relative aspect-video w-full overflow-hidden bg-muted">
        <SafeImage
          src={project.imageSrc}
          alt={project.imageAlt}
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
          containerClassName="w-full h-full"
          loading="lazy"
        />
      </div>
      <div className="flex flex-1 flex-col justify-between p-6">
        <div className="space-y-3">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-md bg-secondary px-2.5 py-0.5 text-xs font-semibold text-secondary-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
          <h3 className="text-xl font-bold tracking-tight text-foreground">
            {project.title}
          </h3>
          <p className="text-sm font-medium text-primary">{project.subtitle}</p>
          <p className="text-sm text-muted-foreground">{project.description}</p>
        </div>
        {project.publicationUrl && (
          <div className="mt-6 pt-4 border-t border-border">
            <a
              href={project.publicationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm font-semibold text-primary hover:underline"
            >
              Read Publication &rarr;
            </a>
          </div>
        )}
      </div>
    </article>
  );
};

export default ResearchCard;
