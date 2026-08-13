import * as React from "react"
import { cn } from "@/lib/utils"
import { opacity as opacityTokens } from "@/styles/design-tokens"

export interface IconProps extends React.HTMLAttributes<HTMLSpanElement> {
  icon: React.ElementType
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl"
  color?: "primary" | "dim" | "accent" | "muted" | "bg"
  strokeWidth?: number
  opacityVariant?: keyof typeof opacityTokens
}

export function Icon({ icon: LucideIcon, size = "md", color = "primary", className, strokeWidth, opacityVariant, ...props }: IconProps) {
  const sizeClasses = {
    xs: "w-3 h-3",
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-8 h-8",
    "2xl": "w-12 h-12",
    "3xl": "w-16 h-16",
  }

  const colorClasses = {
    primary: "text-text-main",
    dim: "text-text-dim",
    accent: "text-accent",
    muted: "text-text-dim opacity-50",
    bg: "text-bg",
  }

  return (
    <span
      className={cn(
        "shrink-0 inline-flex items-center justify-center",
        sizeClasses[size],
        colorClasses[color],
        opacityVariant && `opacity-[${opacityTokens[opacityVariant]}]`,
        className
      )}
      {...props}
    >
      <LucideIcon width="100%" height="100%" strokeWidth={strokeWidth} />
    </span>
  )
}
