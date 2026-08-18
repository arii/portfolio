import { ResearchTool } from '@/types/research';
import { flagshipTools } from './research/flagshipTools';
import { systemTools } from './research/systemTools';
import { autonomousTools } from './research/autonomousTools';

export const RESEARCH_TOOLS: ResearchTool[] = [
  ...flagshipTools,
  ...systemTools,
  ...autonomousTools
];
