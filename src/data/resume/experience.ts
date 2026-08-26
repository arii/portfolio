import { ResumeExperience } from './types';

export const experienceData: ResumeExperience[] = [
  {
    title: "Senior Algorithms Developer",
    company: "Civ Robotics",
    period: "Sept 2025 - April 2026",
    link: "https://www.civrobotics.com/",
    points: [
      "Developing core navigation and localization software for autonomous forklifts using C++, Python, and ROS 2.",
      "Built and optimized IMU drivers and GPS filtering; implemented tilt-compensation logic to refine pose estimation.",
      "Led root-cause analysis for critical localization drift, increasing fleet uptime significantly.",
      "Enhanced CI/CD pipeline with python linting and authored AWS IoT certificate tools for containerized robotics software."
    ]
  },
  {
    title: "Independent AI Engineering & Research",
    company: "Autonomous Fitness Ecosystem & AI DevOps Pipeline",
    period: "Jan 2025 – present",
    link: "https://github.com/arii/hrm",
    description: "Dedicated research & development period focused on agentic AI pipelines and telemetry infrastructure.",
    points: [
      "Real-Time Telemetry: Built Web Bluetooth & WebSocket pipelines streaming live sensor data to multi-client dashboards.",
      "Agentic CI/CD: Architected automated PR review agents using RAG on Gemini to generate verified patches.",
      "Contextual Intelligence: Engineered RAG systems to inject project docs and CI logs into AI prompts for targeted code reviews.",
      "Technical Debt Management: Implemented automated extraction of technical debt into actionable GitHub issues."
    ]
  },
  {
    title: "Senior Software Engineer",
    company: "Waymo",
    period: "Nov 2022 – Dec 2024",
    link: "https://waymo.com/",
    description: "Roboticist in the Planning team, developing onboard motion planning and decision-making software for safe self-driving technology.",
    points: [
      "Focused on improving pullover performance, decreasing user walking distance and congestion.",
      "Applied software engineering, robotics, and machine learning to build autonomous driving capabilities."
    ]
  },
  {
    title: "Senior Roboticist & Tech Lead",
    company: "Robust.AI",
    period: "July 2019 – Oct 2022",
    link: "https://www.robust.ai/",
    description: "First roboticist hire for building the world's first industrial-grade cognitive engine.",
    subRoles: [
      {
        title: "Senior Roboticist / Tech Lead",
        period: "May 2021 – Oct 2022",
        points: [
          "Tech lead for redesigning major architectural components for navigation spanning behavior, perception, and localization.",
          "Integrated new hardware components into software frameworks and created novel behaviors.",
          "Wrote production-quality software, tests, and documentation."
        ]
      },
      {
        title: "Roboticist",
        period: "July 2019 – May 2021",
        points: [
          "Developed robust real-time robot behaviors for indoor navigation in dynamic environments with contextual awareness.",
          "Led social navigation work that helped secure Series A funding.",
          "Established and executed testing procedures for robot navigation."
        ]
      }
    ]
  },
  {
    title: "Researcher",
    company: "Learning and Intelligent Systems, CSAIL MIT",
    period: "2012 – 2019",
    link: "https://www.csail.mit.edu/",
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
    link: "https://www.intel.com/",
    points: [
      "Designed and documented design automation software using machine learning techniques.",
      "Determined proper and efficient simulation points for future Intel Architecture based products."
    ]
  },
  {
    title: "Researcher",
    company: "Bionics Lab, UC Santa Cruz",
    period: "2010 – 2012",
    link: "https://bionics.soe.ucsc.edu/",
    description: "Advised by Jacob Rosen.",
    points: [
      "Research focus: CAD/CAM applications in dentistry and autonomous control with mechanical systems.",
      "Developed UI for robotic programs and a workflow for dental crowning procedures verified experimentally."
    ]
  }
];
