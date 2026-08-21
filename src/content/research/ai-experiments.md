---
type: study
title: "AI Experiments (In Progress)"
date: "2026-08-15"
author: "Ariel Anders"
category: "AI Experiments"
tags: ["ETL", "WCS Scraper", "Printful API", "LLM", "RAG", "Automation"]
excerpt: "A consolidated collection of active AI experiments and automated routines, including WCS event telemetry scraping & ETL, Printful API merch automation, and RAG-powered AI blog drafting."
readTime: 8
status: "In Progress"
---

# AI Experiments (In Progress)

This article consolidates experimental DevAI tooling, automated data ingestion routines, and e-commerce integrations currently in development and validation across active projects.

---

## 1. WCS Event Telemetry Scraping & ETL Pipeline

Manually updating WSDC event details is a bottleneck. To keep event schedules automatically up to date, this serverless ETL pipeline uses GitHub Actions to scrape, validate, and sync WSDC event data directly to frontend nodes.

### 1. The Scraper and Data Validation

Web scraping is inherently brittle. Instead of just dumping HTML into a dictionary, the script uses `BeautifulSoup` for parsing and `pydantic` for strict schema validation. This ensures no malformed data ever makes it to the frontend.

One major challenge was the lack of consistent WSDC registry links for all dancers. A fallback mechanism using robust temporary identifiers ensures no competitor data is dropped during sync.

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

    # Handle inconsistent HTML structures
    rows = soup.find_all('tr', class_='event-row') or soup.find_all('div', class_='event-item')

    for row in rows:
        try:
            name = row.find(['td', 'h3'], class_='name').text.strip()
            location = row.find(['td', 'span'], class_='location').text.strip()
            date = row.find(['td', 'time'], class_='date').text.strip()

            # Registry Link Resilience: Catch missing IDs and use fallbacks
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

    # Write directly to the public directory for Vite async fetch
    with open('public/data/event_queue.json', 'w') as f:
        json.dump(valid_events, f, indent=2)

if __name__ == "__main__":
    scrape_wcs_events()
```

### 2. Serverless Scheduling with GitHub Actions

The scraper runs on a weekly cron job. To prevent littering the git history with empty commits when the schedule hasn't changed, the Action checks for a `git diff` before pushing.

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

### 3. The React Frontend Sync

Because the ETL pipeline writes the JSON directly into the `public/data/` directory, the Vite application can fetch it asynchronously without ballooning the initial JavaScript bundle size.

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
        // Fetch from public directory to avoid bundling overhead
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

Automating print-on-demand merchandising and e-commerce product pipelines using modern REST APIs and autonomous content pipelines.

### Architecture
1. **Programmatic Design Generation**: Custom artwork and graphic automation tailored for community gear.
2. **Printful API Sync**: Automated creation of product variants, mockups, and inventory synchronization across storefronts.
3. **Affiliate & Catalog Ingestion**: Incoming pipelines connecting Amazon affiliate listings directly into site catalog nodes.

---

## 3. RAG-Powered AI Blog Drafter

### Human-in-the-Loop Content Engine

The **AI Blog Drafter** is a specialized prompt engineering platform designed to streamline brand-consistent content generation. Rather than replacing human writers, it augments them by providing a powerful drafting tool that understands the unique voice and style of a publication.

### How It Works

By utilizing Retrieval-Augmented Generation (RAG) over an existing corpus of blog posts, the drafter can mimic the author's tone, structure, and vocabulary.

1. **Context Retrieval:** The system indexes previous articles.
2. **Prompt Construction:** When given a new topic or outline, it injects relevant historical context into the prompt.
3. **Draft Generation:** The LLM produces a first draft that closely aligns with the established brand identity.
4. **Human Review:** An editor steps in to refine, fact-check, and finalize the content, ensuring editorial quality remains high.

### Why This Matters

Maintaining a consistent voice across dozens or hundreds of articles is challenging, especially when scaling content production. The AI Blog Drafter reduces the initial friction of the "blank page" while ensuring that the final output feels authentic and aligned with the brand's core message.
