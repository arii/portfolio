import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#020617',
        surface: '#0f172a',
        'surface-alt': '#1e293b',
        line: '#1e293b',
        accent: '#f59e0b', // amber-500
        'accent-sky': '#38bdf8',
        'accent-purple': '#a78bfa',
        'text-main': '#f8fafc', // slate-50
        'text-body': '#cbd5e1', // slate-300
        'text-dim': '#94a3b8', // slate-400
        'text-primary': '#f8fafc',
        'text-secondary': '#cbd5e1',
        'surface-elevated': '#1e293b',
        error: '#ef4444',

        background: '#020617', // slate-950
        foreground: '#f8fafc', // slate-50
        card: '#0f172a', // slate-900
        'card-foreground': '#f8fafc',
        muted: '#1e293b', // slate-800
        'muted-foreground': '#94a3b8', // slate-400
        border: '#334155', // slate-700
        primary: '#f59e0b', // amber-500
        'primary-foreground': '#fffbeb', // amber-50
        secondary: '#1e293b', // slate-800
        'secondary-foreground': '#f8fafc', // slate-50
      },
      fontFamily: {
        // Updated to a non-AI default typeface (Plus Jakarta Sans)
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        serif: ['"Georgia"', 'serif'],
        mono: ['"SFMono-Regular"', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
    },
  },
  plugins: [],
};

export default config;
