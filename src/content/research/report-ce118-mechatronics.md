---
title: "Autonomous Mechatronic Systems (MAK Attack)"
date: "2012-03-19"
readTime: 5
tags:
  - Mechatronics
  - Robotics
  - State Machines
  - Embedded C
  - UCSC
category: "Mechatronics"
summary: "Autonomous mobile robot designed for arena navigation, event detection state machines, and obstacle engagement."
pdfUrl: "https://raw.githubusercontent.com/arii/arii.github.io/main/reports/report_ce118.pdf"
videoUrl: "https://www.youtube.com/watch?v=qSe8JmWQnYk"
playlistUrl: "https://www.youtube.com/playlist?list=PLEcASxU_mgVgnMZvVHgrTGFMUXze0MiOp"
---

# CMPE-118 An Introduction to Mechatronics: MAK Attack

## Autonomous Robotic Platform at UC Santa Cruz

In **CMPE-118 Introduction to Mechatronics** at UC Santa Cruz, my team (Matthew Luxton, Kyle Huey, and I) designed, constructed, and programmed **MAK Attack**—an autonomous mobile robot built to solve real-time arena navigation and object manipulation challenges under strict operational deadlines.

![MAK Attack Autonomous Mechatronic Robot](/assets/research/report-ce118-mechatronics/mak_attack_robot.png)
*Figure 1: The MAK Attack autonomous mobile robot platform, highlighting optical sensors, bumper switches, and custom motor drive electronics.*

---

## Technical Design & System Architecture

Building MAK Attack required integrating custom mechanical fabrication, analog sensor signal conditioning, and low-level embedded C software into a unified autonomous platform.

Key technical contributions included:

1. **Hierarchical State Machines:** Formulated robust hierarchical state machines (HSMs) in C to handle line tracking, arena obstacle evasion, ball collection, and goal targeting.
2. **Sensor Conditioning & Debouncing:** Designed signal conditioning circuits for infrared optical sensors, contact bumper switches, and shaft encoders to ensure clean digital inputs to the microcontroller.
3. **Power Electronics & Motor Control:** Constructed MOSFET H-bridge drive circuits with pulse-width modulation (PWM) speed regulation and power isolation.

![Hierarchical Event State Machine](/assets/research/report-ce118-mechatronics/hierarchical_state_machine.png)
*Figure 2: Hierarchical event-driven state machine architecture governing autonomous robot behavior during arena trials.*

---

## Outcomes & Demonstration

- **Flawless Arena Execution:** Achieved 100% operational reliability during the final autonomous arena competition challenge.
- **Cross-Disciplinary Integration:** Successfully unified mechanical chassis design, electrical hardware debugging, and real-time firmware execution.

---

## Media & Report Downloads

- ▶️ [Watch MAK Attack Line Following Robot Video](https://www.youtube.com/watch?v=qSe8JmWQnYk)
- 📺 [Browse Robotics Demos Playlist](https://www.youtube.com/playlist?list=PLEcASxU_mgVgnMZvVHgrTGFMUXze0MiOp)
- 📄 [Download Mechatronics Lab Report (PDF)](https://raw.githubusercontent.com/arii/arii.github.io/main/reports/report_ce118.pdf)
