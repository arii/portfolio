import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Box, Stack, Text } from '@/layouts/Primitives';
import { cn } from '@/lib/utils';
import { NavItem, Footer } from './ui/LayoutHelper';

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
    <Stack
      direction="col"
      minHeight="screen"
      width="full"
      gap={0}
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
        <Stack
          direction={{ base: "col", md: "row" }}
          align="center"
          justify="between"
          gap={4}
          maxWidth="6xl"
          marginX="auto"
          paddingX={4}
          paddingY={4}
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
            <NavItem to="/" label="Home" isActive={isCurrent('/')} />
            <NavItem to="/research" label="Research (Boomtick)" isActive={isCurrent('/research')} />
            <NavItem to="/about" label="About" isActive={isCurrent('/about')} />
            <NavItem to="/resume" label="Resume" isActive={isCurrent('/resume')} />
          </Box>
        </Stack>
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
      <Footer />
    </Stack>
  );
};

export default Layout;
