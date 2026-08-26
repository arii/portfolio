import React from 'react';
import { ExternalLink } from 'lucide-react';
import { ProfileData } from '@/data/aboutData';

export const CareerHighlightsSection: React.FC<{ highlights: ProfileData['highlights'] }> = ({ highlights }) => (
  <div className="space-y-6 bg-surface p-6 sm:p-8 rounded-3xl border border-line">
    <h2 className="text-2xl font-bold text-text-main pb-3 border-b border-line/30">
      Career Highlights
    </h2>
    <div className="space-y-4">
      {highlights.map((item, idx) => (
        <div key={idx} className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-line/20 pb-3 last:border-0 last:pb-0 gap-1 sm:gap-4">
          <div className="shrink-0 w-32 text-xs font-mono font-bold text-accent">
            {item.period}
          </div>
          <div className="grow space-y-0.5">
            <span className="text-sm font-bold text-text-main block">{item.title}</span>
            <span className="text-xs text-text-dim block">{item.detail}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export const AtAGlanceSidebar: React.FC<{ details: ProfileData['details'] }> = ({ details }) => (
  <div className="border border-line bg-surface p-6 rounded-3xl space-y-4">
    <h3 className="text-sm font-semibold text-text-main flex items-center space-x-1.5 font-sans">
      <span>At a Glance</span>
    </h3>
    <div className="space-y-4">
      {details.map((detail, idx) => {
        const Icon = detail.icon;
        return (
          <div key={idx} className="flex flex-col border-b border-line/30 pb-3 last:border-0 last:pb-0 gap-1">
            <span className="text-xs font-semibold text-text-dim flex items-center space-x-1.5 shrink-0">
              {Icon && <Icon className="h-3.5 w-3.5 text-text-dim shrink-0" />}
              <span>{detail.label}</span>
            </span>
            {detail.url ? (
              <a
                href={detail.url}
                className="text-xs sm:text-sm font-medium text-accent hover:opacity-80 transition-opacity flex items-center space-x-1"
              >
                <span>{detail.value}</span>
                <ExternalLink className="h-3 w-3 shrink-0 ml-1" />
              </a>
            ) : Array.isArray(detail.value) ? (
              <ul className="text-xs sm:text-sm font-medium text-text-main space-y-1 list-disc list-inside">
                {detail.value.map((item, itemIdx) => (
                  <li key={itemIdx}>{item}</li>
                ))}
              </ul>
            ) : (
              <span className="text-xs sm:text-sm font-medium text-text-main">
                {detail.value}
              </span>
            )}
          </div>
        );
      })}
    </div>
  </div>
);
