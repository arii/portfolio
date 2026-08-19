import React, { useState } from 'react';
import { FileText, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import { ResumePublication } from '@/data/resume';

export interface PublicationsSectionProps {
  publications: ResumePublication[];
  scholarUrl: string;
}

const CATEGORIES = [
  { key: 'dissertation', label: 'Dissertations & Theses' },
  { key: 'journal_conference', label: 'Peer-Reviewed Journals & Conferences' },
  { key: 'symposium_other', label: 'Symposia & Other Works' }
] as const;

export const PublicationsSection: React.FC<PublicationsSectionProps> = ({
  publications,
  scholarUrl
}) => {
  const [showAll, setShowAll] = useState(false);
  const [showPhdAbstract, setShowPhdAbstract] = useState(false);

  const displayedPubs = showAll ? publications : publications.slice(0, 4);

  return (
    <section className="mb-10 print:mb-6 print:break-inside-avoid">
      <div className="flex items-center justify-between mb-4 border-b border-border/40 pb-2 print:border-b-2 print:border-black">
        <div className="flex items-center space-x-2.5">
          <FileText className="h-5 w-5 text-primary print:text-black" />
          <h2 className="text-xl font-bold text-foreground print:text-black uppercase tracking-wider">
            Publications & Theses
          </h2>
        </div>
      </div>

      <div id="publications-list" className="space-y-6">
        {CATEGORIES.map(({ key, label }) => {
          const groupPubs = displayedPubs.filter(
            (p) => p.category === key || (!p.category && key === 'symposium_other')
          );
          if (groupPubs.length === 0) return null;

          return (
            <div key={key} className="space-y-2">
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-primary border-b border-primary/20 pb-1">
                {label}
              </h3>
              <ul className="divide-y divide-border/40">
                {groupPubs.map((pub) => {
                  const isPhd = pub.id === 'phd-thesis-2019';
                  return (
                    <li key={pub.id} className="py-2.5 first:pt-1 last:pb-1 space-y-1">
                      <div className="flex items-start justify-between gap-2">
                        <div className="space-y-0.5">
                          <p className="text-xs font-semibold text-foreground print:text-black leading-snug">
                            {pub.title}
                          </p>
                          <p className="text-[11px] text-muted-foreground">{pub.authors?.join(', ')}</p>
                          <p className="text-[11px] text-muted-foreground/80 italic print:text-gray-800">
                            {pub.venue} ({pub.year})
                          </p>
                        </div>
                        {pub.link && (
                          <a
                            href={pub.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors shrink-0 mt-0.5 print:hidden"
                            title="View Publication"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        )}
                      </div>

                      {pub.highlight && (
                        <p className="text-[11px] text-slate-300 print:text-black leading-normal bg-secondary/30 p-2 rounded border border-border/40">
                          <strong className="text-primary font-mono text-[10px] mr-1 uppercase">Key Focus:</strong>
                          {pub.highlight}
                        </p>
                      )}

                      {isPhd && (
                        <div className="pt-0.5 print:hidden">
                          <button
                            onClick={() => setShowPhdAbstract(!showPhdAbstract)}
                            className="inline-flex items-center gap-1 text-[11px] font-semibold text-primary hover:underline cursor-pointer"
                          >
                            <span>{showPhdAbstract ? 'Hide PhD Abstract & Findings' : 'View PhD Abstract & Findings'}</span>
                            {showPhdAbstract ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                          </button>

                          {showPhdAbstract && (
                            <div className="mt-2 p-3 bg-secondary/50 border border-border/80 rounded-lg space-y-2 text-[11px] text-muted-foreground leading-relaxed animate-in fade-in duration-200">
                              <p className="font-semibold text-foreground">
                                Reliably Arranging Objects: A Conformant Planning Approach to Robot Manipulation
                              </p>
                              <ul className="space-y-1 list-disc list-inside">
                                <li>
                                  <strong className="text-foreground">Fixture Placement:</strong> Improved Tetris assembly success from 1.9% to 80.7% under pose uncertainty.
                                </li>
                                <li>
                                  <strong className="text-foreground">Noise Characterization:</strong> Modeled physical actuation noise (±0.15 in, 15° rotational offset).
                                </li>
                                <li>
                                  <strong className="text-foreground">Conformant Planning:</strong> Robust belief-state estimation without mid-course vision sensing.
                                </li>
                              </ul>
                            </div>
                          )}
                        </div>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>

      <div className="mt-6 pt-3 border-t border-border/40 flex flex-wrap items-center justify-between gap-3 print:hidden">
        <button
          onClick={() => setShowAll(!showAll)}
          aria-expanded={showAll}
          aria-controls="publications-list"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline cursor-pointer"
        >
          <span>{showAll ? 'Show Selected Works Only' : `Show All ${publications.length} Publications`}</span>
          {showAll ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
        </button>

        <a
          href={scholarUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-xs font-semibold text-muted-foreground hover:text-primary hover:underline"
        >
          <span>Full Google Scholar Profile</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </section>
  );
};
