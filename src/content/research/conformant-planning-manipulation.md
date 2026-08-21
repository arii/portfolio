---
title: "Reliably Arranging Objects: Conformant Planning for Robot Manipulation"
date: "2021-05-20"
readTime: 12
tags:
  - Robotics
  - Planning
  - PhD Thesis
  - Belief State
  - ROS
category: "Robotics & Autonomy"
summary: "My MIT CSAIL PhD dissertation on conformant planning for robot manipulation under uncertainty, featuring fixture-augmented optimization, belief-state transition search, and empirical action noise characterization."
---

## Overview

This research forms the core of my PhD dissertation at **MIT CSAIL**, advised by **Prof. Leslie Pack Kaelbling** and **Prof. Tomás Lozano-Pérez**. My work enables general-purpose helper robots to reliably arrange unanchored objects into desired target configurations despite severe pose uncertainty caused by inaccurate sensing, control errors, and unknown physical properties like surface friction or mass distribution.

![PR2 robot arranging Tetris blocks using conformant planning](/assets/research/phd/tetris1.png)
*Figure 1: PR2 robot performing conformant manipulation to arrange polyomino blocks into tight slots under pose uncertainty without visual feedback.*

> **Core Research Insight:** Environmental mechanics—such as walls, fences, and fixtures—act as zero-cost sensors. Pushing against physical boundaries systematically reduces state uncertainty without requiring continuous visual tracking.

---

## Part 1: Conformant Planning for Robot Manipulation

When manipulators perform multi-step assembly or packaging tasks—such as placing 1-inch polyomino Tetris blocks into tight grid slots—small position and angle errors accumulate across sequential actions. Standard open-loop trajectory execution yields a success rate of only **1.9%** because slight misalignments cause binding, jamming, or collision.

Furthermore, vision is frequently obstructed by robot end-effectors or nearby environmental structures. **Conformant planning** overcomes these perception dead-zones by synthesizing control strategies that leverage contact mechanics (such as pushing, sliding, and funneling) to reduce uncertainty purely through physical interactions.

My thesis formulates two complementary paradigms for conformant planning:

### 1. Plan Improvement (Fixture-Augmented Optimization)
- **Concept:** Augments deterministic, open-loop plans by introducing **movable fixtures** (fences or guide structures) for the robot to push parts against.
- **Optimization:** Solves for the ideal placement, geometry, and contact angles of fixtures, converting a high-variance insertion task into a deterministic funneling operation.

![Six block arrangement task on PR2](/assets/research/phd/sixblock.png)
*Figure 2: Multi-block arrangement setup demonstrating fixture-augmented funneling.*

### 2. Planning by Construction (Belief-State Transition Search)
- **Concept:** Reformulates conformant planning as a belief-state search problem over non-parametric pose probability distributions *b(s) = P(s)*.
- **Physics Simulation & Learning:** Pairs physics simulation (Box2D / Bullet) with supervised models to predict transition dynamics *P(b' | b, a)* under contact interactions.
- **Uncertainty Reduction Guarantee:** Searches for action sequences *a* in action set *A* that monotonically shrink belief state support before final part placement:

  `Support(b_t+1) ⊂ Support(b_t)`

### Defense Mascot: "Eric" the Robot
To illustrate these theoretical concepts during my thesis defense presentation, I created **"Eric"**, a cartoon robot mascot inspired by Leslie's stick figures:
- **"Blindfolded Eric":** Executing sensorless manipulation sequences where physical contact boundaries replace visual perception.
- **"Picketing Eric":** Highlighting edge cases where open-loop trajectories fail due to unexpected friction or rotational torque.

---

## Part 2: Belief State Visualization & Action Noise Characterization

The second major pillar of my thesis focuses on empirical measurement, spatial visualization, and noise characterization for physical robot actions.

![Belief State Overlay Visualization](/assets/research/phd/beliefoverlay.png)
*Figure 3: Algorithm belief-state overlay depicting particle distributions and empirical contact confidence bounds during manipulation.*

### Experimental Protocol & Software Stack
To capture true physical noise profiles, I programmed the **Willow Garage PR2 robot** using **ROS, Python, and C++**:
- **Automated Motion Capture Sampling:** Designed automated test suites that repeatedly executed hundreds of grasping, sliding, and placing trajectories under high-precision Vicon motion capture tracking.
- **Empirical Distribution Fitting:** Fitted non-parametric probability models (Gaussian Mixture Models and Kernel Density Estimation) to empirical displacement data, characterizing non-linear coupling between translational drift and rotational deflection.

---

## Experimental Benchmarks & Results

Physical experiments conducted on the PR2 platform demonstrated that conformant planning yields dramatic improvements in assembly reliability:

| Benchmark Task | Standard Open-Loop Baseline | Conformant Planning & Pushing | Performance Improvement |
| :--- | :--- | :--- | :--- |
| **Tetris Polyomino Placement** | **1.9%** success rate | **80.7%** success rate | **+78.8% (42x Increase)** |
| **Bimanual Fixture Assembly** | **< 5.0%** success rate | **85.2%** success rate | **+80.2%** |

---

## Key Takeaways

1. **Passive Compliance over Active Sensing:** Environmental mechanics act as zero-cost sensors to collapse pose uncertainty.
2. **Robustness Under Camera Occlusion:** Contact-based strategies achieve reliable assembly when optical sensing fails due to end-effector occlusions.
3. **Spatial Noise Tools for Roboticists:** Empirical noise modeling and particle overlays provide actionable visual tools to diagnose and optimize stochastic contact planners.

---

## Publications & Citations

- **Thesis Title:** *Reliably Arranging Objects: A Conformant Planning Approach to Robot Manipulation*
- **Author:** Ariel S. Anders, PhD
- **Advisors:** Prof. Leslie Pack Kaelbling & Prof. Tomás Lozano-Pérez
- **Institution:** Massachusetts Institute of Technology (MIT CSAIL)
- **MIT DSpace Archive:** [1721.1/122822](https://dspace.mit.edu/handle/1721.1/122822)
- **Google Scholar:** [Citation Record](https://scholar.google.com/citations?view_op=view_citation&hl=en&user=NM6SfiEAAAAJ&citation_for_view=NM6SfiEAAAAJ:4DMP91E08xMC)
- **Conference Paper:** *Reliably Arranging Objects in Uncertain Domains*, IEEE ICRA 2018.
