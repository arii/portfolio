import { parse } from 'yaml';
import { ResearchPost } from '@/types/research';
export { RESEARCH_TOOLS } from './researchTools';

export function parseFrontmatter(content: string) {
  const match = content.match(/^---\r?\n([\s\S]+?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) return { data: {} as any, content };

  const yamlStr = match[1];
  const body = match[2];

  try {
    const data = parse(yamlStr);
    return { data: data && typeof data === 'object' ? data : {}, content: body };
  } catch (e) {
    console.error('Error parsing frontmatter:', e);
    return { data: {}, content: body };
  }
}

const modules = (import.meta as any).glob('/src/content/research/*.md', { eager: true, query: '?raw' }) as Record<string, { default: string }>;

export const RESEARCH_POSTS: ResearchPost[] = Object.entries(modules).map(([path, fileModule]) => {
  const rawContent = fileModule.default;
  const { data, content } = parseFrontmatter(rawContent);
  const slug = path.split('/').pop()?.replace('.md', '') || '';

  return {
    slug,
    title: String(data.title || 'Untitled'),
    date: String(data.date || ''),
    readingTime: data.readTime ? `${data.readTime} min read` : '5 min read',
    tags: Array.isArray(data.tags) ? data.tags : [],
    summary: String(data.excerpt || data.summary || ''),
    content: content.trim(),
    category: String(data.category || 'DevAI'),
    author: String(data.author || 'Ariel Anders'),
    status: String(data.status || 'published')
  };
});

export const getAllResearchPosts = (): ResearchPost[] => {
  const uniquePosts = Array.from(
    new Map(RESEARCH_POSTS.map(post => [post.title, post])).values()
  );
  return uniquePosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

export const getResearchPostBySlug = (slug: string): ResearchPost | undefined => {
  return RESEARCH_POSTS.find((post) => post.slug === slug);
};
