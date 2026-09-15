import re

# Fix About.tsx layout
about_file = "src/pages/About.tsx"
with open(about_file, "r") as f:
    about_content = f.read()

# First, remove the section from outside the grid
schedule_section = """
      <section id="schedule" className="space-y-6 bg-surface p-6 sm:p-8 rounded-3xl border border-line">
            <span className="inline-block px-3 py-1 text-xs font-semibold rounded-md bg-accent/10 text-accent mb-2">Advisory & Consulting</span>
            <h2 className="text-xl sm:text-2xl font-bold text-text-main pb-3 border-b border-line/30">
              Schedule a Consultation
            </h2>
            <p className="text-sm text-text-body leading-relaxed mb-6">
              Book a technical advisory session for agentic orchestration, robotics architecture, or system design.
            </p>

            <div style={{ maxHeight: "650px", overflowY: "auto", borderRadius: "8px" }} className="border border-border bg-surface-base">
              <div id="cal-inline-embed" style={{ width: '100%', height: '100%' }}></div>
            </div>
          </section>"""

# Replace the outer section with empty string
about_content = about_content.replace(schedule_section, "")

# Find the marker inside lg:col-span-8 and replace it
marker = "{/* Cal.com Booking Section */}"
about_content = about_content.replace(marker, marker + "\n" + schedule_section.strip())

with open(about_file, "w") as f:
    f.write(about_content)


# Fix CI.yml env
ci_file = ".github/workflows/ci.yml"
with open(ci_file, "r") as f:
    ci_content = f.read()

ci_build_step = """      - name: Build Application
        run: pnpm run build"""
ci_build_step_new = """      - name: Build Application
        run: pnpm run build
        env:
          VITE_CALCOM_EVENT_SLUG: ${{ secrets.CALCOM_EVENT_SLUG }}"""

if ci_build_step in ci_content:
    ci_content = ci_content.replace(ci_build_step, ci_build_step_new)
    with open(ci_file, "w") as f:
        f.write(ci_content)


# Fix preview.yml env
preview_file = ".github/workflows/preview.yml"
with open(preview_file, "r") as f:
    preview_content = f.read()

preview_build_step = """        env:
          VITE_BASE_PATH: /portfolio/preview/pr-${{ github.event.number }}/
          INDEXNOW_KEY: ${{ secrets.INDEXNOW_KEY }}"""
preview_build_step_new = """        env:
          VITE_BASE_PATH: /portfolio/preview/pr-${{ github.event.number }}/
          INDEXNOW_KEY: ${{ secrets.INDEXNOW_KEY }}
          VITE_CALCOM_EVENT_SLUG: ${{ secrets.CALCOM_EVENT_SLUG }}"""

if preview_build_step in preview_content:
    preview_content = preview_content.replace(preview_build_step, preview_build_step_new)
    with open(preview_file, "w") as f:
        f.write(preview_content)

print("Patch applied.")
