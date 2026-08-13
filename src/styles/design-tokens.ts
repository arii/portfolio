export const spacing = {
  card: "p-card",
  compact: "p-compact",
} as const;
export type Spacing = keyof typeof spacing;

export const animation = {
  fast: "duration-fast",
  normal: "duration-normal",
  smooth: "ease-smooth",
  ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
  revealDistance: "var(--reveal-distance)",
} as const;

export const layout = {
  root: "flex min-h-screen bg-bg",
  navRail: "nav-rail hidden lg:flex flex-col justify-between min-h-screen sticky top-0",
  mobileHeader: "lg:hidden fixed top-0 left-0 right-0 h-16 bg-surface z-[110] flex items-center justify-between px-8 border-b border-line w-full",
  panel: "panel h-full overflow-y-auto w-full",
} as const;
export type Layout = keyof typeof layout;

export const inputs = {
  base: "w-full bg-bg border border-line px-4 py-3 text-sm font-sans text-slate-100 placeholder:text-slate-400 placeholder:opacity-100 focus:outline-none focus:border-accent transition-all duration-150",
  label: "text-tiny font-mono font-bold uppercase tracking-widest text-text-dim block mb-2",
  select: "bg-bg border border-line px-3 py-1 text-tiny font-mono font-bold uppercase tracking-widest text-accent focus:outline-none focus:border-accent",
  error: "border-error focus:border-error focus:ring-error/20",
} as const;

export const shadows = {
  topOverlay: "shadow-top-overlay",
  standard: "shadow-sm",
  glow: "shadow-[0_0_15px_var(--color-accent-shadow)]",
} as const;
export type Shadow = keyof typeof shadows;

export const stroke = {
  thin: "stroke-[0.5]",
  thick: "stroke-[1.5]",
} as const;
export type Stroke = keyof typeof stroke;

export const iconSizes = {
  xs: 12,
  sm: 16,
  md: 20,
  lg: 24,
  xl: 32,
} as const;
export type IconSize = keyof typeof iconSizes;

export const zIndex = {
  hide: "hide",
  base: "base",
  docked: "docked",
  dropdown: "dropdown",
  sticky: "sticky",
  overlay: "overlay",
  modal: "modal",
  popover: "popover",
  skipLink: "skip-link",
  toast: "toast",
  top: "top",
  nav: "nav",
  mobileMenu: "mobile-menu",
  search: "search",
} as const;

export const tracking = {
  tighter: "tracking-tighter",
  tight: "tracking-tight",
  normal: "tracking-normal",
  wide: "tracking-wide",
  wider: "tracking-wider",
  widest: "tracking-widest",
  "wide-editorial": "tracking-wide-editorial",
  emphasized: "tracking-[0.15em]",
  utility: "tracking-[3px]",
  label: "tracking-[2px]",
  wordmark: "tracking-[0.05em]",
} as const;
export type Tracking = keyof typeof tracking;

export const typography = {
  h1: "font-display font-black tracking-tighter leading-[0.95]",
  h2: "font-display font-bold tracking-tight leading-tight",
  h3: "font-display font-semibold tracking-tight leading-snug",
  headline: "font-display font-bold tracking-tighter leading-[0.9]",
  display: "font-display font-bold tracking-tight leading-none",
  hero: "font-serif font-black tracking-tight leading-[1.2] break-words",
  body: "font-sans leading-relaxed text-text-body max-w-[65ch] break-words",
  mono: "font-mono tracking-widest uppercase",
  sans: "font-sans",
} as const;

export const opacity = {
  none: 0,
  ghost: 0.1,
  low: 0.2,
  medium: 0.3,
  subtle: 0.4,
  muted: 0.5,
  dim: 0.6,
  high: 0.7,
  heavy: 0.8,
  solid: 0.9,
  full: 1,
} as const;
export type Opacity = keyof typeof opacity;

export const typeSizes = {
  micro: "text-micro",
  tiny: "text-tiny",
  xs: "text-xs",
  sm: "text-sm",
  base: "text-base",
  lg: "text-lg",
  xl: "text-xl",
  "2xl": "text-2xl",
  "3xl": "text-3xl",
  "4xl": "text-4xl",
  "5xl": "text-fluid-5",
  "6xl": "text-fluid-6",
  "7xl": "text-fluid-7",
  "8xl": "text-fluid-8",
  "9xl": "text-fluid-9",
  "fluid-5": "text-3xl sm:text-4xl md:text-5xl",
  "fluid-6": "text-4xl sm:text-5xl md:text-6xl",
  "fluid-7": "text-5xl sm:text-6xl md:text-7xl",
  "fluid-8": "text-6xl sm:text-7xl md:text-8xl",
  "fluid-9": "text-7xl sm:text-8xl md:text-9xl",
} as const;
