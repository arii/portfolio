import React, { useState, useMemo } from 'react';
import { getAllResearchPosts } from '@/data/research';
import ResearchCard from '@/components/ResearchCard';

export interface ResearchListPageProps {
  onNavigate: (slug: string) => void;
}

const ResearchListPage: React.FC<ResearchListPageProps> = ({ onNavigate }) => {
  const posts = useMemo(() => getAllResearchPosts(), []);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const allTags = useMemo(() => {
    const tags = new Set<string>();
    posts.forEach((p) => p.tags.forEach((t) => tags.add(t)));
    return Array.from(tags);
  }, [posts]);

  const filteredPosts = useMemo(() => {
    if (!selectedTag) return posts;
    return posts.filter((p) => p.tags.includes(selectedTag));
  }, [posts, selectedTag]);

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
          DevAI & Technical Research
        </h1>
        <p className="mt-4 text-lg text-slate-400">
          Autonomous systems, robotics software architecture, and developer workflow automation.
        </p>
      </header>

      {/* Filter Bar */}
      <div className="mb-8 flex flex-wrap items-center justify-center gap-2">
        <button
          onClick={() => setSelectedTag(null)}
          className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
            selectedTag === null
              ? 'bg-brand-green text-black font-bold'
              : 'bg-brand-bg-surface/30 border border-slate-800 text-slate-400 hover:text-brand-green'
          }`}
        >
          All Topics
        </button>
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setSelectedTag(tag)}
            className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
              selectedTag === tag
                ? 'bg-brand-green text-black font-bold'
                : 'bg-brand-bg-surface/30 border border-slate-800 text-slate-400 hover:text-brand-green'
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredPosts.map((post) => (
          <ResearchCard key={post.slug} post={post} onSelect={onNavigate} />
        ))}
      </div>
    </div>
  );
};

export default ResearchListPage;
