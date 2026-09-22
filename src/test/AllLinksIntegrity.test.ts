import { describe, it, expect } from 'vitest';
import { DEVAI_FLAGSHIPS } from '@/data/devai-projects';
import { RESEARCH_AUTONOMOUS, RESEARCH_THESIS } from '@/data/research-papers';
import { getAllResearchPosts, getResearchPostBySlug } from '@/data/research';

describe('All Links Integrity on /devai and /research', () => {
  it('all /devai flagship canonical paths resolve to valid research posts', () => {
    for (const tool of DEVAI_FLAGSHIPS) {
      if (tool.canonicalPath) {
        const slug = tool.canonicalPath.replace(/^\/?(devai|research)\//, '').replace(/^\//, '');
        const post = getResearchPostBySlug(slug);
        expect(post, `Expected markdown post for slug: ${slug} (tool: ${tool.id})`).toBeDefined();
        expect(post?.content.length).toBeGreaterThan(50);
      }
    }
  });

  it('all /devai filtered posts have valid slugs and non-empty content', () => {
    const allPosts = getAllResearchPosts();
    const researchOnlySlugs = [
      'leac-monitoring-software',
      'light-therapy-mit',
      'boop-light-detector',
      'delivery-bots',
      'bwsi-racecar',
      'report-6375-rsa',
      'report-ml-lis',
      'report-ce118-mechatronics',
      'graduate-engineering-projects',
      'autonomous-drone-line-following'
    ];
    const devaiPosts = allPosts.filter(
      (p) => !researchOnlySlugs.includes(p.slug) && !(p.category || '').toLowerCase().includes('robotics')
    );

    expect(devaiPosts.length).toBeGreaterThan(0);
    for (const post of devaiPosts) {
      expect(post.slug).toBeTruthy();
      expect(post.title).toBeTruthy();
      expect(post.content.length).toBeGreaterThan(50);
    }
  });

  it('all /research thesis tools have valid canonical paths and markdown posts', () => {
    for (const tool of RESEARCH_THESIS) {
      if (tool.canonicalPath) {
        const slug = tool.canonicalPath.replace(/^\/?(devai|research)\//, '').replace(/^\//, '');
        const post = getResearchPostBySlug(slug);
        expect(post, `Expected markdown post for slug: ${slug} (tool: ${tool.id})`).toBeDefined();
        expect(post?.content.length).toBeGreaterThan(50);
      }
    }
  });

  it('all /research autonomous tools have valid canonical paths and markdown posts', () => {
    for (const tool of RESEARCH_AUTONOMOUS) {
      if (tool.canonicalPath) {
        const slug = tool.canonicalPath.replace(/^\/?(devai|research)\//, '').replace(/^\//, '');
        const post = getResearchPostBySlug(slug);
        expect(post, `Expected markdown post for slug: ${slug} (tool: ${tool.id})`).toBeDefined();
        expect(post?.content.length).toBeGreaterThan(50);
      }
    }
  });

  it('all external URLs on /devai and /research have valid HTTP/HTTPS protocol format', () => {
    const allTools = [...DEVAI_FLAGSHIPS, ...RESEARCH_THESIS, ...RESEARCH_AUTONOMOUS];
    for (const tool of allTools) {
      if (tool.externalUrl) {
        expect(tool.externalUrl).toMatch(/^https?:\/\//);
      }
      if (tool.sourceUrl) {
        expect(tool.sourceUrl).toMatch(/^https?:\/\//);
      }
      if (tool.pdfUrl) {
        expect(tool.pdfUrl).toMatch(/^https?:\/\//);
      }
      if (tool.videoUrl) {
        expect(tool.videoUrl).toMatch(/^https?:\/\//);
      }
      if (tool.playlistUrl) {
        expect(tool.playlistUrl).toMatch(/^https?:\/\//);
      }
      if (tool.mediaLinks) {
        for (const m of tool.mediaLinks) {
          expect(m.url).toMatch(/^https?:\/\//);
        }
      }
    }
  });
});
