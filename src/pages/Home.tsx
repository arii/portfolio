import React from 'react';
import { Link } from 'react-router-dom';
import { Layers, FileText, ArrowRight } from 'lucide-react';

export interface HomeProps {
  title?: string;
}

const Home: React.FC<HomeProps> = ({ title = 'Ariel Anders, PhD' }) => {
  return (
    <div className="space-y-12">
      {/* Hero Section - Clean, Premium Editorial Look */}
      <section className="space-y-6 pt-12 md:pt-16 pb-8 border-b border-line/20">
        <div className="inline-flex items-center space-x-2 bg-accent/10 border border-accent/20 px-3.5 py-1 rounded-full text-xs text-accent font-semibold uppercase tracking-wider">
          <span>Senior Roboticist · DevAI Engineer</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-text-main leading-none">
          {title}
        </h1>

        <p className="text-xl sm:text-2xl text-accent font-bold tracking-tight">
          Build smart. Ship more.
        </p>

        <p className="text-text-dim max-w-2xl text-lg leading-relaxed font-sans">
          A unified portfolio housing high-fidelity robotics software architectures, autonomous DevAI workflow systems (migrated from <span className="text-accent font-semibold">arii/tech-dancer</span> / <span className="text-accent font-semibold">boomtick.blog</span>), and professional engineering records.
        </p>

        <div className="flex flex-wrap gap-4 pt-4">
          <Link
            to="/research"
            className="inline-flex items-center space-x-2 bg-accent hover:opacity-90 text-bg px-5 py-3 rounded-xl font-bold text-sm transition-all"
          >
            <span>Explore DevAI Portfolio</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to="/about"
            className="inline-flex items-center space-x-2 bg-surface hover:bg-surface-alt text-text-main border border-line px-5 py-3 rounded-xl font-bold text-sm transition-all"
          >
            <span>About Ariel</span>
          </Link>
        </div>
      </section>

      {/* Navigation Grid Cards */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Research Card */}
        <div className="border border-line bg-surface p-8 rounded-3xl transition-all hover:border-accent hover:shadow-glow flex flex-col justify-between group">
          <div className="space-y-4">
            <div className="h-12 w-12 rounded-2xl bg-accent/10 flex items-center justify-center shrink-0 border border-accent/20">
              <Layers className="h-6 w-6 text-accent" />
            </div>
            <h2 className="text-2xl font-bold text-text-main tracking-tight group-hover:text-accent transition-colors">
              Technical Research &amp; DevAI
            </h2>
            <p className="text-text-dim leading-relaxed text-sm">
              Explore deep dives, autonomous CI/CD loops, and developer tooling pipelines designed to keep engineers in control. Built using modern agentic automation paradigms.
            </p>
          </div>
          <div className="pt-8">
            <Link
              to="/research"
              className="inline-flex items-center space-x-2 text-sm font-bold text-accent hover:opacity-85 transition-opacity"
            >
              <span>Explore Research &amp; Deep Dives</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Resume Card */}
        <div className="border border-line bg-surface p-8 rounded-3xl transition-all hover:border-accent hover:shadow-glow flex flex-col justify-between group">
          <div className="space-y-4">
            <div className="h-12 w-12 rounded-2xl bg-accent/10 flex items-center justify-center shrink-0 border border-accent/20">
              <FileText className="h-6 w-6 text-accent" />
            </div>
            <h2 className="text-2xl font-bold text-text-main tracking-tight group-hover:text-accent transition-colors">
              Professional Resume
            </h2>
            <p className="text-text-dim leading-relaxed text-sm">
              Browse through credentials, academic background from MIT, experience records at Waymo and Robust.AI, and direct contact details for consulting or leadership roles.
            </p>
          </div>
          <div className="pt-8">
            <Link
              to="/resume"
              className="inline-flex items-center space-x-2 text-sm font-bold text-accent hover:opacity-85 transition-opacity"
            >
              <span>View Full Credentials</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
