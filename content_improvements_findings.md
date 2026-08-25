# Content Improvement Findings

Based on a review of the consolidated site text, here are suggested improvements for typos, phrasing, redundancies, and tone (specifically ensuring a consistent first-person voice and avoiding corporate buzzwords):

## 1. Voice and Tone Consistency (First-Person Rule)
**Issue:** Some project descriptions or tool entries might slip into a passive or third-person voice.
**Recommendation:** Ensure all project descriptions use "I" verbs (e.g., "I built," "I designed," "I implemented").
- *Example to check:* Review `src/data/research/autonomousTools.ts` and `src/data/research/systemTools.ts` to ensure descriptions like "A system that does X" are rewritten as "I built a system that does X."

## 2. Redundancies and Repetition
**Issue:** Frequent repetition of full proper names or titles across consecutive paragraphs in Markdown articles (e.g., "Civ Robotics," "Robust.AI," or "Ariel Anders").
**Recommendation:** Introduce the full name once per section and use pronouns or shortened references thereafter.
- *Example to check:* The `src/content/research/masters-thesis.md` and `conformant-planning-manipulation.md` files. Ensure the narrative flows naturally without repeating "In my Master's thesis" or "The algorithm" too often.

## 3. Typographical and Phrasing Errors
**Issue:** Minor typos or awkward phrasing in UI elements and data files.
**Recommendation:**
- In `src/data/home.ts`, check the `FEATURE_CALLOUTS` for consistent punctuation (e.g., ensuring all descriptions end with a period if they are full sentences, or none do if they are fragments).
- Ensure "Agentic DevAI" and "Agentic AI" are used consistently across the site (e.g., in `src/pages/Home.tsx` and `src/data/home.ts`).

## 4. Corporate Buzzwords
**Issue:** The memory explicitly states to avoid words like "streamline", "leverage", or "consolidated suite".
**Recommendation:** Do a global find-and-replace check for these words.
- Replace "leverage" with "use", "apply", or "build with".
- Replace "streamline" with "simplify" or "speed up".

## 5. Specific Phrasing Improvements
- **`src/data/home.ts`**: "I build agentic CI/CD workflows and automated code reviews that aggressively catch technical debt—accelerating engineering speed without compromising rigor." -> *Consider slightly softening "aggressively" to "proactively" for a more professional tone, though "aggressively" shows strong intent.*
- **`src/components/Navigation.tsx`**: "Ariel Anders, PhD — Roboticist" -> *Ensure this exactly matches the `brandRole` or `name` in `home.ts` if intended to be identical.*

## 6. Formatting Inconsistencies
**Issue:** Some headers or labels might use Title Case while others use Sentence case.
**Recommendation:** Standardize tags and headers to Sentence case as per the memory guidelines ("Sentence case headers/tags").
- *Check:* The tags in `src/data/resume/skills.ts` and `src/data/research/systemTools.ts`.

## 7. Acronyms and Abbreviations
**Issue:** CI/CD, ROS 2, AI, PR, UX are used frequently.
**Recommendation:** Ensure they are capitalized consistently throughout the text (e.g., "ROS 2" instead of "ROS2"). The consolidated text shows good adherence, but a double-check is recommended in newer DevAI markdown files.

## Next Steps
Review these findings against the source files and apply the necessary edits to the `.ts`, `.tsx`, and `.md` files in the `src/` directory.
