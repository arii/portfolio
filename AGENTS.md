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

## AI Reviewer Content Constraints

When evaluating pull requests and content changes in `arii/portfolio`, automated AI reviewers and agents must adopt a strict, skeptical content auditing posture. Do not rubber-stamp pull requests. Apply the following mandatory criteria:

1. **Skeptical Verification & Hallucination Prevention**:
   - Act as a skeptical content editor. Assume new claims, metrics, case studies, or tools require proof.
   - Flag any unverified technical claims, fabricated performance numbers, or hallucinated project details as blocking review errors.
   - Require explicit backing citations, external links, paper PDFs (`public/reports/`), or corresponding metadata entries in `src/data/research/` for all newly introduced research projects or tools.

2. **Redundancy & Duplication Auditing**:
   - Aggressively flag duplicate or redundant content across markdown files (`src/content/research/`) and data configurations (`src/data/research/`).
   - Ensure new articles do not duplicate existing tool definitions, flagship summaries, or case studies.

3. **Strict Page & Route Governance**:
   - Treat unrequested, spurious, or scope-expanding new page additions (`src/pages/` or `src/content/`) as blocking errors.
   - Block any PR that adds new markdown articles or portfolio entries without explicit backing in feature requirements or data structures.

4. **Editorial & Voice Standards**:
   - Enforce active, first-person singular voice ("I", "my", "me") representing Ariel Anders across all research and project copy. Flag any use of third-person or passive constructions.
   - Reject corporate buzzwords ("streamline", "leverage", "consolidated suite") and robotic structural templates ("Executive Summary" tables, "Quick-Nav" matrices).
