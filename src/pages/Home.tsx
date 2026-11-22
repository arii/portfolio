/**
 * CONTENT OWNERSHIP RULE:
 * Overview's teaser cards and icon-feature rows must stay concise (1-2 sentences)
 * and must never be edited to match full text on Portfolio/Resume/About.
 */

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, Bot, Briefcase, Cpu, Compass, Server, Cloud, Laptop } from 'lucide-react';
import { heroContent, PHILOSOPHY_TENETS, FEATURE_CALLOUTS } from '@/data/home';
import { FEATURED_CARDS } from '@/config/content';
import HeroPathCard from '@/components/ui/HeroPathCard';
import SEO from '@/components/SEO';
import { getPersonAndProfileSchema, getServiceSchema } from '@/utils/schema';

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

  const homeSchemas = [getPersonAndProfileSchema('/'), getServiceSchema()];

  return (
    <div className="space-y-10 sm:space-y-12 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-2 sm:py-6">
      <SEO
        description="Explore AI consulting, robotics software engineering, and autonomous systems research by Ariel Anders, PhD (MIT). View open-source tools and deep dives."
        canonicalUrl="/"
        jsonLd={homeSchemas}
      />
      <section aria-label="Introduction" className="space-y-6">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-6 lg:gap-10">
          <div className="space-y-3 flex-1">
            <div className="space-y-1">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-text-main tracking-tight leading-tight">
                {heroContent.name}
              </h1>
              <p className="text-text-body font-semibold text-lg sm:text-xl text-balance">
                {heroContent.title}
              </p>
            </div>

            <div className="space-y-3 max-w-3xl text-text-body text-base sm:text-lg leading-relaxed text-pretty">
              {heroContent.bioParagraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-start gap-2 w-full lg:w-56 shrink-0 lg:pt-2">
            <Link
              to="/consulting"
              onClick={(e) => {
                if (onNavigate) {
                   e.preventDefault();
                   handleNav('consulting');
                }
              }}
              className="inline-flex items-center justify-center gap-2 rounded-md bg-text-main hover:bg-text-body text-bg px-5 py-2.5 text-sm font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text-main min-h-[44px]"
            >
              <Briefcase className="w-4 h-4" />
              <span>Work With Me</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/devai"
              onClick={(e) => {
                if (onNavigate) {
                   e.preventDefault();
                   handleNav('devai');
                }
              }}
              className="inline-flex items-center gap-2 text-text-body hover:text-text-main hover:underline underline-offset-4 py-2 text-sm font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text-main rounded-sm min-h-[44px]"
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
              className="inline-flex items-center gap-2 text-text-body hover:text-text-main hover:underline underline-offset-4 py-2 text-sm font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text-main rounded-sm min-h-[44px]"
            >
              <Cpu className="w-4 h-4" />
              <span>View Robotics Research</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <div className="space-y-4 pt-6 border-t border-line">
          <h2 className="text-base font-semibold text-text-main">Engineering Philosophy</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PHILOSOPHY_TENETS.map((tenet) => (
              <div key={tenet.id} className="space-y-1.5">
                <h3 className="text-sm sm:text-base font-bold text-text-main text-balance">{tenet.title}</h3>
                <p className="text-sm text-text-body leading-relaxed text-pretty">{tenet.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Middle Grid: Featured Cards (Entire surface is clickable) */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 pt-2">
        <h2 className="sr-only">Featured Work</h2>
        {FEATURED_CARDS.map((card) => (
          <HeroPathCard key={card.id} card={card} onNavigate={handleNav} />
        ))}
      </section>

      <section className="border-t border-line pt-6 sm:pt-8">
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
    </div>
  );
};

export default Home;
