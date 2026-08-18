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
    <main className="space-y-8 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* 2-Column Surfaced Hero Card Grid */}
      <section className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl backdrop-blur-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column (8 cols): Bio & Intro */}
          <div className="lg:col-span-8 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold tracking-wide">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{HERO_DATA.badge}</span>
            </div>

            <div className="space-y-1">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100 tracking-tight">
                {HERO_DATA.name}
              </h1>
              <p className="text-amber-400 font-medium text-base sm:text-lg">{HERO_DATA.title}</p>
            </div>

            <p className="text-base sm:text-lg font-medium text-slate-200 leading-relaxed">
              {HERO_DATA.subheading}
            </p>

            <div className="space-y-3 text-slate-300 text-sm sm:text-base leading-relaxed border-t border-slate-800/80 pt-4">
              {HERO_DATA.bioParagraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={() => handleNav('portfolio')}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold transition-all duration-200 shadow-md text-sm"
              >
                <span>View portfolio</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column (4 cols): Compact Engineering Philosophy Box */}
          <div className="lg:col-span-4 bg-slate-950/60 border border-slate-800/80 rounded-xl p-5 space-y-4">
            <div className="flex items-center gap-2 border-b border-slate-800 pb-2.5">
              <Cpu className="w-4 h-4 text-amber-400" />
              <h2 className="text-base font-bold text-slate-100 tracking-tight">Engineering Philosophy</h2>
            </div>

            <div className="space-y-4">
              {PHILOSOPHY_TENETS.map((tenet) => (
                <div key={tenet.id} className="space-y-1">
                  <h3 className="text-sm font-bold text-amber-400">{tenet.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">{tenet.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Middle Grid: 3 Focus Area Cards */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {FOCUS_AREAS.map((item) => (
          <div
            key={item.id}
            onClick={() => handleNav(item.id)}
            className="group bg-slate-900/40 hover:bg-slate-900/80 border border-slate-800 hover:border-amber-500/40 rounded-xl p-6 cursor-pointer transition-all duration-200 flex flex-col justify-between space-y-4 shadow-sm"
          >
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-slate-100 group-hover:text-amber-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{item.description}</p>
            </div>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 group-hover:translate-x-1 transition-transform">
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
