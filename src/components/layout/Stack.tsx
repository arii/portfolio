import React from 'react';
import { Box, BoxProps } from './Box';

export type StackDirection = 'row' | 'col' | 'column';

export interface ResponsiveDirection {
  base?: StackDirection;
  sm?: StackDirection;
  md?: StackDirection;
  lg?: StackDirection;
}

export interface ResponsiveSpace {
  initial?: number | string;
  base?: number | string;
  sm?: number | string;
  md?: number | string;
  lg?: number | string;
}

export interface StackProps extends BoxProps {
  direction?: StackDirection | ResponsiveDirection;
  align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline';
  justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
  wrap?: boolean;
  gap?: number | string;
  space?: number | string | ResponsiveSpace;
}

const GAP_MAP: Record<number, string> = {
  1: 'gap-1',
  2: 'gap-2',
  3: 'gap-3',
  4: 'gap-4',
  5: 'gap-5',
  6: 'gap-6',
  8: 'gap-8',
  10: 'gap-10',
  12: 'gap-12',
};

export const Stack: React.FC<StackProps> = ({
  direction = 'col',
  align,
  justify,
  wrap = false,
  gap,
  space,
  className = '',
  style,
  ...props
}) => {
  const classNames = ['flex', className];

  if (typeof direction === 'string') {
    if (direction === 'row') classNames.push('flex-row');
    else classNames.push('flex-col');
  } else if (direction && typeof direction === 'object') {
    const baseDir = direction.base ?? 'col';
    classNames.push(baseDir === 'row' ? 'flex-row' : 'flex-col');

    if (direction.sm) {
      classNames.push(direction.sm === 'row' ? 'sm:flex-row' : 'sm:flex-col');
    }
    if (direction.md) {
      classNames.push(direction.md === 'row' ? 'md:flex-row' : 'md:flex-col');
    }
    if (direction.lg) {
      classNames.push(direction.lg === 'row' ? 'lg:flex-row' : 'lg:flex-col');
    }
  }

  if (align === 'start') classNames.push('items-start');
  if (align === 'center') classNames.push('items-center');
  if (align === 'end') classNames.push('items-end');
  if (align === 'stretch') classNames.push('items-stretch');
  if (align === 'baseline') classNames.push('items-baseline');

  if (justify === 'start') classNames.push('justify-start');
  if (justify === 'center') classNames.push('justify-center');
  if (justify === 'end') classNames.push('justify-end');
  if (justify === 'between') classNames.push('justify-between');
  if (justify === 'around') classNames.push('justify-around');
  if (justify === 'evenly') classNames.push('justify-evenly');

  if (wrap) classNames.push('flex-wrap');

  const styleProps: React.CSSProperties = { ...(style || {}) };

  if (typeof gap === 'number') {
    if (GAP_MAP[gap]) {
      classNames.push(GAP_MAP[gap]);
    } else {
      styleProps.gap = `${gap * 0.25}rem`;
    }
  } else if (typeof gap === 'string') {
    const parsedNum = Number(gap);
    if (!isNaN(parsedNum) && GAP_MAP[parsedNum]) {
      classNames.push(GAP_MAP[parsedNum]);
    } else {
      styleProps.gap = gap;
    }
  }

  if (space) {
    if (typeof space === 'number' || typeof space === 'string') {
      classNames.push(`space-y-${space}`);
    } else if (typeof space === 'object') {
      const initVal = space.initial ?? space.base;
      if (initVal !== undefined) classNames.push(`space-y-${initVal}`);
      if (space.sm !== undefined) classNames.push(`sm:space-y-${space.sm}`);
      if (space.md !== undefined) classNames.push(`md:space-y-${space.md}`);
      if (space.lg !== undefined) classNames.push(`lg:space-y-${space.lg}`);
    }
  }

  return (
    <Box
      className={classNames.filter(Boolean).join(' ')}
      style={Object.keys(styleProps).length > 0 ? styleProps : undefined}
      {...props}
    />
  );
};
