---
title: "Undergraduate Engineering Projects"
date: "2012-06-15"
readTime: 5
tags:
  - Robotics
  - Mechatronics
  - Embedded Systems
  - Digital Logic
  - Microcontrollers
  - UCSC
  - Hardware
category: "Robotics & Hardware"
summary: "Archive of foundational undergraduate robotics and embedded hardware projects from UCSC—spanning CMPE 100 logic design, CMPE 121 microprocessor systems, CMPE 118 mechatronics, and custom microcontroller-based LED game side projects."
---

During my undergraduate studies in Computer Engineering at UC Santa Cruz (UCSC), I worked on a wide array of hands-on mechatronics, embedded systems, digital design, and robotics engineering projects. This archive consolidates project demonstrations, technical b-roll footage, and prototype testing videos captured during these foundational years.

---

### CMPE 100: Logic Design

* **Focus:** Fundamental combinational and sequential logic design, gate-level implementations, and hardware verification.
* **Highlights:** Designed and tested robust digital subsystems, finite state machines, and hardware description language workflows on FPGA development boards.

#### CMPE 100L Laboratory: Breadboard D Flip-Flop

[![Breadboard D Flip-Flop Demonstration](/assets/research/undergraduate-projects/flip_flop.gif)](https://www.youtube.com/watch?v=G0uw5PP9fuw#no-embed)
*Figure: Breadboard D Flip-Flop hardware loops. [Watch Full Video Demonstration on YouTube ↗](https://www.youtube.com/watch?v=G0uw5PP9fuw#no-embed)*

---

### CMPE 121: Microprocessor System Design

* **Focus:** Microprocessor architecture, memory mapping, peripheral interfacing, and low-level C and Assembly programming.
* **Highlights:** Engineered a fully integrated microcontroller-based system, managing custom peripheral drivers, interrupt service routines, and serial communication protocols.

## 68HC11 Microcontroller Board for Mechanical Gripper Control

In 2011, as part of my final microprocessor design laboratory course (CMPE 121), I designed, built, and programmed a custom microcontroller board using the Motorola 68HC11E1 chip configured in expanded bus mode. The primary goal of the project was to create a hardware-based controller capable of direct peripheral management, reducing the reliance on a separate PC software interface.

### Hardware Architecture

Building the system required an intensive wire-wrapping and soldering process to construct a custom circuit layout. The hardware configuration consists of the following components:

  * **Microcontroller & Memory:** A Motorola 68HC11E1 chip configured in expanded bus mode operating alongside 8KB external SRAM and 8KB EPROM. I performed rigorous bus interface timing analysis to verify read/write constraints and avoid bus contention across hardware operating modes.
  * **User Controls & Diagnostics:** Two digital I/O push-buttons for manual command triggers, a potentiometer paired with an analog-to-digital (A/D) converter pin to modulate operational parameters, and dedicated diagnostic LED displays for memory test validation.
  * **Power Regulation:** An integrated 7-12V DC power regulation circuit to supply stable power to the logic and peripherals.
  * **Peripherals & Connectivity:** A DB9 serial port connection integrated with standard RS-232 communication lines connected directly to a mechanical gripper, alongside the SPI serial protocol for auxiliary peripheral expansion.

### Software Implementation

The software was structured to manage real-time communication and hardware feedback loops using the RS-232 communication protocol:

  * **Pseudo-Force Control:** Motor resistance is regulated by specifying direct current levels. I mapped out eight distinct current settings into their hexadecimal representations, creating a structured command look-up table for both opening and closing actions.
  * **Dynamic Lookup System:** When an operator presses a digital push-button, the program measures the active voltage across the potentiometer and uses that value to index the corresponding open or close command from the lookup table.

[![68HC11 Microcontroller Board and Mechanical Gripper](/assets/research/undergraduate-projects/gripper_control.gif)](https://www.youtube.com/watch?v=tXif7xeZmGI#no-embed)
*Figure: 68HC11 Microcontroller Board and Mechanical Gripper hardware loops. [Watch Full Video Demonstration on YouTube ↗](https://www.youtube.com/watch?v=tXif7xeZmGI#no-embed)*

### Downloadable Technical Report

* 📄 [Download Microprocessor System Design Report (PDF)](https://raw.githubusercontent.com/arii/arii.github.io/main/reports/report_ce121.pdf)

---

### CMPE 118: Introduction to Mechatronics

* **Focus:** Interdisciplinary electromechanical systems blending microcontrollers, analog signal conditioning, DC/stepper motor control, and sensor feedback loops.
* **Highlights:** Built autonomous embedded robotic platforms capable of real-time environmental navigation, obstacle detection, and precise actuation under tight hardware constraints.

## **Project Overview: MAK Attack Autonomous Mechatronic System**

### **At a Glance**

  * **Objective**: Designed and engineered an 11" x 11" x 11" fully autonomous robot programmed to navigate an 8' x 8' competitive course, locate and engage an opponent island via infrared beacons, deploy a mechanical projectile system, and return safely to the home island.
  * **Roles**: Served as Systems Engineer, Programming Lead, and Circuit Debugger.
  * **Timeline**: Winter 2012 (Completed Mar 19, 2012).
  * **Core Technologies**: PIC32 Microcontroller, Mechatronic State Machine Architecture, Infrared (IR) Sensor Arrays, Dual-Motor Differential Drive, Analog Hardware Debounce & Filtering, PWM Motor Regulation.

-----

### **Engineering Design & Implementation**

#### **1. Software Architecture & Control Systems**

  * **Hierarchical Finite State Machine (FSM)**: Architected and programmed a complex control structure featuring modular sub-state machines (e.g., dedicated centering algorithms and localized sensor-sampling logic).
  * **Ambient-Resilient Event Detection**: Developed a differential sampling state machine for the robot’s IR tape sensors. By capturing active and passive states sequentially, the software calculated ambient light deltas to stabilize detection thresholds under variable environmental lighting.
  * **Adaptive Battery Voltage Scaling**: Engineered an algorithmic solution to address supply fluctuations (from a 14.4V dual-battery series configuration). Built continuous PWM duty-cycle scaling code utilizing a 10-bit ADC reference to normalize motor outputs relative to a steady 12V operational baseline, ensuring consistent maneuverability and projectile power.

#### **2. Hardware & Electrical Engineering**

  * **Mixed-Signal Circuit Debugging**: Led the integration, isolation, and validation of the robot's sensory circuits, including high-pass and low-pass trans-resistive op-amp filter stages to clean noisy phototransistor signals.
  * **Sensor & Actuator Integration**: Successfully implemented an active-high IR beacon-tracking filter, basic binary bump-sensor networks, a high-current H-bridge driver circuit, and dedicated TIP122 Darlington transistor circuits to govern mechanical subsystems.

#### **3. Mechanical Design Strategy**

  * **Modular Parametric Chassis**: Participated in the collaborative design of a modular CAD framework in SolidWorks. The architecture isolated structural power distribution and drive elements from specialized operational modules, simplifying physical debugging and enabling efficient on-the-fly hardware replacement.
  * **Servo-Driven Launching Mechanism**: Integrated dual high-velocity toy motors paired with a high-torque servo-actuated feeding mechanism to sequentially chamber and discharge ping-pong projectiles at target vectors.

-----

### **Key Results & Engineering Takeaways**

  * **Integration-Driven Development**: Successfully mitigated integration bottlenecks by designing testing harnesses and sub-assembly code in parallel with mechanical builds throughout a 5-week integration runway.
  * **High-Precision Target Acquisition**: Achieved exceptional accuracy with the projectile launcher, consistently landing multiple impacts on target by relying on dynamic software thresholding to counter complex external ambient light interference.
  * **Agile Problem Solving**: Overcame a critical, late-stage failure of the robot's primary micro-servos by adapting the physical chassis to house robust, larger-scale servos and utilizing custom ground shielding around signaling lines to eliminate high-current motor noise.

### **System & Component Gallery**

| **MAK Attack Autonomous Robot Assembly** | **Sensory and Signal Processing Circuitry** |
| :---: | :---: |
| ![MAK Attack Front View](/assets/research/undergraduate-projects/ce118-001.png) | ![Sensory & Signal Processing Circuits](/assets/research/undergraduate-projects/ce118-007.png) |
| **Top-Down Chassis Interior** | **CAD Chassis Model & Structural Layout** |
| ![Chassis Interior](/assets/research/undergraduate-projects/ce118-008.png) | ![Chassis SolidWorks Design](/assets/research/undergraduate-projects/ce118-009.png) |
| **Complete System with Sensor Array** | |
| ![Complete System Setup](/assets/research/undergraduate-projects/ce118-010.png) | |

---

### Standalone Side Project: Microcontroller-Based LED Game

* **Focus:** Interactive embedded hardware, custom firmware state machines, and resource-constrained peripheral control.
* **Highlights:** Developed a portable arcade-style LED game powered by a standalone microcontroller, featuring custom multiplexed matrix displays, debounced user inputs, and responsive gameplay logic.

## Microcontroller-Based LED Ring Reaction Game for UCSC Engineering Week

I created this interactive arcade game for the Tau Beta Pi student organization during Engineering Week at UC Santa Cruz in February 2020. Built by Ariel Anders, Nathan Abercrombie, and Julian Dahan, the game challenges players to press a large button and stop a fast-moving light on a specific target LED.

I wired an array of 28 individual LEDs across digital output pins 22 through 49. The code lights up one LED at a time with a quick 10ms delay, making the light look like it is spinning in a continuous circle. The game button connects to an analog input pin (A0). The microcontroller constantly reads this pin, and when the button press drops the reading below my set threshold of 500, the movement loop stops completely. This freezes the light, sends the final score data through a 9600 baud Serial pipeline, and keeps the game at the end screen until you press reset to play again.

[![LED Ring Reaction Game](/assets/research/undergraduate-projects/led_game.gif)](https://www.youtube.com/watch?v=p1W5xtdLUWk#no-embed)
*Figure: Microcontroller-Based LED Ring Reaction Game hardware loops. [Watch Full Video Demonstration on YouTube ↗](https://www.youtube.com/watch?v=p1W5xtdLUWk#no-embed)*

---

## Technical Summary & Core Takeaways

These undergraduate endeavors established my core engineering methodology across:
- **Embedded C & Microcontrollers:** Low-level register configuration, interrupt-driven I/O, and serial protocols.
- **Mechatronics Integration:** Interfacing analog sensors, shaft encoders, DC motors, and stepper drivers.
- **Real-Time Control:** PID feedback loops, finite state machine architectures, and hardware-in-the-loop debugging.
