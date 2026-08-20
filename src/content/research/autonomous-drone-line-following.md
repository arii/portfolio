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
---

# Drone Line Following Autonomous Controller

## Closed-Loop Vision-Based Trajectory Tracking for Micro-Quadrotors

The **Drone Line Following Autonomous Controller** project involved engineering a real-time computer vision and state feedback control loop for a micro quadrotor (Parrot Rolling Spider) to autonomously detect, align with, and track floor-marked paths ("Follow the Yellow Brick Road").

---

## System Architecture & Control Loop

Autonomous flight using low-cost micro-drones poses severe real-time compute and sensor noise constraints. The control architecture separates path estimation from flight stabilization:

### 1. Vision Processing Pipeline
- **Downward Image Capture:** Captures low-latency ground-facing video frames.
- **Color Thresholding & HSV Masking:** Isolates target path markers from background floor textures.
- **Centroid & Orientation Estimation:** Computes lateral offset (cross-track error $e_y$) and heading error ($\psi$) relative to the path center line using image moments and Hough line transforms.

### 2. Cascaded PID Control Loop
- **Yaw Controller:** Modulates differential rotor torque to align heading with the detected line trajectory.
- **Lateral Roll Controller:** Modulates roll angle to drive cross-track error to zero.
- **Forward Velocity Controller:** Maintains a continuous forward velocity along straight path segments, slowing down dynamically when detecting sharp bends or curvature changes.

---

## Hardware & Flight Verification

- **Platform:** Parrot Rolling Spider micro quadrotor equipped with down-facing camera, pressure sensor, and ultrasonic altitude sensor.
- **Ground Station Interface:** Custom MATLAB/Simulink and Python communication link transmitting Bluetooth LE control packets at high refresh rates.
- **Experimental Results:** Successfully achieved closed-loop flight tracking across continuous curved paths, acute 90-degree turns, and intersecting line paths with reliable recovery from external aerodynamic disturbances.
