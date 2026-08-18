import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Cpu, Sparkles, Compass, Bot, Server, Mail } from 'lucide-react';
import { HERO_DATA, FOCUS_AREAS, FEATURE_CALLOUTS } from '@/data/home';
import { profileData } from '@/data/aboutData';
import { CareerHighlightsSection, AtAGlanceSidebar } from '@/components/about/AboutSections';
import roboticistPhoto from '@/assets/roboticist.jpg';

export const Home: React.FC<{ onNavigate?: (tab: string) => void }> = ({ onNavigate }) => {
  const navigate = useNavigate();
  const handleNav = (tab: string) => onNavigate ? onNavigate(tab) : navigate('/research');

  const getCalloutIcon = (name: string) => {
    const cls = "w-5 h-5 text-amber-400 shrink-0 mt-0.5";
    if (name === 'compass') return <Compass className={cls} />;
    if (name === 'workflow') return <Bot className={cls} />;
    if (name === 'server') return <Server className={cls} />;
    return <Cpu className={cls} />;
  };

  return (
    <main className="space-y-12 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
      {/* 1. Hero Section (2-Column Split) */}
      <section className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xl backdrop-blur-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-8 lg:pr-8 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs sm:text-sm font-semibold tracking-wide">
              <Sparkles className="w-4 h-4" /> <span>{HERO_DATA.badge}</span>
            </div>
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-100 tracking-tight leading-tight">{HERO_DATA.name}</h1>
              <p className="text-amber-400 font-semibold text-lg sm:text-xl">{HERO_DATA.title}</p>
            </div>
            <p className="text-lg sm:text-xl font-medium text-slate-200 leading-relaxed">{HERO_DATA.subheading}</p>
            <div className="border border-amber-500/20 bg-amber-500/5 rounded-xl p-5 space-y-2 mt-4">
              <span className="text-xs font-semibold text-amber-400 uppercase tracking-widest flex items-center space-x-1.5">
                <span className="h-2 w-2 rounded-full bg-amber-400 animate-pulse"></span>
                <span>Current Availability</span>
              </span>
              <p className="text-sm text-slate-300 leading-relaxed">{profileData.availability}</p>
            </div>
            <div className="pt-2 flex flex-wrap gap-4">
              <button onClick={() => handleNav('portfolio')} className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold transition-all shadow-md text-sm sm:text-base">
                <span>View Work</span> <ArrowRight className="w-4 h-4" />
              </button>
              <a href="mailto:anders.ariel@gmail.com" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-bold transition-all shadow-md text-sm sm:text-base border border-slate-700">
                <Mail className="w-4 h-4" /> <span>Connect</span>
              </a>
            </div>
          </div>
          <div className="lg:col-span-4 space-y-6">
            <div className="relative group mx-auto lg:mx-0 max-w-sm rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-lg">
              <div className="aspect-square w-full overflow-hidden">
                <img src={roboticistPhoto} alt="Ariel Anders" className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105" />
              </div>
            </div>
            <AtAGlanceSidebar details={profileData.details} />
          </div>
        </div>
      </section>

      {/* 2. Core Positioning & Expertise */}
      <section className="space-y-6">
        <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-6 sm:p-8 shadow-md">
          <h2 className="text-2xl font-bold text-slate-100 pb-3 border-b border-slate-800 mb-4">Professional Summary</h2>
          <div className="space-y-4 text-slate-300 text-base leading-relaxed">
            {HERO_DATA.bioParagraphs.map((para, idx) => <p key={idx}>{para}</p>)}
          </div>
        </div>
        <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-6 sm:p-8 shadow-md backdrop-blur-sm">
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
          <div className="mt-8 pt-6 border-t border-slate-800">
            <h3 className="text-xs font-semibold text-amber-400 uppercase tracking-widest flex items-center space-x-1.5 font-sans mb-3">
              <span className="h-1 w-1 bg-amber-400 rounded-full"></span> <span>Currently Exploring</span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {profileData.exploring.map((topic, idx) => (
                <span key={idx} className="px-2.5 py-1 rounded-full text-xs font-semibold bg-slate-800 border border-slate-700 text-slate-300">
                  {topic}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Career Timeline */}
      <section><CareerHighlightsSection highlights={profileData.highlights} /></section>

      {/* 4. Featured Work & Deep Dives */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {FOCUS_AREAS.map((item) => (
          <button key={item.id} onClick={() => handleNav(item.id)} className="text-left w-full group bg-slate-900/60 hover:bg-slate-900/90 border border-slate-800 hover:border-amber-500/40 rounded-xl p-6 sm:p-8 transition-all flex flex-col justify-between space-y-5 shadow-md">
            <div className="space-y-2.5">
              <h3 className="text-lg sm:text-xl font-bold text-slate-100 group-hover:text-amber-400 transition-colors">{item.title}</h3>
              <p className="text-sm text-slate-300 leading-relaxed">{item.description}</p>
            </div>
            <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-amber-400 group-hover:translate-x-1 transition-transform">
              <span>{item.actionText}</span> <ArrowRight className="w-4 h-4" />
            </div>
          </button>
        ))}
      </section>
    </main>
  );
};

export default Home;
