export interface ResumeExperience {
  title: string;
  company: string;
  period: string;
  description?: string;
  points?: string[];
  link?: string;
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
}

export interface ResumeSkillCategory {
  category: string;
  skills: string;
}

export interface ResumeData {
  name: string;
  title: string;
  summary: string;
  experience: ResumeExperience[];
  education: ResumeEducation[];
  projects: ResumeProject[];
  skills: ResumeSkillCategory[];
}

export const resumeData: ResumeData = {
  name: "Ariel Anders, PhD",
  title: "Applied AI Engineer & Roboticist",
  summary: "This work focuses on arranging objects into desired configurations using a robot under substantial uncertainty due to inaccurate sensing, control, and imperfect knowledge of physical properties. By using uncertainty-reducing actions like pushing and a conformant planner, I enabled robust assembly in both simulation and real-world experiments.",
  experience: [
    {
      title: "Senior Algorithms Developer",
      company: "Civ Robotics",
      period: "Sept 2025 - April 2026",
      points: [
        "Developing core navigation and localization software for autonomous forklifts using C++, Python, and ROS 2.",
        "Built and optimized IMU drivers and GPS filtering; implemented tilt-compensation logic to refine pose estimation.",
        "Led root-cause analysis for critical localization drift, increasing fleet uptime significantly.",
        "Enhanced CI/CD pipeline with python linting and authored AWS IoT certificate tools for containerized robotics software."
      ]
    },
    {
      title: "Independent AI Engineering & Research",
      company: "Project: Autonomous Fitness Ecosystem & AI DevOps Pipeline",
      period: "Jan 2025 – Aug 2025",
      link: "https://github.com/arii/hrm",
      description: "Dedicated period focused on exploring modern AI tools, RAG systems, and automated DevOps to stay current with emerging technologies and software engineering best practices.",
      points: [
        "Real-time Core: Developed a fitness monitoring dashboard synchronizing live heart rate data from Bluetooth devices to a multi-client web interface via persistent WebSockets; integrated Spotify API and Tabata timers.",
        "AI Engineering Teammate: Architected a fully automated CI/CD pipeline where Gemini AI performs code reviews, triages GitHub issues, and generates code patches as unified diffs.",
        "Contextual Intelligence: Engineered a RAG system to inject project documentation, architecture guidelines, and CI logs into AI prompts, ensuring automated reviews align with project-specific standards.",
        "Technical Debt Management: Implemented proactive extraction of technical debt into actionable GitHub issues orchestrated via GitHub Actions."
      ]
    },
    {
      title: "Senior Software Engineer",
      company: "Waymo",
      period: "Nov 2022 – Dec 2024",
      description: "Roboticist in the Planning team, developing onboard motion planning and decision-making software for safe self-driving technology.",
      points: [
        "Focused on improving pullover performance, decreasing user walking distance and congestion.",
        "Utilized software engineering, robotics, and machine learning to build autonomous driving capabilities."
      ]
    },
    {
      title: "Senior Roboticist",
      company: "Robust.AI",
      period: "May 2021 – Oct 2022",
      link: "https://www.robust.ai/",
      description: "Joined as the first roboticist hire to help build the world's first industrial-grade cognitive engine.",
      points: [
        "Tech lead for redesigning major architectural components for navigation spanning behavior, perception, and localization.",
        "Integrated new hardware components into software frameworks and created novel behaviors.",
        "Wrote production-quality software, tests, and documentation."
      ]
    },
    {
      title: "Roboticist",
      company: "Robust.AI",
      period: "July 2019 – May 2021",
      points: [
        "Developed robust real-time robot behaviors for indoor navigation in dynamic environments with contextual awareness.",
        "Lead social navigation work pivotal in raising Series A funding.",
        "Established and executed testing procedures for robot navigation."
      ]
    },
    {
      title: "Researcher",
      company: "Learning and Intelligent Systems, CSAIL MIT",
      period: "2012 – 2019",
      description: "Advised by Leslie P. Kaelbling and Tomas Lozano-Perez.",
      points: [
        "Research focus: Robot manipulation for household helpers under considerable uncertainty due to inaccurate sensing and imperfect actuation.",
        "Programmed Willow Garage PR2 robot using ROS, Python, and C++.",
        "Developed scalable methods for solving complex planar manipulation problems."
      ]
    },
    {
      title: "Graduate Software Engineer Intern",
      company: "Intel Corporation",
      period: "Summer 2014",
      points: [
        "Designed and documented design automation software using machine learning techniques.",
        "Determined proper and efficient simulation points for future Intel Architecture based products."
      ]
    },
    {
      title: "Researcher",
      company: "Bionics Lab, UC Santa Cruz",
      period: "2010 – 2012",
      description: "Advised by Jacob Rosen.",
      points: [
        "Research focus: CAD/CAM applications in dentistry and autonomous control with mechanical systems.",
        "Developed UI for robotic programs and a workflow for dental crowning procedures verified experimentally."
      ]
    }
  ],
  education: [
    {
      degree: "PhD & SM in Computer Science and Electrical Engineering",
      period: "2012 – 2019",
      institution: "Massachusetts Institute of Technology (CSAIL)",
      details: "Minor in feedback and control systems with courses from Mechanical and AeroAstro.",
      researchFocus: "Focused on reliable robotic manipulation under uncertainty. Aimed to bridge the gap between theoretical AI and practical challenges of deploying helpful robots in complex household environments. GPA: 4.9/5.0"
    },
    {
      degree: "BS in Computer Engineering",
      period: "2008 – 2012",
      institution: "University of California, Santa Cruz",
      details: "Regents Scholar. Capstone: improving performance of arithmetic functions for Oracle Database using C and vectorized hardware instructions (SSE). GPA: 3.96/4.0"
    }
  ],
  projects: [
    {
      title: "Accessible Tech",
      description: "Developed 'Boop Light Detector' iOS app to assist people with vision impairment. Over 6000 downloads."
    },
    {
      title: "Campus Wellness",
      description: "Secured grants to install therapy lamps across MIT campus to combat SAD."
    },
    {
      title: "Lab Sustainability",
      description: "Research on improving laboratory fume hood efficiency and safety feedback."
    }
  ],
  skills: [
    {
      category: "Autonomy",
      skills: "Motion Planning, TAMP, Social Navigation, Behavior Trees, Mobile Manipulation"
    },
    {
      category: "Languages",
      skills: "Python, C++, TypeScript, Matlab, SQL, Shell (Bash/Zsh)"
    },
    {
      category: "Tools & OS",
      skills: "ROS 1/2, Linux, GitHub Actions, Gemini API, Docker, AWS IoT, Unix, Mac, Windows"
    }
  ]
};
