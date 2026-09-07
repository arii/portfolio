import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { resumeData } from '../src/data/resume/index.ts';
import { profileData } from '../src/data/aboutData.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DIST_DIR = path.resolve(__dirname, '../dist');
const CONTENT_DIR = path.resolve(__dirname, '../src/content/research');

const SITE_URL = 'https://arii.github.io';
const AUTHOR_NAME = 'Ariel Anders, PhD';
const DEFAULT_IMAGE = `${SITE_URL}/assets/roboticist.jpg`;
const DEFAULT_LICENSE = 'https://creativecommons.org/licenses/by-nc-nd/4.0/';

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function parseFrontmatter(content) {
  const match = content.match(/^---\r?\n([\s\S]+?)\r?\n---/);
  if (!match) return {};
  const yamlStr = match[1];
  const title = yamlStr.match(/title:\s*["']?([^"'\n]+)["']?/)?.[1] || '';
  const excerpt = yamlStr.match(/(?:excerpt|summary):\s*["']?([^"'\n]+)["']?/)?.[1] || '';
  const date = yamlStr.match(/date:\s*["']?([^"'\n]+)["']?/)?.[1] || '';
  const category = yamlStr.match(/category:\s*["']?([^"'\n]+)["']?/)?.[1] || 'DevAI';
  const image = yamlStr.match(/image:\s*["']?([^"'\n]+)["']?/)?.[1] || '';
  const tagsStr = yamlStr.match(/tags:\s*\[(.*?)\]/)?.[1] || '';
  const tags = tagsStr ? tagsStr.split(',').map((t) => t.trim().replace(/^["']|["']$/g, '')) : [];
  return { title, excerpt, date, category, image, tags };
}

function extractFirstMarkdownImage(content) {
  const match = content.match(/!\[.*?\]\((.*?)\)/);
  if (!match) return null;
  const rawUrl = match[1].split('#')[0].trim();
  return rawUrl || null;
}

function markdownToHtml(md) {
  if (!md) return '';

  // 1. Strip frontmatter if present
  let text = md.replace(/^---\r?\n[\s\S]+?\r?\n---\r?\n?/, '');

  // 2. Extract code blocks and store them to avoid formatting inside code
  const codeBlocks = [];
  text = text.replace(/```(\w*)\r?\n([\s\S]*?)```/g, (match, lang, code) => {
    const escapedCode = escapeHtml(code.trim());
    const placeholder = `__CODE_BLOCK_${codeBlocks.length}__`;
    codeBlocks.push(`<pre><code class="language-${lang || 'text'}">${escapedCode}</code></pre>`);
    return placeholder;
  });

  // 3. Process line-by-line
  const lines = text.split(/\r?\n/);
  const htmlOutput = [];
  let inList = false;
  let listType = null; // 'ul' or 'ol'
  let inBlockquote = false;
  let blockquoteLines = [];

  function flushList() {
    if (inList) {
      htmlOutput.push(`</${listType}>`);
      inList = false;
      listType = null;
    }
  }

  function flushBlockquote() {
    if (inBlockquote) {
      const bqContent = blockquoteLines.map((l) => formatInline(l)).join('<br />');
      htmlOutput.push(`<blockquote><p>${bqContent}</p></blockquote>`);
      inBlockquote = false;
      blockquoteLines = [];
    }
  }

  function formatInline(str) {
    if (!str) return '';
    let result = str;

    // 1. Extract inline code blocks first to prevent formatting inside code
    const inlineCodes = [];
    result = result.replace(/`([^`]+)`/g, (m, code) => {
      const placeholder = `__INLINE_CODE_${inlineCodes.length}__`;
      inlineCodes.push(`<code>${escapeHtml(code)}</code>`);
      return placeholder;
    });

    // 2. Images: ![alt](url) -> <figure><img src="url" alt="alt" /><figcaption>alt</figcaption></figure>
    result = result.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, (m, alt, url) => {
      const cleanUrl = url.split('#')[0].trim();
      const cleanAlt = escapeHtml(alt.replace(/^Figure:\s*/i, ''));
      return `<figure><img src="${escapeHtml(cleanUrl)}" alt="${cleanAlt}" /><figcaption>${cleanAlt}</figcaption></figure>`;
    });

    // 3. Links: [text](url)
    result = result.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (m, txt, url) => {
      return `<a href="${escapeHtml(url)}">${txt}</a>`;
    });

    // 4. Bold: **text** or __text__
    result = result.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
    result = result.replace(/(^|\s)__([^_]+)__(\s|$)/g, '$1<strong>$2</strong>$3');

    // 5. Italics: *text* or _text_
    result = result.replace(/(^|\s)_([^_]+)_(\s|$)/g, '$1<em>$2</em>$3');
    result = result.replace(/\*([^*]+)\*/g, '<em>$1</em>');

    // 6. Restore inline code
    for (let idx = 0; idx < inlineCodes.length; idx++) {
      result = result.replace(`__INLINE_CODE_${idx}__`, inlineCodes[idx]);
    }

    return result;
  }

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();

    // Check code block placeholder
    if (line.startsWith('__CODE_BLOCK_')) {
      flushList();
      flushBlockquote();
      htmlOutput.push(line);
      continue;
    }

    // Empty line
    if (!line) {
      flushList();
      flushBlockquote();
      continue;
    }

    // Blockquote
    if (line.startsWith('>')) {
      flushList();
      inBlockquote = true;
      blockquoteLines.push(line.replace(/^>\s*/, ''));
      continue;
    } else {
      flushBlockquote();
    }

    // Headings
    if (line.startsWith('#')) {
      flushList();
      const levelMatch = line.match(/^(#{1,6})\s+(.*)$/);
      if (levelMatch) {
        const level = levelMatch[1].length;
        const hText = formatInline(levelMatch[2]);
        htmlOutput.push(`<h${level}>${hText}</h${level}>`);
        continue;
      }
    }

    // Horizontal Rule
    if (/^---+$|^\*\*\*+$|^___+$/.test(line)) {
      flushList();
      htmlOutput.push('<hr />');
      continue;
    }

    // Unordered List (- or *)
    const ulMatch = line.match(/^[-*]\s+(.*)$/);
    if (ulMatch) {
      if (!inList || listType !== 'ul') {
        flushList();
        inList = true;
        listType = 'ul';
        htmlOutput.push('<ul>');
      }
      htmlOutput.push(`<li>${formatInline(ulMatch[1])}</li>`);
      continue;
    }

    // Ordered List (1., 2.)
    const olMatch = line.match(/^\d+\.\s+(.*)$/);
    if (olMatch) {
      if (!inList || listType !== 'ol') {
        flushList();
        inList = true;
        listType = 'ol';
        htmlOutput.push('<ol>');
      }
      htmlOutput.push(`<li>${formatInline(olMatch[1])}</li>`);
      continue;
    }

    // Standard paragraph line
    flushList();
    htmlOutput.push(`<p>${formatInline(line)}</p>`);
  }

  flushList();
  flushBlockquote();

  let htmlStr = htmlOutput.join('\n');

  // Restore code blocks
  for (let idx = 0; idx < codeBlocks.length; idx++) {
    htmlStr = htmlStr.replace(`__CODE_BLOCK_${idx}__`, codeBlocks[idx]);
  }

  return htmlStr;
}

function renderResumeHtml() {
  const { name, title, summary, experience, education, publications, skills, projects, honors, teaching } = resumeData;

  let html = `<main style="max-width:1100px;margin:0 auto;padding:2rem 1rem;">`;
  html += `<header><h1>${escapeHtml(name)}</h1><p><strong>${escapeHtml(title)}</strong></p><p>${escapeHtml(summary)}</p></header>`;

  // Employment History
  html += `<section><h2>Employment History</h2>`;
  for (const job of experience) {
    html += `<article><h3>${escapeHtml(job.title)} — ${escapeHtml(job.company)}</h3>`;
    html += `<p><em>${escapeHtml(job.period)}</em>${job.link ? ` | <a href="${escapeHtml(job.link)}">${escapeHtml(job.company)}</a>` : ''}</p>`;
    if (job.description) {
      html += `<p>${escapeHtml(job.description)}</p>`;
    }
    if (job.points && job.points.length > 0) {
      html += `<ul>${job.points.map((p) => `<li>${escapeHtml(p)}</li>`).join('')}</ul>`;
    }
    if (job.subRoles && job.subRoles.length > 0) {
      for (const sub of job.subRoles) {
        html += `<div><h4>${escapeHtml(sub.title)} (<em>${escapeHtml(sub.period)}</em>)</h4>`;
        if (sub.points && sub.points.length > 0) {
          html += `<ul>${sub.points.map((p) => `<li>${escapeHtml(p)}</li>`).join('')}</ul>`;
        }
        html += `</div>`;
      }
    }
    html += `</article>`;
  }
  html += `</section>`;

  // Education
  html += `<section><h2>Education</h2>`;
  for (const edu of education) {
    html += `<article><h3>${escapeHtml(edu.degree)}</h3>`;
    html += `<p><strong>${escapeHtml(edu.institution)}</strong> | <em>${escapeHtml(edu.period)}</em></p>`;
    if (edu.details) html += `<p>${escapeHtml(edu.details)}</p>`;
    if (edu.researchFocus) html += `<p>${escapeHtml(edu.researchFocus)}</p>`;
    html += `</article>`;
  }
  html += `</section>`;

  // Publications
  html += `<section><h2>Publications</h2><ul>`;
  for (const pub of publications) {
    html += `<li><strong>${escapeHtml(pub.title)}</strong> (${escapeHtml(pub.year)})<br />${escapeHtml(pub.authors.join(', '))}<br /><em>${escapeHtml(pub.venue)}</em>${pub.link ? `<br /><a href="${escapeHtml(pub.link)}">Publication Link</a>` : ''}</li>`;
  }
  html += `</ul></section>`;

  // Skills
  html += `<section><h2>Skills</h2>`;
  for (const group of skills) {
    html += `<p><strong>${escapeHtml(group.category)}:</strong> ${group.skills.map((s) => escapeHtml(s)).join(', ')}</p>`;
  }
  html += `</section>`;

  // Key Projects
  html += `<section><h2>Selected Projects</h2>`;
  for (const proj of projects) {
    html += `<article><h3>${escapeHtml(proj.title)}</h3>`;
    html += `<p>${escapeHtml(proj.description)}</p>`;
    html += `<p><strong>Impact:</strong> ${escapeHtml(proj.metric)} | <strong>Tech Stack:</strong> ${proj.techStack.map((s) => escapeHtml(s)).join(', ')}</p>`;
    html += `</article>`;
  }
  html += `</section>`;

  // Honors & Awards
  html += `<section><h2>Honors & Awards</h2><ul>`;
  for (const honor of honors) {
    html += `<li><strong>${escapeHtml(honor.title)}</strong> (${escapeHtml(honor.year)}) — ${escapeHtml(honor.organization)}${honor.details ? `: ${escapeHtml(honor.details)}` : ''}</li>`;
  }
  html += `</ul></section>`;

  // Teaching Experience
  html += `<section><h2>Teaching Experience</h2>`;
  for (const t of teaching) {
    html += `<article><h3>${escapeHtml(t.title)}</h3><p><em>${escapeHtml(t.period)}</em></p><p>${escapeHtml(t.details)}</p></article>`;
  }
  html += `</section>`;

  html += `</main>`;
  return html;
}

function renderAboutHtml() {
  const { name, role, availability, highlights, faqs } = profileData;

  let html = `<main style="max-width:1100px;margin:0 auto;padding:2rem 1rem;">`;
  html += `<header><h1>About ${escapeHtml(name)}</h1><p><strong>${escapeHtml(role)}</strong></p></header>`;

  html += `<section><h2>Executive Biography</h2>`;
  html += `<p>I am an MIT CSAIL roboticist whose work focuses on building reliable autonomous systems. My research focused on learning physics-based models for planning under uncertainty. I bring deep experience across research and industry, from robot manipulation to social navigation in dynamic indoor environments and autonomous driving.</p>`;
  html += `<p>Over the past year, I’ve built stateful, multi-agent workflows for software development, using AI to engineer feature-rich applications while maintaining code quality and architectural standards, bringing robotics-grade reliability to DevAI.</p>`;
  html += `<p>Outside of robotics and AI, you’ll usually find me on the dance floor or exploring San Francisco. I am an active West Coast Swing dancer who travels for regional events, perform in improv comedy jams, stay fit with high-intensity workouts, and love a good game of chess.</p>`;
  html += `</section>`;

  html += `<section><h2>Key Details &amp; Availability</h2>`;
  html += `<p><strong>Location:</strong> San Francisco, CA</p>`;
  html += `<p><strong>Education:</strong> MIT EECS PhD 2019 · SM 2014</p>`;
  html += `<p><strong>Availability:</strong> ${escapeHtml(availability)}</p>`;
  html += `</section>`;

  html += `<section><h2>Career Timeline Highlights</h2>`;
  for (const h of highlights) {
    html += `<article><h3>${escapeHtml(h.title)} (${escapeHtml(h.period)})</h3><p>${escapeHtml(h.detail)}</p></article>`;
  }
  html += `</section>`;

  html += `<section><h2>Frequently Asked Questions</h2>`;
  for (const faq of faqs) {
    html += `<article><h3>${escapeHtml(faq.question)}</h3><p>${escapeHtml(faq.answer)}</p></article>`;
  }
  html += `</section>`;

  html += `</main>`;
  return html;
}

function getArticleList(contentDir, targetCategory) {
  const articles = [];
  if (!fs.existsSync(contentDir)) return articles;

  const files = fs.readdirSync(contentDir).filter((f) => f.endsWith('.md'));
  for (const file of files) {
    const slug = file.replace('.md', '');
    const fullPath = path.join(contentDir, file);
    const content = fs.readFileSync(fullPath, 'utf-8');
    const match = content.match(/^---\r?\n([\s\S]+?)\r?\n---/);
    if (!match) continue;

    const yaml = match[1];
    const title = yaml.match(/title:\s*["']?([^"'\n]+)["']?/)?.[1] || '';
    const excerpt = yaml.match(/(?:excerpt|summary):\s*["']?([^"'\n]+)["']?/)?.[1] || '';
    const date = yaml.match(/date:\s*["']?([^"'\n]+)["']?/)?.[1] || '';
    const category = yaml.match(/category:\s*["']?([^"'\n]+)["']?/)?.[1] || 'DevAI';
    const tagsMatch = yaml.match(/tags:\s*\[(.*?)\]/)?.[1] || '';
    const tags = tagsMatch
      .split(',')
      .map((t) => t.replace(/["']/g, '').trim())
      .filter(Boolean);

    const isRobotics = category.toLowerCase().includes('robotics');
    const primarySection = isRobotics ? 'research' : 'devai';

    if ((targetCategory === 'devai' && !isRobotics) || (targetCategory === 'research' && isRobotics)) {
      articles.push({ slug, title, excerpt, date, category, tags, primarySection });
    }
  }

  return articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

function renderDevAiHtml(contentDir) {
  const articles = getArticleList(contentDir, 'devai');

  let html = `<main style="max-width:1100px;margin:0 auto;padding:2rem 1rem;">`;
  html += `<header><h1>DevAI &amp; Software Systems</h1><p>System architectures, agentic CI/CD pipelines, autonomous developer tooling, and shipped production applications.</p></header>`;

  html += `<section><h2>Agentic Tools & Architecture Deep Dives</h2>`;
  for (const article of articles) {
    html += `<article><h3><a href="/devai/${article.slug}">${escapeHtml(article.title)}</a></h3>`;
    html += `<p><em>${escapeHtml(article.date)}</em>${article.tags.length > 0 ? ` | Tags: ${escapeHtml(article.tags.join(', '))}` : ''}</p>`;
    html += `<p>${escapeHtml(article.excerpt)}</p>`;
    html += `</article>`;
  }
  html += `</section></main>`;
  return html;
}

function renderResearchHtml(contentDir) {
  const articles = getArticleList(contentDir, 'research');

  let html = `<main style="max-width:1100px;margin:0 auto;padding:2rem 1rem;">`;
  html += `<header><h1>Robotics &amp; Algorithmic Research</h1><p>Planning under uncertainty, conformant belief-state manipulation, multi-robot coordination, and hardware automation systems.</p></header>`;

  html += `<section><h2>Research Deep Dives & Projects</h2>`;
  for (const article of articles) {
    html += `<article><h3><a href="/research/${article.slug}">${escapeHtml(article.title)}</a></h3>`;
    html += `<p><em>${escapeHtml(article.date)}</em>${article.tags.length > 0 ? ` | Tags: ${escapeHtml(article.tags.join(', '))}` : ''}</p>`;
    html += `<p>${escapeHtml(article.excerpt)}</p>`;
    html += `</article>`;
  }
  html += `</section></main>`;
  return html;
}

function renderArticleHtml(slug, contentDir) {
  const mdPath = path.join(contentDir, `${slug}.md`);
  if (!fs.existsSync(mdPath)) return '';

  const rawContent = fs.readFileSync(mdPath, 'utf-8');
  const match = rawContent.match(/^---\r?\n([\s\S]+?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) return `<main style="max-width:1100px;margin:0 auto;padding:2rem 1rem;">${markdownToHtml(rawContent)}</main>`;

  const yaml = match[1];
  const body = match[2];

  const title = yaml.match(/title:\s*["']?([^"'\n]+)["']?/)?.[1] || 'Research & Engineering Deep-Dive';
  const author = yaml.match(/author:\s*["']?([^"'\n]+)["']?/)?.[1] || 'Ariel Anders, PhD';
  const date = yaml.match(/date:\s*["']?([^"'\n]+)["']?/)?.[1] || '';
  const category = yaml.match(/category:\s*["']?([^"'\n]+)["']?/)?.[1] || 'DevAI';
  const excerpt = yaml.match(/(?:excerpt|summary):\s*["']?([^"'\n]+)["']?/)?.[1] || '';
  const tagsMatch = yaml.match(/tags:\s*\[(.*?)\]/)?.[1] || '';
  const tags = tagsMatch
    .split(',')
    .map((t) => t.replace(/["']/g, '').trim())
    .filter(Boolean);

  let html = `<main style="max-width:1100px;margin:0 auto;padding:2rem 1rem;">`;
  html += `<header><h1>${escapeHtml(title)}</h1>`;
  html += `<p><strong>Author:</strong> ${escapeHtml(author)} | <strong>Date:</strong> ${escapeHtml(date)} | <strong>Category:</strong> ${escapeHtml(category)}</p>`;
  if (tags.length > 0) {
    html += `<p><strong>Tags:</strong> ${escapeHtml(tags.join(', '))}</p>`;
  }
  if (excerpt) {
    html += `<p><em>${escapeHtml(excerpt)}</em></p>`;
  }
  html += `</header><hr />`;

  html += `<article>${markdownToHtml(body)}</article>`;
  html += `</main>`;
  return html;
}

function getPrerenderedBody(route, meta, contentDir) {
  const safeRoute = route || '';
  if (safeRoute === 'resume') {
    return `<div id="root">${renderResumeHtml()}</div>`;
  }
  if (safeRoute === 'about') {
    return `<div id="root">${renderAboutHtml()}</div>`;
  }
  if (safeRoute === 'devai') {
    return `<div id="root">${renderDevAiHtml(contentDir)}</div>`;
  }
  if (safeRoute === 'research') {
    return `<div id="root">${renderResearchHtml(contentDir)}</div>`;
  }
  if (safeRoute.startsWith('devai/') || safeRoute.startsWith('research/')) {
    const slug = safeRoute.split('/')[1];
    const articleBody = renderArticleHtml(slug, contentDir);
    if (articleBody) {
      return `<div id="root">${articleBody}</div>`;
    }
  }

  return `<div id="root"><main style="max-width:1100px;margin:0 auto;padding:2rem 1rem;"><h1>${escapeHtml(meta.heading)}</h1><p>${escapeHtml(meta.bodyText)}</p></main></div>`;
}

function getRouteMetadata(route, contentDir) {
  if (route === 'about') {
    return {
      title: 'About & Background | Ariel Anders, PhD',
      description:
        'Learn about Ariel Anders, PhD (MIT CSAIL): roboticist, AI software engineer, research background, current availability, and personal projects.',
      canonical: `${SITE_URL}/about`,
      heading: 'About Ariel',
      bodyText: 'Robotics background, research history, and personal interests. MIT EECS PhD 2019 · SM 2014.',
      image: DEFAULT_IMAGE,
      type: 'profile',
    };
  }

  if (route === 'devai') {
    return {
      title: 'DevAI & Agentic Automation | Ariel Anders, PhD',
      description:
        'Explore agentic DevAI tools, multi-agent CI/CD workflows, and developer automation software engineered by Ariel Anders, PhD (MIT CSAIL).',
      canonical: `${SITE_URL}/devai`,
      heading: 'DevAI & Software Systems',
      bodyText: 'System architectures, agentic CI/CD pipelines, autonomous developer tooling, and shipped production applications.',
      image: DEFAULT_IMAGE,
      type: 'collection',
    };
  }

  if (route === 'research') {
    return {
      title: 'Robotics & Autonomous Research | Ariel Anders, PhD',
      description:
        'Discover robotics software research in conformant planning, belief-state manipulation, and autonomous systems by Ariel Anders, PhD (MIT CSAIL).',
      canonical: `${SITE_URL}/research`,
      heading: 'Robotics & Algorithmic Research',
      bodyText: 'Planning under uncertainty, conformant belief-state manipulation, multi-robot coordination, and hardware automation systems.',
      image: DEFAULT_IMAGE,
      type: 'collection',
    };
  }

  if (route === 'resume') {
    return {
      title: 'Resume & Career Highlights | Ariel Anders, PhD',
      description:
        'View the technical resume and experience of Ariel Anders, PhD (MIT CSAIL): expertise in robotics engineering, AI architecture, and software systems.',
      canonical: `${SITE_URL}/resume`,
      heading: 'Resume & Career Highlights',
      bodyText: 'Roboticist and Senior Software Engineer with an MIT CSAIL PhD and track record across Waymo, Robust.AI, and Civ Robotics.',
      image: DEFAULT_IMAGE,
      type: 'profile',
    };
  }

  if (route.startsWith('devai/') || route.startsWith('research/')) {
    const slug = route.split('/')[1];
    const mdPath = path.join(contentDir, `${slug}.md`);
    if (fs.existsSync(mdPath)) {
      const content = fs.readFileSync(mdPath, 'utf-8');
      const { title, excerpt, date, category, image: fmImage, tags } = parseFrontmatter(content);
      const cleanTitle = title ? `${title} | Ariel Anders, PhD` : 'AI & Robotics Engineering Portfolio | Ariel Anders, PhD';
      const cleanDesc = excerpt || 'Explore AI consulting, robotics software engineering, and autonomous systems research by Ariel Anders, PhD (MIT).';

      const firstMdImg = extractFirstMarkdownImage(content);
      const rawImage = fmImage || firstMdImg;
      const fullImageUrl = rawImage
        ? (rawImage.startsWith('http') ? rawImage : `${SITE_URL}${rawImage.startsWith('/') ? '' : '/'}${rawImage}`)
        : DEFAULT_IMAGE;

      const isScholarly =
        category.toLowerCase().includes('robotics') ||
        slug.includes('thesis') ||
        slug.includes('planning') ||
        slug.includes('report');

      return {
        title: cleanTitle,
        description: cleanDesc,
        canonical: `${SITE_URL}/${route}`,
        heading: title || 'Research & Engineering Deep-Dive',
        bodyText: excerpt || '',
        image: fullImageUrl,
        date: date || '2025-01-01',
        tags,
        category,
        slug,
        type: isScholarly ? 'ScholarlyArticle' : 'TechArticle',
      };
    }
  }

  const cleanRoutePath = route ? (route.startsWith('/') ? route : `/${route}`) : '/';
  const canonicalUrl = `${SITE_URL}${cleanRoutePath === '/' ? '/' : cleanRoutePath}`;

  return {
    title: 'AI & Robotics Engineering Portfolio | Ariel Anders, PhD',
    description: 'Explore AI consulting, robotics software engineering, and autonomous systems research by Ariel Anders, PhD (MIT). View open-source tools and deep dives.',
    canonical: canonicalUrl,
    heading: 'AI & Robotics Engineering Portfolio',
    bodyText: '',
    image: DEFAULT_IMAGE,
    type: 'website',
  };
}

function generateJsonLdForRoute(meta) {
  const personEntity = {
    '@type': 'Person',
    '@id': `${SITE_URL}/about#person`,
    url: `${SITE_URL}/about`,
    name: AUTHOR_NAME,
    jobTitle: 'Robotics & AI Consulting Engineer',
    email: 'anders.ariel@gmail.com',
    image: DEFAULT_IMAGE,
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'Massachusetts Institute of Technology (MIT)',
      url: 'https://www.mit.edu',
    },
    knowsAbout: [
      'Artificial Intelligence',
      'Robotics Software Engineering',
      'Autonomous Systems',
      'Agentic Workflows',
      'Motion Planning',
      'Computer Vision',
    ],
    sameAs: [
      'https://www.linkedin.com/in/ariel-anders/',
      'https://github.com/arii',
      'https://scholar.google.com/citations?user=NM6SfiEAAAAJ&hl=en',
      'https://boomtick.blog',
    ],
  };

  if (meta.type === 'TechArticle') {
    const articleEntity = {
      '@type': 'TechArticle',
      '@id': `${meta.canonical}#article`,
      headline: meta.heading,
      description: meta.description,
      url: meta.canonical,
      image: {
        '@type': 'ImageObject',
        '@id': `${meta.image}#image`,
        url: meta.image,
        caption: meta.heading,
        width: 1200,
        height: 630,
        license: DEFAULT_LICENSE,
      },
      mainEntityOfPage: meta.canonical,
      proficiencyLevel: 'Expert',
      articleSection: meta.category || 'Robotics & AI',
      datePublished: meta.date,
      author: {
        '@type': 'Person',
        '@id': `${SITE_URL}/about#person`,
        name: AUTHOR_NAME,
        url: SITE_URL,
      },
      publisher: {
        '@type': 'Person',
        '@id': `${SITE_URL}/about#person`,
        name: AUTHOR_NAME,
        url: SITE_URL,
      },
      keywords: meta.tags && meta.tags.length > 0
        ? meta.tags.join(', ')
        : 'Artificial Intelligence, Robotics Software Engineering, Autonomous Systems, Agentic Workflows',
    };

    const breadcrumbEntity = {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
        { '@type': 'ListItem', position: 2, name: 'DevAI & Software Systems', item: `${SITE_URL}/devai` },
        { '@type': 'ListItem', position: 3, name: meta.heading, item: meta.canonical },
      ],
    };

    return {
      '@context': 'https://schema.org',
      '@graph': [articleEntity, breadcrumbEntity, personEntity],
    };
  }

  if (meta.type === 'ScholarlyArticle') {
    const articleEntity = {
      '@type': 'ScholarlyArticle',
      '@id': `${meta.canonical}#article`,
      name: meta.heading,
      headline: meta.heading,
      url: meta.canonical,
      image: {
        '@type': 'ImageObject',
        '@id': `${meta.image}#image`,
        url: meta.image,
        caption: meta.heading,
        width: 1200,
        height: 630,
        license: DEFAULT_LICENSE,
      },
      abstract: meta.description,
      datePublished: meta.date,
      author: [
        {
          '@type': 'Person',
          '@id': `${SITE_URL}/about#person`,
          name: AUTHOR_NAME,
        },
      ],
      sameAs: 'https://scholar.google.com/citations?user=NM6SfiEAAAAJ&hl=en',
    };

    const breadcrumbEntity = {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
        { '@type': 'ListItem', position: 2, name: 'Robotics Research', item: `${SITE_URL}/research` },
        { '@type': 'ListItem', position: 3, name: meta.heading, item: meta.canonical },
      ],
    };

    return {
      '@context': 'https://schema.org',
      '@graph': [articleEntity, breadcrumbEntity, personEntity],
    };
  }

  if (meta.type === 'profile') {
    const profilePageEntity = {
      '@type': 'ProfilePage',
      '@id': `${meta.canonical}#profilepage`,
      url: meta.canonical,
      name: meta.title,
      mainEntity: {
        '@id': `${SITE_URL}/about#person`,
      },
    };

    return {
      '@context': 'https://schema.org',
      '@graph': [personEntity, profilePageEntity],
    };
  }

  return {
    '@context': 'https://schema.org',
    '@graph': [personEntity],
  };
}

function customizeHtmlForRoute(baseHtml, meta, route, contentDir) {
  let customized = baseHtml;

  // 1. Strip ALL existing title, description, canonical, OG, and Twitter tags
  customized = customized.replace(/<title[\s\S]*?<\/title>/gi, '');
  customized = customized.replace(/<meta\s+name="description"[\s\S]*?\/?>/gi, '');
  customized = customized.replace(/<link\s+rel="canonical"[\s\S]*?\/?>/gi, '');
  customized = customized.replace(/<meta\s+property="og:(?:title|description|url|site_name|type|image)"[\s\S]*?\/?>/gi, '');
  customized = customized.replace(/<meta\s+name="twitter:(?:card|title|description|image)"[\s\S]*?\/?>/gi, '');

  const escapedTitle = meta.title.replace(/"/g, '&quot;');
  const escapedDesc = meta.description.replace(/"/g, '&quot;');

  // 2. Build explicit, clean head metadata block
  const seoHeadTags = [
    `    <title>${meta.title}</title>`,
    `    <meta name="description" content="${escapedDesc}" />`,
    `    <link rel="canonical" href="${meta.canonical}" />`,
    `    <!-- Open Graph / Facebook -->`,
    `    <meta property="og:site_name" content="Ariel Anders Portfolio" />`,
    `    <meta property="og:title" content="${escapedTitle}" />`,
    `    <meta property="og:description" content="${escapedDesc}" />`,
    `    <meta property="og:type" content="website" />`,
    `    <meta property="og:url" content="${meta.canonical}" />`,
    `    <meta property="og:image" content="${meta.image || DEFAULT_IMAGE}" />`,
    `    <!-- Twitter Card -->`,
    `    <meta name="twitter:card" content="summary_large_image" />`,
    `    <meta name="twitter:title" content="${escapedTitle}" />`,
    `    <meta name="twitter:description" content="${escapedDesc}" />`,
    `    <meta name="twitter:image" content="${meta.image || DEFAULT_IMAGE}" />`,
  ].join('\n');

  // Insert custom head tags right after viewport meta tag or inside <head>
  if (/<meta\s+name="viewport"[\s\S]*?\/?>/i.test(customized)) {
    customized = customized.replace(/(<meta\s+name="viewport"[\s\S]*?\/?>)/i, `$1\n${seoHeadTags}`);
  } else {
    customized = customized.replace('</head>', `${seoHeadTags}\n  </head>`);
  }

  // Replace Default JSON-LD Schema Fallback
  const jsonLd = generateJsonLdForRoute(meta);
  if (jsonLd) {
    const jsonLdScript = `<script type="application/ld+json">\n${JSON.stringify(jsonLd, null, 2)}\n    </script>`;
    customized = customized.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/, jsonLdScript);
  }

  // Inject Pre-rendered Semantic HTML into root for non-JS crawlers
  const prerenderedBody = getPrerenderedBody(route, meta, contentDir);
  customized = customized.replace(/<div id="root">[\s\S]*?<\/div>/, prerenderedBody);

  return customized;
}

export function generateSpaStubs() {
  const indexHtmlPath = path.join(DIST_DIR, 'index.html');
  if (!fs.existsSync(indexHtmlPath)) {
    console.error(`❌ Error: dist/index.html not found at ${indexHtmlPath}. Run vite build first.`);
    process.exit(1);
  }

  const indexHtmlContent = fs.readFileSync(indexHtmlPath, 'utf-8');

  // 0. Update root dist/index.html with root canonical tag
  const rootMeta = getRouteMetadata('', CONTENT_DIR);
  const customizedRootHtml = customizeHtmlForRoute(indexHtmlContent, rootMeta);
  fs.writeFileSync(indexHtmlPath, customizedRootHtml, 'utf-8');
  console.log(`✅ Updated root dist/index.html with pre-rendered canonical ${rootMeta.canonical}`);

  // 1. Generate dist/404.html for GitHub Pages fallback with sessionStorage redirect script
  const spa404Script = `<script>
    (function() {
      var path = window.location.pathname + window.location.search + window.location.hash;
      sessionStorage.setItem('ghpages_redirect', path);
    })();
  </script>`;

  let html404Content = indexHtmlContent;
  if (html404Content.includes('<head>')) {
    html404Content = html404Content.replace('<head>', `<head>\n    ${spa404Script}`);
  } else {
    html404Content = spa404Script + html404Content;
  }

  const fallbackPath = path.join(DIST_DIR, '404.html');
  fs.writeFileSync(fallbackPath, html404Content, 'utf-8');
  console.log(`✅ Generated GitHub Pages fallback at ${fallbackPath}`);

  // 2. Core routes to stub
  const routes = ['about', 'devai', 'research', 'resume', 'portfolio'];

  // 3. Article routes from src/content/research/
  if (fs.existsSync(CONTENT_DIR)) {
    const files = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith('.md'));

    for (const file of files) {
      const slug = file.replace('.md', '');
      const filePath = path.join(CONTENT_DIR, file);
      const content = fs.readFileSync(filePath, 'utf-8');
      const { category = 'DevAI' } = parseFrontmatter(content);

      const isRobotics = category.toLowerCase().includes('robotics');
      const primarySection = isRobotics ? 'research' : 'devai';

      routes.push(`${primarySection}/${slug}`);
    }
  }

  // Deduplicate routes
  const uniqueRoutes = Array.from(new Set(routes));

  // 4. Create directory stub index.html and direct route.html for each route with customized metadata & prerendered content
  let stubCount = 0;
  for (const route of uniqueRoutes) {
    const meta = getRouteMetadata(route, CONTENT_DIR);
    const customizedContent = customizeHtmlForRoute(indexHtmlContent, meta, route, CONTENT_DIR);

    const routeDir = path.join(DIST_DIR, route);
    if (!fs.existsSync(routeDir)) {
      fs.mkdirSync(routeDir, { recursive: true });
    }
    // Directory index: /about/ -> 200 OK
    const stubFilePath = path.join(routeDir, 'index.html');
    fs.writeFileSync(stubFilePath, customizedContent, 'utf-8');

    // Direct HTML file: /about or /about.html -> 200 OK on GitHub Pages without 301 redirect
    const directHtmlPath = path.join(DIST_DIR, `${route}.html`);
    const directParentDir = path.dirname(directHtmlPath);
    if (!fs.existsSync(directParentDir)) {
      fs.mkdirSync(directParentDir, { recursive: true });
    }
    fs.writeFileSync(directHtmlPath, customizedContent, 'utf-8');

    stubCount++;
  }

  console.log(`✅ Generated ${stubCount} SPA 200 OK directory and direct HTML stubs with pre-rendered SEO metadata in dist/`);
}

// Run directly if called as main module
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  generateSpaStubs();
}
