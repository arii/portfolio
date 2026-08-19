import React from 'react';
import { DEVAI_PROJECTS } from '@/config/devAiProjects';

export interface DevAiGridProps {
  className?: string;
}

export const DevAiGrid: React.FC<DevAiGridProps> = ({ className = '' }) => {
  return (
    <section className={`grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 ${className}`}>
      {DEVAI_PROJECTS.map((item) => (
        <div
          key={item.id}
          className="flex flex-col justify-between rounded-xl border border-border bg-card p-5 shadow-sm transition-all hover:shadow-md"
        >
          <div>
            <div className="relative mb-4 aspect-video w-full overflow-hidden rounded-lg bg-muted">
              <img
                src={item.imageSrc}
                alt={item.imageAlt}
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <span className="absolute top-2 right-2 rounded-full bg-background/80 px-2.5 py-0.5 text-xs font-semibold text-foreground backdrop-blur-sm">
                {item.category}
              </span>
            </div>
            <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
            {item.metrics && (
              <span className="mb-2 inline-block text-xs font-semibold text-primary">
                {item.metrics}
              </span>
            )}
            <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
          </div>
          {item.externalUrl && (
            <div className="mt-5 pt-3">
              <a
                href={item.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold uppercase tracking-wider text-primary hover:underline"
              >
                View Project &rarr;
              </a>
            </div>
          )}
        </div>
      ))}
    </section>
  );
};

export default DevAiGrid;
