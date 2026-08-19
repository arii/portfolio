export type FilterCategory = 'All' | 'Core Robotics' | 'Reinforcement Learning' | 'Community & Tools' | 'Accessibility';

export const FILTER_CATEGORIES: FilterCategory[] = [
  'All',
  'Core Robotics',
  'Reinforcement Learning',
  'Community & Tools',
  'Accessibility'
];

export const matchesCategory = (tags: string[], category: string, filter: FilterCategory): boolean => {
  if (filter === 'All') return true;
  const combined = [...tags, category].join(' ').toLowerCase();

  switch (filter) {
    case 'Core Robotics':
      return combined.includes('robotics') || combined.includes('autonomy') || combined.includes('manipulation') || combined.includes('control') || combined.includes('icra') || combined.includes('tamp');
    case 'Reinforcement Learning':
      return combined.includes('reinforcement learning') || combined.includes('pomdp') || combined.includes('learning');
    case 'Community & Tools':
      return combined.includes('community') || combined.includes('mit') || combined.includes('sustainability') || combined.includes('conference') || combined.includes('wellness');
    case 'Accessibility':
      return combined.includes('accessibility') || combined.includes('ios') || combined.includes('audio') || combined.includes('mobile');
    default:
      return true;
  }
};
