import { ReactNode, ElementType, forwardRef, Ref } from 'react';
import { Box } from '@/layouts/Primitives';
import { cn } from '@/lib/utils';

interface ActionButtonProps {
  children: ReactNode;
  as?: ElementType;
  variant?: 'primary' | 'secondary' | 'ghost' | 'accent';
  loading?: boolean;
  className?: string;
  [key: string]: any;
}

export const ActionButton = forwardRef<HTMLElement, ActionButtonProps>(
  ({ children, className, as = "button", variant = "primary", ...props }, ref) => {
    const cleanProps = { ...props };
    delete cleanProps.loading;
    return (
      <Box
        as={as}
        ref={ref as Ref<HTMLDivElement>}
        display="flex"
        align="center"
        justify="center"
        cursor="pointer"
        className={cn(
          "transition-all font-bold uppercase tracking-widest text-xs disabled:opacity-50 disabled:cursor-not-allowed",
          variant === 'primary' && "bg-accent text-bg hover:bg-accent/90",
          variant === 'secondary' && "bg-surface-alt text-text-main border border-line hover:border-accent/50",
          variant === 'accent' && "bg-accent-navy text-bg border border-accent/20 hover:bg-accent/10",
          variant === 'ghost' && "bg-transparent text-text-dim hover:text-text-main hover:bg-line/10",
          className
        )}
        {...cleanProps}
      >
        {children}
      </Box>
    );
  }
);

ActionButton.displayName = "ActionButton";
