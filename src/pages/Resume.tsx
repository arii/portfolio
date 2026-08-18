import React from 'react';
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
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-5xl mx-auto space-y-10 pb-16 print:space-y-6 print:pb-0 print:max-w-none">
      <ResumeHeader
        name={resumeData.name}
        title={resumeData.title}
        summary={resumeData.summary}
        socials={resumeData.socials}
        onPrint={handlePrint}
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 print:block print:gap-0">
        {/* Left Column: Experience Timeline Solo */}
        <div className="lg:col-span-7 print:col-span-12">
          <ExperienceSection experiences={resumeData.experience} />
        </div>

        {/* Right Sidebar: Skills, Education, Publications, Honors, Teaching, Impact Projects */}
        <div className="lg:col-span-5 print:col-span-12 space-y-10 print:space-y-6">
          <SkillsSection skills={resumeData.skills} />
          <EducationSection education={resumeData.education} />
          <PublicationsSection
            publications={resumeData.publications}
            scholarUrl={resumeData.scholarUrl}
          />
          <HonorsSection honors={resumeData.honors} />
          <TeachingSection teaching={resumeData.teaching} />
          <ProjectsSection projects={resumeData.projects} />
        </div>
      </div>

      <div className="hidden print:block text-center pt-8 text-xs text-gray-500 font-mono">
        Portfolio generated from arii/portfolio {version}
      </div>
    </div>
  );
};

export default Resume;
