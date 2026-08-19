import React, { useState } from 'react';
import { ExternalLink, GraduationCap, Award, ChevronDown, ChevronUp } from 'lucide-react';
import { AcademicPaper } from '@/data/academicResearch';
import { Box, Stack } from '@/layouts/Primitives';

export interface AcademicCardProps {
  paper: AcademicPaper;
}

const AcademicCard: React.FC<AcademicCardProps> = ({ paper }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showAllTags, setShowAllTags] = useState(false);

  const isThesis = paper.type.includes('Dissertation') || paper.type.includes('Thesis');
  const visibleTags = (showAllTags || isExpanded) ? paper.tags : paper.tags.slice(0, 3);
  const hiddenTagsCount = paper.tags.length - 3;

  return (
    <Box className="rounded-2xl border border-line bg-surface p-5 transition-all hover:border-accent hover:shadow-glow">
      <Stack gap="3">
        {/* Header - Title, Type, Venue, Year */}
        <Stack gap="2">
          <Stack direction="row" align="center" justify="between" className="flex-wrap gap-2">
            <Stack direction="row" gap="2" align="center">
              <Box className="h-7 w-7 rounded-lg bg-accent/10 flex items-center justify-center border border-accent/20 shrink-0">
                {isThesis ? <GraduationCap className="h-4 w-4 text-accent" /> : <Award className="h-4 w-4 text-accent" />}
              </Box>
              <span className="text-[10px] text-accent font-bold uppercase tracking-wider font-sans">
                {paper.type}
              </span>
            </Stack>
            <Stack direction="row" gap="2" align="center">
              <span className="text-xs text-text-dim font-medium">{paper.venue}</span>
              <span className="rounded-full bg-accent/10 px-2 py-0.5 text-[10px] font-semibold text-accent border border-accent/20">
                {paper.year}
              </span>
            </Stack>
          </Stack>

          <h3 className="text-base font-bold text-text-main font-display leading-snug">
            {paper.title}
          </h3>
        </Stack>

        {/* Takeaway / Abstract Preview + Actions */}
        <Stack gap="3" className="pt-2 border-t border-line/50">
          <p className={`text-xs text-text-dim leading-relaxed font-sans ${isExpanded ? '' : 'line-clamp-2'}`}>
            {paper.summary}
          </p>

          {isExpanded && paper.authors && paper.authors.length > 0 && (
            <p className="text-[11px] text-text-dim/80 italic font-sans">
              Authors: {paper.authors.join(', ')}
            </p>
          )}

          {/* Tags with Progressive Disclosure */}
          <Stack direction="row" align="center" className="flex-wrap gap-1.5 pt-1">
            {visibleTags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 rounded-full text-[10px] font-sans bg-[#0f172a] text-text-dim border border-line"
              >
                {tag}
              </span>
            ))}
            {!showAllTags && !isExpanded && hiddenTagsCount > 0 && (
              <button
                onClick={() => setShowAllTags(true)}
                className="px-2 py-0.5 rounded-full text-[10px] font-sans bg-accent/10 text-accent border border-accent/20 hover:bg-accent/20 transition-colors"
              >
                +{hiddenTagsCount} more
              </button>
            )}
          </Stack>

          {/* Action Controls */}
          <Stack direction="row" align="center" justify="between" gap="2" className="pt-1">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="inline-flex items-center space-x-1 text-xs font-semibold text-accent hover:underline focus:outline-none"
              aria-expanded={isExpanded}
            >
              <span>{isExpanded ? 'Hide Details' : 'Read Abstract'}</span>
              {isExpanded ? <ChevronUp className="h-3.5 w-3.5" /> : <ChevronDown className="h-3.5 w-3.5" />}
            </button>

            {paper.link && (
              <a
                href={paper.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1 bg-accent/10 border border-accent/20 px-2.5 py-1 rounded-lg text-xs font-semibold text-accent hover:bg-accent/20 transition-colors shrink-0"
              >
                <span>View Paper</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            )}
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default AcademicCard;
