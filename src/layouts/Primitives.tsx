import React from 'react';

export const Box: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props) => <div {...props} />;

export const Stack: React.FC<React.HTMLAttributes<HTMLDivElement> & { gap?: string, direction?: 'row' | 'col', align?: string, justify?: string }> = ({ gap = '4', direction = 'col', align, justify, className = '', ...props }) => {
  const alignClass = align ? `items-${align}` : '';
  const justifyClass = justify ? `justify-${justify}` : '';
  const gapClass = direction === 'col' ? `space-y-${gap}` : `space-x-${gap}`;
  return <div className={`flex flex-${direction} ${gapClass} ${alignClass} ${justifyClass} ${className}`} {...props} />;
};

export const Grid: React.FC<React.HTMLAttributes<HTMLDivElement> & { cols?: string, gap?: string }> = ({ cols = '1', gap = '8', className = '', ...props }) => {
  return <div className={`grid grid-cols-${cols} gap-${gap} ${className}`} {...props} />;
};

export const Text: React.FC<React.HTMLAttributes<HTMLParagraphElement> & { variant?: 'body' | 'dim' | 'heading' | 'subheading' }> = ({ variant = 'body', className = '', ...props }) => {
  const variants = {
    body: 'text-text-body leading-relaxed',
    dim: 'text-text-dim text-sm leading-relaxed',
    heading: 'text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-text-main',
    subheading: 'text-2xl font-bold text-text-main tracking-tight'
  };
  const Tag = variant === 'heading' ? 'h1' : variant === 'subheading' ? 'h2' : 'p';
  return React.createElement(Tag, { className: `${variants[variant]} ${className}`, ...props });
};
