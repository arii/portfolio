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
    <main className="space-y-8 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
      <SEO
        description="Personal website and portfolio of Ariel Anders, PhD (MIT CSAIL). Highlights in robotics research, agentic DevAI tools, autonomous systems, and full-stack software engineering."
        canonicalUrl="/"
      />
      {/* Restructured to Balanced Vertical Layout with Optimized Spacing */}
      <section className="bg-surface/60 border border-line rounded-2xl p-6 sm:p-8 shadow-xl backdrop-blur-sm space-y-6">
        {/* Top block: Bio and CTAs */}
        <div className="flex flex-col gap-6 pb-6 border-b border-line/80">
          <div className="space-y-3 max-w-4xl">
            <div className="space-y-1">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-text-main tracking-tight leading-tight text-balance">
                {heroContent.name}
              </h1>
              <p className="text-text-body font-semibold text-lg sm:text-xl font-mono text-balance">
                {heroContent.title}
              </p>
            </div>

            <div className="text-text-body text-base sm:text-lg leading-relaxed text-pretty">
              {heroContent.bioParagraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
          </div>

          {/* CTA Buttons - High Contrast Solid buttons with dark text to fix accessibility */}
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <Link
              to="/devai"
              onClick={(e) => {
                if (onNavigate) {
                   e.preventDefault();
                   handleNav('devai');
                }
              }}
              className="inline-flex items-center justify-center gap-2 rounded-md bg-text-main hover:opacity-90 text-bg px-5 py-2.5 text-sm font-bold shadow transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text-main min-h-[44px]"
            >
              <Bot className="w-4 h-4" />
              <span>View Agentic DevAI Work</span>
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
              className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-transparent text-text-body hover:text-text-main hover:bg-surface-elevated px-5 py-2.5 text-sm font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border min-h-[44px]"
            >
              <Cpu className="w-4 h-4" />
              <span>View Robotics Research</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Bottom block: Engineering Philosophy Horizontal Text Blocks (Diminished card style to avoid confusion) */}
        <div className="space-y-3 bg-surface-alt/40 p-4 rounded-xl border border-line/60">
          <div className="flex items-center gap-2 pb-1">
            <Cpu className="w-5 h-5 text-accent" />
            <h2 className="text-xs sm:text-sm font-bold text-accent tracking-widest uppercase">Engineering Philosophy</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PHILOSOPHY_TENETS.map((tenet) => (
              <div key={tenet.id} className="space-y-1.5">
                <h3 className="text-sm sm:text-base font-bold text-text-main text-balance">{tenet.title}</h3>
                <p className="text-xs sm:text-sm text-text-body leading-relaxed text-pretty">{tenet.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Middle Grid: 3 Featured Cards (Entire surface is clickable) */}
      <section className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6 lg:gap-8 pt-2">
        <h2 className="sr-only">Featured Work</h2>
        {FEATURED_CARDS.map((card) => (
          <HeroPathCard key={card.id} card={card} onNavigate={handleNav} />
        ))}
      </section>

      {/* Bottom Feature Callouts Row - Quieter Flat Panel and Shrunken Padding */}
      <section className="bg-surface/40 border border-line rounded-xl p-5 sm:p-6">
        <h2 className="sr-only">Core Capabilities</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {FEATURE_CALLOUTS.map((feature) => (
            <div key={feature.id} className="flex gap-3.5 items-start">
              {getCalloutIcon(feature.iconName)}
              <div className="space-y-1">
                <h3 className="text-sm sm:text-base font-bold text-text-main text-balance">{feature.title}</h3>
                <p className="text-xs sm:text-sm text-text-dim leading-relaxed text-pretty">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;
