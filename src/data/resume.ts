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

export const resumeData: ResumeData = {
  name: 'Ariel Anders, PhD',
  title: 'Senior Roboticist & DevAI Infrastructure Engineer',
  summary:
    'MIT PhD and former senior engineer at Waymo and Robust.AI. Specialized in autonomous navigation, motion planning, ROS/ROS2 systems, and agentic AI developer workflows.',
  experience: [
    {
      company: 'Waymo',
      role: 'Senior Robotics Engineer',
      period: '2021 – Present',
      location: 'San Francisco, CA',
      highlights: [
        'Developed core behavior and motion planning algorithms for autonomous vehicles operating in dense urban environments.',
        'Engineered high-reliability C++ and Python simulation and validation pipelines processing millions of daily simulated miles.',
        'Architected distributed telemetry analysis tools to accelerate autonomous vehicle issue triage.',
      ],
    },
    {
      company: 'Robust.AI',
      role: 'Senior Robotics Software Engineer',
      period: '2018 – 2021',
      location: 'San Carlos, CA',
      highlights: [
        'Led ROS2 navigation stack and fleet orchestration development for collaborative industrial mobile robots.',
        'Designed real-time perception and obstacle avoidance routines for dynamic warehouse operations.',
        'Standardized containerized CI/CD build and release workflows across hardware and software engineering teams.',
      ],
    },
    {
      company: 'MIT Computer Science and Artificial Intelligence Laboratory (CSAIL)',
      role: 'Doctoral Researcher',
      period: '2012 – 2018',
      location: 'Cambridge, MA',
      highlights: [
        'Researched autonomous robotic manipulation, motion planning, and human-robot interaction in the Learning and Intelligent Systems Group.',
        'Authored and presented peer-reviewed publications in premier international robotics conferences (ICRA, IROS).',
        'Built open-source manipulation frameworks integrating tactile sensing and real-time vision loops.',
      ],
    },
  ],
  education: [
    {
      institution: 'Massachusetts Institute of Technology (MIT)',
      degree: 'Ph.D. in Computer Science & Artificial Intelligence',
      period: '2012 – 2018',
      location: 'Cambridge, MA',
      details: [
        'Dissertation on integrated planning and perception for robotic manipulation under uncertainty.',
        'Advised by Prof. Leslie Kaelbling and Prof. Tomás Lozano-Pérez.',
      ],
    },
    {
      institution: 'Massachusetts Institute of Technology (MIT)',
      degree: 'M.S. in Computer Science & Electrical Engineering',
      period: '2012 – 2014',
      location: 'Cambridge, MA',
    },
    {
      institution: 'Western Washington University',
      degree: 'B.S. in Computer Science (Magna Cum Laude)',
      period: '2008 – 2012',
      location: 'Bellingham, WA',
    },
  ],
  projects: [
    {
      title: 'BoomTick / BoomTick AI',
      description:
        'Containerized impact analysis and agentic AI code review orchestration framework.',
      techStack: ['TypeScript', 'Docker', 'GitHub Actions', 'LangChain', 'Gemini API'],
      link: 'https://github.com/arii/boomtick',
    },
    {
      title: 'RepoAuditor & Hierarchical Reasoning Manager (HRM)',
      description:
        'Autonomous repository auditor and hierarchical agent manager for multi-agent software engineering.',
      techStack: ['Python', 'React', 'Tailwind CSS', 'Vite', 'OpenAI API'],
      link: 'https://github.com/arii/portfolio',
    },
    {
      title: 'ROS2 Mobile Navigation & Fleet Suite',
      description:
        'Open-source motion planning and fleet orchestration modules tailored for autonomous mobile manipulators.',
      techStack: ['C++17', 'Python', 'ROS2', 'Gazebo', 'Docker'],
    },
  ],
  skills: [
    'Robotics & Motion Planning',
    'ROS / ROS2',
    'C++17 / C++20',
    'Python',
    'TypeScript',
    'React',
    'Agentic AI Workflows',
    'Docker & Containerization',
    'GitHub Actions / CI/CD',
    'Tailwind CSS',
    'PyTorch & ML Tooling',
    'Gazebo & Simulation',
  ],
};
