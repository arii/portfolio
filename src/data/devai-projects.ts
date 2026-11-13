import { flagshipTools } from './research/flagshipTools';

export const DEVAI_FLAGSHIPS = [
  ...flagshipTools.filter(t => ['boomtick', 'wcs-navigator', 'hrm-flagship', 'repo-auditor-ai', 'boomtick-blog'].includes(t.id))
];
