---
title: "Delivery Bots: Multi-Robot Coordination under Uncertainty"
date: "2015-07-12"
readTime: 7
tags:
  - Robotics & Autonomy
  - Multi-Agent
  - RSS 2015 Finalist
  - IJRR
category: "Multi-Robot Systems"
summary: "Decentralized multi-agent package delivery in dynamic human environments (RSS 2015 Best Paper Finalist & IJRR journal publication)."
---

# Delivery Bots: Multi-Robot Coordination under Uncertainty

![Autonomous Delivery Bot Transporting Item](/assets/research/beer.png)

## Decentralized Autonomous Logistics in Dynamic Human Environments

The **Delivery Bots** research initiative addressed the challenge of deploying multi-robot autonomous fleets for package and item delivery within complex, populated indoor environments (such as university campuses and hospital corridors) where human motion and task durations are highly uncertain.

To demonstrate the system in action, I converted the MIT CSAIL lab into a miniature "bar" featuring a PR2 robot "bartender" and two Turtlebot "waiters". As the demo lead for this project, I guided the live demonstration showcasing how decentralized robots can coordinate efficiently even with intermittent communication.

---

## Research Significance & Honors

- **Demo Leadership & Awards:** Led the live project demonstration and won 2nd place at the **CSAIL Research Highlights (Spring 2015)**.
- **RSS 2015 Best Paper Finalist:** Recognized at the *Robotics: Science and Systems (RSS)* conference in Rome, Italy.
- **IJRR Journal Publication:** Expanded into a comprehensive journal paper for *The International Journal of Robotics Research (IJRR)*, submitted in December 2015 following an October 2015 invitation, with major revisions completed in June 2016.
- **Authorship:** Authored alongside Christopher Amato, George Konidaris, Gabriel Cruz, Jonathan P. How, and Leslie P. Kaelbling under the paper title *"Policy Search for Multi-Robot Coordination under Uncertainty"*.

---

## Core Technical Challenges

Multi-agent coordination in shared human spaces suffers from severe unpredictability:
1. **Dynamic Human Obstacles:** Pedestrians temporarily block hallways, slow down delivery routes, or interact unpredictably with vehicles.
2. **Task Duration Uncertainty:** Item pickup and handoff times vary widely based on human availability and response time.
3. **Communication Latency & Drops:** Centralized controllers fail when network bandwidth drops or when agents move into wireless dead zones.

---

## Algorithmic Architecture & System Design

To solve these challenges, the team developed the MacDec-POMDP algorithm utilizing macro-actions and finite-state controllers for general multi-robot coordination under uncertainty:

### 1. Decentralized Task Allocation
- Robots negotiate task assignments locally without requiring continuous connection to a central server.
- Formulation incorporates probabilistic models of route traversal times and human delays.

### 2. Macro-Action Planning under Uncertainty
- Replaces primitive motion commands with high-level macro-actions (e.g., "Navigate to Room 320 via East Hallway").
- Evaluates risk-aware belief states to dynamically re-route around crowded hallways or stalled elevator banks.

### 3. Real-World Autonomous Deployment & Fleet Integration
- Managed the end-to-end design and deployment of the autonomous multi-robot delivery fleet, owning the full lifecycle spanning hardware integration, robotic locomotion, and decentralized POMDP-based planning architectures.
- Collaborated with the CSAIL Machine Shop to mount coolers onto the TurtleBots.
- Built hard-wired interaction buttons integrated with an Ubuntu-based system using the espeak library for verbal interaction.
- Evaluated on a fleet of autonomous mobile robots operating in MIT building corridors over multi-day deployment trials.
- Demonstrated robust package delivery throughput despite unexpected corridor blockages and variable human interaction delays.

---

## Media Impact & Government Legacy

The project drew widespread public interest for using beer delivery as a fun and relatable proxy to test complex multi-robot algorithms intended for critical logistics, such as transporting medical supplies or navigating disaster zones:
- **Featured in MIT News & National Media:** Highlighted across outlets like the *Los Angeles Times*, *HuffPost*, *Popular Science*, and *UPI* for advancing real-world multi-agent coordination.
- **A Legislative Milestone:** The project achieved unexpected fame when U.S. Senator Jeff Flake introduced an amendment to the Department of Defense appropriations bill specifically targeting the research to ban federal funding for "beerbots and other robot bartenders"—cementing its unique place in both robotics history and legislative trivia.
