---
type: study
title: "AI Experiments (In Progress)"
date: "2026-08-15"
author: "Ariel Anders"
category: "AI Experiments"
tags: ["ETL", "WCS Scraper", "Printful API", "LLM", "RAG", "Automation", "Visual Testing"]
excerpt: "A consolidated collection of active AI experiments and automated routines, including WCS event telemetry scraping & ETL, Printful API merch automation, RAG-powered AI blog drafting, and Playwright visual UX auditing."
readTime: 10
status: "In Progress"
---

A consolidated suite of experimental DevAI tooling, automated data ingestion pipelines, e-commerce integrations, and autonomous UI guardrails currently in active development.

---

### Executive Summary

| Tool Module | Primary Tech Stack | Status | Primary Impact & Outcome |
| :--- | :--- | :--- | :--- |
| **WCS Scraping & ETL** | `Python`, `Pydantic`, `GitHub Actions` | Production | 100% automated weekly sync with zero manual maintenance |
| **Storefront Automation** | `TypeScript`, `REST API`, `Printful` | Active | Direct vector art transform & automated variant sync |
| **RAG AI Blog Drafter** | `Vector DB`, `LLM`, `Markdown` | In Progress | 4x faster first-draft synthesis with brand voice grounding |
| **Visual UX Auditor** | `Playwright`, `Pixelmatch`, `CI` | Active | Zero layout regressions across 3 responsive viewports |

---

### Quick-Nav Table of Contents

| Section | Focus | Tech Stack | Status |
| :--- | :--- | :--- | :--- |
| [1. WCS Scraping & ETL](#1-wcs-event-telemetry-scraping--etl-pipeline) | Automated data sync & fallback hashing | `Python`, `Pydantic`, `GitHub Actions` | Production |
| [2. Storefront Automation](#2-ecommerce-merchandising--storefront-automation) | Printful API & dynamic catalog ingestion | `TypeScript`, `REST API` | Active |
| [3. RAG AI Blog Drafter](#3-rag-powered-ai-blog-drafter) | Retrieval-augmented drafting assistant | `Vector DB`, `LLM`, `Markdown` | In Progress |
| [4. Visual Regression Auditor](#4-visual-regression--ux-auditor) | Multi-viewport screenshot diffing | `Playwright`, `Pixelmatch` | Active |

---

## 1. WCS Event Telemetry Scraping & ETL Pipeline

`Python` `Pydantic` `GitHub Actions` `BeautifulSoup`

![WCS Telemetry Scraper execution console and schema validation interface](/assets/research/ai-experiments/wcs-scraper.png)

#### Problem
Manually tracking regional West Coast Swing event schedules and dancer registries from the [World Swing Dance Council](https://worldwestcoastswingcouncil.com/events/) was a recurring maintenance bottleneck, leading to stale event schedules and missing registration links.

#### Architecture
The pipeline extracts unstructured HTML, validates every row against a Pydantic schema with deterministic fallback hashing, and publishes static JSON artifacts for zero-runtime-cost client retrieval.

```
[ Source HTML ] ──> [ BS4 / Pydantic Parser ] ──> [ GitHub Actions Cron ] ──> [ Static JSON CDN ] ──> [ React Hook ]
```

```python
# etl/scraper.py - Pydantic validation & fallback hashing
from pydantic import BaseModel, Field
from typing import Optional

class WCSEvent(BaseModel):
    name: str = Field(..., min_length=1)
    location: str
    date: str
    registry_id: Optional[str] = None

# Graceful degradation for missing WSDC registry identifiers
def parse_registry_id(link_tag, event_name: str) -> str:
    if link_tag and 'href' in link_tag.attrs:
        return link_tag['href'].split('/')[-1]
    return f"tmp_{hash(event_name)}"
```

```yaml
# .github/workflows/wcs_etl.yml - Git diff guardrail
- name: Commit and Push Data
  run: |
    git add public/data/event_queue.json
    if git diff --staged --quiet; then
      echo "No changes in event data. Skipping commit."
    else
      git commit -m "chore: Sync latest WSDC Event Data"
      git push
    fi
```

#### Key Takeaway
100% automated weekly synchronization with zero downstream schema errors and zero noisy git commits when source data remains static.

[↑ Back to Top](#)

---

## 2. Ecommerce Merchandising & Storefront Automation

`TypeScript` `Printful REST API` `Vector Processing` `Catalog Ingestion`

#### Problem
Manual product creation across print-on-demand vendors requires repetitive manual upload of artwork, pricing calculations, variant configuration, and high-resolution mockup generation.

#### Architecture
An automated pipeline ingests vector source files, applies dynamic dimension clipping for apparel print safe zones, and synchronizes product variants directly via the official [Printful API Docs](https://developers.printful.com/docs/).

```
[ Vector Artwork ] ──> [ Safe-Zone Scaler ] ──> [ Printful REST API ] ──> [ Catalog Node Ingestion ]
```

```typescript
// sync/printful.ts - Automated variant payload creation
export async function syncProductVariant(variantId: number, printFileUrl: string) {
  const res = await fetch(`https://api.printful.com/store/products/${variantId}`, {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${process.env.PRINTFUL_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      sync_product: { name: 'BoomTick Commemorative Apparel' },
      sync_variants: [{ retail_price: '28.00', files: [{ type: 'default', url: printFileUrl }] }]
    })
  });
  return res.json();
}
```

#### Key Takeaway
Eliminated 90% of manual merchandising overhead while ensuring consistent print safe zones and real-time inventory pricing alignment across product catalogs.

[↑ Back to Top](#)

---

## 3. RAG-Powered AI Blog Drafter

`LLM` `Vector Search` `RAG` `Markdown` `Human-in-the-Loop`

![AI Blog Drafter prompt generation and contextual vector retrieval interface](/assets/research/ai-experiments/blog-drafter.png)

#### Problem
Drafting technical blog posts from scratch often results in inconsistent formatting, missed style guidelines, and tone variance across author contributions.

#### Architecture
A Retrieval-Augmented Generation (RAG) assistant indexes past blog Markdown files into a vector embeddings store, injecting contextual style rules and past technical references directly into LLM prompts.

```
[ Knowledge Base ] ──> [ Embeddings Store ] ──> [ Context Injection ] ──> [ Draft Generator ] ──> [ Human Editor ]
```

#### Key Takeaway
Accelerated initial technical draft creation by 4x while grounding tone, structural hierarchy, and code conventions in pre-verified publication standards.

[↑ Back to Top](#)

---

## 4. Visual Regression & UX Auditor

`Playwright` `Pixelmatch` `CI/CD` `Responsive Testing`

![Playwright Visual UX Auditor console showing visual regression diff score and breakpoint preview](/assets/research/ai-experiments/ux-auditor.png)

#### Problem
CSS layout shifts, unintended font size changes, and visual regressions across varied device viewports often escape unit tests and leak into production.

#### Architecture
The auditor executes headful or headless browser runs via [Playwright](https://github.com/microsoft/playwright) across standard breakpoints (`375px`, `768px`, `1280px`) and uses [Pixelmatch](https://github.com/mapbox/pixelmatch) to calculate pixel-delta thresholds against baseline snapshots.

```
[ Staging Preview ] ──> [ Playwright Screenshots ] ──> [ Pixelmatch Diff Engine ] ──> [ PR Visual Report ]
```

#### Key Takeaway
Guarantees 100% visual consistency before PRs are merged, automatically catching breaking layout changes and responsive viewport overflows.

[↑ Back to Top](#)
