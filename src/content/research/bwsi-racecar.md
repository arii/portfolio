---
title: "BeaverWorks Summer Institute (RACECAR)"
date: "2018-07-01"
readTime: 6
tags:
  - Robotics & Autonomy
  - Computer Vision
  - Visual Servoing
  - Motion Planning
  - ROS
category: "Education & Autonomous Systems"
summary: "Instructional curricula and course lead for autonomous miniature racecars utilizing visual servoing, motion planning, and ROS."
videoUrl: "https://www.youtube.com/watch?v=UjVatZ3NK5U"
---

# BeaverWorks Summer Institute (RACECAR)

![BeaverWorks RACECAR students and autonomous vehicles](/assets/research/bw.jpg)

## Autonomous Miniature Racecars & Robotics Education

The **BeaverWorks Summer Institute (RACECAR)** program at MIT was an intensive STEM initiative designed to teach high school students advanced robotics, computer vision, and autonomous vehicle navigation using 1/10th scale autonomous racecars.

---

## Course Highlights & Challenge Demos

[![Main RACECAR Challenge Demonstration](/assets/research/bwsi-racecar/racecar_main.gif)](https://www.youtube.com/watch?v=UjVatZ3NK5U#no-embed)
*Figure: High-speed autonomous navigation loops. [Watch Full Video Demonstration on YouTube ↗](https://www.youtube.com/watch?v=UjVatZ3NK5U#no-embed)*

---

[![Autonomous Navigation & Visual Servoing Behaviors](/assets/research/bwsi-racecar/racecar_behaviors.gif)](https://www.youtube.com/watch?v=0U0pPbWhLVE#no-embed)
*Figure: Color tracking and visual servoing. [Watch Full Video Demonstration on YouTube ↗](https://www.youtube.com/watch?v=0U0pPbWhLVE#no-embed)*

---

[![Student Cone Tracking Visual Servoing Demo](/assets/research/bwsi-racecar/racecar_students.gif)](https://www.youtube.com/watch?v=qSe8JmWQnYk#no-embed)
*Figure: High school student final challenge runs. [Watch Full Video Demonstration on YouTube ↗](https://www.youtube.com/watch?v=qSe8JmWQnYk#no-embed)*

---

## Program Overview & Curriculum Design

My involvement with the MIT RACECAR platform started as a graduate teaching assistant for the undergraduate course **6.141J/16.405J: Robotics: Science and Systems (RSS)**, and I later transitioned to a lead instructor role for the **BeaverWorks Summer Institute (BWSI)** summer program for high school students. 

In this capacity, I designed core curriculum—such as the visual servoing lab and cone detector—delivered technical lectures, and oversaw lab sessions where students programmed the cars to execute complex robotic behaviors.

### Model AI Assignments & AAAI Publication

The visual servoing curriculum developed through this work was formalized, submitted, and accepted into the **Model AI Assignments** repository—part of the Educational Advances in Artificial Intelligence (EAAI) symposium at the **AAAI Conference**—where I also presented these educational materials and methodologies.

* **Project Link:** [Model AI: Visual Servoing Assignment](https://modelai.gettysburg.edu/2017/visual-servo/index.html)
* **Core Technologies:** Python/C++, OpenCV, and ROS.
* **Assignment Focus:** Students use Image-Based Visual Servoing (IBVS) to program mobile robots to park in front of solid-color objects (like orange cones) or handle line-following tasks using monocular camera input and closed-loop proportional control.

### Core Curricular Pillars & Lectures
1. **Robot Operating System (ROS):** Teaching publisher-subscriber patterns, node communication, dynamic reconfigure, and sensor data transformation trees (`tf`).
2. **Motion Planning:** Authored and delivered lectures on core planning algorithms, including path generation and tracking ([Watch Planning Lecture](https://www.youtube.com/watch?v=CdRs0l9f5WM#no-embed)).
3. **Computer Vision & Visual Servoing:** Developed visual servoing labs, cone detectors, and OpenCV pipelines for lane detection and color blob tracking, accompanied by dedicated instructional lectures ([Watch Visual Servoing Lecture](https://www.youtube.com/watch?v=bAAatB2IvUM#no-embed)).
4. **LIDAR & Trajectory Control:** Configured planar LIDAR scans and taught high-speed control methodologies such as Pure Pursuit, SLAM, and obstacle avoidance.

---

## Hardware Platform & System Specs

The RACECAR vehicle platform combined high-performance compute with agile physical dynamics:
- **Compute:** NVIDIA Jetson embedded GPU platform running Ubuntu and ROS.
- **Sensing:** Hokuyo 2D LIDAR, ZED Stereo Camera, and IMU telemetry.
- **Actuation:** VESC electronic speed controller and brushless DC motor on a 1/10th scale rally chassis.

---

## Educational Reach & Competition

Students culminated their intensive workshop by programming the cars to perform a variety of tasks—including pure pursuit, SLAM, and visual servoing—and competing in an autonomous race through complex indoor hallways and obstacle courses.
