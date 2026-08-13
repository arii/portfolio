import React from 'react';
import { Cpu, Terminal, Layers, Award, ShieldCheck } from 'lucide-react';

export interface AboutProps {
  className?: string;
}

const About: React.FC<AboutProps> = ({ className = '' }) => {
  return (
    <div className={`space-y-12 max-w-4xl mx-auto py-6 ${className}`}>
      {/* Header section */}
      <section className="space-y-4">
        <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
          About Me
        </h1>
        <p className="text-lg text-brand-cyan-light font-mono">
          Robotics & DevAI Infrastructure Engineer
        </p>
      </section>

      {/* Intro section */}
      <section className="bg-brand-bg-surface/30 border border-slate-800 rounded-xl p-8 space-y-6">
        <h2 className="text-xl font-bold text-white flex items-center space-x-2">
          <Terminal className="h-5 w-5 text-brand-cyan-light" />
          <span>Professional Background</span>
        </h2>
        <p className="text-slate-300 text-sm leading-relaxed">
          I am a senior engineering specialist focused on connecting autonomous physical systems, robotic hardware execution nodes, and advanced AI-assisted agentic software development pipelines. My work bridges the gap between low-latency hardware/middleware controls and modern, developer-first tooling systems.
        </p>
        <p className="text-slate-300 text-sm leading-relaxed">
          Throughout my career, I have dedicated myself to optimizing engineering developer experience, building reliable continuous integration loops, and architecting robust, highly-predictable automated workflows.
        </p>
      </section>

      {/* Focus Areas */}
      <section className="grid md:grid-cols-2 gap-6">
        <div className="bg-brand-bg-surface/30 border border-slate-800 rounded-xl p-6 space-y-3">
          <div className="h-10 w-10 rounded-lg bg-brand-cyan/10 flex items-center justify-center text-brand-cyan">
            <Cpu className="h-5 w-5" />
          </div>
          <h3 className="text-lg font-bold text-white">Robotics Engineering</h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            Architecting safety-critical execution nodes, sensor-telemetry streams, and middleware configurations with ROS/ROS2, C++, and Python. Focused on deterministic, isolated control environments.
          </p>
        </div>

        <div className="bg-brand-bg-surface/30 border border-slate-800 rounded-xl p-6 space-y-3">
          <div className="h-10 w-10 rounded-lg bg-brand-green/10 flex items-center justify-center text-brand-green">
            <Layers className="h-5 w-5" />
          </div>
          <h3 className="text-lg font-bold text-white">DevAI Infrastructure</h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            Constructing agentic code generation, continuous audit, and automated layout-regression systems. Bringing production LLMs directly into the build pipeline with deterministic validation loops.
          </p>
        </div>
      </section>

      {/* Principles */}
      <section className="border-t border-slate-900 pt-8 space-y-6">
        <h2 className="text-xl font-bold text-white flex items-center space-x-2">
          <ShieldCheck className="h-5 w-5 text-brand-green" />
          <span>Engineering Philosophy</span>
        </h2>
        <div className="grid sm:grid-cols-3 gap-4 text-xs">
          <div className="bg-brand-bg-surface/20 p-4 rounded-lg border border-slate-850">
            <h4 className="font-bold text-white mb-2 flex items-center gap-1.5">
              <Award className="h-4 w-4 text-brand-cyan-light" />
              <span>Reliability First</span>
            </h4>
            <p className="text-slate-400 leading-relaxed">
              Every system, whether physical or digital, must fail gracefully and provide deterministic telemetry for prompt diagnostics.
            </p>
          </div>
          <div className="bg-brand-bg-surface/20 p-4 rounded-lg border border-slate-850">
            <h4 className="font-bold text-white mb-2 flex items-center gap-1.5">
              <Award className="h-4 w-4 text-brand-green" />
              <span>Developer UX</span>
            </h4>
            <p className="text-slate-400 leading-relaxed">
              Frictionless, fully-automated continuous integration is the bedrock of rapid, high-confidence engineering output.
            </p>
          </div>
          <div className="bg-brand-bg-surface/20 p-4 rounded-lg border border-slate-850">
            <h4 className="font-bold text-white mb-2 flex items-center gap-1.5">
              <Award className="h-4 w-4 text-brand-accent" />
              <span>Pragmatic Innovation</span>
            </h4>
            <p className="text-slate-400 leading-relaxed">
              Adopting state-of-the-art AI-orchestrated tools only when backed by reproducible metrics and deterministic sandboxes.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
