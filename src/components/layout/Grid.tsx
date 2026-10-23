import React, { ElementType } from 'react';
import { Box, BoxProps } from './Box';

export interface ResponsiveColumns {
  base?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
}

export interface GridProps extends BoxProps {
  as?: ElementType;
  cols?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  columns?: ResponsiveColumns;
  gap?: number | string;
}

const COLS_MAP: Record<number, string> = {
  1: 'grid-cols-1',
  2: 'grid-cols-2',
  3: 'grid-cols-3',
  4: 'grid-cols-4',
  5: 'grid-cols-5',
  6: 'grid-cols-6',
  12: 'grid-cols-12',
};

const SM_COLS_MAP: Record<number, string> = {
  1: 'sm:grid-cols-1',
  2: 'sm:grid-cols-2',
  3: 'sm:grid-cols-3',
  4: 'sm:grid-cols-4',
  5: 'sm:grid-cols-5',
  6: 'sm:grid-cols-6',
  12: 'sm:grid-cols-12',
};

const MD_COLS_MAP: Record<number, string> = {
  1: 'md:grid-cols-1',
  2: 'md:grid-cols-2',
  3: 'md:grid-cols-3',
  4: 'md:grid-cols-4',
  5: 'md:grid-cols-5',
  6: 'md:grid-cols-6',
  12: 'md:grid-cols-12',
};

const LG_COLS_MAP: Record<number, string> = {
  1: 'lg:grid-cols-1',
  2: 'lg:grid-cols-2',
  3: 'lg:grid-cols-3',
  4: 'lg:grid-cols-4',
  5: 'lg:grid-cols-5',
  6: 'lg:grid-cols-6',
  12: 'lg:grid-cols-12',
};

const XL_COLS_MAP: Record<number, string> = {
  1: 'xl:grid-cols-1',
  2: 'xl:grid-cols-2',
  3: 'xl:grid-cols-3',
  4: 'xl:grid-cols-4',
  5: 'xl:grid-cols-5',
  6: 'xl:grid-cols-6',
  12: 'xl:grid-cols-12',
};

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

export const Grid: React.FC<GridProps> = ({
  cols,
  sm,
  md,
  lg,
  xl,
  columns,
  gap,
  className = '',
  style,
  ...props
}) => {
  const baseCols = columns?.base ?? cols;
  const smCols = columns?.sm ?? sm;
  const mdCols = columns?.md ?? md;
  const lgCols = columns?.lg ?? lg;
  const xlCols = columns?.xl ?? xl;

  const classNames = ['grid', className];

  if (baseCols && COLS_MAP[baseCols]) classNames.push(COLS_MAP[baseCols]);
  if (smCols && SM_COLS_MAP[smCols]) classNames.push(SM_COLS_MAP[smCols]);
  if (mdCols && MD_COLS_MAP[mdCols]) classNames.push(MD_COLS_MAP[mdCols]);
  if (lgCols && LG_COLS_MAP[lgCols]) classNames.push(LG_COLS_MAP[lgCols]);
  if (xlCols && XL_COLS_MAP[xlCols]) classNames.push(XL_COLS_MAP[xlCols]);

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

  return (
    <Box
      className={classNames.filter(Boolean).join(' ')}
      style={Object.keys(styleProps).length > 0 ? styleProps : undefined}
      {...props}
    />
  );
};
