import React, { useState, useMemo, useEffect } from 'react';
import { getAllResearchPosts } from '@/data/research';
import { DEVAI_FLAGSHIPS } from '@/data/devai-projects';
import ResearchCard from '@/components/ResearchCard';
import FlagshipCard from '@/components/FlagshipCard';
import ImageLightbox from '@/components/ImageLightbox';
import { Layers } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export interface DevAIListPageProps {
  onNavigate: (slug: string) => void;
}

export const PRIMARY_TAGS = ['All Topics', 'DevAI & Agents', 'CI/CD & Testing', 'Data Pipelines & ETL'] as const;
export type PrimaryTag = (typeof PRIMARY_TAGS)[number];

const DevAIListPage: React.FC<DevAIListPageProps> = ({ onNavigate }) => {
  const [selectedTag, setSelectedTag] = useState<PrimaryTag>('All Topics');
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  useEffect(() => {
    const handleHashScroll = () => {
      const hash = window.location.hash;
      const lastHashIndex = hash.lastIndexOf('#');
      if (lastHashIndex > 0) {
        const id = hash.substring(lastHashIndex + 1);
        const el = document.getElementById(id);
        if (el) {
          const timer = setTimeout(() => {
            el.scrollIntoView({ behavior: 'smooth' });
          }, 100);
          return () => clearTimeout(timer);
        }
      }
    };

    handleHashScroll();
    window.addEventListener('hashchange', handleHashScroll);
    return () => window.removeEventListener('hashchange', handleHashScroll);
  }, []);

  const posts = useMemo(() => Array.from(new Map(getAllResearchPosts().map((p) => [p.slug || p.title, p])).values()), []);
  const flagshipTools = useMemo(() => DEVAI_FLAGSHIPS, []);

  const filteredPosts = useMemo(() => {
    const researchOnlySlugs = ['leac-monitoring-software', 'light-therapy-mit', 'boop-light-detector'];
    const devAiPosts = posts.filter((p) => !researchOnlySlugs.includes(p.slug));

    if (selectedTag === 'All Topics') return devAiPosts.filter((p) => {
        const cat = (p.category || '').toLowerCase();
        return !cat.includes('robotics'); // exclude robotics
    });
    return devAiPosts.filter((p) => {
      const tags = p.tags.map((t) => t.toLowerCase());
      const cat = (p.category || '').toLowerCase();
      if (cat.includes('robotics')) return false;

      if (selectedTag === 'DevAI & Agents') return tags.some((t) => ['devai', 'ai', 'llm', 'multi-agent', 'agentic workflows', 'productivity', 'agents'].includes(t)) || cat.includes('devai');
      if (selectedTag === 'CI/CD & Testing') return tags.some((t) => ['ci/cd', 'ci', 'github actions', 'playwright', 'pixelmatch', 'screenshot diff', 'automation', 'devops'].includes(t));
      if (selectedTag === 'Data Pipelines & ETL') return tags.some((t) => ['etl', 'apache parquet', 'scraping', 'data pipelines', 'python', 'data engineering'].includes(t)) || cat.includes('data engineering');
      return true;
    });
  }, [posts, selectedTag]);

  return (
    <div className="space-y-12 sm:space-y-16">
      <Helmet>
        <title>DevAI &amp; Software Systems | Ariel Anders</title>
        <meta name="description" content="System architectures, agentic CI/CD pipelines, autonomous developer tooling, and shipped production applications." />
        <meta property="og:title" content="DevAI &amp; Software Systems | Ariel Anders" />
        <meta property="og:description" content="System architectures, agentic CI/CD pipelines, autonomous developer tooling, and shipped production applications." />
      </Helmet>

      <header className="space-y-3 border-b border-line/20 pb-6 sm:pb-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-text-main leading-tight">DevAI &amp; Software Systems</h1>
        <p className="text-text-dim text-sm sm:text-base leading-relaxed">System architectures, agentic CI/CD pipelines, autonomous developer tooling, and shipped production applications.</p>
      </header>

      <section className="space-y-8" id="flagship">
        <div className="border-b border-line pb-3 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
          <div className="space-y-1">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-text-main flex items-center space-x-2">
              <Layers className="h-5 w-5 text-accent" />
              <span>Products built with DevAI</span>
            </h2>
            <p className="text-xs sm:text-sm text-text-dim">
              Live full-stack consumer apps and platforms built with autonomous agent workflows.
            </p>
          </div>
          <span className="text-xs text-text-dim uppercase tracking-widest shrink-0">View Products</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {flagshipTools.map((tool) => (<FlagshipCard key={tool.id} tool={tool} onNavigate={onNavigate} onImageClick={setLightboxImage} />))}
        </div>
      </section>

      <section className="border border-accent/20 bg-accent/5 rounded-3xl p-6 sm:p-8 space-y-3">
        <h3 className="text-base sm:text-lg font-bold text-text-main flex items-center space-x-2"><Layers className="h-5 w-5 text-accent" /><span>Why this matters</span></h3>
        <p className="text-text-dim leading-relaxed text-sm max-w-3xl font-sans">
          Shipping high-fidelity autonomous systems and developer workflows requires <span className="text-accent font-bold">practical AI orchestration</span>, not hype. I focus on engineering deterministic state-verification feedback loops and isolated execution boundaries to scale development teams with absolute safety.
        </p>
      </section>

      <section className="space-y-8" id="articles">
        <div className="border-b border-line pb-3 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
          <div className="space-y-1">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-text-main flex items-center space-x-2 font-display">
              <Layers className="h-5 w-5 text-accent" />
              <span>DevAI Orchestration</span>
            </h2>
            <p className="text-xs sm:text-sm text-text-dim">
              How I build: Engineering multi-agent workflows, automated code-auditing guardrails, and agentic CI/CD pipelines to enforce production standards.
            </p>
          </div>
          <span className="text-xs text-text-dim uppercase tracking-widest shrink-0">{filteredPosts.length} Articles</span>
        </div>

        {/* Full-width segmented filter control */}
        <div className="flex flex-wrap items-center justify-start gap-2 bg-surface p-1.5 rounded-2xl border border-line">
          {PRIMARY_TAGS.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`flex-1 min-w-[140px] rounded-xl px-4 py-2.5 text-xs sm:text-sm font-semibold transition-all cursor-pointer min-h-[44px] flex items-center justify-center text-center ${
                selectedTag === tag ? 'bg-accent/15 border border-accent/30 text-accent shadow-sm' : 'bg-transparent text-text-dim hover:text-text-main hover:bg-surface-alt'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post) => (<ResearchCard key={post.slug} post={post} onSelect={onNavigate} />))}
        </div>
      </section>

      <ImageLightbox imageSrc={lightboxImage} onClose={() => setLightboxImage(null)} />
    </div>
  );
};

export default DevAIListPage;
