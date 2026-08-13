import React, { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Terminal, Cpu, Layers, Menu, X } from 'lucide-react';

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
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/research', label: 'Research (Boomtick)' },
    { path: '/resume', label: 'Resume' },
  ];

  return (
    <div className={`min-h-screen flex flex-col bg-raw-color-bg text-raw-color-text-body ${className || ''}`}>
      {/* Immersive Scanline Glow Effect on Header */}
      <header className="border-b border-raw-color-line/30 bg-raw-color-bg/90 backdrop-blur-xl sticky top-0 z-[99999]">
        <div className="max-w-6xl mx-auto px-4 py-3.5 flex items-center justify-between">

          {/* Logo / Console System Status indicator */}
          <Link to="/" className="flex items-center space-x-2.5 group focus:outline-none" onClick={() => setIsMobileMenuOpen(false)}>
            <div className="w-6 h-6 rounded-md bg-gradient-to-br from-raw-color-accent to-raw-color-accent-purple flex items-center justify-center text-raw-color-bg font-black text-xs shadow-[0_0_10px_rgba(34,211,238,0.3)] group-hover:scale-105 transition-transform">
              <Terminal className="h-3.5 w-3.5 stroke-[2.5]" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-black tracking-wider uppercase font-mono text-raw-color-text-main group-hover:text-raw-color-accent transition-colors flex items-center gap-1.5">
                arii<span className="text-raw-color-accent font-light">/</span>portfolio
              </span>
              <span className="text-[9px] font-mono text-raw-color-accent-sky tracking-widest uppercase leading-none opacity-80">
                v2.16-stable
              </span>
            </div>
          </Link>

          {/* Desktop Responsive Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const active = isCurrent(item.path);
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold uppercase tracking-wider transition-all relative ${
                    active
                      ? 'text-raw-color-accent bg-raw-color-surface-alt/50 border border-raw-color-accent/20 shadow-[0_0_12px_rgba(34,211,238,0.05)]'
                      : 'text-raw-color-text-dim hover:text-raw-color-text-main hover:bg-raw-color-surface/40 border border-transparent'
                  }`}
                >
                  <span className="relative z-10 flex items-center gap-1">
                    {active && <span className="w-1 h-1 rounded-full bg-raw-color-accent animate-ping" />}
                    {item.label}
                  </span>
                </Link>
              );
            })}
          </nav>

          {/* High-Tech Diagnostic Widget (Desktop only) */}
          <div className="hidden lg:flex items-center space-x-4 border-l border-raw-color-line/20 pl-4">
            <div className="flex items-center gap-1.5 text-[10px] font-mono text-raw-color-text-dim">
              <Cpu className="h-3 w-3 text-raw-color-accent-purple animate-pulse" />
              <span>CORE_STABLE</span>
            </div>
            <div className="flex items-center gap-1.5 text-[10px] font-mono text-raw-color-text-dim">
              <Layers className="h-3 w-3 text-raw-color-accent animate-pulse" />
              <span>PORT: 3000</span>
            </div>
          </div>

          {/* Mobile Menu Hamburger Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-raw-color-surface border border-raw-color-line/30 text-raw-color-text-main hover:text-raw-color-accent focus:outline-none transition-all"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-raw-color-line/20 bg-raw-color-bg/95 backdrop-blur-xl py-4 px-4 space-y-2 animate-fadeIn">
            {navItems.map((item) => {
              const active = isCurrent(item.path);
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block w-full px-4 py-3 rounded-lg text-xs font-mono font-bold uppercase tracking-wider transition-all ${
                    active
                      ? 'text-raw-color-accent bg-raw-color-surface-alt border border-raw-color-accent/30'
                      : 'text-raw-color-text-dim hover:text-raw-color-text-main hover:bg-raw-color-surface border border-transparent'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {active && <span className="w-1.5 h-1.5 rounded-full bg-raw-color-accent animate-pulse" />}
                    {item.label}
                  </span>
                </Link>
              );
            })}

            {/* Micro telemetry widgets inside mobile nav */}
            <div className="pt-4 border-t border-raw-color-line/10 flex items-center justify-between text-[10px] font-mono text-raw-color-text-dim px-2">
              <span className="flex items-center gap-1">
                <Cpu className="h-3 w-3 text-raw-color-accent-purple" /> CPU: OK
              </span>
              <span className="flex items-center gap-1">
                <Layers className="h-3 w-3 text-raw-color-accent" /> MEM: OK
              </span>
              <span className="text-raw-color-accent-sky">v2.16-stable</span>
            </div>
          </div>
        )}
      </header>

      {/* Main Container with Grid Background Backdrop */}
      <main className="flex-grow max-w-6xl w-full mx-auto px-4 py-8 relative grid-pattern">
        <Outlet />
      </main>

      {/* Immersive Footer with tech info */}
      <footer className="border-t border-raw-color-line/20 bg-raw-color-bg/80 py-6">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-raw-color-text-dim text-xs font-mono">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-raw-color-accent animate-pulse" />
            <span>&copy; {new Date().getFullYear()} arii. All systems active.</span>
          </div>
          <div className="flex items-center space-x-4 mt-3 md:mt-0">
            <span className="text-[10px] uppercase tracking-widest text-raw-color-accent-purple">DevAI / Resume Consolidation</span>
            <span className="text-raw-color-line">|</span>
            <span className="text-[10px] text-raw-color-text-dim">SECURE_SHELL</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
