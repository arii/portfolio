import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Direct mappings to tech-dancer CSS color tokens
        bg: 'var(--raw-color-bg, #020617)',
        surface: 'var(--raw-color-surface, #0f172a)',
        'surface-alt': 'var(--raw-color-surface-alt, #1e293b)',
        line: 'var(--raw-color-line, #334155)',
        accent: 'var(--raw-color-accent, #22d3ee)',
        'accent-sky': 'var(--raw-color-accent-sky, #38bdf8)',
        'accent-purple': 'var(--raw-color-accent-purple, #a78bfa)',
        'accent-magenta': 'var(--raw-color-accent-magenta, #e879f9)',
        'text-main': 'var(--raw-color-text-main, #f1f5f9)',
        'text-body': 'var(--raw-color-text-body, #e2e8f0)',
        'text-dim': 'var(--raw-color-text-dim, #cbd5e1)',
        error: 'var(--raw-color-error, #ef4444)',

        // Legacy mapping support for existing portfolio elements
        brand: {
          bg: {
            darker: 'var(--raw-color-bg, #020617)',
            dark: 'var(--raw-color-surface, #0f172a)',
            surface: 'var(--raw-color-surface-alt, #1e293b)',
          },
          cyan: {
            light: 'var(--raw-color-accent-sky, #38bdf8)',
            DEFAULT: 'var(--raw-color-accent, #22d3ee)',
            dark: '#0891b2',
          },
          green: {
            light: '#86efac',
            DEFAULT: '#34d399',
            dark: '#059669',
          },
          accent: 'var(--raw-color-accent-purple, #a78bfa)',
        },
        primary: 'var(--raw-color-accent, #22d3ee)',
        'primary-accent': 'var(--raw-color-accent-sky, #38bdf8)',
        secondary: 'var(--raw-color-text-dim, #cbd5e1)',
        muted: '#64748b',
        border: 'var(--raw-color-line, #334155)',
      },
      fontFamily: {
        sans: ['"Albert Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Bricolage Grotesque"', '"Albert Sans"', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        mono: ['"Space Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
};

export default config;
