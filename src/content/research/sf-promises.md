---
type: study
title: "SF Promises: Sourced Verdicts on San Francisco's Public Commitments"
date: "2026-11-13"
author: "Ariel Anders"
category: "Agentic AI & Verification"
tags: ["DevAI", "Agentic AI", "Verification", "SQLite", "Archil"]
summary: "I built an agentic pipeline that tracks San Francisco public promises against archived official sources using verbatim extraction, adversarial advocates, and a deterministic arbitrator, achieving 100% agreement on a hand-labeled gold set."
readTime: 7
status: "published"
---

Public promises are made to vanish. A commitment spoken at a press conference, posted to a campaign page, or printed in a press release rarely has an owner, a deadline, or follow-up, and by the time anyone checks, the original page is often gone. I built **SF Promises** to fix that: an agentic pipeline that finds the official record of what San Francisco's leaders and institutions promised, archives it locally, and re-checks each commitment against later official evidence to produce a verifiable verdict.

My core design constraint was simple: every claim ships with a checkable source.

---

## Winner: "Best Use Of Keenable" at the Archil Hackathon

![SF Promises demo: outcome distribution of 54 verified promises across kept, in progress, broken, and undecided](/assets/research/sf-promises/verdict-board.webp)

I built SF Promises in one night during the **Archil "Agents need solid ground" Hackathon** on November 10, 2026. Out of 33 projects from 46 builders, it won **"Best Use Of Keenable"** (1 of 5 honors awarded) for temporal source retrieval and deterministic verification.

---

## The Pipeline: Four Stages to a Sourced Verdict

I designed the pipeline around one rule: **every claim traces to a saved source**. Each verdict requires a verbatim quote, an allowlisted domain, a saved file, and a matching SHA-256 hash:

### 1. Fetch and archive official sources
The pipeline fetches the official source (city publications, agency releases, or official accounts) and **saves a local copy**, so all downstream reasoning runs against immutable records.

### 2. Extract promise text from saved files only
The extractor pulls promise text **verbatim from saved files**, anchored entirely in the archived documents. Each candidate then passes three gates: it is **real, measurable, and about San Francisco**.

### 3. Two advocates argue from separate sources
I split evaluation between a **kept-advocate** and a **broken-advocate**, forcing each to argue its case from **isolated source sets**. Their evidence stays isolated, so a single misleading document reaches at most one side.

### 4. A deterministic, code-only arbitrator decides
A **code-only arbitrator** evaluates the arguments against strict rules (deadlines checked first) and picks the final verdict. Models stop at extraction and advocacy; the verdict logic is pure code. Candidates that fail deterministic checks go straight to a **quarantine registry**, which caught **13 items** before they could reach the public tables.

---

## Results

Across the current dataset, the pipeline produced:

- **54 tracked promises** across City Hall, SFO Airport, regional transit, sports, and tech:
  - **25 kept**
  - **10 in progress**
  - **17 broken**
  - **2 undecided**
- **13 quarantined items** caught by deterministic checks before reaching the public tables
- **100% agreement** against a **25-promise hand-labeled gold set**
- **0.0% false-accept rate** across **50 automated adversarial mutations**: mutated quotes and doctored claims were rejected before publication

For example: Mayor Daniel Lurie's promise to open a **24/7 crisis stabilization center at 822 Geary Street** resolved as **kept** after the facility opened on April 28, 2025. Conversely, the pledge to add **1,500 shelter beds in six months** resolved as **broken**. Every verdict links directly to its archived source so you can verify the trail yourself.

---

## Stack

- **[Archil](https://archil.com)** sandboxes and shared disks host the working SQLite database and archived sources
- **Native SQLite** for the promise, verdict, and verification records
- **Keenable** for search and fetch of official sources
- **Nebius and Meta models** handle extraction and advocacy; the verdict logic is pure code

---

## Explore the Data

- **Live demo:** [arii.github.io/sf-promises](https://arii.github.io/sf-promises/) serves the full verdict board, quarantine registry, and per-promise verification trail
- **Hugging Face dataset:** [huggingface.co/datasets/onasafari/sf-promises](https://huggingface.co/datasets/onasafari/sf-promises)
- **Source code:** [github.com/arii/sf-promises](https://github.com/arii/sf-promises)
