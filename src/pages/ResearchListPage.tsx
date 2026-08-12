import React, { useState, useMemo } from 'react';
import { getAllResearchPosts } from '@/data/research';
import ResearchCard from '@/components/ResearchCard';
import { ShieldCheck, Cpu, HardDrive } from 'lucide-react';

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
    <div className="mx-auto max-w-6xl px-4 py-8 space-y-10">
      {/* DevAI Diagnostic Header Bar */}
      <div className="bg-brand-bg-darker border border-slate-900 rounded-lg p-4 flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-slate-500">
        <div className="flex items-center space-x-3">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-green"></span>
          </span>
          <span className="text-slate-300">CONSOLE STATE: ONLINE</span>
        </div>
        <div className="flex items-center space-x-6">
          <span className="hidden sm:flex items-center space-x-1.5">
            <Cpu className="h-3.5 w-3.5 text-brand-green" />
            <span>SYS_CPU: 12.4%</span>
          </span>
          <span className="hidden sm:flex items-center space-x-1.5">
            <HardDrive className="h-3.5 w-3.5 text-brand-cyan-light" />
            <span>MEM: 4.12 / 16 GB</span>
          </span>
          <span className="flex items-center space-x-1.5">
            <ShieldCheck className="h-3.5 w-3.5 text-brand-accent" />
            <span>SECURE SHELL</span>
          </span>
        </div>
      </div>

      <header className="text-center space-y-4">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white font-mono flex items-center justify-center space-x-2">
          <span className="text-brand-green">&gt;</span>
          <span>DevAI & Technical Research</span>
        </h1>
        <p className="mt-4 text-base text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Autonomous systems, robotics software architecture, and developer workflow automation. Migrated directly from the boomtick & tech-dancer stacks.
        </p>
      </header>

      {/* Retro Command Filters Bar */}
      <div className="flex flex-wrap items-center justify-center gap-2 font-mono">
        <button
          onClick={() => setSelectedTag(null)}
          className={`rounded border px-4 py-1.5 text-xs font-semibold transition-all ${
            selectedTag === null
              ? 'bg-brand-green/20 border-brand-green text-brand-green-light shadow-[0_0_8px_rgba(34,197,94,0.15)]'
              : 'bg-brand-bg-darker border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
          }`}
        >
          $ ls -all
        </button>
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setSelectedTag(tag)}
            className={`rounded border px-4 py-1.5 text-xs font-semibold transition-all ${
              selectedTag === tag
                ? 'bg-brand-green/20 border-brand-green text-brand-green-light shadow-[0_0_8px_rgba(34,197,94,0.15)]'
                : 'bg-brand-bg-darker border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
            }`}
          >
            $ grep "{tag.toLowerCase()}"
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
