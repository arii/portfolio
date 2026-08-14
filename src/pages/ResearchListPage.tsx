import React, { useState, useMemo } from 'react';
import { getAllResearchPosts, RESEARCH_TOOLS } from '@/data/research';
import ResearchCard from '@/components/ResearchCard';
import ToolCard from '@/components/ToolCard';
import { Cpu, Layers, ExternalLink, Activity, Server, FileText, ShoppingBag, X, FlaskConical, ArrowRight } from 'lucide-react';
import { ResearchTool } from '@/types/research';

// Secure and clean custom inline SVG for Github
const GithubIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

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
  const flagshipTools = useMemo(() => RESEARCH_TOOLS.filter(t => t.taxonomyBucket === 'flagship'), []);
  const engineeringTools = useMemo(() => RESEARCH_TOOLS.filter(t => t.taxonomyBucket === 'engineering'), []);
  const dataContentTools = useMemo(() => RESEARCH_TOOLS.filter(t => t.taxonomyBucket === 'data-content'), []);
  const ecommerceTools = useMemo(() => RESEARCH_TOOLS.filter(t => t.taxonomyBucket === 'e-commerce'), []);

  const getToolIcon = (tool: ResearchTool) => {
    if (tool.id.includes('hrm')) return Activity;
    if (tool.id.includes('scraper')) return Server;
    if (tool.id.includes('blog-drafter')) return FileText;
    if (tool.id.includes('ecommerce')) return ShoppingBag;
    return Cpu;
  };

  const handleImageClick = (src: string) => {
    setLightboxImage(src);
  };

  return (
    <div className="space-y-16">
      {/* Page Title */}
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
      <section className="space-y-8" id="flagship">
        <div className="border-b border-line pb-3 flex items-center justify-between">
          <h2 className="text-xl md:text-2xl font-bold text-text-main flex items-center space-x-2">
            <Layers className="h-5 w-5 text-accent" />
            <span>Flagship Projects</span>
          </h2>
          <span className="text-xs text-text-dim uppercase tracking-widest">CASE STUDIES</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {flagshipTools.map((tool) => {
            const ToolIcon = getToolIcon(tool);
            const imageSrc = tool.id === 'hrm-flagship' ? 'assets/research/hrm-flagship.png' : tool.id === 'repo-auditor-ai' ? 'assets/research/repo-auditor-ai.png' : null;

            return (
              <div
                key={tool.id}
                className="rounded-3xl border border-line bg-surface p-0 flex flex-col justify-between overflow-hidden transition-all hover:border-accent hover:shadow-glow"
              >
                {/* Custom Preview or Image */}
                {tool.customPreview ? (
                  <div className="p-6 bg-[#020617] border-b border-line min-h-[140px] flex flex-col justify-center space-y-2">
                    <div className="text-accent font-extrabold text-sm tracking-wider font-display">
                      {tool.customPreview.logo.prefix}
                      <span className="text-white">{tool.customPreview.logo.accent}</span>
                      <span className="text-slate-400 font-light">{tool.customPreview.logo.suffix}</span>
                    </div>
                    <div className="text-white font-black text-lg leading-tight font-display">
                      {tool.customPreview.headline.map((line, idx) => (
                        <span key={idx} className={line.accent ? "text-accent" : ""}>{line.text} </span>
                      ))}
                    </div>
                    <div className="text-xs text-text-dim">{tool.customPreview.tagline}</div>
                  </div>
                ) : imageSrc ? (
                  <div
                    onClick={() => handleImageClick(imageSrc)}
                    className="relative aspect-[16/10] overflow-hidden bg-[#020617] border-b border-line cursor-zoom-in group"
                  >
                    <img
                      src={imageSrc}
                      alt={tool.imageAlt || tool.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
                    />
                  </div>
                ) : null}

                {/* Body Content */}
                <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="h-10 w-10 rounded-2xl bg-accent/10 flex items-center justify-center border border-accent/20">
                        <ToolIcon className="h-5 w-5 text-accent" />
                      </div>
                      <span className="rounded-full bg-accent/10 px-2.5 py-0.5 text-[9px] font-semibold uppercase text-accent border border-accent/20">
                        {tool.id === 'boomtick-blog' ? 'Active dev' : 'Flagship'}
                      </span>
                    </div>
                    <div>
                      <span className="text-[10px] text-accent font-bold uppercase tracking-wider block font-sans">
                        {tool.category}
                      </span>
                      <h3 className="text-xl font-bold text-text-main mt-1 font-display">
                        {tool.title}
                      </h3>
                      {tool.subtitle && (
                        <p className="text-xs text-accent font-semibold tracking-wide mt-1 uppercase font-sans">
                          {tool.subtitle}
                        </p>
                      )}
                    </div>
                    <p className="text-sm text-text-dim leading-relaxed">
                      {tool.description}
                    </p>

                    {tool.inDevMessage && (
                      <div className="bg-[#0f172a] border border-line p-3 rounded-2xl text-xs flex gap-2 items-start text-text-dim">
                        <FlaskConical className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                        <p>
                          <strong className="text-text-main">{tool.inDevMessage.highlight}</strong> {tool.inDevMessage.rest}
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="space-y-4 pt-4 border-t border-line">
                    <div className="flex flex-wrap gap-1.5">
                      {tool.tags.map(tag => (
                        <span key={tag} className="px-2.5 py-0.5 rounded-full text-[10px] font-sans bg-[#0f172a] text-text-dim border border-line">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-3">
                      {tool.externalUrl ? (
                        <a
                          href={tool.externalUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-1.5 bg-accent/10 border border-accent/20 px-3 py-1.5 rounded-xl text-xs font-semibold text-accent hover:bg-accent/20 transition-colors"
                        >
                          <span>{tool.externalLinkDisplayLabel || 'Open Link'}</span>
                          <ExternalLink className="h-3.5 w-3.5" />
                        </a>
                      ) : tool.canonicalPath && (
                        <button
                          onClick={() => onNavigate(tool.id)}
                          className="inline-flex items-center space-x-1.5 bg-accent/10 border border-accent/20 px-3 py-1.5 rounded-xl text-xs font-semibold text-accent hover:bg-accent/20 transition-colors"
                        >
                          <span>Read Deep-Dive</span>
                          <ArrowRight className="h-3.5 w-3.5" />
                        </button>
                      )}
                      {tool.sourceUrl && (
                        <a
                          href={tool.sourceUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-1.5 bg-[#0f172a] border border-line px-3 py-1.5 rounded-xl text-xs font-semibold text-text-dim hover:bg-slate-900 hover:text-text-main transition-colors"
                        >
                          <span>Source Repo</span>
                          <GithubIcon className="h-3.5 w-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

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

      {/* Auxiliary Columns Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Engineering Systems */}
        <div className="space-y-4">
          <div className="border-b border-line pb-2">
            <h3 className="font-bold text-text-main text-base flex items-center space-x-2 font-display">
              <Cpu className="h-4 w-4 text-accent" />
              <span>Engineering Systems</span>
            </h3>
          </div>
          <div className="space-y-4">
            {engineeringTools.map(tool => (<ToolCard key={tool.id} tool={tool} onNavigate={onNavigate} />))}
          </div>
        </div>

        {/* Data & Content Systems */}
        <div className="space-y-4">
          <div className="border-b border-line pb-2">
            <h3 className="font-bold text-text-main text-base flex items-center space-x-2 font-display">
              <Activity className="h-4 w-4 text-accent" />
              <span>Data &amp; Content Systems</span>
            </h3>
          </div>
          <div className="space-y-4">
            {dataContentTools.map(tool => (<ToolCard key={tool.id} tool={tool} onNavigate={onNavigate} />))}
          </div>
        </div>

        {/* Ecommerce Experiments */}
        <div className="space-y-4">
          <div className="border-b border-line pb-2">
            <h3 className="font-bold text-text-main text-base flex items-center space-x-2 font-display">
              <ShoppingBag className="h-4 w-4 text-accent" />
              <span>Ecommerce Experiments</span>
            </h3>
          </div>
          <div className="space-y-4">
            {ecommerceTools.map(tool => (<ToolCard key={tool.id} tool={tool} onNavigate={onNavigate} />))}
          </div>
        </div>
      </section>

      {/* Articles & Research Studies Section */}
      <section className="space-y-8" id="articles">
        <div className="border-b border-line pb-3 flex items-center justify-between">
          <h2 className="text-xl md:text-2xl font-bold text-text-main flex items-center space-x-2 font-display">
            <Layers className="h-5 w-5 text-accent" />
            <span>Articles &amp; Research Studies</span>
          </h2>
          <span className="text-xs text-text-dim uppercase tracking-widest">{posts.length} Studies</span>
        </div>

        {/* Clean, Non-terminal Filtering Bar */}
        <div className="flex flex-wrap items-center justify-start gap-2">
          <button
            onClick={() => setSelectedTag(null)}
            className={`rounded-xl border px-4 py-2 text-xs font-semibold transition-all ${
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
              className={`rounded-xl border px-4 py-2 text-xs font-semibold transition-all ${
                selectedTag === tag
                  ? 'bg-accent/10 border-accent/30 text-accent shadow-sm'
                  : 'bg-surface border-line text-text-dim hover:text-text-main hover:border-slate-700'
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

      {/* Work With Me Block */}
      <section className="border border-line bg-surface p-8 rounded-3xl shadow-xl max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7 space-y-4">
            <h3 className="text-2xl font-bold text-text-main pb-2 border-b border-line/30 font-display">
              Work with me
            </h3>
            <p className="text-text-dim leading-relaxed text-sm font-sans">
              These are my own projects, built to solve real problems I care about. If you need a senior roboticist, DevAI engineering infrastructure, or someone who can do both, I'm available for project-based contracts and full-time roles.
            </p>
          </div>
          <div className="md:col-span-5 flex flex-col space-y-3 md:items-end md:text-right">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-500 font-sans">Get in touch</span>
            <div className="flex flex-wrap gap-x-4 gap-y-2 justify-start md:justify-end text-xs font-semibold font-sans">
              <a href="mailto:anders.ariel@gmail.com" className="text-accent hover:opacity-85 transition-opacity">
                Email
              </a>
              <span className="text-slate-700">·</span>
              <a href="https://linkedin.com/in/arielanders" target="_blank" rel="noopener noreferrer" className="text-accent hover:opacity-85 transition-opacity">
                LinkedIn
              </a>
              <span className="text-slate-700">·</span>
              <a href="https://github.com/arii" target="_blank" rel="noopener noreferrer" className="text-accent hover:opacity-85 transition-opacity">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 cursor-zoom-out p-4 backdrop-blur-sm"
          onClick={() => setLightboxImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-accent p-2 transition-colors focus:outline-none"
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
