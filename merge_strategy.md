# Merge Strategy

After manually reviewing the open pull requests and analyzing their file modifications, the PRs logically group into two distinct clusters that share related files and potential merge conflicts.

## Cluster 1: Performance and Bundle Optimization
**Included PRs:**
- **#310**: perf(caching): configure efficient cache lifetimes and asset hashing for static assets
- **#311**: perf(bundle): reduce unused JavaScript and optimize bundle chunking
- **#312**: perf(mobile): eliminate render-blocking resources and optimize FCP/LCP on mobile

**Primary Overlaps:**
- `src/main.tsx`
- `vite.config.ts`
- `src/pages/ResearchDetailPage.tsx`

**Merge Approach for Cluster 1:**
These performance-focused PRs have overlapping modifications to the Vite configuration (chunking and asset hashing) and the main application entry point (code splitting and service worker registration).
1. Pull all three PRs into a single integration branch (e.g., `feat/performance-consolidation`).
2. Resolve conflicts in `vite.config.ts` by combining chunking logic (from #311) and asset hashing (from #310).
3. Resolve conflicts in `src/main.tsx` by combining lazy-loaded route imports (from #311 and #312) with the service worker registration (from #310).
4. Merge the integrated branch into `main`.

---

## Cluster 2: SEO and Structured Data
**Included PRs:**
- **#307**: feat(seo): implement internal linking strategy and BreadcrumbList structured data
- **#308**: Format and standardize llms.txt for Agentic Web compliance
- **#309**: SEO: Enhance Rich Results and Structured Data Schemas

**Primary Overlaps:**
- `src/utils/schema.ts`
- `tests/unit/seo.test.tsx`

**Merge Approach for Cluster 2:**
These SEO-focused PRs implement structured data schema enhancements and internal linking. They significantly overlap in testing and utility functions.
1. Pull all three PRs into a single integration branch (e.g., `feat/seo-consolidation`).
2. Resolve conflicts in `src/utils/schema.ts` by aggregating all new schema generator functions (`BreadcrumbList`, `FAQPage`, `VideoObject`, `ImageObject` updates).
3. Resolve conflicts in `tests/unit/seo.test.tsx` by merging the distinct test suites for `robots.txt`/`llms.txt` compliance (from #308), `BreadcrumbList` validation (from #307), and new schema assertions (from #309).
4. Merge the integrated branch into `main`.

## Final Steps
After both consolidation branches are merged to `main`, run the full test suite and verifications locally (`pnpm run verify`) to ensure all tests, linters, and build processes pass cleanly without regressions.
