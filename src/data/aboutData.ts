import React from 'react';
import { MapPin, GraduationCap, Award, LucideIcon } from 'lucide-react';
import { MailIcon, LinkedinIcon, GithubIcon, BoomTickIcon, ScholarIcon } from '@/components/SocialIcons';

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
  socials: { label: string; url: string; icon: React.FC<{ className?: string }> }[];
}

export const profileData: ProfileData = {
  name: "Ariel Anders",
  role: "Roboticist & Senior Software Engineer",
  bio: [
    React.createElement('span', null,
      "I am an MIT CSAIL roboticist whose work focuses on ",
      React.createElement('strong', { className: 'font-bold text-text-main' }, "building reliable autonomous systems"),
      ". My research focused on learning physics-based models for planning under uncertainty.  I bring deep experience across research and industry, from ",
      React.createElement('strong', { className: 'font-bold text-text-main' }, "robot manipulation to social navigation"),
      " in dynamic indoor environments and autonomous driving."
    ),
    React.createElement('span', null,
      "Over the past year, I’ve built ",
      React.createElement('strong', { className: 'font-bold text-text-main' }, "stateful, multi-agent workflows for software development"),
      ", using AI to engineer feature-rich applications while maintaining code quality and architectural standards, bringing ",
      React.createElement('strong', { className: 'font-bold text-text-main' }, "robotics-grade reliability to AI-assisted engineering"),
      "."
    ),
    React.createElement('span', null,
      "Outside of robotics and AI, you’ll usually find me on the dance floor or exploring San Francisco. I am an active West Coast Swing dancer who travels for regional events, perform in improv comedy jams, stay fit with high-intensity workouts, and love a good game of chess. Recently, I combined my technical background with these creative outlets to build boomtick.blog, a lifestyle and community platform featuring West Coast Swing guides, gear recommendations, and custom merchandise."
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
    { label: "GitHub", url: "https://github.com/arii", icon: GithubIcon },
    { label: "Google Scholar", url: "https://scholar.google.com/citations?user=NM6SfiEAAAAJ&hl=en", icon: ScholarIcon },
    { label: "BoomTick Blog", url: "https://boomtick.blog", icon: BoomTickIcon }
  ]
};
