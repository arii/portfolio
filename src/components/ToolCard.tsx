import React from 'react';
import { ResearchTool } from '@/types/research';

interface ToolCardProps {
  tool: ResearchTool;
  onNavigate: (slug: string) => void;
}

const ToolCard: React.FC<ToolCardProps> = ({ tool, onNavigate }) => {
  const isClickable = !!tool.externalUrl || !!tool.canonicalPath;

  const content = (
    <div className={`p-4 bg-surface/50 border border-line rounded-2xl transition-all space-y-2 ${isClickable ? 'hover:border-accent cursor-pointer group' : ''}`}>
      <div className="flex justify-between items-start">
        <h4 className="font-bold text-text-main text-sm font-display group-hover:text-accent transition-colors">{tool.title}</h4>
        <span className="text-[8px] bg-accent/10 text-accent px-1.5 py-0.5 rounded border border-accent/20">
          {tool.status}
        </span>
      </div>
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
