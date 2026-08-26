---
title: "MIT Duckietown (Autonomous Taxi Fleet)"
date: "2016-05-01"
readTime: 5
tags:
  - Robotics & Autonomy
  - Computer Vision
  - Lane Tracking
  - ROS
  - Multi-Agent
  - MIT
category: "Robotics & Autonomy"
summary: "An open-source, low-cost robotics education and research platform for autonomous driving, multi-agent fleet coordination, and lane tracking for rubber ducks."
videoUrl: "[![Duckietown Autonomous Driving Demonstration 1 | Watch Full Video Demonstration on YouTube ↗ | https://www.youtube.com/watch?v=rPpewHIF2KU#no-embed](/assets/research/duckietown/navigation_1.gif#max-w-2xl)](https://www.youtube.com/watch?v=rPpewHIF2KU#no-embed)"
---

# Duckietown: Autonomous Taxi Fleet

![Inaugural MIT 2.166 Duckietown Class](/assets/research/duckietown.jpg)

## Overview & Inaugural MIT 2.166 Class

**Duckietown** is an open-source, hands-on robotics platform created at MIT to make autonomy education accessible and standardized. The project features a fleet of miniature autonomous vehicles ("Duckiebots") navigating scaled urban environments ("Duckietowns") populated by rubber duck passengers.

I was a member of the inaugural MIT 2.166 class taking Duckietown as a student as part of my major requirements for my doctorate degree. Working directly on the platform in its founding year, I helped develop and test fundamental autonomous driving pipelines—including visual lane detection, state estimation, and multi-robot fleet coordination under real-world sensing constraints. This pedagogical framework has grown from our initial MIT classroom cohorts into an international benchmark for robotics education and research competitions (such as the AI Driving Olympics), bridging the gap between clean simulated environments and deployed autonomous systems characterized by physical uncertainties and low-cost hardware limitations.

For more background on the class and its history:
- [MIT News: Self-driving cars, meet rubber duckies](https://news.mit.edu/2016/duckietown-self-driving-car-class-0420)
- [A Brief History of Duckietown](https://www.duckietown.org/about/history)

## System Architecture & Technical Components

The Duckietown platform represents a powerful integration of classical computer vision, real-time feedback control, and hands-on robotics education. By translating complex autonomous driving concepts into a standardized, low-cost physical testbed, it bridges the gap between simulated environments and deployed autonomous systems characterized by physical uncertainties.

The modular software architecture utilizes a distributed ROS (Robot Operating System) stack:

- **Monocular Vision & Lane Tracking:** Processing onboard single-camera input to detect line segments, fit road lane boundaries, and compute heading errors using color space transformations and Hough transforms.
- **State Estimation & Kinematics:** Utilizing differential-drive robot kinematics and extended Kalman filtering to estimate position relative to lane centerlines.
- **Intersection & Signal Navigation:** Detecting visual AprilTags at intersections to handle right-of-way rules, stop sign negotiation, and multi-robot traffic flow.
- **ROS Middleware Architecture:** Modular ROS nodes for camera pipelines, controller loops, motor PWM output, and inter-bot wireless state broadcasting.
- **Classroom Easter Eggs & Quirks:** 
  - *Accidental Duck Detection:* The color-segmentation pipeline engineered specifically to isolate orange traffic cones unexpectedly cross-detected the rubber duck fleet passengers by locking perfectly onto their bright orange beaks.
  - *Midnight Calibration Quirks:* The initial baseline tuning thresholds for visual lane detection and line-following control were over-optimized during late-night engineering sessions in the laboratory, meaning the system only successfully worked in evening lighting conditions.

---

## Demonstrations & Fleet Videos

Every Duckiebot started its journey as a disassembled kit of raw components. Before deployable autonomy could be developed, we had to assemble the differential-drive chassis, interface the Raspberry Pi and motor controller shields, and calibrate the open-loop motor velocities.

### Phase 1: Hardware Assembly & Open-Loop Calibration

Our initial milestone was the physical assembly and electrical integration of the robot chassis. Once the hardware setup was completed, we focused on calibrating the pulse-width modulation (PWM) signals to align the raw motor outputs, ensuring the robot would drive in a straight line during open-loop tests.

[![First Functional Build Verification (Oreo) | Watch Full Video Demonstration on YouTube ↗ | https://www.youtube.com/watch?v=YTB2FgN_4zo#no-embed](/assets/research/duckietown/oreo_wheelie.gif#max-w-2xl)](https://www.youtube.com/watch?v=YTB2FgN_4zo#no-embed)

Initial hardware test of my personal Duckiebot, affectionately named Oreo, immediately following its first complete assembly. The video documents an unexpected wheelie milestone during early open-loop motor calibration.

---

### Phase 2: Isolated Visual Perception & Color Segmentation

With the physical robot calibrated, we transitioned to developing the visual perception pipelines. Before establishing closed-loop control, we isolated and verified our color-segmentation algorithms, tuning visual threshold filters to detect orange features under variable classroom lighting conditions.

[![Standalone Obstacle Isolation | Watch Full Video Demonstration on YouTube ↗ | https://www.youtube.com/watch?v=HfS5Yj63H34#no-embed](/assets/research/duckietown/navigation_2.gif#max-w-2xl)](https://www.youtube.com/watch?v=HfS5Yj63H34#no-embed)

Demonstration of a custom color-segmentation pipeline originally tuned for orange traffic cones, which successfully cross-detects rubber duck obstacles via their orange beaks.

---

### Phase 3: Fully Integrated Closed-Loop Control & Avoidance

This phase showcases the full integration of the individual perception and control stacks driving in closed-loop. The system links the real-time vision-based lane tracking pipeline directly with a proportional-derivative (PD) heading controller, while concurrently running the standalone obstacle detector to trigger a reactive safety override whenever a hazard appears.

[![Fully Integrated Autonomous Lane Following & Avoidance | Watch Full Video Demonstration on YouTube ↗ | https://www.youtube.com/watch?v=rPpewHIF2KU#no-embed](/assets/research/duckietown/navigation_1.gif#max-w-2xl)](https://www.youtube.com/watch?v=rPpewHIF2KU#no-embed)

Demonstration of the combined lines-and-obstacle pipeline working in tandem to maintain lane centerlines while reliably executing safety-stops for proximity hazards.
