import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { resumeData } from '@/data/resume';
import { ResumeHeader } from '@/components/resume/ResumeHeader';
import { ExperienceSection } from '@/components/resume/ExperienceSection';
import { EducationSection } from '@/components/resume/EducationSection';
import { ProjectsSection } from '@/components/resume/ProjectsSection';
import { SkillsSection } from '@/components/resume/SkillsSection';
import { HonorsSection } from '@/components/resume/HonorsSection';
import { TeachingSection } from '@/components/resume/TeachingSection';
import { PublicationsSection } from '@/components/resume/PublicationsSection';
import SEO from '@/components/SEO';
import { getPersonAndProfileSchema, getServiceSchema } from '@/utils/schema';

export interface ResumeProps {
  version?: string;
}

const Resume: React.FC<ResumeProps> = ({ version = 'v2.1' }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const layoutMode = searchParams.get('layout') === 'full' ? 'full' : 'split';
  const setLayoutMode = (mode: 'split' | 'full') => {
    setSearchParams({ layout: mode });
  };

  // Expand/collapse states for full-width layout (default to true/expanded)
  const [expandExperience, setExpandExperience] = useState(false); // starts collapsed
  const [expandSkills, setExpandSkills] = useState(true);
  const [expandProjects, setExpandProjects] = useState(true);
  const [expandEducation, setExpandEducation] = useState(true);
  const [expandPublications, setExpandPublications] = useState(true);
  const [expandTeaching, setExpandTeaching] = useState(true);
  const [expandHonors, setExpandHonors] = useState(true);

  const toggleAll = (expand: boolean) => {
    setExpandExperience(expand);
    setExpandSkills(expand);
    setExpandProjects(expand);
    setExpandEducation(expand);
    setExpandPublications(expand);
    setExpandTeaching(expand);
    setExpandHonors(expand);
  };

  const resumeSchemas = [getPersonAndProfileSchema('/resume'), getServiceSchema()];

  return (
    <div className="max-w-5xl mx-auto space-y-10 pb-16 print:space-y-6 print:pb-0 print:max-w-none">
      <SEO
        title="Resume & Career Highlights"
        description="View the technical resume and experience of Ariel Anders, PhD (MIT CSAIL): expertise in robotics engineering, AI architecture, and software systems."
        canonicalUrl="/resume"
        jsonLd={resumeSchemas}
      />
      <ResumeHeader
        pdfUrl="https://drive.google.com/file/d/14V6KjfEMO12uwNQAhY1OMy2d-_vkGXK_/view"
        layoutMode={layoutMode}
        onLayoutModeChange={setLayoutMode}
      />

      {layoutMode === 'full' ? (
        <div className="space-y-12 print:space-y-6">
          {/* Full-width Experience Section */}
          <ExperienceSection
            experiences={resumeData.experience}
            isCollapsible={true}
            isExpanded={expandExperience}
            onToggleExpand={() => setExpandExperience(!expandExperience)}
          />

          {/* Collapsible Action Bar */}
          <div className="flex justify-end gap-3 print:hidden border-b border-border/40 pb-2">
            <button
              type="button"
              onClick={() => toggleAll(true)}
              className="text-xs font-semibold text-primary hover:underline min-h-[36px] px-2"
            >
              Expand All Sections
            </button>
            <span className="text-text-dim text-xs select-none flex items-center">|</span>
            <button
              type="button"
              onClick={() => toggleAll(false)}
              className="text-xs font-semibold text-primary hover:underline min-h-[36px] px-2"
            >
              Collapse All Sections
            </button>
          </div>

          {/* Full-width Collapsible Single Column List */}
          <div className="space-y-10">
            <SkillsSection
              skills={resumeData.skills}
              isCollapsible={true}
              isExpanded={expandSkills}
              onToggleExpand={() => setExpandSkills(!expandSkills)}
            />
            <ProjectsSection
              projects={resumeData.projects}
              isCollapsible={true}
              isExpanded={expandProjects}
              onToggleExpand={() => setExpandProjects(!expandProjects)}
            />
            <EducationSection
              education={resumeData.education}
              isCollapsible={true}
              isExpanded={expandEducation}
              onToggleExpand={() => setExpandEducation(!expandEducation)}
            />
            <PublicationsSection
              publications={resumeData.publications}
              scholarUrl={resumeData.scholarUrl}
              isCollapsible={true}
              isExpanded={expandPublications}
              onToggleExpand={() => setExpandPublications(!expandPublications)}
            />
            <TeachingSection
              teaching={resumeData.teaching}
              isCollapsible={true}
              isExpanded={expandTeaching}
              onToggleExpand={() => setExpandTeaching(!expandTeaching)}
            />
            <HonorsSection
              honors={resumeData.honors}
              isCollapsible={true}
              isExpanded={expandHonors}
              onToggleExpand={() => setExpandHonors(!expandHonors)}
            />
          </div>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row gap-10 items-stretch print:block print:gap-0">
          {/* Left Column: Primary Experience Track & Projects */}
          <div className="flex-1 min-w-0 space-y-10 print:space-y-6">
            <ExperienceSection
              experiences={resumeData.experience}
              isCollapsible={false}
            />
            <ProjectsSection projects={resumeData.projects} />
          </div>

          {/* Right Sidebar: Skills, Education, Publications, Teaching & Honors */}
          <div className="flex-1 min-w-0 space-y-10 print:space-y-6">
            <SkillsSection skills={resumeData.skills} />
            <EducationSection education={resumeData.education} />
            <PublicationsSection
              publications={resumeData.publications}
              scholarUrl={resumeData.scholarUrl}
            />
            <TeachingSection teaching={resumeData.teaching} />
            <HonorsSection honors={resumeData.honors} />
          </div>
        </div>
      )}

      <div className="hidden print:block text-center pt-8 text-xs text-text-dim font-medium">
        Portfolio generated from arii/portfolio {version}
      </div>
    </div>
  );
};

export default Resume;
