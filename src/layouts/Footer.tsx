import React from 'react';

const LinkedinIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GithubIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-line/60 bg-bg py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6 lg:px-8">
        <div className="flex flex-col items-center sm:items-start space-y-2">
          <div className="text-xs text-text-dim">
            &copy; {currentYear} Ariel Anders Portfolio &middot; Robotics &amp; DevAI Systems
          </div>
          <div className="flex items-center space-x-4">
            <a href="https://github.com/arii" target="_blank" rel="noopener noreferrer" className="text-text-dim hover:text-accent transition-colors">
              <span className="sr-only">GitHub</span>
              <GithubIcon className="h-4 w-4" />
            </a>
            <a href="https://linkedin.com/in/arielanders" target="_blank" rel="noopener noreferrer" className="text-text-dim hover:text-accent transition-colors">
              <span className="sr-only">LinkedIn</span>
              <LinkedinIcon className="h-4 w-4" />
            </a>
          </div>
        </div>
        <div className="flex items-center space-x-6 text-xs text-text-dim">
          <span>San Francisco, CA</span>
          <span>&middot;</span>
          <span>MIT PhD</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
