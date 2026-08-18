import React, { useState } from 'react';
import { FileText, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import { ResumePublication } from '@/data/resume';

export interface PublicationsSectionProps {
  publications: ResumePublication[];
  scholarUrl: string;
}

export const PublicationsSection: React.FC<PublicationsSectionProps> = ({
  publications,
  scholarUrl
}) => {
  const [showAbstract, setShowAbstract] = useState(false);

  return (
    <section className="mb-10 print:mb-6 print:break-inside-avoid">
      <div className="flex items-center justify-between mb-4 border-b border-border/40 pb-2 print:border-b-2 print:border-black">
        <div className="flex items-center space-x-2.5">
          <FileText className="h-5 w-5 text-primary print:text-black" />
          <h2 className="text-xl font-bold text-foreground print:text-black uppercase tracking-wider">Publications & Theses</h2>
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

      <div className="space-y-3">
        {publications.map((pub) => {
          const isPhd = pub.id === 'phd-thesis-2019';

          return (
            <div
              key={pub.id}
              className="bg-card/40 border border-border/60 p-3.5 rounded-xl space-y-1.5 hover:border-primary/40 transition-colors print:bg-transparent print:border-none print:p-0"
            >
              <div className="flex items-start justify-between gap-2">
                <div className="space-y-0.5">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="px-1.5 py-0.5 text-[9px] font-mono uppercase font-bold rounded bg-secondary text-foreground print:bg-transparent print:text-black print:border print:border-black">
                      {pub.type}
                    </span>
                    <span className="text-[11px] text-muted-foreground font-mono">{pub.year}</span>
                  </div>
                  <h3 className="text-xs font-bold text-foreground print:text-black leading-snug">
                    {pub.title}
                  </h3>
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

              {pub.authors && pub.authors.length > 0 && (
                <p className="text-[11px] text-muted-foreground font-medium">{pub.authors.join(', ')}</p>
              )}

              {pub.venue && (
                <p className="text-[11px] text-muted-foreground/80 italic print:text-gray-800">{pub.venue}</p>
              )}

              {pub.highlight && (
                <p className="text-[11px] text-slate-300 print:text-black leading-normal bg-secondary/30 p-2 rounded border border-border/40">
                  <strong className="text-primary font-mono text-[10px] mr-1 uppercase">Key Focus:</strong>
                  {pub.highlight}
                </p>
              )}

              {isPhd && (
                <div className="pt-0.5 print:hidden">
                  <button
                    onClick={() => setShowAbstract(!showAbstract)}
                    className="inline-flex items-center gap-1 text-[11px] font-semibold text-primary hover:underline cursor-pointer"
                  >
                    <span>{showAbstract ? 'Hide PhD Abstract & Findings' : 'View PhD Abstract & Findings'}</span>
                    {showAbstract ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                  </button>

                  {showAbstract && (
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
            </div>
          );
        })}
      </div>
    </section>
  );
};
