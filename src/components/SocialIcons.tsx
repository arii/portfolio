import React from 'react';

export interface SocialIconsProps {
  className?: string;
  iconClassName?: string;
}

export const LinkedinIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export const GithubIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

export const BoomTickIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width="100" height="100" rx="22" fill="#090d16" />
    <text
      x="16"
      y="76"
      fill="#ffffff"
      fontSize="72"
      fontWeight="900"
      fontFamily="system-ui, -apple-system, sans-serif"
    >
      b
    </text>
    <path
      d="M62 25 L76 15 V35 H88 V48 H76 V68 C76 76 79 79 85 79 C87 79 89 78.5 91 78 V89 C88 90 83 91 78 91 C67 91 62 83 62 69 V48 H53 V35 H62 V25 Z"
      fill="#06b6d4"
    />
  </svg>
);

export const MailIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const SocialIcons: React.FC<SocialIconsProps> = ({
  className = 'flex items-center gap-4',
  iconClassName = 'w-5 h-5 text-muted-foreground hover:text-foreground transition-colors',
}) => {
  return (
    <div className={className}>
      <a
        href="https://linkedin.com/in/arii"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className={iconClassName}
      >
        <LinkedinIcon className="w-full h-full" />
      </a>
      <a
        href="https://github.com/arii"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className={iconClassName}
      >
        <GithubIcon className="w-full h-full" />
      </a>
      <a
        href="https://boomtick.blog"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="BoomTick Blog"
        className={iconClassName}
      >
        <BoomTickIcon className="w-full h-full" />
      </a>
    </div>
  );
};

export default SocialIcons;
