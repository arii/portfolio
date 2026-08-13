import { HTMLAttributes, ElementType } from "react"
import { spacing, layout as layoutTokens, shadows, opacity as opacityTokens } from "@/styles/design-tokens"
import { variants } from "@/lib/variants"
import { ResponsiveProp } from "@/lib/style-utils"

export interface BaseProps {
  padding?: ResponsiveProp<keyof typeof spacing | number | string>
  paddingTop?: ResponsiveProp<keyof typeof spacing | number | string>
  paddingBottom?: ResponsiveProp<keyof typeof spacing | number | string>
  paddingLeft?: ResponsiveProp<keyof typeof spacing | number | string>
  paddingRight?: ResponsiveProp<keyof typeof spacing | number | string>
  paddingX?: ResponsiveProp<keyof typeof spacing | number | string>
  paddingY?: ResponsiveProp<keyof typeof spacing | number | string>
  margin?: ResponsiveProp<keyof typeof spacing | number | string | "auto">
  marginTop?: ResponsiveProp<keyof typeof spacing | number | string | "auto">
  marginBottom?: ResponsiveProp<keyof typeof spacing | number | string | "auto">
  marginLeft?: ResponsiveProp<keyof typeof spacing | number | string | "auto">
  marginRight?: ResponsiveProp<keyof typeof spacing | number | string | "auto">
  marginX?: ResponsiveProp<keyof typeof spacing | number | string | "auto">
  marginY?: ResponsiveProp<keyof typeof spacing | number | string | "auto">
  gap?: ResponsiveProp<number | string>
  gapX?: ResponsiveProp<number | string>
  gapY?: ResponsiveProp<number | string>
  border?: boolean | "t" | "b" | "l" | "r" | "x" | "y"
  borderColor?: string
  smBorder?: boolean | "t" | "b" | "l" | "r" | "x" | "y" | { t?: boolean, b?: boolean, l?: boolean, r?: boolean }
  mdBorder?: boolean | "t" | "b" | "l" | "r" | "x" | "y" | { t?: boolean, b?: boolean, l?: boolean, r?: boolean }
  lgBorder?: boolean | "t" | "b" | "l" | "r" | "x" | "y" | { t?: boolean, b?: boolean, l?: boolean, r?: boolean }
  xlBorder?: boolean | "t" | "b" | "l" | "r" | "x" | "y" | { t?: boolean, b?: boolean, l?: boolean, r?: boolean }
  surface?: keyof typeof variants.surface | boolean
  emphasis?: keyof typeof variants.emphasis
  radius?: keyof typeof variants.radius
  panel?: boolean
  flex?: number | string | boolean
  wrap?: boolean
  layout?: keyof typeof layoutTokens
  shadow?: keyof typeof shadows
  position?: "fixed" | "sticky" | "absolute" | "relative"
  inset?: boolean | "top" | "bottom" | "left" | "right" | "x" | "y"
  width?: ResponsiveProp<"0" | "full" | "min" | "fit" | "auto" | "screen" | number | string>
  height?: ResponsiveProp<"full" | "screen" | "auto" | "min" | "fit" | number | string>
  minWidth?: ResponsiveProp<"0" | "full" | "min" | "fit" | number | string>
  minHeight?: ResponsiveProp<"0" | "full" | "min" | "fit" | number | string>
  maxWidth?: ResponsiveProp<"xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "full" | "prose" | "screen-sm" | "screen-md" | "screen-lg" | "screen-xl" | "screen-2xl">
  maxHeight?: ResponsiveProp<"full" | "screen" | "auto" | "min" | "fit" | number | string>
  overflow?: "auto" | "hidden" | "scroll" | "x-auto" | "y-auto" | "y-hidden" | "visible"
  overflowX?: "auto" | "hidden" | "scroll" | "visible"
  overflowY?: "auto" | "hidden" | "scroll" | "visible"
  overscroll?: "auto" | "contain" | "none" | "x-contain" | "y-contain"
  isolation?: "isolate" | "auto"
  noScrollbar?: boolean
  pointerEvents?: "auto" | "none" | "inherit" | "initial" | "revert" | "unset"
  zIndex?: number | string
  opacity?: number | string | keyof typeof opacityTokens
  opacityVariant?: keyof typeof opacityTokens
  display?: ResponsiveProp<"none" | "block" | "flex" | "grid" | "inline" | "inline-block">
  aspect?: ResponsiveProp<"square" | "video" | "auto" | string>
  shrink?: number | boolean
  self?: "start" | "center" | "end" | "stretch" | "auto"
  justify?: "start" | "center" | "end" | "between" | "around" | "evenly"
  align?: "start" | "center" | "end" | "baseline" | "stretch"
  scrollBehavior?: "smooth" | "auto"
  scrollPaddingTop?: number | string
  scrollMarginTop?: ResponsiveProp<keyof typeof spacing | number | string>
  top?: ResponsiveProp<keyof typeof spacing | number | string>
  right?: ResponsiveProp<keyof typeof spacing | number | string>
  bottom?: ResponsiveProp<keyof typeof spacing | number | string>
  left?: ResponsiveProp<keyof typeof spacing | number | string>
  span?: ResponsiveProp<number | string>
  cursor?: "auto" | "default" | "pointer" | "wait" | "text" | "move" | "help" | "not-allowed" | "none" | string
  flexWrap?: boolean | "wrap" | "wrap-reverse" | "nowrap"
  textAlign?: ResponsiveProp<"left" | "center" | "right" | "justify">
  bgGradient?: string
}

export interface BoxProps extends BaseProps, HTMLAttributes<HTMLDivElement> {
  as?: ElementType
  [key: string]: any
}
