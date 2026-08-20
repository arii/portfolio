import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Layers, Activity, User, FileText } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Overview', path: '/', icon: Activity },
    { name: 'DevAI', path: '/devai', icon: Layers },
    { name: 'Research', path: '/research', icon: Layers },
    { name: 'Resume', path: '/resume', icon: FileText },
    { name: 'About Ariel', path: '/about', icon: User },
  ];

  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-slate-950/95 backdrop-blur-md">
        <div className="mx-auto flex h-14 sm:h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="flex flex-col">
              <span className="text-sm sm:text-base font-bold tracking-tight text-foreground">
                Portfolio
              </span>
              <span className="hidden sm:block text-xs text-muted-foreground">
                Roboticist &amp; Senior Software Engineer
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:items-center md:space-x-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const active = isActive(link.path);
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`flex items-center space-x-2 rounded-md px-3.5 py-2 text-sm font-medium transition-colors min-h-[44px] ${
                    active
                      ? 'bg-secondary text-foreground'
                      : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{link.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-11 w-11 items-center justify-center rounded-md border border-border text-muted-foreground hover:text-foreground md:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Fixed Slide-over Modal Drawer */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex justify-end bg-slate-950/80 backdrop-blur-md md:hidden"
          onClick={() => setIsOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
        >
          <div
            className="w-72 h-full bg-slate-950 border-l border-slate-800 p-6 shadow-2xl flex flex-col justify-between"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <span className="text-sm font-bold text-slate-100">Navigation</span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="flex h-11 w-11 items-center justify-center rounded-md border border-slate-800 text-slate-300 hover:text-slate-100"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="flex flex-col space-y-2">
                {navLinks.map((link) => {
                  const Icon = link.icon;
                  const active = isActive(link.path);
                  return (
                    <Link
                      key={link.name}
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center space-x-3 rounded-lg px-4 py-3 text-base font-semibold min-h-[44px] transition-colors ${
                        active
                          ? 'bg-amber-500/15 text-amber-400 border border-amber-500/30'
                          : 'text-slate-300 hover:bg-slate-900 hover:text-slate-100'
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                      <span>{link.name}</span>
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="pt-6 border-t border-slate-800">
              <span className="text-xs text-slate-400">
                Ariel Anders, PhD — Roboticist
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
