import { ResearchPost } from './research.types';
import { RESEARCH_POSTS as postsPart1 } from './posts-part1';
import { RESEARCH_POSTS_PART2 as postsPart2 } from './posts-part2';

export type { ResearchPost };

export const RESEARCH_POSTS: ResearchPost[] = [
  ...postsPart1,
  ...postsPart2
];

export const getAllResearchPosts = (): ResearchPost[] => {
  return [...RESEARCH_POSTS].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

export const getResearchPostBySlug = (slug: string): ResearchPost | undefined => {
  return RESEARCH_POSTS.find((post) => post.slug === slug);
};
