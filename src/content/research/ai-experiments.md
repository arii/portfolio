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

This article consolidates experimental DevAI tooling, automated data ingestion routines, and e-commerce integrations currently in development and validation.

---

## 1. WCS Event Telemetry Scraping & ETL Pipeline

Automating competitive event data ingestion to eliminate manual schedule updates and enable downstream analytics.

### Data Validation and Resilience
Web scraping competitive dance registries requires resilient parsing and strict schema enforcement. The pipeline utilizes `BeautifulSoup` for HTML parsing and `pydantic` for runtime validation, falling back to temporary identifiers when registry link data is missing.

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
    rows = soup.find_all('tr', class_='event-row') or soup.find_all('div', class_='event-item')

    for row in rows:
        try:
            name = row.find(['td', 'h3'], class_='name').text.strip()
            location = row.find(['td', 'span'], class_='location').text.strip()
            date = row.find(['td', 'time'], class_='date').text.strip()

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

    with open('public/data/event_queue.json', 'w') as f:
        json.dump(valid_events, f, indent=2)

if __name__ == "__main__":
    scrape_wcs_events()
```

### Serverless CI/CD Sync
The ETL scraper executes on scheduled GitHub Actions workflows, committing updated JSON payloads to `public/data/` only when event diffs occur.

---

## 2. Ecommerce Merchandising & Storefront Automation

Automating print-on-demand merchandising and product catalog synchronization using modern REST APIs.

### Architecture Highlights
1. **Programmatic Design Generation**: Graphic automation pipelines tailored for community gear.
2. **Printful API Sync**: Automated product variant creation, mockup rendering, and inventory synchronization across storefronts.
3. **Affiliate & Catalog Ingestion**: Automated ingestion pipelines linking affiliate listings directly into site catalog nodes.

---

## 3. RAG-Powered AI Blog Drafter

A human-in-the-loop prompt engineering platform designed for brand-consistent content generation.

### Workflow
1. **Context Retrieval**: Retrieval-Augmented Generation (RAG) indexes existing editorial articles to mimic style and tone.
2. **Prompt Construction**: Injects historical domain context when given a new topic or outline.
3. **Draft Generation**: Produces initial drafts aligned with brand guidelines while reducing blank-page friction.
4. **Human Review**: Editors refine, fact-check, and approve generated content prior to publication.
