---
title: "Learning a Strategy for Whole-Arm Grasping"
date: "2014-06-01"
readTime: 8
tags:
  - Whole-Arm Grasping
  - Bimanual Manipulation
  - Reinforcement Learning
  - Sensorimotor Control
  - Tactile Feedback
  - MIT CSAIL
category: "Robotics & AI"
summary: "Investigated tactile-driven, sensorimotor reinforcement learning policies for bimanual and whole-arm grasping of bulky, irregular objects under real-world physical uncertainty."
videoUrl: "https://www.youtube.com/watch?v=pmdjquZoJkE"
---

# Learning a Strategy for Whole-Arm Grasping

## MIT S.M. Thesis — Computer Science and Artificial Intelligence Laboratory (CSAIL)

**Author:** Ariel Anders
**Advisor:** Prof. Daniela Rus
**Institution:** Massachusetts Institute of Technology (MIT CSAIL)

---

## Demonstration Video

https://www.youtube.com/watch?v=pmdjquZoJkE

*Whole-arm and dual-arm contact-rich grasping demonstration on bulky irregular objects.*

---

## Executive Summary

Traditional robotic grasping relies heavily on high-precision end-effector fingertips and explicit 3D geometric models of target objects. However, when handling large, bulky, heavy, or irregularly shaped objects, end-effector fingertip grasps often fail due to torque constraints and narrow contact surfaces.

This Master's thesis investigated **whole-arm grasping**—a sensorimotor approach where a robot utilizes its entire upper limbs (forearms, upper arms, and torso) to envelope, cradle, and stabilize heavy or un-modeled items.

![Tactile sensor arrays and whole-arm grasping experimental setup](/assets/research/swag.jpg)
*Figure 1: Experimental setup featuring tactile sensor arrays and whole-arm grasping hardware configuration.*

---

## Technical Approach & Methodological Breakthroughs

### 1. Tactile-Driven Sensorimotor Control
- Integrated dense tactile array sensors along compliant arm surfaces to detect real-time contact pressure distribution.
- Developed sensorimotor feedback policies that react to slip, contact force vectors, and surface contours without requiring prior CAD models of target objects.

### 2. Reinforcement Learning for Contact-Rich Tasks
- Formulated whole-arm manipulation as a contact-rich Markov Decision Process (MDP).
- Trained policy networks to synthesize multi-joint trajectories that guide arm links into enveloping configurations while actively counteracting gravity and disturbance torques.

### 3. Bimanual Coordination Framework
- Coordinated dual-arm manipulators to execute complex whole-body hugs, lifts, and stabilization maneuvers.
- Evaluated physical interactions across various bulky everyday objects (boxes, spheres, irregular containers).

![Thesis Key Concepts Word Cloud](/assets/research/thesis_wordle.png)
*Figure 2: Key concepts word cloud summarizing whole-arm grasping, reinforcement learning, and sensorimotor control themes from the MIT S.M. thesis.*

---

## Reinforcement Learning Simulations

Simulation trials evaluated policy convergence across various contact conditions and object geometric profiles:

- [RL Simulation Run 1](https://www.youtube.com/watch?v=PIhXfWyNPzQ)
- [RL Simulation Run 2](https://www.youtube.com/watch?v=M5PbYaPY0RE)
- [RL Simulation Run 3](https://www.youtube.com/watch?v=8TKJiJnDOSo)
- [RL Simulation Run 4](https://www.youtube.com/watch?v=lnHDDjkWKfE)
- [RL Simulation Run 5](https://www.youtube.com/watch?v=s1vjsvnPfdc)
- [RL Simulation Run 6](https://www.youtube.com/watch?v=gf2vNOKEKXc)
- [RL Simulation Run 7](https://www.youtube.com/watch?v=bgHzqflrkCE)

---

## Physical Robot Demonstrations (PR2 Manipulator)

Physical experiments conducted on the PR2 robot platform validated sensorimotor trajectory execution and grasp stabilization:

- [PR2 Grasping Demonstration 1](https://www.youtube.com/watch?v=2mGN3ka_7i0)
- [PR2 Grasping Demonstration 2](https://www.youtube.com/watch?v=-V2KtcETAi8)
- [PR2 Grasping Demonstration 3](https://www.youtube.com/watch?v=QgoJKaoZ3dY)
- [PR2 Grasping Demonstration 4](https://www.youtube.com/watch?v=WfJ6xRo0Y9Y)

---

## Key Findings & Impact

- Demonstrated that whole-arm contact strategies significantly lower peak contact stress while multiplying payload capacity compared to fingertip pinch grasps.
- Formulated robust reactive policies capable of regaining grasp stability when target objects shift or slip unexpectedly during transport.
