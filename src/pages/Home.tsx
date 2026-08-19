import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Sparkles, Compass, Bot, Server } from 'lucide-react';
import { HERO_DATA, FEATURE_CALLOUTS } from '@/data/home';
import PhilosophySection from '@/components/PhilosophySection';
import FocusAreaGrid from '@/components/FocusAreaGrid';

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

  const getCalloutIcon = (name: string) => {
    if (name === 'compass') return <Compass className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />;
    if (name === 'workflow') return <Bot className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />;
    return <Server className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />;
  };

  return (
    <main className="space-y-8 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
      {/* 2-Column Hero Card */}
      <section className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6 sm:p-10 lg:p-12 shadow-xl backdrop-blur-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-8 space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs sm:text-sm font-semibold">
              <Sparkles className="w-4 h-4" />
              <span>{HERO_DATA.badge}</span>
            </div>

            <div className="space-y-1">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100 tracking-tight leading-tight">{HERO_DATA.name}</h1>
              <p className="text-slate-300 font-semibold text-base sm:text-lg">{HERO_DATA.title}</p>
            </div>

            <p className="text-base sm:text-xl font-medium text-slate-200 leading-[1.35]">{HERO_DATA.subheading}</p>

            {/* Above-the-Fold CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <button
                onClick={() => handleNav('portfolio')}
                aria-label="View portfolio"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold transition-all text-sm cursor-pointer min-h-[44px] shadow-md hover:scale-[1.01]"
              >
                <span>View Work / Portfolio</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => handleNav('research')}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold border border-slate-700 text-sm cursor-pointer min-h-[44px]"
              >
                <span>Inspect Systems</span>
                <ArrowRight className="w-4 h-4 text-amber-400" />
              </button>
            </div>

            {/* Company Badges */}
            <div className="space-y-2 pt-2 border-t border-slate-800/80">
              <span className="text-xs uppercase tracking-wider font-semibold text-slate-400">Track Record</span>
              <div className="flex flex-wrap gap-2">
                {HERO_DATA.companies.map((co) => (
                  <div key={co.name} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-950/80 border border-slate-800 text-xs">
                    <span className="font-bold text-slate-100">{co.name}</span>
                    <span className="text-slate-500">•</span>
                    <span className="text-slate-300">{co.role}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-slate-400 text-sm leading-relaxed">
              {HERO_DATA.bioParagraphs.map((para, idx) => (<p key={idx}>{para}</p>))}
            </div>
          </div>

          <PhilosophySection />
        </div>
      </section>

      {/* Dual-Track Filter & Grid */}
      <FocusAreaGrid onNav={handleNav} />

      {/* Feature Callouts */}
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
