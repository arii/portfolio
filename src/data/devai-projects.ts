import { flagshipTools } from './research/flagshipTools';

export const DEVAI_FLAGSHIPS = [
  ...flagshipTools.filter(t => ['hrm-flagship', 'repo-auditor-ai', 'boomtick-blog'].includes(t.id))
];
