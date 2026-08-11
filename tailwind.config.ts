import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Design tokens matching the "boomtick" developer AI / technical console palette
        brand: {
          // Dark backgrounds and surfaces
          bg: {
            darker: 'var(--brand-bg-darker, #0a0e17)',
            dark: 'var(--brand-bg-dark, #0f172a)',
            surface: 'var(--brand-bg-surface, #1e293b)',
          },
          // Custom neon/cyber accents
          cyan: {
            light: 'var(--brand-cyan-light, #38bdf8)',
            DEFAULT: 'var(--brand-cyan, #0ea5e9)',
            dark: 'var(--brand-cyan-dark, #0284c7)',
          },
          green: {
            light: 'var(--brand-green-light, #4ade80)',
            DEFAULT: 'var(--brand-green, #22c55e)',
            dark: 'var(--brand-green-dark, #16a34a)',
          },
          accent: 'var(--brand-accent, #6366f1)', // Indigo/cyber highlight
        },
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'ui-monospace', 'monospace'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
