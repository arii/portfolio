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
    <button
      onClick={handleClick}
      className="text-left w-full group bg-slate-900/60 hover:bg-slate-900/90 border border-slate-800 hover:border-accent/40 hover:-translate-y-1 hover:shadow-lg rounded-xl p-5 sm:p-6 cursor-pointer transition-all duration-300 flex flex-col justify-between space-y-3.5 shadow-md focus:outline-none focus:ring-2 focus:ring-accent/50 h-full"
    >
      <div className="space-y-2.5">
        {badge && (
          <span className="inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-bold tracking-wider bg-slate-blue/10 text-slate-blue-light uppercase">
            {badge}
          </span>
        )}
        <h3 className="text-xl sm:text-2xl font-extrabold text-text-main group-hover:text-accent transition-colors tracking-tight">
          {card.title}
        </h3>
        <p className="text-sm text-text-dim leading-relaxed">
          {card.description}
        </p>
      </div>
      <div className="mt-auto pt-2">
        <Link
          to={card.href}
          onClick={handleClick}
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-accent group-hover:underline focus:outline-none"
          aria-label={`${card.title} - ${card.ctaText}`}
        >
          <span>{card.ctaText}</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </button>
  );
};

export default HeroPathCard;
