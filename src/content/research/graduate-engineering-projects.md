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

A showcase of advanced graduate-level engineering systems developed at MIT. These projects span real-time computer vision control, ordinal machine learning ranking, and parameterized hardware accelerators built using Bluespec SystemVerilog.

---

## 1. Autonomous Quadrotor Control — MIT 16.30 / 16.31 (C / MATLAB)

### Designing Closed-Loop Vision Trajectory Tracking for Micro-Quadrotors

The **Drone Line Following Autonomous Controller** ("Follow the Yellow Brick Road") project was a collaborative effort with teammates Raghav Aggarwal, Julia Sokol, and Patrick Lowe to engineer a real-time computer vision and state feedback control loop for a micro quadrotor (Parrot Rolling Spider) to autonomously detect, align with, and track floor-marked paths.

[![Rolling Spider micro-drone executing closed-loop visual path tracking along yellow floor-marked trajectories. | Watch Full Video Demonstration on YouTube ↗ | https://www.youtube.com/watch?v=f5l8GA1PHm8#no-embed](/assets/research/drone_follow.gif)](https://www.youtube.com/watch?v=f5l8GA1PHm8#no-embed)

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

In this research project for **6.867 Machine Learning** at MIT CSAIL, my teammate Sanja Popovic and I evaluated learning algorithms to refine object detection ranking and confidence scoring for the **Learning and Intelligent Systems (LIS) group**.

![Distance discrepancy decay functions evaluated to transform spatial offsets into bounding box confidence scores.](/assets/research/report-ml-lis/fig1_score_discrepancy.png)

### Core Problem & Approach

Object detection models running on mobile manipulation platforms frequently generate dozens of candidate bounding boxes around cluttered household items. Standard linear regression models treat candidate confidence as absolute values, failing to prioritize relative ranking order—which often leads the robot to attempt grasps on low-confidence background artifacts.

To solve this issue, I focused on formulating learning-to-rank models specifically tailored for robotic scene perception:

1. **Ordinal Regression:** Formulated pairwise loss functions to prioritize high-precision target detections over ambiguous background noise.
2. **P-Norm Push:** Implemented the P-norm push ranking algorithm, placing higher mathematical penalty on errors at the top of the ranked list so the robot's top choice is correct.
3. **Experimental Validation:** Evaluated bounding box candidate scoring across real-world cluttered kitchen environments captured by mobile manipulators.

![Performance evaluation showing how our learned weight vectors successfully improve high-precision bounding box candidate scores.](/assets/research/report-ml-lis/fig2_ranking_performance.png)

### Key Results & Takeaways

- **Superior Candidate Ranking:** Demonstrated significant candidate ranking accuracy improvements compared to baseline linear regression models.
- **Robust Feature Representation:** Identified optimal spatial feature representations for candidate reranking in household manipulation tasks.
- **Direct Practical Impact:** Provided the LIS research group with a framework to filter candidate clutter before passing target poses to motion planners.

### Downloads

- 📄 [Download Machine Learning Technical Report (PDF)](https://raw.githubusercontent.com/arii/arii.github.io/main/reports/report_ml.pdf)

---

## 3. Parameterized Cryptographic Accelerator — MIT 6.375 Complex Digital Systems (Bluespec SystemVerilog)

### Implementing Parameterized Montgomery Modular Arithmetic

For **MIT 6.375 Complex Digital Systems**, my teammates Timur Balbekov, Neil Forrester, and I engineered a high-performance, parameterized **Hardware RSA Accelerator** using **Bluespec SystemVerilog (BSV)**.

![System architecture of the RSA accelerator showing memory interface, control rule state machines, and modular exponentiation datapath.](/assets/research/report-6375-rsa/rsa_hardware_architecture.png#invert-dark)

### Architecture & Hardware Specification

RSA public-key cryptography relies heavily on modular exponentiation over large integers—an operation that poses significant computational bottlenecks when executed in software.

To achieve maximum hardware throughput, I designed and synthesized custom datapath blocks:

1. **Montgomery Modular Multiplication:** Implemented Montgomery multiplication units to compute large integer modular arithmetic without relying on costly hardware division steps.
2. **Pipelined Datapath Design:** Built a flexible, parameterized bit-width datapath that allows developers to trade off FPGA area against target clock frequency and throughput.
3. **BSV Guarded Atomic Actions:** Modeled execution concurrency using BSV rule synthesizability, ensuring deadlock-free hardware scheduling and clean control logic.

![Pipelined Montgomery modular multiplication unit designed for high-throughput integer exponentiation.](/assets/research/report-6375-rsa/montgomery_multiplier_datapath.png#invert-dark)

### Technical Outcomes & Lessons Learned

- **Cycle-Accurate Performance:** Achieved efficient, low-latency execution for multi-hundred bit RSA key processing targeted at FPGA platforms.
- **Formal Verification in Hardware:** Validated hardware verification methodologies to ensure strict formal correctness and memory safety across cryptographic state transitions.
- **Parameterized Design:** Created a modular codebase that can scale key lengths based on available hardware logic slices.

### Downloads

- 📄 [Download Hardware RSA Accelerator Report (PDF)](https://raw.githubusercontent.com/arii/arii.github.io/main/reports/report_6375.pdf)
