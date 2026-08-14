import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Bot, Code2, ShieldCheck, Terminal, FileCode2 } from 'lucide-react';
import { Button } from '@/layouts/Button';

const Home: React.FC = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 space-y-16">
      {/* Hero Header Section */}
      <section className="relative overflow-hidden rounded-2xl border border-border bg-surface p-8 sm:p-12 shadow-sm">
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center space-x-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-600 dark:text-amber-400">
            <Bot className="h-3.5 w-3.5" />
            <span>Senior Roboticist &amp; DevAI Engineer</span>
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight text-text-main sm:text-5xl lg:text-6xl">
            Ariel Anders, PhD
          </h1>

          <p className="text-lg leading-relaxed text-text-dim">
            I engineer autonomous robotics software, Behavior-Tree navigation loops, and
            agentic developer platform tooling. Explore my technical research, DevAI automation
            pipelines, and software architecture records.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <Link to="/research">
              <Button variant="primary" size="md" className="flex items-center space-x-2">
                <span>Explore DevAI Portfolio</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" size="md">
                <span>View Engineering Credentials</span>
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Main Focus Cards Section */}
      <section className="grid gap-8 md:grid-cols-2">
        {/* Card 1: DevAI & Tooling */}
        <div className="flex flex-col justify-between rounded-xl border border-border bg-surface p-8 shadow-sm transition-all hover:border-primary/50 hover:shadow-md">
          <div className="space-y-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Terminal className="h-6 w-6" />
            </div>
            <h2 className="text-2xl font-bold text-text-main">
              Autonomous DevAI &amp; Tooling
            </h2>
            <p className="text-sm leading-relaxed text-text-dim">
              Review custom CLI utilities (`td-cli`), multi-agent feedback daemons, Model Context
              Protocol servers, and automated code review pipelines designed to keep engineers in
              direct control.
            </p>
          </div>
          <div className="mt-8 pt-4 border-t border-border">
            <Link
              to="/research"
              className="inline-flex items-center space-x-2 text-sm font-semibold text-primary hover:underline"
            >
              <span>Inspect DevAI Systems</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Card 2: Robotics & Research */}
        <div className="flex flex-col justify-between rounded-xl border border-border bg-surface p-8 shadow-sm transition-all hover:border-primary/50 hover:shadow-md">
          <div className="space-y-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Code2 className="h-6 w-6" />
            </div>
            <h2 className="text-2xl font-bold text-text-main">
              Robotics Research &amp; Motion Planning
            </h2>
            <p className="text-sm leading-relaxed text-text-dim">
              Examine autonomous vehicle motion planning, localization, Behavior Trees, and
              industrial robotics software architectures built during PhD research at MIT and senior
              industry roles.
            </p>
          </div>
          <div className="mt-8 pt-4 border-t border-border">
            <Link
              to="/research"
              className="inline-flex items-center space-x-2 text-sm font-semibold text-primary hover:underline"
            >
              <span>Read Technical Deep Dives</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Engineering Highlights Banner */}
      <section className="rounded-xl border border-border bg-muted/40 p-6 sm:p-8">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="flex items-start space-x-3">
            <ShieldCheck className="h-5 w-5 text-primary shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-text-main text-sm">Strict Quality Gates</h3>
              <p className="text-xs text-text-dim mt-1">
                Automated Semgrep static analysis, secret detection, and linting.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <FileCode2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-text-main text-sm">Deterministic CLI</h3>
              <p className="text-xs text-text-dim mt-1">
                Custom `td-cli` orchestrator managing local and CI agent workflows.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <Bot className="h-5 w-5 text-primary shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-text-main text-sm">Agentic Workflows</h3>
              <p className="text-xs text-text-dim mt-1">
                Jules feedback daemons and LLM orchestration with token budget constraints.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
