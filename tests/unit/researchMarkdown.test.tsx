import { describe, it, expect } from 'vitest';
import { renderToStaticMarkup } from 'react-dom/server';
import ReactMarkdown from 'react-markdown';
import fs from 'node:fs';
import path from 'node:path';
import { markdownRemarkPlugins, markdownRehypePlugins } from '@/utils/markdownPlugins';
import { flagshipTools } from '@/data/research/flagshipTools';

describe('research markdown math', () => {
  it('renders LaTeX in the conformant planning article via KaTeX', () => {
    const md = fs.readFileSync(
      path.resolve(__dirname, '../../src/content/research/conformant-planning-manipulation.md'),
      'utf8'
    );
    const html = renderToStaticMarkup(
      <ReactMarkdown remarkPlugins={markdownRemarkPlugins} rehypePlugins={markdownRehypePlugins}>
        {md}
      </ReactMarkdown>
    );
    expect(html).toContain('class="katex"');
    expect(html).not.toContain('$\\text{Support}');
  });
});

describe('flagship card descriptions', () => {
  it('contain no literal markdown links', () => {
    for (const tool of flagshipTools) {
      expect(tool.description).not.toMatch(/\[[^\]]+\]\(https?:/);
    }
  });
});
