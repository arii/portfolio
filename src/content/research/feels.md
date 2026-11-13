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
summary: "We built a torque-based object classification pipeline that requires zero added sensors: a robot arm lifts a sealed cup, swirls it, and classifies the contents from joint motor torques alone—achieving 86–89% empty detection."
image: "/assets/research/feels.gif"
---

## Teaching a Robot to Feel, From Motor Torques Alone

At the **Viam + MongoDB hackathon (Oct 29–30, 2026)**, **Sree Dhyuti Nimmagadda** and I built **Feels**—an online data collection and training platform that teaches a robot arm to classify sealed cup contents (liquid, candy, or screws) through physical interaction using a three-step routine: **lift, swirl, predict**.

![Feels live demo: the robot arm lifts and swirls a sealed cup, followed by the signature space — 110 taught signatures projected to 2-D via PCA, colored by material](/assets/research/feels.gif)

---

## The Problem & Motivation

Computer vision has expanded what robots can manipulate, but it fails on opaque containers: a sealed cup looks identical whether it holds water, candy, or screws. Most manipulation stacks solve this by bolting on extra hardware—force-torque sensors, load cells, or even X-ray systems.

Our hypothesis was that the signal is already sitting in the actuator telemetry. Every arm movement generates motor torques that shift with the payload's mass and internal dynamics. Reading those residuals gives a robot tactile intuition at **zero added hardware cost**. Our arm carries **no force-torque sensor**; every prediction below comes strictly from applied joint torques.

---

## Approach: Lift → Swirl → Predict

1. **Lift.** The arm picks up the cup via a fixed grasp macro.
2. **Swirl.** It executes a deterministic swirling trajectory before setting the cup down, forcing whatever is inside to slosh or shift in a repeatable pattern.
3. **Predict.** We map the applied joint torques recorded during the swirl into a physical signature and match it against taught examples.

### Signature Space

Each swirl produces a **torque-based signature** of the contents. We taught **110 signatures** across five materials — water, solid weight, screws, candy, and empty — and projected them to 2-D via PCA, colored by material:

| Material | Signatures |
|---|---|
| Water | 46 |
| Solid weight | 39 |
| Empty | 17 |
| Screws | 7 |
| Candy | 1 |

In our PCA projection, water and solid-weight signatures separate cleanly, while sparse categories (screws, candy) form smaller clusters—accurately reflecting where our nearest-neighbor classifier has high confidence versus where it needs more samples.

### Online Learning, Not a Frozen Model

We designed Feels as a **live data collection and training platform**, not a frozen model. We store torque signatures as embeddings in **MongoDB Atlas Vector Search** and classify via nearest-neighbor retrieval against everything taught so far. Operators can teach new categories—or correct misclassifications—directly from the dashboard ("teach a new item") with zero retraining latency. Our stack runs on **Viam Python SDK, gRPC, WebRTC, and aiohttp**, streaming telemetry over **SSE** with **PyTorch** and **scipy** handling feature extraction, backed by a labeled swirl dataset we published on **Hugging Face**.

---

## Results

Evaluated on our held-out hackathon test set:

- **86–89% empty vs. non-empty detection** across **21 held-out test cups**—the core safety signal needed to verify whether a grasp actually succeeded.
- **52% accuracy on the 3-way classification task** (empty / liquid / solid) using our nearest-neighbor baseline—solid headroom over random chance (~33%), leaving clear room to improve via denser category sampling and richer temporal features.

The dashboard reports each live prediction with its similarity scores, so operators can see *why* a cup was classified as screws and teach a correction when the system is uncertain.

---

## What It Demonstrates

- **Proprioceptive sensing is underrated.** Useful content classification falls out of the motor torques a standard arm already produces — no wrist sensor, no scale, no extra wiring.
- **Nearest-neighbor memory beats small-data training.** With a hackathon-sized dataset, retrieval over an ever-growing signature library classifies new and existing categories online.
- **The pipeline is reproducible.** The full platform — swirl macro, feature extraction, vector memory, live dashboard — is open source, with a mock mode that runs the entire UI on bundled recordings, no hardware required.

This builds directly on my prior manipulation research, including [conformant planning for manipulation](/research/conformant-planning-manipulation/): both explore how much state a robot can infer through physical contact and proprioception rather than vision alone.
