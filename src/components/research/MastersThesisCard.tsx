import React from 'react';
import { BookOpen, ExternalLink, GraduationCap } from 'lucide-react';
import { mastersThesisData, ThesisEntry } from '@/data/research/theses';

export interface MastersThesisCardProps {
  thesis?: ThesisEntry;
}

export const MastersThesisCard: React.FC<MastersThesisCardProps> = ({
  thesis = mastersThesisData,
}) => {
  return (
    <article
      aria-label={`${thesis.title} card`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 shadow-xl backdrop-blur-sm transition duration-300 hover:border-slate-700 hover:shadow-2xl"
    >
      {/* Visual Media Header */}
      <div className="relative aspect-video w-full overflow-hidden bg-slate-950 sm:aspect-[16/9]">
        <img
          src={thesis.imageSrc}
          alt={thesis.imageAlt}
          className="h-full w-full object-cover object-center transition duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80" />
        <div className="absolute top-3 right-3">
          <span className="rounded-md bg-slate-950/90 px-2.5 py-1 text-xs font-bold tracking-wide text-amber-400 border border-slate-800">
            {thesis.year}
          </span>
        </div>
      </div>

      {/* Content Area */}
      <div className="flex flex-1 flex-col justify-between p-6">
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400">
            <GraduationCap className="h-4 w-4 shrink-0" />
            <span>{thesis.degree}</span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-400">{thesis.institution}</span>
          </div>

          <div className="space-y-1">
            <h3 className="text-lg font-bold leading-snug text-slate-100 transition group-hover:text-amber-300 sm:text-xl">
              {thesis.title}
            </h3>
            <p className="text-xs font-medium uppercase tracking-wider text-amber-500/90">
              {thesis.subtitle}
            </p>
          </div>

          <p className="text-xs leading-relaxed text-slate-300 sm:text-sm">
            {thesis.description}
          </p>

          {thesis.advisor && (
            <p className="text-xs text-slate-400">
              <strong className="text-slate-300">Advisors:</strong> {thesis.advisor}
            </p>
          )}
        </div>

        {/* Tags & Action CTA */}
        <div className="mt-5 space-y-4 border-t border-slate-800/80 pt-4">
          <div className="flex flex-wrap gap-1.5">
            {thesis.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md border border-slate-800 bg-slate-950/70 px-2.5 py-0.5 text-[11px] font-medium text-slate-400"
              >
                {tag}
              </span>
            ))}
          </div>

          <div>
            <a
              href={thesis.dspaceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-amber-500 px-4 py-2 text-xs font-semibold text-slate-950 transition duration-200 hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-slate-950"
            >
              <BookOpen className="h-3.5 w-3.5" />
              <span>MIT DSpace Publication</span>
              <ExternalLink className="h-3.5 w-3.5 opacity-80" />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};

export default MastersThesisCard;
