---
title: "Learning a Strategy for Whole-Arm Grasping"
date: "2014-06-01"
readTime: 6
tags:
  - Whole-Arm Grasping
  - Bimanual Manipulation
  - Reinforcement Learning
  - Policy Search
  - Manipulation Under Uncertainty
  - MIT CSAIL
category: "Robotics & AI"
summary: "My Master's thesis on learning robust whole-arm and bimanual grasping policies to cradle and secure bulky, unmodeled objects under physical and pose uncertainty."
pdfUrl: "https://raw.githubusercontent.com/arii/arii.github.io/main/reports/report_ml.pdf"
---

## MIT S.M. Thesis — Computer Science and Artificial Intelligence Laboratory (CSAIL)

* **Author:** Ariel Anders
* **Advisors:** Prof. Leslie Pack Kaelbling & Prof. Tomás Lozano-Pérez
* **Institution:** Massachusetts Institute of Technology (MIT CSAIL)

---

## Project Overview

Traditional robotic grasping separates the problem into two distinct stages: finding optimal contact points for the fingertips and planning collision-free trajectories to reach them. While effective for small items with known CAD models, this approach breaks down when handling large, heavy, or irregularly shaped objects where fingertip pinch grasps lack the required torque and contact area.

I formulated a framework for **whole-arm grasping**. Instead of restricting contact to end-effectors, I enabled the robot to use its full kinematic chain—forearms, upper arms, and torso—to envelope, scoop, and cradle unmodeled objects under physical and pose uncertainty.

![Whole-arm grasping experimental setup](/assets/research/swag.jpg)
*Figure 1: Experimental setup and kinematics for whole-arm grasping on the PR2 platform.*

---

## Technical Approach & Methodology

### 1. Unified Policy Formulation
* Replaced the decoupled grasp-then-plan paradigm with a policy search formulation that directly maps object states and robot configurations into coordinated multi-joint trajectories.
* Optimized motions over a distribution of object poses and geometries to ensure robustness without requiring high-precision 3D reconstruction.

### 2. Reinforcement Learning for Whole-Arm Envelopment
* Formulated the enveloping and lifting sequence as a policy optimization problem.
* Trained policies in physics simulation to discover dynamic multi-joint motions that cradle objects against the robot's body while managing contact constraints and gravity.

### 3. Bimanual & Torso Coordination
* Coordinated dual-arm trajectories and torso positioning to execute complex enveloping maneuvers on bulky everyday items (boxes, spheres, and irregular containers).
* Transferred my learned simulation policies directly to the physical Willow Garage PR2 platform.

![Thesis Key Concepts Word Cloud](/assets/research/thesis_wordle.png)
*Figure 2: Word cloud highlighting core themes from my MIT S.M. thesis research.*

---

## Reinforcement Learning Simulations

Simulation trials evaluating policy convergence, trajectory generation, and stability across object dimensions and initial offsets:

* **RL Simulation Run 1**
  [![RL Simulation Run 1 | Watch Full Video Demonstration on YouTube ↗ | https://www.youtube.com/watch?v=PIhXfWyNPzQ#no-embed](/assets/research/masters-thesis/rl_sim_1.gif#max-w-xl)](https://www.youtube.com/watch?v=PIhXfWyNPzQ#no-embed)
* **RL Simulation Run 2**
  [![RL Simulation Run 2 | Watch Full Video Demonstration on YouTube ↗ | https://www.youtube.com/watch?v=M5PbYaPY0RE#no-embed](/assets/research/masters-thesis/rl_sim_2.gif#max-w-xl)](https://www.youtube.com/watch?v=M5PbYaPY0RE#no-embed)
* **RL Simulation Run 3**
  [![RL Simulation Run 3 | Watch Full Video Demonstration on YouTube ↗ | https://www.youtube.com/watch?v=8TKJiJnDOSo#no-embed](/assets/research/masters-thesis/rl_sim_3.gif#max-w-xl)](https://www.youtube.com/watch?v=8TKJiJnDOSo#no-embed)
* **RL Simulation Run 4**
  [![RL Simulation Run 4 | Watch Full Video Demonstration on YouTube ↗ | https://www.youtube.com/watch?v=lnHDDjkWKfE#no-embed](/assets/research/masters-thesis/rl_sim_4.gif#max-w-xl)](https://www.youtube.com/watch?v=lnHDDjkWKfE#no-embed)
* **RL Simulation Run 5**
  [![RL Simulation Run 5 | Watch Full Video Demonstration on YouTube ↗ | https://www.youtube.com/watch?v=s1vjsvnPfdc#no-embed](/assets/research/masters-thesis/rl_sim_5.gif#max-w-xl)](https://www.youtube.com/watch?v=s1vjsvnPfdc#no-embed)
* **RL Simulation Run 6**
  [![RL Simulation Run 6 | Watch Full Video Demonstration on YouTube ↗ | https://www.youtube.com/watch?v=gf2vNOKEKXc#no-embed](/assets/research/masters-thesis/rl_sim_6.gif#max-w-xl)](https://www.youtube.com/watch?v=gf2vNOKEKXc#no-embed)

---

## Physical Robot Experiments (PR2 Platform)

Validation of my learned whole-arm manipulation policies on the physical PR2:

* **PR2 Grasping Demonstration 1**
  [![PR2 Grasping Demonstration 1 | Watch Full Video Demonstration on YouTube ↗ | https://www.youtube.com/watch?v=2mGN3ka_7i0#no-embed](/assets/research/masters-thesis/pr2_grasp_1.gif#max-w-xl)](https://www.youtube.com/watch?v=2mGN3ka_7i0#no-embed)
* **PR2 Grasping Demonstration 2**
  [![PR2 Grasping Demonstration 2 | Watch Full Video Demonstration on YouTube ↗ | https://www.youtube.com/watch?v=-V2KtcETAi8#no-embed](/assets/research/masters-thesis/pr2_grasp_2.gif#max-w-xl)](https://www.youtube.com/watch?v=-V2KtcETAi8#no-embed)
* **PR2 Grasping Demonstration 3**
  [![PR2 Grasping Demonstration 3 | Watch Full Video Demonstration on YouTube ↗ | https://www.youtube.com/watch?v=QgoJKaoZ3dY#no-embed](/assets/research/masters-thesis/pr2_grasp_3.gif#max-w-xl)](https://www.youtube.com/watch?v=QgoJKaoZ3dY#no-embed)
* **PR2 Grasping Demonstration 4**
  [![PR2 Grasping Demonstration 4 | Watch Full Video Demonstration on YouTube ↗ | https://www.youtube.com/watch?v=bgHzqflrkCE#no-embed](/assets/research/masters-thesis/pr2_grasp_4.gif#max-w-xl)](https://www.youtube.com/watch?v=bgHzqflrkCE#no-embed)

---

## Key Takeaways

* **Form-Closure Caging Over Precision Points:** Enveloping objects with the full arm structure creates robust form-closure and support surfaces, bypassing the need for exact fingertip friction modeling.
* **Payload Scaling:** Utilizing the arms and torso distributes load and joint torques, enabling manipulation of items far exceeding standard PR2 gripper payload limits.
