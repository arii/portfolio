import { ResearchTool } from '@/types/research';
import { flagshipTools } from './research/flagshipTools';
import { systemTools } from './research/systemTools';
import { autonomousTools } from './research/autonomousTools';
import { OTHER_TOOLS } from './research/otherTools';

export const RESEARCH_TOOLS: ResearchTool[] = [
  ...flagshipTools,
  ...systemTools,
  ...autonomousTools,
  ...OTHER_TOOLS
];
