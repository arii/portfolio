import React, { useState, useMemo } from 'react';
import { getAllResearchPosts, RESEARCH_TOOLS } from '@/data/research';
import ResearchCard from '@/components/ResearchCard';
import { Cpu, Layers, ExternalLink, X, ArrowRight } from 'lucide-react';

export interface ResearchListPageProps {
  onNavigate: (slug: string) => void;
}

const ResearchListPage: React.FC<ResearchListPageProps> = ({ onNavigate }) => {
  const posts = useMemo(() => getAllResearchPosts(), []);
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

  // Group tools by taxonomy bucket
  const productTools = useMemo(() => RESEARCH_TOOLS.filter(t => t.taxonomyBucket === 'product'), []);
  const infrastructureTools = useMemo(() => RESEARCH_TOOLS.filter(t => t.taxonomyBucket === 'infrastructure'), []);

  const handleImageClick = (src: string) => {
    setLightboxImage(src);
  };

  return (
    <div className="space-y-16">
      {/* Page Title */}
      <header className="space-y-4 max-w-3xl border-b border-border/60 pb-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-foreground leading-none">
          Portfolio &amp; Research
        </h1>
        <p className="text-muted-foreground max-w-2xl text-base leading-relaxed">
          A showcase of products I've shipped, the infrastructure that powers them, and technical deep-dives into autonomous systems, DevAI, and agentic workflows.
        </p>
      </header>

      {/* Products I've Shipped Section */}
      <section className="space-y-8" id="products">
        <div className="border-b border-border pb-3 flex items-center justify-between">
          <h2 className="text-xl md:text-2xl font-bold text-foreground flex items-center space-x-2">
            <Layers className="h-5 w-5 text-primary" />
            <span>Products I've Shipped</span>
          </h2>
          <span className="text-xs text-muted-foreground uppercase tracking-widest">End-to-End</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {productTools.map((tool) => {
            const imageSrc = tool.id === 'hrm-flagship' ? 'assets/research/hrm-flagship.png' : tool.id === 'repo-auditor-ai' ? 'assets/research/repo-auditor-ai.png' : null;

            return (
              <div
                key={tool.id}
                className="rounded-xl border border-border bg-card flex flex-col justify-between overflow-hidden transition-all hover:border-primary/50 hover:shadow-md"
              >
                {/* Custom Preview or Image */}
                {tool.customPreview ? (
                  <div className="p-6 bg-secondary/30 border-b border-border min-h-[140px] flex flex-col justify-center space-y-2">
                    <div className="text-primary font-bold text-sm tracking-wider">
                      {tool.customPreview.logo.prefix}
                      <span className="text-foreground">{tool.customPreview.logo.accent}</span>
                      <span className="text-muted-foreground font-light">{tool.customPreview.logo.suffix}</span>
                    </div>
                    <div className="text-foreground font-bold text-lg leading-tight">
                      {tool.customPreview.headline.map((line, idx) => (
                        <span key={idx} className={line.accent ? "text-primary" : ""}>{line.text} </span>
                      ))}
                    </div>
                    <div className="text-xs text-muted-foreground">{tool.customPreview.tagline}</div>
                  </div>
                ) : imageSrc ? (
                  <div
                    onClick={() => handleImageClick(imageSrc)}
                    className="relative aspect-[16/10] overflow-hidden bg-secondary/30 border-b border-border cursor-zoom-in group"
                  >
                    <img
                      src={imageSrc}
                      alt={tool.imageAlt || tool.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                ) : null}

                <div className="p-5 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-foreground leading-tight">
                      {tool.title}
                    </h3>
                  </div>

                  {tool.subtitle && (
                    <div className="text-xs font-semibold text-primary mb-3 tracking-wide uppercase">
                      {tool.subtitle}
                    </div>
                  )}

                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-grow">
                    {tool.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-border">
                    {tool.externalUrl && (
                      <a
                        href={tool.externalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-1.5 text-xs font-medium text-primary hover:underline"
                      >
                        <ExternalLink className="h-3.5 w-3.5" />
                        <span>{tool.externalLinkDisplayLabel || 'Visit Site'}</span>
                      </a>
                    )}
                    {tool.sourceUrl && (
                      <a
                        href={tool.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-1.5 text-xs font-medium text-muted-foreground hover:text-foreground hover:underline"
                      >
                        <span>View Source</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Engineering Infrastructure Section */}
      <section className="space-y-8" id="infrastructure">
        <div className="border-b border-border pb-3 flex items-center justify-between">
          <h2 className="text-xl md:text-2xl font-bold text-foreground flex items-center space-x-2">
            <Cpu className="h-5 w-5 text-primary" />
            <span>Engineering Infrastructure</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {infrastructureTools.map((tool) => (
            <div key={tool.id} className="rounded-xl border border-border bg-card p-6 flex flex-col justify-between transition-all hover:border-primary/50 hover:shadow-md">
              <div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold text-foreground leading-tight">
                    {tool.title}
                  </h3>
                </div>
                {tool.subtitle && (
                  <div className="text-xs font-semibold text-primary mb-3 tracking-wide uppercase">
                    {tool.subtitle}
                  </div>
                )}
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {tool.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-border">
                {tool.canonicalPath && (
                  <button
                    onClick={() => onNavigate(tool.canonicalPath?.replace('/research/', '') || '')}
                    className="inline-flex items-center space-x-1.5 text-xs font-medium text-primary hover:underline"
                  >
                    <span>Read Details</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                )}
                {tool.sourceUrl && (
                  <a
                    href={tool.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 text-xs font-medium text-muted-foreground hover:text-foreground hover:underline"
                  >
                    <span>View Source</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Articles & Research Studies Section */}
      <section className="space-y-8" id="articles">
        <div className="border-b border-border pb-3 flex items-center justify-between">
          <h2 className="text-xl md:text-2xl font-bold text-foreground flex items-center space-x-2">
            <Layers className="h-5 w-5 text-primary" />
            <span>Articles &amp; Research Studies</span>
          </h2>
          <span className="text-xs text-muted-foreground uppercase tracking-widest">{posts.length} Studies</span>
        </div>

        {/* Clean Filtering Bar */}
        <div className="flex flex-wrap items-center justify-start gap-2">
          <button
            onClick={() => setSelectedTag(null)}
            className={`rounded-lg border px-3 py-1.5 text-xs font-medium transition-all ${
              selectedTag === null
                ? 'bg-secondary border-border text-foreground'
                : 'bg-transparent border-transparent text-muted-foreground hover:bg-muted hover:text-foreground'
            }`}
          >
            All Topics
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`rounded-lg border px-3 py-1.5 text-xs font-medium transition-all ${
                selectedTag === tag
                  ? 'bg-secondary border-border text-foreground'
                  : 'bg-transparent border-transparent text-muted-foreground hover:bg-muted hover:text-foreground'
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
      </section>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 cursor-zoom-out p-4 backdrop-blur-sm"
          onClick={() => setLightboxImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-foreground hover:text-primary p-2 transition-colors focus:outline-none"
            onClick={() => setLightboxImage(null)}
          >
            <X className="h-8 w-8" />
          </button>
          <img
            src={lightboxImage}
            alt="Enlarged screenshot preview"
            className="max-w-full max-h-[90vh] object-contain rounded-xl border border-border shadow-lg"
          />
        </div>
      )}
    </div>
  );
};

export default ResearchListPage;
