import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

export const markdownRemarkPlugins = [remarkGfm, remarkMath];
export const markdownRehypePlugins = [rehypeKatex];
