import React from 'react';

export const Box: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props) => <div {...props} />;

export const Stack: React.FC<React.HTMLAttributes<HTMLDivElement> & { gap?: '1' | '2' | '3' | '4' | '6' | '8' | '10' | '12' | '16', direction?: 'row' | 'col', align?: 'start' | 'center' | 'end' | 'stretch', justify?: 'start' | 'center' | 'end' | 'between' | 'around' }> = ({ gap = '4', direction = 'col', align, justify, className = '', ...props }) => {
  const alignClass = align ? `items-${align}` : '';
  const justifyClass = justify ? `justify-${justify}` : '';

  // Safe list mappings to prevent PurgeCSS dynamic removal
  const spaceYMap: Record<string, string> = { '1': 'space-y-1', '2': 'space-y-2', '3': 'space-y-3', '4': 'space-y-4', '6': 'space-y-6', '8': 'space-y-8', '10': 'space-y-10', '12': 'space-y-12', '16': 'space-y-16' };
  const spaceXMap: Record<string, string> = { '1': 'space-x-1', '2': 'space-x-2', '3': 'space-x-3', '4': 'space-x-4', '6': 'space-x-6', '8': 'space-x-8', '10': 'space-x-10', '12': 'space-x-12', '16': 'space-x-16' };

  const gapClass = direction === 'col' ? spaceYMap[gap] : spaceXMap[gap];
  const dirClass = direction === 'col' ? 'flex-col' : 'flex-row';

  return <div className={`flex ${dirClass} ${gapClass} ${alignClass} ${justifyClass} ${className}`} {...props} />;
};

export const Grid: React.FC<React.HTMLAttributes<HTMLDivElement> & { cols?: string, gap?: '4' | '6' | '8' | '10' | '12' }> = ({ cols = '1', gap = '8', className = '', ...props }) => {
  const gapMap: Record<string, string> = { '4': 'gap-4', '6': 'gap-6', '8': 'gap-8', '10': 'gap-10', '12': 'gap-12' };

  // Custom parsing for inputs like "1 md:grid-cols-3" or "1 lg:grid-cols-12" to be safely processed
  const baseCols = cols.split(' ')[0];
  const colsStr = ['1', '2', '3', '4', '12'].includes(baseCols) ? `grid-cols-${baseCols}` : '';
  const customCols = cols.split(' ').slice(1).join(' '); // e.g., "md:grid-cols-3"

  return <div className={`grid ${colsStr} ${customCols} ${gapMap[gap]} ${className}`} {...props} />;
};

export const Text: React.FC<React.HTMLAttributes<HTMLParagraphElement> & { variant?: 'body' | 'dim' | 'heading' | 'subheading' }> = ({ variant = 'body', className = '', ...props }) => {
  const variants = {
    body: 'text-muted-foreground leading-relaxed',
    dim: 'text-muted-foreground text-sm leading-relaxed opacity-80',
    heading: 'text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground',
    subheading: 'text-2xl font-bold text-foreground tracking-tight'
  };
  const Tag = variant === 'heading' ? 'h1' : variant === 'subheading' ? 'h2' : 'p';
  return React.createElement(Tag, { className: `${variants[variant]} ${className}`, ...props });
};
