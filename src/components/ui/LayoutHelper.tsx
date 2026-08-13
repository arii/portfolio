import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Stack, Text } from '@/layouts/Primitives';
import { cn } from '@/lib/utils';

interface NavItemProps {
  to: string;
  label: string;
  isActive: boolean;
}

export const NavItem: React.FC<NavItemProps> = ({ to, label, isActive }) => (
  <Link
    to={to}
    className={cn(
      "px-3 py-2 rounded-md text-sm font-medium transition-colors no-underline",
      isActive
        ? 'bg-slate-800 text-brand-cyan-light font-semibold'
        : 'text-slate-400 hover:text-slate-100 hover:bg-slate-900'
    )}
  >
    {label}
  </Link>
);

export const Footer: React.FC = () => (
  <Box
    as="footer"
    width="full"
    className="border-t border-slate-900 bg-brand-bg-darker"
    paddingY={6}
  >
    <Stack
      direction={{ base: "col", md: "row" }}
      align="center"
      justify="between"
      gap={2}
      maxWidth="6xl"
      marginX="auto"
      paddingX={4}
      className="text-slate-500 text-xs"
    >
      <Text size="xs">
        &copy; {new Date().getFullYear()} arii. All rights reserved.
      </Text>
      <Stack direction="row" gap={4} className="mt-2 md:mt-0">
        <Text size="xs" color="dim">
          DevAI / Resume Consolidation
        </Text>
      </Stack>
    </Stack>
  </Box>
);
