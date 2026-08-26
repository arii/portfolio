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

## 1. Introduction & Overview

**MIT RACECAR** stands for Rapid Autonomous Complex-Environment Competing Ackermann-steering Robot. It is an open-source, project-based robotics platform and course designed for research and education. The platform utilizes 1/10-scale mini race cars equipped with state-of-the-art sensors and computing hardware. Through this program, students learn to program autonomous vehicles, typically starting with a virtual twin simulator before applying their skills to physical robots. The development of the RACECAR platform is a joint effort between MIT Lincoln Laboratory’s Beaver Works Initiative, the Department of Aeronautics & Astronautics, and the Laboratory for Information and Decision Systems.

**BWSI (Beaver Works Summer Institute)** is an intensive, project-based summer STEM program for high school students. Closely associated with MIT and MIT Lincoln Laboratory, the institute introduces students to advanced technical fields, including autonomous systems, machine learning, quantum computing, and cybersecurity. The program provides hands-on, workshop-style experiences, and students are often required to complete online prerequisite coursework to be considered for the four-week intensive summer program. The Autonomous RACECAR course is a flagship offering within the BWSI curriculum.

---

## 2. The Hardware Platform

The RACECAR vehicle platform combines high-performance compute with agile physical dynamics to create a robust research and educational testbed:

- **Compute:** NVIDIA Jetson embedded GPU platform running Ubuntu and ROS (Robot Operating System).
- **Sensing:** Hokuyo 2D LIDAR, ZED Stereo Camera, and IMU telemetry.
- **Actuation:** VESC electronic speed controller and brushless DC motor on a 1/10th scale rally chassis with Ackermann steering.

---

## 3. Instructional Roles & Publications

My work with the MIT RACECAR platform spanned two complementary roles, where my responsibilities evolved from supporting the Robotics: Science and Systems (RSS) course to leading instruction at the Beaver Works Summer Institute (BWSI). I also leveraged the curriculum I developed for these courses to author a Model AI assignment.

### 16.405/6.141 Robotics: Science and Systems (RSS) – Teaching Assistant
In my capacity as a TA for the RSS course with Sertac Karaman, I focused on the technical foundations of the course and direct student guidance.
- **Curriculum & Support:** I developed course labs—including the visual servoing lab—and provided student teams with the starter code and technical assistance they needed to navigate the semester.
- **Instruction:** I delivered one unrecorded lecture for the class.

### Beaver Works Summer Institute (BWSI) – Lead Associate Instructor
As the Lead Associate Instructor for the BWSI RACECAR summer course, my role transitioned to program management, curriculum design, and formal instruction.
- **Instructional Leadership:** I managed the team of Associate Instructors, coordinated team support, and handled the logistical side of the program, such as lab scheduling and mapping subject titles to the course calendar to ensure consistency.
- **Curriculum Development:** I developed comprehensive lab handouts for the course.
- **Lecturing:** I delivered two recorded lectures as part of the formal syllabus:
  - **Visual Servoing** (July 20, 2017)
  - **Navigation** (July 27, 2017)

### Model AI Assignment (AAAI/EAAI Publication)
I authored an Image-Based Visual Servoing (IBVS) curriculum designed for high school and undergraduate students, formalized and published in the Model AI Assignments repository at the AAAI EAAI Symposium (EAAI-17 with Sertac Karaman, where it was accepted for publication).

| Specification | Details |
| :--- | :--- |
| **Project Link** | [Model AI: Visual Servoing Assignment ↗](https://modelai.gettysburg.edu/2017/visual-servo/index.html) |
| **Core Technologies** | Python, C++, OpenCV, and ROS |
| **Assignment Focus** | Image-Based Visual Servoing (IBVS), orange cone detection and parking, monocular camera line-following, closed-loop proportional control |

---

## 4. Core Curriculum & Lecture Series

The instructional curriculum is structured into core lecture series delivered during the program, blending classical controls, computer vision, and mapping algorithms.

### 📖 Lecture 1: Motion Planning & Localization (with ROS)
Teaching the transition from low-level control to high-level goals using Robot Operating System (ROS) communications (publisher-subscriber nodes, coordinate transformations `tf`):
- **Core Focus:** Transitioning from low-level control to high-level achievement goals in robotics (mapping, localization, and motion planning).
- **Representation:** Explores 2D/3D poses ($X, Y, \theta$) and map types, contrasting continuous vector/landmark maps with discretized occupancy grids.
- **Localization:** Examines dead reckoning limitations (error accumulation) and sensor-based state estimation using AR tags and filters.
- **Motion Planning:** Compares the simple online Bug algorithm with optimal, graph-based Visibility Graphs, factoring in robot geometry and obstacle expansion.
- **Lab Roadmap:** Outlines upcoming hands-on tasks, including AR tag localization, potential field navigation, and a multi-car "leader-follower" demo.

[![Motion Planning Lecture Demonstration](/assets/research/bwsi-racecar/lecture_planning.gif)](https://www.youtube.com/watch?v=CdRs0l9f5WM#no-embed)
*[Watch Planning Lecture on YouTube ↗](https://www.youtube.com/watch?v=CdRs0l9f5WM#no-embed)*

---

### 📖 Lecture 2: Computer Vision & Visual Servoing (with LIDAR)
Developing OpenCV-based lane detection, color blob tracking, and feedback control loops integrated with planar LIDAR scans and trajectory limits:
- **Core Focus:** Introduction to **visual servoing** (controlling a robot using computer vision feedback) for tasks like cone parking and line following.
- **Control Systems Review:**
  - *Feed-Forward (Open-Loop):* Sends direct motor commands without feedback; prone to rapid drift and error accumulation.
  - *Feedback (Closed-Loop):* Uses output signals to dynamically adjust behavior and correct errors against a reference point.
- **Control Framework & Design Steps:**
  1. Define a normalized image coordinate system (e.g., width from $-0.5$ to $0.5$).
  2. Define the desired reference signal ($R(t)$) and system state/error ($Y(t)$).
  3. Compute the error signal ($E(t) = R(t) - Y(t)$).
  4. Implement a **Proportional (P) controller** (scaling error by a gain) and expand to **PID** to eliminate steady-state error and oscillations.
- **Application Implementations:**
  - *Cone Parking:* Decouples steering control from forward/backward velocity (using cone height/area as a distance metric) while processing planar LIDAR scans for safe obstacle avoidance.
  - *Line Following:* Modifies the visual servoing approach (e.g., cropping the top half of the image) to keep the car centered on a track.
- **Practical Tips & OpenCV Tools:** Use **ROS bags** for testing playback, downsample camera resolution to reduce lag, extract custom HSV thresholds directly from your images, and utilize OpenCV functions like `putText`, `findContours`, and `rectangle`.

[![Visual Servoing Lecture Demonstration](/assets/research/bwsi-racecar/lecture_visual_servoing.gif)](https://www.youtube.com/watch?v=bAAatB2IvUM#no-embed)
*[Watch Visual Servoing Lecture on YouTube ↗](https://www.youtube.com/watch?v=bAAatB2IvUM#no-embed)*

---

## 5. Project Demonstrations & Competition

The practical side of the RACECAR curriculum culminates in student demonstrations and a high-speed, autonomous racing competition.

### 🎥 Part A: Line Following Demonstration
[![Autonomous Navigation & Visual Servoing Behaviors](/assets/research/bwsi-racecar/racecar_behaviors.gif)](https://www.youtube.com/watch?v=0U0pPbWhLVE#no-embed)
*[Watch Full Demonstration on YouTube ↗](https://www.youtube.com/watch?v=0U0pPbWhLVE#no-embed)*

Closed-loop proportional control tracking paths using monocular camera input.

---

### 🎥 Part B: Cone Tracking & Visual Servoing
[![Student Cone Tracking Visual Servoing Demo](/assets/research/bwsi-racecar/racecar_students.gif)](https://www.youtube.com/watch?v=qSe8JmWQnYk#no-embed)
*[Watch Full Demonstration on YouTube ↗](https://www.youtube.com/watch?v=qSe8JmWQnYk#no-embed)*

Real-time visual tracking, color isolation, and safety-limited collision avoidance.

---

### 🎥 Main RACECAR Challenge Demonstration
An intensive final-day speed loop challenge where 1/10th scale autonomous racecars navigate complex indoor corridors. Vehicles must perform real-time visual servoing, LIDAR-based obstacle avoidance, and precise wall-following to achieve rapid lap times without collision.

[![Main RACECAR Challenge Demonstration](/assets/research/bwsi-racecar/racecar_main.gif)](https://www.youtube.com/watch?v=UjVatZ3NK5U#no-embed)
*[Watch Full Video Demonstration on YouTube ↗](https://www.youtube.com/watch?v=UjVatZ3NK5U#no-embed)*

---

### Educational Impact & Competition

Students culminated their intensive workshop by programming the cars to perform a variety of tasks—including pure pursuit, SLAM, and visual servoing—and competing in an autonomous race through complex indoor hallways and obstacle courses, demonstrating high-level execution of integrated software systems on real-world hardware.
