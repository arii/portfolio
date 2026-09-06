import { Activity, Layers, FileText, User, LucideIcon } from 'lucide-react';

export interface NavItem {
  name: string;
  path: string;
  icon?: LucideIcon;
}

export const NAV_ITEMS: NavItem[] = [
  { name: 'Overview', path: '/', icon: Activity },
  { name: 'DevAI', path: '/devai', icon: Layers },
  { name: 'Research', path: '/research', icon: Layers },
  { name: 'Resume', path: '/resume', icon: FileText },
  { name: 'About Ariel', path: '/about', icon: User },
];
