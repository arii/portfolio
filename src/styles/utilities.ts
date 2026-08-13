export const transitions = {
  default: "motion-safe:transition-all motion-safe:duration-200 motion-reduce:transition-none",
  slow: "motion-safe:transition-all motion-safe:duration-300 motion-reduce:transition-none",
  fast: "motion-safe:transition-all motion-safe:duration-150 motion-reduce:transition-none",
  colors: "motion-safe:transition-colors motion-safe:duration-200 motion-reduce:transition-none",
  opacity: "motion-safe:transition-opacity motion-safe:duration-200 motion-reduce:transition-none",
  transform: "motion-safe:transition-transform motion-safe:duration-200 motion-reduce:transition-none",
} as const;

export const interaction = {
  active: "scale-active",
  tapTarget: "tap-target",
  hoverMuted: "hover:bg-line/10",
  hoverAccent: "hover:border-accent hover:bg-accent/5",
  hoverOpacity: "hover:opacity-90",
  card: "group relative bg-surface",
  cardHover: "hover:border-accent/40",
  journalCard: "hover:border-accent/50 hover:bg-surface/50 group cursor-pointer",
} as const;

export const typography = {
  labelSmall: "text-tiny font-mono font-bold uppercase tracking-widest",
  h1: "font-display font-black tracking-tighter leading-tightest",
  h2: "font-display font-bold tracking-tight leading-tight",
  h3: "font-display font-semibold tracking-tight leading-snug",
  body: "font-sans leading-relaxed text-text-body",
  mono: "font-mono tracking-widest uppercase",
  utility: "font-semibold uppercase tracking-wider",
} as const;

export const layouts = {
  flexCenter: "flex items-center justify-center",
  inlineFlexCenter: "inline-flex items-center justify-center",
  stack: "flex flex-col",
  cardBase: "bg-surface rounded-md shadow-sm card-border",
  filterBase: "border whitespace-nowrap font-semibold uppercase tracking-emphasized text-xs",
  tagBase: "rounded border",
} as const;

export const buttons = {
  base: "font-sans tracking-normal disabled:opacity-50 disabled:cursor-not-allowed",
  action: "font-bold text-sm shrink-0 flex items-center gap-2 disabled:opacity-50",
  returnBase: "group outline-none focus-visible:ring-2 focus-visible:ring-accent",
  returnInner: "group-hover:bg-accent group-hover:text-bg shadow-lg group-hover:shadow-accent/20",
  outline: "border border-line bg-transparent text-sm font-bold tracking-wide rounded-md hover:bg-line/10 hover:border-text-main/50",
  primary: "bg-accent text-bg text-sm font-bold tracking-wide rounded-md hover:bg-accent-sky shadow-sm",
  professional: "bg-text-main text-white font-sans rounded-lg hover:bg-text-main/90 shadow-sm normal-case tracking-normal",
  fab: "bg-surface-alt text-accent border border-accent/20 shadow-lg hover:bg-accent hover:text-bg",
} as const;

export const journal = {
  tagSeparator: "after:content-[var(--tag-delimiter,',')] last:after:content-none",
  share: "text-text-dim hover:text-accent group",
  tag: "border-line/50 hover:border-accent cursor-default",
  nav: "group cursor-pointer",
} as const;

export const lists = {
  row: "text-left border-l-4 w-full",
} as const;
