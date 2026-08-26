import React from 'react';
import { Box, BoxProps } from './Box';

export interface StackProps extends BoxProps {
  direction?: 'row' | 'col';
  align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline';
  justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
  wrap?: boolean;
}

export const Stack: React.FC<StackProps> = ({
  direction = 'col',
  align,
  justify,
  wrap = false,
  className = '',
  ...props
}) => {
  const classNames = ['flex', className];

  if (direction === 'row') classNames.push('flex-row');
  else classNames.push('flex-col');

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

  return (
    <Box className={classNames.filter(Boolean).join(' ')} {...props} />
  );
};
