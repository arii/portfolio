import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function safeSearch(value: unknown, term: string): boolean {
  if (!term) return true;
  const normalizedTerm = term.toLowerCase();

  if (Array.isArray(value)) {
    return value.some(v => safeSearch(v, term));
  }

  const normalizedValue = String(value || '').toLowerCase();
  return normalizedValue.includes(normalizedTerm);
}

export function escapeRegExp(string: string): string {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

export function getHighlightedParts(text: string, query: string) {
  if (!query) return [text];
  const regex = new RegExp(`(${escapeRegExp(query)})`, 'gi');
  return text.split(regex);
}

export function formatCategory(cat: string): string {
  if (!cat || typeof cat !== 'string') return cat;
  if (cat === 'All') return 'All Posts';
  return cat.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

export function parseDate(dateStr: string): Date {
  if (!dateStr) return new Date();
  if (dateStr.includes('T')) {
    return new Date(dateStr);
  }
  const parts = dateStr.split('-');
  if (parts.length !== 3) return new Date(dateStr);

  const [year, month, day] = parts.map(Number);
  return new Date(year, month - 1, day);
}

export function addDays(date: Date, days: number): Date {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

export function pickRest<T extends object, K extends keyof T>(props: T, keys: K[]): Omit<T, K> {
  const rest = { ...props };
  keys.forEach(key => {
    delete rest[key];
  });
  return rest;
}
