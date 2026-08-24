---
title: "Hardware RSA Accelerator"
date: "2013-05-15"
readTime: 5
tags:
  - Hardware
  - Cryptography
  - Bluespec SystemVerilog
  - MIT
category: "Hardware Engineering"
summary: "Designed and implemented a high-performance hardware RSA encryption accelerator in Bluespec SystemVerilog."
---

# Hardware RSA Accelerator

## Complex Digital Systems Design (MIT 6.375)

Developed for **MIT 6.375 Complex Digital Systems**, this hardware design project (in collaboration with Timur Balbekov and Neil Forrester) implemented a high-performance, parameterized **Hardware RSA Accelerator** using **Bluespec SystemVerilog (BSV)**.

---

## Architecture & Hardware Specification

RSA public-key cryptography relies on modular exponentiation over large integers, which is computationally expensive in software.

Key architecture features:
1. **Montgomery Modular Multiplication:** Accelerated large integer modular arithmetic while eliminating expensive division steps.
2. **Pipelined Datapath:** Parameterized bit-width datapath allowing custom throughput/area trade-offs.
3. **BSV Rule Synthesizability:** Modeled concurrency using guarded atomic actions to ensure deadlock-free hardware execution.

---

## Downloadable Technical Report

- 📄 [Download Hardware RSA Accelerator Report (PDF)](https://raw.githubusercontent.com/arii/arii.github.io/main/reports/report_6375.pdf)

---

## Project Significance

- Achieved efficient cycle-accurate execution for multi-hundred bit RSA key processing on FPGA target platforms.
- Validated hardware verification methodologies for formal safety in cryptographic hardware modules.
