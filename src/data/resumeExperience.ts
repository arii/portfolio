import { ResumeExperience } from './resumeTypes';

export const resumeExperience: ResumeExperience[] = [
  {
    company: 'Civ Robotics',
    role: 'Senior Algorithms Developer',
    period: 'Sept 2025 – April 2026',
    highlights: [
      'Developing core navigation and localization software for autonomous forklifts using C++, Python, and ROS 2.',
      'Built and optimized IMU drivers and GPS filtering; implemented tilt-compensation logic to refine pose estimation.',
      'Led root-cause analysis for critical localization drift, increasing fleet uptime significantly.',
      'Enhanced CI/CD pipeline with python linting and authored AWS IoT certificate tools for containerized robotics software.',
    ],
  },
  {
    company: 'Project: Autonomous Fitness Ecosystem & AI DevOps Pipeline',
    role: 'Independent AI Engineering & Research',
    period: 'Jan 2025 – Aug 2025',
    highlights: [
      'Real-time Core: Developed a fitness monitoring dashboard synchronizing live heart rate data from Bluetooth devices via WebSockets.',
      'AI Engineering Teammate: Architected automated CI/CD pipeline where Gemini AI performs code reviews, triages issues, and generates diffs.',
      'Contextual Intelligence: Engineered RAG system to inject documentation, architecture guidelines, and CI logs into AI prompts.',
      'Technical Debt Management: Implemented proactive extraction of technical debt into actionable GitHub issues via GitHub Actions.',
    ],
  },
  {
    company: 'Waymo',
    role: 'Senior Software Engineer',
    period: 'Nov 2022 – Dec 2024',
    location: 'San Francisco, CA',
    highlights: [
      'Roboticist in Planning team, developing onboard motion planning and decision-making software for safe self-driving technology.',
      'Focused on improving pullover performance, decreasing user walking distance and congestion.',
      'Utilized software engineering, robotics, and machine learning to build autonomous driving capabilities.',
    ],
  },
  {
    company: 'Robust.AI',
    role: 'Senior Roboticist',
    period: 'May 2021 – Oct 2022',
    location: 'San Carlos, CA',
    highlights: [
      'Joined as first roboticist hire to help build the world\'s first industrial-grade cognitive engine.',
      'Tech lead for redesigning major architectural components for navigation spanning behavior, perception, and localization.',
      'Integrated new hardware components into software frameworks and created novel behaviors.',
    ],
  },
  {
    company: 'Robust.AI',
    role: 'Roboticist',
    period: 'July 2019 – May 2021',
    location: 'San Carlos, CA',
    highlights: [
      'Developed robust real-time robot behaviors for indoor navigation in dynamic environments with contextual awareness.',
      'Led social navigation work pivotal in raising Series A funding.',
      'Established and executed testing procedures for robot navigation.',
    ],
  },
  {
    company: 'Learning and Intelligent Systems, CSAIL MIT',
    role: 'Researcher',
    period: '2012 – 2019',
    location: 'Cambridge, MA',
    highlights: [
      'Advised by Leslie P. Kaelbling and Tomas Lozano-Perez.',
      'Robot manipulation for household helpers under considerable uncertainty due to inaccurate sensing and imperfect actuation.',
      'Programmed Willow Garage PR2 robot using ROS, Python, and C++. Developed scalable planar manipulation methods.',
    ],
  },
  {
    company: 'Intel Corporation',
    role: 'Graduate Software Engineer Intern',
    period: 'Summer 2014',
    highlights: [
      'Designed and documented design automation software using machine learning techniques.',
      'Determined proper and efficient simulation points for future Intel Architecture based products.',
    ],
  },
  {
    company: 'Bionics Lab, UC Santa Cruz',
    role: 'Researcher',
    period: '2010 – 2012',
    location: 'Santa Cruz, CA',
    highlights: [
      'Advised by Jacob Rosen. Research focus on CAD/CAM applications in dentistry and autonomous control with mechanical systems.',
      'Developed UI for robotic programs and a workflow for dental crowning procedures verified experimentally.',
    ],
  },
];
