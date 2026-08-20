---
title: "Reliably Arranging Objects: Conformant Planning for Robot Manipulation"
date: "2021-05-20"
readTime: 8
tags:
  - Robotics
  - Planning
  - PhD Thesis
category: "Robotics & Autonomy"
summary: "Willow Garage PR2 robot manipulation under uncertainty, fixture optimization for push/assembly reliability (increasing Tetris reliability from 1.9% to 80.7%), and belief-state planning without external sensing."
---

# Reliably Arranging Objects: Conformant Planning for Robot Manipulation

## Autonomous Bimanual Manipulation Under Pose Uncertainty

**Reliably Arranging Objects: Conformant Planning for Robot Manipulation** forms a central pillar of Ariel Anders' PhD thesis at the **MIT Computer Science and Artificial Intelligence Laboratory (CSAIL)**. The research addresses a fundamental bottleneck in modern robotics: achieving high task success rates when manipulating unanchored objects under severe pose uncertainty and actuation noise without relying on continuous high-speed camera feedback.

---

## Technical Context & The Uncertainty Challenge

When mobile manipulators perform multi-step object assembly or packaging (such as placing complex Tetris polyomino blocks into tight grid slots), small angular or translational errors accumulate rapidly. Standard open-loop trajectory execution often yields near-zero success rates because slight misalignment causes binding, jamming, or object collision.

Continuous visual feedback is frequently obstructed during close-range manipulation by robot end-effectors or environmental fixtures. **Conformant planning** overcomes these perception dead-zones by synthesizing sensorless control strategies that leverage physics-based pushing, wall sliding, and fixture funnels to reduce physical state uncertainty purely through contact mechanics.

---

## Core Algorithmic Framework

Ariel's framework combines conformant belief-state planning with contact dynamics optimization:

### 1. Belief-State Space Search
- Models object pose distributions as non-parametric belief states over 3D rigid body configurations.
- Searches for sequence of pushing and re-orienting actions that monotonically reduce the support volume of the belief state prior to insertion.

### 2. Fixture & Pushing Mechanics Optimization
- Optimizes push directions, fence geometries, and environmental boundary contact interactions to force object alignment into deterministic goal poses.
- Replaces brittle high-precision trajectory tracking with compliant, funneling interaction primitives.

---

## Experimental Results & Tetris Benchmarks

Experiments conducted on the **Willow Garage PR2 robot** demonstrated order-of-magnitude improvements in assembly reliability:

| Benchmark Task | Standard Open-Loop Baseline | Conformant Planning & Pushing | Improvement |
| :--- | :--- | :--- | :--- |
| **Tetris Block Placement** | **1.9%** success rate | **80.7%** success rate | **+78.8% (42x Increase)** |
| **Bimanual Fixture Assembly** | **< 5.0%** success rate | **85.2%** success rate | **+80.2%** |

---

## Thesis & Academic Citations

This research is published as part of Ariel Anders' PhD dissertation at MIT:
- **Thesis Title:** *Reliably Arranging Objects: Conformant Planning for Robot Manipulation*
- **Institution:** Massachusetts Institute of Technology, Department of Electrical Engineering and Computer Science
- **MIT DSpace Handle:** [1721.1/122822](https://dspace.mit.edu/handle/1721.1/122822)

---

## Key Takeaways

- Environmental mechanics (fences, walls, and flat surfaces) act as zero-cost sensors to reduce pose uncertainty.
- Conformant planning achieves robust physical assembly under noisy real-world conditions where optical sensing fails due to occlusions.
