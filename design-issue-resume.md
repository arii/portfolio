# Visual Defect & Design Improvement: Resume

## Visual Defect Description
The current design aesthetics for `Resume.tsx` rely on formulaic AI-generator boilerplate patterns that dilute the high-end engineering portfolio aesthetic.
Specifically:
- **Button Hierarchy & Shape:** The interface uses dual identical pills with bright amber colors competing for dominance, large radii, and heavy focus states.
- **Eyebrow Tags & Metadata:** It relies on "Status Dashboard" gimmicks (simulated monospace labels like "CI PIPELINE: ACTIVE").
- **Background & Card Architecture:** It features nested floating cards with glowing borders on dark backgrounds rather than clean editorial architecture.
- **Typography & Accents:** It lacks distinct typographic character, overusing accent colors for massive background fills instead of highlights.

## Expected Visual Behavior
The UI must be refactored to align with the new structural and visual design choices:
- **Buttons:** Ditch dual identical pills. Establish a crisp primary button (subtle radius, e.g., rounded-md/6-8px, solid slate/off-white background, sharp typography). The secondary action must be a clean text link with an arrow (hover:underline) or a low-contrast outlined button (border border-slate-700 bg-transparent text-slate-300).
- **Metadata:** Drop simulated monospace status labels. Replace them with clean, subtle sans-serif or refined serif editorial categories (e.g., "Selected Work", "Research", "Case Studies") without uppercase letter-spacing extremes.
- **Card Architecture:** Kill nested floating dark cards with glowing borders. Implement clean section breaks, generous whitespace, subtle horizontal rules (border-slate-800), and asymmetric grid layouts (e.g., 60/40 splits). Introduce a quiet minimal neutral palette (slate/stone).
- **Typography:** Add typographic character by pairing a crisp technical sans (like Inter or Geist) with a distinct display serif or editorial grotesk for major headings.
- **Accents:** Reserve amber/accent colors strictly for focus states, small badge indicators, or hover links.

## Affected Files & Selectors
- **File:** `src/pages/Resume.tsx`
- **Components/Selectors:** Buttons, Section headers/eyebrows, Card container wrappers, Typography classes on major headers.

## Responsive & Theme Impact
- **Responsive Impact:** Asymmetric grid updates (60/40) should stack correctly on mobile viewports.
- **Theme Impact:** The quiet minimal neutral palette (slate/stone) should be centrally updated via `tailwind.config.ts` if not already present.

## Acceptance Criteria
- Button hierarchy clearly distinguishes primary (crisp, rounded-md) from secondary (ghost/outlined).
- Monospace gimmicky eyebrow tags are replaced with refined editorial text.
- Glowing floating cards are replaced with flat asymmetric grids and subtle borders.
- Typography pairs technical sans with a display serif/grotesk.
- Accent colors are minimized to highlights only.

## Validation Steps
1. Apply the new CSS rules and component structural changes in `src/pages/Resume.tsx`.
2. Run the local dev server (`pnpm dev`).
3. Visually verify the hierarchy and aesthetic upgrades match the expected editorial engineering portfolio tone.
4. Verify responsiveness on standard viewports.
