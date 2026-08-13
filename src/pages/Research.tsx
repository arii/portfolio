// impeccable-ignore-file
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Icon } from '@/components/ui/Icon';
import { Search, ArrowRight, Activity, FileText, Cpu, LucideIcon, ExternalLink,
Globe, Clock, X, FlaskConical, ArrowLeft } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Box, Stack, Text, Grid } from '@/layouts/Primitives';
import { PageHeader } from '@/components/ui/PageHeader';
import { BaseCard } from '@/components/ui/BaseCard';
import { StatusBadge } from '@/components/ui/StatusBadge';
import { ActionButton } from '@/components/ui/ActionButton';
import { RESEARCH_POSTS, getResearchPostBySlug } from '@/data/research';
import ReactMarkdown from 'react-markdown';

// Custom Git icon wrapper
const GitIcon: React.FC<any> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={props.className}
    style={{ width: '100%', height: '100%' }}
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

function getToolIcon(tool: any): LucideIcon {
  if (tool.category?.includes('DevAI')) return Cpu;
  if (tool.id?.includes('scraper') || tool.id?.includes('pipeline')) return Activity;
  if (tool.id?.includes('hrm')) return Globe;
  return Search;
}

function ToolImage({ tool, onImageClick }: { tool: any; onImageClick?: (src: string) => void }) {
  if (tool.customPreview) {
    const { logo, headline, tagline } = tool.customPreview;
    return (
      <Box width="full" className="card-screenshot-wrapper boomtick-blog-preview border-b border-white/8">
        <Stack gap={1} className="preview-content">
          <Text className="preview-logo">
            {logo.prefix}<span className="logo-accent">{logo.accent}</span><span className="logo-dot font-light">{logo.suffix}</span>
          </Text>
          <Text className="preview-headline">
            {headline.map((line: any, idx: number) => (
              <React.Fragment key={idx}>
                {line.accent ? (
                  <span className="headline-accent">{line.accent}</span>
                ) : (
                  line.text
                )}
                {idx < headline.length - 1 && <br />}
              </React.Fragment>
            ))}
          </Text>
          <Text className="preview-tagline">
            {tagline}
          </Text>
        </Stack>
      </Box>
    );
  }

  if (!tool.image) return null;

  const handleImageClick = (e: React.MouseEvent) => {
    if (onImageClick) {
      e.preventDefault();
      e.stopPropagation();
      onImageClick(tool.image);
    }
  };

  return (
    <Box width="full" className="card-screenshot-wrapper border-b border-white/8 cursor-zoom-in" onClick={handleImageClick}>
      <img
        src={tool.image}
        alt={tool.imageAlt || `Screenshot of ${tool.title}`}
        className="opacity-80 hover:opacity-100 transition-opacity duration-500 w-full"
      />
    </Box>
  );
}

function FlagshipCard({
  tool,
  onImageClick,
  onNavigate
}: {
  tool: any;
  onImageClick?: (src: string) => void;
  onNavigate: (path: string) => void;
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsExpanded(!isExpanded);
  };

  return (
    <BaseCard
      key={tool.id}
      padding={0}
      gap={0}
      surface="surface"
      height="full"
      overflow="hidden"
    >
      <Stack gap={0} height="full">
        <ToolImage tool={tool} onImageClick={onImageClick} />
        <Stack flex={1} paddingTop={3.5} paddingX={4} paddingBottom={4} gap={0}>
          <Box display="flex" justify="between" align="start" width="full" marginBottom={3}>
            <Box width={12} height={12} surface="muted" radius="md" display="flex" align="center" justify="center">
              <Icon icon={getToolIcon(tool)} size="lg" color="accent" />
            </Box>
            <StatusBadge label={tool.id === 'boomtick-blog' ? 'Active dev' : 'Flagship'} />
          </Box>

          <Text variant="mono" size="micro" color="accent" weight="font-bold" uppercase tracking="widest" marginBottom={1}>
            {tool.category}
          </Text>
          <Text as="h3" variant="display" size="2xl" weight="font-black" marginBottom={2}>
            {tool.title}
          </Text>
          {tool.subtitle && (
            <Text size="sm" color="accent" weight="font-semibold" uppercase tracking="tighter" marginBottom={2}>
              {tool.subtitle}
            </Text>
          )}
          <Text
            variant="body"
            size="md"
            color="dim"
            leading="relaxed"
            marginBottom={3}
            className={cn(!isExpanded && tool.summary.length > 150 && "line-clamp-3")}
          >
            {tool.summary}
          </Text>
          {tool.summary && tool.summary.length > 150 && (
            <Box as="button" onClick={toggleExpand} marginBottom={5} alignSelf="start" className="text-accent hover:underline text-xs font-semibold focus:outline-none z-30">
              {isExpanded ? "Read Less" : "Read More"}
            </Box>
          )}

          {tool.inDevMessage && (
            <div className="in-dev-banner">
              <Icon icon={FlaskConical} size="sm" color="dim" aria-hidden="true" />
              <p>
                <strong>{tool.inDevMessage.highlight}</strong>{tool.inDevMessage.rest}
              </p>
            </div>
          )}

          <Box display="flex" wrap="wrap" gap={1.5} marginBottom={3}>
            {tool.tags.map((tag: string) => (
              <Text key={tag} className="flagship-tag">
                {tag}
              </Text>
            ))}
          </Box>

          <Stack direction={{ base: "col", sm: "row" }} gap={3} marginTop="auto" width={{ base: "full", sm: "auto" }}>
            {tool.externalUrl ? (
              <ActionButton
                as="a"
                href={tool.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                paddingX={4}
                paddingY={2}
                zIndex="docked"
                width={{ base: "full", sm: "auto" }}
              >
                {tool.externalLinkDisplayLabel || 'Open Link'}
                <Icon icon={ExternalLink} size="sm" />
              </ActionButton>
            ) : (
              <ActionButton
                as="button"
                onClick={() => onNavigate(`/research/${tool.slug}`)}
                variant="primary"
                paddingX={4}
                paddingY={2}
                zIndex="docked"
                width={{ base: "full", sm: "auto" }}
              >
                Read Deep-Dive
                <Icon icon={ArrowRight} size="sm" />
              </ActionButton>
            )}
            {tool.sourceUrl && (
              <ActionButton
                as="a"
                href={tool.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
                paddingX={4}
                paddingY={2}
                zIndex="docked"
                width={{ base: "full", sm: "auto" }}
              >
                Source Repo
                <Icon icon={GitIcon} size="sm" />
              </ActionButton>
            )}
          </Stack>
        </Stack>
      </Stack>
    </BaseCard>
  );
}

function ToolCard({ tool, onNavigate }: {
  tool: any;
  onNavigate: (path: string) => void;
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const isLink = !!tool.sourceUrl && !tool.slug;
  const href = tool.slug ? `/research/${tool.slug}` : (tool.sourceUrl || '#');

  const handleClick = (e: React.MouseEvent) => {
    if (!isLink) {
      e.preventDefault();
      onNavigate(href);
    }
  };

  const toggleExpand = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsExpanded(!isExpanded);
  };

  return (
    <Stack
      as={isLink ? "a" : "div"}
      href={isLink ? tool.sourceUrl : undefined}
      target={isLink ? "_blank" : undefined}
      rel={isLink ? "noopener noreferrer" : undefined}
      onClick={isLink ? undefined : handleClick}
      height="full" align="start" textAlign="left" gap={0}
      paddingTop={3.5} paddingX={4} paddingBottom={4}
      className={cn(
        "group relative bg-surface rounded-md shadow-sm card-border",
        "hover:border-accent cursor-pointer no-underline"
      )}
    >
      <Stack gap={0} width="full">
        <Box display="flex" justify="between" align="start" width="full" marginBottom={3}>
          <Box width={10} height={10} surface="muted" radius="md" display="flex" align="center" justify="center">
            <Icon icon={getToolIcon(tool)} size="md" color="dim" />
          </Box>
          <StatusBadge label={tool.status} />
        </Box>
        <Text variant="mono" size="micro" color="dim" weight="font-bold" uppercase tracking="widest" opacityVariant="subtle" marginBottom={1}>{tool.category}</Text>
        <Text variant="display" size="xl" weight="font-black" marginBottom={2}>{tool.title}</Text>
        {tool.subtitle && (
          <Text size="micro" color="accent" weight="font-normal" uppercase tracking="tighter" marginBottom={2}>{tool.subtitle}</Text>
        )}
        <Text
          size="sm"
          color="dim"
          leading="relaxed"
          marginBottom={3}
          className={cn(!isExpanded && tool.summary.length > 120 && "line-clamp-3")}
        >
          {tool.summary}
        </Text>
        {tool.summary && tool.summary.length > 120 && (
          <Box as="button" onClick={toggleExpand} marginBottom={5} alignSelf="start" className="text-accent hover:underline text-xs font-semibold focus:outline-none">
            {isExpanded ? "Read Less" : "Read More"}
          </Box>
        )}
        <Box display="flex" wrap="wrap" gap={1.5} marginBottom={3}>
          {tool.tags.map((tag: string) => (
            <Text key={tag} className="flagship-tag">{tag}</Text>
          ))}
        </Box>
      </Stack>
      <Box display="flex" align="center" gap={2} marginTop="auto">
        <Text weight="font-bold" size="xs" uppercase tracking="widest" color="accent">
          {isLink ? 'View Source' : 'View Assets'}
        </Text>
        <Icon icon={ArrowRight} size="md" color="accent" />
      </Box>
    </Stack>
  );
}

function ToolSection({ title, tools, onNavigate }: { title: string, tools: any[], onNavigate: (path: string) => void }) {
  if (tools.length === 0) return null;
  return (
    <Stack gap={12} width="full">
      <Box paddingBottom={4} display="flex" justify="between" align="center" border="b" width="full">
        <Text variant="headline" size="2xl" weight="font-black">{title}</Text>
        <Text variant="mono" size="xs" color="dim" weight="font-semibold" uppercase tracking="widest" opacityVariant="subtle">{tools.length} TOOLS</Text>
      </Box>
      <Grid cols={{ base: 1, sm: 2, lg: 3 }} gap={6} width="full">
        {tools.map((tool) => (
          <ToolCard key={tool.id} tool={tool} onNavigate={onNavigate} />
        ))}
      </Grid>
    </Stack>
  );
}

const STACK_CATEGORIES = [
  { label: 'Stack', tags: ['React', 'Vite', 'TypeScript', 'Python'], colorClass: 'bg-brand-purple/10 text-brand-purple border border-brand-purple/20' },
  { label: 'Infra', tags: ['GitHub Actions', 'Vercel', 'Playwright'], colorClass: 'bg-brand-green/10 text-brand-green border border-brand-green/20' },
  { label: 'Robotics', tags: ['ROS1/2', 'C++', 'Navigation', 'Localization'], colorClass: 'bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/20' },
  { label: 'AI', tags: ['LLM Workflows', 'Agentic CI/CD'], colorClass: 'bg-brand-amber/10 text-brand-amber border border-brand-amber/20' },
];

export interface ResearchProps {
  subtitle?: string;
}

const Research: React.FC<ResearchProps> = () => {
  const { slug } = useParams<{ slug?: string }>();
  const navigate = useNavigate();
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const posts = RESEARCH_POSTS;

  // Grouping posts as modeled in tech-dancer
  const flagshipTools = posts.filter(p => p.slug === 'hrm-flagship' || p.slug === 'repo-auditor-ai' || p.slug === 'deployment-impact-analyzer');
  const engineeringTools = posts.filter(p => p.category === 'DevAI Tooling' || p.category === 'DevAI System' || p.slug === 'github-actions-workflow-optimization');
  const dataContentTools = posts.filter(p => p.category === 'Data Engineering' || p.category === 'Content Tools');
  const ecommerceTools = posts.filter(p => p.category === 'Business Automation');

  const studies = posts.filter(p => p.slug === 'model-context-protocol-robotics' || p.slug === 'github-actions-workflow-optimization');

  const onNavigate = (path: string) => {
    navigate(path);
  };

  if (slug) {
    const post = getResearchPostBySlug(slug);

    if (!post) {
      return (
        <div className="mx-auto max-w-3xl px-4 py-16 text-center">
          <h2 className="text-2xl font-bold text-white">Article Not Found</h2>
          <p className="mt-2 text-slate-400">The requested research paper could not be found.</p>
          <button
            onClick={() => onNavigate('/research')}
            className="mt-6 inline-flex items-center space-x-2 rounded-lg bg-brand-green px-4 py-2 text-sm font-medium text-black hover:opacity-90 font-bold"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Research</span>
          </button>
        </div>
      );
    }

    return (
      <article className="mx-auto max-w-3xl px-4 py-12">
        <button
          onClick={() => onNavigate('/research')}
          className="mb-8 inline-flex items-center space-x-2 text-sm font-medium text-slate-400 hover:text-brand-green transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Articles</span>
        </button>

        <header className="mb-8 border-b border-slate-850 pb-8">
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-brand-green/10 px-2.5 py-0.5 text-xs font-medium text-brand-green"
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-3xl font-extrabold text-white sm:text-4xl">
            {post.title}
          </h1>
          <div className="mt-4 flex items-center space-x-6 text-sm text-slate-500">
            <span className="flex items-center space-x-1.5">
              <Clock className="h-4 w-4" />
              <time dateTime={post.date}>{post.date}</time>
            </span>
            <span className="flex items-center space-x-1.5">
              <Clock className="h-4 w-4" />
              <span>{post.readingTime}</span>
            </span>
          </div>
        </header>

        <div className="prose prose-invert dark:prose-invert max-w-none text-slate-300 leading-relaxed space-y-6">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
      </article>
    );
  }

  return (
    <Box as="section" maxWidth="7xl" marginX="auto" width="full">
      <Stack gap={16} width="full">
        {/* Split Hero Section */}
        <Grid cols={{ base: 1, lg: 12 }} gap={8} align="center" width="full">
          <Stack gap={2} span={{ base: 1, lg: 7 }}>
            <PageHeader
              label="HIRE_ME"
              title="DevAI Portfolio"
              as="h1"
              paddingBottom={0}
              border="none"
            />
            <Text variant="body" size={{ base: "lg", lg: "xl" }} color="dim" maxWidth="prose" leading="relaxed">
              building AI-assisted engineering infrastructure in my free time. This portfolio showcased my work in agentic CI/CD, LLM workflows, and developer tooling.
            </Text>

            {/* Scrollable Focus Tags for Mobile */}
            <Stack direction="col" align="start" gap={2} width="full" marginTop={2} marginBottom={2} paddingY={1} display={{ base: "flex", lg: "none" }}>
              <Text size="micro" color="dim" uppercase tracking="widest" weight="font-bold">Focus</Text>
              <Box display="flex" overflowX="auto" noScrollbar gap={2} width="full" className="flex-nowrap scroll-mask-fade">
                {STACK_CATEGORIES.flatMap(cat => cat.tags.map(tag => ({ tag, col: cat.colorClass }))).map(item => (
                  <Text key={item.tag} size="micro" weight="font-bold" paddingX={2} paddingY={0.5} radius="sm" className={cn(item.col, "shrink-0")}>{item.tag}</Text>
                ))}
              </Box>
            </Stack>

            {/* Categorized Stack Grid for Desktop */}
            <Stack gap={2} marginTop={4} marginBottom={4} width="full" display={{ base: "none", lg: "flex" }}>
              {STACK_CATEGORIES.map(cat => (
                <Box key={cat.label} display="flex" align="center" gap={2} width="full">
                  <Text size="micro" color="dim" uppercase tracking="widest" weight="font-bold" width={24} shrink={0}>{cat.label}</Text>
                  <Box display="flex" wrap="wrap" gap={2} width="full">
                    {cat.tags.map(tag => (
                      <Text key={tag} size="micro" weight="font-bold" paddingX={2} paddingY={0.5} radius="sm" className={cat.colorClass}>{tag}</Text>
                    ))}
                  </Box>
                </Box>
              ))}
            </Stack>

            <Stack direction={{ base: "col", sm: "row" }} gap={3} marginTop={2} width={{ base: "full", sm: "auto" }}>
              <ActionButton as="a" href="#flagship" variant="primary" paddingX={6} paddingY={3} width={{ base: "full", sm: "auto" }}>
                View Flagship Projects
              </ActionButton>
              <ActionButton as="a" href="#articles" variant="secondary" paddingX={6} paddingY={3} width={{ base: "full", sm: "auto" }}>
                Read Implementation Articles
              </ActionButton>
            </Stack>
          </Stack>
        </Grid>

        {/* Flagship Projects Section */}
        <Stack gap={8} id="flagship" marginTop={2} width="full">
          <Box paddingBottom={2} display="flex" justify="between" align="center" border="b" width="full">
            <Text variant="headline" size="2xl" weight="font-black">Flagship Projects</Text>
            <Text variant="mono" size="xs" color="dim" weight="font-semibold" uppercase tracking="widest" opacityVariant="subtle">CASE STUDIES</Text>
          </Box>
          <Grid cols={{ base: 1, sm: 2, lg: 3 }} gap={6} width="full">
            {flagshipTools.map((tool) => (
              <FlagshipCard key={tool.id} tool={tool} onImageClick={setLightboxImage} onNavigate={onNavigate} />
            ))}
          </Grid>
        </Stack>

        <Box className="why-this-matters">
          <Text as="h2" size="3xl" className="label">Why this matters</Text>
          <Text as="p">
            Shipping high-fidelity products requires <Text weight="font-bold" color="accent">practical AI orchestration</Text>, not hype. I focus on engineering systems that keep the developer in the loop while maintaining high standards.
          </Text>
        </Box>

        {/* Engineering Systems Section */}
        <ToolSection title="Engineering Systems" tools={engineeringTools} onNavigate={onNavigate} />

        {/* Data & Content Systems Section */}
        <ToolSection title="Data & Content Systems" tools={dataContentTools} onNavigate={onNavigate} />

        {/* Ecommerce Experiments Section */}
        <ToolSection title="Ecommerce Experiments" tools={ecommerceTools} onNavigate={onNavigate} />

        {/* Articles & Research Section */}
        {studies.length > 0 && (
          <Stack gap={12} id="articles" width="full">
            <Box paddingBottom={4} display="flex" justify="between" align="center" border="b" width="full">
              <Text as="h2" variant="headline" size="2xl" weight="font-black">Articles & Research</Text>
              <Text variant="mono" size="xs" color="dim" weight="font-semibold" uppercase tracking="widest" opacityVariant="subtle">{studies.length} POSTS</Text>
            </Box>

            <Grid cols={{ base: 1, sm: 2, lg: 3 }} gap={6} width="full">
              {studies.map((study) => (
                <Stack
                  key={study.slug}
                  onClick={() => onNavigate(`/research/${study.slug}`)}
                  height="full"
                  className={cn(
                    "group relative bg-surface rounded-md shadow-sm card-border",
                    "hover:border-accent cursor-pointer"
                  )}
                  paddingTop={3.5}
                  paddingX={4}
                  paddingBottom={4}
                  gap={0}
                >
                  <Box display="flex" justify="between" align="center" marginBottom={3} width="full">
                    <Text variant="mono" size="micro" color="accent" weight="font-bold" uppercase tracking="widest">{study.category}</Text>
                    <StatusBadge label="published" />
                  </Box>

                  <Text as="h3" variant="display" size="2xl" weight="font-black" marginBottom={2}>
                    {study.title}
                  </Text>
                  <Box display="flex" align="center" gap={4} marginBottom={3}>
                    <Text variant="mono" size="micro" color="dim" opacityVariant="muted">{study.date}</Text>
                    {study.readingTime && (
                      <Box display="flex" align="center" gap={1} opacityVariant="muted">
                        <Icon icon={Clock} size="xs" color="dim" />
                        <Text variant="mono" size="micro" color="dim">{study.readingTime.toUpperCase()}</Text>
                      </Box>
                    )}
                  </Box>

                  <Text variant="body" size="sm" color="dim" clamp={3} leading="relaxed" marginBottom={3}>
                    {study.summary}
                  </Text>

                  {study.tags && study.tags.length > 0 && (
                    <Box display="flex" wrap="wrap" gap={1.5} marginBottom={3}>
                      {study.tags.map((tag: string) => (
                        <Text key={tag} className="flagship-tag">
                          {tag}
                        </Text>
                      ))}
                    </Box>
                  )}

                  <Box display="flex" align="center" gap={2} marginTop="auto">
                    <Text variant="mono" size="xs" weight="font-bold" uppercase tracking="widest" color="accent">
                      Read Article
                    </Text>
                    <Icon icon={FileText} size="sm" color="accent" />
                  </Box>
                </Stack>
              ))}
            </Grid>
          </Stack>
        )}

        {/* Work With Me block */}
        <Grid cols={{ base: 1, md: 12 }} gap={10} padding={8} surface="muted" radius="xl" className="border border-line/20" id="work-with-me" align="center" width="full">
          {/* Description Column (Left) */}
          <Stack gap={4} span={{ base: 1, md: 7 }} justify="center">
            <Box paddingBottom={2} className="border-b border-line/10">
              <Text as="h2" variant="headline" size="3xl" weight="font-black">Work with me</Text>
            </Box>
            <Text variant="body" size="lg" color="dim" leading="relaxed" maxWidth="prose">
              These are my own projects, built to solve real problems I care about. If you need a senior roboticist, DevAI engineering infrastructure, or someone who can do both, I'm available for project-based contracts and full-time roles.
            </Text>
          </Stack>

          {/* Contact Details Column (Right) */}
          <Stack gap={4} span={{ base: 1, md: 5 }} align={{ base: "start", md: "end" }} textAlign={{ base: "left", md: "right" }}>
            <Text variant="mono" size="xs" color="dim" uppercase tracking="widest" weight="font-bold" opacityVariant="subtle">Get in touch</Text>
            <Box display="flex" align="center" gap={4} wrap="wrap" justify={{ base: "start", md: "end" }} marginTop={2}>
              <Box as="a" href="mailto:anders.ariel@gmail.com" className="hover:text-accent transition-colors">
                <Text variant="mono" size="xs" weight="font-bold" color="accent" uppercase tracking="widest">Email</Text>
              </Box>
              <Text color="dim" opacityVariant="muted" size="xs">·</Text>
              <Box as="a" href="https://www.linkedin.com/in/ariel-anders/?skipRedirect=true" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                <Text variant="mono" size="xs" weight="font-bold" color="accent" uppercase tracking="widest">LinkedIn</Text>
              </Box>
              <Text color="dim" opacityVariant="muted" size="xs">·</Text>
              <Box as="a" href="https://github.com/arii" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                <Text variant="mono" size="xs" weight="font-bold" color="accent" uppercase tracking="widest">GitHub</Text>
              </Box>
            </Box>
          </Stack>
        </Grid>
      </Stack>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <Box
          position="fixed"
          inset={0}
          zIndex={100}
          display="flex"
          align="center"
          justify="center"
          className="bg-black/90 cursor-zoom-out"
          onClick={() => setLightboxImage(null)}
        >
          <Box position="absolute" top={4} right={4} className="text-white hover:text-accent p-2">
            <Icon icon={X} size="lg" />
          </Box>
          <img
            src={lightboxImage}
            alt="Enlarged screenshot preview"
            className="max-w-[95vw] max-h-[95vh] md:max-w-[85vw] md:max-h-[85vh] object-contain rounded-lg border border-white/10 shadow-2xl"
          />
        </Box>
      )}
    </Box>
  );
};

export default Research;
