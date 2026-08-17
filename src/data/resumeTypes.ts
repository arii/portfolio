export interface ResumeExperience {
  company: string;
  role: string;
  period: string;
  location?: string;
  highlights: string[];
}

export interface ResumeEducation {
  institution: string;
  degree: string;
  period: string;
  location?: string;
  details?: string[];
}

export interface ResumeProject {
  title: string;
  description: string;
  techStack: string[];
  link?: string;
}

export interface ResumeData {
  name: string;
  title: string;
  summary: string;
  experience: ResumeExperience[];
  education: ResumeEducation[];
  projects: ResumeProject[];
  skills: string[];
}
