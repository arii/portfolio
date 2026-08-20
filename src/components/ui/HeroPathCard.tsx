import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
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
    <Card
      onClick={handleClick}
      className="flex flex-col justify-between h-full bg-surface border-border hover:border-primary transition-colors cursor-pointer"
    >
      <CardHeader className="p-6">
        <CardTitle className="text-xl font-bold text-text-primary tracking-tight">
          {card.title}
        </CardTitle>
        <CardDescription className="text-sm text-text-secondary mt-2 leading-relaxed">
          {card.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="p-6 pt-0 mt-auto">
        <Link
          to={card.href}
          onClick={handleClick}
          className="inline-flex items-center text-sm font-medium text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
          aria-label={`${card.title} - ${card.ctaText}`}
        >
          {card.ctaText}
        </Link>
      </CardContent>
    </Card>
  );
};

export default HeroPathCard;
