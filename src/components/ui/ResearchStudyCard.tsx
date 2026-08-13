import React from 'react';
import { Clock, FileText } from 'lucide-react';
import { Box, Stack, Text } from '@/layouts/Primitives';
import { StatusBadge } from '@/components/ui/StatusBadge';
import { Icon } from '@/components/ui/Icon';
import { ResearchPost } from '@/data/research';

interface ResearchStudyCardProps {
  study: ResearchPost;
  onClick: () => void;
}

export const ResearchStudyCard: React.FC<ResearchStudyCardProps> = ({ study, onClick }) => {
  return (
    <Stack
      onClick={onClick}
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
  );
};
