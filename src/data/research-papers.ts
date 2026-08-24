import { autonomousTools } from './research/autonomousTools';
import { flagshipTools } from './research/flagshipTools';

export const RESEARCH_THESIS = flagshipTools.filter(t => ['phd-thesis', 'masters-thesis'].includes(t.id));
export const RESEARCH_AUTONOMOUS = autonomousTools;
