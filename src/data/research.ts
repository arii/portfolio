import { ResearchPost } from '@/types/research';
export { RESEARCH_TOOLS } from './researchTools';

export function parseFrontmatter(content: string) {
  const match = content.match(/^---\r?\n([\s\S]+?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) return { data: {} as Record<string, any>, content };

  const yamlStr = match[1];
  const body = match[2];

  const data: Record<string, any> = {};
  const lines = yamlStr.split(/\r?\n/);
  let currentKey: string | null = null;

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;

    const keyValMatch = line.match(/^([a-zA-Z0-9_-]+):\s*(.*)$/);
    if (keyValMatch) {
      const key = keyValMatch[1].trim();
      let val = keyValMatch[2].trim();

      if (val.startsWith('[') && val.endsWith(']')) {
        const items = val
          .slice(1, -1)
          .split(',')
          .map((s) => s.trim().replace(/^['"]|['"]$/g, ''))
          .filter(Boolean);
        data[key] = items;
        currentKey = null;
      } else if (val === '') {
        currentKey = key;
        data[key] = [];
      } else {
        if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
          val = val.slice(1, -1);
        }
        data[key] = val;
        currentKey = null;
      }
    } else if (currentKey && trimmed.startsWith('-')) {
      let itemVal = trimmed.slice(1).trim();
      if ((itemVal.startsWith('"') && itemVal.endsWith('"')) || (itemVal.startsWith("'") && itemVal.endsWith("'"))) {
        itemVal = itemVal.slice(1, -1);
      }
      if (Array.isArray(data[currentKey])) {
        data[currentKey].push(itemVal);
      }
    }
  }

  return { data, content: body };
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
