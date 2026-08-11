import React from 'react';

export interface ResearchProps {
  subtitle?: string;
}

const Research: React.FC<ResearchProps> = ({ subtitle = 'DevAI & Technical Research Console' }) => {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-3xl md:text-4xl font-extrabold text-white">
          Technical Research
        </h1>
        <p className="text-sm text-brand-green font-mono">
          {subtitle}
        </p>
      </div>

      <div className="bg-brand-bg-surface/30 border border-slate-800 rounded-lg p-6 max-w-4xl space-y-6">
        <h2 className="text-lg font-bold text-white flex items-center space-x-2">
          <span className="text-brand-green">&gt;</span>
          <span>Pending Migration (Issue 1.3)</span>
        </h2>
        <p className="text-slate-400 text-sm leading-relaxed">
          The technical research content from the <span className="text-brand-green font-mono">arii/boomtick</span> repository will be migrated to this section. This will include our custom AI agent research, telemetry tools, and technical specs.
        </p>

        <div className="border-t border-slate-900 pt-6 space-y-4">
          <h3 className="text-sm font-semibold text-white font-mono uppercase tracking-wider">
            Planned Research Topics:
          </h3>
          <ul className="list-disc pl-5 space-y-2 text-sm text-slate-400">
            <li>
              <strong className="text-slate-200">Autonomous AI Developer Agents:</strong> System integration, continuous learning models, and sandboxed test environments.
            </li>
            <li>
              <strong className="text-slate-200">Performance Benchmarking:</strong> Detailed analysis of reactive framework runtimes under extreme state mutations.
            </li>
            <li>
              <strong className="text-slate-200">DevOps Toolchains:</strong> Continuous integration systems utilizing lightweight container architectures.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Research;
