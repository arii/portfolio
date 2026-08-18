import React from 'react';

export const WorkWithMeSection: React.FC = () => {
  return (
    <section className="border border-line bg-surface p-8 rounded-3xl shadow-xl max-w-5xl">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-7 space-y-4">
          <h3 className="text-2xl font-bold text-text-main pb-2 border-b border-line/30 font-display">
            Work with me
          </h3>
          <p className="text-text-dim leading-relaxed text-sm font-sans">
            These are my own projects, built to solve real problems I care about. If you need a senior roboticist, DevAI engineering infrastructure, or someone who can do both, I'm available for project-based contracts and full-time roles.
          </p>
        </div>
        <div className="md:col-span-5 flex flex-col space-y-3 md:items-end md:text-right">
          <span className="text-xs font-bold uppercase tracking-widest text-slate-500 font-sans">Get in touch</span>
          <div className="flex flex-wrap gap-x-4 gap-y-2 justify-start md:justify-end text-xs font-semibold font-sans">
            <a href="mailto:anders.ariel@gmail.com" className="text-accent hover:opacity-85 transition-opacity">
              Email
            </a>
            <span className="text-slate-700">·</span>
            <a href="https://linkedin.com/in/arielanders" target="_blank" rel="noopener noreferrer" className="text-accent hover:opacity-85 transition-opacity">
              LinkedIn
            </a>
            <span className="text-slate-700">·</span>
            <a href="https://github.com/arii" target="_blank" rel="noopener noreferrer" className="text-accent hover:opacity-85 transition-opacity">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
