import React, { useState } from 'react';
import { Outlet, NavLink, useLocation } from 'react-router-dom';
import { Home as HomeIcon, User, Layers, FileText, Menu, X, ArrowRight } from 'lucide-react';

export interface LayoutProps {
  className?: string;
}

const Layout: React.FC<LayoutProps> = ({ className }) => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isCurrent = (path: string): boolean => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  const navItems = [
    { path: '/', label: 'Home', icon: HomeIcon },
    { path: '/about', label: 'About', icon: User },
    { path: '/research', label: 'DevAI Portfolio', icon: Layers },
    { path: '/resume', label: 'Resume', icon: FileText },
  ];

  return (
    <div className={`min-h-screen flex flex-col bg-[#020617] text-[#e2e8f0] relative ${className || ''}`}>

      {/* 1. Header Navigation Bar (Identical layout to boomtick.blog) */}
      <nav aria-label="Main Navigation" className="border-b border-[#334155]/20 bg-[#020617]/90 backdrop-blur-xl sticky top-0 z-[99999] h-16 w-full">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-full">

          {/* Logo Brand Wordmark matching boomtick.blog */}
          <NavLink to="/" className="flex items-center space-x-2 group focus:outline-none" onClick={() => setIsMobileMenuOpen(false)}>
            <span className="font-extrabold text-white tracking-[0.05em] text-sm md:text-base uppercase font-display">
              boom<span className="text-[#22d3ee]">tick</span><span className="text-slate-400 font-light">.blog</span>
            </span>
          </NavLink>

          {/* Desktop Navigation Links */}
          <ul className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => {
              const active = isCurrent(item.path);
              return (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    className={`relative text-xs font-semibold uppercase tracking-wide transition-colors py-1 ${
                      active ? 'text-[#22d3ee]' : 'text-[#cbd5e1] hover:text-[#22d3ee]'
                    }`}
                  >
                    {item.label}
                  </NavLink>
                </li>
              );
            })}
          </ul>

          {/* Mobile Menu Burger Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-full hover:bg-slate-900 active:bg-cyan-500/10 text-white transition-colors focus:outline-none"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* 2. Mobile Menu Overlay (Slides down below header) */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 bottom-0 top-16 bg-[#020617] z-[99998] p-8 overflow-y-auto animate-fadeIn border-t border-slate-900">
          <ul className="space-y-6">
            {navItems.map((item) => {
              const active = isCurrent(item.path);
              const Icon = item.icon;
              return (
                <li key={item.path} className="group">
                  <NavLink
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center justify-between py-4 px-6 rounded-2xl border transition-all ${
                      active
                        ? 'text-[#22d3ee] border-[#22d3ee]/20 bg-[#22d3ee]/5'
                        : 'text-[#cbd5e1] border-transparent hover:text-white hover:bg-slate-900'
                    }`}
                  >
                    <div className="flex items-center space-x-4">
                      <Icon className="w-5 h-5 stroke-[1.5]" />
                      <span className="text-sm font-bold uppercase tracking-wide">{item.label}</span>
                    </div>
                    <ArrowRight className="w-4 h-4 opacity-50 group-hover:translate-x-1 transition-transform" />
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      )}

      {/* 3. Main Outlet Page Container with responsive bottom padding to prevent overlap with sticky mobile nav */}
      <main id="main-content" className="flex-grow w-full relative grid-pattern pb-24 lg:pb-12">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <Outlet />
        </div>
      </main>

      {/* 4. Adaptive Mobile Bottom Navigation Bar (Sticky at bottom on mobile/tablet) */}
      <nav aria-label="Mobile Bottom Navigation" className="lg:hidden fixed bottom-0 inset-x-0 z-[99997] border-t border-slate-800 bg-[#0f172a]/90 backdrop-blur-xl pb-safe">
        <ul className="flex justify-around items-center h-16 w-full">
          {navItems.map((item) => {
            const active = isCurrent(item.path);
            const Icon = item.icon;
            return (
              <li key={item.path} className="flex-1">
                <NavLink
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex flex-col items-center justify-center h-full transition-colors ${
                    active ? 'text-[#22d3ee]' : 'text-slate-400 hover:text-[#22d3ee]'
                  }`}
                >
                  <Icon className="w-5 h-5 stroke-[1.5]" />
                  <span className="text-[9px] font-bold uppercase tracking-wider mt-1.5 font-sans">
                    {item.label.split(' ')[0]}
                  </span>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* 5. Clean Editorial Footer matching boomtick.blog */}
      <footer className="border-t border-[#334155]/20 bg-[#020617] py-8 z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between text-[#cbd5e1] text-xs font-mono space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#22d3ee] animate-pulse shadow-[0_0_8px_#22d3ee]" />
            <span>© 2026 BOOMTICK.BLOG</span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-[10px] uppercase tracking-wider text-slate-500">Ariel Anders, PhD · DevAI &amp; Robotics</span>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default Layout;
