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

interface HomeProps {
  onNavigate?: (tab: string) => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
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
    <main className="space-y-8 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
      {/* Restructured to Balanced Vertical Layout with Optimized Spacing */}
      <section className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl backdrop-blur-sm space-y-6">
        {/* Top block: Bio and CTAs */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-800/80">
          <div className="space-y-3 max-w-3xl">
            <div className="space-y-1">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-text-main tracking-tight leading-tight">
                {heroContent.name}
              </h1>
              <p className="text-text-body font-semibold text-lg sm:text-xl font-mono">
                {heroContent.title}
              </p>
            </div>

            <div className="text-text-body text-base sm:text-lg leading-relaxed">
              {heroContent.bioParagraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
          </div>

          {/* CTA Buttons - High Contrast Solid buttons with dark text to fix accessibility */}
          <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row items-stretch gap-3 shrink-0 lg:w-72 xl:w-auto">
            <Link
              to="/devai"
              onClick={(e) => {
                if (onNavigate) {
                   e.preventDefault();
                   handleNav('devai');
                }
              }}
              className="inline-flex items-center justify-center gap-2 rounded-md bg-accent hover:opacity-90 text-slate-950 px-5 py-2.5 text-sm font-bold shadow transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent min-h-[44px]"
            >
              <Bot className="w-4 h-4" />
              <span>View Agentic AI Work</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/research"
              onClick={(e) => {
                if (onNavigate) {
                  e.preventDefault();
                  handleNav('research');
                }
              }}
              className="inline-flex items-center justify-center gap-2 rounded-md bg-accent hover:opacity-90 text-slate-950 px-5 py-2.5 text-sm font-bold shadow transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent min-h-[44px]"
            >
              <Cpu className="w-4 h-4" />
              <span>View Robotics Research</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Bottom block: Engineering Philosophy Horizontal Text Blocks (Diminished card style to avoid confusion) */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 pb-1">
            <Cpu className="w-5 h-5 text-text-dim" />
            <h2 className="text-xs sm:text-sm font-bold text-text-main tracking-widest uppercase">Engineering Philosophy</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PHILOSOPHY_TENETS.map((tenet) => (
              <div key={tenet.id} className="space-y-1.5">
                <h3 className="text-sm sm:text-base font-bold text-text-main">{tenet.title}</h3>
                <p className="text-xs sm:text-sm text-text-body leading-relaxed">{tenet.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Middle Grid: 3 Featured Cards (Entire surface is clickable) */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 pt-2">
        {FEATURED_CARDS.map((card) => (
          <HeroPathCard key={card.id} card={card} onNavigate={handleNav} />
        ))}
      </section>

      {/* Bottom Feature Callouts Row - Quieter Flat Panel and Shrunken Padding */}
      <section className="bg-[#0d1219] border border-line rounded-xl p-5 sm:p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {FEATURE_CALLOUTS.map((feature) => (
            <div key={feature.id} className="flex gap-3.5 items-start">
              {getCalloutIcon(feature.iconName)}
              <div className="space-y-1">
                <h4 className="text-sm sm:text-base font-bold text-text-main">{feature.title}</h4>
                <p className="text-xs sm:text-sm text-text-dim leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;
