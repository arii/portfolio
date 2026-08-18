---
title: "CAD/CAM Robotic Dental Crowning Workflow"
date: "2014-06-01"
readTime: 5
tags:
  - Robotics
  - Medical UI
  - CAD/CAM
  - Bionics Lab UCSC
category: "Medical Robotics"
summary: "Robotic UI and verified experimental workflows for autonomous dental crowning."
---

# CAD/CAM Robotic Dental Crowning Workflow

## Autonomous Surgical Robotics at Bionics Lab UCSC

The **CAD/CAM Robotic Dental Crowning Workflow** was an advanced medical robotics initiative conducted at the **Bionics Lab, University of California, Santa Cruz (UCSC)**. The project focused on developing interactive user interfaces and trajectory planning workflows for semi-autonomous robotic dental restoration.

---

## Technical Context & Surgical Challenge

Traditional dental crowning involves manual tooth preparation, impression molding, and off-site milling—a multi-visit process prone to human error and fit discrepancies. Integrating industrial 6-DOF robotic arms with CAD/CAM dental scanning allows sub-millimeter precision during enamel preparation and crown alignment.

Key engineering challenges included:
1. **Interactive Trajectory Planning:** Translating 3D intraoral CAD scans into collision-free robotic milling toolpaths.
2. **Safety-Critical UI:** Providing real-time visual feedback and manual override controls for operating clinicians.
3. **Sub-Millimeter Motion Execution:** Maintaining tight tolerance limits on tooth preparation boundaries without damaging surrounding tissue.

---

## Systems Architecture & Engineering Contributions

Ariel engineered key control UI software and trajectory validation scripts:

### 1. Robotic Interface & Control Console
- Built a custom graphical user interface enabling dental surgeons to review CAD surface meshes, define target crowning margins, and inspect planned toolpaths prior to execution.
- Implemented real-time joint-space position monitoring and emergency stop integration.

### 2. Experimental Verification & Benchmarking
- Configured 6-DOF robotic manipulator trajectories to perform automated enamel removal on anatomical dental phantom models.
- Verified removal depth accuracy using 3D laser scanners, confirming sub-millimeter geometric accuracy across experimental crowning trials.

---

## Research Significance

- Demonstrated the feasibility of semi-autonomous robotic assistance in chairside dental restoration.
- Laid foundational UI and control patterns for safe clinician-in-the-loop surgical robotic procedures.
