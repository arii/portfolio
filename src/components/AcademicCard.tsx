import React from 'react';
import { ExternalLink, GraduationCap, Award, FileText, Video, Play } from 'lucide-react';
import { AcademicPaper } from '@/data/academicResearch';

export interface AcademicCardProps {
  paper: AcademicPaper;
}

const AcademicCard: React.FC<AcademicCardProps> = ({ paper }) => {
  return (
    <div className="rounded-3xl border border-line bg-surface p-6 flex flex-col justify-between transition-all hover:border-accent hover:shadow-glow space-y-4">
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="h-10 w-10 rounded-2xl bg-accent/10 flex items-center justify-center border border-accent/20">
            {paper.type.includes('Dissertation') || paper.type.includes('Thesis') ? (
              <GraduationCap className="h-5 w-5 text-accent" />
            ) : (
              <Award className="h-5 w-5 text-accent" />
            )}
          </div>
          <span className="rounded-full bg-accent/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase text-accent border border-accent/20">
            {paper.year}
          </span>
        </div>

        <div>
          <span className="text-[10px] text-accent font-bold uppercase tracking-wider block font-sans">
            {paper.type}
          </span>
          <h3 className="text-lg font-bold text-text-main mt-1 font-display leading-snug">
            {paper.title}
          </h3>
          <p className="text-xs text-text-dim font-medium mt-1">
            {paper.venue}
          </p>
        </div>

        <p className="text-sm text-text-dim leading-relaxed font-sans">
          {paper.summary}
        </p>
      </div>

      <div className="space-y-4 pt-4 border-t border-line">
        <div className="flex flex-wrap gap-1.5">
          {paper.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-0.5 rounded-full text-[10px] font-sans bg-surface text-text-dim border border-line"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-2">
          {paper.pdfUrl && (
            <a
              href={paper.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 bg-accent/10 border border-accent/20 px-3.5 py-2 rounded-xl text-xs font-semibold text-accent hover:bg-accent/20 transition-colors min-h-[44px]"
            >
              <FileText className="h-3.5 w-3.5" />
              <span>Download PDF Report</span>
            </a>
          )}
          {paper.videoUrl && (
            <a
              href={paper.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 bg-accent/10 border border-accent/20 px-3.5 py-2 rounded-xl text-xs font-semibold text-accent hover:bg-accent/20 transition-colors min-h-[44px]"
            >
              <Video className="h-3.5 w-3.5" />
              <span>Watch Video Demo</span>
            </a>
          )}
          {paper.playlistUrl && (
            <a
              href={paper.playlistUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 bg-surface border border-line px-3.5 py-2 rounded-xl text-xs font-semibold text-text-dim hover:text-text-main transition-colors min-h-[44px]"
            >
              <Play className="h-3.5 w-3.5 text-accent" />
              <span>Watch Playlist</span>
            </a>
          )}
          {paper.link && (
            <a
              href={paper.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 bg-surface border border-line px-3.5 py-2 rounded-xl text-xs font-semibold text-text-dim hover:text-text-main transition-colors min-h-[44px]"
            >
              <span>View Publication</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default AcademicCard;
