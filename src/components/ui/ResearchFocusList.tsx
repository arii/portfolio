import React from 'react';
import { cn } from '@/lib/utils';
import { Box, Stack, Text } from '@/layouts/Primitives';

export const STACK_CATEGORIES = [
  { label: 'Stack', tags: ['React', 'Vite', 'TypeScript', 'Python'], colorClass: 'bg-brand-purple/10 text-brand-purple border border-brand-purple/20' },
  { label: 'Infra', tags: ['GitHub Actions', 'Vercel', 'Playwright'], colorClass: 'bg-brand-green/10 text-brand-green border border-brand-green/20' },
  { label: 'Robotics', tags: ['ROS1/2', 'C++', 'Navigation', 'Localization'], colorClass: 'bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/20' },
  { label: 'AI', tags: ['LLM Workflows', 'Agentic CI/CD'], colorClass: 'bg-brand-amber/10 text-brand-amber border border-brand-amber/20' },
];

export const ResearchFocusList: React.FC = () => {
  return (
    <>
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
    </>
  );
};
