import React, { useState, useMemo } from 'react';
import { getAllResearchPosts, RESEARCH_TOOLS } from '@/data/research';
import ResearchCard from '@/components/ResearchCard';
import { FlagshipProjects } from '@/components/portfolio/FlagshipProjects';
import { WorkWithMeSection } from '@/components/portfolio/WorkWithMeSection';
import { Layers, X } from 'lucide-react';

export interface ResearchListPageProps {
  onNavigate: (slug: string) => void;
}

const ResearchListPage: React.FC<ResearchListPageProps> = ({ onNavigate }) => {
  const posts = useMemo(() => {
    const allPosts = getAllResearchPosts();
    return Array.from(
      new Map(allPosts.map((post) => [post.slug || post.title, post])).values()
    );
  }, []);

  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const allTags = useMemo(() => {
    const tags = new Set<string>();
    posts.forEach((p) => p.tags.forEach((t) => tags.add(t)));
    return Array.from(tags);
  }, [posts]);

  const filteredPosts = useMemo(() => {
    if (!selectedTag) return posts;
    return posts.filter((p) => p.tags.includes(selectedTag));
  }, [posts, selectedTag]);

  const flagshipTools = useMemo(() => RESEARCH_TOOLS.filter((t) => t.isFlagship), []);

  return (
    <div className="space-y-16">
      {/* Page Title Header */}
      <header className="space-y-4 max-w-3xl border-b border-line/20 pb-8">
        <div className="inline-flex items-center space-x-2 bg-accent/10 border border-accent/20 px-3 py-1 rounded-full text-xs text-accent font-semibold uppercase tracking-wider">
          <span>DevAI &amp; Research</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-text-main leading-none">
          DevAI &amp; Technical Research
        </h1>
        <p className="text-text-dim max-w-2xl text-base leading-relaxed">
          Autonomous systems, robotics software architecture, and developer workflow automation. Migrated directly from the <span className="text-accent font-semibold">arii/tech-dancer</span> stack.
        </p>
      </header>

      {/* Flagship Projects Section */}
      <FlagshipProjects
        flagshipTools={flagshipTools}
        onNavigate={onNavigate}
        onImageClick={setLightboxImage}
      />

      {/* Why This Matters Banner */}
      <section className="border border-accent/20 bg-accent/5 rounded-3xl p-8 space-y-3">
        <h3 className="text-lg font-bold text-text-main flex items-center space-x-2">
          <Layers className="h-5 w-5 text-accent" />
          <span>Why this matters</span>
        </h3>
        <p className="text-text-dim leading-relaxed text-sm max-w-3xl font-sans">
          Shipping high-fidelity autonomous systems and developer workflows requires <span className="text-accent font-bold">practical AI orchestration</span>, not hype. I focus on engineering deterministic state-verification feedback loops and isolated execution boundaries to scale robotics and development teams with absolute safety.
        </p>
      </section>

      {/* Articles & Research Studies (Single Browse Mechanism) */}
      <section className="space-y-8" id="articles">
        <div className="border-b border-line pb-3 flex items-center justify-between">
          <h2 className="text-xl md:text-2xl font-bold text-text-main flex items-center space-x-2 font-display">
            <Layers className="h-5 w-5 text-accent" />
            <span>Articles &amp; Research Studies</span>
          </h2>
          <span className="text-xs text-text-dim uppercase tracking-widest">{posts.length} Studies</span>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center justify-start gap-2">
          <button
            onClick={() => setSelectedTag(null)}
            className={`rounded-xl border px-4 py-2 text-xs font-semibold transition-all cursor-pointer ${
              selectedTag === null
                ? 'bg-accent/10 border-accent/30 text-accent shadow-sm'
                : 'bg-surface border-line text-text-dim hover:text-text-main hover:border-slate-700'
            }`}
          >
            All Topics
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`rounded-xl border px-4 py-2 text-xs font-semibold transition-all cursor-pointer ${
                selectedTag === tag
                  ? 'bg-accent/10 border-accent/30 text-accent shadow-sm'
                  : 'bg-surface border-line text-text-dim hover:text-text-main hover:border-slate-700'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Single Tag-Filtered Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post) => (
            <ResearchCard key={post.slug} post={post} onSelect={onNavigate} />
          ))}
        </div>
      </section>

      {/* Work With Me Block */}
      <WorkWithMeSection />

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 cursor-zoom-out p-4 backdrop-blur-sm"
          onClick={() => setLightboxImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-accent p-2 transition-colors focus:outline-none cursor-pointer"
            onClick={() => setLightboxImage(null)}
          >
            <X className="h-8 w-8" />
          </button>
          <img
            src={lightboxImage}
            alt="Enlarged screenshot preview"
            className="max-w-full max-h-[90vh] object-contain rounded-3xl border border-line shadow-2xl"
          />
        </div>
      )}
    </div>
  );
};

export default ResearchListPage;
