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
videoUrl: "https://www.youtube.com/watch?v=rPpewHIF2KU"
---

# Duckietown: Autonomous Taxi Fleet

![Inaugural MIT 2.166 Duckietown Class](/assets/research/duckietown.jpg)

## Overview & Inaugural MIT 2.166 Class

**Duckietown** is an open-source, hands-on robotics platform created at MIT to make autonomy education accessible and standardized. The project features a fleet of miniature autonomous vehicles ("Duckiebots") navigating scaled urban environments ("Duckietowns") populated by rubber duck passengers.

I was a member of the inaugural MIT 2.166 class taking Duckietown as a student as part of my major requirements for my doctorate degree. Working directly on the platform in its founding year, I helped develop and test fundamental autonomous driving pipelines—including visual lane detection, state estimation, and multi-robot fleet coordination under real-world sensing constraints.

For more background on the class and its history:
- [MIT News: Self-driving cars, meet rubber duckies](https://news.mit.edu/2016/duckietown-self-driving-car-class-0420)
- [A Brief History of Duckietown](https://www.duckietown.org/about/history)

---

## Demonstrations & Fleet Videos

https://www.youtube.com/watch?v=rPpewHIF2KU

https://www.youtube.com/watch?v=HfS5Yj63H34

https://www.youtube.com/watch?v=YTB2FgN_4zo

*Duckiebots navigating lane markers, managing intersection traffic, and executing autonomous taxi dispatch across Duckietown road networks.*

---

## System Architecture & Technical Components

The Duckietown architecture integrates classical computer vision with real-time feedback control:

- **Monocular Vision & Lane Tracking:** Processing onboard single-camera input to detect line segments, fit road lane boundaries, and compute heading errors using color space transformations and Hough transforms.
- **State Estimation & Kinematics:** Utilizing differential-drive robot kinematics and extended Kalman filtering to estimate position relative to lane centerlines.
- **Intersection & Signal Navigation:** Detecting visual AprilTags at intersections to handle right-of-way rules, stop sign negotiation, and multi-robot traffic flow.
- **ROS Middleware Architecture:** Modular ROS nodes for camera pipelines, controller loops, motor PWM output, and inter-bot wireless state broadcasting.

---

## Impact & Educational Reach

Duckietown has grown into an international benchmark for robotics education and research competitions (such as the AI Driving Olympics). By providing a real-world testbed with physical uncertainties, lighting variations, and low-cost hardware limitations, it bridges the gap between simulated algorithms and deployed autonomous systems.
