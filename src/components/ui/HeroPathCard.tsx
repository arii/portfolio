import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import type { FeaturedCardItem } from '@/config/content';

export interface HeroPathCardProps {
  card: FeaturedCardItem;
  onNavigate?: (href: string) => void;
}

const HeroPathCard: React.FC<HeroPathCardProps> = ({ card, onNavigate }) => {
  const handleClick = (e: React.MouseEvent) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(card.href);
    }
  };

  return (
    <button
      onClick={handleClick}
      className="text-left w-full group bg-slate-900/60 hover:bg-slate-900/90 border border-slate-800 hover:border-accent/40 rounded-xl p-5 sm:p-6 cursor-pointer transition-all duration-200 flex flex-col justify-between space-y-3.5 shadow-md focus:outline-none focus:ring-2 focus:ring-accent/50 h-full"
    >
      <div className="space-y-2">
        <h3 className="text-lg sm:text-xl font-bold text-text-main group-hover:text-accent transition-colors">
          {card.title}
        </h3>
        <p className="text-sm text-text-body leading-relaxed">
          {card.description}
        </p>
      </div>
      <div className="mt-auto pt-2">
        <Link
          to={card.href}
          onClick={handleClick}
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-accent group-hover:translate-x-1 transition-transform focus:outline-none"
          aria-label={`${card.title} - ${card.ctaText}`}
        >
          <span>{card.ctaText}</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </button>
  );
};

export default HeroPathCard;
