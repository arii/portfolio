import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from '../layouts/Footer';

export interface LayoutProps {
  className?: string;
}

const Layout: React.FC<LayoutProps> = ({ className }) => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        if (typeof element.scrollIntoView === 'function') {
          element.scrollIntoView({ behavior: 'smooth' });
        }
        return;
      }
    }
    try {
      if (typeof window !== 'undefined' && typeof window.scrollTo === 'function') {
        window.scrollTo(0, 0);
      }
    } catch {
      // Ignore jsdom scrollNotImplemented warnings
    }
  }, [pathname, hash]);

  return (
    <div className={`min-h-screen flex flex-col bg-background text-muted-foreground relative ${className || ''}`}>
      <Navigation />

      {/* Main Outlet Page Container */}
      <main id="main-content" className="flex-grow w-full relative pb-24 lg:pb-12">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <Outlet />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
