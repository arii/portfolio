import React from 'react';
import { Cpu } from 'lucide-react';
import { PHILOSOPHY_TENETS } from '@/data/home';

export const PhilosophySection: React.FC = () => {
  return (
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
  );
};

export default PhilosophySection;
