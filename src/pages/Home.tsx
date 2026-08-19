/**
 * CONTENT OWNERSHIP RULE:
 * Overview's teaser cards and icon-feature rows must stay concise (1-2 sentences)
 * and must never be edited to match full text on Portfolio/Resume/About.
 */

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Cpu, Compass, Bot, Server } from 'lucide-react';
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
      navigate(tab === 'portfolio' ? '/devai' : `/${tab}`);
    }
  };

  const getCalloutIcon = (iconName: string) => {
    switch (iconName) {
      case 'compass':
        return <Compass className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />;
      case 'workflow':
        return <Bot className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />;
      case 'server':
        return <Server className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />;
      default:
        return <Cpu className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />;
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
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-100 tracking-tight leading-tight">
                {HERO_DATA.name}
              </h1>
              <p className="text-amber-400 font-semibold text-lg sm:text-xl">{HERO_DATA.title}</p>
            </div>

            <p className="text-lg sm:text-xl font-medium text-slate-200 leading-relaxed">
              {HERO_DATA.subheading}
            </p>

            <div className="space-y-4 text-slate-300 text-base leading-relaxed border-t border-slate-800/80 pt-6">
              {HERO_DATA.bioParagraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={() => handleNav('portfolio')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold transition-all duration-200 shadow-md text-sm sm:text-base cursor-pointer min-h-[44px]"
              >
                <span>View portfolio</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column (4 cols): Engineering Philosophy Box */}
          <div className="lg:col-span-4 bg-slate-950/60 border border-slate-800/80 rounded-xl p-6 space-y-5">
            <div className="flex items-center gap-2 border-b border-slate-800 pb-3">
              <Cpu className="w-5 h-5 text-amber-400" />
              <h2 className="text-base sm:text-lg font-bold text-slate-100 tracking-tight">Engineering Philosophy</h2>
            </div>

            <div className="space-y-5">
              {PHILOSOPHY_TENETS.map((tenet) => (
                <div key={tenet.id} className="space-y-1.5">
                  <h3 className="text-sm sm:text-base font-bold text-amber-400">{tenet.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{tenet.description}</p>
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
            className="text-left w-full group bg-slate-900/60 hover:bg-slate-900/90 border border-slate-800 hover:border-amber-500/40 rounded-xl p-6 sm:p-8 cursor-pointer transition-all duration-200 flex flex-col justify-between space-y-5 shadow-md focus:outline-none focus:ring-2 focus:ring-amber-500/50"
          >
            <div className="space-y-2.5">
              <h3 className="text-lg sm:text-xl font-bold text-slate-100 group-hover:text-amber-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">{item.description}</p>
            </div>
            <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-amber-400 group-hover:translate-x-1 transition-transform">
              <span>{item.actionText}</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </button>
        ))}
      </section>

      {/* Bottom Feature Callouts Row */}
      <section className="bg-slate-900/60 border border-slate-800 rounded-xl p-6 sm:p-8 shadow-md backdrop-blur-sm">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {FEATURE_CALLOUTS.map((feature) => (
            <div key={feature.id} className="flex gap-3.5 items-start">
              {getCalloutIcon(feature.iconName)}
              <div className="space-y-1">
                <h4 className="text-sm sm:text-base font-bold text-slate-100">{feature.title}</h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;
