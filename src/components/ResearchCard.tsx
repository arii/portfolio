import React from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { ResearchPost } from '@/types/research';

export interface ResearchCardProps {
  post: ResearchPost;
  onSelect?: (slug: string) => void;
  basePath?: string;
}

const ResearchCard: React.FC<ResearchCardProps> = ({ post, onSelect, basePath }) => {
  const isRobotics = (post.category || '').toLowerCase().includes('robotics');
  const pathPrefix = basePath || (isRobotics ? '/research' : '/devai');
  const targetPath = `${pathPrefix}/${post.slug}`;

  const handleClick = (e: React.MouseEvent) => {
    if (onSelect && !e.metaKey && !e.ctrlKey) {
      e.preventDefault();
      onSelect(post.slug);
    }
  };

  return (
    <article className="group flex flex-col justify-between rounded-xl border border-border bg-card hover:bg-muted/50 p-6 shadow-sm transition-all hover:border-primary/50 hover:shadow-md overflow-hidden text-foreground">
      <a
        href={targetPath}
        onClick={handleClick}
        className="flex-grow flex flex-col justify-between no-underline text-inherit block outline-none cursor-pointer"
        aria-label={`Read article: ${post.title}`}
      >
        <div>
          <div className="flex flex-wrap gap-2 mb-3">
            {post.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="rounded-md border border-border bg-background px-2 py-0.5 text-xs font-semibold text-text-main whitespace-nowrap"
              >
                {tag}
              </span>
            ))}
            {post.tags.length > 3 && (
              <span className="rounded-md border border-border bg-background px-2 py-0.5 text-xs font-semibold text-text-main whitespace-nowrap">
                +{post.tags.length - 3}
              </span>
            )}
          </div>
          <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors flex items-start space-x-1">
            <span>{post.title}</span>
          </h3>
          <p className="mt-2 text-sm text-muted-foreground line-clamp-3 leading-relaxed">
            {post.summary}
          </p>
        </div>

        <div className="mt-6 flex items-center justify-between text-xs text-muted-foreground border-t border-border pt-4">
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
      </a>
    </article>
  );
};

export default ResearchCard;
