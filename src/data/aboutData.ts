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
    { period: "2008 – 2012", title: "UCSC (Computer Engineering, BS)", detail: "Computer Engineering, BS including 2 years of independent research at the Bionics Lab." },
    { period: "2012 – 2020", title: "MIT CSAIL (PhD)", detail: "Computer Science SM and PhD with robotics research on task and motion planning for reliable robotic manipulation under uncertainty." },
    { period: "2019 – 2023", title: "Robust.AI", detail: "First roboticist and behavior team lead; architected indoor navigation autonomy and social navigation for dynamic environments." },
    { period: "2022 – 2024", title: "Waymo", detail: "Behavior systems and motion planning algorithms on the motion generation platform team, focused on reducing congestion during pickups and drop-offs." },
    { period: "2025 – 2026", title: "Civ Robotics", detail: "Robotics software, navigation, and localization for autonomous forklifts." },
    { period: "2026 – Present", title: "DevAI", detail: "AI-assisted developer infrastructure, agentic CI/CD pipelines, and independent projects like boomtick.blog." }
  ],
  socials: [
    { label: "Email", url: "mailto:anders.ariel@gmail.com", icon: MailIcon },
    { label: "LinkedIn", url: "https://linkedin.com/in/arielanders", icon: LinkedinIcon },
    { label: "GitHub", url: "https://github.com/arii", icon: GithubIcon }
  ]
};
