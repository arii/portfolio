import React, { useState, useMemo } from 'react';
import { getAllResearchPosts, RESEARCH_TOOLS } from '@/data/research';
import ResearchCard from '@/components/ResearchCard';
import { ShieldCheck, Cpu, HardDrive, Terminal, ExternalLink, GitBranch, Layers, Activity, Server, FileText, ShoppingBag } from 'lucide-react';
import { ResearchTool } from '@/types/research';

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

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 space-y-12">
      {/* DevAI Diagnostic Header Bar */}
      <div className="bg-brand-bg-darker border border-slate-900 rounded-lg p-4 flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-slate-500 shadow-lg">
        <div className="flex items-center space-x-3">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-green"></span>
          </span>
          <span className="text-slate-300">CONSOLE STATE: ONLINE</span>
        </div>
        <div className="flex items-center space-x-6">
          <span className="hidden sm:flex items-center space-x-1.5">
            <Cpu className="h-3.5 w-3.5 text-brand-green animate-pulse" />
            <span>SYS_CPU: 12.4%</span>
          </span>
          <span className="hidden sm:flex items-center space-x-1.5">
            <HardDrive className="h-3.5 w-3.5 text-brand-cyan-light" />
            <span>MEM: 4.12 / 16 GB</span>
          </span>
          <span className="flex items-center space-x-1.5">
            <ShieldCheck className="h-3.5 w-3.5 text-brand-accent" />
            <span>SECURE SHELL (SSL-v3)</span>
          </span>
        </div>
      </div>

      <header className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center space-x-2 bg-brand-bg-darker border border-slate-900 px-3 py-1 rounded-full text-xs text-brand-green-light font-mono">
          <span>v1.0.0-production</span>
        </div>
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white font-mono flex items-center justify-center space-x-2">
          <span className="text-brand-green select-none">&gt;</span>
          <span>DevAI & Technical Research</span>
        </h1>
        <p className="text-base text-slate-400 leading-relaxed">
          Autonomous systems, robotics software architecture, and developer workflow automation. Migrated directly from the <span className="text-brand-green font-semibold">arii/tech-dancer</span> stack.
        </p>
      </header>

      {/* Flagship Projects Section */}
      <section className="space-y-6">
        <div className="border-b border-slate-900 pb-3 flex items-center justify-between">
          <h2 className="text-xl md:text-2xl font-bold font-mono text-white flex items-center space-x-2">
            <Layers className="h-5 w-5 text-brand-green" />
            <span>Flagship Projects</span>
          </h2>
          <span className="text-xs font-mono text-slate-500 uppercase">Interactive Systems</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {flagshipTools.map((tool) => {
            const ToolIcon = getToolIcon(tool);
            return (
              <div
                key={tool.id}
                className="rounded-xl border border-slate-800 bg-[#05070c] hover:bg-slate-900/40 p-6 flex flex-col justify-between transition-all hover:border-brand-green/30 hover:shadow-[0_0_15px_rgba(34,197,94,0.05)]"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="h-10 w-10 rounded-lg bg-brand-green/10 flex items-center justify-center text-brand-green">
                      <ToolIcon className="h-5 w-5" />
                    </div>
                    <span className="rounded px-2 py-0.5 text-[9px] font-mono font-semibold uppercase bg-brand-green/10 text-brand-green-light border border-brand-green/20">
                      {tool.status}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold font-mono text-white">
                      {tool.title}
                    </h3>
                    <p className="text-xs font-mono text-brand-green/80 mt-1 uppercase">
                      {tool.category}
                    </p>
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {tool.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {tool.tags.map(tag => (
                      <span key={tag} className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-900 text-slate-400 border border-slate-800">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-900 flex items-center space-x-4">
                  {tool.externalUrl && (
                    <a
                      href={tool.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1 text-xs font-mono text-brand-cyan-light hover:underline"
                    >
                      <ExternalLink className="h-3 w-3" />
                      <span>{tool.externalLinkDisplayLabel || 'Open Link'}</span>
                    </a>
                  )}
                  {tool.sourceUrl && (
                    <a
                      href={tool.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1 text-xs font-mono text-slate-400 hover:text-white"
                    >
                      <GitBranch className="h-3 w-3" />
                      <span>Source Code</span>
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Auxiliary Systems Section (Grid columns) */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Engineering Systems Column */}
        <div className="space-y-4">
          <div className="border-b border-slate-900 pb-2">
            <h3 className="font-bold font-mono text-white text-base flex items-center space-x-2">
              <Cpu className="h-4 w-4 text-brand-green-light" />
              <span>Engineering Systems</span>
            </h3>
          </div>
          <div className="space-y-4">
            {engineeringTools.map(tool => (
              <div key={tool.id} className="p-4 bg-[#05070c] border border-slate-900 rounded-lg hover:border-slate-800 transition-all space-y-2">
                <h4 className="font-bold font-mono text-slate-200 text-sm">{tool.title}</h4>
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

        {/* Data & Content Systems Column */}
        <div className="space-y-4">
          <div className="border-b border-slate-900 pb-2">
            <h3 className="font-bold font-mono text-white text-base flex items-center space-x-2">
              <Activity className="h-4 w-4 text-brand-cyan-light" />
              <span>Data & Content Systems</span>
            </h3>
          </div>
          <div className="space-y-4">
            {dataContentTools.map(tool => (
              <div key={tool.id} className="p-4 bg-[#05070c] border border-slate-900 rounded-lg hover:border-slate-800 transition-all space-y-2">
                <h4 className="font-bold font-mono text-slate-200 text-sm">{tool.title}</h4>
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

        {/* Ecommerce Experiments Column */}
        <div className="space-y-4">
          <div className="border-b border-slate-900 pb-2">
            <h3 className="font-bold font-mono text-white text-base flex items-center space-x-2">
              <ShoppingBag className="h-4 w-4 text-brand-accent" />
              <span>Ecommerce Experiments</span>
            </h3>
          </div>
          <div className="space-y-4">
            {ecommerceTools.map(tool => (
              <div key={tool.id} className="p-4 bg-[#05070c] border border-slate-900 rounded-lg hover:border-slate-800 transition-all space-y-2">
                <h4 className="font-bold font-mono text-slate-200 text-sm">{tool.title}</h4>
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

      {/* Articles & Research Section */}
      <section className="space-y-8" id="articles">
        <div className="border-b border-slate-900 pb-3 flex items-center justify-between">
          <h2 className="text-xl md:text-2xl font-bold font-mono text-white flex items-center space-x-2">
            <Terminal className="h-5 w-5 text-brand-green" />
            <span>Articles & Research Studies</span>
          </h2>
          <span className="text-xs font-mono text-slate-500 uppercase">{posts.length} Studies</span>
        </div>

        {/* Retro Command Filters Bar */}
        <div className="flex flex-wrap items-center justify-start gap-2 font-mono">
          <button
            onClick={() => setSelectedTag(null)}
            className={`rounded border px-4 py-1.5 text-xs font-semibold transition-all ${
              selectedTag === null
                ? 'bg-brand-green/20 border-brand-green text-brand-green-light shadow-[0_0_8px_rgba(34,197,94,0.15)]'
                : 'bg-[#05070c] border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
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
                  : 'bg-[#05070c] border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
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
    </div>
  );
};

export default ResearchListPage;
