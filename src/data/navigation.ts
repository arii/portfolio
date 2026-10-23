import { Activity, Briefcase, Layers, FileText, User, LucideIcon } from 'lucide-react';

export interface NavItem {
  name: string;
  path: string;
  icon?: LucideIcon;
  stubLabel?: string;
}

export const NAV_ITEMS: NavItem[] = [
  { name: 'Overview', path: '/', icon: Activity },
  { name: 'Consulting', path: '/consulting/', icon: Briefcase, stubLabel: 'Work With Me — Robotics Consulting' },
  { name: 'DevAI', path: '/devai/', icon: Layers, stubLabel: 'View Agentic DevAI Work' },
  { name: 'Research', path: '/research/', icon: Layers, stubLabel: 'View Robotics Research' },
  { name: 'Resume', path: '/resume/', icon: FileText, stubLabel: 'View Full Resume' },
  { name: 'About Ariel', path: '/about/', icon: User, stubLabel: 'About Ariel' },
];
