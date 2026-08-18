import React, { useState } from 'react';
import { FileText, ExternalLink, ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';
import { ResumePublication } from '@/data/resume';

export interface PublicationsSectionProps {
  publications: ResumePublication[];
  scholarUrl: string;
}

export const PublicationsSection: React.FC<PublicationsSectionProps> = ({
  publications,
  scholarUrl
}) => {
  const [showPhdAbstract, setShowPhdAbstract] = useState(false);

  return (
    <section className="mb-12 print:mb-8 print:break-inside-avoid">
      <div className="flex items-center justify-between mb-6 border-b border-border/40 pb-2 print:border-b-2 print:border-black">
        <div className="flex items-center space-x-3">
          <FileText className="h-6 w-6 text-primary print:text-black" />
          <h2 className="text-2xl font-bold text-foreground print:text-black uppercase tracking-wider">Publications & Theses</h2>
        </div>
        <a
          href={scholarUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline print:hidden"
        >
          <span>Google Scholar</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>

      <div className="space-y-4">
        {publications.map((pub, idx) => {
          const isPhD = pub.type === 'PhD Dissertation';

          return (
            <div
              key={idx}
              className="bg-card/50 border border-border/60 p-4 rounded-xl space-y-2.5 print:bg-transparent print:border-none print:p-0"
            >
              <div className="flex items-start justify-between gap-2">
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="px-2 py-0.5 text-[10px] font-mono uppercase font-bold rounded bg-secondary text-foreground print:bg-transparent print:text-black print:border print:border-black">
                      {pub.type}
                    </span>
                    <span className="text-xs text-muted-foreground font-mono">{pub.year}</span>
                  </div>
                  <h3 className="text-sm font-bold text-foreground print:text-black leading-snug">
                    {pub.title}
                  </h3>
                </div>
                {pub.link && (
                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors shrink-0 mt-1 print:hidden"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>

              {pub.venue && (
                <p className="text-xs text-muted-foreground italic print:text-gray-800">{pub.venue}</p>
              )}

              {/* Interactive Accordion for PhD Thesis Abstract */}
              {isPhD && (
                <div className="pt-1 print:hidden">
                  <button
                    onClick={() => setShowPhdAbstract(!showPhdAbstract)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-primary/80 transition-colors cursor-pointer"
                  >
                    <span>{showPhdAbstract ? 'Hide Thesis Abstract' : 'View Research Abstract & Breakdown'}</span>
                    {showPhdAbstract ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>

                  {showPhdAbstract && (
                    <div className="mt-3 p-3.5 bg-secondary/40 border border-border/80 rounded-lg space-y-2.5 text-xs text-muted-foreground leading-relaxed animate-in fade-in duration-200">
                      <p className="font-semibold text-foreground">
                        Reliably Arranging Objects: A Conformant Planning Approach to Robot Manipulation
                      </p>
                      <ul className="space-y-1.5 list-disc list-inside">
                        <li>
                          <strong className="text-foreground">Plan Improvement with Fixture Placement:</strong> Increased assembly success rates from 1.9% to 80.7% in Tetris assembly under pose uncertainty.
                        </li>
                        <li>
                          <strong className="text-foreground">Action Noise Characterization:</strong> Modeled physical actuation noise (±0.15 inch positional, 15° rotational offset) for conformant planning.
                        </li>
                        <li>
                          <strong className="text-foreground">Belief State Estimation:</strong> Robust planar manipulation using sensorless pushing and uncertainty-reducing actions.
                        </li>
                      </ul>
                      <div className="pt-1 flex items-center gap-3 font-semibold">
                        <a
                          href="#/research/phd-thesis"
                          className="inline-flex items-center gap-1 text-primary hover:underline"
                        >
                          <span>Explore Research Article</span>
                          <ArrowRight className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
