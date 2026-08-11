import React from 'react';

export interface ResumeProps {
  version?: string;
}

const Resume: React.FC<ResumeProps> = ({ version = 'v2.1' }) => {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-3xl md:text-4xl font-extrabold text-white">
          Professional Resume
        </h1>
        <p className="text-sm text-brand-cyan-light font-mono">
          Migrating from arii.github.io ({version})
        </p>
      </div>

      <div className="bg-brand-bg-surface/30 border border-slate-800 rounded-lg p-6 max-w-4xl space-y-6">
        <h2 className="text-lg font-bold text-white flex items-center space-x-2">
          <span className="text-brand-cyan-light">📄</span>
          <span>Pending Resume Integration (Issue 2.1)</span>
        </h2>
        <p className="text-slate-400 text-sm leading-relaxed">
          The personal resume data and chronology migrated from <span className="text-brand-cyan-light font-mono">arii.github.io</span> will be hosted here. It will provide an interactive showcase of experience, skills, projects, and impact.
        </p>

        <div className="border-t border-slate-900 pt-6 space-y-4">
          <h3 className="text-sm font-semibold text-white font-mono uppercase tracking-wider">
            Expected Resume Structure:
          </h3>
          <div className="grid sm:grid-cols-2 gap-4 text-xs text-slate-400">
            <div className="bg-brand-bg-darker p-3 rounded border border-slate-900">
              <h4 className="font-bold text-slate-200 mb-1">Work Experience</h4>
              <p>Full chronology of professional software development and system architecture roles.</p>
            </div>
            <div className="bg-brand-bg-darker p-3 rounded border border-slate-900">
              <h4 className="font-bold text-slate-200 mb-1">Technical Skills</h4>
              <p>Interactive expertise categorization (Languages, Frameworks, Cloud, Tooling).</p>
            </div>
            <div className="bg-brand-bg-darker p-3 rounded border border-slate-900">
              <h4 className="font-bold text-slate-200 mb-1">Key Projects</h4>
              <p>Selected open source or commercial highlights illustrating business and technical value.</p>
            </div>
            <div className="bg-brand-bg-darker p-3 rounded border border-slate-900">
              <h4 className="font-bold text-slate-200 mb-1">Education & Certs</h4>
              <p>Academic credentials, professional certifications, and continuing education logs.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
