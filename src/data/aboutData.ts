import React from 'react';
import { MapPin, Globe, Briefcase, GraduationCap, Award, LucideIcon } from 'lucide-react';
import { MailIcon, LinkedinIcon, GithubIcon } from '@/components/SocialIcons';

export interface ProfileDetail {
  label: string;
  value: string;
  url?: string;
  icon: LucideIcon;
}

export interface HighlightItem {
  period: string;
  title: string;
  detail: string;
}

export interface ProfileData {
  name: string;
  role: string;
  bio: string;
  details: ProfileDetail[];
  availability: string;
  highlights: HighlightItem[];
  exploring: string[];
  socials: { label: string; url: string; icon: React.FC<{ className?: string }> }[];
}

export const profileData: ProfileData = {
  name: "Ariel Anders, PhD",
  role: "Senior roboticist · DevAI engineer",
  bio: "I'm an MIT PhD and former senior engineer at Waymo and Robust.AI. My background is in robotics—specifically navigation, motion planning, and behavior systems. Across my career at MIT CSAIL, Robust.AI, Waymo, and Civ Robotics, I've focused on bridging complex algorithmic reasoning with robust production software. Currently, I am applying robotics-grade software rigor to autonomous AI engineering agents and developer infrastructure.",
  details: [
    { label: "Location", value: "San Francisco, CA", icon: MapPin },
    { label: "PhD Focus", value: "Advised by Leslie Kaelbling & Tomas Lozano-Perez", icon: GraduationCap },
    { label: "Portfolio", value: "View Portfolio", url: "#/research", icon: Globe },
    { label: "Resume", value: "View Resume", url: "#/resume", icon: Briefcase },
    { label: "Publications", value: "View full publications & experience →", url: "#/resume", icon: Award }
  ],
  availability: "Open to Staff/Senior SWE roles, robotics contracts, and DevAI consulting — especially where robotics and AI-assisted engineering overlap.",
  highlights: [
    { period: "2014 – 2020", title: "MIT CSAIL (PhD)", detail: "Integrated task and motion planning for reliable robotic manipulation under uncertainty." },
    { period: "2020 – 2021", title: "Waymo", detail: "Behavior systems and motion planning algorithms for autonomous vehicle fleets." },
    { period: "2021 – 2023", title: "Robust.AI", detail: "Software architecture and navigation autonomy for collaborative industrial mobile robots." },
    { period: "2023 – Present", title: "Civ Robotics & DevAI", detail: "Field robotics software and AI-accelerated developer infrastructure automation." }
  ],
  exploring: ["Agentic Workflows", "Motion Planning", "CI/CD Autonomy", "Software Rigor", "Field Robotics"],
  socials: [
    { label: "Email", url: "mailto:anders.ariel@gmail.com", icon: MailIcon },
    { label: "LinkedIn", url: "https://linkedin.com/in/arielanders", icon: LinkedinIcon },
    { label: "GitHub", url: "https://github.com/arii", icon: GithubIcon }
  ]
};
