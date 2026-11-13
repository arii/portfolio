import { ResumeExperience } from './types';

export const experienceData: ResumeExperience[] = [
  {
    title: "Principal Roboticist & AI Architect",
    company: "Ariel Anders Consulting",
    period: "Present",
    link: "https://arii.github.io/consulting/",
    points: [
      "Provide technical advisory, autonomy architecture audits (ROS 2 navigation, localization, motion planning), and agentic CI/CD infrastructure for teams shipping autonomous systems."
    ]
  },
  {
    title: "Senior Algorithms Engineer",
    company: "Civ Robotics",
    period: "Sept 2025 – Apr 2026",
    link: "https://www.civrobotics.com/",
    points: [
      "Developed navigation and localization software for autonomous forklifts using C++, Python, and ROS 2, including IMU drivers, GPS filtering, and tilt-compensation for pose estimation.",
      "Diagnosed sensor noise patterns for a critical localization drift issue and deployed a fix that eliminated the drift.",
      "Enhanced the CI/CD pipeline with Python linting checks and authored AWS IoT certificate tools to streamline the deployment of containerized (Docker) robotics software."
    ]
  },
  {
    title: "Selected Robotics & AI Engineering Projects",
    company: "Independent Projects",
    period: "2020 – present",
    description: "Independent robotics prototyping, agentic CI/CD infrastructure, and RAG-grounded developer workflows.",
    points: [
      "Feels (https://arii.github.io/feels): Built a robotic arm proprioception and haptic classification pipeline (Viam, Python, MongoDB) that swirls physical containers and classifies contents from joint-torque signals.",
      "Repo Auditor AI (https://repo-auditor-ai.vercel.app): A standalone DevAI console and multi-agent orchestration pipeline for automated GitHub PR auditing, RAG-grounded code review, and technical debt extraction using Gemini API and GitHub Actions.",
      "BoomTick.blog (https://boomtick.blog): A community platform for West Coast Swing dancers with automated content management, analytics, and SEO-optimized publishing workflows.",
      "HRM Dashboard (https://github.com/arii/hrm): Built real-time Web Bluetooth and WebSocket streaming pipelines to broadcast live heart rate telemetry across multi-client dashboards."
    ]
  },
  {
    title: "Senior Software Engineer",
    company: "Waymo",
    period: "Nov 2022 – Dec 2024",
    link: "https://waymo.com/",
    description: "Roboticist in the Planning team, developing onboard motion planning and decision-making software for safe self-driving technology.",
    points: [
      "Developed onboard motion planning and decision-making software on the Planning team for autonomous pickups, drop-offs, and pullovers.",
      "Improved pullover performance in dense urban environments, decreasing rider walking distance and traffic congestion."
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
          "Led a 5-month architecture redesign of the core navigation stack spanning behavior, perception, and localization teams.",
          "Integrated new hardware sensors into the production software framework and architected novel autonomous behaviors, tests, and documentation.",
          "Behavior Team Lead and managed direct reports."
        ]
      },
      {
        title: "Roboticist",
        period: "July 2019 – May 2021",
        points: [
          "Led the social navigation architecture and execution—from initial project proposal to completion—that was pivotal in raising Series A funding.",
          "Developed real-time indoor navigation behaviors with contextual and social awareness for dynamic human environments, establishing end-to-end testing procedures."
        ]
      }
    ]
  },
  {
    title: "Researcher",
    company: "Learning and Intelligent Systems, CSAIL MIT",
    period: "2012 – 2019",
    link: "https://www.csail.mit.edu/",
    description: "Advised by Leslie P. Kaelbling and Tomás Lozano-Pérez.",
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
