# Development & Media Asset Guidelines

## Web Media Asset Optimization

To ensure optimal performance and low page load latency across all case studies and research tools:

1. **Image Assets & WebP Optimization**:
   - Original PNG and JPG/JPEG files should be placed under `public/assets/`, `public/images/`, or `src/assets/`.
   - Run `pnpm run build:media` (or `pnpm run build`) to automatically generate optimized `.webp` variants for all image assets via `scripts/optimize-media.js`.
   - Use `SafeImage` (`src/components/ui/SafeImage.tsx`) for rendering images. `SafeImage` automatically wraps images in `<picture>` elements with WebP sources while maintaining fallback support, base URL normalization, loading pulse skeletons, and error handling.

2. **Video Representations (`OptimizedVideo`)**:
   - For UI animations or short demonstration clips, prefer WebM or MP4 videos over heavy animated GIFs.
   - Use `OptimizedVideo` (`src/components/ui/OptimizedVideo.tsx`), which renders a `<video autoPlay loop muted playsInline>` tag with appropriate accessibility attributes (`aria-label`, `title`), loading pulse skeletons, and fallback states.
# Project-Specific Agent Instructions

This file contains rules and instructions for AI agents working on this portfolio codebase.

## YouTube Video Embedding Guidelines

When referencing YouTube videos in markdown files (under `src/content/`):

1. **GIF and Video Thumbnail Deduplication**:
   - If a project showcases a GIF animation and also links to the full YouTube video, do not display both the GIF and an embedded YouTube video player (iframe) on the same page.
   - To show only the GIF and prevent the YouTube link from automatically embedding as an iframe player, append `#no-embed` to the YouTube URL (e.g., `https://www.youtube.com/watch?v=XXXXXX#no-embed`).
   - The custom markdown link renderer in `ResearchDetailPage.tsx` will parse `#no-embed`, strip the hash suffix from the actual link target so that user clicks work correctly, and skip generating the video iframe embed.

2. **Making GIFs Clickable**:
   - Wrap the GIF image syntax in a markdown link pointing to the YouTube video with the `#no-embed` suffix:
     ```markdown
     [![Alt Text](/path/to/image.gif)](https://www.youtube.com/watch?v=XXXXXX#no-embed)
     ```

## Deployment Impact Analysis & Code Reviews

This portfolio workspace contains self-contained scripts to perform local deployment impact analyses, visual diff reviews, and AI code reviews using the Gemini API.

To run these tools locally:

1. **Deployment Impact Analysis**:
   - Run `pnpm run impact:analysis` to generate a dependency blast-radius analysis report under `artifacts/impact-analysis/`. This identifies which user-facing routes are affected by the changes.

2. **Baseline Main Branch Preparation**:
   - Run `pnpm run impact:build-main` to checkout a baseline worktree of the latest main branch under `.tmp-main/` and build it.

3. **Visual Diff Comparison**:
   - Run `pnpm run impact:visual-diff` to spin up local previews of both the baseline and current head, capture screenshots of the impacted routes, perform visual pixel diffs, and save them to `artifacts/visual-review/`.

4. **DOM Diff Generation**:
   - Run `pnpm run impact:dom-diff` to compare the normalized DOM trees of baseline vs head, output detailed analysis results to `artifacts/dom-review/`, and generate a main markdown review summary at `artifacts/deployment-review.md`.

5. **AI Reviews**:
   - Run `pnpm run impact:gemini-review` to trigger visual UX audits of layout shifts or issues using the Gemini API.
   - Run `pnpm run impact:gemini-code-review` to trigger regular code reviews.

## AI Reviewer Content Constraints

When conducting automated code and content reviews (e.g., via `td-cli ai review` or Impact Analysis context building):

1. **Strict Editorial Skepticism**:
   - Act as a strict, skeptical content auditor when reviewing pull requests containing markdown articles, portfolio project copy, or research descriptions.
   - Do not rubber-stamp content changes or offer superficial praise. Challenge unverified assertions, unsubstantiated metrics, or fictional project tools.

2. **Source Verification & Citations**:
   - Require all newly introduced research tools, case studies, or technical claims to have backing citations, valid source links, or corresponding metadata entries (e.g., in `src/data/research.ts` or `src/data/research/*.ts`).
   - Flag any claims lacking verifiable references or missing corresponding data structure integration as blocking errors.

3. **Content Deduplication**:
   - Aggressively flag redundant or duplicate content across markdown files and data files.
   - Ensure new articles do not repeat existing case studies or create duplicate entries for previously documented tools.

4. **Block Unrequested Pages & Routes**:
   - Treat unrequested additions of new top-level pages, routes, or standalone markdown articles as a blocking error (`error` severity) unless explicitly specified in the issue or task prompt.

5. **Editorial Standards & Voice**:
   - Enforce first-person singular voice ('I', 'my', 'me') representing Ariel Anders across all portfolio prose. Reject third-person phrasing, passive voice, or corporate buzzwords ('streamline', 'leverage', 'consolidated suite').
   - Ensure headers and tags follow sentence case and maintain natural developer narrative flow.
