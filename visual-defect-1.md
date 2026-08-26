# Visual Defect: Hardcoded Raw Tailwind Colors in FlagshipCard.tsx

## Visual Defect Description
The `FlagshipCard` component is using hardcoded, raw Tailwind color classes to display the status indicator badges instead of using the repository's semantic design tokens. This is a design system inconsistency that bypasses the unified themes configured in `tailwind.config.ts`. The repository specifically bans the direct use of raw colors like `bg-emerald-500`, `bg-amber-500`, `bg-sky-500`, and `bg-slate-500` to ensure theming compliance (such as proper dark/light mode inversions) and accessibility.

## Current Visual Behavior
The `FlagshipCard` renders a status dot in the header using fixed Tailwind colors depending on the `tool.status` value:
- `"Live"` renders as `bg-emerald-500`
- `"Local only"` renders as `bg-amber-500`
- `"In development"` renders as `bg-sky-500`
- Fallback/Other renders as `bg-slate-500`

These raw colors are not mapped through the global theme, causing visual deviations and potential contrast mismatch if a theme switch occurs. The CI script `scripts/audit-tailwind.py` explicitly flags these as violations.

## Expected Visual Behavior
The component should derive its status badge colors from the standard semantic design tokens configured in `tailwind.config.ts`.
To maintain the visual intent while complying with design standards, update the mapping to use existing palette tokens or define appropriate status tokens:
- **Live:** Use a valid success/active token (or update `tailwind.config.ts` to include a `status-success` semantic token). E.g., `bg-accent` or an equivalent semantic color. Given the current `tailwind.config.ts` configuration, `bg-accent` (`#f59e0b` amber) or a new token mapped for success/live. However, to preserve the exact design intent, we should map `"Live"` to a semantic success color, `"Local only"` to `bg-accent` (which maps to amber-500), `"In development"` to `bg-accent-sky`, and the fallback to `bg-text-dim` or `bg-border`. Wait, specifically:
  - `"Live"` -> `bg-emerald-500` should be replaced. Since emerald-500 is not in the semantic config, we can map to a new token `bg-success` in `tailwind.config.ts` OR fallback to a semantic color. If we strictly stick to existing tokens: `"Live"` -> `bg-accent-sky`, `"Local only"` -> `bg-accent`, `"In development"` -> `bg-slate-blue`, fallback -> `bg-text-dim`. But ideally, semantic tokens like `bg-emerald-500` should be abstracted to `bg-success`.
  *Correction for implementation:*
  Update `tailwind.config.ts` `colors` object to include explicit status tokens:
  - `'status-live': '#10b981'` (emerald-500)
  - `'status-local': '#f59e0b'` (amber-500)
  - `'status-dev': '#0ea5e9'` (sky-500)
  - `'status-offline': '#64748b'` (slate-500)
  Then update the classes in `FlagshipCard.tsx` to use `bg-status-live`, `bg-status-local`, `bg-status-dev`, and `bg-status-offline` respectively.

## Affected Files & Selectors
- **File:** `src/components/FlagshipCard.tsx`
- **Lines:** ~96-98
- **Code:**
```tsx
                <span className={`w-2 h-2 rounded-full ${
                  tool.status === 'Live' ? 'bg-emerald-500' :
                  tool.status === 'Local only' ? 'bg-amber-500' :
                  tool.status === 'In development' ? 'bg-sky-500' : 'bg-slate-500'
                }`}></span>
```
- **Configuration File:** `tailwind.config.ts` (needs new semantic `status-*` tokens in the `extend.colors` block).

## Responsive & Theme Impact
- **Responsive Impact:** None. The badge is a fixed `w-2 h-2` circle across all viewports (`sm`, `md`, `lg`).
- **Theme Impact:** Consolidating colors into semantic tokens ensures that if a new light/dark theme specification is created, these status colors can be swapped centrally via `tailwind.config.ts` instead of chasing hardcoded utility classes.

## Accessibility Considerations
- The dots are currently purely visual. The adjacent span `<span className="text-[10px] font-bold uppercase tracking-wider text-text-main pr-0.5">{tool.status}</span>` provides the text label for screen readers. Contrast values for the badge dots against `bg-surface` are sufficient for non-text UI elements, but standardizing on semantic tokens guarantees future contrast compliance.
- No tap target impact since they are non-interactive badges.

## Acceptance Criteria
- `python3 scripts/audit-tailwind.py` returns `0` (success) with "Tailwind audit passed".
- `FlagshipCard.tsx` uses only standard semantic tokens (e.g., `bg-status-live`).
- `tailwind.config.ts` contains the mapped status semantic tokens.
- The visual presentation of the status indicator dots exactly matches their current appearance.

## Validation Steps
1. Apply the token abstraction in `tailwind.config.ts`.
2. Update the classes in `src/components/FlagshipCard.tsx`.
3. Run `python3 scripts/audit-tailwind.py` and verify it passes.
4. Run `pnpm run build` to ensure tailwind configuration compiles successfully.
5. Visually inspect a Flagship Card (e.g., in `pnpm dev` at `http://localhost:3000/#/devai`) to ensure the status badge circle renders with the correct background color.
