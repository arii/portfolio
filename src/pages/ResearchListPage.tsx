import React, { useState, useMemo } from 'react';
import { getAllResearchPosts, RESEARCH_TOOLS } from '@/data/research';
import ResearchCard from '@/components/ResearchCard';
import { Cpu, Terminal, ExternalLink, Layers, Activity, Server, FileText, ShoppingBag, X, FlaskConical, ArrowRight } from 'lucide-react';
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
    <div className="relative min-h-screen bg-brand-bg-dark text-slate-100 overflow-hidden grid-pattern px-4 sm:px-6 md:px-8 py-10 rounded-2xl border border-slate-900 shadow-2xl space-y-16">
      {/* DevAI Diagnostic Header Bar */}
      <div className="border border-slate-800 bg-brand-bg-darker/95 backdrop-blur-md rounded-xl px-4 sm:px-6 py-3.5 sm:py-4 flex flex-col sm:flex-row gap-3 sm:gap-4 items-start sm:items-center justify-between text-[11px] sm:text-xs text-slate-400 font-mono shadow-lg">
        <div className="flex items-center space-x-2 whitespace-nowrap">
          <span className="h-2 w-2 rounded-full bg-brand-green animate-pulse shadow-[0_0_8px_#10b981]"></span>
          <span className="text-slate-200 font-semibold uppercase tracking-wider">CONSOLE STATE: ACTIVE</span>
        </div>
        <div className="flex flex-wrap items-center gap-x-4 sm:gap-x-6 gap-y-1.5 w-full sm:w-auto">
          <span className="inline-flex items-center space-x-1.5 text-brand-green whitespace-nowrap">
            <span className="opacity-65">SYS_CPU:</span> <span className="font-bold text-slate-100">11.4%</span>
          </span>
          <span className="inline-flex items-center space-x-1.5 text-brand-cyan-light whitespace-nowrap">
            <span className="opacity-65">MEM:</span> <span className="font-bold text-slate-100">3.82 / 16 GB</span>
          </span>
          <span className="inline-flex items-center space-x-1.5 text-brand-green whitespace-nowrap">
            <span className="opacity-65">SHELL:</span> <span className="font-bold text-slate-100">secure-shell (v3)</span>
          </span>
        </div>
      </div>

      {/* Page Title */}
      <header className="space-y-4 max-w-3xl border-b border-slate-900 pb-8">
        <div className="inline-flex items-center space-x-2 bg-brand-green/10 border border-brand-green/30 px-3 py-1 rounded-full text-xs text-brand-green font-mono uppercase tracking-widest whitespace-nowrap">
          <span>{`$ show --research`}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent font-mono">
          DevAI &amp; Technical Research
        </h1>
        <p className="text-slate-400 max-w-2xl text-base leading-relaxed">
          Autonomous systems, robotics software architecture, and developer workflow automation. Migrated directly from the <span className="text-brand-green font-semibold">arii/tech-dancer</span> stack.
        </p>
      </header>

      {/* Flagship Projects Section */}
      <section className="space-y-8" id="flagship">
        <div className="border-b border-slate-900 pb-3 flex items-center justify-between">
          <h2 className="text-xl md:text-2xl font-bold font-mono text-white flex items-center space-x-2">
            <Layers className="h-5 w-5 text-brand-green" />
            <span>Flagship Projects</span>
          </h2>
          <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">CASE STUDIES</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {flagshipTools.map((tool) => {
            const ToolIcon = getToolIcon(tool);
            const imageSrc = tool.id === 'hrm-flagship' ? 'assets/research/hrm-flagship.png' : tool.id === 'repo-auditor-ai' ? 'assets/research/repo-auditor-ai.png' : null;

            return (
              <div
                key={tool.id}
                className="rounded-xl border border-slate-800 bg-brand-bg-darker/90 p-0 flex flex-col justify-between overflow-hidden transition-all duration-300 hover:border-brand-green/40 hover:shadow-[0_0_20px_rgba(16,185,129,0.08)]"
              >
                {/* Custom Preview or Image */}
                {tool.customPreview ? (
                  <div className="p-6 bg-slate-950 border-b border-slate-900 min-h-[140px] flex flex-col justify-center space-y-2 font-mono">
                    <div className="text-brand-green font-extrabold text-sm tracking-wider">
                      {tool.customPreview.logo.prefix}
                      <span className="text-white">{tool.customPreview.logo.accent}</span>
                      <span className="text-brand-cyan-light font-light">{tool.customPreview.logo.suffix}</span>
                    </div>
                    <div className="text-white font-black text-lg leading-tight">
                      {tool.customPreview.headline.map((line, idx) => (
                        <span key={idx} className={line.accent ? "text-brand-green" : ""}>{line.text} </span>
                      ))}
                    </div>
                    <div className="text-xs text-slate-500">{tool.customPreview.tagline}</div>
                  </div>
                ) : imageSrc ? (
                  <div
                    onClick={() => handleImageClick(imageSrc)}
                    className="relative aspect-[16/10] overflow-hidden bg-slate-950 border-b border-slate-900 cursor-zoom-in group"
                  >
                    <img
                      src={imageSrc}
                      alt={tool.imageAlt || tool.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102 opacity-90 group-hover:opacity-100"
                    />
                  </div>
                ) : null}

                {/* Body Content */}
                <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="h-10 w-10 rounded-lg bg-brand-green/10 flex items-center justify-center border border-brand-green/20">
                        <ToolIcon className="h-5 w-5 text-brand-green" />
                      </div>
                      <span className="rounded-full bg-brand-green/10 px-2.5 py-0.5 text-[9px] font-mono font-semibold uppercase text-brand-green border border-brand-green/20">
                        {tool.id === 'boomtick-blog' ? 'Active dev' : 'Flagship'}
                      </span>
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-brand-cyan-light font-bold uppercase tracking-wider block">
                        {tool.category}
                      </span>
                      <h3 className="text-xl font-bold font-mono text-white mt-1">
                        {tool.title}
                      </h3>
                      {tool.subtitle && (
                        <p className="text-xs text-brand-cyan-light font-semibold font-mono tracking-tighter mt-1 uppercase">
                          {tool.subtitle}
                        </p>
                      )}
                    </div>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      {tool.description}
                    </p>

                    {tool.inDevMessage && (
                      <div className="bg-brand-bg-dark/60 border border-slate-800 p-3 rounded-lg text-xs flex gap-2 items-start text-slate-400">
                        <FlaskConical className="h-4 w-4 text-brand-cyan-light shrink-0 mt-0.5" />
                        <p>
                          <strong className="text-slate-200">{tool.inDevMessage.highlight}</strong> {tool.inDevMessage.rest}
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="space-y-4 pt-4 border-t border-slate-900/60">
                    <div className="flex flex-wrap gap-1.5">
                      {tool.tags.map(tag => (
                        <span key={tag} className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-900 text-slate-400 border border-slate-800">
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
                          className="inline-flex items-center space-x-1.5 bg-brand-green/10 border border-brand-green/30 px-3 py-1.5 rounded-lg text-xs font-semibold text-brand-green hover:bg-brand-green/20 hover:border-brand-green/40 transition-colors font-mono"
                        >
                          <span>{tool.externalLinkDisplayLabel || 'Open Link'}</span>
                          <ExternalLink className="h-3.5 w-3.5" />
                        </a>
                      ) : tool.canonicalPath && (
                        <button
                          onClick={() => onNavigate(tool.id)}
                          className="inline-flex items-center space-x-1.5 bg-brand-green/10 border border-brand-green/30 px-3 py-1.5 rounded-lg text-xs font-semibold text-brand-green hover:bg-brand-green/20 hover:border-brand-green/40 transition-colors font-mono"
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
                          className="inline-flex items-center space-x-1.5 bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-300 hover:bg-slate-850 hover:text-white transition-colors font-mono"
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
      <section className="border border-brand-cyan/30 bg-brand-cyan/5 rounded-2xl p-8 space-y-3 shadow-[0_0_15px_rgba(6,182,212,0.03)] max-w-4xl">
        <h3 className="text-lg font-black text-white font-mono flex items-center space-x-2">
          <Terminal className="h-5 w-5 text-brand-cyan-light" />
          <span>Why this matters</span>
        </h3>
        <p className="text-slate-300 leading-relaxed text-sm max-w-3xl">
          Shipping high-fidelity autonomous systems and developer workflows requires <span className="text-brand-cyan-light font-bold">practical AI orchestration</span>, not hype. I focus on engineering deterministic state-verification feedback loops and isolated execution boundaries to scale robotics and development teams with absolute safety.
        </p>
      </section>

      {/* Auxiliary Columns Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Engineering Systems */}
        <div className="space-y-4">
          <div className="border-b border-slate-900 pb-2">
            <h3 className="font-bold font-mono text-white text-base flex items-center space-x-2">
              <Cpu className="h-4 w-4 text-brand-green-light" />
              <span>Engineering Systems</span>
            </h3>
          </div>
          <div className="space-y-4">
            {engineeringTools.map(tool => (
              <div key={tool.id} className="p-4 bg-brand-bg-darker/70 border border-slate-900 rounded-lg hover:border-slate-800 transition-all space-y-2">
                <div className="flex justify-between items-start">
                  <h4 className="font-bold font-mono text-slate-200 text-sm">{tool.title}</h4>
                  <span className="text-[8px] font-mono bg-brand-green/10 text-brand-green px-1.5 py-0.5 rounded border border-brand-green/20">
                    {tool.status}
                  </span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">{tool.description}</p>
                <div className="flex flex-wrap gap-1 pt-1">
                  {tool.tags.map(tag => (
                    <span key={tag} className="text-[9px] font-mono bg-slate-900/80 px-1.5 py-0.5 text-slate-400 border border-slate-900 rounded">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Data & Content Systems */}
        <div className="space-y-4">
          <div className="border-b border-slate-900 pb-2">
            <h3 className="font-bold font-mono text-white text-base flex items-center space-x-2">
              <Activity className="h-4 w-4 text-brand-cyan-light" />
              <span>Data &amp; Content Systems</span>
            </h3>
          </div>
          <div className="space-y-4">
            {dataContentTools.map(tool => (
              <div key={tool.id} className="p-4 bg-brand-bg-darker/70 border border-slate-900 rounded-lg hover:border-slate-800 transition-all space-y-2">
                <div className="flex justify-between items-start">
                  <h4 className="font-bold font-mono text-slate-200 text-sm">{tool.title}</h4>
                  <span className="text-[8px] font-mono bg-brand-cyan/10 text-brand-cyan px-1.5 py-0.5 rounded border border-brand-cyan/20">
                    {tool.status}
                  </span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">{tool.description}</p>
                <div className="flex flex-wrap gap-1 pt-1">
                  {tool.tags.map(tag => (
                    <span key={tag} className="text-[9px] font-mono bg-slate-900/80 px-1.5 py-0.5 text-slate-400 border border-slate-900 rounded">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Ecommerce Experiments */}
        <div className="space-y-4">
          <div className="border-b border-slate-900 pb-2">
            <h3 className="font-bold font-mono text-white text-base flex items-center space-x-2">
              <ShoppingBag className="h-4 w-4 text-brand-accent" />
              <span>Ecommerce Experiments</span>
            </h3>
          </div>
          <div className="space-y-4">
            {ecommerceTools.map(tool => (
              <div key={tool.id} className="p-4 bg-brand-bg-darker/70 border border-slate-900 rounded-lg hover:border-slate-800 transition-all space-y-2">
                <div className="flex justify-between items-start">
                  <h4 className="font-bold font-mono text-slate-200 text-sm">{tool.title}</h4>
                  <span className="text-[8px] font-mono bg-brand-accent/10 text-brand-accent px-1.5 py-0.5 rounded border border-brand-accent/20">
                    {tool.status}
                  </span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">{tool.description}</p>
                <div className="flex flex-wrap gap-1 pt-1">
                  {tool.tags.map(tag => (
                    <span key={tag} className="text-[9px] font-mono bg-slate-900/80 px-1.5 py-0.5 text-slate-400 border border-slate-900 rounded">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Articles & Research Studies Section */}
      <section className="space-y-8" id="articles">
        <div className="border-b border-slate-900 pb-3 flex items-center justify-between">
          <h2 className="text-xl md:text-2xl font-bold font-mono text-white flex items-center space-x-2">
            <Terminal className="h-5 w-5 text-brand-green" />
            <span>Articles &amp; Research Studies</span>
          </h2>
          <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">{posts.length} Studies</span>
        </div>

        {/* Retro Command Filters Bar */}
        <div className="flex flex-wrap items-center justify-start gap-2 font-mono">
          <button
            onClick={() => setSelectedTag(null)}
            className={`rounded border px-4 py-1.5 text-xs font-semibold transition-all ${
              selectedTag === null
                ? 'bg-brand-green/20 border-brand-green text-brand-green shadow-[0_0_8px_rgba(16,185,129,0.15)]'
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
                  ? 'bg-brand-green/20 border-brand-green text-brand-green shadow-[0_0_8px_rgba(16,185,129,0.15)]'
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
      </section>

      {/* Work With Me Block */}
      <section className="border border-slate-800 bg-brand-bg-darker/90 rounded-2xl p-8 shadow-xl max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7 space-y-4">
            <h3 className="text-2xl font-black font-mono text-white pb-2 border-b border-slate-900">
              Work with me
            </h3>
            <p className="text-slate-300 leading-relaxed text-sm">
              These are my own projects, built to solve real problems I care about. If you need a senior roboticist, DevAI engineering infrastructure, or someone who can do both, I'm available for project-based contracts and full-time roles.
            </p>
          </div>
          <div className="md:col-span-5 flex flex-col space-y-3 font-mono md:items-end md:text-right">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Get in touch</span>
            <div className="flex flex-wrap gap-x-4 gap-y-2 justify-start md:justify-end text-xs font-semibold">
              <a href="mailto:anders.ariel@gmail.com" className="text-brand-cyan-light hover:text-white hover:underline transition-colors">
                Email
              </a>
              <span className="text-slate-700">·</span>
              <a href="https://linkedin.com/in/arielanders" target="_blank" rel="noopener noreferrer" className="text-brand-cyan-light hover:text-white hover:underline transition-colors">
                LinkedIn
              </a>
              <span className="text-slate-700">·</span>
              <a href="https://github.com/arii" target="_blank" rel="noopener noreferrer" className="text-brand-cyan-light hover:text-white hover:underline transition-colors">
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
            className="absolute top-4 right-4 text-white hover:text-brand-green p-2 transition-colors focus:outline-none"
            onClick={() => setLightboxImage(null)}
          >
            <X className="h-8 w-8" />
          </button>
          <img
            src={lightboxImage}
            alt="Enlarged screenshot preview"
            className="max-w-full max-h-[90vh] object-contain rounded-lg border border-slate-800 shadow-2xl"
          />
        </div>
      )}
    </div>
  );
};

export default ResearchListPage;
