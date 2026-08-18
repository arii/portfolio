import React, { useState, useMemo } from 'react';
import { getAllResearchPosts, RESEARCH_TOOLS } from '@/data/research';
import { ACADEMIC_PAPERS } from '@/data/academicResearch';
import ResearchCard from '@/components/ResearchCard';
import FlagshipCard from '@/components/FlagshipCard';
import AcademicCard from '@/components/AcademicCard';
import { Layers, X, BookOpen } from 'lucide-react';

export interface ResearchListPageProps {
  onNavigate: (slug: string) => void;
}

export const PRIMARY_TAGS = ['All Topics', 'DevAI & Agents', 'CI/CD & Testing', 'Data Pipelines & ETL', 'Robotics & Autonomy'] as const;
export type PrimaryTag = (typeof PRIMARY_TAGS)[number];

const ResearchListPage: React.FC<ResearchListPageProps> = ({ onNavigate }) => {
  const [selectedTag, setSelectedTag] = useState<PrimaryTag>('All Topics');
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const posts = useMemo(() => Array.from(new Map(getAllResearchPosts().map((p) => [p.slug || p.title, p])).values()), []);
  const flagshipTools = useMemo(() => RESEARCH_TOOLS.filter((t) => t.isFlagship), []);

  const filteredPosts = useMemo(() => {
    if (selectedTag === 'All Topics') return posts;
    return posts.filter((p) => {
      const tags = p.tags.map((t) => t.toLowerCase());
      const cat = (p.category || '').toLowerCase();
      if (selectedTag === 'DevAI & Agents') return tags.some((t) => ['devai', 'ai', 'llm', 'multi-agent', 'agentic workflows', 'productivity', 'agents'].includes(t)) || cat.includes('devai');
      if (selectedTag === 'CI/CD & Testing') return tags.some((t) => ['ci/cd', 'ci', 'github actions', 'playwright', 'pixelmatch', 'screenshot diff', 'automation', 'devops'].includes(t));
      if (selectedTag === 'Data Pipelines & ETL') return tags.some((t) => ['etl', 'apache parquet', 'scraping', 'data pipelines', 'python', 'data engineering'].includes(t)) || cat.includes('data engineering');
      if (selectedTag === 'Robotics & Autonomy') return tags.some((t) => ['robotics', 'manipulation', 'autonomy', 'ros'].includes(t)) || cat.includes('robotics');
      return true;
    });
  }, [posts, selectedTag]);


  return (
    <div className="space-y-16">
      <header className="space-y-4 max-w-3xl border-b border-line/20 pb-8">
        <div className="inline-flex items-center space-x-2 bg-accent/10 border border-accent/20 px-3 py-1 rounded-full text-xs text-accent font-semibold uppercase tracking-wider">
          <span>DevAI &amp; Research</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-text-main leading-none">DevAI &amp; Technical Research</h1>
        <p className="text-text-dim max-w-2xl text-base leading-relaxed">System architectures, agentic CI/CD pipelines, and robotics research studies.</p>
      </header>

      <section className="space-y-8" id="flagship">
        <div className="border-b border-line pb-3 flex items-center justify-between">
          <h2 className="text-xl md:text-2xl font-bold text-text-main flex items-center space-x-2"><Layers className="h-5 w-5 text-accent" /><span>Flagship Systems &amp; Projects</span></h2>
          <span className="text-xs text-text-dim uppercase tracking-widest">CASE STUDIES</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {flagshipTools.map((tool) => (<FlagshipCard key={tool.id} tool={tool} onNavigate={onNavigate} onImageClick={setLightboxImage} />))}
        </div>
      </section>

      <section className="border border-accent/20 bg-accent/5 rounded-3xl p-8 space-y-3">
        <h3 className="text-lg font-bold text-text-main flex items-center space-x-2"><Layers className="h-5 w-5 text-accent" /><span>Why this matters</span></h3>
        <p className="text-text-dim leading-relaxed text-sm max-w-3xl font-sans">
          Shipping high-fidelity autonomous systems and developer workflows requires <span className="text-accent font-bold">practical AI orchestration</span>, not hype. I focus on engineering deterministic state-verification feedback loops and isolated execution boundaries to scale robotics and development teams with absolute safety.
        </p>
      </section>

      <section className="space-y-8" id="articles">
        <div className="border-b border-line pb-3 flex items-center justify-between">
          <h2 className="text-xl md:text-2xl font-bold text-text-main flex items-center space-x-2 font-display"><Layers className="h-5 w-5 text-accent" /><span>Technical Articles &amp; Deep Dives</span></h2>
          <span className="text-xs text-text-dim uppercase tracking-widest">{filteredPosts.length} Articles</span>
        </div>

        <div className="flex flex-wrap items-center justify-start gap-2">
          {PRIMARY_TAGS.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`rounded-xl border px-4 py-2 text-xs font-semibold transition-all ${
                selectedTag === tag ? 'bg-accent/10 border-accent/30 text-accent shadow-sm' : 'bg-surface border-line text-text-dim hover:text-text-main hover:border-slate-700'
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

      <section className="space-y-8" id="academic">
        <div className="border-b border-line pb-3 flex items-center justify-between">
          <h2 className="text-xl md:text-2xl font-bold text-text-main flex items-center space-x-2 font-display"><BookOpen className="h-5 w-5 text-accent" /><span>Academic &amp; Foundational Robotics Research</span></h2>
          <span className="text-xs text-text-dim uppercase tracking-widest">MIT CSAIL &amp; IEEE</span>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {ACADEMIC_PAPERS.map((paper) => (<AcademicCard key={paper.id} paper={paper} />))}
        </div>
      </section>

      {lightboxImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 cursor-zoom-out p-4 backdrop-blur-sm" onClick={() => setLightboxImage(null)}>
          <button className="absolute top-4 right-4 text-white hover:text-accent p-2 transition-colors focus:outline-none" onClick={() => setLightboxImage(null)}>
            <X className="h-8 w-8" />
          </button>
          <img src={lightboxImage} alt="Enlarged screenshot preview" className="max-w-full max-h-[90vh] object-contain rounded-3xl border border-line shadow-2xl" />
        </div>
      )}
    </div>
  );
};

export default ResearchListPage;
