import React from 'react';
import SocialIcons from '@/components/SocialIcons';

export interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className = '' }) => {
  return (
    <footer
      className={`w-full border-t border-border/40 bg-background/95 py-8 transition-colors duration-200 ${className}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex flex-col gap-1">
            <p className="text-xs text-text-body font-medium">
              &copy; {new Date().getFullYear()} Ariel Anders, PhD
            </p>
            <p className="text-xs italic text-text-body/90 font-serif">
              &ldquo;Try to be a rainbow in someone&rsquo;s cloud.&rdquo; &ndash; Maya Angelou
            </p>
          </div>
          <div className="flex items-center justify-center sm:justify-end">
            <SocialIcons />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
