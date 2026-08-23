---
title: "Reliably Arranging Objects: Conformant Planning under Severe Uncertainty"
date: "2019-06-01"
readTime: 10
tags:
  - PR2
  - Conformant Planning
  - Belief State
  - Manipulation
  - MIT CSAIL
category: "Robotics & AI"
summary: "Conformant planning approach to reliable robot manipulation under severe sensing and control uncertainty. Combines fixture-augmented plan optimization and physics-driven belief state transitions to elevate assembly reliability from 1.9% to 80.7% on a PR2 robot."
videoUrl: "https://www.youtube.com/watch?v=so-9kkQXlxc&list=PLEcASxU_mgVi6kMdElumAUh-gJW4wCOUV"
---

# Reliably Arranging Objects

## MIT Ph.D. Dissertation — Computer Science and Artificial Intelligence Laboratory (CSAIL)

**Author:** Ariel Anders, Ph.D.
**Advisor:** Prof. Leslie Pack Kaelbling & Prof. Tomás Lozano-Pérez
**Institution:** Massachusetts Institute of Technology (MIT CSAIL)

---

## Abstract & Research Motivation

Autonomous robotic assembly in unconstrained real-world environments is severely constrained by visual occlusion, sensor noise, and actuation inaccuracy. Standard open-loop pick-and-place plans fail catastrophically when tolerances are tight—a single millimeter of alignment error can jam a peg or knock over a multi-block structure.

This doctoral dissertation introduces a **conformant planning framework** that enables autonomous robots (such as the Willow Garage PR2) to execute complex, multi-stage object arrangements with high reliability **without relying on real-time external visual sensing during execution**.

---

## Demonstration Video

https://www.youtube.com/watch?v=so-9kkQXlxc&list=PLEcASxU_mgVi6kMdElumAUh-gJW4wCOUV

*ICRA 2018 Spotlight Video demonstrating PR2 robot executing conformant planning manipulation without vision feedback.*

---

## Key Experimental Results

By leveraging physics-driven environmental interactions and passive fixtures (such as corners, guide plates, and pushing motions), the developed conformant planning algorithm drastically improved assembly task success rates across multi-block Tetris structure trials:

| Planning Approach | Success Rate | Alignment Error |
| :--- | :--- | :--- |
| **Open-Loop Baseline** | **1.9%** | Severe cumulative drift / Collapses |
| **Conformant Plan (Ours)** | **80.7%** | Sub-millimeter precision via funneling |

---

## Core Technical Contributions

### 1. Fixture-Augmented Conformant Motion Planning
- Formulates multi-body assembly actions that use physical surfaces and fixtures as "funnels" to collapse belief state uncertainty.
- Pushing an object against a wall or corner reduces pose uncertainty down to mechanical alignment tolerances without requiring camera feedback.

### 2. Belief State Optimization & Simulation Filtering
- Computes probability distribution over possible object poses (belief state transitions).
- Evaluates sequence candidates in physics simulators (Bullet/ODE) to select trajectory pipelines that guarantee set convergence despite initial pose variance.

### 3. Real-World Execution on PR2 Manipulator
- Validated on a 2-arm PR2 robot performing intricate multi-block assembly tasks (Tetris-style block placement, box packing, and multi-stage stacking).
- Demonstrated robust execution across hundreds of physical experimental trials under severe artificial pose noise.
