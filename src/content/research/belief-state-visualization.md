---
title: "Belief State Visualization & Action Noise Characterization"
date: "2021-05-20"
readTime: 6
tags:
  - Robotics
  - Research
  - PhD Thesis
category: "Robotics & Autonomy"
summary: "Experimental noise characterization of grasping/placing actions and algorithm belief-state overlays."
---

# Belief State Visualization & Action Noise Characterization

## Empirical Noise Modeling and Overlay Analytics for Robot Manipulation

**Belief State Visualization & Action Noise Characterization** presents the empirical measurement and spatial visualization techniques developed during Ariel Anders' PhD research at **MIT CSAIL**. The project provides tools for measuring, modeling, and visually diagnosing non-Gaussian action noise in robotic grasping, pushing, and placing operations.

---

## The Challenge of Action Uncertainty

Robotic planning algorithms under uncertainty (such as POMDPs and belief-space planners) rely on motion transition models $P(s' \mid s, a)$. In practice, real robot hardware incurs complex, asymmetric noise during contact interaction due to:
- End-effector compliance and finger joint friction
- Table-top surface friction variability
- Micro-slippage during jaw contact and release

Inaccurate noise assumptions lead either to overly conservative planners that stall or over-confident trajectory plans that fail catastrophically during execution.

---

## Experimental Noise Characterization Methodology

To capture true physical noise profiles, Ariel designed an automated empirical testing protocol using high-precision motion capture tracking:

### 1. Automated Execution & Mocap Sampling
- Repeatedly executed hundreds of grasping, sliding, and placing trajectories under controlled conditions using the Willow Garage PR2 robot.
- Measured initial vs final object poses in 6-DOF using an overhead motion capture array.

### 2. Empirical Distribution & Kernel Density Fitting
- Fitted non-parametric probability distributions (Gaussian Mixture Models and Kernel Density Estimation) to empirical displacement data.
- Characterized non-linear coupling between translational drift and rotational deflection during push-grasp operations.

---

## Belief State Overlay Visualizations

To help robotics researchers inspect, debug, and validate conformant planning algorithms, Ariel developed spatial belief overlay tools:

- **Particle Cloud Rendering:** Overlays predicted 3D object pose belief particles directly onto live robot camera feeds.
- **Uncertainty Ellipsoid Contours:** Visualizes confidence bounds of physical contact funnels in real time.
- **Planner vs Actual Comparison:** Highlights divergence between predicted belief distributions and empirical trajectory scatter plots.

---

## Research Impact & Thesis Integration

This work provided the experimental foundations for physics-based conformant manipulation planners developed at MIT CSAIL.

- **PhD Thesis Reference:** *Reliably Arranging Objects: Conformant Planning for Robot Manipulation*
- **Institution:** Massachusetts Institute of Technology (MIT)
- **DSpace Repository:** [1721.1/122822](https://dspace.mit.edu/handle/1721.1/122822)
