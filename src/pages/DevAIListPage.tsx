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

const DevAIListPage: React.FC<DevAIListPageProps> = ({ onNavigate }) => {
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
    const researchOnlySlugs = [
      'leac-monitoring-software',
      'light-therapy-mit',
      'boop-light-detector',
      'delivery-bots',
      'bwsi-racecar',
      'report-6375-rsa',
      'report-ml-lis',
      'report-ce118-mechatronics',
      'graduate-engineering-projects',
      'autonomous-drone-line-following'
    ];
    return posts.filter((p) => {
      if (researchOnlySlugs.includes(p.slug)) return false;
      const cat = (p.category || '').toLowerCase();
      return !cat.includes('robotics'); // exclude robotics
    });
  }, [posts]);

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

      <section className="space-y-8" id="articles">
        <div className="border-b border-line pb-3 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
          <div className="space-y-1">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-text-main flex items-center space-x-2 font-display">
              <Layers className="h-5 w-5 text-accent" />
              <span>Engineering Deep-Dives</span>
            </h2>
            <p className="text-xs sm:text-sm text-text-dim">
              How I build: Engineering multi-agent workflows, automated code-auditing guardrails, and agentic CI/CD pipelines to enforce production standards.
            </p>
          </div>
          <span className="text-xs text-text-dim uppercase tracking-widest shrink-0">{filteredPosts.length} Articles</span>
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
