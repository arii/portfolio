import React, { useEffect, useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import mermaid from 'mermaid';
import { ArrowLeft, Calendar, Clock, Download, Video, Play, ExternalLink } from 'lucide-react';
import { getResearchPostBySlug, RESEARCH_TOOLS } from '@/data/research';
import { GithubIcon } from '@/components/SocialIcons';
import SafeImage from '@/components/ui/SafeImage';
import { Box, Stack } from '@/components/layout';
import svgPanZoom from 'svg-pan-zoom';
import SEO from '@/components/SEO';
import { getTechArticleSchema, getScholarlyArticleSchema, getBreadcrumbSchema } from '@/utils/schema';

export interface ResearchDetailPageProps {
  slug: string;
  onBack: () => void;
}

const MermaidChart = ({ codeString }: { codeString: string }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Determine orientation based on screen width for responsive layout
    const isMobile = window.innerWidth < 768;
    let responsiveCodeString = codeString;
    if (isMobile) {
      // Convert to vertical layout on mobile for responsiveness
      responsiveCodeString = responsiveCodeString.replace(/graph LR/g, 'graph TD').replace(/flowchart LR/g, 'flowchart TD');
    }

    mermaid.initialize({
      startOnLoad: false,
      theme: 'dark',
      themeVariables: {
        fontFamily: 'Plus Jakarta Sans, system-ui, -apple-system, sans-serif',
        primaryColor: '#1e293b',
        primaryTextColor: '#f8fafc',
        primaryBorderColor: '#38bdf8',
        lineColor: '#94a3b8',
        textColor: '#f8fafc',
        nodeBorder: '#38bdf8',
        mainBkg: 'transparent',
        actorBkg: '#1e293b',
        actorBorder: '#38bdf8',
        actorTextColor: '#f8fafc',
        actorLineColor: '#64748b',
        signalColor: '#38bdf8',
        signalTextColor: '#f8fafc',
        labelBoxBkgColor: '#0f172a',
        labelBoxBorderColor: '#334155',
        labelTextColor: '#f8fafc',
        noteBkgColor: '#0f172a',
        noteBorderColor: '#38bdf8',
        noteTextColor: '#f8fafc',
        clusterBkg: '#0b0f19',
        clusterBorder: '#334155',
      },
      securityLevel: 'loose', // Allows interactive click events
      flowchart: {
        useMaxWidth: false,
        htmlLabels: true,
        curve: 'linear',
        padding: 36,
      },
      sequence: {
        actorFontFamily: 'Plus Jakarta Sans, system-ui, -apple-system, sans-serif',
        noteFontFamily: 'Plus Jakarta Sans, system-ui, -apple-system, sans-serif',
        messageFontFamily: 'Plus Jakarta Sans, system-ui, -apple-system, sans-serif',
        boxMargin: 16,
        boxTextMargin: 8,
        noteMargin: 12,
        messageMargin: 10,
        width: 170,
        height: 65,
        useMaxWidth: false,
      }
    });

    const renderDiagram = async () => {
      if (ref.current) {
        try {
          // Generate a unique ID for the SVG
          const id = `mermaid-${Math.random().toString(36).substr(2, 9)}`;
          const { svg } = await mermaid.render(id, responsiveCodeString);
          ref.current.innerHTML = svg;

          // Find the injected SVG and apply pan-zoom
          const svgElement = ref.current.querySelector('svg');
          if (svgElement) {
            // Apply standard dimensions so the container doesn't collapse
            svgElement.style.maxWidth = '100%';
            svgElement.style.height = 'auto';
            svgElement.style.minHeight = '350px';
            svgElement.style.overflow = 'visible';

            // Only initialize svg-pan-zoom on desktop viewports to avoid gesture conflicts on mobile
            const isMobileView = window.innerWidth < 768;
            if (!isMobileView) {
              svgPanZoom(svgElement, {
                zoomEnabled: true,
                controlIconsEnabled: false,
                fit: true,
                center: true,
                minZoom: 0.5,
                maxZoom: 10
              });
            }
          }
        } catch (error) {
          console.error("Mermaid rendering failed", error);
        }
      }
    };

    renderDiagram();
  }, [codeString]);

  return (
    <Box
      my={8}
      className="mermaid-box overflow-hidden rounded-2xl border border-line bg-surface shadow-md"
    >
      <style>{`
        /* Viewport-aware touch action and scroll limits */
        @media (max-width: 767px) {
          .mermaid-box {
            touch-action: auto !important;
          }
          .mermaid-container {
            overflow-x: auto !important;
            overflow-y: hidden !important;
            justify-content: flex-start !important;
            -webkit-overflow-scrolling: touch;
          }
          .mermaid-container svg {
            max-width: none !important;
            width: auto !important;
            min-width: 800px !important; /* Force a minimum readable width on mobile */
            height: auto !important;
          }
        }
        @media (min-width: 768px) {
          .mermaid-box {
            touch-action: none !important;
          }
        }

        /* Guarantee node text is light, crisp, and readable */
        .mermaid .node text,
        .mermaid .node .label,
        .mermaid .label,
        .mermaid text {
          fill: #f8fafc !important;
          color: #f8fafc !important;
          font-family: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif !important;
          font-size: 14px !important;
          font-weight: 600 !important;
        }
        /* Style subgraph/cluster titles */
        .mermaid .cluster text,
        .mermaid .cluster-label,
        .mermaid .cluster-label text,
        .mermaid .cluster text span {
          fill: #38bdf8 !important;
          color: #38bdf8 !important;
          font-family: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif !important;
          font-size: 15px !important;
          font-weight: 700 !important;
          letter-spacing: 0.03em !important;
        }
        .mermaid .cluster rect {
          fill: #0b0f17 !important;
          stroke: #334155 !important;
          stroke-width: 1.5px !important;
          rx: 12px !important;
          ry: 12px !important;
        }
        /* Style node boxes nicely */
        .mermaid .node rect,
        .mermaid .node circle,
        .mermaid .node polygon,
        .mermaid .node path {
          stroke-width: 2px !important;
          rx: 8px !important;
          ry: 8px !important;
        }
        /* Style connection arrows and lines - Steel Grey #94a3b8 */
        .mermaid .edgePath .path,
        .mermaid .transition {
          stroke: #94a3b8 !important;
          stroke-width: 2.5px !important;
          opacity: 1.0 !important;
        }
        .mermaid .marker {
          fill: #94a3b8 !important;
          stroke: #94a3b8 !important;
          stroke-width: 2px !important;
        }
        /* Style edge labels (connection names) elegantly */
        .mermaid .edgeLabel text,
        .mermaid .edgeLabel span {
          fill: #e2e8f0 !important;
          color: #e2e8f0 !important;
          font-family: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif !important;
          font-size: 12px !important;
          font-weight: 600 !important;
        }
        .mermaid .edgeLabel rect {
          fill: #0f172a !important;
          stroke: #334155 !important;
          stroke-width: 1px !important;
          rx: 6px !important;
          ry: 6px !important;
        }
        /* Style sequence diagrams */
        .mermaid .actor {
          stroke: #38bdf8 !important;
          fill: #1e293b !important;
          stroke-width: 2px !important;
          rx: 8px !important;
          ry: 8px !important;
        }
        .mermaid text.actor,
        .mermaid .actor text {
          fill: #f8fafc !important;
          font-size: 13px !important;
          font-weight: 700 !important;
        }
        .mermaid .actor-line {
          stroke: #475569 !important;
          stroke-width: 1.5px !important;
          stroke-dasharray: 4 4 !important;
        }
        .mermaid .messageLine0,
        .mermaid .messageLine1 {
          stroke: #38bdf8 !important;
          stroke-width: 2px !important;
        }
        .mermaid .messageText {
          fill: #e2e8f0 !important;
          stroke: none !important;
          font-size: 12px !important;
          font-weight: 600 !important;
        }
        .mermaid .active0,
        .mermaid .active1 {
          fill: #0f172a !important;
          stroke: #38bdf8 !important;
          stroke-width: 1.5px !important;
        }
        .mermaid .note {
          fill: #0f172a !important;
          stroke: #38bdf8 !important;
          stroke-width: 1.5px !important;
          rx: 6px !important;
          ry: 6px !important;
        }
        .mermaid .noteText,
        .mermaid .noteText span {
          fill: #f8fafc !important;
          font-size: 12px !important;
          font-weight: 500 !important;
        }
        .mermaid .sequenceNumber {
          fill: #38bdf8 !important;
          stroke: #38bdf8 !important;
          color: #0b0f19 !important;
          font-weight: 700 !important;
        }
        .mermaid .labelBox {
          fill: #0f172a !important;
          stroke: #334155 !important;
          stroke-width: 1px !important;
        }
        /* Style padding of SVG cleanly for proper containment */
        .mermaid svg {
          padding: 36px !important;
          overflow: visible !important;
        }
      `}</style>
      <div
        ref={ref}
        className="mermaid-container flex flex-row justify-center"
        style={{ width: '100%', minHeight: '600px', padding: '1rem' }}
      />
    </Box>
  );
};

const ResearchDetailPage: React.FC<ResearchDetailPageProps> = ({ slug, onBack }) => {
  const post = getResearchPostBySlug(slug);
  const matchingTool = RESEARCH_TOOLS.find(
    (t) => t.id === slug || (t.canonicalPath && t.canonicalPath.replace('/research/', '') === slug)
  );

  if (!post) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-16 text-center rounded-3xl bg-surface/40 border border-line">
        <SEO title="Article Not Found" description="The requested research paper could not be found." />
        <h2 className="text-2xl font-bold text-text-main">Article Not Found</h2>
        <p className="mt-2 text-text-dim">The requested research paper could not be found.</p>
        <button
          onClick={onBack}
          className="mt-6 inline-flex items-center space-x-2 rounded-xl bg-accent-sky hover:bg-accent-sky/90 text-bg px-4 py-2 text-sm font-semibold transition-colors min-h-[44px]"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Research</span>
        </button>
      </div>
    );
  }

  const imgMatch = post.content.match(/!\[.*?\]\((.*?)\)/);
  const firstImage = imgMatch ? imgMatch[1].split('#')[0] : undefined;
  const ogImage = firstImage || matchingTool?.image;

  const primarySection = (post.category || '').toLowerCase().includes('robotics') ? 'research' : 'devai';

  const isScholarly =
    primarySection === 'research' ||
    post.slug.includes('thesis') ||
    post.slug.includes('planning') ||
    post.slug.includes('report');

  const articleSchema = isScholarly
    ? getScholarlyArticleSchema({
        headline: post.title,
        abstract: post.summary,
        canonicalPath: `/${primarySection}/${post.slug}`,
        datePublished: post.date,
        image: ogImage,
      })
    : getTechArticleSchema({
        headline: post.title,
        description: post.summary,
        canonicalPath: `/${primarySection}/${post.slug}`,
        datePublished: post.date,
        image: ogImage,
        keywords: post.tags,
      });

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: primarySection === 'research' ? 'Robotics Research' : 'DevAI & Software Systems', path: `/${primarySection}` },
    { name: post.title, path: `/${primarySection}/${post.slug}` },
  ]);

  const detailSchemas = [articleSchema, breadcrumbSchema];

  return (
    <article className="mx-auto max-w-4xl px-4 py-12 space-y-8">
      <SEO
        title={post.title}
        description={post.summary}
        canonicalUrl={`/${primarySection}/${post.slug}`}
        ogType="article"
        ogImage={ogImage}
        jsonLd={detailSchemas}
      />
      <button
        onClick={onBack}
        className="inline-flex items-center space-x-2 text-sm font-semibold text-text-dim hover:text-accent-sky transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        <span>Back to Articles</span>
      </button>

      <header className="border-b border-line pb-8 space-y-4">
        <Stack direction="row" wrap className="gap-2">
          {post.tags.map((tag) => (
            <Box
              as="span"
              key={tag}
              px={3}
              py={1}
              className="rounded-md bg-accent-sky/10 text-xs font-semibold text-accent-sky border border-accent-sky/15"
            >
              {tag}
            </Box>
          ))}
        </Stack>
        <h1 className="text-3xl sm:text-4xl font-black text-text-main leading-tight">
          {post.title}
        </h1>
        <div className="flex items-center space-x-6 text-xs text-text-dim">
          <span className="flex items-center space-x-1.5">
            <Calendar className="h-4 w-4 text-text-dim" />
            <time dateTime={post.date}>{post.date}</time>
          </span>
          <span className="flex items-center space-x-1.5">
            <Clock className="h-4 w-4 text-text-dim" />
            <span>{post.readingTime}</span>
          </span>
        </div>

        {matchingTool && (matchingTool.pdfUrl || matchingTool.videoUrl || matchingTool.playlistUrl || matchingTool.sourceUrl || matchingTool.externalUrl) && (
          <div className="flex flex-wrap gap-3 pt-4 border-t border-line/50">
            {matchingTool.pdfUrl && (
              <a
                href={matchingTool.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-accent/15 border border-accent/30 text-accent hover:bg-accent/25 px-4 py-2 rounded-xl text-xs font-semibold transition-colors min-h-[44px]"
              >
                <Download className="h-4 w-4 text-accent" />
                <span>Download PDF Report</span>
              </a>
            )}
            {matchingTool.videoUrl && (
              <a
                href={matchingTool.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-surface border border-line text-text-dim hover:bg-surface-alt hover:text-text-main px-4 py-2 rounded-xl text-xs font-semibold transition-colors min-h-[44px]"
              >
                <Video className="h-4 w-4 text-accent" />
                <span>Watch Video Demo</span>
              </a>
            )}
            {matchingTool.playlistUrl && (
              <a
                href={matchingTool.playlistUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-surface border border-line text-text-dim hover:bg-surface-alt hover:text-text-main px-4 py-2 rounded-xl text-xs font-semibold transition-colors min-h-[44px]"
              >
                <Play className="h-4 w-4 text-accent" />
                <span>Watch Playlist</span>
              </a>
            )}
            {matchingTool.sourceUrl && (
              <a
                href={matchingTool.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-surface border border-line text-text-dim hover:bg-surface-alt hover:text-text-main px-4 py-2 rounded-xl text-xs font-semibold transition-colors min-h-[44px]"
              >
                <GithubIcon className="h-4 w-4" />
                <span>Source Repository</span>
              </a>
            )}
            {matchingTool.externalUrl && !matchingTool.pdfUrl && (
              <a
                href={matchingTool.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-surface border border-line text-text-dim hover:bg-surface-alt hover:text-text-main px-4 py-2 rounded-xl text-xs font-semibold transition-colors min-h-[44px]"
              >
                <ExternalLink className="h-4 w-4 text-accent" />
                <span>{matchingTool.externalLinkDisplayLabel || 'External Link'}</span>
              </a>
            )}
          </div>
        )}
      </header>

      {/* Render Markdown content cleanly using elegant, high-fidelity custom components */}
      <div className="prose-editorial">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            code: ({ className, children, ...props }) => {
              const match = /language-(\w+)/.exec(className || '');
              const language = match ? match[1] : '';
              const codeString = String(children).replace(/\n$/, '');

              if (language === 'mermaid') {
                return <MermaidChart codeString={codeString} />;
              }

              // Match block vs inline
              const isBlock = codeString.includes('\n') || !!language;

              if (isBlock) {
                return (
                  <div className="my-6 rounded-2xl border border-line overflow-hidden bg-bg">
                    {language && (
                      <div className="bg-surface px-4 py-2 border-b border-line text-xs font-semibold text-text-dim">
                        {language}
                      </div>
                    )}
                    <pre className="p-4 overflow-x-auto text-sm font-mono text-accent-sky/90 leading-relaxed bg-bg whitespace-pre-wrap break-words">
                      <code>{children}</code>
                    </pre>
                  </div>
                );
              }
              return (
                <code className="bg-surface text-text-main px-1.5 py-0.5 rounded font-mono text-xs border border-line normal-case" {...props}>
                  {children}
                </code>
              );
            },
            table: ({ children, ...props }) => (
              <div className="my-6 w-full overflow-x-auto rounded-2xl border border-line bg-surface/10">
                <table className="w-full border-collapse text-sm" {...props}>
                  {children}
                </table>
              </div>
            ),
            th: ({ children, ...props }) => (
              <th className="border-b border-line bg-surface/80 p-4 text-left font-sans text-sm font-bold text-text-main" {...props}>
                {children}
              </th>
            ),
            td: ({ children, ...props }) => (
              <td className="border-b border-line/50 p-4 text-text-body" {...props}>
                {children}
              </td>
            ),
            h1: ({ children, ...props }) => (
              <h1 className="text-3xl font-black text-text-main mt-12 mb-4" {...props}>
                {children}
              </h1>
            ),
            h2: ({ children, ...props }) => {
              let textContent = '';
              if (typeof children === 'string') {
                textContent = children;
              } else if (Array.isArray(children)) {
                textContent = children.map(c => typeof c === 'string' ? c : '').join('');
              }
              const id = textContent.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
              return (
                <h2 id={id || undefined} className="text-2xl font-bold text-text-main mt-12 mb-4 pb-2 border-b border-line" {...props}>
                  {children}
                </h2>
              );
            },
            h3: ({ children, ...props }) => {
              let textContent = '';
              if (typeof children === 'string') {
                textContent = children;
              } else if (Array.isArray(children)) {
                textContent = children.map(c => typeof c === 'string' ? c : '').join('');
              }
              const id = textContent.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
              return (
                <h3 id={id || undefined} className="text-lg font-bold text-text-main mt-8 mb-3" {...props}>
                  {children}
                </h3>
              );
            },
            h4: ({ children, ...props }) => {
              let textContent = '';
              if (typeof children === 'string') {
                textContent = children;
              } else if (Array.isArray(children)) {
                textContent = children.map(c => typeof c === 'string' ? c : '').join('');
              }
              const id = textContent.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
              return (
                <h4 id={id || undefined} className="text-base font-bold text-text-main mt-6 mb-2" {...props}>
                  {children}
                </h4>
              );
            },
            ul: ({ children, ...props }) => (
              <ul className="list-disc pl-6 my-4 space-y-1.5 text-text-body" {...props}>
                {children}
              </ul>
            ),
            ol: ({ children, ...props }) => (
              <ol className="list-decimal pl-6 my-4 space-y-1.5 text-text-body" {...props}>
                {children}
              </ol>
            ),
            a: ({ href, children, ...props }) => {
              if (href) {
                const isNoEmbed = href.includes('no-embed');
                const cleanHref = href.replace(/[?#]no-embed/, '');

                // Extract video ID or playlist ID
                let embedUrl: string | null = null;
                const ytMatch = cleanHref.match(/(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
                const listMatch = cleanHref.match(/youtube\.com\/.*[?&]list=([a-zA-Z0-9_-]+)/);

                if (ytMatch) {
                  embedUrl = `https://www.youtube.com/embed/${ytMatch[1]}${listMatch ? `?list=${listMatch[1]}` : ''}`;
                } else if (listMatch) {
                  embedUrl = `https://www.youtube.com/embed/videoseries?list=${listMatch[1]}`;
                }

                // If children is an image (thumbnail preview) or link text asking to play video
                const isEmbedLink = (cleanHref.includes('youtube.com') || cleanHref.includes('youtu.be')) && !isNoEmbed;

                if (embedUrl && isEmbedLink) {
                  return (
                    <div className="block space-y-2">
                      <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-line bg-surface shadow-md">
                        <iframe
                          src={embedUrl}
                          title={typeof children === 'string' ? children : 'YouTube video player'}
                          className="absolute top-0 left-0 w-full h-full border-0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                        />
                      </div>
                      <a
                        href={cleanHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block text-xs font-medium text-accent hover:underline"
                        {...props}
                      >
                        Open on YouTube ↗
                      </a>
                    </div>
                  );
                }

                return (
                  <a
                    href={cleanHref}
                    target={cleanHref.startsWith('http') ? '_blank' : undefined}
                    rel={cleanHref.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-accent hover:underline font-medium"
                    {...props}
                  >
                    {children}
                  </a>
                );
              }

              return (
                <a
                  href={href}
                  className="text-accent hover:underline font-medium"
                  {...props}
                >
                  {children}
                </a>
              );
            },
            p: ({ children, ...props }) => {
              // Check if paragraph contains media items that should be displayed side-by-side in a grid
              // ReactMarkdown wraps standalone block elements or consecutive links in <p>
              const childrenArray = React.Children.toArray(children);

              // Detect if all element children are links to YouTube or images
              const isMediaGroup = childrenArray.length > 1 && childrenArray.every((child) => {
                if (typeof child === 'string' && child.trim() === '') return true; // whitespace between links
                if (React.isValidElement(child)) {
                  const propsAny = child.props as any;
                  // Is it a video link?
                  if (propsAny && propsAny.href && (propsAny.href.includes('youtube.com') || propsAny.href.includes('youtu.be'))) {
                    return true;
                  }
                  // Is it an image?
                  if (child.type === 'img' || (propsAny && propsAny.src)) {
                    return true;
                  }
                }
                return false;
              });

              if (isMediaGroup) {
                return (
                  <div className="my-8 grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                    {childrenArray.map((child, idx) => {
                      if (typeof child === 'string' && child.trim() === '') return null;
                      return <div key={idx} className="w-full">{child}</div>;
                    })}
                  </div>
                );
              }

              const isBlockElement = (node: React.ReactNode): boolean => {
                if (!React.isValidElement(node)) return false;
                const type = node.type;
                if (type === 'img' || type === 'figure' || type === 'div' || (node.props as any)?.src) {
                  return true;
                }
                if (type === 'a' || (node.props as any)?.href) {
                  const props = node.props as any;
                  if (props && props.href && (props.href.includes('youtube.com') || props.href.includes('youtu.be')) && !props.href.includes('no-embed')) {
                    return true;
                  }
                }
                const nodeChildren = (node.props as any)?.children;
                if (nodeChildren) {
                  if (Array.isArray(nodeChildren)) {
                    return nodeChildren.some(isBlockElement);
                  }
                  return isBlockElement(nodeChildren);
                }
                return false;
              };
              const hasBlockChild = childrenArray.some(isBlockElement);

              if (hasBlockChild) {
                return <div className="mb-6">{children}</div>;
              }

              return (
                <p className="text-text-body text-base leading-relaxed mb-6" {...props}>
                  {children}
                </p>
              );
            },
            li: ({ children, ...props }) => (
              <li className="text-text-body leading-relaxed" {...props}>
                {children}
              </li>
            ),
            img: ({ src, alt, ...props }) => {
              const cleanSrc = src ? src.split('#')[0] : '';
              const hash = src && src.includes('#') ? src.split('#').slice(1).join('#') : '';
              const shouldInvert = hash.includes('invert-dark') || hash.includes('invert');

              // Extract max-width from hash
              let maxWidthClass = '';
              if (hash.includes('max-w-xs')) maxWidthClass = 'max-w-xs mx-auto';
              else if (hash.includes('max-w-sm')) maxWidthClass = 'max-w-sm mx-auto';
              else if (hash.includes('max-w-md')) maxWidthClass = 'max-w-md mx-auto';
              else if (hash.includes('max-w-lg')) maxWidthClass = 'max-w-lg mx-auto';
              else if (hash.includes('max-w-xl')) maxWidthClass = 'max-w-xl mx-auto';
              else if (hash.includes('max-w-2xl')) maxWidthClass = 'max-w-2xl mx-auto';
              else if (hash.includes('max-w-3xl')) maxWidthClass = 'max-w-3xl mx-auto';

              // Extract aspect ratio from hash
              let aspectClass = '';
              if (hash.includes('aspect-4/3')) aspectClass = 'aspect-[4/3]';
              else if (hash.includes('aspect-video')) aspectClass = 'aspect-video';
              else if (hash.includes('aspect-square')) aspectClass = 'aspect-square';

              // Extract object-fit from hash
              let objectFitClass = 'object-contain';
              if (hash.includes('object-cover')) {
                objectFitClass = 'object-cover';
              } else if (hash.includes('object-contain') || hash.includes('contain')) {
                objectFitClass = 'object-contain';
              }

              // Extract max-height from hash if present, or set default based on #tall / #contain
              let maxHeightClass = 'max-h-[380px]';
              const maxHMatch = hash.match(/max-h-\[[^\]]+\]|max-h-[a-zA-Z0-9]+/);
              if (maxHMatch) {
                maxHeightClass = maxHMatch[0];
              } else if (hash.includes('tall') || hash.includes('contain')) {
                maxHeightClass = 'max-h-[500px]';
              }

              // Parse alt text for pipe-delimited description and link info
              let displayCaption = alt || '';
              let linkText = '';
              let linkUrl = '';

              if (alt && alt.includes('|')) {
                const parts = alt.split('|');
                displayCaption = parts[0]?.trim() || '';
                linkText = parts[1]?.trim() || '';
                linkUrl = parts[2]?.trim() || '';
              }

              const containerClasses = aspectClass
                ? `w-full ${aspectClass} relative flex justify-center items-center`
                : 'w-full flex justify-center items-center';

              const imgClasses = aspectClass
                ? `w-full h-full ${objectFitClass} rounded-xl ${shouldInvert ? 'dark:invert dark:hue-rotate-180 dark:mix-blend-screen' : ''}`
                : `${maxHeightClass} w-auto max-w-full h-auto ${objectFitClass} rounded-xl ${shouldInvert ? 'dark:invert dark:hue-rotate-180 dark:mix-blend-screen' : ''}`;

              return (
                <figure className={`my-6 space-y-2 ${maxWidthClass}`}>
                  <div className="overflow-hidden rounded-2xl border border-line bg-surface/40 p-2 shadow-lg flex items-center justify-center">
                    <SafeImage
                      src={cleanSrc}
                      alt={displayCaption}
                      containerClassName={containerClasses}
                      className={imgClasses}
                      {...props}
                    />
                  </div>
                  {displayCaption && (
                    <figcaption className="text-center text-xs text-text-dim px-2 leading-relaxed">
                      {!displayCaption.toLowerCase().startsWith('figure') && (
                        <span className="font-semibold text-accent-sky">Figure: </span>
                      )}
                      {displayCaption}
                      {linkText && linkUrl && (
                        <>
                          {' '}
                          <span className="text-accent font-semibold ml-1">
                            {linkText}
                          </span>
                        </>
                      )}
                    </figcaption>
                  )}
                </figure>
              );
            }
          }}
        >
          {post.content}
        </ReactMarkdown>
      </div>
    </article>
  );
};

export default ResearchDetailPage;
