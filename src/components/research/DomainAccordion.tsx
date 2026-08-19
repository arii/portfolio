import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Folder } from 'lucide-react';
import ToolCard from '@/components/ToolCard';
import { ResearchTool } from '@/types/research';
import { Box, Stack, Grid } from '@/layouts/Primitives';

interface DomainAccordionProps {
  title: string;
  tools: ResearchTool[];
  onNavigate: (slug: string) => void;
  defaultOpen?: boolean;
  forceOpen?: boolean;
}

const DomainAccordion: React.FC<DomainAccordionProps> = ({
  title,
  tools,
  onNavigate,
  defaultOpen = false,
  forceOpen = false
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const expanded = forceOpen || isOpen;

  if (tools.length === 0) return null;

  return (
    <Box className="rounded-2xl border border-line bg-surface/40 overflow-hidden transition-all">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-4 text-left hover:bg-surface/80 transition-colors focus:outline-none focus:ring-1 focus:ring-accent"
        aria-expanded={expanded}
      >
        <Stack direction="row" align="center" justify="between">
          <Stack direction="row" gap="3" align="center">
            <Box className="h-8 w-8 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
              <Folder className="h-4 w-4 text-accent" />
            </Box>
            <Box>
              <h3 className="text-sm font-bold text-text-main font-display">{title}</h3>
              <span className="text-[11px] text-text-dim">{tools.length} project{tools.length === 1 ? '' : 's'}</span>
            </Box>
          </Stack>
          <Stack direction="row" gap="2" align="center">
            <span className="text-xs text-accent font-medium hidden sm:inline">
              {expanded ? 'Collapse' : 'Expand'}
            </span>
            {expanded ? <ChevronUp className="h-4 w-4 text-accent" /> : <ChevronDown className="h-4 w-4 text-text-dim" />}
          </Stack>
        </Stack>
      </button>

      {expanded && (
        <Box className="p-4 pt-0 border-t border-line/50 mt-1">
          <Grid cols="1 md:grid-cols-2 lg:grid-cols-3" gap="4" className="pt-3">
            {tools.map((tool) => (
              <ToolCard key={tool.id} tool={tool} onNavigate={onNavigate} />
            ))}
          </Grid>
        </Box>
      )}
    </Box>
  );
};

export default DomainAccordion;
