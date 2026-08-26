import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import type { FeaturedCardItem } from '@/config/content';

export interface HeroPathCardProps {
  card: FeaturedCardItem;
  onNavigate?: (href: string) => void;
}

const getCredibilityBadge = (id: string) => {
  switch (id) {
    case 'devai-products':
      return '3 live products';
    case 'devai-tools':
      return 'CI pipeline: active';
    case 'robotics-research':
      return 'MIT CSAIL · PhD';
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
    <article
      className="relative text-left w-full group bg-surface/60 hover:bg-surface/90 border border-line hover:border-accent/40 hover:-translate-y-1 hover:shadow-lg rounded-xl p-5 sm:p-6 transition-all duration-300 flex flex-col justify-between space-y-3.5 shadow-md h-full focus-within:ring-2 focus-within:ring-accent/50 focus-within:outline-none"
    >
      <div className="space-y-2.5">
        {badge && (
          <span className="relative z-10 inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-bold tracking-wider bg-slate-blue/20 text-slate-300 uppercase">
            {badge}
          </span>
        )}
        <h3 className="text-xl sm:text-2xl font-extrabold text-text-main group-hover:text-accent transition-colors tracking-tight text-balance">
          {card.title}
        </h3>
        <p className="text-sm text-text-body leading-relaxed text-pretty">
          {card.description}
        </p>
      </div>
      <div className="mt-auto pt-2">
        <Link
          to={card.href}
          onClick={handleClick}
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-accent group-hover:underline focus:outline-none after:absolute after:inset-0"
          aria-label={`${card.title} - ${card.ctaText}`}
        >
          <span>{card.ctaText}</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </article>
  );
};

export default HeroPathCard;
