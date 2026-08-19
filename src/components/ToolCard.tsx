import React from 'react';
import { ResearchTool } from '@/types/research';
import SafeImage from '@/components/ui/SafeImage';

interface ToolCardProps {
  tool: ResearchTool;
  onNavigate: (slug: string) => void;
}

const ToolCard: React.FC<ToolCardProps> = ({ tool, onNavigate }) => {
  const isClickable = !!tool.externalUrl || !!tool.canonicalPath;

  const handleParentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    const el = document.getElementById('flagship');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.hash = '#flagship';
    }
  };

  const content = (
    <div className={`p-4 bg-surface/50 border border-line rounded-2xl transition-all space-y-2 ${isClickable ? 'hover:border-accent cursor-pointer group' : ''}`}>
      {tool.image && (
        <div className="relative mb-3 aspect-video w-full overflow-hidden rounded-lg bg-muted border border-line/50">
          <SafeImage
            src={tool.image}
            alt={tool.imageAlt || tool.title}
            className="h-full w-full object-cover"
            containerClassName="w-full h-full"
            loading="lazy"
          />
          <span className="absolute top-2 right-2 z-10 rounded-full bg-black/70 px-2.5 py-0.5 text-[10px] font-semibold text-white backdrop-blur-sm border border-line">
            {tool.category}
          </span>
        </div>
      )}
      <div className="flex justify-between items-start gap-2">
        <h4 className="font-bold text-text-main text-sm font-display group-hover:text-accent transition-colors">{tool.title}</h4>
        <span className="text-[8px] bg-accent/10 text-accent px-1.5 py-0.5 rounded border border-accent/20 shrink-0">
          {tool.status}
        </span>
      </div>

      {tool.metrics && (
        <div className="text-[11px] font-semibold text-accent">
          {tool.metrics}
        </div>
      )}

      {tool.parentFlagship && (
        <div className="pt-0.5">
          <a
            href="#flagship"
            onClick={handleParentClick}
            className="inline-flex items-center gap-1 text-[10px] bg-accent/10 text-accent hover:bg-accent/20 border border-accent/20 px-2 py-0.5 rounded-full font-medium transition-colors focus:outline-none focus:ring-1 focus:ring-accent"
            aria-label={`Part of ${tool.parentFlagship.title} flagship project`}
          >
            <span>Part of <strong className="font-semibold">{tool.parentFlagship.title}</strong></span>
          </a>
        </div>
      )}

      <p className="text-xs text-text-dim leading-relaxed">{tool.description}</p>
      <div className="flex flex-wrap gap-1.5 pt-1">
        {tool.tags.map(tag => (
          <span key={tag} className="text-[9px] bg-[#0f172a] px-2 py-0.5 text-text-dim border border-line rounded-full">{tag}</span>
        ))}
      </div>
    </div>
  );

  if (isClickable) {
    if (tool.externalUrl) {
      return (
        <a href={tool.externalUrl} target="_blank" rel="noopener noreferrer" className="block outline-none">
          {content}
        </a>
      );
    } else if (tool.canonicalPath) {
      const isResearch = tool.canonicalPath.startsWith('/research/');
      const targetSlug = isResearch ? tool.canonicalPath.replace('/research/', '') : tool.canonicalPath;

      return (
        <div
          onClick={() => isResearch ? onNavigate(targetSlug) : window.open(targetSlug, '_blank', 'noopener,noreferrer')}
          className="block outline-none"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
      if (e.key === ' ') e.preventDefault();
              isResearch ? onNavigate(targetSlug) : window.open(targetSlug, '_blank', 'noopener,noreferrer');
            }
          }}
        >
          {content}
        </div>
      );
    }
  }

  return content;
};

export default ToolCard;
