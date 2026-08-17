import React from 'react';
import { Printer, MapPin, Mail } from 'lucide-react';
import { resumeData, ResumeData } from '@/data/resume';
import ExperienceSection from '@/components/resume/ExperienceSection';
import EducationSection from '@/components/resume/EducationSection';
import ProjectsSection from '@/components/resume/ProjectsSection';
import SkillsSection from '@/components/resume/SkillsSection';

const LinkedinIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GithubIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

export interface ResumePageProps {
  data?: ResumeData;
  version?: string;
}

export const ResumePage: React.FC<ResumePageProps> = ({
  data = resumeData,
  version = 'v2.1',
}) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-10 max-w-4xl mx-auto print:space-y-6 print:max-w-none print:m-0">
      {/* Header Banner */}
      <header className="space-y-4 border-b border-border/60 pb-8 print:border-line print:pb-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center space-x-2 bg-secondary border border-border px-3 py-1 rounded-full text-xs text-foreground font-semibold uppercase tracking-wider print:hidden">
              <span>Interactive Resume {version}</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-foreground leading-none print:text-3xl print:text-black">
              {data.name}
            </h1>
            <p className="text-lg font-bold text-primary print:text-base print:text-black">
              {data.title}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 print:hidden">
            <button
              onClick={handlePrint}
              className="inline-flex items-center space-x-2 bg-primary text-primary-foreground font-bold text-sm px-4 py-2.5 rounded-xl hover:opacity-90 transition-opacity shadow-sm cursor-pointer"
            >
              <Printer className="h-4 w-4" />
              <span>Print / Export PDF</span>
            </button>
          </div>
        </div>

        {/* Contact Strip */}
        <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-muted-foreground pt-2 print:text-black">
          <span className="flex items-center space-x-1">
            <MapPin className="h-3.5 w-3.5 text-primary print:hidden" />
            <span>San Francisco, CA</span>
          </span>
          <a
            href="mailto:anders.ariel@gmail.com"
            className="flex items-center space-x-1 hover:text-foreground transition-colors"
          >
            <Mail className="h-3.5 w-3.5 text-primary print:hidden" />
            <span>anders.ariel@gmail.com</span>
          </a>
          <a
            href="https://linkedin.com/in/arielanders"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1 hover:text-foreground transition-colors"
          >
            <LinkedinIcon className="h-3.5 w-3.5 text-primary print:hidden" />
            <span>linkedin.com/in/arielanders</span>
          </a>
          <a
            href="https://github.com/arii"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1 hover:text-foreground transition-colors"
          >
            <GithubIcon className="h-3.5 w-3.5 text-primary print:hidden" />
            <span>github.com/arii</span>
          </a>
        </div>
      </header>

      {/* Professional Summary */}
      <section className="border border-border bg-card p-6 sm:p-8 rounded-2xl space-y-3 shadow-sm print:border-line print:bg-white print:p-4">
        <h2 className="text-xs font-semibold text-primary uppercase tracking-widest flex items-center space-x-2">
          <span className="h-1.5 w-1.5 bg-primary rounded-full print:hidden"></span>
          <span>Executive Summary</span>
        </h2>
        <p className="text-muted-foreground text-sm sm:text-base leading-relaxed print:text-black">
          {data.summary}
        </p>
      </section>

      {/* Sections */}
      <ExperienceSection experience={data.experience} />
      <EducationSection education={data.education} />
      <ProjectsSection projects={data.projects} />
      <SkillsSection skills={data.skills} />
    </div>
  );
};

export default ResumePage;
