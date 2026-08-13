import { type VariantProps } from "class-variance-authority";
import { layouts, buttons, typography } from "@/styles/utilities";
import { createTransitionVariants, variants } from "./variants-base";

export { createTransitionVariants, variants };

export const buttonVariants = createTransitionVariants(
  `${layouts.inlineFlexCenter} ${buttons.base}`,
  {
    variants: {
      variant: variants.emphasis,
      intent: {
        default: "text-text-main",
        success: "text-accent",
        danger: "text-error",
        warning: "text-accent",
      },
      size: {
        default: "h-[40px] px-6 text-xs",
        sm: "h-8 px-4 text-xs",
        md: "h-[40px] px-6 text-xs",
        lg: "h-12 px-8 text-sm",
        icon: "h-[40px] w-[40px]",
      },
      fullWidth: {
        true: "w-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export type ButtonVariants = VariantProps<typeof buttonVariants>;

export const actionButtonVariants = createTransitionVariants(
  buttons.action,
  {
    variants: {
      variant: {
        default: "hover:text-text-main",
        primary: "bg-accent text-bg hover:opacity-90 shadow-md",
        ghost: "hover:bg-line/10 text-text-dim hover:text-text-main",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export type ActionButtonVariants = VariantProps<typeof actionButtonVariants>;

export const cardVariants = createTransitionVariants(
  layouts.cardBase,
  {
    variants: {
      interactive: {
        true: "hover:border-accent cursor-pointer",
        false: "",
      },
      overflow: {
        hidden: "overflow-hidden",
        visible: "overflow-visible",
      },
      span: {
        1: "col-span-1",
        2: "col-span-2",
        3: "col-span-3",
      }
    },
    defaultVariants: {
      interactive: false,
      overflow: "visible",
    }
  }
);

export type CardVariants = VariantProps<typeof cardVariants>;

export const filterButtonVariants = createTransitionVariants(
  `${layouts.inlineFlexCenter} ${layouts.filterBase}`,
  {
    variants: {
      variant: {
        default: "px-4 py-3 min-h-11",
        compact: "px-4 py-1.5",
        quiet: "px-3.5 py-2 font-medium tracking-normal",
      },
      isActive: {
        true: "",
        false: "",
      },
    },
    compoundVariants: [
      {
        variant: ["default", "compact"],
        isActive: true,
        className: "bg-accent text-bg border-transparent hover:bg-accent/10",
      },
      {
        variant: ["default", "compact"],
        isActive: false,
        className: "border-line text-text-dim hover:border-accent hover:text-accent hover:bg-accent/5 transition-colors",
      },
      {
        variant: "quiet",
        isActive: true,
        className: "bg-surface border-line text-text-main hover:bg-surface/80",
      },
      {
        variant: "quiet",
        isActive: false,
        className: "bg-transparent border-transparent text-text-dim hover:text-text-main hover:bg-line/10",
      },
    ],
    defaultVariants: {
      variant: "default",
      isActive: false,
    },
  }
);

export type FilterButtonVariants = VariantProps<typeof filterButtonVariants>;

export const tagVariants = createTransitionVariants(
  `${layouts.inlineFlexCenter} ${layouts.tagBase} ${typography.utility}`,
  {
    variants: {
      variant: {
        sky: "bg-accent-sky/10 text-accent-sky border-accent-sky/20",
        purple: "bg-accent-purple/10 text-accent-purple border-accent-purple/20",
        cyan: "bg-accent/10 text-accent border-accent/20",
        default: "bg-surface-alt/50 text-text-dim border-line/30",
      },
      size: {
        xs: "px-2 py-0.5 text-micro",
        sm: "px-3 py-1 text-xs",
      }
    },
    defaultVariants: {
      variant: "default",
      size: "sm",
    }
  }
);

export type TagVariants = VariantProps<typeof tagVariants>;
