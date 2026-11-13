---
type: study
title: "SF Promises: Sourced Verdicts on San Francisco's Public Commitments"
date: "2026-11-13"
author: "Ariel Anders"
category: "Agentic AI & Verification"
tags: ["DevAI", "Agentic AI", "Verification", "SQLite", "Archil"]
summary: "A hackathon-award-winning agentic pipeline that tracks San Francisco public promises against archived official sources — verbatim extraction, adversarial kept/broken advocates, and a deterministic arbitrator — with a 100% match against a hand-labeled gold set."
readTime: 7
status: "published"
---

Public promises are made to vanish. A commitment spoken at a press conference, posted to a campaign page, or printed in a press release has no owner, no deadline, and no follow-up — and by the time anyone checks, the original source is often gone. **SF Promises** is an agentic pipeline built to fix that: it finds the official record of what San Francisco's leaders and institutions promised, archives it, and re-checks each promise against later official evidence — with a sourced verdict anyone can verify.

Every verdict needs a checkable source. That constraint shaped the entire system: no claim ships on the strength of a model's confidence alone.

---

## Winner: "Best Use Of Keenable" at the Archil Hackathon

![SF Promises demo: outcome distribution of 54 verified promises across kept, in progress, broken, and undecided](/assets/research/sf-promises/verdict-board.webp)

SF Promises was built during the **Archil "Agents need solid ground" Hackathon on November 10, 2026**. Across **one night — 33 projects from 46 builders** — it was awarded **1 of 5 hackathon honors: "Best Use Of Keenable"**, recognized for its high-integrity temporal source retrieval and deterministic verification pipeline.

> 🏆 **Best Use Of Keenable** — Archil "Agents need solid ground" Hackathon, November 10, 2026. One of 5 honors awarded among 33 projects and 46 builders.

---

## The Pipeline: Nothing Ships From a Single Model Call

The system is designed around one rule — **a snippet is never a source**. Every claim needs a verbatim quote, an allowlisted source, a saved file, and a matching SHA-256 hash. The pipeline that enforces this:

### 1. Fetch and archive official sources
The pipeline fetches the official source of a promise — city publications, agency releases, official accounts — and **saves it**, so later reasoning runs against archived records rather than a live, mutable web.

### 2. Extract promise text from saved files only
Promise text is extracted **verbatim from the saved files**, never from model recall. Each candidate is then validated: is the promise **real, measurable, and about San Francisco**?

### 3. Two advocates argue — from separate sources
A **kept-advocate** and a **broken-advocate** each argue the case, drawing from **separate sources**. Because they never share evidence, a single misleading document cannot steer both sides.

### 4. A deterministic, code-only arbitrator decides
A **code-only arbitrator** runs the rules and picks the verdict — with **deadlines checked first**. No verdict comes from a single model call. Candidates that fail the deterministic checks land in a **quarantine registry**: **13 quarantined items** were caught and kept out of the public tables.

---

## Results

The verified scope of the current dataset:

- **54 tracked promises** across City Hall, SFO Airport, regional transit, sports, and tech:
  - **25 kept**
  - **10 in progress**
  - **17 broken**
  - **2 undecided**
- **13 quarantined items** caught by deterministic checks before reaching the public tables
- **100% agreement** against a **25-promise hand-labeled gold set**
- **0.0% false-accept rate** across **50 automated adversarial mutations** — mutated quotes and doctored claims were rejected, not published

Two examples from the demo: the **24/7 crisis stabilization center at 822 Geary Street**, promised by Mayor Daniel Lurie, opened on April 28, 2025 — verdict **kept**. The promised **1,500 shelter beds in six months** — verdict **broken**. Each verdict links to its source, so a reader can check the reasoning rather than trust it.

---

## Stack

- **[Archil](https://archil.com)** sandboxes and shared disks — the working SQLite database and archived sources live on an Archil-mounted filesystem
- **Native SQLite** for the promise, verdict, and verification records
- **Keenable** for search and fetch of official sources
- **Nebius and Meta models** used for extraction only — never for the final verdict

---

## Explore the Data

- **Live demo:** [arii.github.io/sf-promises](https://arii.github.io/sf-promises/) — the full verdict board, quarantine registry, and per-promise verification trail
- **Hugging Face dataset:** [huggingface.co/datasets/onasafari/sf-promises](https://huggingface.co/datasets/onasafari/sf-promises)
- **Source code:** [github.com/arii/sf-promises](https://github.com/arii/sf-promises)
