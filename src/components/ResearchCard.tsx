import React from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { ResearchPost, ResearchTool } from '@/types/research';

export interface ResearchCardProps {
  post?: ResearchPost;
  tool?: ResearchTool;
  item?: ResearchPost | ResearchTool;
  onSelect?: (slug: string) => void;
  onNavigate?: (slug: string) => void;
}

const ResearchCard: React.FC<ResearchCardProps> = ({ post, tool, item, onSelect, onNavigate }) => {
  const postItem = post || (item && 'summary' in item ? (item as ResearchPost) : undefined);
  const toolItem = tool || (item && 'description' in item ? (item as ResearchTool) : undefined);

  const title = postItem?.title || toolItem?.title || '';
  const description = postItem?.summary || toolItem?.description || '';
  const tags = postItem?.tags || toolItem?.tags || [];
  const status = toolItem?.status || postItem?.status;
  const date = postItem?.date;
  const readingTime = postItem?.readingTime;
  const parentFlagship = toolItem?.parentFlagship;
  const isArticle = !!postItem || (!toolItem && !!date);

  const slug = postItem?.slug || (toolItem?.canonicalPath ? (toolItem.canonicalPath.startsWith('/research/') ? toolItem.canonicalPath.replace('/research/', '') : toolItem.canonicalPath) : toolItem?.id || '');
  const externalUrl = toolItem?.externalUrl;

  const handleParentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    const el = document.getElementById('flagship');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.hash = '#flagship';
    }
  };

  const handleCardClick = () => {
    const navFn = onNavigate || onSelect;
    if (externalUrl) {
      window.open(externalUrl, '_blank', 'noopener,noreferrer');
    } else if (toolItem?.canonicalPath && !toolItem.canonicalPath.startsWith('/research/')) {
      window.open(toolItem.canonicalPath, '_blank', 'noopener,noreferrer');
    } else if (navFn) {
      navFn(slug);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      if (e.key === ' ') e.preventDefault();
      handleCardClick();
    }
  };

  return (
    <article
      onClick={handleCardClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      className="group flex flex-col justify-between rounded-2xl border border-line bg-surface/50 p-6 shadow-sm transition-all hover:border-accent/50 hover:bg-surface-alt/50 hover:shadow-md cursor-pointer overflow-hidden text-text-main focus:outline-none focus:ring-2 focus:ring-accent"
    >
      <div className="flex-grow flex flex-col justify-between">
        <div>
          <div className="flex flex-wrap items-center gap-2 mb-3">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-line bg-surface px-2.5 py-0.5 text-[10px] font-semibold text-text-dim uppercase tracking-wider"
              >
                {tag}
              </span>
            ))}
            {parentFlagship && (
              <a
                href="#flagship"
                onClick={handleParentClick}
                className="inline-flex items-center gap-1 text-[10px] bg-accent/10 text-accent hover:bg-accent/20 border border-accent/20 px-2 py-0.5 rounded-full font-medium transition-colors focus:outline-none focus:ring-1 focus:ring-accent"
                aria-label={`Part of ${parentFlagship.title} flagship project`}
              >
                <span>Part of <strong className="font-semibold">{parentFlagship.title}</strong></span>
              </a>
            )}
          </div>
          <h3 className="text-lg font-bold text-text-main group-hover:text-accent transition-colors font-display">
            <span>{title}</span>
          </h3>
          <p className="mt-2 text-sm text-text-dim line-clamp-3 leading-relaxed">
            {description}
          </p>
        </div>

        <div className="mt-6 border-t border-line/50 pt-4 flex flex-wrap items-center justify-between gap-3 text-xs text-text-dim">
          <div className="flex items-center gap-2">
            {status && (
              <span className="inline-block rounded border border-accent/20 bg-accent/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-accent shrink-0">
                {status}
              </span>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-3.5 ml-auto">
            {(date || readingTime) && (
              <div className="flex items-center space-x-3 text-xs text-text-dim">
                {date && (
                  <span className="flex items-center space-x-1">
                    <Calendar className="h-3.5 w-3.5 shrink-0" />
                    <time dateTime={date}>{date}</time>
                  </span>
                )}
                {readingTime && (
                  <span className="flex items-center space-x-1">
                    <Clock className="h-3.5 w-3.5 shrink-0" />
                    <span>{readingTime}</span>
                  </span>
                )}
              </div>
            )}

            <span className="inline-flex items-center space-x-1 text-xs font-semibold text-accent group-hover:translate-x-0.5 transition-transform">
              <span className="hidden sm:inline">{isArticle ? 'Read Deep-Dive' : 'View Tool'}</span>
              <ArrowRight className="h-3.5 w-3.5 shrink-0" />
            </span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ResearchCard;
