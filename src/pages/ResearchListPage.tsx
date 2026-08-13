import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Clock, FileText, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Box, Stack, Text, Grid } from '@/layouts/Primitives';
import { PageHeader } from '@/components/ui/PageHeader';
import { StatusBadge } from '@/components/ui/StatusBadge';
import { ActionButton } from '@/components/ui/ActionButton';
import { Icon } from '@/components/ui/Icon';
import { getAllResearchPosts } from '@/data/research';
import { FlagshipCard } from '@/components/FlagshipCard';
import { ToolSection } from '@/components/ToolSection';

const STACK_CATEGORIES = [
  { label: 'Stack', tags: ['React', 'Vite', 'TypeScript', 'Python'], colorClass: 'bg-brand-purple/10 text-brand-purple border border-brand-purple/20' },
  { label: 'Infra', tags: ['GitHub Actions', 'Vercel', 'Playwright'], colorClass: 'bg-brand-green/10 text-brand-green border border-brand-green/20' },
  { label: 'Robotics', tags: ['ROS1/2', 'C++', 'Navigation', 'Localization'], colorClass: 'bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/20' },
  { label: 'AI', tags: ['LLM Workflows', 'Agentic CI/CD'], colorClass: 'bg-brand-amber/10 text-brand-amber border border-brand-amber/20' },
];

export interface ResearchListPageProps {
  onNavigate?: (slug: string) => void;
}

const ResearchListPage: React.FC<ResearchListPageProps> = ({ onNavigate: propOnNavigate }) => {
  const navigate = useNavigate();
  const onNavigate = propOnNavigate || ((slug) => navigate(`/research/${slug}`));
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const posts = useMemo(() => getAllResearchPosts(), []);

  // Filter posts into categories for the dashboard
  const flagshipTools = useMemo(() => posts.filter(p => ['hrm-flagship', 'repo-auditor-ai', 'deployment-impact-analyzer'].includes(p.slug)), [posts]);
  const engineeringTools = useMemo(() => posts.filter(p => p.category === 'DevAI Tooling' || p.category === 'DevAI System' || p.slug === 'github-actions-workflow-optimization'), [posts]);
  const dataContentTools = useMemo(() => posts.filter(p => p.category === 'Data Engineering' || p.category === 'Content Tools'), [posts]);
  const ecommerceTools = useMemo(() => posts.filter(p => p.category === 'Business Automation'), [posts]);
  const studies = useMemo(() => posts.filter(p => ['model-context-protocol-robotics', 'github-actions-workflow-optimization'].includes(p.slug)), [posts]);

  return (
    <Box as="section" maxWidth="7xl" marginX="auto" width="full" className="space-y-16 py-6">
      {/* Split Hero Section */}
      <Grid cols={{ base: 1, lg: 12 }} gap={8} align="center" width="full">
        <Stack gap={2} span={{ base: 1, lg: 7 }}>
          <PageHeader label="HIRE_ME" title="DevAI Portfolio" as="h1" paddingBottom={0} border="none" />
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

      {/* Why This Matters block */}
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
                onClick={() => onNavigate(study.slug)}
                height="full"
                className="group relative bg-surface rounded-md shadow-sm card-border hover:border-accent cursor-pointer"
                paddingTop={3.5} paddingX={4} paddingBottom={4} gap={0}
              >
                <Box display="flex" justify="between" align="center" marginBottom={3} width="full">
                  <Text variant="mono" size="micro" color="accent" weight="font-bold" uppercase tracking="widest">{study.category}</Text>
                  <StatusBadge label="published" />
                </Box>
                <Text as="h3" variant="display" size="2xl" weight="font-black" marginBottom={2}>{study.title}</Text>
                <Box display="flex" align="center" gap={4} marginBottom={3}>
                  <Text variant="mono" size="micro" color="dim" opacityVariant="muted">{study.date}</Text>
                  {study.readingTime && (
                    <Box display="flex" align="center" gap={1} opacityVariant="muted">
                      <Icon icon={Clock} size="xs" color="dim" />
                      <Text variant="mono" size="micro" color="dim">{study.readingTime.toUpperCase()}</Text>
                    </Box>
                  )}
                </Box>
                <Text variant="body" size="sm" color="dim" clamp={3} leading="relaxed" marginBottom={3}>{study.summary}</Text>
                <Box display="flex" wrap="wrap" gap={1.5} marginBottom={3}>
                  {study.tags.map((tag: string) => (
                    <Text key={tag} className="flagship-tag">{tag}</Text>
                  ))}
                </Box>
                <Box display="flex" align="center" gap={2} marginTop="auto">
                  <Text variant="mono" size="xs" weight="font-bold" uppercase tracking="widest" color="accent">Read Article</Text>
                  <Icon icon={FileText} size="sm" color="accent" />
                </Box>
              </Stack>
            ))}
          </Grid>
        </Stack>
      )}

      {/* Work With Me block */}
      <Grid cols={{ base: 1, md: 12 }} gap={10} padding={8} surface="muted" radius="xl" className="border border-line/20" id="work-with-me" align="center" width="full">
        <Stack gap={4} span={{ base: 1, md: 7 }} justify="center">
          <Box paddingBottom={2} className="border-b border-line/10">
            <Text as="h2" variant="headline" size="3xl" weight="font-black">Work with me</Text>
          </Box>
          <Text variant="body" size="lg" color="dim" leading="relaxed" maxWidth="prose">
            These are my own projects, built to solve real problems I care about. If you need a senior roboticist, DevAI engineering infrastructure, or someone who can do both, I'm available for project-based contracts and full-time roles.
          </Text>
        </Stack>

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

      {/* Lightbox Modal */}
      {lightboxImage && (
        <Box position="fixed" inset={0} zIndex={100} display="flex" align="center" justify="center" className="bg-black/90 cursor-zoom-out" onClick={() => setLightboxImage(null)}>
          <Box position="absolute" top={4} right={4} className="text-white hover:text-accent p-2">
            <Icon icon={X} size="lg" />
          </Box>
          <img src={lightboxImage} alt="Enlarged screenshot preview" className="max-w-[95vw] max-h-[95vh] md:max-w-[85vw] md:max-h-[85vh] object-contain rounded-lg border border-white/10 shadow-2xl" />
        </Box>
      )}
    </Box>
  );
};

export default ResearchListPage;
