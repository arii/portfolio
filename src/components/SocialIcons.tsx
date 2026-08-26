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
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 15H26V43C29.5 38 35 35.5 42.5 35.5C56 35.5 65 45 65 62.5C65 80 56 89.5 42.5 89.5C35 89.5 29.5 87 26 82V89.5H12V15ZM26 62.5C26 72.5 31.5 77.5 38.5 77.5C45.5 77.5 51 72.5 51 62.5C51 52.5 45.5 47.5 38.5 47.5C31.5 47.5 26 52.5 26 62.5Z"
    />
    <path d="M62 25 L76 15 V35 H88 V48 H76 V68 C76 76 79 79 85 79 C87 79 89 78.5 91 78 V89 C88 90 83 91 78 91 C67 91 62 83 62 69 V48 H53 V35 H62 V25 Z" />
  </svg>
);

export const ScholarIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-24L0 9.5l4.8 3.8v5.7h2.4v-3.8l4.8 3.8 12-9.5L12 0z" />
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
  className = 'flex items-center gap-2',
  iconClassName = 'w-5 h-5 text-muted-foreground hover:text-foreground transition-colors',
}) => {
  return (
    <div className={className}>
      <a
        href="https://www.linkedin.com/in/ariel-anders/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn Profile"
        className={`flex items-center justify-center min-h-[48px] min-w-[48px] rounded-lg hover:bg-surface/50 transition-colors ${iconClassName.replace('w-5 h-5 ', '')}`}
      >
        <LinkedinIcon className="w-5 h-5" />
      </a>
      <a
        href="https://github.com/arii"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub Profile"
        className={`flex items-center justify-center min-h-[48px] min-w-[48px] rounded-lg hover:bg-surface/50 transition-colors ${iconClassName.replace('w-5 h-5 ', '')}`}
      >
        <GithubIcon className="w-5 h-5" />
      </a>
      <a
        href="https://boomtick.blog"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="BoomTick Blog Profile"
        className={`flex items-center justify-center min-h-[48px] min-w-[48px] rounded-lg hover:bg-surface/50 transition-colors ${iconClassName.replace('w-5 h-5 ', '')}`}
      >
        <BoomTickIcon className="w-5 h-5" />
      </a>
    </div>
  );
};

export default SocialIcons;
