import React, { useState, useMemo } from 'react';
import { ACADEMIC_PAPERS } from '@/data/academicResearch';
import { RESEARCH_AUTONOMOUS, RESEARCH_THESIS } from '@/data/research-papers';
import AcademicCard from '@/components/AcademicCard';
import FlagshipCard from '@/components/FlagshipCard';
import DomainAccordion from '@/components/research/DomainAccordion';
import { BookOpen, X, Layers, Wrench, Filter } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { DomainGroup } from '@/data/research/autonomousTools';
import { FilterCategory, FILTER_CATEGORIES, matchesCategory } from '@/utils/researchFilter';
import { Box, Stack } from '@/layouts/Primitives';

export interface ResearchListPageProps {
  onNavigate: (slug: string) => void;
}

const ResearchListPage: React.FC<ResearchListPageProps> = ({ onNavigate }) => {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('All');
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const filteredThesis = useMemo(() => {
    return RESEARCH_THESIS.filter((tool) => matchesCategory(tool.tags, tool.category, activeFilter));
  }, [activeFilter]);

  const filteredPapers = useMemo(() => {
    return ACADEMIC_PAPERS.filter((p) => !p.title.includes('PhD Thesis')).filter((paper) =>
      matchesCategory(paper.tags, paper.type, activeFilter)
    );
  }, [activeFilter]);

  const autonomousTools = useMemo(() => {
    return RESEARCH_AUTONOMOUS.filter((tool) => matchesCategory(tool.tags, tool.category, activeFilter));
  }, [activeFilter]);

  const domainGroups = useMemo(() => {
    const groups: DomainGroup[] = ['Autonomous Systems & Robotics', 'Accessibility & Tools', 'MIT Initiatives & Community'];
    return groups.map((domain) => ({
      domain,
      tools: autonomousTools.filter((t) => t.domainGroup === domain)
    })).filter((g) => g.tools.length > 0);
  }, [autonomousTools]);

  return (
    <Stack gap="10" className="sm:space-y-12 max-w-6xl mx-auto w-full px-4 sm:px-6">
      <Helmet>
        <title>Robotics &amp; Algorithmic Research | Ariel Anders</title>
        <meta name="description" content="Planning under uncertainty, conformant belief-state manipulation, multi-robot coordination, and hardware automation systems." />
      </Helmet>

      <header className="space-y-4 max-w-3xl border-b border-line/20 pb-6">
        <Box className="inline-flex items-center space-x-2 bg-accent/10 border border-accent/20 px-3.5 py-1.5 rounded-full text-xs text-accent font-semibold uppercase tracking-wider">
          <span>ACADEMIC &amp; DEEP-TECH ROBOTICS</span>
        </Box>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-text-main leading-tight">Robotics &amp; Algorithmic Research</h1>
        <p className="text-text-dim max-w-2xl text-sm sm:text-base leading-relaxed">Planning under uncertainty, conformant belief-state manipulation, multi-robot coordination, and hardware automation systems.</p>

        {/* Filter Bar */}
        <Stack direction="row" align="center" gap="2" className="pt-2 sticky top-16 z-30 bg-slate-950/80 backdrop-blur-md py-2 -mx-2 px-2 border-y border-line/30 overflow-x-auto no-scrollbar">
          <Filter className="h-4 w-4 text-accent shrink-0 ml-1" />
          <span className="text-xs font-bold text-text-dim uppercase tracking-wider shrink-0 mr-1">Filter:</span>
          {FILTER_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                activeFilter === cat
                  ? 'bg-accent text-slate-950 shadow-md font-bold'
                  : 'bg-surface/80 text-text-dim border border-line hover:text-text-main hover:border-accent'
              }`}
            >
              {cat}
            </button>
          ))}
        </Stack>
      </header>

      {/* Flagship Section: Doctoral & Graduate Theses */}
      {filteredThesis.length > 0 && (
        <Stack gap="6" id="thesis">
          <Box className="border-b border-line pb-3 flex items-center justify-between">
            <h2 className="text-lg sm:text-xl font-bold text-text-main flex items-center space-x-2 font-display">
              <Layers className="h-5 w-5 text-accent" />
              <span>Doctoral &amp; Graduate Theses</span>
            </h2>
            <span className="text-xs text-text-dim uppercase tracking-widest">MIT CSAIL</span>
          </Box>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredThesis.map((tool) => (
              <FlagshipCard key={tool.id} tool={tool} onNavigate={onNavigate} onImageClick={setLightboxImage} />
            ))}
          </div>
        </Stack>
      )}

      {/* Publications Section */}
      {filteredPapers.length > 0 && (
        <Stack gap="6" id="academic">
          <Box className="border-b border-line pb-3 flex items-center justify-between">
            <h2 className="text-lg sm:text-xl font-bold text-text-main flex items-center space-x-2 font-display">
              <BookOpen className="h-5 w-5 text-accent" />
              <span>Peer-Reviewed Publications</span>
            </h2>
            <span className="text-xs text-text-dim uppercase tracking-widest">ICRA, IJRR, ISEC</span>
          </Box>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredPapers.map((paper) => (
              <AcademicCard key={paper.id} paper={paper} />
            ))}
          </div>
        </Stack>
      )}

      {/* Collapsible Applied Systems Accordions */}
      {domainGroups.length > 0 && (
        <Stack gap="6" id="autonomous">
          <Box className="border-b border-line pb-3 flex items-center justify-between">
            <h2 className="text-lg sm:text-xl font-bold text-text-main flex items-center space-x-2 font-display">
              <Wrench className="h-5 w-5 text-accent" />
              <span>Applied Systems &amp; Infrastructure Projects</span>
            </h2>
          </Box>
          <Stack gap="4">
            {domainGroups.map(({ domain, tools }) => (
              <DomainAccordion key={domain} title={domain} tools={tools} onNavigate={onNavigate} forceOpen={activeFilter !== 'All'} />
            ))}
          </Stack>
        </Stack>
      )}

      {lightboxImage && (
        <Box className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 cursor-zoom-out p-4 backdrop-blur-sm" onClick={() => setLightboxImage(null)}>
          <button className="absolute top-4 right-4 text-white hover:text-accent p-2 transition-colors focus:outline-none" onClick={() => setLightboxImage(null)}>
            <X className="h-8 w-8" />
          </button>
          <img src={lightboxImage} alt="Enlarged screenshot preview" className="max-w-full max-h-[90vh] object-contain rounded-3xl border border-line shadow-2xl" />
        </Box>
      )}
    </Stack>
  );
};

export default ResearchListPage;
