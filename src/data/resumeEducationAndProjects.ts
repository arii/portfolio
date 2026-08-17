import { ResumeEducation, ResumeProject } from './resumeTypes';

export const resumeEducation: ResumeEducation[] = [
  {
    institution: 'Massachusetts Institute of Technology (CSAIL)',
    degree: 'PhD & SM in Computer Science and Electrical Engineering',
    period: '2012 – 2019',
    location: 'Cambridge, MA',
    details: [
      'Minor in feedback and control systems with courses from Mechanical and AeroAstro.',
      'Research focused on reliable robotic manipulation under uncertainty. GPA: 4.9/5.0.',
    ],
  },
  {
    institution: 'University of California, Santa Cruz',
    degree: 'BS in Computer Engineering',
    period: '2008 – 2012',
    location: 'Santa Cruz, CA',
    details: [
      'Regents Scholar. Capstone: arithmetic function optimization for Oracle Database using C and SSE instructions. GPA: 3.96/4.0.',
    ],
  },
];

export const resumeProjects: ResumeProject[] = [
  {
    title: 'HRM & AI DevOps Pipeline',
    description:
      'Autonomous fitness dashboard and automated CI/CD pipeline with Gemini AI code reviews and RAG contextual intelligence.',
    techStack: ['Python', 'TypeScript', 'React', 'WebSockets', 'Gemini API', 'GitHub Actions'],
    link: 'https://github.com/arii/hrm',
  },
  {
    title: 'Boop Light Detector',
    description:
      'iOS app detecting light levels with sound interpretation for blind/visually impaired users (6,000+ downloads).',
    techStack: ['iOS', 'Swift', 'Signal Processing', 'Accessibility'],
    link: 'http://arii.github.io/boop/',
  },
  {
    title: 'BoomTick / BoomTick AI',
    description:
      'Containerized impact analysis and agentic AI code review orchestration framework.',
    techStack: ['TypeScript', 'Docker', 'GitHub Actions', 'LangChain'],
    link: 'https://github.com/arii/boomtick',
  },
];

export const resumeSkills: string[] = [
  'ROS 1/2',
  'C++17 / C++20',
  'Python',
  'TypeScript',
  'Motion Planning & TAMP',
  'Social Navigation & Behavior Trees',
  'Docker & AWS IoT',
  'GitHub Actions & CI/CD',
  'Gemini & AI Agentic RAG',
  'WebSockets & React',
  'Control Systems',
  'Linux & Shell (Bash/Zsh)',
];
