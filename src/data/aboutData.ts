import React from 'react';
import { MapPin, GraduationCap, Award, LucideIcon } from 'lucide-react';
import { MailIcon, LinkedinIcon, GithubIcon } from '@/components/SocialIcons';

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
  bio: string[];
  details: ProfileDetail[];
  availability: string;
  highlights: HighlightItem[];
  socials: { label: string; url: string; icon: React.FC<{ className?: string }> }[];
}

export const profileData: ProfileData = {
  name: "Ariel Anders, PhD",
  role: "Senior roboticist · DevAI engineer",
  bio: [
    "I'm an MIT PhD roboticist and senior software engineer with deep expertise in AI, motion planning, and autonomous systems. Most recently, I've been applying robotics-grade software rigor to autonomous AI engineering agents, agentic CI/CD pipelines, and developer infrastructure.",
    "Outside of robotics and AI, you’ll usually find me on the dance floor or in a theater. I am an active West Coast Swing dancer who travels for regional events, and I practice improv comedy. Recently, I combined my technical background with these creative outlets to build boomtick.blog, a lifestyle and community platform featuring West Coast Swing guides, gear recommendations, and custom merchandise."
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
  availability: "Open to Staff/Senior SWE roles, robotics contracts, and DevAI consulting — especially where robotics and AI-assisted engineering overlap.",
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
  socials: [
    { label: "Email", url: "mailto:anders.ariel@gmail.com", icon: MailIcon },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/ariel-anders/", icon: LinkedinIcon },
    { label: "GitHub", url: "https://github.com/arii", icon: GithubIcon }
  ]
};
