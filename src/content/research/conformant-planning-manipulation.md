---
title: "Reliably Arranging Objects: A Conformant Planning Approach to Robot Manipulation"
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

This research forms the core of my PhD dissertation at **MIT CSAIL**, advised by **Prof. Leslie Pack Kaelbling** and **Prof. Tomás Lozano-Pérez**, with committee member **Prof. Sertac Karaman**. My work enables general-purpose helper robots to reliably arrange unanchored objects into desired target configurations despite severe pose uncertainty caused by inaccurate sensing, control errors, and unknown physical friction. If you are developing physical automation systems and seeking [autonomous systems advisory](https://arii.github.io/about), explore my consulting background and engineering experience.

[![Figure 1: Willow Garage PR2 robot performing physical conformant manipulation to arrange blocks into tight arrangements under pose uncertainty without visual feedback. | Watch Full Video Demonstration on YouTube ↗ | https://www.youtube.com/watch?v=omdHFeBBYZ0#no-embed](/assets/research/phd/icra_presentation.gif#max-w-2xl)](https://www.youtube.com/watch?v=omdHFeBBYZ0#no-embed)


---

### Approaches Explored

This research explores two distinct paradigms for conformant manipulation under severe uncertainty:

1. **Plan Improvement via Fixtures:** Optimizing open-loop trajectories using physical guide fences and contact dynamics to funnel parts into deterministic poses.
2. **Belief-State Search (Planning by Construction):** Formulating multi-step manipulation as a search over belief spaces, guaranteeing monotonic uncertainty reduction without real-time visual feedback.

The belief-state approach is detailed in our **ICRA 2018** paper:
* **Paper & Overview:** [Reliably Arranging Objects in the Real World (ICRA 2018) ↗](https://scholar.google.com/citations?view_op=view_citation&hl=en&user=NM6SfiEAAAAJ&citation_for_view=NM6SfiEAAAAJ:MXK_kJrjxJIC)

---

[![Figure 2: ICRA 2018 paper presentation and conference spotlight breakdown. | Watch Full Video Demonstration on YouTube ↗ | https://www.youtube.com/watch?v=so-9kkQXlxc#no-embed](/assets/research/phd/conformant_demo.gif#max-w-2xl)](https://www.youtube.com/watch?v=so-9kkQXlxc#no-embed)

---

## Part 1: Conformant Planning through Plan Improvement

When manipulators perform multi-step assembly or packaging tasks—such as placing 1-inch polyomino Tetris blocks into tight grid slots—small position and angle errors accumulate across sequential actions. Open-loop trajectory execution frequently fails because slight misalignments cause binding, jamming, or collision.

Furthermore, camera lines-of-sight are frequently obstructed by robot end-effectors or nearby fixtures. **Conformant planning** overcomes these perception dead-zones by synthesizing control strategies that apply contact mechanics (such as pushing, sliding, and funneling) to systematically reduce state uncertainty purely through physical interactions without requiring continuous visual feedback.

### Fixture-Augmented Trajectory Optimization
- **Concept:** Augments open-loop trajectories by introducing **movable fixtures** (fences or guide structures) for the robot to push parts against.
- **Optimization:** Solves for ideal fixture geometry, contact angles, and push trajectories, transforming high-variance placements into deterministic funnels.


#### Plan Improvement Video Breakdowns

### 1. Nominal Trajectory: Plan Improvement with Fixture Placement (1/3)

[![Nominal Trajectory: Plan Improvement with Fixture Placement | Watch Full Video Demonstration on YouTube ↗ | https://www.youtube.com/watch?v=MBsnNbD18tU#no-embed](/assets/research/phd/belief_1.gif#max-w-2xl)](https://www.youtube.com/watch?v=MBsnNbD18tU#no-embed)

* **Goal:** Execute planar assembly of disjoint block clusters into a single composite structure via non-prehensile pushing and fixturing.
* **Execution:** A linear pusher translates the lower cluster along an open-loop trajectory to mate seamlessly with the stationary upper target.
* **Outcome:** Demonstrates deterministic nominal kinematics in the absence of initial pose or actuation noise.

---

### 2. Failure Mode: Open-Loop Drift Under Uncertainty (2/3)

[![Failure Mode: Open-Loop Drift Under Uncertainty | Watch Full Video Demonstration on YouTube ↗ | https://www.youtube.com/watch?v=yjhySqcgLi4#no-embed](/assets/research/phd/belief_2.gif#max-w-2xl)](https://www.youtube.com/watch?v=yjhySqcgLi4#no-embed)

* **Perturbation:** Introduced stochastic noise into initial object poses and actuation dynamics.
* **Failure Mechanism:** Unconstrained degrees of freedom lead to compounding kinematic drift and premature rotation.
* **Outcome:** Assembly fails as the sub-assemblies scatter and miss contact interfaces without active state feedback.

---

### 3. Robust Execution: Passive Mechanical Funneling via Fixture Placement (3/3)

[![Robust Execution: Passive Mechanical Funneling via Fixture Placement | Watch Full Video Demonstration on YouTube ↗ | https://www.youtube.com/watch?v=ubUMq8Rnb18#no-embed](/assets/research/phd/refinement.gif#max-w-2xl)](https://www.youtube.com/watch?v=ubUMq8Rnb18#no-embed)

* **Strategy:** Augment the action space with static intermediate fixtures (e.g., L-brackets) along the configuration boundary.
* **Mechanism:** Fixtures act as physical invariant sets, passively arresting off-axis drift and squaring block orientations upon contact.
* **Outcome:** Re-establishes conformant convergence, guaranteeing monotonic support reduction ($\text{Support}(b_{t+1}) \subseteq \text{Support}(b_t)$) without sensor-in-the-loop control.
---

## Part 2: Conformant Planning by Construction (Belief-State Transition Search & Noise Characterization)

The second core paradigm formulates manipulation as an explicit forward search over non-parametric belief probability distributions `b(s) = P(s)`.

### Belief-State Transition Search
- **Concept:** Searches directly in belief space to find sequence of actions that guarantee bounded final pose uncertainty.
- **Dynamics:** Combines physics engines (Box2D / Bullet) with empirical transition models `P(b' | b, a)` under contact interactions.
- **Shrinkage Guarantee:** Identifies action sequences `a ∈ A` that guarantee monotonic support reduction prior to final insertion:

```text
Support(b_{t+1}) ⊆ Support(b_t)
```

![The initial object placement uncertainty for the PR2 robot was modeled as ±0.2 inches in both x and y coordinates and ±15 degrees in rotation based on physical experiment data](/assets/research/phd/sliding_2.gif) ![Six block arrangement task on PR2](/assets/research/phd/sixblock.png)
*Figure 3 & 4: Precision placement via contact funneling (left) and six-block arrangement setup on PR2 (right).*



### Belief State Overlay & Action Noise Characterization
To ground simulated transitions in physical reality, empirical noise characterization and spatial particle overlays visualize contact uncertainty during execution.

![Belief State Overlay Visualization](/assets/research/phd/sliding_1.gif#max-w-xl)
*Figure 10: Algorithm belief-state overlay depicting particle distributions and empirical contact confidence bounds during manipulation.*

### Table and Board Relative Localization Pipeline

- **Coarse Visual Estimation:** The PR2 performs initial obstacle and table-edge detection using point cloud data from the perception pipeline, broadcasting a coarse table-frame estimate via TF at 2–3 Hz.
- **Tactile Surface Exploration:** To resolve visual occlusions and calibration offsets, the robot switches to a compliant Cartesian controller, guiding its end-effector/paddle to slide directly against the rigid reference edges (e.g., the sides of the fixture/board).
- **Pose Registration & Transform Fitting:** By logging the contact trajectory along the physical boundaries, the system fits a rigid geometric transform, producing a high-precision spatial calibration between the PR2 base and the workspace.

[![Table and Board Relative Localization Pipeline | Watch Full Video Demonstration on YouTube ↗ | https://www.youtube.com/watch?v=bWjzn89H1x4#no-embed](/assets/research/phd/noise_model.gif#max-w-2xl)](https://www.youtube.com/watch?v=bWjzn89H1x4#no-embed)


---

## Citation & Thesis Downloads

### IEEE ICRA Paper & Dissertation Record
* **Thesis Title:** *Reliably Arranging Objects: A Conformant Planning Approach to Robot Manipulation*
* **Author:** Ariel S. Anders, PhD
* **Advisors:** Prof. Leslie Pack Kaelbling & Prof. Tomás Lozano-Pérez
* **Committee:** Prof. Sertac Karaman
* **Institution:** Massachusetts Institute of Technology (MIT CSAIL, 2019)
* **MIT DSpace Publication:** [MIT DSpace Record](https://dspace.mit.edu/entities/publication/d489a172-efbf-4e35-b81c-04e4acf3d24d)
* **Google Scholar:** [Citation Record](https://scholar.google.com/citations?view_op=view_citation&hl=en&user=NM6SfiEAAAAJ&citation_for_view=NM6SfiEAAAAJ:4DMP91E08xMC)
* **Conference Publication:** *Reliably Arranging Objects in Uncertain Domains*, IEEE International Conference on Robotics and Automation (ICRA), 2018.

### BibTeX Citation

```bibtex
@phdthesis{anders2019reliably,
  author       = {Anders, Ariel S.},
  title        = {Reliably Arranging Objects: A Conformant Planning Approach to Robot Manipulation},
  school       = {Massachusetts Institute of Technology},
  year         = {2019},
  url          = {https://dspace.mit.edu/entities/publication/d489a172-efbf-4e35-b81c-04e4acf3d24d}
}
```

---

## Defense Presentation & Visuals

![Eric the Robot Thesis Mascot](/assets/research/phd/eric.png#max-w-md)
*Figure 12: "Eric", the robot thesis mascot used to visually convey belief-state uncertainty and contact constraints.*

### Thesis Mascot: "Eric" the Robot
To communicate these theoretical planning concepts during the defense presentation and dissertation, I created graphics of **"Eric the red robot"**, a cartoon robot mascot inspired by Leslie's stick figures:
- **"Blindfolded Eric":** Illustrating sensorless manipulation sequences where physical contact boundaries replace visual perception.
- **"Picketing Eric":** Highlighting edge cases where open-loop trajectories fail due to unexpected friction or rotational torque.

![Blindfolded Eric mascot illustrating sensorless manipulation](/assets/research/phd/eric2.png#max-w-sm) ![Picketing Eric mascot illustrating open-loop failure modes](/assets/research/phd/eric1.png#max-w-sm)
*Figure 13 & 14: "Blindfolded Eric" demonstrating sensorless contact funnels (left) and "Picketing Eric" illustrating trajectory failure modes under friction (right).*
