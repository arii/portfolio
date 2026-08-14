import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from '../layouts/Footer';

export interface LayoutProps {
  className?: string;
}

const Layout: React.FC<LayoutProps> = ({ className }) => {
  return (
    <div className={`min-h-screen flex flex-col bg-bg text-text-body relative ${className || ''}`}>
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
