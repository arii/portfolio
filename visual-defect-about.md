# Visual Defect: Raw Tailwind Layout Classes in About.tsx

## Visual Defect Description
The `About` page (`src/pages/About.tsx`) uses raw Tailwind CSS layout and spacing utility classes directly in its JSX components. This violates the repository's strict design system constraints, which explicitly forbid the direct use of raw layout classes such as `flex`, `flex-col`, `gap-*`, `space-y-*`, `grid`, `w-full`, `h-full`, and spacing utilities like `p-*` and `m-*`.

## Current Visual Behavior
The page relies on standard Tailwind utilities for structure:
- `className="space-y-8 sm:space-y-12"` on the root `div`
- `className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12"` for the main content area
- `className="lg:col-span-8 space-y-8 sm:space-y-10 ..."` on structural sections
- `className="w-full h-full object-cover ..."` on image tags
- `className="flex flex-col gap-3"` for social links

While the layout appears visually correct, bypassing the custom layout primitives (`Box`, `Stack`, `Grid`) prevents centralized control over spacing tokens, breakpoints, and automatic sanitization mechanisms built into those primitives.

## Expected Visual Behavior
The visual appearance of the page must remain exactly the same, but the underlying markup must be refactored to use the project's custom layout primitives:
- Replace raw `<div className="flex ...">` with `<Stack direction="row" ...>` or `<Stack direction="col" ...>` as appropriate.
- Replace raw padding/margin/width/height utility classes (like `w-full`, `h-full`, `p-6`) with `<Box w="full" h="full" p={6}>`.
- For `grid` and `space-y-*` layouts, either introduce a custom `<Grid>` component (if not already existing in `src/components/layout/`) or carefully abstract the layout logic using `Stack` and `Box`.

## Affected Files & Selectors
- **File:** `src/pages/About.tsx`
- **Lines:**
  - Line 11: `<div className="space-y-8 sm:space-y-12">`
  - Line 22: `<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">`
  - Line 24: `<div className="space-y-6 bg-surface p-6 sm:p-8 rounded-3xl border border-line">`
  - Line 44: `<div className="border border-accent/20 bg-accent/5 rounded-3xl p-6 sm:p-8 space-y-3">`
  - Line 60: `<div className="aspect-[4/3] sm:aspect-square max-h-72 sm:max-h-none w-full overflow-hidden">`
  - Line 63: `<img className="w-full h-full ..."`
  - Line 75: `<div className="flex flex-col gap-3">`

## Responsive & Theme Impact
- **Responsive Impact:** Direct use of `sm:`, `md:`, `lg:` with raw padding and flex utilities will be safely encapsulated by custom primitive props (e.g., responsive props for `Box` and `Stack`, depending on their implementation, or safely passing `className` string properties that specifically exclude the banned raw classes via the `sanitizeClassName` logic in `Box`).
- **Theme Impact:** No direct theme/color impact, purely structural compliance.

## Accessibility Considerations
- Ensuring proper semantic HTML tags using the `as` prop on `<Box as="section">` or `<Box as="main">`.

## Acceptance Criteria
- All occurrences of raw layout/spacing classes (e.g., `flex`, `space-y-*`, `gap-*`, `w-*`, `h-*`, `p-*`, `m-*`) in `src/pages/About.tsx` are removed or migrated to layout primitive properties.
- Visual appearance matches the current design perfectly across mobile, tablet, and desktop viewports.
- The `Box` and `Stack` components are correctly imported from `src/components/layout/`.

## Validation Steps
1. Refactor `src/pages/About.tsx` to use `Box` and `Stack`.
2. Start the development server (`pnpm run dev`).
3. Navigate to `http://localhost:3000/#/about`.
4. Visually verify the spacing, alignment, and responsiveness match the original layout.
5. Inspect the DOM to verify no banned raw Tailwind layout classes leaked into the HTML elements (unless explicitly allowed or processed by the `sanitizeClassName` utility).
