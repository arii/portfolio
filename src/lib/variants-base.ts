import { cva } from "class-variance-authority";
import { transitions, interaction, buttons } from "@/styles/utilities";

export const createTransitionVariants: any = (base: any, config: any) => {
  const baseClasses = base ? `${base} ${transitions.default}` : transitions.default;
  const variantFn = cva(baseClasses, config);

  const cache = new Map<string, string>();

  const memoizedVariantFn = (props?: unknown) => {
    const key = JSON.stringify(props || {});
    if (cache.has(key)) return cache.get(key)!;

    const result = variantFn(props as any);
    cache.set(key, result);
    return result;
  };

  return memoizedVariantFn as unknown as typeof variantFn;
};

export const variants = {
  surface: {
    default: "bg-surface text-text-main",
    muted: "bg-line/50 text-text-dim",
    accent: "bg-accent/5 border-accent/20 text-accent",
    alt: "bg-surface-alt text-text-main",
    card: "bg-card-bg border-line",
    contrast: "bg-text-main text-bg",
    success: "bg-accent/5 border-accent/20 text-accent",
    warning: "bg-accent-purple/5 border-accent-purple/20 text-accent-purple",
    error: "bg-error-surface border-error/20 text-error",
    bg: "bg-bg text-text-body",
  },
  intent: {
    default: "text-text-main",
    success: "text-accent",
    danger: "text-error",
    warning: "text-amber-500",
  },
  emphasis: {
    solid: "bg-text-main text-bg border-transparent",
    outline: `${buttons.outline} ${interaction.active}`,
    ghost: "bg-transparent hover:bg-line/10",
    primary: `${buttons.primary} ${interaction.active}`,
    professional: `${buttons.professional} ${interaction.active}`,
    fab: `${buttons.fab} rounded-none`,
    reminder: "bg-accent-purple text-bg hover:bg-accent-purple/90 shadow-lg h-14 w-full",
  },
  radius: {
    none: "rounded-none",
    industrial: "rounded-[2px]",
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    xl: "rounded-xl",
  }
} as const;
