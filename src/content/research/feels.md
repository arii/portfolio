---
title: "Feels: Teaching a Robot to Feel"
date: "2026-10-30"
readTime: 5
author: "Sree Dhyuti Nimmagadda & Ariel Anders"
tags:
  - Robotics
  - Manipulation
  - Machine Learning
  - Viam
  - MongoDB
category: "Robotics & Manipulation"
summary: "Torque-based object classification from motor torques alone: a robot lifts a sealed cup, swirls it, and predicts the contents — 86–89% empty detection with no added sensors."
image: "/assets/research/feels.webp"
---

## Teaching a Robot to Feel, From Motor Torques Alone

**Feels** is an online data collection and training platform for robot object classification through physical interaction. Built with **Sree Dhyuti Nimmagadda** at the **Viam + MongoDB hackathon (Oct 29–30, 2026)**, it teaches a robot arm to classify the contents of a sealed cup — liquid, candy, or screws — using a three-step routine: **lift, swirl, predict**.

![Feels live dashboard: the Physical AI Cup Inspector running a swirl macro, alongside measured results — 86–89% empty vs. non-empty detection on 21 held-out test cups](/assets/research/feels.webp)

---

## The Problem & Motivation

Computer vision has expanded what robots can manipulate, but it still fails on containers: a sealed opaque cup looks identical whether it holds water, candy, or screws. Businesses deploying manipulation in unstructured environments — warehouses, households, hospitals — typically respond by adding sensors: force-torque, weight, even X-ray.

The Feels hypothesis is that much of that information is already present in the robot's existing hardware. Every movement the arm makes already produces motor torques that respond to what is inside the gripper. Reading those torques gives a robot tactile "common sense" at **no added sensor cost** — cheaper and faster than bolting on extra hardware. The arm carries **no force-torque sensor**; everything below is inferred from applied joint torques alone.

---

## Approach: Lift → Swirl → Predict

1. **Lift.** The robot picks up the cup using a fixed, repeatable grasp macro.
2. **Swirl.** It moves the cup in a deterministic swirling motion and places it back — a fixed trajectory designed so that whatever is inside sloshes and shifts in a repeatable way.
3. **Predict.** Applied joint torques recorded during the swirl are mapped to a physical signature and matched against taught examples.

### Signature Space

Each swirl produces a **torque-based signature** of the contents. We taught **110 signatures** across five materials — water, solid weight, screws, candy, and empty — and projected them to 2-D via PCA, colored by material:

| Material | Signatures |
|---|---|
| Water | 46 |
| Solid weight | 39 |
| Empty | 17 |
| Screws | 7 |
| Candy | 1 |

The projection shows water and solid-weight signatures separating readily, while sparse categories (screws, candy) sit in smaller clusters — a fair picture of what the nearest-neighbor classifier finds easy and hard.

### Online Learning, Not a Frozen Model

Feels is a **data collection and training platform**, not a one-off model. Signatures are stored as embeddings in **MongoDB Atlas Vector Search**, and classification is nearest-neighbor retrieval against everything taught so far. That means new categories — or corrections to existing ones — are taught through the live dashboard ("teach a new item") and become classifiable immediately, no retraining run. The stack: **Viam Python SDK, gRPC, WebRTC, aiohttp**, streaming telemetry over **SSE**, with **PyTorch** and **scipy** in the feature pipeline and a labeled swirl dataset published on **Hugging Face**.

---

## Results

Measured on the live site's held-out evaluation, on a hackathon-collected dataset:

- **86–89% empty vs. non-empty detection** across **21 held-out test cups** — the deployable safety signal, e.g. knowing a gripper closed on nothing.
- **52% on the full 3-way task** (empty / liquid / solid) with the nearest-neighbor baseline — honest headroom over chance (~33%), and a clear roadmap: more taught signatures per category, better feature extraction.

The dashboard reports each live prediction with its similarity scores, so operators can see *why* a cup was classified as screws and teach a correction when the system is uncertain.

---

## What It Demonstrates

- **Proprioceptive sensing is underrated.** Useful content classification falls out of the motor torques a standard arm already produces — no wrist sensor, no scale, no extra wiring.
- **Nearest-neighbor memory beats small-data training.** With a hackathon-sized dataset, retrieval over an ever-growing signature library classifies new and existing categories online.
- **The pipeline is reproducible.** The full platform — swirl macro, feature extraction, vector memory, live dashboard — is open source, with a mock mode that runs the entire UI on bundled recordings, no hardware required.

This work pairs naturally with our other manipulation research, such as [conformant planning for manipulation](/research/conformant-planning-manipulation/): both ask what a robot can infer about the world from contact and motion rather than cameras.
