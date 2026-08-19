import React, { useState } from 'react';
import { ArrowRight, Filter } from 'lucide-react';
import { FOCUS_AREAS } from '@/data/home';

interface FocusAreaGridProps {
  onNav: (tab: string) => void;
}

export const FocusAreaGrid: React.FC<FocusAreaGridProps> = ({ onNav }) => {
  const [discipline, setDiscipline] = useState<'all' | 'robotics' | 'devai'>('all');

  const filteredAreas = FOCUS_AREAS.filter(
    (item) => discipline === 'all' || item.discipline === discipline || item.discipline === 'both'
  );

  return (
    <section className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-3">
        <div className="flex items-center gap-2 text-slate-300 text-sm font-semibold">
          <Filter className="w-4 h-4 text-amber-400" />
          <span>Filter Systems by Discipline:</span>
        </div>
        <div className="flex items-center gap-1.5 bg-slate-900/80 p-1 rounded-lg border border-slate-800">
          {[
            { id: 'all', label: 'All Systems' },
            { id: 'robotics', label: 'Robotics' },
            { id: 'devai', label: 'DevAI' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setDiscipline(tab.id as 'all' | 'robotics' | 'devai')}
              className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all cursor-pointer min-h-[36px] ${
                discipline === tab.id
                  ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {filteredAreas.map((item) => (
          <button
            key={item.id}
            onClick={() => onNav(item.id)}
            className="text-left group bg-slate-900/60 hover:bg-slate-900/90 border border-slate-800 hover:border-amber-500/50 rounded-xl p-6 sm:p-8 cursor-pointer transition-all hover:-translate-y-0.5 flex flex-col justify-between space-y-5 shadow-md focus:outline-none focus:ring-2 focus:ring-amber-500/50"
          >
            <div className="space-y-2.5">
              <div className="flex justify-between items-center">
                <h3 className="text-lg sm:text-xl font-bold text-slate-100 group-hover:text-amber-400 transition-colors">{item.title}</h3>
                <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                  {item.discipline === 'robotics' ? 'Robotics' : 'DevAI'}
                </span>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">{item.description}</p>
            </div>
            <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-amber-400 group-hover:translate-x-1.5 transition-transform">
              <span>{item.actionText}</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </button>
        ))}
      </div>
    </section>
  );
};

export default FocusAreaGrid;
