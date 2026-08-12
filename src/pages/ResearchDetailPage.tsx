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
        <h2 className="text-2xl font-bold text-primary">Article Not Found</h2>
        <p className="mt-2 text-secondary">The requested research paper could not be found.</p>
        <button
          onClick={onBack}
          className="mt-6 inline-flex items-center space-x-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white hover:opacity-90"
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
        className="mb-8 inline-flex items-center space-x-2 text-sm font-medium text-secondary hover:text-primary transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        <span>Back to Articles</span>
      </button>

      <header className="mb-8 border-b border-border pb-8">
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary"
            >
              {tag}
            </span>
          ))}
        </div>
        <h1 className="text-3xl font-extrabold text-primary sm:text-4xl">
          {post.title}
        </h1>
        <div className="mt-4 flex items-center space-x-6 text-sm text-muted">
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

      <div className="prose prose-neutral dark:prose-invert max-w-none text-secondary">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>
    </article>
  );
};

export default ResearchDetailPage;
