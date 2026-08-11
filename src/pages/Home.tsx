import React from 'react';
import { Link } from 'react-router-dom';

export interface HomeProps {
  title?: string;
}

const Home: React.FC<HomeProps> = ({ title = 'DevAI & Resume Consolidation' }) => {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center py-12 md:py-20 space-y-6 max-w-3xl mx-auto">
        <div className="inline-flex items-center space-x-2 bg-brand-bg-surface border border-slate-800 px-3 py-1 rounded-full text-xs text-brand-cyan-light font-mono">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-green"></span>
          </span>
          <span>Bootstrap Phase Complete</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">
          {title}
        </h1>
        <p className="text-lg text-slate-400 leading-relaxed">
          Welcome to the unified home for my technical research projects (migrated from <span className="text-brand-green">arii/boomtick</span>) and professional experience (migrated from <span className="text-brand-cyan-light">arii.github.io</span>).
        </p>
      </section>

      {/* Cards Section */}
      <section className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Research Card */}
        <div className="bg-brand-bg-surface/50 border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition-all group flex flex-col justify-between">
          <div className="space-y-4">
            <div className="h-12 w-12 rounded-lg bg-brand-green/10 flex items-center justify-center text-brand-green text-xl font-bold font-mono">
              &gt;_
            </div>
            <h2 className="text-xl font-bold text-white group-hover:text-brand-green transition-colors">
              Technical Research & DevAI
            </h2>
            <p className="text-sm text-slate-400">
              Deep dive investigations, DevAI tools, technical specifications, and performance optimization research migrated from the boomtick stack.
            </p>
          </div>
          <div className="pt-6">
            <Link
              to="/research"
              className="inline-flex items-center space-x-2 text-sm font-semibold text-brand-green hover:underline"
            >
              <span>Explore Research</span>
              <span>&rarr;</span>
            </Link>
          </div>
        </div>

        {/* Resume Card */}
        <div className="bg-brand-bg-surface/50 border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition-all group flex flex-col justify-between">
          <div className="space-y-4">
            <div className="h-12 w-12 rounded-lg bg-brand-cyan/10 flex items-center justify-center text-brand-cyan text-xl font-bold font-mono">
              📄
            </div>
            <h2 className="text-xl font-bold text-white group-hover:text-brand-cyan-light transition-colors">
              Professional Resume
            </h2>
            <p className="text-sm text-slate-400">
              Full career chronology, core competencies, highlighted projects, technical mastery, and credentials.
            </p>
          </div>
          <div className="pt-6">
            <Link
              to="/resume"
              className="inline-flex items-center space-x-2 text-sm font-semibold text-brand-cyan-light hover:underline"
            >
              <span>View Resume</span>
              <span>&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Stack Section */}
      <section className="border-t border-slate-900 pt-12 text-center space-y-6">
        <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-widest font-mono">
          Unified Tech Stack
        </h3>
        <div className="flex flex-wrap justify-center gap-3 max-w-lg mx-auto">
          <span className="px-3 py-1 bg-brand-bg-darker border border-slate-800 rounded-md text-xs text-slate-400 font-mono">React 19</span>
          <span className="px-3 py-1 bg-brand-bg-darker border border-slate-800 rounded-md text-xs text-slate-400 font-mono">TypeScript (Strict)</span>
          <span className="px-3 py-1 bg-brand-bg-darker border border-slate-800 rounded-md text-xs text-slate-400 font-mono">Tailwind CSS v3</span>
          <span className="px-3 py-1 bg-brand-bg-darker border border-slate-800 rounded-md text-xs text-slate-400 font-mono">Vite SPA</span>
          <span className="px-3 py-1 bg-brand-bg-darker border border-slate-800 rounded-md text-xs text-slate-400 font-mono">Pnpm 10 Workspace</span>
          <span className="px-3 py-1 bg-brand-bg-darker border border-slate-800 rounded-md text-xs text-slate-400 font-mono">React Router 7</span>
        </div>
      </section>
    </div>
  );
};

export default Home;
