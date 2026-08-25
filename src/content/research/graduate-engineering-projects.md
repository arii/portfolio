---
title: "Graduate Engineering Projects"
date: "2015-12-05"
readTime: 12
tags:
  - Robotics
  - Machine Learning
  - Hardware Acceleration
  - MIT
category: "Graduate Engineering"
summary: "A showcase of advanced graduate-level engineering systems developed at MIT. These projects span real-time computer vision control, ordinal machine learning ranking, and parameterized hardware accelerators built using Bluespec SystemVerilog."
---

# Graduate Engineering Projects

A showcase of advanced graduate-level engineering systems developed at MIT. These projects span real-time computer vision control, ordinal machine learning ranking, and parameterized hardware accelerators built using Bluespec SystemVerilog.

---

## 1. Autonomous Quadrotor Control — MIT 16.30 / 16.31 (C / MATLAB)

### Designing Closed-Loop Vision Trajectory Tracking for Micro-Quadrotors

The **Drone Line Following Autonomous Controller** ("Follow the Yellow Brick Road") project was a collaborative effort with teammates Raghav Aggarwal, Julia Sokol, and Patrick Lowe to engineer a real-time computer vision and state feedback control loop for a micro quadrotor (Parrot Rolling Spider) to autonomously detect, align with, and track floor-marked paths.

[![Parrot Rolling Spider Drone Setup and Line Following Flight](/assets/research/drone_follow.gif)](https://www.youtube.com/watch?v=f5l8GA1PHm8#no-embed)
*Figure: Rolling Spider micro-drone executing closed-loop visual path tracking along yellow floor-marked trajectories. [Watch Full Video Demonstration on YouTube ↗](https://www.youtube.com/watch?v=f5l8GA1PHm8#no-embed)*

### System Architecture & Control Loop

Autonomous flight using low-cost micro-drones poses severe real-time compute and sensor noise constraints. My primary contributions focused on the image processing architecture and integration into the Rolling Spider framework:

#### A. Offline Image Processing & Data Capture Pipeline
- **Yavta Integration:** Developed custom scripts utilizing the Yet Another V4L2 Test Application (`yavta`) to rapidly capture and download test images directly from the quadcopter.
- **Format Conversion & Testing:** Rendered images in JPEG and raw YUV formats, analyzing luminance (Y) components to separate line targets from varying floor textures without heavy RGB conversion overhead.
- **Pixel Offset Calculation:** Implemented a lightweight line detection algorithm iterating over pixel arrays to compute the position-wise pixel offset relative to the center line.

#### B. Cascaded Control & System Integration
- **Bang-Bang Controller Prototype:** Initially integrated the pixel offset algorithm into a bang-bang controller modifying `rsedu_vis.c` and `rsedu_control.c` to test custom input command streaming.
- **Refined Flight Controllers:** While the initial bang-bang approach served as a foundational proof-of-concept, teammates (Julia Sokol and Raghav Aggarwal) integrated more advanced PID controllers and yaw/position estimations to achieve stable trajectory tracking across continuous curved paths and sharp turns.

### Hardware & Flight Verification

- **Platform:** Parrot Rolling Spider micro quadrotor equipped with a down-facing camera, pressure sensor, and ultrasonic altitude sensor.
- **Ground Station Interface:** Custom MATLAB/Simulink and Python communication links transmitting control packets at high refresh rates.
- **Experimental Results:** Successfully achieved closed-loop flight tracking across continuous paths and distinct floor markers (such as yellow or black tape) with reliable state estimation.

---

## 2. Bounding Box Reranking — MIT 6.867 Machine Learning (Python)

### Evaluating Learning Algorithms for Bounding Box Reranking

This research project, completed for **6.867 Machine Learning** at MIT in collaboration with Sanja Popovic, evaluated learning algorithms to improve object detection ranking and scoring used by the **Learning and Intelligent Systems (LIS) group**.

### Core Problem & Approach

Object detection systems used in mobile robotic manipulation frequently yield imperfect candidate bounding boxes. Standard regression models fail to account for relative ranking preferences across candidate detections.

Key technical highlights:
1. **Ordinal Regression:** Formulated pairwise loss functions to prioritize high-precision detection candidates over background noise.
2. **P-Norm Push:** Implemented the P-norm push ranking algorithm to enforce strict top-rank accuracy for target manipulation objects.
3. **Experimental Validation:** Evaluated bounding box confidence scoring across real-world cluttered kitchen environments.

- 📄 [Download Machine Learning Technical Report (PDF)](https://raw.githubusercontent.com/arii/arii.github.io/main/reports/report_ml.pdf)

### Key Results

- Demonstrated significant ranking accuracy improvements over standard linear regression baseline models.
- Established optimal feature representation strategies for bounding box candidate reranking in robotic manipulation.

---

## 3. Parameterized Cryptographic Accelerator — MIT 6.375 Complex Digital Systems (Bluespec SystemVerilog)

### Implementing Parameterized Montgomery Modular Arithmetic

Developed for **MIT 6.375 Complex Digital Systems**, this hardware design project (in collaboration with Timur Balbekov and Neil Forrester) implemented a high-performance, parameterized **Hardware RSA Accelerator** using **Bluespec SystemVerilog (BSV)**.

### Architecture & Hardware Specification

RSA public-key cryptography relies on modular exponentiation over large integers, which is computationally expensive in software.

Key architecture features:
1. **Montgomery Modular Multiplication:** Accelerated large integer modular arithmetic while eliminating expensive division steps.
2. **Pipelined Datapath:** Parameterized bit-width datapath allowing custom throughput/area trade-offs.
3. **BSV Rule Synthesizability:** Modeled concurrency using guarded atomic actions to ensure deadlock-free hardware execution.

- 📄 [Download Hardware RSA Accelerator Report (PDF)](https://raw.githubusercontent.com/arii/arii.github.io/main/reports/report_6375.pdf)

### Project Significance

- Achieved efficient cycle-accurate execution for multi-hundred bit RSA key processing on FPGA target platforms.
- Validated hardware verification methodologies for formal safety in cryptographic hardware modules.
