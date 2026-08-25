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

This research forms the core of my PhD dissertation at **MIT CSAIL**, advised by **Prof. Leslie Pack Kaelbling** and **Prof. Tomás Lozano-Pérez**. My work enables general-purpose helper robots to reliably arrange unanchored objects into desired target configurations despite severe pose uncertainty caused by inaccurate sensing, control errors, and unknown physical friction.

![PR2 robot arranging Tetris blocks using conformant planning](/assets/research/phd/tetris1.png)
*Figure 1: PR2 robot performing conformant manipulation to arrange polyomino blocks into tight slots under pose uncertainty without visual feedback.*

* **Institution:** MIT CSAIL (Advisors: Prof. Leslie Pack Kaelbling & Prof. Tomás Lozano-Pérez)
* **Thesis Document:** [Download Thesis PDF (1125200388-MIT.pdf)](https://dspace.mit.edu/bitstream/handle/1721.1/122822/1125200388-MIT.pdf) | [MIT DSpace Thesis Record](https://dspace.mit.edu/handle/1721.1/122822)
* **Citation & Papers:** [Google Scholar Citation](https://scholar.google.com/citations?view_op=view_citation&hl=en&user=NM6SfiEAAAAJ&citation_for_view=NM6SfiEAAAAJ:4DMP91E08xMC) | IEEE ICRA 2018

---

## ICRA & Video Overview Breakdowns

Primary video overviews detailing the conformant planning framework, ICRA 2018 spotlight, and conference presentation.

https://www.youtube.com/watch?v=so-9kkQXlxc https://www.youtube.com/watch?v=omdHFeBBYZ0

*Figure 2 & 3: ICRA 2018 spotlight breakdown (left) and conference paper presentation (right).*

---

## Part 1: Conformant Planning Paradigms

When manipulators perform multi-step assembly or packaging tasks—such as placing 1-inch polyomino Tetris blocks into tight grid slots—small position and angle errors accumulate across sequential actions. Open-loop trajectory execution frequently fails because slight misalignments cause binding, jamming, or collision.

Furthermore, camera lines-of-sight are frequently obstructed by robot end-effectors or nearby fixtures. **Conformant planning** overcomes these perception dead-zones by synthesizing control strategies that leverage contact mechanics (such as pushing, sliding, and funneling) to systematically reduce state uncertainty purely through physical interactions without requiring continuous visual feedback.

### 1. Plan Improvement (Fixture-Augmented Optimization)
- **Concept:** Augments open-loop trajectories by introducing **movable fixtures** (fences or guide structures) for the robot to push parts against.
- **Optimization:** Solves for ideal fixture geometry, contact angles, and push trajectories, transforming high-variance placements into deterministic funnels.

![PR2 placing block with precision funneling](/assets/research/phd/placing.png) ![Six block arrangement task on PR2](/assets/research/phd/sixblock.png)
*Figure 4 & 5: Precision placement via contact funneling (left) and six-block arrangement setup (right).*

#### Video Breakdowns: Sliding & Plan Improvement

https://www.youtube.com/watch?v=lrLWu9uQNIk https://www.youtube.com/watch?v=EsfNJPkpheY

*Figure 6 & 7: Sliding alignment trajectories (left) and physical execution of plan improvement optimization (right).*

### 2. Planning by Construction (Belief-State Transition Search)
- **Concept:** Formulates manipulation as a forward search over non-parametric belief probability distributions `b(s) = P(s)`.
- **Dynamics:** Combines physics engines (Box2D / Bullet) with supervised models to predict transition distributions `P(b' | b, a)` under contact interactions.
- **Shrinkage Guarantee:** Identifies action sequences `a ∈ A` that guarantee monotonic support reduction prior to final insertion:

```text
Support(b_t+1) ⊆ Support(b_t)
```

#### Video Breakdowns: Planning & Funneling

https://www.youtube.com/watch?v=MBsnNbD18tU https://www.youtube.com/watch?v=yjhySqcgLi4

*Figure 8 & 9: Synthesized belief-state trajectory execution (left) and multi-block funneling sequence (right).*

---

## Part 2: Belief State Visualization & Action Noise Characterization

To ground simulated transitions in physical reality, the second major pillar of my thesis focuses on experimental noise characterization and spatial particle overlays for physical robot actions.

![Belief State Overlay Visualization](/assets/research/phd/beliefoverlay.png)
*Figure 10: Algorithm belief-state overlay depicting particle distributions and empirical contact confidence bounds during manipulation.*

### Experimental Protocol & Software Stack
To capture true physical noise profiles, I programmed the **Willow Garage PR2 robot** using **ROS, Python, and C++**:
- **Automated Vicon Motion Capture:** Designed automated pipelines that repeatedly executed hundreds of grasping, sliding, and placing trajectories under millimeter-accurate optical tracking.
- **Empirical Distribution Fitting:** Fitted non-parametric probability models (Gaussian Mixture Models and Kernel Density Estimation) to quantify the non-linear coupling between translational drift and rotational deflection.

#### Video Breakdowns: Sensing Noise & Action Characterization

https://www.youtube.com/watch?v=ubUMq8Rnb18 https://www.youtube.com/watch?v=bWjzn89H1x4

*Figure 11 & 12: Robust sliding under artificial pose noise (left) and Vicon motion tracking trials for non-parametric noise models (right).*

---

## Experimental Benchmarks & Results

Physical experiments conducted on the PR2 platform demonstrated that conformant planning yields dramatic improvements in assembly reliability:

| Benchmark Task | Standard Open-Loop Baseline | Conformant Planning & Pushing | Performance Improvement |
| :--- | :--- | :--- | :--- |
| **Tetris Polyomino Placement** | 1.9% | **80.7%** | **+78.8% (42x Increase)** |
| **Bimanual Fixture Assembly** | < 5.0% | **85.2%** | **+80.2%** |

---

## Defense Presentation & Visuals

![Eric the Robot Thesis Mascot](/assets/research/phd/eric.png)
*Figure 13: "Eric", the robot thesis mascot used to visually convey belief-state uncertainty and contact constraints.*

### Thesis Mascot: "Eric" the Robot
To communicate these theoretical planning concepts during my thesis defense presentation, I created **"Eric"**, a cartoon robot mascot inspired by my advisor Leslie's stick figures:
- **"Blindfolded Eric":** Illustrating sensorless manipulation sequences where physical contact boundaries replace visual perception.
- **"Picketing Eric":** Highlighting edge cases where open-loop trajectories fail due to unexpected friction or rotational torque.

---

## Key Takeaways

1. **Environmental Mechanics as Zero-Cost Sensors:** Physical boundaries and contact friction systematically collapse pose uncertainty without perception overhead.
2. **Occlusion Immunity:** Contact-driven strategies ensure high-tolerance placement when optical sensing is completely blocked by end-effectors.
3. **Actionable Noise Tooling:** Empirical belief-state overlays give roboticists clear diagnostic tools to validate stochastic contact models.

---

## Citation & Thesis Downloads

### IEEE ICRA Paper & Dissertation Record
* **Thesis Title:** *Reliably Arranging Objects: A Conformant Planning Approach to Robot Manipulation*
* **Author:** Ariel Anders
* **Advisors:** Prof. Leslie Pack Kaelbling & Prof. Tomás Lozano-Pérez
* **Institution:** MIT CSAIL (2019)
* **Direct PDF Download:** [1125200388-MIT.pdf](https://dspace.mit.edu/bitstream/handle/1721.1/122822/1125200388-MIT.pdf)
* **MIT DSpace Archive:** [1721.1/122822](https://dspace.mit.edu/handle/1721.1/122822)
* **Google Scholar:** [Citation Record](https://scholar.google.com/citations?view_op=view_citation&hl=en&user=NM6SfiEAAAAJ&citation_for_view=NM6SfiEAAAAJ:4DMP91E08xMC)
* **Conference Publication:** *Reliably Arranging Objects in Uncertain Domains*, IEEE International Conference on Robotics and Automation (ICRA), 2018.

### BibTeX Citation

```bibtex
@phdthesis{anders2019reliably,
  author       = {Anders, Ariel S.},
  title        = {Reliably Arranging Objects: A Conformant Planning Approach to Robot Manipulation},
  school       = {Massachusetts Institute of Technology},
  year         = {2019},
  url          = {https://dspace.mit.edu/handle/1721.1/122822}
}
```
