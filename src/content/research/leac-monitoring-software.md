---
title: "Lab Energy Assessment Center (LEAC) Monitoring Software"
date: "2017-05-15"
readTime: 5
tags:
  - Sustainability
  - Hardware
  - Energy Audit
  - MIT Green Labs
category: "Sustainability & Energy"
summary: "Network monitoring software and energy audit infrastructure for fume hood efficiency (MIT Green Labs Innovation Award)."
---

# LEAC Fume Hood Energy Monitoring Software

## Laboratory Sustainability & Telemetry Infrastructure

The **Lab Energy Assessment Center (LEAC) Monitoring Software** project engineered networked telemetry infrastructure to track and optimize energy consumption across academic research laboratories, earning the **MIT Green Labs Innovation Award**.

---

## The Challenge: Laboratory Fume Hood Energy Waste

Variable Air Volume (VAV) fume hoods in research laboratories consume massive amounts of energy. A single open fume hood sash can draw as much conditioned air as 3.5 average American homes, costing thousands of dollars per year in wasted HVAC heating and cooling energy.

Lacking automated telemetry, laboratory managers were unable to pinpoint inefficient sash positions or quantify department-wide energy waste.

---

## System Architecture & Software Implementation

![LEAC Fume Hood Network Monitoring Interface](/assets/research/leac.jpg)

I engineered a lightweight, networked monitoring platform to capture real-time sash positions and airflow metrics across campus research facilities:

### 1. Embedded Telemetry Ingestion
- Integrated sensor microcontrollers mounted on laboratory fume hoods to measure sash height and face velocity continuously.
- Implemented robust TCP/IP socket network protocols to transmit sensor telemetry to a centralized monitoring node.

### 2. Real-Time Energy Audit Dashboard
- Built visualization tools translating raw sash height data into real-time kilowatt-hour (kWh) power consumption estimates and carbon impact metrics.
- Developed automated alert thresholds to notify lab members when sashes remained unutilized in open configurations.

### 3. Data Analytics & Reporting
- Generated daily and monthly energy audit reports enabling department heads to evaluate sustainability milestones and target energy reduction campaigns.

---

## Recognition & Environmental Impact

- **MIT Green Labs Innovation Award:** Recognized by MIT EHS and the Working Group on Support Staff for outstanding contributions to campus sustainability.
- **Measurable Energy Savings:** Demonstrated substantial reductions in laboratory HVAC energy demand through automated feedback loops and sash-closure incentives.
