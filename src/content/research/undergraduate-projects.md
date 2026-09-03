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

## CMPE 100: Logic Design

* **Focus:** Fundamental combinational and sequential logic design, gate-level implementations, and hardware verification.
* **Highlights:** Designed and tested robust digital subsystems, finite state machines, and hardware description language workflows on FPGA development boards.

### CMPE 100L Laboratory: Breadboard D Flip-Flop

[![Breadboard D Flip-Flop hardware loops. | Watch Full Video Demonstration on YouTube ↗ | https://www.youtube.com/watch?v=G0uw5PP9fuw#no-embed](/assets/research/undergraduate-projects/flip_flop.gif#max-w-2xl)](https://www.youtube.com/watch?v=G0uw5PP9fuw#no-embed)

---

## CMPE 121: Microprocessor System Design

* **Focus:** Microprocessor architecture, memory mapping, peripheral interfacing, and low-level C and Assembly programming.
* **Highlights:** Engineered a fully integrated microcontroller-based system, managing custom peripheral drivers, interrupt service routines, and serial communication protocols.

### 68HC11 Microcontroller Board for Mechanical Gripper Control

For **CMPE-121 Microprocessor System Design** at UC Santa Cruz, we designed, hand-soldered, and programmed a custom embedded computer board based on the **Motorola 68HC11E1 microcontroller**, bringing bare silicon up to full operational capability to control a mechanical gripper without a host computer.

![Complete hardware schematic for the custom Motorola 68HC11E1 microcontroller system board.](/assets/research/report-ce121-microprocessor/68hc11_board_schematic.png#invert-dark#max-w-3xl)

#### Hardware Interfacing & Firmware Engineering

Building the single-board computer required precise hardware timing analysis, manual bus wiring (wire-wrapping and soldering), address decoding, and low-level C/Assembly firmware engineering:

1. **Memory Subsystem Interfacing:** Designed and wired 8KB external SRAM and 8KB EPROM memory ICs with 74HC logic gates for precise address decoding.
2. **Serial & Peripheral Communication:** Configured RS-232 serial UART communication for terminal debugging alongside SPI interface logic for peripheral expansion.
3. **Power Regulation & Hardware Diagnostics:** Designed onboard 5V linear power regulation circuitry and integrated LED logic displays for verifying memory read/write cycles.

![Memory address decoding block diagram mapping 8KB SRAM and EPROM windows into the 68HC11 memory space.](/assets/research/report-ce121-microprocessor/memory_address_decoding.png#invert-dark#max-w-xl)

#### Software & Gripper Control Implementation

We structured the software to manage real-time communication and hardware feedback loops using the RS-232 communication protocol:

* **Pseudo-Force Control:** Motor resistance is regulated by specifying direct current levels. We mapped out eight distinct current settings into their hexadecimal representations, creating a structured command look-up table for both opening and closing actions.
* **Dynamic Lookup System:** When an operator presses a digital push-button, the program measures the active voltage across the potentiometer and uses that value to index the corresponding open or close command from the lookup table.

[![68HC11 Microcontroller Board and Mechanical Gripper hardware loops.](/assets/research/undergraduate-projects/gripper_control.gif#max-w-2xl)](https://www.youtube.com/watch?v=tXif7xeZmGI#no-embed)

#### Engineering Impact & Verification

- **Timing & Bus Validation:** Verified signal setup and hold times across system buses, preventing bus contention during high-speed memory reads.
- **Prototyping Platform:** Created a reliable embedded hardware platform for real-time sensor data collection and low-level firmware testing.

#### Technical Report Download

* 📄 [Download Microprocessor System Design Report (PDF)](https://raw.githubusercontent.com/arii/arii.github.io/main/reports/report_ce121.pdf)

---

## CMPE 118: Introduction to Mechatronics

* **Focus:** Interdisciplinary electromechanical systems blending microcontrollers, analog signal conditioning, DC/stepper motor control, and sensor feedback loops.
* **Highlights:** Built autonomous embedded robotic platforms capable of real-time environmental navigation, obstacle detection, and precise actuation under tight hardware constraints.

### MAK Attack Autonomous Mechatronic System

In **CMPE-118 Introduction to Mechatronics** at UC Santa Cruz, my team (Matthew Luxton, Kyle Huey, and I) designed, constructed, and programmed **MAK Attack**—an autonomous mobile robot built to solve real-time arena navigation and object manipulation challenges under strict operational deadlines.

![The MAK Attack autonomous mobile robot platform, highlighting optical sensors, bumper switches, and custom motor drive electronics.](/assets/research/report-ce118-mechatronics/mak_attack_robot.png#max-w-2xl)

#### **At a Glance**

  * **Objective**: Designed and engineered an 11" x 11" x 11" fully autonomous robot programmed to navigate an 8' x 8' competitive course, locate and engage an opponent island via infrared beacons, deploy a mechanical projectile system, and return safely to the home island.
  * **Roles**: Served as Systems Engineer, Programming Lead, and Circuit Debugger.
  * **Timeline**: Winter 2012 (Completed Mar 19, 2012).
  * **Core Technologies**: PIC32 Microcontroller, Mechatronic State Machine Architecture, Infrared (IR) Sensor Arrays, Dual-Motor Differential Drive, Analog Hardware Debounce & Filtering, PWM Motor Regulation.

-----

#### **Engineering Design & Implementation**

##### **1. Software Architecture & Control Systems**

  * **Hierarchical Finite State Machine (FSM)**: Architected and programmed a complex control structure featuring modular sub-state machines (e.g., dedicated centering algorithms and localized sensor-sampling logic).

![Hierarchical event-driven state machine architecture governing autonomous robot behavior during arena trials.](/assets/research/report-ce118-mechatronics/hierarchical_state_machine.png#max-w-2xl#tall)

  * **Ambient-Resilient Event Detection**: Developed a differential sampling state machine for the robot’s IR tape sensors. By capturing active and passive states sequentially, the software calculated ambient light deltas to stabilize detection thresholds under variable environmental lighting.
  * **Adaptive Battery Voltage Scaling**: Engineered an algorithmic solution to address supply fluctuations (from a 14.4V dual-battery series configuration). Built continuous PWM duty-cycle scaling code utilizing a 10-bit ADC reference to normalize motor outputs relative to a steady 12V operational baseline, ensuring consistent maneuverability and projectile power.

##### **2. Hardware & Electrical Engineering**

  * **Mixed-Signal Circuit Debugging**: Led the integration, isolation, and validation of the robot's sensory circuits, including high-pass and low-pass trans-resistive op-amp filter stages to clean noisy phototransistor signals.
  * **Sensor & Actuator Integration**: Successfully implemented an active-high IR beacon-tracking filter, basic binary bump-sensor networks, a high-current H-bridge driver circuit, and dedicated TIP122 Darlington transistor circuits to govern mechanical subsystems.

##### **3. Mechanical Design Strategy**

  * **Modular Parametric Chassis**: Participated in the collaborative design of a modular CAD framework in SolidWorks. The architecture isolated structural power distribution and drive elements from specialized operational modules, simplifying physical debugging and enabling efficient on-the-fly hardware replacement.
  * **Servo-Driven Launching Mechanism**: Integrated dual high-velocity toy motors paired with a high-torque servo-actuated feeding mechanism to sequentially chamber and discharge ping-pong projectiles at target vectors.

-----

#### **Key Results & Engineering Takeaways**

  * **Integration-Driven Development**: Successfully mitigated integration bottlenecks by designing testing harnesses and sub-assembly code in parallel with mechanical builds throughout a 5-week integration runway.
  * **High-Precision Target Acquisition**: Achieved exceptional accuracy with the projectile launcher, consistently landing multiple impacts on target by relying on dynamic software thresholding to counter complex external ambient light interference.
  * **Agile Problem Solving**: Overcame a critical, late-stage failure of the robot's primary micro-servos by adapting the physical chassis to house robust, larger-scale servos and utilizing custom ground shielding around signaling lines to eliminate high-current motor noise.

#### **Downloads**

- 📄 [Download Mechatronics Lab Report (PDF)](https://raw.githubusercontent.com/arii/arii.github.io/main/reports/report_ce118.pdf)

### **System & Component Gallery**

![MAK Attack Front View | MAK Attack Autonomous Robot Assembly](/assets/research/undergraduate-projects/ce118-001.webp) ![Sensory & Signal Processing Circuits | Sensory and Signal Processing Circuitry](/assets/research/undergraduate-projects/ce118-007.webp)

![Chassis Interior | Top-Down Chassis Interior](/assets/research/undergraduate-projects/ce118-008.webp) ![Chassis SolidWorks Design | CAD Chassis Model & Structural Layout](/assets/research/undergraduate-projects/ce118-009.webp)

![Complete System Setup | Complete System with Sensor Array](/assets/research/undergraduate-projects/ce118-010.webp)

---

## Standalone Side Project: Microcontroller-Based LED Game

* **Focus:** Interactive embedded hardware, custom firmware state machines, and resource-constrained peripheral control.
* **Highlights:** Developed a portable arcade-style LED game powered by a standalone microcontroller, featuring custom multiplexed matrix displays, debounced user inputs, and responsive gameplay logic.

### Microcontroller-Based LED Ring Reaction Game for UCSC Engineering Week

We created this interactive arcade game for the Tau Beta Pi student organization during Engineering Week at UC Santa Cruz in February 2020. Built by Ariel Anders, Nathan Abercrombie, and Julian Dahan, the game challenges players to press a large button and stop a fast-moving light on a specific target LED.

We wired an array of 28 individual LEDs across digital output pins 22 through 49. The code lights up one LED at a time with a quick 10ms delay, making the light look like it is spinning in a continuous circle. The game button connects to an analog input pin (A0). The microcontroller constantly reads this pin, and when the button press drops the reading below our set threshold of 500, the movement loop stops completely. This freezes the light, sends the final score data through a 9600 baud Serial pipeline, and keeps the game at the end screen until you press reset to play again.

[![Microcontroller-Based LED Ring Reaction Game hardware loops. | Watch Full Video Demonstration on YouTube ↗ | https://www.youtube.com/watch?v=p1W5xtdLUWk#no-embed](/assets/research/undergraduate-projects/led_game.gif#max-w-2xl)](https://www.youtube.com/watch?v=p1W5xtdLUWk#no-embed)

---

## Technical Summary & Core Takeaways

These undergraduate endeavors established my core engineering methodology across:
- **Embedded C & Microcontrollers:** Low-level register configuration, interrupt-driven I/O, and serial protocols.
- **Mechatronics Integration:** Interfacing analog sensors, shaft encoders, DC motors, and stepper drivers.
- **Real-Time Control:** PID feedback loops, finite state machine architectures, and hardware-in-the-loop debugging.
