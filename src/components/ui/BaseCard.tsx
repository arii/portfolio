import { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import { Box, Stack } from '@/layouts/Primitives';
import { cn } from '@/lib/utils';

interface BaseCardProps {
  children: ReactNode;
  to?: string;
  href?: string;
  rel?: string;
  ariaLabel?: string;
  className?: string;
  border?: boolean;
  padding?: any;
  gap?: any;
  surface?: any;
  height?: any;
  overflow?: any;
  [key: string]: any;
}

export function BaseCard({
  children,
  to,
  href,
  rel,
  ariaLabel,
  className,
  border = true,
  ...props
}: BaseCardProps) {
  const isLink = !!(to || href);

  const cardClasses = cn(
    "group relative bg-surface",
    "motion-safe:transition-all motion-safe:duration-200 motion-reduce:transition-none",
    border === true && "card-border",
    isLink && "hover:border-accent/40",
    className
  );

  const linkClasses = "absolute inset-0 z-10 rounded-md outline-none focus-visible:ring-2 focus-visible:ring-accent";

  return (
    <Stack
      as="article"
      radius="md"
      className={cardClasses}
      {...props}
    >
      {to && (
        <Box
          as={NavLink}
          to={to}
          aria-label={ariaLabel}
          className={linkClasses}
        />
      )}
      {href && (
        <Box
          as="a"
          href={href}
          target="_blank"
          rel={rel || "noopener noreferrer"}
          aria-label={ariaLabel}
          className={linkClasses}
        />
      )}
      {children}
    </Stack>
  );
}
