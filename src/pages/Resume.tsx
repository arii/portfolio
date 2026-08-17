import React from 'react';
import { FileText, Briefcase, Code, FolderGit2, GraduationCap } from 'lucide-react';

export interface ResumeProps {
  version?: string;
}

const Resume: React.FC<ResumeProps> = ({ version = 'v2.1' }) => {
  return (
    <div className="space-y-8 max-w-4xl">
      <header className="space-y-4 border-b border-border/60 pb-8">
        <div className="inline-flex items-center space-x-2 bg-secondary border border-border px-3 py-1 rounded-full text-xs text-foreground font-semibold uppercase tracking-wider">
          <span>Interactive Resume</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-foreground leading-none">
          Professional Resume
        </h1>
        <p className="text-muted-foreground max-w-2xl text-base leading-relaxed">
          Migrating from arii.github.io ({version})
        </p>
      </header>

      <div className="border border-border bg-card rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm">
        <h2 className="text-xl font-bold text-foreground flex items-center space-x-2 border-b border-border/40 pb-4">
          <FileText className="h-5 w-5 text-primary" />
          <span>Pending Resume Integration (Issue 2.1)</span>
        </h2>
        <p className="text-muted-foreground text-sm leading-relaxed">
          The personal resume data and chronology migrated from <span className="text-foreground font-mono bg-secondary px-1.5 py-0.5 rounded text-xs border border-border">arii.github.io</span> will be hosted here. It will provide an interactive showcase of experience, skills, projects, and impact.
        </p>

        <div className="space-y-6 pt-4">
          <h3 className="text-xs font-semibold text-primary uppercase tracking-widest flex items-center space-x-2">
            <span className="h-1 w-1 bg-primary rounded-full"></span>
            <span>Expected Resume Structure</span>
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-background/50 p-4 rounded-xl border border-border space-y-2">
              <h4 className="font-bold text-foreground text-sm flex items-center space-x-2">
                <Briefcase className="h-4 w-4 text-muted-foreground" />
                <span>Work Experience</span>
              </h4>
              <p className="text-xs text-muted-foreground leading-relaxed">Full chronology of professional software development and system architecture roles.</p>
            </div>
            <div className="bg-background/50 p-4 rounded-xl border border-border space-y-2">
              <h4 className="font-bold text-foreground text-sm flex items-center space-x-2">
                <Code className="h-4 w-4 text-muted-foreground" />
                <span>Technical Skills</span>
              </h4>
              <p className="text-xs text-muted-foreground leading-relaxed">Interactive expertise categorization (Languages, Frameworks, Cloud, Tooling).</p>
            </div>
            <div className="bg-background/50 p-4 rounded-xl border border-border space-y-2">
              <h4 className="font-bold text-foreground text-sm flex items-center space-x-2">
                <FolderGit2 className="h-4 w-4 text-muted-foreground" />
                <span>Key Projects</span>
              </h4>
              <p className="text-xs text-muted-foreground leading-relaxed">Selected open source or commercial highlights illustrating business and technical value.</p>
            </div>
            <div className="bg-background/50 p-4 rounded-xl border border-border space-y-2">
              <h4 className="font-bold text-foreground text-sm flex items-center space-x-2">
                <GraduationCap className="h-4 w-4 text-muted-foreground" />
                <span>Education &amp; Certs</span>
              </h4>
              <p className="text-xs text-muted-foreground leading-relaxed">Academic credentials, professional certifications, and continuing education logs.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
