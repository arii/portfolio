import React from 'react';
import { MapPin, GraduationCap, Award, LucideIcon } from 'lucide-react';
import { MailIcon, LinkedinIcon, GithubIcon, BoomTickIcon, ScholarIcon } from '@/components/SocialIcons';
import { FAQItem } from '@/utils/schema';

export interface ProfileDetail {
  label: string;
  value: string | string[];
  url?: string;
  icon?: LucideIcon;
}

export interface HighlightItem {
  period: string;
  title: string;
  detail: string;
}

export interface ProfileData {
  name: string;
  role: string;
  bio: React.ReactNode[];
  details: ProfileDetail[];
  availability: string;
  highlights: HighlightItem[];
  faqs: FAQItem[];
  socials: { label: string; url: string; icon: React.FC<{ className?: string }> }[];
}

export const profileData: ProfileData = {
  name: "Ariel Anders, PhD",
  role: "Roboticist & Senior Software Engineer",
  bio: [
    React.createElement('span', null,
      "I am an MIT CSAIL roboticist ",
      React.createElement('strong', { className: 'font-bold text-text-main' }, "building reliable autonomous systems"),
      ". My research: learning physics-based models for planning under uncertainty. I bring deep experience across research and industry, from ",
      React.createElement('strong', { className: 'font-bold text-text-main' }, "robot manipulation to social navigation"),
      " in dynamic indoor environments and autonomous driving."
    ),
    React.createElement('span', null,
      "Over the past year I’ve built ",
      React.createElement('strong', { className: 'font-bold text-text-main' }, "stateful, multi-agent workflows for software development"),
      " — AI-assisted engineering that holds code quality and architectural standards, with ",
      React.createElement('strong', { className: 'font-bold text-text-main' }, "robotics-grade reliability"),
      "."
    ),
    React.createElement('span', null,
      "Outside of robotics and AI, you’ll usually find me on the dance floor or exploring San Francisco. I am an active West Coast Swing dancer traveling for regional events — plus improv comedy jams, high-intensity workouts, and chess. I built boomtick.blog from those two worlds: West Coast Swing guides, gear recommendations, and custom merchandise."
    )
  ],
  details: [
    { label: "Location", value: "San Francisco, CA", icon: MapPin },
    {
      label: "Education",
      value: "MIT EECS PhD 2019 · SM 2014",
      icon: GraduationCap
    },
    {
      label: "Honors",
      value: [
        "Robohub's 30 Women in Robotics (2020)",
        "MIT Graduate Women of Excellence (2017)"
      ],
      icon: Award
    }
  ],
  availability: "Open to robotics contracts and DevAI consulting — especially where robotics and AI-assisted engineering overlap.",
  highlights: [
    {
      period: "2012 – 2019",
      title: "MIT CSAIL",
      detail: "Researcher Learning and Intelligent Systems (LIS) group — robot manipulation under sensing/actuation uncertainty."
    },
    {
      period: "2019 – 2022",
      title: "Robust.AI",
      detail: "First roboticist & behavior lead — real-time indoor social navigation."
    },
    {
      period: "2022 – 2024",
      title: "Waymo",
      detail: "Senior SWE, Planning team — onboard motion planning & decision-making."
    },
    {
      period: "2025 – 2026",
      title: "Civ Robotics",
      detail: "Navigation & localization for autonomous forklifts (C++, Python, ROS 2)."
    }
  ],
  faqs: [
    {
      question: 'What types of AI and robotics consulting services do you offer?',
      answer:
        'I provide technical advisory and engineering consulting across autonomous motion planning, ROS 2 navigation architectures, multi-agent AI workflows, developer tooling, and custom agentic infrastructure for tech ventures.',
    },
    {
      question: 'What is your research background in robotics and AI?',
      answer:
        'I earned my PhD and Master of Science from MIT CSAIL in Electrical Engineering and Computer Science, specializing in conformant planning under sensing and actuation uncertainty, whole-arm grasping, and physics-based models.',
    },
    {
      question: 'Are you available for contract, advisory, or full-time roles?',
      answer:
        'Yes, I am available for Staff/Senior SWE roles, specialized robotics engineering contracts, and multi-agent DevAI advisory engagements in the San Francisco Bay Area and remote.',
    },
  ],
  socials: [
    { label: "Email", url: "mailto:anders.ariel@gmail.com", icon: MailIcon },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/ariel-anders/", icon: LinkedinIcon },
    { label: "GitHub", url: "https://github.com/arii", icon: GithubIcon },
    { label: "Google Scholar", url: "https://scholar.google.com/citations?user=NM6SfiEAAAAJ&hl=en", icon: ScholarIcon },
    { label: "BoomTick Blog", url: "https://boomtick.blog", icon: BoomTickIcon }
  ]
};
