import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import type { FeaturedCardItem } from '@/config/content';
import { Box, Stack } from '@/components/layout';

export interface HeroPathCardProps {
  card: FeaturedCardItem;
  onNavigate?: (href: string) => void;
}

const getCredibilityBadge = (id: string) => {
  switch (id) {
    case 'devai-products':
      return 'Selected Work';
    case 'devai-tools':
      return 'Case Studies';
    case 'robotics-research':
      return 'Research';
    default:
      return null;
  }
};

const HeroPathCard: React.FC<HeroPathCardProps> = ({ card, onNavigate }) => {
  const handleClick = (e: React.MouseEvent) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(card.href);
    }
  };

  const badge = getCredibilityBadge(card.id);

  return (
    <Stack
      as="button"
      direction="col"
      justify="between"
      onClick={handleClick as any}
      w="full"
      h="full"
      p={5}
      className="text-left group border-t border-slate-800 hover:bg-surface/40 rounded-md sm:p-6 cursor-pointer transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-slate-500/50 gap-3.5"
    >
      <Stack direction="col" className="gap-2.5">
        {badge && (
          <Stack as="span" direction="row" align="center" px={2} py={0.5} className="font-serif text-slate-400 capitalize text-sm">
            {badge}
          </Stack>
        )}
        <h3 className="text-xl sm:text-2xl font-display font-extrabold text-text-main transition-colors tracking-tight">
          {card.title}
        </h3>
        <p className="text-sm text-text-body leading-relaxed">
          {card.description}
        </p>
      </Stack>
      <Box pt={2} className="mt-auto">
        <Stack
          as={Link}
          to={card.href}
          onClick={handleClick as any}
          direction="row"
          align="center"
          className="gap-1.5 text-xs sm:text-sm font-bold text-text-main group-hover:underline focus:outline-none"
          aria-label={`${card.title} - ${card.ctaText}`}
        >
          <span>{card.ctaText}</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Stack>
      </Box>
    </Stack>
  );
};

export default HeroPathCard;
