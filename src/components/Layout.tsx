import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Box, Stack, Text } from '@/layouts/Primitives';
import { cn } from '@/lib/utils';

export interface LayoutProps {
  className?: string;
}

const Layout: React.FC<LayoutProps> = ({ className }) => {
  const location = useLocation();

  const isCurrent = (path: string): boolean => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <Box
      display="flex"
      direction="col"
      minHeight="screen"
      width="full"
      className={cn("bg-brand-bg-dark text-slate-100", className)}
    >
      {/* Global Header */}
      <Box
        as="header"
        position="sticky"
        top={0}
        zIndex="sticky"
        className="border-b border-slate-800 bg-brand-bg-darker/80 backdrop-blur-md"
      >
        <Box
          maxWidth="6xl"
          marginX="auto"
          paddingX={4}
          paddingY={4}
          display="flex"
          align="center"
          justify="between"
        >
          {/* Logo / Branding */}
          <Link to="/" className="group no-underline">
            <Text
              as="span"
              variant="display"
              size="xl"
              weight="font-bold"
              tracking="tight"
              className="bg-gradient-to-r from-brand-cyan to-brand-green bg-clip-text text-transparent group-hover:opacity-80 transition-opacity"
            >
              arii / portfolio
            </Text>
          </Link>

          {/* Navigation Bar / Toolbar */}
          <Box as="nav" display="flex" align="center" gap={{ base: 1, sm: 4 }}>
            <Link
              to="/"
              className={cn(
                "px-3 py-2 rounded-md text-sm font-medium transition-colors no-underline",
                isCurrent('/')
                  ? 'bg-slate-800 text-brand-cyan-light font-semibold'
                  : 'text-slate-400 hover:text-slate-100 hover:bg-slate-900'
              )}
            >
              Home
            </Link>
            <Link
              to="/research"
              className={cn(
                "px-3 py-2 rounded-md text-sm font-medium transition-colors no-underline",
                isCurrent('/research')
                  ? 'bg-slate-800 text-brand-cyan-light font-semibold'
                  : 'text-slate-400 hover:text-slate-100 hover:bg-slate-900'
              )}
            >
              Research (Boomtick)
            </Link>
            <Link
              to="/about"
              className={cn(
                "px-3 py-2 rounded-md text-sm font-medium transition-colors no-underline",
                isCurrent('/about')
                  ? 'bg-slate-800 text-brand-cyan-light font-semibold'
                  : 'text-slate-400 hover:text-slate-100 hover:bg-slate-900'
              )}
            >
              About
            </Link>
            <Link
              to="/resume"
              className={cn(
                "px-3 py-2 rounded-md text-sm font-medium transition-colors no-underline",
                isCurrent('/resume')
                  ? 'bg-slate-800 text-brand-cyan-light font-semibold'
                  : 'text-slate-400 hover:text-slate-100 hover:bg-slate-900'
              )}
            >
              Resume
            </Link>
          </Box>
        </Box>
      </Box>

      {/* Main Content Area */}
      <Box
        as="main"
        flex={1}
        width="full"
        maxWidth="6xl"
        marginX="auto"
        paddingX={4}
        paddingY={8}
      >
        <Outlet />
      </Box>

      {/* Global Footer */}
      <Box
        as="footer"
        width="full"
        className="border-t border-slate-900 bg-brand-bg-darker"
        paddingY={6}
      >
        <Box
          maxWidth="6xl"
          marginX="auto"
          paddingX={4}
          display="flex"
          direction={{ base: "col", md: "row" }}
          align="center"
          justify="between"
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
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
