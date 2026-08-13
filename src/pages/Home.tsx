import React from 'react';
import { Link } from 'react-router-dom';
import { Layers, FileText, ArrowRight } from 'lucide-react';

export interface HomeProps {
  title?: string;
}

const Home: React.FC<HomeProps> = ({ title = 'Ariel Anders, PhD' }) => {
  return (
    <div className="relative min-h-[80vh] bg-brand-bg-dark text-slate-100 overflow-hidden grid-pattern px-4 sm:px-6 md:px-8 py-10 rounded-2xl border border-slate-900 shadow-2xl">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Console Diagnostic Header Bar */}
        <div className="border border-slate-800 bg-brand-bg-darker/95 backdrop-blur-md rounded-xl px-6 py-4 flex flex-wrap gap-4 items-center justify-between text-xs text-slate-400 font-mono shadow-lg">
          <div className="flex items-center space-x-2">
            <span className="h-2 w-2 rounded-full bg-brand-green animate-pulse shadow-[0_0_8px_#10b981]"></span>
            <span className="text-slate-200 font-semibold uppercase tracking-wider">CONSOLE STATE: ACTIVE</span>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <span className="flex items-center space-x-1.5 text-brand-green">
              <span className="opacity-65">SYS_CPU:</span> <span className="font-bold text-slate-100">8.2%</span>
            </span>
            <span className="flex items-center space-x-1.5 text-brand-cyan-light">
              <span className="opacity-65">MEM:</span> <span className="font-bold text-slate-100">2.14 / 16 GB</span>
            </span>
            <span className="flex items-center space-x-1.5 text-brand-green">
              <span className="opacity-65">SHELL:</span> <span className="font-bold text-slate-100">secure-shell (v3)</span>
            </span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="space-y-6 border-b border-slate-900 pb-12">
          <div className="inline-flex items-center space-x-2 bg-brand-green/10 border border-brand-green/30 px-3 py-1 rounded-full text-xs text-brand-green font-mono uppercase tracking-widest">
            <span>{`$ init --portfolio`}</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
            {title}
          </h1>
          <p className="text-lg sm:text-xl text-brand-cyan-light font-bold font-mono tracking-wide">
            Senior Roboticist &amp; DevAI Engineer
          </p>
          <p className="text-slate-400 max-w-2xl text-base leading-relaxed">
            A unified portfolio housing high-fidelity robotics software architectures, autonomous DevAI workflow systems (migrated from <span className="text-brand-green font-semibold font-mono">arii/tech-dancer</span> / <span className="text-brand-green font-semibold font-mono">boomtick.blog</span>), and professional engineering records.
          </p>
        </section>

        {/* Navigation Grid Cards */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Research Card */}
          <div className="border border-slate-800 bg-brand-bg-darker/80 rounded-2xl p-6 hover:border-brand-green/40 hover:shadow-[0_0_20px_rgba(16,185,129,0.08)] transition-all duration-300 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="h-12 w-12 rounded-lg bg-brand-green/10 flex items-center justify-center shrink-0 border border-brand-green/20 shadow-sm">
                <Layers className="h-6 w-6 text-brand-green animate-pulse" />
              </div>
              <h2 className="text-xl font-bold font-mono text-white tracking-wide group-hover:text-brand-green transition-colors">
                Technical Research &amp; DevAI
              </h2>
              <p className="text-sm text-slate-400 leading-relaxed">
                Explore deep dives, autonomous CI/CD loops, and developer tooling pipelines designed to keep engineers in control. Built using modern agentic automation paradigms.
              </p>
            </div>
            <div className="pt-6">
              <Link
                to="/research"
                className="inline-flex items-center space-x-2 text-sm font-semibold text-brand-green hover:text-brand-green-light transition-colors font-mono"
              >
                <span>$ cd ./research</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Resume Card */}
          <div className="border border-slate-800 bg-brand-bg-darker/80 rounded-2xl p-6 hover:border-brand-cyan-light/40 hover:shadow-[0_0_20px_rgba(34,211,238,0.08)] transition-all duration-300 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="h-12 w-12 rounded-lg bg-brand-cyan/10 flex items-center justify-center shrink-0 border border-brand-cyan/20 shadow-sm">
                <FileText className="h-6 w-6 text-brand-cyan-light" />
              </div>
              <h2 className="text-xl font-bold font-mono text-white tracking-wide group-hover:text-brand-cyan-light transition-colors">
                Professional Resume
              </h2>
              <p className="text-sm text-slate-400 leading-relaxed">
                Browse through credentials, academic background from MIT, experience records at Waymo and Robust.AI, and direct contact details for consulting or leadership roles.
              </p>
            </div>
            <div className="pt-6">
              <Link
                to="/resume"
                className="inline-flex items-center space-x-2 text-sm font-semibold text-brand-cyan-light hover:text-white transition-colors font-mono"
              >
                <span>$ cat ./resume.md</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </section>

        {/* Stack Block */}
        <section className="border-t border-slate-900 pt-8 text-center space-y-4">
          <h3 className="text-xs font-mono text-slate-500 uppercase tracking-widest font-bold">
            UNIFIED SYSTEM SPECS
          </h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-xl mx-auto">
            <span className="px-3 py-1 bg-slate-950/90 border border-slate-900 rounded-lg text-xs text-brand-green font-mono">React v19.0.0</span>
            <span className="px-3 py-1 bg-slate-950/90 border border-slate-900 rounded-lg text-xs text-brand-cyan-light font-mono">TypeScript v5.6</span>
            <span className="px-3 py-1 bg-slate-950/90 border border-slate-900 rounded-lg text-xs text-slate-400 font-mono">TailwindCSS v3.4</span>
            <span className="px-3 py-1 bg-slate-950/90 border border-slate-900 rounded-lg text-xs text-slate-400 font-mono">Vite SPA Router</span>
            <span className="px-3 py-1 bg-slate-950/90 border border-slate-900 rounded-lg text-xs text-slate-400 font-mono">Pnpm v10.2 Workspace</span>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
