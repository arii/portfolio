---
type: study
title: "Technical Deep-Dive: Building the Deployment Impact Analyzer"
date: "2026-06-19"
author: "Ariel Anders, PhD"
category: "DevAI"
tags: ["Playwright", "Dependency Graph", "CI/CD", "Automation", "Visual Review"]
excerpt: "How we built a semantic visual impact analysis pipeline using dependency-cruiser, Playwright screenshot diffing, and automated severity scoring."
readTime: 12
status: "published"
---

A common challenge in modern web development is understanding the "blast radius" of a change. When you modify a shared utility or a global CSS variable, how do you know which pages across your entire application are affected?

Manual regression testing is slow and error-prone. Full end-to-end suites are expensive to run on every commit. Our solution is the **Deployment Impact Analyzer**: a CI/CD pipeline that semantically determines the scope of a change and performs targeted visual validation.

## The Architecture

The Deployment Impact Analyzer operates in four distinct phases:

1.  **Import Graph Parsing**: Identifying which files are affected by the PR.
2.  **Route Mapping**: Translating affected files into user-facing routes.
3.  **Visual Diffing**: Capturing and comparing screenshots using Playwright and pixelmatch.
4.  **Severity Scoring**: Calculating the impact and reporting findings to the PR.

```mermaid
%%{init: {'theme': 'dark', 'themeVariables': { 'darkMode': true, 'primaryColor': '#1e293b', 'primaryTextColor': '#f1f5f9', 'primaryBorderColor': '#334155', 'lineColor': '#22d3ee' }, 'flowchart': { 'nodeSpacing': 50, 'rankSpacing': 50 }}}%%
flowchart TD
  PR[Pull Request] --> Diff[Identify Changed Files]
  Diff --> Graph[dependency-cruiser Graph Analysis]
  Graph --> Routes[Map to Affected Routes]
  Routes --> Playwright[Playwright Capture & Diff]
  Playwright --> Scoring[Severity Scoring Engine]
  Scoring --> Report[GitHub PR Comment]
```

---

## 1. Import Graph Parsing with dependency-cruiser

We don't want to test every page if only the "About" section changed. To achieve targeted testing, we use `dependency-cruiser` to analyze the project's import graph.

When a file is modified, we trace its dependents up the tree until we reach an entry point (a route or a page component).

```bash
# Example logic for finding dependents
npx depcruise --exclude "^node_modules" --output-type json src | \
  jq '.modules[] | select(.dependencies[].resolved == "src/components/Button.tsx") | .source'
```

By identifying the "semantic blast radius," we reduce the number of screenshots we need to capture by up to 90% in large-scale applications.

---

## 2. Automated Playwright Screenshot Diffing

Once we have a list of affected routes, we trigger a Playwright-based capture service.

The pipeline performs a "sandwich" comparison:
1.  **Baseline**: Capture screenshots of the affected routes on the `main` branch.
2.  **Current**: Capture screenshots of the same routes on the feature branch.
3.  **Diff**: Use `pixelmatch` to generate a pixel-level delta.

To improve the signal-to-noise ratio, we automatically crop the diff to the bounding box of the changed area. This helps reviewers focus on the specific UI shift rather than scanning a full-page screenshot.

---

## 3. Severity Scoring & Reporting

Not all pixel diffs are created equal. A 1px shift in a footer is different from a broken hero section.

Our scoring engine calculates a **Severity Score** based on:
- **Pixel Count**: The absolute number of changed pixels.
- **Percentage**: The ratio of changed pixels to the total area.
- **Layout Shift**: Detection of significant element movement.

If the score exceeds a configurable threshold, the pipeline marks the check as failed and requests a manual visual review.

---

## 4. GitHub Actions Integration

The entire system is orchestrated via GitHub Actions. We've optimized the workflow to use caching for the `dependency-cruiser` graph and parallelize Playwright workers to keep execution times under 5 minutes.

```yaml
name: Deployment Impact Analysis
on: [pull_request]

jobs:
  impact:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: pnpm install
      - name: Run Impact Analysis
        run: pnpm run impact:analysis
      - name: Visual Diffing
        run: pnpm run impact:visual-diff
      - name: Post Report
        run: python scripts/send-jules-impact.py
```

### Example Report Output

When a PR is opened, the analyzer posts a summary directly to the GitHub conversation. This allows developers to see the impact at a glance without leaving their workflow.

| Route | Visual Diff | Severity | Action |
| :--- | :--- | :--- | :--- |
| `/blog/:slug` | 12.4% | 🔴 HIGH | Manual Review Required |
| `/about` | 0.0% | 🟢 LOW | Auto-passed |
| `/merch` | 1.2% | 🟡 MEDIUM | Review Suggested |

> **Implemented:** We use the `cropped` diff artifacts to show exactly where the pixels changed, saving reviewers from playing "spot the difference" on full-page screenshots.

<Box paddingBottom={8}>
<Grid cols={{ base: 1, md: 3 }} gap={6}>
  <Stack gap={3}>
    <Text variant="mono" size="micro" weight="font-bold" uppercase color="dim" align="center">Before</Text>
    ![Baseline](/assets/studies/deployment-impact-analyzer/before.png)
  </Stack>
  <Stack gap={3}>
    <Text variant="mono" size="micro" weight="font-bold" uppercase color="dim" align="center">After</Text>
    ![Current](/assets/studies/deployment-impact-analyzer/after.png)
  </Stack>
  <Stack gap={3}>
    <Text variant="mono" size="micro" weight="font-bold" uppercase color="dim" align="center">Diff</Text>
    ![Visual Delta](/assets/studies/deployment-impact-analyzer/diff.png)
  </Stack>
</Grid>
</Box>
*A "sandwich" comparison showing the baseline, the new state, and the highlighted pixel delta.*

### Real-World Finding: From 404 to Overflow Resolution

Visual regression testing is particularly effective for catching "cumulative" bugs—issues that only appear once multiple components are integrated. During the development of this tool, we encountered a three-stage regression that perfectly illustrated the system's value.

#### 1. The Initial State (Missing Route)
Initially, a routing configuration error caused the analyzer to hit a "Content Not Found" page. While the code for the tool existed, the dynamic route hadn't been registered in the main portfolio index.

#### 2. The Regression (Text Overflow)
After fixing the routing, the page rendered, but a new issue emerged on mobile viewports. Long file paths in the `ArchitecturalAssetsList` component were overflowing their containers, breaking the layout and pushing the "Category" labels off-screen. This is a classic "invisible" regression that passes unit tests and type-checks but fails the "eyeball test."

#### 3. The Resolution (Truncation & Wrapping)
We implemented a fix using Tailwind's `truncate` and `flex-wrap` utilities, ensuring that assets are readable even on the narrowest devices.

<Box paddingBottom={8}>
<Grid cols={{ base: 1, md: 3 }} gap={6}>
  <Stack gap={3}>
    <Text variant="mono" size="micro" weight="font-bold" uppercase color="dim" align="center">1. Missing</Text>
    ![404 Error](/assets/studies/deployment-impact-analyzer/before-mobile.png)
  </Stack>
  <Stack gap={3}>
    <Text variant="mono" size="micro" weight="font-bold" uppercase color="dim" align="center">2. Diff</Text>
    ![Regression Delta](/assets/studies/deployment-impact-analyzer/diff-mobile.png)
  </Stack>
  <Stack gap={3}>
    <Text variant="mono" size="micro" weight="font-bold" uppercase color="dim" align="center">3. Fixed</Text>
    ![Resolution](/assets/studies/deployment-impact-analyzer/after-mobile.png)
  </Stack>
</Grid>
</Box>
*The mobile resolution sequence: from a 404 state to an overflow regression, and finally the resolved responsive layout.*

## Lessons Learned

Building this tool taught us that **context is king**. An LLM can review code, but it struggles to "see" layout shifts. By combining deterministic graph analysis with visual regression, we create a "tripwire" that catches regressions before they reach production.

The next evolution of this tool involves agentic auto-resolution: using LLMs to analyze the visual diff and decide if a change is an intentional improvement or an accidental regression.

---

*This analyzer is part of the BoomTick.blog DevAI suite. Check out the [Engineering Portfolio](/research) for more tools.*
