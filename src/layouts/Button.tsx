import { forwardRef, ButtonHTMLAttributes, ElementType, Ref } from "react"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/lib/variants"
import { Box, BaseProps } from "./Box"

interface ButtonProps
  extends BaseProps,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'color'> {
  as?: ElementType
  href?: string
  loading?: boolean
  variant?: any
  intent?: any
  size?: any
  fullWidth?: any
  [key: string]: any
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, as = "button", variant, intent, size, fullWidth, children, ...props }, ref) => {
    const cleanProps = { ...props };
    delete cleanProps.loading;
    return (
      <Box
        as={as}
        ref={ref as Ref<HTMLDivElement>}
        cursor="pointer"
        className={cn(buttonVariants({ variant, intent, size, fullWidth }), "tap-target", className)}
        {...cleanProps}
      >
        {children}
      </Box>
    )
  }
)
Button.displayName = "Button"
