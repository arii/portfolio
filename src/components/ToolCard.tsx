import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Box, Stack, Text } from '@/layouts/Primitives';
import { StatusBadge } from '@/components/ui/StatusBadge';
import { Icon } from '@/components/ui/Icon';
import { cn } from '@/lib/utils';
import { ResearchPost } from '@/data/research';
import { getToolIcon } from '@/components/ui/ToolPreview';

interface ToolCardProps {
  tool: ResearchPost;
  onNavigate: (slug: string) => void;
}

export const ToolCard: React.FC<ToolCardProps> = ({ tool, onNavigate }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const isLink = !!tool.sourceUrl && !tool.slug;
  const href = tool.slug ? tool.slug : (tool.sourceUrl || '#');

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
      height="full"
      align="start"
      textAlign="left"
      gap={0}
      paddingTop={3.5}
      paddingX={4}
      paddingBottom={4}
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
          {tool.status && <StatusBadge label={tool.status} />}
        </Box>
        <Text variant="mono" size="micro" color="dim" weight="font-bold" uppercase tracking="widest" opacityVariant="subtle" marginBottom={1}>
          {tool.category}
        </Text>
        <Text variant="display" size="xl" weight="font-black" marginBottom={2}>
          {tool.title}
        </Text>
        {tool.subtitle && (
          <Text size="micro" color="accent" weight="font-normal" uppercase tracking="tighter" marginBottom={2}>
            {tool.subtitle}
          </Text>
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
          <Box as="button" onClick={toggleExpand} marginBottom={5} className="text-accent hover:underline text-xs font-semibold focus:outline-none self-start">
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
};
