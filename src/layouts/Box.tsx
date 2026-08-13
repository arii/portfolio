import { forwardRef } from "react"
import { cn } from "@/lib/utils"
import { spacing, layout as layoutTokens, zIndex as zIndexTokens, opacity as opacityTokens } from "@/styles/design-tokens"
import { variants } from "@/lib/variants"
import { RADIUS_MAP, SHADOW_MAP, SPAN_MAP } from "./layout-maps"
import { resolveJIT, resolveSpacing, applyResponsive } from "@/lib/style-utils"
import { BoxProps } from "./Box.types"

export type { BaseProps, BoxProps } from "./Box.types"

export const Box = forwardRef<HTMLDivElement, BoxProps>(
  ({
    className, as: Component = "div", padding,
    paddingTop, paddingBottom, paddingLeft, paddingRight, paddingX, paddingY,
    margin, marginTop, marginBottom, marginLeft, marginRight, marginX, marginY,
    gap, gapX, gapY, border, borderColor, smBorder, mdBorder, lgBorder, xlBorder,
    surface, emphasis, radius: radiusProp, panel, flex, wrap, shadow,
    position, inset, height, width, maxWidth, minHeight, maxHeight, minWidth,
    overflow, overflowX, overflowY, overscroll, isolation, noScrollbar, pointerEvents,
    zIndex, opacity, opacityVariant, display, aspect, shrink, self, span, cursor, flexWrap, textAlign,
    justify, align, scrollBehavior, scrollPaddingTop, scrollMarginTop,
    top, right, bottom, left, bgGradient, ...props
  }, ref) => {
    const borderClasses = cn(
      border === true && "border border-line",
      border === "t" && "border-t border-line", border === "b" && "border-b border-line",
      border === "l" && "border-l border-line", border === "r" && "border-r border-line",
      border === "x" && "border-x border-line", border === "y" && "border-y border-line",
      borderColor && resolveJIT(borderColor, "border"),
      smBorder && `sm:border-${smBorder}`, mdBorder && `md:border-${mdBorder}`,
      lgBorder && `lg:border-${lgBorder}`, xlBorder && `xl:border-${xlBorder}`
    )
    const DynComp = Component as any
    const finalOpacity = opacityVariant ? opacityTokens[opacityVariant as keyof typeof opacityTokens] : (typeof opacity === "string" && opacity in opacityTokens ? opacityTokens[opacity as keyof typeof opacityTokens] : opacity);

    return (
      <DynComp
        ref={ref}
        className={cn(
          panel && layoutTokens.panel, shadow && SHADOW_MAP[shadow],
          typeof surface === "string" ? variants.surface[surface as keyof typeof variants.surface] : (surface && "bg-surface"),
          bgGradient, emphasis && variants.emphasis[emphasis as keyof typeof variants.emphasis],
          radiusProp && RADIUS_MAP[radiusProp], borderClasses,
          applyResponsive(gap as any, resolveSpacing("gap")),
          applyResponsive(gapX as any, resolveSpacing("gap-x")), applyResponsive(gapY as any, resolveSpacing("gap-y")),
          applyResponsive(padding as any, resolveSpacing("p")),
          padding && typeof padding === "string" && spacing[padding as keyof typeof spacing],
          applyResponsive(paddingTop as any, resolveSpacing("pt")), applyResponsive(paddingBottom as any, resolveSpacing("pb")),
          applyResponsive(paddingLeft as any, resolveSpacing("pl")), applyResponsive(paddingRight as any, resolveSpacing("pr")),
          applyResponsive(paddingX as any, resolveSpacing("px")), applyResponsive(paddingY as any, resolveSpacing("py")),
          applyResponsive(margin as any, resolveSpacing("m")),
          applyResponsive(marginTop as any, resolveSpacing("mt")), applyResponsive(marginBottom as any, resolveSpacing("mb")),
          applyResponsive(marginLeft as any, resolveSpacing("ml")), applyResponsive(marginRight as any, resolveSpacing("mr")),
          applyResponsive(marginX as any, resolveSpacing("mx")), applyResponsive(marginY as any, resolveSpacing("my")),
          flex === true && "flex-1", flex !== undefined && typeof flex !== "boolean" && (typeof flex === "number" ? `flex-${flex}` : flex),
          (wrap || flexWrap) && "flex-wrap", position, inset === true && "inset-0",
          inset === "top" && "top-0 left-0 right-0", inset === "bottom" && "bottom-0 left-0 right-0",
          inset === "left" && "top-0 bottom-0 left-0", inset === "right" && "top-0 bottom-0 right-0",
          inset === "x" && "left-0 right-0", inset === "y" && "top-0 bottom-0",
          applyResponsive(height as any, (v) => resolveJIT(v as any, "h")),
          applyResponsive(width as any, (v) => resolveJIT(v as any, "w")),
          applyResponsive(maxWidth as any, (v) => resolveJIT(v as any, "max-w")),
          applyResponsive(minHeight as any, (v) => resolveJIT(v as any, "min-h")),
          applyResponsive(maxHeight as any, (v) => resolveJIT(v as any, "max-h")),
          applyResponsive(minWidth as any, (v) => resolveJIT(v as any, "min-w")),
          overflow && (overflow === "y-auto" ? "overflow-y-auto" : overflow === "x-auto" ? "overflow-x-auto" : overflow === "y-hidden" ? "overflow-y-hidden" : `overflow-${overflow}`),
          overflowX && `overflow-x-${overflowX}`, overflowY && `overflow-y-${overflowY}`,
          overscroll && (overscroll === "x-contain" ? "overscroll-x-contain" : overscroll === "y-contain" ? "overscroll-y-contain" : `overscroll-${overscroll}`),
          isolation, noScrollbar && "no-scrollbar", pointerEvents && `pointer-events-${pointerEvents}`,
          zIndex && (zIndexTokens[zIndex as keyof typeof zIndexTokens] !== undefined ? resolveJIT(zIndexTokens[zIndex as keyof typeof zIndexTokens], "z") : resolveJIT(zIndex, "z")),
          finalOpacity !== undefined && resolveJIT(finalOpacity as any, "opacity"),
          applyResponsive(display as any, (v) => v === "none" ? "hidden" : (v as string)),
          applyResponsive(aspect as any, (v) => (v === "square" || v === "video") ? `aspect-${v}` : v ? `aspect-[${v}]` : ""),
          shrink === true && "shrink", shrink === false && "shrink-0",
          shrink !== undefined && typeof shrink === "number" && `shrink-${shrink}`,
          applyResponsive(span as any, (v) => SPAN_MAP[v as keyof typeof SPAN_MAP] || ""), cursor && `cursor-${cursor}`,
          self && (self === "start" ? "self-start" : self === "center" ? "self-center" : self === "end" ? "self-end" : self === "stretch" ? "self-stretch" : "self-auto"),
          applyResponsive(textAlign as any, (v) => resolveJIT(v as any, "text")),
          justify && (justify === "start" ? "justify-start" : justify === "center" ? "justify-center" : justify === "end" ? "justify-end" : justify === "between" ? "justify-between" : justify === "around" ? "justify-around" : "justify-evenly"),
          align && (align === "start" ? "items-start" : align === "center" ? "items-center" : align === "end" ? "items-end" : align === "baseline" ? "items-baseline" : "items-stretch"),
          applyResponsive(top as any, resolveSpacing("top")), applyResponsive(right as any, resolveSpacing("right")),
          applyResponsive(bottom as any, resolveSpacing("bottom")), applyResponsive(left as any, resolveSpacing("left")),
          applyResponsive(scrollMarginTop as any, (v) => resolveJIT(v as any, "scroll-mt")),
          scrollBehavior && `scroll-${scrollBehavior}`, className
        )}
        style={{
          ...((scrollPaddingTop !== undefined) ? { scrollPaddingTop: typeof scrollPaddingTop === 'number' ? `${scrollPaddingTop}px` : scrollPaddingTop } : {}),
          ...props.style
        }}
        {...props}
      />
    )
  }
)
Box.displayName = "Box"
