---
title: "Drone Line Following Autonomous Controller"
date: "2015-12-05"
readTime: 5
tags:
  - Robotics & Autonomy
  - Control Systems
  - Computer Vision
  - Drones
category: "Aerial Robotics & Control"
summary: "Feedback and Control Systems implementation using an onboard camera on a Rolling Spider Parrot drone to autonomously follow floor-marked paths."
videoUrl: "https://www.youtube.com/watch?v=f5l8GA1PHm8"
---

# Drone Line Following Autonomous Controller

## Closed-Loop Vision-Based Trajectory Tracking for Micro-Quadrotors

The **Drone Line Following Autonomous Controller** ("Follow the Yellow Brick Road") project was a collaborative effort with teammates Raghav Aggarwal, Julia Sokol, and Patrick Lowe to engineer a real-time computer vision and state feedback control loop for a micro quadrotor (Parrot Rolling Spider) to autonomously detect, align with, and track floor-marked paths.

![Parrot Rolling Spider Drone Setup and Line Following Flight](/assets/research/drone_follow.gif)
*Figure: Rolling Spider micro-drone executing closed-loop visual path tracking along yellow floor-marked trajectories. [Watch Full Video Demonstration on YouTube ↗](https://www.youtube.com/watch?v=f5l8GA1PHm8)*

---

## System Architecture & Control Loop

Autonomous flight using low-cost micro-drones poses severe real-time compute and sensor noise constraints. My primary contributions focused on the image processing architecture and integration into the Rolling Spider framework:

### 1. Offline Image Processing & Data Capture Pipeline
- **Yavta Integration:** Developed custom scripts utilizing the Yet Another V4L2 Test Application (`yavta`) to rapidly capture and download test images directly from the quadcopter.
- **Format Conversion & Testing:** Rendered images in JPEG and raw YUV formats, analyzing luminance (Y) components to separate line targets from varying floor textures without heavy RGB conversion overhead.
- **Pixel Offset Calculation:** Implemented a lightweight line detection algorithm iterating over pixel arrays to compute the position-wise pixel offset relative to the center line.

### 2. Cascaded Control & System Integration
- **Bang-Bang Controller Prototype:** Initially integrated the pixel offset algorithm into a bang-bang controller modifying `rsedu_vis.c` and `rsedu_control.c` to test custom input command streaming.
- **Refined Flight Controllers:** While the initial bang-bang approach served as a foundational proof-of-concept, teammates (Julia Sokol and Raghav Aggarwal) integrated more advanced PID controllers and yaw/position estimations to achieve stable trajectory tracking across continuous curved paths and sharp turns.

---

## Hardware & Flight Verification

- **Platform:** Parrot Rolling Spider micro quadrotor equipped with a down-facing camera, pressure sensor, and ultrasonic altitude sensor.
- **Ground Station Interface:** Custom MATLAB/Simulink and Python communication links transmitting control packets at high refresh rates.
- **Experimental Results:** Successfully achieved closed-loop flight tracking across continuous paths and distinct floor markers (such as yellow or black tape) with reliable state estimation.
