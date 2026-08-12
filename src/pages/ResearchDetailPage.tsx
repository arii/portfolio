import React from 'react';
import ReactMarkdown from 'react-markdown';
import { ArrowLeft, Calendar, Clock, Terminal } from 'lucide-react';
import { getResearchPostBySlug } from '@/data/research';

export interface ResearchDetailPageProps {
  slug: string;
  onBack: () => void;
}

const ResearchDetailPage: React.FC<ResearchDetailPageProps> = ({ slug, onBack }) => {
  const post = getResearchPostBySlug(slug);

  if (!post) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-16 text-center border border-dashed border-red-500/30 rounded-xl bg-brand-bg-darker">
        <h2 className="text-2xl font-bold font-mono text-red-500">404: FILE NOT FOUND</h2>
        <p className="mt-2 text-slate-400 font-mono">The requested console module '{slug}' could not be loaded.</p>
        <button
          onClick={onBack}
          className="mt-6 inline-flex items-center space-x-2 rounded-lg bg-brand-green/20 border border-brand-green/40 px-4 py-2 text-sm font-mono text-brand-green-light hover:bg-brand-green/30"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>cd ..</span>
        </button>
      </div>
    );
  }

  return (
    <article className="mx-auto max-w-3xl px-4 py-8 space-y-6">
      <button
        onClick={onBack}
        className="inline-flex items-center space-x-2 text-sm font-mono text-slate-500 hover:text-brand-green-light transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        <span>$ cd ../research</span>
      </button>

      {/* Console Frame */}
      <div className="rounded-xl border border-slate-800 bg-brand-bg-darker overflow-hidden shadow-2xl">
        {/* Console Header bar */}
        <div className="flex items-center justify-between px-4 py-2 border-b border-slate-900 bg-brand-bg-dark font-mono text-xs text-slate-500">
          <div className="flex items-center space-x-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-500/80"></span>
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80"></span>
            <span className="h-2.5 w-2.5 rounded-full bg-brand-green/80"></span>
          </div>
          <span className="flex items-center space-x-1">
            <Terminal className="h-3.5 w-3.5 text-slate-600" />
            <span>cat {post.slug}.md</span>
          </span>
        </div>

        <div className="p-6 md:p-8 space-y-6">
          <header className="border-b border-slate-900 pb-6 space-y-4">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded bg-brand-green/10 border border-brand-green/20 px-2 py-0.5 text-[10px] font-mono text-brand-green-light"
                >
                  ${tag.toLowerCase()}
                </span>
              ))}
            </div>
            <h1 className="text-2xl md:text-4xl font-extrabold font-mono text-white flex items-start space-x-1.5">
              <span className="text-brand-green select-none">#</span>
              <span>{post.title}</span>
            </h1>
            <div className="flex items-center space-x-6 text-xs text-slate-500 font-mono">
              <span className="flex items-center space-x-1.5">
                <Calendar className="h-4 w-4 text-slate-600" />
                <time dateTime={post.date}>{post.date}</time>
              </span>
              <span className="flex items-center space-x-1.5">
                <Clock className="h-4 w-4 text-slate-600" />
                <span>{post.readingTime}</span>
              </span>
            </div>
          </header>

          {/* Markdown renderer styling for code/headings/lists */}
          <div className="prose prose-invert max-w-none text-slate-300 font-sans leading-relaxed space-y-4
            prose-headings:font-mono prose-headings:text-white prose-h2:text-xl prose-h2:border-b prose-h2:border-slate-900 prose-h2:pb-2 prose-h2:mt-6
            prose-p:text-slate-400 prose-p:text-sm prose-p:leading-relaxed
            prose-a:text-brand-cyan-light hover:prose-a:underline
            prose-code:text-brand-green-light prose-code:bg-brand-bg-dark/40 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:font-mono prose-code:text-xs
            prose-pre:bg-brand-bg-dark prose-pre:border prose-pre:border-slate-900 prose-pre:p-4 prose-pre:rounded-lg prose-pre:overflow-x-auto
            prose-ul:list-disc prose-ul:pl-5 prose-ul:space-y-1 prose-ul:text-slate-400 prose-ul:text-sm
            prose-ol:list-decimal prose-ol:pl-5 prose-ol:space-y-1 prose-ol:text-slate-400 prose-ol:text-sm"
          >
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ResearchDetailPage;
