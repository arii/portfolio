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

The **Lab Energy Assessment Center (LEAC)** project engineered networked telemetry infrastructure and assessment methodologies to track and optimize energy consumption across academic research laboratories at MIT. Serving as Lead Technology Developer, I played a pivotal role in securing the initial **MIT Green Labs Innovation Award** grant that founded LEAC, developed the initial energy monitoring prototypes, and mentored undergraduate students carrying out lab energy audits across campus.

---

## The Challenge: Laboratory Energy Intensity

MIT buildings containing research laboratories consume over 300% more energy per square foot than non-lab academic facilities. Variable Air Volume (VAV) fume hoods, high-powered equipment, and constant lighting draw massive electrical and HVAC loads. For example, a single open fume hood sash can draw as much conditioned air as 3.5 average American homes, costing thousands of dollars per year in wasted HVAC heating and cooling energy.

Without low-cost, automated telemetry, laboratory managers and sustainability teams lacked granular visibility into equipment power draw, unutilized open sash positions, and campus-wide energy waste.

---

## System Architecture & Software Implementation

![LEAC Fume Hood Network Monitoring Interface](/assets/research/leac.jpg)

To address these challenges, I prototyped and built a multi-faceted monitoring platform tailored for academic laboratory environments:

### 1. Smart Outlet Network Monitoring (`tplink-energy-monitor` / `green_net`)
- Developed Node.js and Python network telemetry tools (`green_net` and TP-Link HS110/WeMo smart outlet aggregators) to scan local network interfaces, query real-time voltage, current, and active wattage, and output time-series JSON logs.
- Built live web dashboards displaying current power readings, historical daily/monthly energy totals, and automated log processing routines for equipment-level audits.

### 2. Computer Vision State Detection
- For hardwired laboratory equipment such as fume hoods and overhead lighting where inline smart plugs cannot be inserted, I prototyped lightweight computer vision algorithms.
- The visual analysis pipelines automatically identified on/off states and sash height positions from optical telemetry, translating visual feedback into estimated kilowatt-hour (kWh) power consumption and thermal load metrics.

---

## Student Mentorship & Program Execution

Following initial prototype development, I helped guide MIT undergraduate researchers conducting hands-on lab energy assessments:
- **Mentorship:** Guided undergraduate team members in configuring telemetry hardware, analyzing lab power draw datasets, and formulating tailored energy action plans for participating labs.
- **Comprehensive Assessments:** Supported student-led site visits offering holistic sustainability services, including plug-load monitoring, computer vision lighting/fume-hood analysis, glove recycling initiatives, and low-flow water aerator installations.

---

## Grant Recognition & Impact

- **MIT Green Labs Innovation Award:** Co-authored the proposal and played a key technical role in securing the MIT Green Labs grant that established LEAC as an active campus organization in collaboration with MIT EHS and MIT Sustainability.
- **Actionable Telemetry:** Provided free, minimally invasive energy audits and data-driven recommendations to campus research groups, laying the groundwork for ongoing lab decarbonization initiatives across MIT.
