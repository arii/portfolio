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
