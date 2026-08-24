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
pdfUrl: "https://raw.githubusercontent.com/arii/arii.github.io/main/reports/report_6375.pdf"
---

# Hardware RSA Accelerator

## Complex Digital Systems Design (MIT 6.375)

For **MIT 6.375 Complex Digital Systems**, my teammates Timur Balbekov, Neil Forrester, and I engineered a high-performance, parameterized **Hardware RSA Accelerator** using **Bluespec SystemVerilog (BSV)**.

![RSA Hardware Accelerator Architecture](/assets/research/report-6375-rsa/rsa_hardware_architecture.png)
*Figure 1: System architecture of the RSA accelerator showing memory interface, control rule state machines, and modular exponentiation datapath.*

---

## Architecture & Hardware Specification

RSA public-key cryptography relies heavily on modular exponentiation over large integers—an operation that poses significant computational bottlenecks when executed in software.

To achieve maximum hardware throughput, I designed and synthesized custom datapath blocks:

1. **Montgomery Modular Multiplication:** Implemented Montgomery multiplication units to compute large integer modular arithmetic without relying on costly hardware division steps.
2. **Pipelined Datapath Design:** Built a flexible, parameterized bit-width datapath that allows developers to trade off FPGA area against target clock frequency and throughput.
3. **BSV Guarded Atomic Actions:** Modeled execution concurrency using BSV rule synthesizability, ensuring deadlock-free hardware scheduling and clean control logic.

![Montgomery Modular Multiplier Datapath](/assets/research/report-6375-rsa/montgomery_multiplier_datapath.png)
*Figure 2: Pipelined Montgomery modular multiplication unit designed for high-throughput integer exponentiation.*

---

## Technical Outcomes & Lessons Learned

- **Cycle-Accurate Performance:** Achieved efficient, low-latency execution for multi-hundred bit RSA key processing targeted at FPGA platforms.
- **Formal Verification in Hardware:** Validated hardware verification methodologies to ensure strict formal correctness and memory safety across cryptographic state transitions.
- **Parameterized Design:** Created a modular codebase that can scale key lengths based on available hardware logic slices.

---

## Downloads

- 📄 [Download Hardware RSA Accelerator Report (PDF)](https://raw.githubusercontent.com/arii/arii.github.io/main/reports/report_6375.pdf)
