Automated systematic review of PR #150.

# Per-File Findings

| File | Lines Added | Issues | Verdict |
|---|---|---|---|
| `src/components/ui/SafeImage.tsx` | 1 | 0 | ✅ ok |
| `src/features/research/ResearchCard.tsx` | 1 | 0 | ✅ ok |
| `src/pages/Home.tsx` | 1 | 0 | ✅ ok |
| `src/pages/__tests__/Home.test.tsx` | 1 | 0 | ✅ ok |

* Successfully resolves Knip unused export warnings.
* Converts previously named exports to default exports where they were only used as such or not at all.
* Deletes `ContentCard`, `ui/card`, `theses.ts`, `Button`, and `Primitives` files which were identified as unused dead code.

Recommendation: Approved. No action required.
