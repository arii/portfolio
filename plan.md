# YouTube-to-GIF Conversion & Article Optimization Plan

A structured checklist and roadmap for replacing direct YouTube iframe embeds with optimized, clickable GIF previews that link to the full video using the `#no-embed` suffix.

## Phase 1: Discovery
- [x] Scan all markdown article files under `src/content/research/` to find all YouTube video links or embeds.
- [x] Compile a complete inventory of target pages, YouTube URLs, and video IDs.
- [x] Verify which files already use the `#no-embed` suffix and which need replacement.

## Phase 2: Script Creation
- [x] Create a robust utility script (e.g., `scripts/youtube-to-gif.py`) that:
  - Takes a YouTube URL and desired start/duration timestamps.
  - Uses `yt-dlp` to download the high-quality source video clip.
  - Employs `ffmpeg` to extract a 5–10 second clip and compile it into an optimized GIF.
  - Automatically saves the output GIF into the appropriate asset folder (e.g., `public/assets/research/`).

## Phase 3: Test Verification
- [x] Select one test video (e.g., from `conformant-planning-manipulation.md` or another target article).
- [x] Run the conversion script on the test video to generate the GIF.
- [x] Integrate the generated GIF into the article markdown file.
- [x] Preview the page to verify quality, frame rate, and asset sizes.

## Phase 4: Formatting & Layout Audit
- [x] Ensure all modified articles follow the exact clickable GIF link syntax:
  ```markdown
  [![Alt Text | Watch Full Video Demonstration on YouTube ↗ | https://www.youtube.com/watch?v=XXXXXX#no-embed](/path/to/image.gif)](https://www.youtube.com/watch?v=XXXXXX#no-embed)
  ```
- [x] Verify that all target YouTube links have the `#no-embed` suffix to prevent double embeds.
- [x] Audit pages like `undergraduate-projects.md` and `graduate-engineering-projects.md` to ensure no duplicate figures or broken layouts exist.

## Definition of Done (DoD)
- [x] **Discovery Complete:** Full inventory of all YouTube URLs in markdown content compiled.
- [x] **Script Functional:** The conversion script successfully runs and creates optimized GIFs from YouTube sources.
- [x] **Test Verified:** At least one page fully optimized, rendered, and verified working.
- [x] **Correct Formatting:** Clickable GIF wrapper syntax with `#no-embed` used correctly across all pages.
- [x] **No Double Figures:** Double rendering of video players and GIFs has been audited and resolved.
- [x] **Build & Lint Success:** Workspace compiles successfully and passes all checks.
