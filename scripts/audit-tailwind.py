#!/usr/bin/env python3
"""
audit-tailwind.py
Audits src/ files for raw Tailwind palette utility classes (slate, gray, zinc, neutral, stone, red, orange, amber, yellow, lime, green, emerald, teal, cyan, sky, blue, indigo, violet, purple, fuchsia, pink, rose)
to ensure design token compliance.
"""

import sys
import re
from pathlib import Path

COLOR_PALETTES = (
    "slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|"
    "emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose"
)

# Match patterns like bg-slate-900, text-amber-500/20, border-cyan-800
RAW_TAILWIND_PATTERN = re.compile(
    rf"\b(bg|text|border|ring|stroke|fill)-({COLOR_PALETTES})-[0-9]{{2,3}}(?:/[0-9]+)?\b"
)

SRC_DIR = Path("src")

def audit_files():
    violations = []

    for filepath in SRC_DIR.glob("**/*.{ts,tsx,js,jsx,css}"):
        content = filepath.read_text(encoding="utf-8")
        lines = content.splitlines()
        for idx, line in enumerate(lines, start=1):
            matches = RAW_TAILWIND_PATTERN.findall(line)
            if matches:
                matched_classes = [f"{m[0]}-{m[1]}" for m in RAW_TAILWIND_PATTERN.finditer(line)]
                raw_matches = [m.group(0) for m in RAW_TAILWIND_PATTERN.finditer(line)]
                violations.append((filepath, idx, line.strip(), raw_matches))

    if violations:
        print(f"❌ Found {len(violations)} raw Tailwind color palette usage(s) in src/:\n")
        for filepath, line_num, line_str, matches in violations:
            print(f"  {filepath}:{line_num}")
            print(f"    Matches: {', '.join(matches)}")
            print(f"    Code: {line_str}\n")
        print("Please use semantic design tokens configured in tailwind.config.ts and index.css (e.g. bg-bg, bg-surface, border-line, text-text-main, text-accent).")
        return 1
    else:
        print("✅ Tailwind audit passed: No raw color palette utilities found in src/.")
        return 0

if __name__ == "__main__":
    sys.exit(audit_files())
