import React from 'react';
import { ResearchTool } from '@/types/research';
import SafeImage from '@/components/ui/SafeImage';

interface ToolCardProps {
  tool: ResearchTool;
  onNavigate?: (slug: string) => void;
}

const ToolCard: React.FC<ToolCardProps> = ({ tool, onNavigate }) => {
  const isClickable = !!tool.externalUrl || !!tool.canonicalPath;
  const isInternal = tool.canonicalPath ? (tool.canonicalPath.startsWith('/research/') || tool.canonicalPath.startsWith('/devai/')) : false;
  const targetSlug = isInternal && tool.canonicalPath
    ? tool.canonicalPath.replace(/^\/?(research|devai)\//, '').replace(/^\//, '').replace(/\/+$/, '')
    : '';

  const handleCardClick = () => {
    if (tool.canonicalPath) {
      if (isInternal && onNavigate && targetSlug) {
        onNavigate(targetSlug);
      } else {
        window.location.href = tool.canonicalPath;
      }
    } else if (tool.externalUrl) {
      window.open(tool.externalUrl, '_blank', 'noopener,noreferrer');
    }
  };

  const handleParentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    const el = document.getElementById('flagship');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.hash = '#flagship';
    }
  };

  return (
    <article
      onClick={handleCardClick}
      className={`p-4 bg-surface/50 border border-line rounded-2xl transition-all space-y-2 relative group ${
        isClickable ? 'hover:border-accent cursor-pointer' : ''
      }`}
    >
      {tool.image && (
        <div className="relative mb-3 aspect-video w-full overflow-hidden rounded-lg bg-surface border border-line/50">
          <SafeImage
            src={tool.image}
            alt={tool.imageAlt || tool.title}
            className="h-full w-full object-cover"
            containerClassName="w-full h-full"
            loading="lazy"
          />
          <span className="absolute top-2 right-2 z-10 rounded-md bg-bg/80 px-2.5 py-0.5 text-[10px] font-semibold text-text-main backdrop-blur-sm border border-line">
            {tool.category}
          </span>
        </div>
      )}
      <div className="flex justify-between items-start gap-2">
        <h3 className="font-bold text-text-main text-sm font-display group-hover:text-accent transition-colors text-balance">
          {tool.canonicalPath ? (
            <a
              href={tool.canonicalPath}
              onClick={(e) => {
                if (isInternal && onNavigate && targetSlug && !e.metaKey && !e.ctrlKey) {
                  e.preventDefault();
                  e.stopPropagation();
                  onNavigate(targetSlug);
                }
              }}
              aria-label={`Explore ${tool.title} detailed documentation`}
              className="hover:text-accent transition-colors no-underline text-inherit after:absolute after:inset-0 after:z-0"
            >
              {tool.title}
            </a>
          ) : tool.externalUrl ? (
            <a
              href={tool.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open external link for ${tool.title}`}
              className="hover:text-accent transition-colors no-underline text-inherit after:absolute after:inset-0 after:z-0"
            >
              {tool.title}
            </a>
          ) : (
            tool.title
          )}
        </h3>
        <span className="text-[8px] bg-accent/10 text-accent px-1.5 py-0.5 rounded border border-accent/20 shrink-0 z-10">
          {tool.status}
        </span>
      </div>

      {tool.metrics && (
        <div className="text-[11px] font-semibold text-accent z-10 relative">
          {tool.metrics}
        </div>
      )}

      {tool.parentFlagship && (
        <div className="pt-0.5 z-10 relative">
          <a
            href="#flagship"
            onClick={handleParentClick}
            className="inline-flex items-center gap-1 text-[10px] bg-accent/10 text-accent hover:bg-accent/20 border border-accent/20 px-2 py-0.5 rounded-md font-medium transition-colors focus:outline-none focus:ring-1 focus:ring-accent"
            aria-label={`Part of ${tool.parentFlagship.title} flagship project`}
          >
            <span>Part of <strong className="font-semibold">{tool.parentFlagship.title}</strong></span>
          </a>
        </div>
      )}

      <p className="text-xs text-text-dim leading-relaxed whitespace-pre-line text-pretty">{tool.description}</p>

      <div className="flex flex-wrap gap-1.5 pt-1 z-10 relative">
        {tool.pdfUrl && (
          <span className="inline-flex items-center gap-1 text-[10px] bg-accent/10 text-accent border border-accent/20 px-2 py-0.5 rounded font-medium">
            📄 PDF Report
          </span>
        )}
        {tool.videoUrl && (
          <span className="inline-flex items-center gap-1 text-[10px] bg-accent/10 text-accent border border-accent/20 px-2 py-0.5 rounded font-medium">
            ▶️ Video Demo
          </span>
        )}
        {tool.playlistUrl && (
          <span className="inline-flex items-center gap-1 text-[10px] bg-accent/10 text-accent border border-accent/20 px-2 py-0.5 rounded font-medium">
            📺 Playlist
          </span>
        )}
        {tool.mediaLinks?.map(link => (
          <a
            key={link.url}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open media link ${link.label} for ${tool.title}`}
            onClick={(e) => {
              e.stopPropagation();
            }}
            className="inline-flex items-center gap-1 text-[10px] bg-accent/10 text-accent border border-accent/20 px-2 py-0.5 rounded font-medium hover:bg-accent/20 transition-colors cursor-pointer"
          >
            {link.type === 'video' ? '▶️' : link.type === 'pdf' ? '📄' : '🔗'} {link.label}
          </a>
        ))}
        {tool.tags.map(tag => (
          <span key={tag} className="text-[9px] bg-surface px-2 py-0.5 text-text-dim border border-line rounded-md">{tag}</span>
        ))}
      </div>
    </article>
  );
};

export default ToolCard;
