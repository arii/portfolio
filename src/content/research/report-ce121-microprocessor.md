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
pdfUrl: "https://raw.githubusercontent.com/arii/arii.github.io/main/reports/report_ce121.pdf"
---

# CMPE-121 Microprocessor System Design Project

## Embedded Microcontroller Architecture at UC Santa Cruz

For **CMPE-121 Microprocessor System Design** at UC Santa Cruz, I designed, hand-soldered, and programmed a custom embedded computer board based on the **Motorola 68HC11E1 microcontroller**, bringing bare silicon up to full operational capability.

![68HC11 Microcontroller Board Schematic](/assets/research/report-ce121-microprocessor/68hc11_board_schematic.png)
*Figure 1: Complete hardware schematic for the custom Motorola 68HC11E1 microcontroller system board.*

---

## Hardware Interfacing & Firmware Engineering

Building the single-board computer required precise hardware timing analysis, manual bus wiring, address decoding, and low-level assembly programming.

Key engineering milestones:

1. **Memory Subsystem Interfacing:** Designed and wired 8KB external SRAM and 8KB EPROM memory ICs with 74HC logic gates for precise address decoding.
2. **Serial & Peripheral Communication:** Configured RS-232 serial UART communication for terminal debugging alongside SPI interface logic for peripheral expansion.
3. **Power Regulation & Hardware Diagnostics:** Designed onboard 5V linear power regulation circuitry and integrated LED logic displays for verifying memory read/write cycles.

![Memory Address Decoding Subsystem](/assets/research/report-ce121-microprocessor/memory_address_decoding.png)
*Figure 2: Memory address decoding block diagram mapping 8KB SRAM and EPROM windows into the 68HC11 memory space.*

---

## Engineering Impact & Verification

- **Timing & Bus Validation:** Verified signal setup and hold times across system buses, preventing bus contention during high-speed memory reads.
- **Prototyping Platform:** Created a reliable embedded hardware platform for real-time sensor data collection and low-level firmware testing.

---

## Technical Report Download

- 📄 [Download Microprocessor System Design Report (PDF)](https://raw.githubusercontent.com/arii/arii.github.io/main/reports/report_ce121.pdf)
