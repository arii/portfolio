import { autonomousTools } from './research/autonomousTools';
import { flagshipTools } from './research/flagshipTools';
import { ResearchTool } from '@/types/research';

export const RESEARCH_PROJECTS: ResearchTool[] = [
  ...flagshipTools.filter(t => ['phd-thesis', 'masters-thesis'].includes(t.id)),
  ...autonomousTools
];

export const RESEARCH_THESIS = flagshipTools.filter(t => ['phd-thesis', 'masters-thesis'].includes(t.id));
export const RESEARCH_AUTONOMOUS = autonomousTools;
