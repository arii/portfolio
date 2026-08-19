import { flagshipTools } from './research/flagshipTools';
import { systemTools } from './research/systemTools';
import { ResearchTool } from '@/types/research';

export const DEVAI_PROJECTS: ResearchTool[] = [
  ...flagshipTools.filter(t => ['hrm-flagship', 'repo-auditor-ai', 'boomtick-blog'].includes(t.id)),
  ...systemTools
];

export const DEVAI_FLAGSHIPS = [
  ...flagshipTools.filter(t => ['hrm-flagship', 'repo-auditor-ai', 'boomtick-blog'].includes(t.id)),
  ...systemTools.filter(t => t.id === 'deployment-impact-analyzer')
];
