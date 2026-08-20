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
summary: "My MIT CSAIL PhD thesis research on conformant planning for robot manipulation under uncertainty, combining fixture-augmented plan optimization, physics-driven belief state transitions, and supervised learning."
---

## Autonomous Bimanual Manipulation Under Pose Uncertainty

This work forms the core of my PhD dissertation at **MIT CSAIL**, advised by **Prof. Leslie Pack Kaelbling** and **Prof. Tomás Lozano-Pérez**. My research enables household helper robots to reliably arrange objects into target configurations despite inaccurate sensing, control errors, and unknown physical properties like friction or mass distribution.

![PR2 robot arranging Tetris blocks using conformant planning](/assets/research/phd/tetris1.png)
*Figure 1: PR2 robot performing conformant manipulation to arrange polyomino blocks into tight slots under pose uncertainty without visual feedback.*

> **Core Research Insight:** Physical contact with walls, fences, and fixtures acts as a zero-cost sensor. Pushing against environmental boundaries systematically collapses uncertainty without needing continuous visual tracking.

---

## Technical Motivation & The Uncertainty Challenge

When manipulators assemble multi-step objects—such as placing 1-inch Tetris blocks into tight grid slots—small position and angle errors accumulate quickly. Standard open-loop execution succeeds only **1.9%** of the time because minor misalignments lead to binding, jamming, or collisions.

Perception is also frequently blocked by end-effectors or nearby surfaces during close-range manipulation. **Conformant planning** bypasses these dead zones by synthesizing control strategies that use physics-based pushing and wall sliding to reduce state variance purely through contact mechanics.

![Six block arrangement task on PR2](/assets/research/phd/sixblock.png)
*Figure 2: Bimanual setup for multi-block arrangement using fixture-augmented funneling.*

---

## Thesis Methodology & Core Contributions

My thesis formulates two complementary paradigms for sensorless manipulation under physical uncertainty:

### 1. Plan Improvement (Fixture-Augmented Optimization)
- **Concept:** Augments open-loop plans by adding **movable fixtures** (fences or guide structures) for the robot to push parts against.
- **Optimization:** Solves for the ideal placement, geometry, and contact angles of fixtures, converting a high-variance insertion task into a deterministic funneling operation.

### 2. Planning by Construction (Belief-State Transition Search)
- **Concept:** Reformulates conformant planning as a belief-state search problem over non-parametric pose distributions $b(s) = P(s)$.
- **Physics Simulation & Learning:** Pairs physics engines (Box2D / Bullet) with supervised models to predict transition dynamics $P(b' \mid b, a)$.
- **Uncertainty Reduction Guarantee:** Searches for action sequences $a \in \mathcal{A}$ that monotonically shrink belief state variance before final part insertion:
  $$\text{Support}(b_{t+1}) \subset \text{Support}(b_t)$$

---

## Defense Mascot: "Eric" the Robot

To explain these theoretical ideas during my defense, I created **"Eric"**, a cartoon robot mascot inspired by Leslie's stick figures:
- **"Blindfolded Eric":** Executing sensorless manipulation sequences where physical contact boundaries replace visual perception.
- **"Picketing Eric":** Highlighting edge cases where open-loop trajectories fail due to unexpected friction or rotational torque.

---

## Belief State Visualization & Action Noise Characterization

Beyond planning, I developed empirical measurement and spatial visualization tools to analyze non-Gaussian action noise in grasping, pushing, and placing operations.

![Belief State Overlay Visualization](/assets/research/phd/beliefoverlay.png)
*Figure 3: Algorithm belief-state overlay depicting particle distributions and contact confidence bounds during manipulation.*

### Experimental Protocol & Software Stack
I programmed the PR2 using **ROS, Python, and C++** to gather true physical noise profiles:
- **Automated Motion Capture Sampling:** Executed hundreds of automated grasping, sliding, and placing trajectories inside a high-precision Vicon motion capture arena.
- **Empirical Distribution Fitting:** Fitted non-parametric models (Gaussian Mixture Models and Kernel Density Estimation) to displacement data, characterizing non-linear coupling between translational drift and rotational deflection.

---

## Experimental Benchmarks & Results

Physical benchmarks on the PR2 demonstrated that conformant planning significantly improves assembly reliability:

| Benchmark Task | Standard Open-Loop Baseline | Conformant Planning & Pushing | Performance Improvement |
| :--- | :--- | :--- | :--- |
| **Tetris Polyomino Placement** | **1.9%** success rate | **80.7%** success rate | **+78.8% (42x Increase)** |
| **Bimanual Fixture Assembly** | **< 5.0%** success rate | **85.2%** success rate | **+80.2%** |

---

## Key Takeaways

1. **Passive Compliance over Active Sensing:** Environmental mechanics (fences, walls, flat surfaces) reduce pose uncertainty without extra hardware.
2. **Robustness Under Occlusion:** Contact-based strategies achieve reliable assembly when optical sensing fails due to end-effector occlusions.
3. **Spatial Noise Diagnostic Tools:** Particle overlays and empirical noise models help roboticists diagnose and tune stochastic contact planners.

---

## Publications & Citations

- **Thesis Title:** *Reliably Arranging Objects: A Conformant Planning Approach to Robot Manipulation*
- **Author:** Ariel S. Anders, PhD
- **Advisors:** Prof. Leslie Pack Kaelbling & Prof. Tomás Lozano-Pérez
- **Institution:** Massachusetts Institute of Technology (MIT CSAIL)
- **MIT DSpace Archive:** [1721.1/122822](https://dspace.mit.edu/handle/1721.1/122822)
- **Google Scholar:** [Citation Record](https://scholar.google.com/citations?view_op=view_citation&hl=en&user=NM6SfiEAAAAJ&citation_for_view=NM6SfiEAAAAJ:4DMP91E08xMC)
- **Conference Paper:** *Reliably Arranging Objects in Uncertain Domains*, IEEE ICRA 2018.
