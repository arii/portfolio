---
title: "Reliably Arranging Objects: Conformant Planning for Robot Manipulation"
date: "2021-05-20"
readTime: 12
tags:
  - Robotics
  - Planning
  - PhD Thesis
  - Belief State
category: "Robotics & Autonomy"
summary: "Ariel Anders' MIT CSAIL PhD thesis on conformant planning for robot manipulation under uncertainty, combining fixture-augmented plan optimization, physics-driven belief state transitions, and belief state visualization."
---

## Autonomous Bimanual Manipulation Under Pose Uncertainty

**Reliably Arranging Objects: Conformant Planning for Robot Manipulation** forms a central pillar of Ariel Anders' PhD thesis at the **MIT Computer Science and Artificial Intelligence Laboratory (CSAIL)**. The research addresses a fundamental bottleneck in modern robotics: achieving high task success rates when manipulating unanchored objects under severe pose uncertainty and actuation noise without relying on continuous high-speed camera feedback.

![Willow Garage PR2 robot arranging Tetris blocks using conformant planning](/assets/research/phd/tetris1.png)
*Figure 1: Willow Garage PR2 robot performing conformant manipulation to reliably arrange unanchored polyomino blocks into tight slots under severe pose uncertainty.*

---

## Technical Context & The Uncertainty Challenge

When mobile manipulators perform multi-step object assembly or packaging (such as placing complex Tetris polyomino blocks into tight grid slots), small angular or translational errors accumulate rapidly. Standard open-loop trajectory execution often yields near-zero success rates because slight misalignment causes binding, jamming, or object collision.

Continuous visual feedback is frequently obstructed during close-range manipulation by robot end-effectors or environmental fixtures. **Conformant planning** overcomes these perception dead-zones by synthesizing sensorless control strategies that leverage physics-based pushing, wall sliding, and fixture funnels to reduce physical state uncertainty purely through contact mechanics.

![Six block arrangement task on PR2](/assets/research/phd/sixblock.png)
*Figure 2: Multi-block arrangement setup on the PR2 platform demonstrating fixture-augmented funneling.*

---

## Core Algorithmic Framework

Ariel's framework combines conformant belief-state planning with contact dynamics optimization:

### 1. Belief-State Space Search
- Models object pose distributions as non-parametric belief states over 3D rigid body configurations.
- Searches for sequences of pushing and re-orienting actions that monotonically reduce the support volume of the belief state prior to insertion.

### 2. Fixture & Pushing Mechanics Optimization
- Optimizes push directions, fence geometries, and environmental boundary contact interactions to force object alignment into deterministic goal poses.
- Replaces brittle high-precision trajectory tracking with compliant, funneling interaction primitives.

---

## Belief State Visualization & Action Noise Characterization

A complementary component of this PhD research focuses on empirical measurement and spatial visualization techniques for non-Gaussian action noise in robotic grasping, pushing, and placing operations.

![Belief State Overlay Visualization](/assets/research/phd/beliefoverlay.png)
*Figure 3: Algorithm belief-state overlay visualization depicting particle distributions and empirical contact confidence bounds during manipulation.*

### The Challenge of Action Uncertainty
Robotic planning algorithms under uncertainty (such as POMDPs and belief-space planners) rely on motion transition models $P(s' \mid s, a)$. In practice, real robot hardware incurs complex, asymmetric noise during contact interaction due to end-effector compliance, surface friction variability, and micro-slippage during finger jaw contact and release.

### Experimental Noise Characterization Methodology
To capture true physical noise profiles, Ariel designed an automated empirical testing protocol using high-precision motion capture tracking:
- **Automated Execution & Mocap Sampling:** Repeatedly executed hundreds of grasping, sliding, and placing trajectories under controlled conditions using the Willow Garage PR2 robot.
- **Empirical Distribution & Kernel Density Fitting:** Fitted non-parametric probability distributions (Gaussian Mixture Models and Kernel Density Estimation) to empirical displacement data to characterize non-linear coupling between translational drift and rotational deflection.

---

## Experimental Results & Tetris Benchmarks

Experiments conducted on the **Willow Garage PR2 robot** demonstrated order-of-magnitude improvements in assembly reliability:

| Benchmark Task | Standard Open-Loop Baseline | Conformant Planning & Pushing | Improvement |
| :--- | :--- | :--- | :--- |
| **Tetris Block Placement** | **1.9%** success rate | **80.7%** success rate | **+78.8% (42x Increase)** |
| **Bimanual Fixture Assembly** | **< 5.0%** success rate | **85.2%** success rate | **+80.2%** |

---

## Key Takeaways

- Environmental mechanics (fences, walls, and flat surfaces) act as zero-cost sensors to reduce pose uncertainty.
- Conformant planning achieves robust physical assembly under noisy real-world conditions where optical sensing fails due to occlusions.
- Empirical noise modeling and spatial particle overlays provide researchers with actionable visual tools to diagnose and optimize stochastic contact planners.

---

## Thesis & Academic Citations

This research is published as part of Ariel Anders' PhD dissertation at MIT:
- **Thesis Title:** *Reliably Arranging Objects: Conformant Planning for Robot Manipulation*
- **Author:** Ariel S. Anders, PhD
- **Institution:** Massachusetts Institute of Technology (MIT), Department of Electrical Engineering and Computer Science (EECS), CSAIL
- **MIT DSpace Handle:** [1721.1/122822](https://dspace.mit.edu/handle/1721.1/122822)
- **Google Scholar Citation:** [Citation Page](https://scholar.google.com/citations?view_op=view_citation&hl=en&user=NM6SfiEAAAAJ&citation_for_view=NM6SfiEAAAAJ:4DMP91E08xMC)
