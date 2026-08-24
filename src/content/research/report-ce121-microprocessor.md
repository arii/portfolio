---
title: "Microprocessor System Design (68HC11E1 Board)"
date: "2011-12-10"
readTime: 5
tags:
  - Microprocessors
  - Embedded Systems
  - Assembly Language
  - Hardware Interfacing
  - UCSC
category: "Embedded Systems"
summary: "Hardware interface and embedded firmware for 68HC11E1 microcontroller board with external SRAM, ROM, and serial communication."
---

# CMPE-121 Microprocessor System Design Project

## Embedded Microcontroller Architecture at UC Santa Cruz

Completed for **CMPE-121 Microprocessor System Design** at UCSC, this project involved designing, soldering, and programming a custom **Motorola 68HC11E1 microcontroller system** from bare silicon to a functional embedded computer.

---

## Hardware Interfacing & Firmware Architecture

The system required low-level hardware memory mapping, bus interface timing analysis, and Assembly/C firmware development.

Key technical specifications:
1. **Memory Subsystem Interfacing:** Interfaced 8KB external SRAM and 8KB EPROM with address decoding logic.
2. **Serial Communication Interfaces:** Configured RS-232C serial UART interface for PC communication and SPI serial protocol for peripheral expansion.
3. **Power & Hardware Diagnostics:** Built 7-12V DC power regulation and diagnostic LED displays for memory test validation.

---

## Downloadable Technical Report

- 📄 [Download Microprocessor System Design Report (PDF)](https://raw.githubusercontent.com/arii/arii.github.io/main/reports/report_ce121.pdf)

---

## Engineering Impact

- Verified memory read/write timing constraints and bus contention avoidance across hardware operating modes.
- Built a reusable microcontroller testbed for sensor data acquisition and embedded hardware prototyping.
