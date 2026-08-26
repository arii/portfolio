import React, { useState, useMemo } from 'react';
import { ACADEMIC_PAPERS } from '@/data/academicResearch';
import { RESEARCH_AUTONOMOUS, RESEARCH_THESIS } from '@/data/research-papers';
import AcademicCard from '@/components/AcademicCard';
import FlagshipCard from '@/components/FlagshipCard';
import ToolCard from '@/components/ToolCard';
import ImageLightbox from '@/components/ImageLightbox';
import { BookOpen, Layers, Wrench } from 'lucide-react';
import SEO from '@/components/SEO';

export interface ResearchListPageProps {
  onNavigate: (slug: string) => void;
}

const ResearchListPage: React.FC<ResearchListPageProps> = ({ onNavigate }) => {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const autonomousTools = useMemo(() => RESEARCH_AUTONOMOUS, []);
  const thesisTools = useMemo(() => RESEARCH_THESIS, []);

  return (
    <div className="space-y-12 sm:space-y-16">
      <SEO
        title="Robotics & Algorithmic Research"
        description="Planning under uncertainty, conformant belief-state manipulation, multi-robot coordination, and hardware automation systems."
        canonicalUrl="/research"
      />

      <header className="space-y-3 border-b border-line/20 pb-6 sm:pb-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-text-main leading-tight">Robotics &amp; Algorithmic Research</h1>
        <p className="text-text-dim text-sm sm:text-base leading-relaxed">Planning under uncertainty, conformant belief-state manipulation, multi-robot coordination, and hardware automation systems.</p>
      </header>

      <section className="space-y-8" id="thesis">
        <div className="border-b border-line pb-3 flex items-center justify-between">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-text-main flex items-center space-x-2 font-display"><Layers className="h-5 w-5 text-accent" /><span>Graduate Theses</span></h2>
          <span className="text-xs text-text-dim uppercase tracking-widest">MIT CSAIL</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl">
          {thesisTools.map((tool) => (<FlagshipCard key={tool.id} tool={tool} onNavigate={onNavigate} onImageClick={setLightboxImage} />))}
        </div>
      </section>

      <section className="space-y-8" id="academic">
        <div className="border-b border-line pb-3 flex items-center justify-between">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-text-main flex items-center space-x-2 font-display"><BookOpen className="h-5 w-5 text-accent" /><span>Peer-Reviewed Publications</span></h2>
          <span className="text-xs text-text-dim uppercase tracking-widest">ICRA, IJRR, ISEC</span>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {ACADEMIC_PAPERS.filter(p => !p.title.includes('PhD Thesis') && p.type !== "Master's Thesis").map((paper) => (<AcademicCard key={paper.id} paper={paper} />))}
        </div>
      </section>

      <section className="space-y-8" id="autonomous">
        <div className="border-b border-line pb-3 flex items-center justify-between">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-text-main flex items-center space-x-2 font-display"><Wrench className="h-5 w-5 text-accent" /><span>Robotics and Academic Projects</span></h2>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {autonomousTools.map((tool) => (<ToolCard key={tool.id} tool={tool} onNavigate={onNavigate} />))}
        </div>
      </section>

      <ImageLightbox imageSrc={lightboxImage} onClose={() => setLightboxImage(null)} />
    </div>
  );
};

export default ResearchListPage;
