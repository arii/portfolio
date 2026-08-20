export interface ResumeSubRole {
  title: string;
  period: string;
  points: string[];
}

export interface ResumeExperience {
  title: string;
  company: string;
  period: string;
  link?: string;
  description?: string;
  points?: string[];
  subRoles?: ResumeSubRole[];
}

export interface ResumeEducation {
  degree: string;
  period: string;
  institution: string;
  details?: string;
  researchFocus?: string;
}

export interface ResumeProject {
  title: string;
  description: string;
  link?: string;
  metric?: string;
  techStack?: string[];
}

export interface ResumeSkillGroup {
  category: string;
  skills: string[];
}

export type ResumeSkillCategory = {
  category: string;
  skills: string | string[];
};

export interface ResumeHonor {
  title: string;
  year: string;
  organization?: string;
  details?: string;
  link?: string;
}

export interface ResumeTeaching {
  title: string;
  period: string;
  details: string;
}

export interface ResumePublication {
  id: string;
  title: string;
  type: string;
  year: string;
  authors?: string[];
  venue?: string;
  link?: string;
  category?: 'dissertation' | 'journal_conference' | 'symposium_other';
}

export interface ResumeSocialLink {
  label: string;
  url: string;
  type: 'scholar' | 'mail' | 'linkedin' | 'github';
}

export interface ResumeData {
  name: string;
  title: string;
  summary: string;
  socials: ResumeSocialLink[];
  experience: ResumeExperience[];
  education: ResumeEducation[];
  projects: ResumeProject[];
  skills: ResumeSkillGroup[];
  honors: ResumeHonor[];
  teaching: ResumeTeaching[];
  publications: ResumePublication[];
  scholarUrl: string;
}
