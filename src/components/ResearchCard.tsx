import React from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { ResearchPost } from '@/types/research';

export interface ResearchCardProps {
  post: ResearchPost;
  onSelect: (slug: string) => void;
}

const ResearchCard: React.FC<ResearchCardProps> = ({ post, onSelect }) => {
  const handleClick = () => {
    onSelect(post.slug);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onSelect(post.slug);
    }
  };

  return (
    <article
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      className="group flex flex-col justify-between rounded-3xl border border-line bg-surface p-6 transition-all hover:border-accent hover:shadow-glow focus:outline-none focus:ring-2 focus:ring-accent cursor-pointer text-text-body"
    >
      <div className="space-y-4">
        <div className="flex flex-wrap gap-1.5">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-[#0f172a] border border-line px-2.5 py-0.5 text-[10px] font-sans text-text-dim"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="space-y-2">
          <h3 className="text-xl font-bold font-display text-text-main group-hover:text-accent transition-colors">
            {post.title}
          </h3>
          <p className="text-sm text-text-dim line-clamp-3 leading-relaxed font-sans">
            {post.summary}
          </p>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between text-xs text-text-dim font-sans border-t border-line/50 pt-4">
        <div className="flex items-center space-x-4">
          <span className="flex items-center space-x-1.5">
            <Calendar className="h-3.5 w-3.5 text-slate-500" />
            <time dateTime={post.date}>{post.date}</time>
          </span>
          <span className="flex items-center space-x-1.5">
            <Clock className="h-3.5 w-3.5 text-slate-500" />
            <span>{post.readingTime}</span>
          </span>
        </div>
        <ArrowRight className="h-4 w-4 text-accent transition-transform group-hover:translate-x-1" />
      </div>
    </article>
  );
};

export default ResearchCard;
