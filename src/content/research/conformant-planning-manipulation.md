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

**Reliably Arranging Objects: A Conformant Planning Approach to Robot Manipulation** forms the core of my PhD dissertation at the **MIT Computer Science and Artificial Intelligence Laboratory (CSAIL)** under the advisement of **Prof. Leslie Pack Kaelbling** and **Prof. Tomás Lozano-Pérez**.

My research addresses a central vision for robotics: enabling general-purpose household helper robots to reliably arrange objects into desired configurations despite severe uncertainty caused by inaccurate sensing, control errors, and imperfect knowledge of physical properties (such as surface friction and mass distribution).

![Willow Garage PR2 robot arranging Tetris blocks using conformant planning](/assets/research/phd/tetris1.png)
*Figure 1: Willow Garage PR2 robot performing conformant manipulation to reliably arrange unanchored polyomino blocks into tight slots under severe pose uncertainty without external visual feedback.*

> **Core Research Insight:** Environmental mechanics—such as walls, fences, and fixture funnels—act as zero-cost physical sensors. By using uncertainty-reducing actions like pushing against environmental boundaries, a robot can systematically collapse state distributions without requiring continuous visual tracking.

---

## Technical Motivation & The Uncertainty Challenge

When mobile manipulators perform multi-step object assembly or packaging (such as placing 1-inch polyomino Tetris blocks into tight grid slots), small angular or translational errors accumulate rapidly across sequential steps. Standard open-loop trajectory execution yields a near-zero success rate (**1.9%**) because slight misalignments cause binding, jamming, or catastrophic block collision.

Continuous visual feedback is frequently obstructed during close-range manipulation by robot end-effectors or environmental fixtures. **Conformant planning** overcomes these perception dead-zones by synthesizing control strategies that leverage physics-based pushing, wall sliding, and fixture funnels to reduce physical state uncertainty purely through contact mechanics.

![Six block arrangement task on PR2](/assets/research/phd/sixblock.png)
*Figure 2: Multi-block arrangement setup on the PR2 platform demonstrating bimanual fixture-augmented funneling.*

---

## Thesis Methodology & Core Contributions

In my thesis defense and publications, I formulated two complementary paradigms for conformant manipulation under physical uncertainty:

### 1. Plan Improvement (Fixture-Augmented Optimization)
- **Concept:** Augments deterministic, open-loop plans by adding **movable fixtures** (fences or guide structures) for the robot to push parts against.
- **Optimization:** Uses numerical optimization to solve for the ideal placement, geometry, and contact angles of fixtures, converting a high-variance insertion task into a deterministic funneling operation.

### 2. Planning by Construction (Belief-State Transition Search)
- **Concept:** Reformulates conformant planning directly as a belief-state search problem over non-parametric pose distributions $b(s) = P(s)$.
- **Physics Simulation & Supervised Learning:** Uses physics-based simulations (e.g., Box2D / Bullet) paired with supervised learning models to predict transition dynamics $P(b' \mid b, a)$ under contact interactions.
- **Uncertainty Reduction Guarantee:** Searches for action sequences $a \in \mathcal{A}$ that monotonically decrease belief state variance prior to final part insertion:
  $$\text{Support}(b_{t+1}) \subset \text{Support}(b_t)$$

---

## Thesis Defense Mascot: "Eric" the Robot

A fun highlight of my thesis defense presentation was **"Eric"**, a cartoon robot mascot based on Leslie P. Kaelbling's iconic stick figure drawings.

Throughout my defense, "Eric" illustrated key theoretical concepts:
- **"Blindfolded Eric":** Representing conformant planning—executing sensorless manipulation sequences where physical contact boundaries replace visual perception.
- **"Picketing Eric":** Depicting algorithmic edge cases where open-loop trajectories fail due to unmodeled friction or rotational torque.

---

## Belief State Visualization & Action Noise Characterization

A key extension of my thesis work focuses on empirical measurement and spatial visualization techniques for non-Gaussian action noise in robotic grasping, pushing, and placing operations.

![Belief State Overlay Visualization](/assets/research/phd/beliefoverlay.png)
*Figure 3: Algorithm belief-state overlay visualization depicting particle distributions and empirical contact confidence bounds during manipulation.*

### Experimental Protocol & Software Stack
To capture true physical noise profiles, I programmed the **Willow Garage PR2 robot** using **ROS, Python, and C++**:
- **Automated Execution & Mocap Sampling:** Designed automated test suites that repeatedly executed hundreds of grasping, sliding, and placing trajectories under high-precision Vicon motion capture tracking.
- **Empirical Distribution Fitting:** Fitted non-parametric probability distributions (Gaussian Mixture Models and Kernel Density Estimation) to empirical displacement data to characterize non-linear coupling between translational drift and rotational deflection.

---

## Experimental Benchmarks & Results

Physical experiments conducted on the **Willow Garage PR2 robot** proved that conformant planning yields order-of-magnitude improvements in assembly reliability:

| Benchmark Task | Standard Open-Loop Baseline | My Conformant Planning & Pushing | Performance Improvement |
| :--- | :--- | :--- | :--- |
| **Tetris Polyomino Placement** | **1.9%** success rate | **80.7%** success rate | **+78.8% (42x Increase)** |
| **Bimanual Fixture Assembly** | **< 5.0%** success rate | **85.2%** success rate | **+80.2%** |

---

## Key Takeaways

1. **Passive Physical Compliance over Active Sensing:** Environmental mechanics (fences, walls, and flat surfaces) act as zero-cost physical sensors to reduce pose uncertainty.
2. **Robustness Under Camera Occlusion:** Conformant planning achieves robust physical assembly under noisy real-world conditions where optical sensing fails due to end-effector occlusions.
3. **Spatial Noise Tools for Roboticists:** Empirical noise modeling and particle overlays provide actionable visual tools to diagnose and optimize stochastic contact planners.

---

## Thesis & Academic Citations

This research is published as part of my PhD dissertation at MIT CSAIL:

- **Thesis Title:** *Reliably Arranging Objects: A Conformant Planning Approach to Robot Manipulation*
- **Author:** Ariel S. Anders, PhD
- **Advisors:** Prof. Leslie Pack Kaelbling & Prof. Tomás Lozano-Pérez
- **Institution:** Massachusetts Institute of Technology (MIT), Department of Electrical Engineering and Computer Science (EECS), CSAIL
- **MIT DSpace Archive:** [1721.1/122822](https://dspace.mit.edu/handle/1721.1/122822)
- **Google Scholar Citation:** [Exact Scholar Citation](https://scholar.google.com/citations?view_op=view_citation&hl=en&user=NM6SfiEAAAAJ&citation_for_view=NM6SfiEAAAAJ:4DMP91E08xMC)
- **ICRA Conference Paper:** *Reliably Arranging Objects in Uncertain Domains*, IEEE ICRA 2018.
