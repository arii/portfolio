import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-border/60 bg-bg py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6 lg:px-8">
        <div className="text-xs text-secondary">
          &copy; {currentYear} Ariel Anders Portfolio &middot; Robotics &amp; DevAI Systems
        </div>
        <div className="flex items-center space-x-6 text-xs text-secondary">
          <span>San Francisco, CA</span>
          <span>&middot;</span>
          <span>MIT PhD Computer Science</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
