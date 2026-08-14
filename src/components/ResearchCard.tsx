import React from 'react';
import { Calendar, Clock, ArrowRight, Terminal } from 'lucide-react';
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
      className="group flex flex-col justify-between rounded-xl border border-slate-800 bg-[#05070c] hover:bg-slate-900/40 p-0 transition-all hover:border-brand-green/50 hover:shadow-[0_0_15px_rgba(34,197,94,0.1)] focus:outline-none focus:ring-2 focus:ring-brand-green cursor-pointer overflow-hidden text-slate-100"
    >
      {/* Terminal Bar Primitives */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-slate-900 bg-[#0a0e17]">
        <div className="flex items-center space-x-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-500/80"></span>
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80"></span>
          <span className="h-2.5 w-2.5 rounded-full bg-brand-green/80"></span>
        </div>
        <span className="text-[10px] font-mono text-slate-500 flex items-center space-x-1">
          <Terminal className="h-3 w-3 text-slate-600" />
          <span>{post.slug}.sh</span>
        </span>
      </div>

      <div className="p-6 flex-grow flex flex-col justify-between">
        <div>
          <div className="flex flex-wrap gap-2 mb-3">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded bg-brand-green/10 border border-brand-green/20 px-2 py-0.5 text-[10px] font-mono text-brand-green-light"
              >
                ${tag.toLowerCase()}
              </span>
            ))}
          </div>
          <h3 className="text-lg font-bold font-mono text-slate-100 group-hover:text-brand-green-light transition-colors flex items-start space-x-1">
            <span className="text-brand-green select-none">&gt;</span>
            <span>{post.title}</span>
          </h3>
          <p className="mt-2 text-sm text-slate-400 line-clamp-3 leading-relaxed">
            {post.summary}
          </p>
        </div>

        <div className="mt-6 flex items-center justify-between text-xs text-slate-500 font-mono border-t border-slate-900/60 pt-4">
          <div className="flex items-center space-x-4">
            <span className="flex items-center space-x-1">
              <Calendar className="h-3.5 w-3.5 text-slate-600" />
              <time dateTime={post.date}>{post.date}</time>
            </span>
            <span className="flex items-center space-x-1">
              <Clock className="h-3.5 w-3.5 text-slate-600" />
              <span>{post.readingTime}</span>
            </span>
          </div>
          <ArrowRight className="h-4 w-4 text-brand-green transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </article>
  );
};

export default ResearchCard;
