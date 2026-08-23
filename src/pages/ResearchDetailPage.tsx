import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
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
      <div className="mx-auto max-w-3xl px-4 py-16 text-center rounded-3xl bg-surface/40 border border-line">
        <h2 className="text-2xl font-bold text-text-main">Article Not Found</h2>
        <p className="mt-2 text-text-dim">The requested research paper could not be found.</p>
        <button
          onClick={onBack}
          className="mt-6 inline-flex items-center space-x-2 rounded-xl bg-accent-sky hover:bg-accent-sky/90 text-bg px-4 py-2 text-sm font-semibold transition-colors min-h-[44px]"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Research</span>
        </button>
      </div>
    );
  }

  return (
    <article className="mx-auto max-w-3xl px-4 py-12 space-y-8">
      <button
        onClick={onBack}
        className="inline-flex items-center space-x-2 text-sm font-semibold text-text-dim hover:text-accent-sky transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        <span>Back to Articles</span>
      </button>

      <header className="border-b border-line pb-8 space-y-4">
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-accent-sky/10 px-2.5 py-0.5 text-xs font-semibold text-accent-sky border border-accent-sky/15"
            >
              {tag}
            </span>
          ))}
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-text-main leading-tight">
          {post.title}
        </h1>
        <div className="flex items-center space-x-6 text-xs text-text-dim">
          <span className="flex items-center space-x-1.5">
            <Calendar className="h-4 w-4 text-text-dim" />
            <time dateTime={post.date}>{post.date}</time>
          </span>
          <span className="flex items-center space-x-1.5">
            <Clock className="h-4 w-4 text-text-dim" />
            <span>{post.readingTime}</span>
          </span>
        </div>
      </header>

      {/* Render Markdown content cleanly using elegant, high-fidelity custom components */}
      <div className="prose-editorial">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            code: ({ className, children, ...props }) => {
              const match = /language-(\w+)/.exec(className || '');
              const language = match ? match[1] : '';
              const codeString = String(children).replace(/\n$/, '');
              // Match block vs inline
              const isBlock = codeString.includes('\n') || !!language;

              if (isBlock) {
                return (
                  <div className="my-6 rounded-2xl border border-line overflow-hidden bg-bg">
                    {language && (
                      <div className="bg-surface px-4 py-2 border-b border-line text-[10px] font-mono font-bold uppercase tracking-wider text-text-dim">
                        {language}
                      </div>
                    )}
                    <pre className="p-4 overflow-x-auto text-sm font-mono text-accent-sky/90 leading-relaxed bg-bg">
                      <code>{children}</code>
                    </pre>
                  </div>
                );
              }
              return (
                <code className="bg-surface text-accent-sky px-1.5 py-0.5 rounded font-mono text-xs border border-line normal-case" {...props}>
                  {children}
                </code>
              );
            },
            table: ({ children, ...props }) => (
              <div className="my-6 w-full overflow-x-auto rounded-2xl border border-line bg-surface/10">
                <table className="w-full border-collapse text-sm" {...props}>
                  {children}
                </table>
              </div>
            ),
            th: ({ children, ...props }) => (
              <th className="border-b border-line bg-bg/40 p-4 text-left font-mono text-xs font-bold uppercase tracking-wider text-text-dim" {...props}>
                {children}
              </th>
            ),
            td: ({ children, ...props }) => (
              <td className="border-b border-line/50 p-4 text-text-body" {...props}>
                {children}
              </td>
            ),
            h1: ({ children, ...props }) => (
              <h1 className="text-3xl font-black text-text-main mt-12 mb-4" {...props}>
                {children}
              </h1>
            ),
            h2: ({ children, ...props }) => (
              <h2 className="text-2xl font-bold text-text-main mt-12 mb-4 pb-2 border-b border-line" {...props}>
                {children}
              </h2>
            ),
            h3: ({ children, ...props }) => (
              <h3 className="text-lg font-bold text-text-main mt-8 mb-3" {...props}>
                {children}
              </h3>
            ),
            ul: ({ children, ...props }) => (
              <ul className="list-disc pl-6 my-4 space-y-1.5 text-text-body" {...props}>
                {children}
              </ul>
            ),
            ol: ({ children, ...props }) => (
              <ol className="list-decimal pl-6 my-4 space-y-1.5 text-text-body" {...props}>
                {children}
              </ol>
            ),
            a: ({ href, children, ...props }) => {
              if (href) {
                // Extract video ID or playlist ID
                let embedUrl: string | null = null;
                const ytMatch = href.match(/(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
                const listMatch = href.match(/youtube\.com\/.*[?&]list=([a-zA-Z0-9_-]+)/);

                if (ytMatch) {
                  embedUrl = `https://www.youtube.com/embed/${ytMatch[1]}${listMatch ? `?list=${listMatch[1]}` : ''}`;
                } else if (listMatch) {
                  embedUrl = `https://www.youtube.com/embed/videoseries?list=${listMatch[1]}`;
                }

                // If children is an image (thumbnail preview) or link text asking to play video
                const isEmbedLink = href.includes('youtube.com') || href.includes('youtu.be');

                if (embedUrl && isEmbedLink) {
                  return (
                    <span className="block my-6 space-y-2">
                      <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-line bg-surface shadow-md">
                        <iframe
                          src={embedUrl}
                          title={typeof children === 'string' ? children : 'YouTube video player'}
                          className="absolute top-0 left-0 w-full h-full border-0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                        />
                      </div>
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block text-xs font-medium text-accent hover:underline"
                        {...props}
                      >
                        Open on YouTube ↗
                      </a>
                    </span>
                  );
                }
              }

              return (
                <a
                  href={href}
                  target={href?.startsWith('http') ? '_blank' : undefined}
                  rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="text-accent hover:underline font-medium"
                  {...props}
                >
                  {children}
                </a>
              );
            },
            p: ({ children, ...props }) => (
              <p className="text-text-body text-base leading-relaxed mb-6" {...props}>
                {children}
              </p>
            ),
            li: ({ children, ...props }) => (
              <li className="text-text-body leading-relaxed" {...props}>
                {children}
              </li>
            )
          }}
        >
          {post.content}
        </ReactMarkdown>
      </div>
    </article>
  );
};

export default ResearchDetailPage;
