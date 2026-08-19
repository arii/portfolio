import { autonomousTools } from './research/autonomousTools';
import { flagshipTools } from './research/flagshipTools';
import { ResearchTool } from '@/types/research';

export const RESEARCH_PROJECTS: ResearchTool[] = [
  ...flagshipTools.filter(t => t.id === 'phd-thesis'),
  ...autonomousTools
];

export const RESEARCH_THESIS = flagshipTools.filter(t => t.id === 'phd-thesis');
export const RESEARCH_AUTONOMOUS = autonomousTools;
