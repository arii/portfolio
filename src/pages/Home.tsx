import React from 'react';
import { Link } from 'react-router-dom';
import { Layers, FileText, ArrowRight } from 'lucide-react';

export interface HomeProps {
  title?: string;
}

const Home: React.FC<HomeProps> = ({ title = 'Ariel Anders, PhD' }) => {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Editorial Hero Section echoing boomtick.blog style */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800/60 p-8 md:p-12 shadow-2xl">
        {/* Decorative Grid Background */}
        <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" />

        {/* Decorative subtle ambient glows */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 space-y-6 max-w-3xl">
          <div className="inline-flex items-center space-x-2 bg-cyan-500/10 border border-cyan-500/20 px-3.5 py-1 rounded-full text-xs text-cyan-400 font-semibold uppercase tracking-wider">
            <span>Portfolio &amp; Research Hub</span>
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-tight">
              {title}
            </h1>

            <p className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400">
              Build smart. Ship more.
            </p>
          </div>

          <p className="text-slate-300 text-lg leading-relaxed max-w-2xl">
            A unified portfolio housing high-fidelity robotics software architectures, autonomous DevAI workflow systems (migrated from <span className="text-cyan-400 font-semibold">arii/tech-dancer</span> / <span className="text-cyan-400 font-semibold">boomtick.blog</span>), and professional engineering records.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Link
              to="/research"
              className="inline-flex items-center space-x-2 bg-cyan-500 hover:bg-cyan-600 text-slate-950 px-5 py-3 rounded-xl font-bold text-sm transition-all shadow-lg hover:shadow-cyan-500/10"
            >
              <span>Explore DevAI Portfolio</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center space-x-2 bg-slate-900 hover:bg-slate-850 text-slate-200 border border-slate-800 px-5 py-3 rounded-xl font-bold text-sm transition-all"
            >
              <span>About Ariel</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Navigation Grid Cards */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Research Card */}
        <div className="border border-slate-800 bg-slate-900/40 rounded-3xl p-8 hover:border-cyan-500/40 hover:shadow-glow transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
          <div className="space-y-4 relative z-10">
            <div className="h-12 w-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center shrink-0 border border-cyan-500/20">
              <Layers className="h-6 w-6 text-cyan-400" />
            </div>
            <h2 className="text-2xl font-bold text-white tracking-tight group-hover:text-cyan-400 transition-colors">
              Technical Research &amp; DevAI
            </h2>
            <p className="text-slate-300 leading-relaxed text-sm">
              Explore deep dives, autonomous CI/CD loops, and developer tooling pipelines designed to keep engineers in control. Built using modern agentic automation paradigms.
            </p>
          </div>
          <div className="pt-8 relative z-10">
            <Link
              to="/research"
              className="inline-flex items-center space-x-2 text-sm font-bold text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <span>View Research &amp; Projects</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Resume Card */}
        <div className="border border-slate-800 bg-slate-900/40 rounded-3xl p-8 hover:border-violet-500/40 hover:shadow-glow transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
          <div className="space-y-4 relative z-10">
            <div className="h-12 w-12 rounded-2xl bg-violet-500/10 flex items-center justify-center shrink-0 border border-violet-500/20">
              <FileText className="h-6 w-6 text-violet-400" />
            </div>
            <h2 className="text-2xl font-bold text-white tracking-tight group-hover:text-violet-400 transition-colors">
              Professional Resume
            </h2>
            <p className="text-slate-300 leading-relaxed text-sm">
              Browse through credentials, academic background from MIT, experience records at Waymo and Robust.AI, and direct contact details for consulting or leadership roles.
            </p>
          </div>
          <div className="pt-8 relative z-10">
            <Link
              to="/resume"
              className="inline-flex items-center space-x-2 text-sm font-bold text-violet-400 hover:text-violet-300 transition-colors"
            >
              <span>View Full Credentials</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Core Specs Section */}
      <section className="pt-8 text-center space-y-4">
        <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-widest">
          UNIFIED SYSTEM SPECS
        </h3>
        <div className="flex flex-wrap justify-center gap-2 max-w-xl mx-auto">
          <span className="px-3 py-1 bg-slate-900/80 border border-slate-800/80 rounded-lg text-xs text-cyan-400">React v19</span>
          <span className="px-3 py-1 bg-slate-900/80 border border-slate-800/80 rounded-lg text-xs text-violet-400">TypeScript</span>
          <span className="px-3 py-1 bg-slate-900/80 border border-slate-800/80 rounded-lg text-xs text-slate-400">TailwindCSS</span>
          <span className="px-3 py-1 bg-slate-900/80 border border-slate-800/80 rounded-lg text-xs text-slate-400">Vite SPA</span>
          <span className="px-3 py-1 bg-slate-900/80 border border-slate-800/80 rounded-lg text-xs text-slate-400">Pnpm Workspace</span>
        </div>
      </section>
    </div>
  );
};

export default Home;
