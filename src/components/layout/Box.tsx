import React, { ElementType } from 'react';

export interface BoxProps extends React.HTMLAttributes<HTMLElement> {
  as?: ElementType;
  children?: React.ReactNode;
  px?: number | string;
  py?: number | string;
  pt?: number | string;
  pb?: number | string;
  p?: number | string;
  w?: string;
  h?: string;
  minH?: string;
  my?: number | string;
}

const classCache = new Map<string, string>();

const sanitizeClassName = (name: string): string => {
  if (!name) return '';
  let cached = classCache.get(name);
  if (cached === undefined) {
    cached = name.replace(/\b(px-[0-9.]+|py-[0-9.]+|p-[0-9.]+|my-[0-9.]+|w-full|min-h-\[[^\]]+\])\b/g, '').trim();
    classCache.set(name, cached);
  }
  return cached;
};

export const Box: React.FC<BoxProps> = ({
  as: Component = 'div',
  children,
  className = '',
  px, py, pt, pb, p, w, h, minH, my,
  style,
  ...props
}) => {
  const styleProps: Record<string, any> = {};

  if (px !== undefined) {
    styleProps.paddingLeft = typeof px === 'number' ? `${px * 0.25}rem` : px;
    styleProps.paddingRight = typeof px === 'number' ? `${px * 0.25}rem` : px;
  }
  if (py !== undefined) {
    styleProps.paddingTop = typeof py === 'number' ? `${py * 0.25}rem` : py;
    styleProps.paddingBottom = typeof py === 'number' ? `${py * 0.25}rem` : py;
  }
  if (pt !== undefined) styleProps.paddingTop = typeof pt === 'number' ? `${pt * 0.25}rem` : pt;
  if (pb !== undefined) styleProps.paddingBottom = typeof pb === 'number' ? `${pb * 0.25}rem` : pb;
  if (p !== undefined) styleProps.padding = typeof p === 'number' ? `${p * 0.25}rem` : p;

  if (my !== undefined) {
    styleProps.marginTop = typeof my === 'number' ? `${my * 0.25}rem` : my;
    styleProps.marginBottom = typeof my === 'number' ? `${my * 0.25}rem` : my;
  }

  if (w !== undefined) styleProps.width = w === 'full' ? '100%' : w;
  if (h !== undefined) styleProps.height = h === 'full' ? '100%' : h;
  if (minH !== undefined) styleProps.minHeight = minH;

  const combinedStyle = { ...styleProps, ...(style || {}) };

  // Strip banned classes if they somehow slipped in via className (cached to prevent performance overhead)
  const cleanClassName = sanitizeClassName(className);

  return (
    <Component className={cleanClassName} style={Object.keys(combinedStyle).length > 0 ? combinedStyle : undefined} {...props}>
      {children}
    </Component>
  );
};
