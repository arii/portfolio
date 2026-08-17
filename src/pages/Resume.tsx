import React from 'react';
import { Download } from 'lucide-react';
import { resumeData } from '@/data/resume';
import { ExperienceSection } from '@/components/resume/ExperienceSection';
import { EducationSection } from '@/components/resume/EducationSection';
import { ProjectsSection } from '@/components/resume/ProjectsSection';
import { SkillsSection } from '@/components/resume/SkillsSection';

export interface ResumeProps {
  version?: string;
}

const Resume: React.FC<ResumeProps> = ({ version = 'v2.1' }) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-4xl mx-auto space-y-12 pb-16 print:space-y-6 print:pb-0 print:max-w-none">
      <header className="space-y-4 border-b border-border/60 pb-8 print:border-b-2 print:border-black print:pb-6 flex flex-col md:flex-row md:justify-between md:items-end">
        <div>
          <div className="inline-flex items-center space-x-2 bg-secondary border border-border px-3 py-1 rounded-full text-xs text-foreground font-semibold uppercase tracking-wider print:hidden mb-4">
            <span>Interactive Resume</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-foreground leading-none print:text-black">
            {resumeData.name}
          </h1>
          <p className="text-xl text-primary font-bold tracking-tight mt-2 print:text-gray-800">
            {resumeData.title}
          </p>
          <p className="text-muted-foreground max-w-2xl text-sm leading-relaxed mt-4 print:text-black print:mt-3">
            {resumeData.summary}
          </p>
        </div>

        <div className="mt-6 md:mt-0 print:hidden">
          <button
            onClick={handlePrint}
            className="flex items-center space-x-2 bg-foreground text-background hover:bg-foreground/90 transition-colors px-4 py-2 rounded-lg text-sm font-semibold"
          >
            <Download className="w-4 h-4" />
            <span>Export PDF</span>
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 print:block print:gap-0">
        <div className="lg:col-span-8 print:col-span-12">
          <ExperienceSection experiences={resumeData.experience} />
          <EducationSection education={resumeData.education} />
        </div>

        <div className="lg:col-span-4 print:col-span-12">
          <SkillsSection skills={resumeData.skills} />
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
