import React, { useState } from 'react';
import { resumeData } from '@/data/resume';
import { ResumeHeader } from '@/components/resume/ResumeHeader';
import { ExperienceSection } from '@/components/resume/ExperienceSection';
import { EducationSection } from '@/components/resume/EducationSection';
import { ProjectsSection } from '@/components/resume/ProjectsSection';
import { SkillsSection } from '@/components/resume/SkillsSection';
import { HonorsSection } from '@/components/resume/HonorsSection';
import { TeachingSection } from '@/components/resume/TeachingSection';
import { PublicationsSection } from '@/components/resume/PublicationsSection';

export interface ResumeProps {
  version?: string;
}

const Resume: React.FC<ResumeProps> = ({ version = 'v2.1' }) => {
  const [layoutMode, setLayoutMode] = useState<'split' | 'full'>('split');

  return (
    <div className="max-w-6xl mx-auto space-y-10 pb-16 print:space-y-6 print:pb-0 print:max-w-none">
      <ResumeHeader
        pdfUrl="https://drive.google.com/file/d/14V6KjfEMO12uwNQAhY1OMy2d-_vkGXK_/view"
        layoutMode={layoutMode}
        onLayoutModeChange={setLayoutMode}
      />

      {layoutMode === 'full' ? (
        <div className="space-y-12 print:space-y-6">
          {/* Full-width Experience Section */}
          <ExperienceSection experiences={resumeData.experience} />

          {/* Secondary sections grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 print:block print:gap-0 space-y-6 md:space-y-0">
            <div className="space-y-8">
              <SkillsSection skills={resumeData.skills} />
              <ProjectsSection projects={resumeData.projects} />
            </div>
            <div className="space-y-8">
              <EducationSection education={resumeData.education} />
              <TeachingSection teaching={resumeData.teaching} />
            </div>
            <div className="space-y-8 md:col-span-2 lg:col-span-1">
              <PublicationsSection
                publications={resumeData.publications}
                scholarUrl={resumeData.scholarUrl}
              />
              <HonorsSection honors={resumeData.honors} />
            </div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 print:block print:gap-0">
          {/* Left Column: Primary Experience Track */}
          <div className="lg:col-span-7 print:col-span-12 space-y-10 print:space-y-6">
            <ExperienceSection experiences={resumeData.experience} />
          </div>

          {/* Right Sidebar: Skills, Projects, Education, Publications, Teaching & Honors */}
          <div className="lg:col-span-5 print:col-span-12 space-y-10 print:space-y-6">
            <SkillsSection skills={resumeData.skills} />
            <ProjectsSection projects={resumeData.projects} />
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

      <div className="hidden print:block text-center pt-8 text-xs text-text-dim font-mono">
        Portfolio generated from arii/portfolio {version}
      </div>
    </div>
  );
};

export default Resume;
