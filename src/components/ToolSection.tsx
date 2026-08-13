import React from 'react';
import { Box, Stack, Text, Grid } from '@/layouts/Primitives';
import { ResearchPost } from '@/data/research';
import { ToolCard } from '@/components/ToolCard';

interface ToolSectionProps {
  title: string;
  tools: ResearchPost[];
  onNavigate: (slug: string) => void;
}

export const ToolSection: React.FC<ToolSectionProps> = ({ title, tools, onNavigate }) => {
  if (tools.length === 0) return null;
  return (
    <Stack gap={12} width="full">
      <Box paddingBottom={4} display="flex" justify="between" align="center" border="b" width="full">
        <Text variant="headline" size="2xl" weight="font-black">{title}</Text>
        <Text variant="mono" size="xs" color="dim" weight="font-semibold" uppercase tracking="widest" opacityVariant="subtle">
          {tools.length} TOOLS
        </Text>
      </Box>
      <Grid cols={{ base: 1, sm: 2, lg: 3 }} gap={6} width="full">
        {tools.map((tool) => (
          <ToolCard key={tool.id} tool={tool} onNavigate={onNavigate} />
        ))}
      </Grid>
    </Stack>
  );
};
