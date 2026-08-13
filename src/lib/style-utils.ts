import { SPACING_MAP } from "@/layouts/layout-maps"

export type ResponsiveProp<T> = T | { base?: T, sm?: T, md?: T, lg?: T, xl?: T, '2xl'?: T }

export function resolveJIT(val: string | number | boolean | undefined | null, prefix: string): string {
  if (val === undefined || val === null || val === "") return ""

  const strVal = String(val)
  const isNegative = strVal.startsWith("-") && strVal !== "-"
  const absVal = isNegative ? strVal.substring(1) : strVal
  const negPrefix = isNegative ? "-" : ""

  const isToken = /^\d+(\.\d+)?$/.test(absVal) ||
                  (/^[a-z0-9-/]+$/.test(absVal) && !/[0-9](px|vh|vw|%|rem|em)$/.test(absVal));

  if (isToken) return `${negPrefix}${prefix}-${absVal}`

  const bracketVal = absVal.startsWith("[") && absVal.endsWith("]") ? absVal : `[${absVal}]`
  return `${negPrefix}${prefix}-${bracketVal}`
}

export function resolveSpacing(prefix: string) {
  return (v: string | number | boolean | undefined | null) => {
    if (v === undefined || v === null || v === "") return ""

    const strV = String(v)
    const isNegative = strV.startsWith("-") && strV !== "-"
    const absV = isNegative ? strV.substring(1) : strV

    const mapped = SPACING_MAP[absV as keyof typeof SPACING_MAP];
    if (mapped) return `${isNegative ? "-" : ""}${prefix}-${mapped}`;

    if (/^[a-z-]+$/.test(absV) && !/[0-9](px|vh|vw|%|rem|em)$/.test(absV)) {
       return `${isNegative ? "-" : ""}${prefix}-${absV}`;
    }

    return resolveJIT(v, prefix);
  }
}

export function applyResponsive<T>(
  prop: ResponsiveProp<T> | undefined,
  mapFn: (val: T) => string
): string {
  if (!prop) return ""
  if (typeof prop !== "object" || (prop as Record<string, unknown>).$$typeof) {
    return mapFn(prop as T)
  }

  return Object.entries(prop)
    .map(([bp, val]) => {
      const className = mapFn(val as T)
      return className ? (bp === "base" ? className : `${bp}:${className}`) : ""
    })
    .filter(Boolean)
    .join(" ")
}
