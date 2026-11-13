import React, { useState, useMemo, useEffect } from 'react';
import { getAllResearchPosts } from '@/data/research';
import { DEVAI_FLAGSHIPS } from '@/data/devai-projects';
import ResearchCard from '@/components/ResearchCard';
import { Layers, Filter } from 'lucide-react';
import SEO from '@/components/SEO';
import {
  getPersonAndProfileSchema,
  getServiceSchema,
  getSoftwareSchema,
  getCollectionPageSchema,
} from '@/utils/schema';

export interface DevAIListPageProps {
  onNavigate: (slug: string) => void;
}

const DevAIListPage: React.FC<DevAIListPageProps> = ({ onNavigate }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

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

  // Product URLs stay discoverable here and in the deep-dive article headers
  // (ResearchDetailPage renders matchingTool external/source links); the
  // standalone product-card grid was removed as a duplicate surface.
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

  const filterCategories = useMemo(
    () => Array.from(new Set(filteredPosts.map((p) => p.category || '').filter(Boolean))).sort(),
    [filteredPosts]
  );

  const visiblePosts = useMemo(
    () => (activeCategory === 'All' ? filteredPosts : filteredPosts.filter((p) => (p.category || '') === activeCategory)),
    [filteredPosts, activeCategory]
  );

  const devAiSchemas = useMemo(() => {
    const softwareSchemas = flagshipTools.map((tool) =>
      getSoftwareSchema({
        name: tool.title,
        description: tool.description,
        url: tool.canonicalPath ? `https://arii.github.io${tool.canonicalPath}` : tool.externalUrl || `https://arii.github.io/devai/#${tool.id}`,
        codeRepository: tool.sourceUrl,
        programmingLanguage: tool.programmingLanguage || tool.tags,
        applicationCategory: tool.applicationCategory || 'DeveloperApplication',
      })
    );

    const collectionItems = [
      ...flagshipTools.map((t) => ({
        name: t.title,
        description: t.description,
        url: t.canonicalPath || t.externalUrl || `https://arii.github.io/devai/#${t.id}`,
        image: t.image,
      })),
      ...filteredPosts.map((p) => ({
        name: p.title,
        description: p.summary,
        url: `/devai/${p.slug}`,
      })),
    ];

    const collectionSchema = getCollectionPageSchema({
      name: 'DevAI & Agentic Automation Systems',
      description: 'System architectures, agentic CI/CD pipelines, autonomous developer tooling, and shipped production applications.',
      canonicalPath: '/devai',
      items: collectionItems,
    });

    return [getPersonAndProfileSchema('/devai'), getServiceSchema(), collectionSchema, ...softwareSchemas];
  }, [flagshipTools, filteredPosts]);

  return (
    <div className="space-y-12 sm:space-y-16">
      <SEO
        title="DevAI & Agentic Automation"
        description="Explore agentic DevAI tools, multi-agent CI/CD workflows, and developer automation software engineered by Ariel Anders, PhD (MIT CSAIL)."
        canonicalUrl="/devai/"
        ogImage="/assets/research/boomtick-devai-tools/boomtick-arch.webp"
        jsonLd={devAiSchemas}
      />

      <header className="space-y-3 border-b border-line/20 pb-6 sm:pb-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-text-main leading-tight">DevAI &amp; Software Systems</h1>
        <p className="text-text-dim text-sm sm:text-base leading-relaxed">System architectures, agentic CI/CD pipelines, autonomous developer tooling, and shipped production applications.</p>
      </header>

      <section className="space-y-8" id="articles">
        <div className="border-b border-line pb-3 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
          <div className="space-y-1">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-text-main flex items-center space-x-2 font-display">
              <Layers className="h-5 w-5 text-accent" />
              <span>Engineering Deep-Dives</span>
            </h2>
            <p className="text-xs sm:text-sm text-text-dim">
              How I build: multi-agent workflows, automated code-auditing guardrails, and agentic CI/CD pipelines that enforce production standards.
            </p>
          </div>
          <span className="text-sm font-semibold text-text-dim shrink-0">{visiblePosts.length} Articles</span>
        </div>

        <div className="flex flex-wrap items-center gap-2" role="group" aria-label="Filter articles by category">
          <Filter className="h-4 w-4 text-text-dim" aria-hidden="true" />
          {['All', ...filterCategories].map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                aria-pressed={isActive}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-colors cursor-pointer ${
                  isActive
                    ? 'bg-accent/15 border-accent/40 text-accent'
                    : 'bg-surface border-line text-text-dim hover:text-text-main hover:border-accent/30'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visiblePosts.map((post) => (<ResearchCard key={post.slug} post={post} onSelect={onNavigate} />))}
        </div>
      </section>
    </div>
  );
};

export default DevAIListPage;
