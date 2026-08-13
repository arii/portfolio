import { forwardRef } from "react"
import { cn } from "@/lib/utils"
import { Box, BoxProps } from "./Box"
import { applyResponsive, type ResponsiveProp } from "@/lib/style-utils"

import { COLS_MAP, ROWS_MAP } from "./layout-maps"

interface GridProps extends BoxProps {
  cols?: ResponsiveProp<number | string>
  rows?: ResponsiveProp<number | string>
}

export const Grid = forwardRef<HTMLDivElement, GridProps>(
  ({ className, cols = 12, rows, display = "grid", ...props }, ref) => {
    return (
      <Box
        ref={ref}
        display={display}
        className={cn(
          applyResponsive(cols, (v) => COLS_MAP[v as keyof typeof COLS_MAP] || ""),
          applyResponsive(rows, (v) => ROWS_MAP[v as keyof typeof ROWS_MAP] || ""),
          className
        )}
        {...props}
      />
    )
  }
)
Grid.displayName = "Grid"
