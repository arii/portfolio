/**
 * CONTENT OWNERSHIP RULE:
 * Overview's teaser cards and icon-feature rows must stay concise (1-2 sentences)
 * and must never be edited to match full text on Portfolio/Resume/About.
 */

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, Cpu, Compass, Bot, Server, Cloud, Laptop } from 'lucide-react';
import { HERO_DATA, PHILOSOPHY_TENETS, FOCUS_AREAS, FEATURE_CALLOUTS } from '@/data/home';

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
        return <Compass className="w-5 h-5 text-accent shrink-0 mt-0.5" />;
      case 'workflow':
        return <Bot className="w-5 h-5 text-accent shrink-0 mt-0.5" />;
      case 'laptop':
        return <Laptop className="w-5 h-5 text-accent shrink-0 mt-0.5" />;
      case 'server':
        return <Server className="w-5 h-5 text-accent shrink-0 mt-0.5" />;
      case 'cloud':
        return <Cloud className="w-5 h-5 text-accent shrink-0 mt-0.5" />;
      default:
        return <Cpu className="w-5 h-5 text-accent shrink-0 mt-0.5" />;
    }
  };

  return (
    <main className="space-y-8 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
      {/* 2-Column Surfaced Hero Card Grid */}
      <section className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-10 lg:p-12 shadow-xl backdrop-blur-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column (8 cols): Bio & Intro */}
          <div className="lg:col-span-8 space-y-6">
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-text-main tracking-tight leading-tight">
                {HERO_DATA.name}
              </h1>
              <p className="text-accent font-semibold text-lg sm:text-xl">{HERO_DATA.title}</p>
            </div>

            <p className="text-lg sm:text-xl font-medium text-text-main leading-relaxed">
               {HERO_DATA.subheading}
            </p>

            <div className="space-y-4 text-text-body text-base leading-relaxed border-t border-slate-800/80 pt-6">
              {HERO_DATA.bioParagraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
              <Link
                to="/devai"
                onClick={(e) => {
                  if (onNavigate) {
                    e.preventDefault();
                    handleNav('devai');
                  }
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-md bg-accent hover:opacity-90 text-bg px-5 py-2.5 text-sm font-medium shadow transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent min-h-[44px]"
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
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-md bg-accent hover:opacity-90 text-bg px-5 py-2.5 text-sm font-medium shadow transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent min-h-[44px]"
              >
                <Cpu className="w-4 h-4" />
                <span>View Robotics Research</span>
              </Link>
            </div>
          </div>

          {/* Right Column (4 cols): Engineering Philosophy Box */}
          <div className="lg:col-span-4 bg-slate-950/60 border border-slate-800/80 rounded-xl p-6 space-y-5">
            <div className="flex items-center gap-2 border-b border-slate-800 pb-3">
              <Cpu className="w-5 h-5 text-accent" />
              <h2 className="text-base sm:text-lg font-bold text-text-main tracking-tight">Engineering Philosophy</h2>
            </div>

            <div className="space-y-5">
              {PHILOSOPHY_TENETS.map((tenet) => (
                <div key={tenet.id} className="space-y-1.5">
                  <h3 className="text-sm sm:text-base font-bold text-accent">{tenet.title}</h3>
                  <p className="text-xs sm:text-sm text-text-body leading-relaxed">{tenet.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Middle Grid: 3 Focus Area Cards */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {FOCUS_AREAS.map((item) => (
          <button
            key={item.id}
            onClick={() => handleNav(item.id)}
            className="text-left w-full group bg-slate-900/60 hover:bg-slate-900/90 border border-slate-800 hover:border-accent/40 rounded-xl p-6 sm:p-8 cursor-pointer transition-all duration-200 flex flex-col justify-between space-y-5 shadow-md focus:outline-none focus:ring-2 focus:ring-accent/50"
          >
            <div className="space-y-2.5">
              <h3 className="text-lg sm:text-xl font-bold text-text-main group-hover:text-accent transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-text-body leading-relaxed">{item.description}</p>
            </div>
            <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-accent group-hover:translate-x-1 transition-transform">
              <span>{item.actionText}</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </button>
        ))}
      </section>

      {/* Bottom Feature Callouts Row */}
      <section className="bg-slate-900/40 border border-slate-800/60 rounded-xl p-6 sm:p-8">
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
