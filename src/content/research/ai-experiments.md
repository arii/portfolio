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

# AI Experiments (In Progress)

This article consolidates experimental DevAI tooling, automated data ingestion routines, e-commerce integrations, and autonomous auditing routines currently in active development and validation across the ecosystem.

---

## 1. WCS Event Telemetry Scraping & ETL Pipeline

Manually tracking and updating regional West Coast Swing (WCS) event schedules and dancer registries is a frequent maintenance bottleneck. To maintain accurate, up-to-date schedules automatically, this serverless ETL pipeline leverages GitHub Actions to scrape, validate, and publish WSDC event data directly to frontend distribution nodes.

![Automated WCS Telemetry Scraper execution console and schema validation interface](/assets/research/ai-experiments/wcs-scraper.png)

### 1. The Scraper & Data Validation Engine

Web scraping against unstandardized external sources is inherently fragile. Rather than emitting unstructured dictionary payloads, the scraper relies on `BeautifulSoup` for resilient HTML traversal and `pydantic` for strict runtime schema enforcement. Malformed records are filtered out before reaching production pipelines.

A key edge case encountered during ingestion was inconsistent WSDC dancer registry links. A fallback generator assigns deterministic temporary identifiers (`tmp_{hash(name)}`), guaranteeing zero data loss during sync operations.

```python
# etl/scraper.py
import json
import requests
from bs4 import BeautifulSoup
from pydantic import BaseModel, ValidationError, Field
from typing import List, Optional

class WCSEvent(BaseModel):
    name: str = Field(..., min_length=1)
    location: str
    date: str
    registry_id: Optional[str] = None # Handling missing WSDC registry links

def scrape_wcs_events() -> List[dict]:
    # Target WSDC-compliant event source
    url = "https://worldwestcoastswingcouncil.com/events/"
    headers = {"User-Agent": "BoomTick-Data-Bot/1.0"}

    try:
        response = requests.get(url, headers=headers, timeout=15)
        response.raise_for_status()
    except requests.RequestException as e:
        print(f"Failed to fetch WSDC data: {e}")
        return []

    soup = BeautifulSoup(response.text, 'html.parser')
    valid_events = []

    # Handle inconsistent HTML structures across event listings
    rows = soup.find_all('tr', class_='event-row') or soup.find_all('div', class_='event-item')

    for row in rows:
        try:
            name = row.find(['td', 'h3'], class_='name').text.strip()
            location = row.find(['td', 'span'], class_='location').text.strip()
            date = row.find(['td', 'time'], class_='date').text.strip()

            # Registry Link Resilience: Catch missing IDs and apply fallback hashing
            link_tag = row.find('a', href=True)
            registry_id = link_tag['href'].split('/')[-1] if link_tag else f"tmp_{hash(name)}"

            event = WCSEvent(
                name=name,
                location=location,
                date=date,
                registry_id=registry_id
            )
            valid_events.append(event.model_dump())
        except (AttributeError, ValidationError, TypeError) as e:
            print(f"Skipping malformed row: {e}")
            continue

    # Write output to the public static path for frontend async consumption
    with open('public/data/event_queue.json', 'w') as f:
        json.dump(valid_events, f, indent=2)

if __name__ == "__main__":
    scrape_wcs_events()
```

### 2. Serverless Scheduling with GitHub Actions

The ETL process runs on a scheduled GitHub Actions cron job. To avoid polluting git commit logs when scraped data remains identical between runs, the workflow executes a `git diff` check prior to committing.

```yaml
# .github/workflows/wcs_etl.yml
name: WCS Data ETL

on:
  schedule:
    - cron: '0 0 * * 1' # Every Monday at midnight UTC
  workflow_dispatch:

jobs:
  run-etl:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-python@v5
        with:
          python-version: '3.11'
          cache: 'pip'

      - name: Install dependencies
        run: pip install beautifulsoup4 requests pydantic

      - name: Run Scraper
        run: python etl/scraper.py

      - name: Commit and Push Data
        run: |
          git config --global user.name "Data-Bot"
          git config --global user.email "bot@boomtick.blog"
          git add public/data/event_queue.json

          # Only commit if data has actually changed
          if git diff --staged --quiet; then
            echo "No changes in WSDC data. Skipping commit."
          else
            git commit -m "chore: Sync latest WSDC Event Data"
            git push
          fi
```

### 3. Asynchronous Client Synchronization

By writing validated JSON into `public/data/`, client applications retrieve telemetry asynchronously on demand, preserving low initial JavaScript bundle size and avoiding unnecessary server runtime costs.

```typescript
// src/features/research/useWCSData.ts
import { useState, useEffect } from 'react';

export interface WcsEvent {
  name: string;
  location: string;
  date: string;
  registry_id?: string;
}

export function useWCSData() {
  const [events, setEvents] = useState<WcsEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('/data/event_queue.json');
        if (!response.ok) throw new Error('WCS data sync failed');
        const data = await response.json();
        setEvents(data);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Unknown data error'));
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  return { events, loading, error };
}
```

---

## 2. Ecommerce Merchandising & Storefront Automation

Automating print-on-demand merchandising pipelines and catalog management using modern REST APIs and autonomous vector art transformation pipelines.

### Architectural Breakdown
1. **Programmatic Artwork Generation**: Transforming vector graphics and branding assets programmatically to match apparel dimensions and print safe zones.
2. **Printful REST API Integration**: Automated creation of product variants, high-resolution mockup generation, pricing calculations, and real-time inventory synchronization.
3. **Affiliate & Catalog Ingestion**: Automated mapping routines ingesting external affiliate listings directly into structured site catalog nodes.

```typescript
// Example: Printful API Sync Routine
export async function syncProductVariant(variantId: number, printFileUrl: string) {
  const response = await fetch(`https://api.printful.com/store/products/${variantId}`, {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${process.env.PRINTFUL_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      sync_product: { name: 'BoomTick Commemorative Apparel' },
      sync_variants: [{
        retail_price: '28.00',
        files: [{ type: 'default', url: printFileUrl }]
      }]
    })
  });
  return response.json();
}
```

---

## 3. RAG-Powered AI Blog Drafter

![AI Blog Drafter prompt generation and contextual vector retrieval interface](/assets/research/ai-experiments/blog-drafter.png)

### Human-in-the-Loop Content Engine

The **AI Blog Drafter** is a specialized prompt-engineering and content automation tool designed to streamline publication drafting. Rather than replacing editorial judgment, it augments human writers by generating structurally complete drafts that strictly align with established brand style guidelines.

### Workflow & Mechanics

Utilizing Retrieval-Augmented Generation (RAG) over an indexed knowledge base of past articles, the drafter maintains consistency in tone, technical precision, and article hierarchy.

1. **Vector Context Retrieval:** Historical posts and style guidelines are indexed into vector embeddings.
2. **Prompt Construction:** Incoming topic outlines trigger similarity search queries, injecting top matching excerpts into the LLM system prompt.
3. **Structured First Draft:** The model synthesizes an initial draft formatted with Markdown headings, code blocks, and key takeaways.
4. **Editorial Review:** Human authors review, fact-check, and polish the generated copy before publication.

---

## 4. Visual Regression & UX Auditor

![Playwright Visual UX Auditor console showing visual regression diff score and breakpoint preview](/assets/research/ai-experiments/ux-auditor.png)

### Automated UI Quality Guardrails

The **Visual Regression & UX Auditor** captures full-page screenshot diffs across responsive viewport dimensions (`375px`, `768px`, `1280px`) using Playwright and pixelmatch.

By analyzing visual delta percentages before merging code, the pipeline flags layout shifts, unintended font size variations, and broken element constraints before changes reach production environments.
