import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';

export interface LayoutProps {
  className?: string;
}

const Layout: React.FC<LayoutProps> = ({ className }) => {
  const location = useLocation();

  const isCurrent = (path: string): boolean => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className={`min-h-screen flex flex-col bg-brand-bg-dark text-slate-100 ${className || ''}`}>
      <header className="border-b border-slate-800 bg-brand-bg-darker/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 group">
            <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-brand-cyan to-brand-green bg-clip-text text-transparent group-hover:opacity-80 transition-opacity">
              arii / portfolio
            </span>
          </Link>
          <nav className="flex space-x-1 sm:space-x-4">
            <Link
              to="/"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isCurrent('/')
                  ? 'bg-slate-800 text-brand-cyan-light font-semibold'
                  : 'text-slate-400 hover:text-slate-100 hover:bg-slate-900'
              }`}
            >
              Home
            </Link>
            <Link
              to="/research"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isCurrent('/research')
                  ? 'bg-slate-800 text-brand-cyan-light font-semibold'
                  : 'text-slate-400 hover:text-slate-100 hover:bg-slate-900'
              }`}
            >
              Research (Boomtick)
            </Link>
            <Link
              to="/resume"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isCurrent('/resume')
                  ? 'bg-slate-800 text-brand-cyan-light font-semibold'
                  : 'text-slate-400 hover:text-slate-100 hover:bg-slate-900'
              }`}
            >
              Resume
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-grow max-w-6xl w-full mx-auto px-4 py-8">
        <Outlet />
      </main>

      <footer className="border-t border-slate-900 bg-brand-bg-darker py-6">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-slate-500 text-xs">
          <div>
            &copy; {new Date().getFullYear()} arii. All rights reserved.
          </div>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <span className="text-slate-600">DevAI / Resume Consolidation</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
