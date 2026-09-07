import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DIST_DIR = path.resolve(__dirname, '../dist');
const CONTENT_DIR = path.resolve(__dirname, '../src/content/research');

function parseFrontmatter(content) {
  const match = content.match(/^---\r?\n([\s\S]+?)\r?\n---/);
  if (!match) return {};
  const yamlStr = match[1];
  const title = yamlStr.match(/title:\s*["']?([^"'\n]+)["']?/)?.[1] || '';
  const excerpt = yamlStr.match(/(?:excerpt|summary):\s*["']?([^"'\n]+)["']?/)?.[1] || '';
  const date = yamlStr.match(/date:\s*["']?([^"'\n]+)["']?/)?.[1] || '';
  const category = yamlStr.match(/category:\s*["']?([^"'\n]+)["']?/)?.[1] || 'DevAI';
  return { title, excerpt, date, category };
}

function getRouteMetadata(route, contentDir) {
  const SITE_URL = 'https://arii.github.io';
  
  if (route === 'about') {
    return {
      title: 'About & Background | Ariel Anders, PhD',
      description: 'Learn about Ariel Anders, PhD (MIT CSAIL): roboticist, AI software engineer, research background, current availability, and personal projects.',
      canonical: `${SITE_URL}/about`,
      heading: 'About Ariel',
      bodyText: 'Robotics background, research history, and personal interests. MIT EECS PhD 2019 · SM 2014.',
    };
  }

  if (route === 'devai') {
    return {
      title: 'DevAI & Agentic Automation | Ariel Anders, PhD',
      description: 'Explore agentic DevAI tools, multi-agent CI/CD workflows, and developer automation software engineered by Ariel Anders, PhD (MIT CSAIL).',
      canonical: `${SITE_URL}/devai`,
      heading: 'DevAI & Software Systems',
      bodyText: 'System architectures, agentic CI/CD pipelines, autonomous developer tooling, and shipped production applications.',
    };
  }

  if (route === 'research') {
    return {
      title: 'Robotics & Autonomous Research | Ariel Anders, PhD',
      description: 'Discover robotics software research in conformant planning, belief-state manipulation, and autonomous systems by Ariel Anders, PhD (MIT CSAIL).',
      canonical: `${SITE_URL}/research`,
      heading: 'Robotics & Algorithmic Research',
      bodyText: 'Planning under uncertainty, conformant belief-state manipulation, multi-robot coordination, and hardware automation systems.',
    };
  }

  if (route === 'resume') {
    return {
      title: 'Resume & Career Highlights | Ariel Anders, PhD',
      description: 'View the technical resume and experience of Ariel Anders, PhD (MIT CSAIL): expertise in robotics engineering, AI architecture, and software systems.',
      canonical: `${SITE_URL}/resume`,
      heading: 'Resume & Career Highlights',
      bodyText: 'Roboticist and Senior Software Engineer with an MIT CSAIL PhD and track record across Waymo, Robust.AI, and Civ Robotics.',
    };
  }

  if (route.startsWith('devai/') || route.startsWith('research/')) {
    const slug = route.split('/')[1];
    const mdPath = path.join(contentDir, `${slug}.md`);
    if (fs.existsSync(mdPath)) {
      const content = fs.readFileSync(mdPath, 'utf-8');
      const { title, excerpt } = parseFrontmatter(content);
      const cleanTitle = title ? `${title} | Ariel Anders, PhD` : 'AI & Robotics Engineering Portfolio | Ariel Anders, PhD';
      const cleanDesc = excerpt || 'Explore AI consulting, robotics software engineering, and autonomous systems research by Ariel Anders, PhD (MIT).';
      return {
        title: cleanTitle,
        description: cleanDesc,
        canonical: `${SITE_URL}/${route}`,
        heading: title || 'Research & Engineering Deep-Dive',
        bodyText: excerpt || '',
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
  };
}

function customizeHtmlForRoute(baseHtml, meta) {
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
    `    <meta property="og:image" content="https://arii.github.io/assets/roboticist.jpg" />`,
    `    <!-- Twitter Card -->`,
    `    <meta name="twitter:card" content="summary_large_image" />`,
    `    <meta name="twitter:title" content="${escapedTitle}" />`,
    `    <meta name="twitter:description" content="${escapedDesc}" />`,
    `    <meta name="twitter:image" content="https://arii.github.io/assets/roboticist.jpg" />`,
  ].join('\n');

  // Insert custom head tags right after viewport meta tag or inside <head>
  if (/<meta\s+name="viewport"[\s\S]*?\/?>/i.test(customized)) {
    customized = customized.replace(/(<meta\s+name="viewport"[\s\S]*?\/?>)/i, `$1\n${seoHeadTags}`);
  } else {
    customized = customized.replace('</head>', `${seoHeadTags}\n  </head>`);
  }

  // Inject Pre-rendered Semantic HTML into root for non-JS crawlers
  const prerenderedBody = `<div id="root"><main style="max-width:1100px;margin:0 auto;padding:2rem 1rem;"><h1>${meta.heading}</h1><p>${meta.bodyText}</p></main></div>`;
  customized = customized.replace(/<div id="root"><\/div>/, prerenderedBody);

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
    const customizedContent = customizeHtmlForRoute(indexHtmlContent, meta);

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
