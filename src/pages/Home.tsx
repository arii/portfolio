/**
 * CONTENT OWNERSHIP RULE:
 * Overview's teaser cards and icon-feature rows must stay concise (1-2 sentences)
 * and must never be edited to match full text on Portfolio/Resume/About.
 */

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, Cpu, Compass, Bot, Server, Cloud, Laptop } from 'lucide-react';
import { heroContent, PHILOSOPHY_TENETS, FEATURE_CALLOUTS } from '@/data/home';
import { FEATURED_CARDS } from '@/config/content';
import HeroPathCard from '@/components/ui/HeroPathCard';
import SEO from '@/components/SEO';
import { Box, Stack } from '@/components/layout';

interface HomeProps {
  onNavigate?: (tab: string) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const navigate = useNavigate();

  const handleNav = (tab: string) => {
    if (onNavigate) {
      onNavigate(tab);
    } else {
      navigate(tab.startsWith('/') ? tab : `/${tab}`);
    }
  };

  const getCalloutIcon = (iconName: string) => {
    switch (iconName) {
      case 'compass':
        return <Compass className="w-5 h-5 text-slate-blue shrink-0 mt-0.5" />;
      case 'workflow':
        return <Bot className="w-5 h-5 text-slate-blue shrink-0 mt-0.5" />;
      case 'laptop':
        return <Laptop className="w-5 h-5 text-slate-blue shrink-0 mt-0.5" />;
      case 'server':
        return <Server className="w-5 h-5 text-slate-blue shrink-0 mt-0.5" />;
      case 'cloud':
        return <Cloud className="w-5 h-5 text-slate-blue shrink-0 mt-0.5" />;
      default:
        return <Cpu className="w-5 h-5 text-slate-blue shrink-0 mt-0.5" />;
    }
  };

  return (
    <Stack as="main" direction="col" px={4} py={6} className="max-w-6xl mx-auto sm:px-6 lg:px-8 sm:py-8 gap-8">
      <SEO
        description="Personal website and portfolio of Ariel Anders, PhD (MIT CSAIL). Highlights in robotics research, agentic DevAI tools, autonomous systems, and full-stack software engineering."
        canonicalUrl="/"
      />
      {/* Restructured to Balanced Vertical Layout with Optimized Spacing */}
      <Stack as="section" direction="col" p={6} className="sm:p-8 gap-6">
        {/* Top block: Bio and CTAs */}
        <Stack direction="col" justify="between" pb={6} className="lg:flex-row lg:items-center gap-6 border-b border-line/80">
          <Stack direction="col" className="max-w-3xl gap-3">
            <Stack direction="col" className="gap-1">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-text-main tracking-tight leading-tight">
                {heroContent.name}
              </h1>
              <p className="text-text-body font-semibold text-lg sm:text-xl font-mono">
                {heroContent.title}
              </p>
            </Stack>

            <div className="text-text-body text-base sm:text-lg leading-relaxed">
              {heroContent.bioParagraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
          </Stack>

          {/* CTA Buttons - High Contrast Solid buttons with dark text to fix accessibility */}
          <Stack direction="col" className="sm:flex-row lg:flex-col xl:flex-row items-stretch gap-3 shrink-0 lg:w-72 xl:w-auto">
            <Stack
              as={Link}
              to="/devai"
              onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                if (onNavigate) {
                   e.preventDefault();
                   handleNav('devai');
                }
              }}
              direction="row"
              align="center"
              justify="center"
              px={5}
              py={2.5}
              className="gap-2 rounded-md bg-slate-100 text-slate-900 border border-transparent hover:opacity-90 text-sm font-bold transition-all focus-visible:outline-none min-h-[44px]"
            >
              <Bot className="w-4 h-4" />
              <span>View Agentic DevAI Work</span>
              <ArrowRight className="w-4 h-4" />
            </Stack>

            <Stack
              as={Link}
              to="/research"
              onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                if (onNavigate) {
                  e.preventDefault();
                  handleNav('research');
                }
              }}
              direction="row"
              align="center"
              justify="center"
              px={5}
              py={2.5}
              className="gap-2 rounded-md bg-transparent border border-slate-700 text-slate-300 hover:underline hover:bg-slate-800/50 text-sm font-bold transition-all focus-visible:outline-none min-h-[44px]"
            >
              <Cpu className="w-4 h-4" />
              <span>View Robotics Research</span>
              <ArrowRight className="w-4 h-4" />
            </Stack>
          </Stack>
        </Stack>

        {/* Bottom block: Engineering Philosophy Horizontal Text Blocks (Diminished card style to avoid confusion) */}
        <Stack direction="col" className="gap-3 pt-6">
          <Stack direction="row" align="center" pb={1} className="gap-2">
            <h2 className="font-serif text-lg text-text-main">Engineering Philosophy</h2>
          </Stack>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PHILOSOPHY_TENETS.map((tenet) => (
              <Stack key={tenet.id} direction="col" className="gap-1.5">
                <h3 className="text-sm sm:text-base font-bold text-text-main">{tenet.title}</h3>
                <p className="text-xs sm:text-sm text-text-body leading-relaxed">{tenet.description}</p>
              </Stack>
            ))}
          </div>
        </Stack>
      </Stack>

      {/* Middle Grid: 3 Featured Cards (Entire surface is clickable) */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 pt-2">
        {FEATURED_CARDS.map((card) => (
          <HeroPathCard key={card.id} card={card} onNavigate={handleNav} />
        ))}
      </section>

      {/* Bottom Feature Callouts Row - Quieter Flat Panel and Shrunken Padding */}
      <Box as="section" pt={8} className="border-t border-slate-800">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {FEATURE_CALLOUTS.map((feature) => (
            <Stack key={feature.id} direction="row" align="start" className="gap-3.5">
              {getCalloutIcon(feature.iconName)}
              <Stack direction="col" className="gap-1">
                <h4 className="text-sm sm:text-base font-bold text-text-main">{feature.title}</h4>
                <p className="text-xs sm:text-sm text-text-dim leading-relaxed">{feature.description}</p>
              </Stack>
            </Stack>
          ))}
        </div>
      </Box>
    </Stack>
  );
};

export default Home;
