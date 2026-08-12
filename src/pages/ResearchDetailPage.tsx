import React from 'react';
import ReactMarkdown from 'react-markdown';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import { getResearchPostBySlug } from '@/data/research';

export interface ResearchDetailPageProps {
  slug: string;
  onBack: () => void;
}

const ResearchDetailPage: React.FC<ResearchDetailPageProps> = ({ slug, onBack }) => {
  const post = getResearchPostBySlug(slug);

  if (!post) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-16 text-center">
        <h2 className="text-2xl font-bold text-white">Article Not Found</h2>
        <p className="mt-2 text-slate-400">The requested research paper could not be found.</p>
        <button
          onClick={onBack}
          className="mt-6 inline-flex items-center space-x-2 rounded-lg bg-brand-green px-4 py-2 text-sm font-medium text-black hover:opacity-90 font-bold"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Research</span>
        </button>
      </div>
    );
  }

  return (
    <article className="mx-auto max-w-3xl px-4 py-12">
      <button
        onClick={onBack}
        className="mb-8 inline-flex items-center space-x-2 text-sm font-medium text-slate-400 hover:text-brand-green transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        <span>Back to Articles</span>
      </button>

      <header className="mb-8 border-b border-slate-850 pb-8">
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-brand-green/10 px-2.5 py-0.5 text-xs font-medium text-brand-green"
            >
              {tag}
            </span>
          ))}
        </div>
        <h1 className="text-3xl font-extrabold text-white sm:text-4xl">
          {post.title}
        </h1>
        <div className="mt-4 flex items-center space-x-6 text-sm text-slate-500">
          <span className="flex items-center space-x-1.5">
            <Calendar className="h-4 w-4" />
            <time dateTime={post.date}>{post.date}</time>
          </span>
          <span className="flex items-center space-x-1.5">
            <Clock className="h-4 w-4" />
            <span>{post.readingTime}</span>
          </span>
        </div>
      </header>

      <div className="prose prose-invert dark:prose-invert max-w-none text-slate-300 leading-relaxed space-y-6">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>
    </article>
  );
};

export default ResearchDetailPage;
