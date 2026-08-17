import React from 'react';
import { ArrowRight, Cpu, Sparkles } from 'lucide-react';
import { HERO_DATA, PHILOSOPHY_TENETS, FOCUS_AREAS } from '@/data/home';

interface HomeProps {
  onNavigate?: (tab: string) => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const handleNav = (tab: string) => {
    if (onNavigate) {
      onNavigate(tab);
    }
  };
  return (
    <main className="space-y-10 max-w-5xl mx-auto px-4 sm:px-6 py-8">
      {/* Hero Header */}
      <section className="bg-slate-900/40 border border-slate-800/80 rounded-xl p-6 sm:p-8 space-y-5">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold tracking-wide">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{HERO_DATA.badge}</span>
        </div>

        <div className="space-y-3">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">{HERO_DATA.name}</h1>
          <p className="text-base sm:text-lg font-medium text-slate-200 leading-snug">{HERO_DATA.subheading}</p>
        </div>

        <div className="space-y-3 text-slate-300 text-sm sm:text-base leading-relaxed border-t border-slate-800/80 pt-5">
          {HERO_DATA.bioParagraphs.map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
        </div>

        <div>
          <button
            onClick={() => handleNav('portfolio')}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold transition-all duration-200 shadow text-sm"
          >
            <span>View portfolio</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* Engineering Philosophy */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 border-b border-slate-800 pb-2">
          <Cpu className="w-4 h-4 text-amber-400" />
          <h2 className="text-lg sm:text-xl font-bold text-slate-100 tracking-tight">Engineering Philosophy</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {PHILOSOPHY_TENETS.map((tenet) => (
            <div
              key={tenet.id}
              className="bg-slate-900/30 border border-slate-800/80 rounded-lg p-5 space-y-2"
            >
              <h3 className="text-base font-bold text-slate-100">{tenet.title}</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{tenet.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Navigation Focus Areas */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {FOCUS_AREAS.map((item) => (
          <div
            key={item.id}
            onClick={() => handleNav(item.id)}
            className="group bg-slate-900/30 hover:bg-slate-900/60 border border-slate-800/80 hover:border-amber-500/40 rounded-lg p-5 cursor-pointer transition-all duration-200 flex flex-col justify-between space-y-3"
          >
            <div className="space-y-1">
              <h3 className="text-base font-bold text-slate-100 group-hover:text-amber-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-xs text-slate-400">{item.description}</p>
            </div>
            <div className="inline-flex items-center gap-1 text-xs font-semibold text-amber-400 group-hover:translate-x-1 transition-transform">
              <span>{item.actionText}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Home;
