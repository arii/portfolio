import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { X } from 'lucide-react';
import { Box, Stack, Text, Grid } from '@/layouts/Primitives';
import { PageHeader } from '@/components/ui/PageHeader';
import { ActionButton } from '@/components/ui/ActionButton';
import { Icon } from '@/components/ui/Icon';
import { getAllResearchPosts } from '@/data/research';
import { FlagshipCard } from '@/components/FlagshipCard';
import { ToolSection } from '@/components/ToolSection';
import { ResearchFocusList } from '@/components/ui/ResearchFocusList';
import { ResearchStudyCard } from '@/components/ui/ResearchStudyCard';
import { WorkWithMeSection } from '@/components/ui/WorkWithMeSection';

export interface ResearchListPageProps {
  onNavigate?: (slug: string) => void;
}

const ResearchListPage: React.FC<ResearchListPageProps> = ({ onNavigate: propOnNavigate }) => {
  const navigate = useNavigate();
  const onNavigate = propOnNavigate || ((slug) => navigate(`/research/${slug}`));
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const posts = useMemo(() => getAllResearchPosts(), []);

  const flagshipTools = useMemo(() => posts.filter(p => ['hrm-flagship', 'repo-auditor-ai', 'deployment-impact-analyzer'].includes(p.slug)), [posts]);
  const engineeringTools = useMemo(() => posts.filter(p => p.category === 'DevAI Tooling' || p.category === 'DevAI System' || p.slug === 'github-actions-workflow-optimization'), [posts]);
  const dataContentTools = useMemo(() => posts.filter(p => p.category === 'Data Engineering' || p.category === 'Content Tools'), [posts]);
  const ecommerceTools = useMemo(() => posts.filter(p => p.category === 'Business Automation'), [posts]);
  const studies = useMemo(() => posts.filter(p => ['model-context-protocol-robotics', 'github-actions-workflow-optimization'].includes(p.slug)), [posts]);

  return (
    <Box as="section" maxWidth="7xl" marginX="auto" width="full" className="space-y-16 py-6">
      <Grid cols={{ base: 1, lg: 12 }} gap={8} align="center" width="full">
        <Stack gap={2} span={{ base: 1, lg: 7 }}>
          <PageHeader label="HIRE_ME" title="DevAI Portfolio" as="h1" paddingBottom={0} border="none" />
          <Text variant="body" size={{ base: "lg", lg: "xl" }} color="dim" maxWidth="prose" leading="relaxed">
            building AI-assisted engineering infrastructure in my free time. This portfolio showcased my work in agentic CI/CD, LLM workflows, and developer tooling.
          </Text>
          <ResearchFocusList />
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

      <Stack gap={8} id="flagship" marginTop={2} width="full">
        <Box paddingBottom={2} display="flex" justify="between" align="center" border="b" width="full">
          <Text variant="headline" size="2xl" weight="font-black">Flagship Projects</Text>
          <Text variant="mono" size="xs" color="dim" weight="font-semibold" uppercase tracking="widest" opacityVariant="subtle">CASE STUDIES</Text>
        </Box>
        <Grid cols={{ base: 1, sm: 2, lg: 3 }} gap={6} width="full">
          {flagshipTools.map((tool) => (
            <FlagshipCard key={tool.id} tool={tool} onNavigate={onNavigate} />
          ))}
        </Grid>
      </Stack>

      <Box className="why-this-matters">
        <Text as="h2" size="3xl" className="label">Why this matters</Text>
        <Text as="p">
          Shipping high-fidelity products requires <Text weight="font-bold" color="accent">practical AI orchestration</Text>, not hype. I focus on engineering systems that keep the developer in the loop while maintaining high standards.
        </Text>
      </Box>

      <ToolSection title="Engineering Systems" tools={engineeringTools} onNavigate={onNavigate} />
      <ToolSection title="Data & Content Systems" tools={dataContentTools} onNavigate={onNavigate} />
      <ToolSection title="Ecommerce Experiments" tools={ecommerceTools} onNavigate={onNavigate} />

      {studies.length > 0 && (
        <Stack gap={12} id="articles" width="full">
          <Box paddingBottom={4} display="flex" justify="between" align="center" border="b" width="full">
            <Text as="h2" variant="headline" size="2xl" weight="font-black">Articles & Research</Text>
            <Text variant="mono" size="xs" color="dim" weight="font-semibold" uppercase tracking="widest" opacityVariant="subtle">{studies.length} POSTS</Text>
          </Box>
          <Grid cols={{ base: 1, sm: 2, lg: 3 }} gap={6} width="full">
            {studies.map((study) => (
              <ResearchStudyCard key={study.slug} study={study} onClick={() => onNavigate(study.slug)} />
            ))}
          </Grid>
        </Stack>
      )}

      <WorkWithMeSection />

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
