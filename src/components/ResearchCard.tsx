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
      className="group flex flex-col justify-between rounded-xl border border-border bg-surface p-6 transition-all hover:border-primary/50 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer"
    >
      <div>
        <div className="flex flex-wrap gap-2 mb-3">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-xl font-semibold text-primary group-hover:text-primary-accent transition-colors">
          {post.title}
        </h3>
        <p className="mt-2 text-sm text-secondary line-clamp-3">
          {post.summary}
        </p>
      </div>

      <div className="mt-6 flex items-center justify-between text-xs text-muted">
        <div className="flex items-center space-x-4">
          <span className="flex items-center space-x-1">
            <Calendar className="h-3.5 w-3.5" />
            <time dateTime={post.date}>{post.date}</time>
          </span>
          <span className="flex items-center space-x-1">
            <Clock className="h-3.5 w-3.5" />
            <span>{post.readingTime}</span>
          </span>
        </div>
        <ArrowRight className="h-4 w-4 text-primary transition-transform group-hover:translate-x-1" />
      </div>
    </article>
  );
};

export default ResearchCard;
