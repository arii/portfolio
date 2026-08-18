import React from 'react';
import { Layers } from 'lucide-react';
import { ResearchTool } from '@/types/research';
import { FlagshipCard } from './FlagshipCard';

interface FlagshipProjectsProps {
  flagshipTools: ResearchTool[];
  onNavigate: (slug: string) => void;
  onImageClick: (src: string) => void;
}

export const FlagshipProjects: React.FC<FlagshipProjectsProps> = ({
  flagshipTools,
  onNavigate,
  onImageClick,
}) => {
  return (
    <section className="space-y-8" id="flagship">
      <div className="border-b border-line pb-3 flex items-center justify-between">
        <h2 className="text-xl md:text-2xl font-bold text-text-main flex items-center space-x-2">
          <Layers className="h-5 w-5 text-accent" />
          <span>Flagship Projects</span>
        </h2>
        <span className="text-xs text-text-dim uppercase tracking-widest">CASE STUDIES</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {flagshipTools.map((tool) => (
          <FlagshipCard
            key={tool.id}
            tool={tool}
            onNavigate={onNavigate}
            onImageClick={onImageClick}
          />
        ))}
      </div>
    </section>
  );
};
