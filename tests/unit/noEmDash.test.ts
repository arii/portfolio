import { describe, it, expect } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';

const ROOTS = ['src/data', 'src/pages', 'src/components', 'src/layouts'];

function sourceFiles(dir: string): string[] {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) return sourceFiles(full);
    return /\.(ts|tsx)$/.test(entry.name) && !/\.test\./.test(entry.name) ? [full] : [];
  });
}

describe('UI copy', () => {
  it('contains no em-dashes', () => {
    const offenders = ROOTS.flatMap((root) => sourceFiles(path.resolve(process.cwd(), root)))
      .flatMap((file) =>
        fs.readFileSync(file, 'utf-8').split('\n')
          .map((line, i) => (line.includes('\u2014') ? `${path.relative(process.cwd(), file)}:${i + 1}` : null))
          .filter((hit): hit is string => hit !== null)
      );
    expect(offenders).toEqual([]);
  });
});
