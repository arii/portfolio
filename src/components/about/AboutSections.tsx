import React from 'react';
import { ExternalLink } from 'lucide-react';
import { ProfileData } from '@/data/aboutData';

export const CareerHighlightsSection: React.FC<{ highlights: ProfileData['highlights'] }> = ({ highlights }) => (
  <div className="space-y-6 bg-slate-900/60 p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-xl backdrop-blur-sm">
    <h2 className="text-2xl font-bold text-slate-100 pb-3 border-b border-slate-800">
      Career Highlights
    </h2>
    <div className="space-y-4">
      {highlights.map((item, idx) => (
        <div key={idx} className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-slate-800/50 pb-3 last:border-0 last:pb-0 gap-1 sm:gap-4">
          <div className="shrink-0 w-32 text-xs font-mono font-bold text-amber-400">
            {item.period}
          </div>
          <div className="grow space-y-0.5">
            <span className="text-sm font-bold text-slate-100 block">{item.title}</span>
            <span className="text-xs text-slate-300 block">{item.detail}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export const AtAGlanceSidebar: React.FC<{ details: ProfileData['details'] }> = ({ details }) => (
  <div className="border border-slate-800 bg-slate-900/80 p-6 rounded-2xl space-y-4 shadow-inner">
    <h3 className="text-xs font-semibold text-amber-400 uppercase tracking-widest flex items-center space-x-1.5 font-sans">
      <span className="h-1 w-1 bg-amber-400 rounded-full"></span>
      <span>At a Glance</span>
    </h3>
    <div className="space-y-4">
      {details.map((detail, idx) => {
        const Icon = detail.icon;
        return (
          <div key={idx} className="flex items-center justify-between border-b border-slate-800 pb-3 last:border-0 last:pb-0">
            <span className="text-xs text-slate-400 flex items-center space-x-1.5 shrink-0 mr-2">
              <Icon className="h-4 w-4 text-slate-400" />
              <span>{detail.label}</span>
            </span>
            {detail.url ? (
              <a
                href={detail.url}
                className="text-xs sm:text-sm font-bold text-amber-400 hover:text-amber-300 transition-colors flex items-center space-x-1 text-right"
              >
                <span>{detail.value}</span>
                <ExternalLink className="h-3 w-3 shrink-0 ml-1" />
              </a>
            ) : (
              <span className="text-xs sm:text-sm font-bold text-slate-100 text-right">
                {detail.value}
              </span>
            )}
          </div>
        );
      })}
    </div>
  </div>
);
