import React from 'react';
import { ArrowRight } from 'lucide-react';
import { ResearchTool } from '@/types/research';

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
    <div className={`p-4 bg-surface/50 border border-line rounded-2xl transition-all duration-200 space-y-2 ${isClickable ? 'hover:border-accent hover:-translate-y-0.5 cursor-pointer group' : ''}`}>
      <div className="flex justify-between items-start gap-2">
        <div className="flex items-center gap-1.5">
          <h4 className="font-bold text-text-main text-sm font-display group-hover:text-accent transition-colors">{tool.title}</h4>
          {isClickable && <ArrowRight className="w-3.5 h-3.5 text-accent opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />}
        </div>
        <span className="text-[8px] bg-accent/10 text-accent px-1.5 py-0.5 rounded border border-accent/20 shrink-0">
          {tool.status}
        </span>
      </div>

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
