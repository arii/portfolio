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
      className="group flex flex-col justify-between rounded-xl border border-line bg-surface hover:bg-surface-alt p-6 shadow-sm transition-all hover:border-accent/50 hover:shadow-md cursor-pointer overflow-hidden text-text-main"
    >
      <div className="flex-grow flex flex-col justify-between">
        <div>
          <div className="flex flex-wrap gap-2 mb-3">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded bg-accent/10 px-2 py-0.5 text-[10px] font-semibold text-accent lowercase"
              >
                {tag.toLowerCase()}
              </span>
            ))}
          </div>
          <h3 className="text-lg font-bold text-text-main group-hover:text-accent transition-colors flex items-start space-x-1">
            <span>{post.title}</span>
          </h3>
          <p className="mt-2 text-sm text-text-body line-clamp-3 leading-relaxed">
            {post.summary}
          </p>
        </div>

        <div className="mt-6 flex items-center justify-between text-xs text-text-dim border-t border-line pt-4">
          <div className="flex items-center space-x-4">
            <span className="flex items-center space-x-1">
              <Calendar className="h-3.5 w-3.5 text-text-dim" />
              <time dateTime={post.date}>{post.date}</time>
            </span>
            <span className="flex items-center space-x-1">
              <Clock className="h-3.5 w-3.5 text-text-dim" />
              <span>{post.readingTime}</span>
            </span>
          </div>
          <ArrowRight className="h-4 w-4 text-accent transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </article>
  );
};

export default ResearchCard;
