# src/components/AcademicCard.tsx

Download PDF Report

Watch Video Demo

Watch Playlist

View Publication

# src/components/FlagshipCard.tsx

Read Deep-Dive

Watch Video

Watch Playlist

Source Repo

# src/components/Navigation.tsx

About Ariel

Ariel Anders, PhD — Roboticist

# src/components/ToolCard.tsx

Part of

📄 PDF Report

▶️ Video Demo

📺 Playlist

# src/components/about/AboutSections.tsx

Career Highlights

At a Glance

# src/components/resume/HonorsSection.tsx

Honors & Recognition

# src/components/resume/ProjectsSection.tsx

Impact Projects

# src/components/resume/PublicationsSection.tsx

Publications & Theses

Google Scholar

# src/components/resume/ResumeHeader.tsx

Ariel Anders, PhD

Roboticist &amp; Senior Software Engineer &middot; Professional experience, technical skills, and education.

View PDF

# src/components/resume/SkillsSection.tsx

Technical Skills

# src/components/resume/TeachingSection.tsx

Teaching & Leadership

# src/config/content.ts

Products built with DevAI

Live full-stack consumer apps and platforms built with autonomous agent workflows.

DevAI Orchestration

How I build: Engineering multi-agent workflows, automated code-auditing guardrails, and agentic CI/CD pipelines to enforce production standards.

Robotics Research

Research and publications spanning robotics, motion planning, autonomy, and real-world systems.

# src/content/research/ai-experiments.md

A collection of custom dev tools, background ETL pipelines, and automated UI testing workflows I am currently building.

### Quick Status

## 1. WCS Event Telemetry Scraping & ETL Pipeline

**Stack:** Python • Pydantic • GitHub Actions • BeautifulSoup

The pipeline runs on a weekly GitHub Actions cron job. Before committing changes to , it checks  to make sure we don't spam commit logs when event data hasn't changed.

- **The Result:** The pipeline runs quietly in the background every Monday, keeping our frontend JSON data fresh with zero manual maintenance.

## 2. Ecommerce Merchandising & Storefront Automation

**Stack:** TypeScript • Printful REST API • Vector Processing

- **Why it matters:** It removes the manual merchandising overhead and keeps our product pricing and catalog nodes aligned in real time.

## 3. Context-Aware Technical Blog Drafter

**Stack:** Vector DB • LLM • Markdown

Drafting technical posts from scratch usually means wasting time fixing inconsistent code formatting or drift from established style guidelines.

To speed up my workflow, I built a local RAG tool. It indexes previous Markdown posts into a local vector store, pulling my exact writing style, phrasing preferences, and code conventions straight into the LLM prompts.

- **The Impact:** It hits the right structural hierarchy on the first try, cutting down initial drafting times by roughly 4x while keeping human editorial control.

# src/content/research/boop-light-detector.md

# Boop Light Detector App

## iOS Assistive Technology for Visually Impaired Users

## The Problem & Motivation

For blind and visually impaired individuals, simple daily tasks—such as checking whether household lights are turned on, verifying whether a Wi-Fi router status light is active, or locating open windows during the daytime—require specialized tools.

Existing light detection apps were often:

1. **Expensive or ad-laden**

2. **Inaccurate**, relying solely on raw camera pixel values without adjusting for automatic camera exposure and sensitivity adjustments.

3. **Slow or unresponsive**, requiring navigation through complex multi-screen UI menus.

4. **Lacking tactile feedback** for quiet environments like libraries or offices.

## Engineering Design & Key Features

I engineered Boop from the ground up with a minimalist, accessible single-screen architecture:

### 1. Multi-Factor Luminescence Sensing Algorithm

Rather than computing simple pixel RGB averages, my light calculation factors in:

- Camera ISO sensitivity

- Frame exposure duration

- Lens aperture and RGB pixel brightness at the center of the viewport

### 2. Real-Time Audio & Haptic Telemetry

- **Audible Pitch Modulation:** As light intensity increases, Boop modulates the frequency of an audible tone in real time.

- **Haptic Vibration Feedback:** For quiet environments, users can toggle vibration mode. The frequency of vibration pulses scales directly with light intensity.

### 3. Deep iOS VoiceOver Integration

- **Escape Scrub Gesture:** Supports two-finger Z-scrub gesture for rapid accessibility navigation.

- **Audible Value Speech:** Tapping the center of the screen prompts VoiceOver to announce the exact numeric luminescence score.

## Community Impact & Outreach

- **6,000+ Downloads:** Published on the Apple App Store as a completely free tool with zero ads, data collection, or tracking.

- **ATHack 2016 Awardee:** Received Honorable Mention at MIT ATHack 2016 in collaboration with co-creators and blind accessibility advocate Jonathan Gale.

- **Recommended Accessibility Tool:** Highlighted on community directories supporting independent living for blind individuals.

# src/content/research/bwsi-racecar.md

## Autonomous Miniature Racecars & Robotics Education

## Course Highlights & Challenge Demos

## Program Overview & Curriculum Design

In this capacity, I designed core curriculum—such as the visual servoing lab and cone detector—delivered technical lectures, and oversaw lab sessions where students programmed the cars to execute complex robotic behaviors.

### Model AI Assignments & AAAI Publication

* **Core Technologies:** Python/C++, OpenCV, and ROS.

### Core Curricular Pillars & Lectures

4. **LIDAR & Trajectory Control:** Configured planar LIDAR scans and taught high-speed control methodologies such as Pure Pursuit, SLAM, and obstacle avoidance.

## Hardware Platform & System Specs

The RACECAR vehicle platform combined high-performance compute with agile physical dynamics:

- **Compute:** NVIDIA Jetson embedded GPU platform running Ubuntu and ROS.

- **Sensing:** Hokuyo 2D LIDAR, ZED Stereo Camera, and IMU telemetry.

- **Actuation:** VESC electronic speed controller and brushless DC motor on a 1/10th scale rally chassis.

## Educational Impact & Competition

Students culminated their intensive workshop by programming the cars to perform a variety of tasks—including pure pursuit, SLAM, and visual servoing—and competing in an autonomous race through complex indoor hallways and obstacle courses.

# src/content/research/cad-cam-dental-workflow.md

# CAD/CAM Robotic Dental Crowning & Dynamic Registration Workflow

## Autonomous Surgical Robotics at Bionics Lab UCSC

*Figure 1: Robotic dental crowning experimental setup and software user interface at UCSC Bionics Lab.*

## Technical Context & Surgical Challenge

*Figure 2: Architectural diagram of the dynamic registration dental robotics setup, featuring the Denso 6-DOF robot arm, MicroScribe tracking arm, and intraoral jaw model.*

Key engineering challenges included:

1. **Dynamic Kinematic Registration:** Continuously updating target coordinates as patient/jaw movement occurs during drilling.

2. **Homogeneous Transformation Chain:** Computing frame transformations between the robot base, MicroScribe base, end-effector tool tip, and patient implant site.

3. **Safety-Critical Clinician UI:** Providing real-time toolpath visual feedback, registration status monitoring, and emergency override controls.

## Kinematic Formulation & Frame Calibration

To achieve precise alignment between the robotic tool tip and the target tooth site, we established coordinate frames across the arm and tracking sensor:

*Figure 4: Kinematic transformation chain flow used to solve for relative tool-to-implant spatial transforms.*

### Homogeneous Transformation Math

The spatial position of the target tooth implant site relative to the robot end-effector  is solved through the transformation chain:

Where:

- : Forward kinematics matrix of the Denso 6-DOF arm.

- : Static calibration transform between robot base frame  and MicroScribe base frame .

- : Joint position readout matrix from the MicroScribe tracking arm.

- : Offset vector for the target point relative to the probe tip frame .

*Figure 5: Vector transformation diagram mapping target implant location vector M6_P_ImplantLoc within the end-effector frame.*

## Closed-Loop Dynamic Tracking System

We implemented a closed-loop controller that continuously queries the tracking arm position and adjusts the Denso robot manipulator commands in real time.

*Figure 6: Closed-loop dynamic tracking control system diagram for real-time jaw motion compensation.*

*Figure 7: Real-time surgical monitoring software interface showing active frame tracking and toolpath progress.*

## Experimental Results & Tracking Accuracy

We benchmarked tracking accuracy across simulated patient motion profiles using anatomical dental phantom models.

*Figure 8: Measured 3D positional tracking error over time during dynamic compensation testing.*

*Figure 9: Alignment error distribution across experimental drilling trials, demonstrating sub-millimeter geometric accuracy.*

Experimental results verified:

- **Control Loop Rate:** Real-time compensation loop running at 100 Hz update frequency.

## Video Demonstrations & Media

## Downloadable Technical Report

## Research Significance

- Demonstrated real-time dynamic registration for dental implant preparation and crowning.

- Verified sub-millimeter trajectory execution under clinician-in-the-loop oversight.

# src/content/research/conformant-planning-manipulation.md

## Overview

This research forms the core of my PhD dissertation at **MIT CSAIL**, advised by **Prof. Leslie Pack Kaelbling** and **Prof. Tomás Lozano-Pérez**. My work enables general-purpose helper robots to reliably arrange unanchored objects into desired target configurations despite severe pose uncertainty caused by inaccurate sensing, control errors, and unknown physical friction.

*Figure 1: PR2 robot performing conformant manipulation to arrange polyomino blocks into tight slots under pose uncertainty without visual feedback.*

## ICRA & Video Overview Breakdowns

Primary video overviews detailing the conformant planning framework, ICRA 2018 spotlight, and conference presentation.

## Part 1: Conformant Planning Paradigms

- **Optimization:** Solves for ideal fixture geometry, contact angles, and push trajectories, transforming high-variance placements into deterministic funnels.

#### Video Breakdowns: Sliding & Plan Improvement

- **Concept:** Formulates manipulation as a forward search over non-parametric belief probability distributions .

- **Shrinkage Guarantee:** Identifies action sequences  that guarantee monotonic support reduction prior to final insertion:

#### Video Breakdowns: Planning & Funneling

## Part 2: Belief State Visualization & Action Noise Characterization

To ground simulated transitions in physical reality, the second major pillar of my thesis focuses on experimental noise characterization and spatial particle overlays for physical robot actions.

*Figure 10: Algorithm belief-state overlay depicting particle distributions and empirical contact confidence bounds during manipulation.*

### Experimental Protocol & Software Stack

To capture true physical noise profiles, I programmed the **Willow Garage PR2 robot** using **ROS, Python, and C++**:

- **Automated Vicon Motion Capture:** Designed automated pipelines that repeatedly executed hundreds of grasping, sliding, and placing trajectories under millimeter-accurate optical tracking.

#### Video Breakdowns: Sensing Noise & Action Characterization

## Experimental Benchmarks & Results

Physical experiments conducted on the PR2 platform demonstrated that conformant planning yields dramatic improvements in assembly reliability:

| Benchmark Task | Standard Open-Loop Baseline | Conformant Planning & Pushing | Performance Improvement |

| :--- | :--- | :--- | :--- |

| **Bimanual Fixture Assembly** | < 5.0% | **85.2%** | **+80.2%** |

## Defense Presentation & Visuals

*Figure 13: "Eric", the robot thesis mascot used to visually convey belief-state uncertainty and contact constraints.*

### Thesis Mascot: "Eric" the Robot

To communicate these theoretical planning concepts during my thesis defense presentation, I created **"Eric"**, a cartoon robot mascot inspired by my advisor Leslie's stick figures:

- **"Blindfolded Eric":** Illustrating sensorless manipulation sequences where physical contact boundaries replace visual perception.

- **"Picketing Eric":** Highlighting edge cases where open-loop trajectories fail due to unexpected friction or rotational torque.

## Key Takeaways

1. **Environmental Mechanics as Zero-Cost Sensors:** Physical boundaries and contact friction systematically collapse pose uncertainty without perception overhead.

2. **Occlusion Immunity:** Contact-driven strategies ensure high-tolerance placement when optical sensing is completely blocked by end-effectors.

3. **Actionable Noise Tooling:** Empirical belief-state overlays give roboticists clear diagnostic tools to validate stochastic contact models.

## Citation & Thesis Downloads

### IEEE ICRA Paper & Dissertation Record

* **Thesis Title:** *Reliably Arranging Objects: A Conformant Planning Approach to Robot Manipulation*

* **Author:** Ariel S. Anders, PhD

* **Advisors:** Prof. Leslie Pack Kaelbling & Prof. Tomás Lozano-Pérez

### BibTeX Citation

# src/content/research/delivery-bots.md

# Delivery Bots: Multi-Robot Coordination under Uncertainty

## Decentralized Autonomous Logistics in Dynamic Human Environments

To demonstrate the system in action, we converted the MIT CSAIL lab into a miniature "bar" featuring a PR2 robot "bartender" and two Turtlebot "waiters". As the demo lead for this project, I guided the live demonstration showcasing how decentralized robots can coordinate efficiently even with intermittent communication.

## Research Significance & Honors

## Core Technical Challenges

Multi-agent coordination in shared human spaces suffers from severe unpredictability:

1. **Dynamic Human Obstacles:** Pedestrians temporarily block hallways, slow down delivery routes, or interact unpredictably with vehicles.

2. **Task Duration Uncertainty:** Item pickup and handoff times vary widely based on human availability and response time.

3. **Communication Latency & Drops:** Centralized controllers fail when network bandwidth drops or when agents move into wireless dead zones.

## Algorithmic Architecture & System Design

### 1. Decentralized Task Allocation

- Robots negotiate task assignments locally without requiring continuous connection to a central server.

- Formulation incorporates probabilistic models of route traversal times and human delays.

### 2. Macro-Action Planning under Uncertainty

- Evaluates risk-aware belief states to dynamically re-route around crowded hallways or stalled elevator banks.

### 3. Real-World Autonomous Deployment

- Evaluated on a fleet of autonomous mobile robots operating in MIT building corridors over multi-day deployment trials.

- Demonstrated robust package delivery throughput despite unexpected corridor blockages and variable human interaction delays.

## Media Impact & Government Legacy

The project drew widespread public interest for using beer delivery as a fun and relatable proxy to test complex multi-robot algorithms intended for critical logistics, such as transporting medical supplies or navigating disaster zones:

- **Featured in MIT News & National Media:** Highlighted across outlets like the *Los Angeles Times*, *HuffPost*, *Popular Science*, and *UPI* for advancing real-world multi-agent coordination.

- **A Legislative Milestone:** The project achieved unexpected fame when U.S. Senator Jeff Flake introduced an amendment to the Department of Defense appropriations bill specifically targeting the research to ban federal funding for "beerbots and other robot bartenders"—cementing its unique place in both robotics history and legislative trivia.

# src/content/research/deployment-impact-analyzer.md

A common challenge in modern web development is understanding the "blast radius" of a change. When you modify a shared utility or a global CSS variable, how do you know which pages across your entire application are affected?

Manual regression testing is slow and error-prone. Full end-to-end suites are expensive to run on every commit. Our solution is the **Deployment Impact Analyzer**: a CI/CD pipeline that semantically determines the scope of a change and performs targeted visual validation.

## The Architecture

The Deployment Impact Analyzer operates in four distinct phases:

1.  **Import Graph Parsing**: Identifying which files are affected by the PR.

2.  **Route Mapping**: Translating affected files into user-facing routes.

3.  **Visual Diffing**: Capturing and comparing screenshots using Playwright and pixelmatch.

4.  **Severity Scoring**: Calculating the impact and reporting findings to the PR.

## 1. Import Graph Parsing with dependency-cruiser

By identifying the "semantic blast radius," we reduce the number of screenshots we need to capture by up to 90% in large-scale applications.

## 2. Automated Playwright Screenshot Diffing

Once we have a list of affected routes, we trigger a Playwright-based capture service.

The pipeline performs a "sandwich" comparison:

1.  **Baseline**: Capture screenshots of the affected routes on the  branch.

2.  **Current**: Capture screenshots of the same routes on the feature branch.

3.  **Diff**: Use  to generate a pixel-level delta.

To improve the signal-to-noise ratio, we automatically crop the diff to the bounding box of the changed area. This helps reviewers focus on the specific UI shift rather than scanning a full-page screenshot.

## 3. Severity Scoring & Reporting

Not all pixel diffs are created equal. A 1px shift in a footer is different from a broken hero section.

Our scoring engine calculates a **Severity Score** based on:

- **Pixel Count**: The absolute number of changed pixels.

- **Percentage**: The ratio of changed pixels to the total area.

- **Layout Shift**: Detection of significant element movement.

If the score exceeds a configurable threshold, the pipeline marks the check as failed and requests a manual visual review.

## 4. GitHub Actions Integration

The entire system is orchestrated via GitHub Actions. We've optimized the workflow to use caching for the  graph and parallelize Playwright workers to keep execution times under 5 minutes.

### Example Report Output

When a PR is opened, the analyzer posts a summary directly to the GitHub conversation. This allows developers to see the impact at a glance without leaving their workflow.

| Route | Visual Diff | Severity | Action |

| :--- | :--- | :--- | :--- |

|  | 12.4% | 🔴 HIGH | Manual Review Required |

|  | 0.0% | 🟢 LOW | Auto-passed |

|  | 1.2% | 🟡 MEDIUM | Review Suggested |

> **Implemented:** We use the  diff artifacts to show exactly where the pixels changed, saving reviewers from playing "spot the difference" on full-page screenshots.

| Before | After | Diff |

| :---: | :---: | :---: |

*A "sandwich" comparison showing the baseline, the new state, and the highlighted pixel delta.*

### Real-World Finding: From 404 to Overflow Resolution

Visual regression testing is particularly effective for catching "cumulative" bugs—issues that only appear once multiple components are integrated. During the development of this tool, we encountered a three-stage regression that perfectly illustrated the system's value.

Initially, a routing configuration error caused the analyzer to hit a "Content Not Found" page. While the code for the tool existed, the dynamic route hadn't been registered in the main portfolio index.

After fixing the routing, the page rendered, but a new issue emerged on mobile viewports. Long file paths in the  component were overflowing their containers, breaking the layout and pushing the "Category" labels off-screen. This is a classic "invisible" regression that passes unit tests and type-checks but fails the "eyeball test."

We implemented a fix using Tailwind's  and  utilities, ensuring that assets are readable even on the narrowest devices.

| 1. Missing | 2. Diff | 3. Fixed |

| :---: | :---: | :---: |

*The mobile resolution sequence: from a 404 state to an overflow regression, and finally the resolved responsive layout.*

## Lessons Learned

Building this tool taught us that **context is king**. An LLM can review code, but it struggles to "see" layout shifts. By combining deterministic graph analysis with visual regression, we create a "tripwire" that catches regressions before they reach production.

The next evolution of this tool involves agentic auto-resolution: using LLMs to analyze the visual diff and decide if a change is an intentional improvement or an accidental regression.

# src/content/research/duckietown.md

# Duckietown: Autonomous Taxi Fleet

## Overview & Inaugural MIT 2.166 Class

I was a member of the inaugural MIT 2.166 class taking Duckietown as a student as part of my major requirements for my doctorate degree. Working directly on the platform in its founding year, I helped develop and test fundamental autonomous driving pipelines—including visual lane detection, state estimation, and multi-robot fleet coordination under real-world sensing constraints.

For more background on the class and its history:

## Demonstrations & Fleet Videos

*Duckiebots navigating lane markers, managing intersection traffic, and executing autonomous taxi dispatch across Duckietown road networks.*

## System Architecture & Technical Components

The Duckietown architecture integrates classical computer vision with real-time feedback control:

- **Monocular Vision & Lane Tracking:** Processing onboard single-camera input to detect line segments, fit road lane boundaries, and compute heading errors using color space transformations and Hough transforms.

- **State Estimation & Kinematics:** Utilizing differential-drive robot kinematics and extended Kalman filtering to estimate position relative to lane centerlines.

- **Intersection & Signal Navigation:** Detecting visual AprilTags at intersections to handle right-of-way rules, stop sign negotiation, and multi-robot traffic flow.

- **ROS Middleware Architecture:** Modular ROS nodes for camera pipelines, controller loops, motor PWM output, and inter-bot wireless state broadcasting.

## Impact & Educational Reach

# src/content/research/gitops-pr-reviewer.md

The first version of my AI review workflow made the classic mistake: I asked the model to do everything.

It had to understand the repo, inspect the diff, infer the design system, read CI logs, and decide what mattered. Sometimes it worked. Often it produced a confident wall of feedback that was hard to trust.

The better pattern was smaller and more boring: collect the important pull request context first, then ask the model to review that prepared packet.

This article walks through the review pipeline I use for BoomTick.blog: GitHub Actions collects the context, Gemini reviews it, structured findings decide what blocks the PR, and Playwright screenshots catch UI changes that normal tests miss.

It is not a fully autonomous engineer. It is a review assistant made from scripts, prompts, CI glue, and a few hard safety boundaries.

## What you will build

By the end of this walkthrough, you will understand how to build a review assistant that can:

- collect pull request context and perform token budgeting before calling an LLM

- send a focused prompt directly to the Gemini API

- request structured findings instead of vague prose

- map findings deterministically into GitHub review states

- optionally use CI logs and Playwright screenshots as review inputs

This is not a replacement for human review. It is a way to make first-pass review more repeatable.

## The shape of the pipeline

The important part is not the exact command name. It is the handoff.

The model does not start with a vague instruction like "review this PR." It starts with a prepared packet: the diff, failing logs, linked context, and the project rules that matter for this repo.

That one change makes the review easier to repeat, easier to debug, and easier to distrust when it gets something wrong.

## What is real in this repo?

This article mixes two things:

- the workflow I actually use in this repo

- the general pattern someone else could copy

I call that out because AI automation articles often blur the line between "this works today" and "this would be cool if finished."

For this article:

- **Implemented** means the script, command, or workflow exists in the repo.

- **Experimental** means it exists but still needs manual setup, review, or judgment.

- **Pattern** means it is the architecture I recommend, even if the exact command name in your repo would be different.

## Command naming note

This article uses two kinds of commands:

- **Generic example commands** show the shape of the pipeline and are meant to be adapted.

- **Repo-specific commands** are the actual commands used in this project.

When a command is repo-specific, I call that out explicitly. When a command is generic, treat it as pseudocode for your own repo.

## 1. Make the model review a packet, not the repo

The biggest improvement came from taking work away from the model.

A weak review prompt looks like this:

> Review this PR.

That sounds simple, but it hides too many jobs. The model has to discover what changed, infer which files matter, understand the project conventions, notice CI failures, and decide which issues are worth blocking.

A better prompt starts with a prepared context packet.

That packet can include:

- the PR title and description

- the changed files

- the relevant diff

- CI failure logs

- linked issue text

- project-specific review rules

- design-system constraints

Now the model has a narrower job: review the packet and produce findings.

> **Implemented:**  fetches PR diffs, CI logs, and linked issue context into a structured review packet.  handles batch aggregation.

The point is not that my aggregation command is special. The point is that the model should receive a curated artifact instead of wandering through the repo.

## 2. Orchestrate with the Gemini API

The AI inference should be the least complicated part of the system. I call the Google Gemini API directly, relying on Gemini's large context window to ingest diffs and build artifacts without truncation.

The quality comes from everything around it: the context packet, the review rules, the output schema, and the script that processes the result.

This is intentionally boring. If this part feels magical, the pipeline is probably too hard to debug.

The model should not be responsible for knowing your repo's entire history. It should receive a bounded task, produce bounded output, and leave the final decision to deterministic code.

> **Implemented:** The AI orchestration logic is centralized in .

## 3. Ask for findings the code can understand

A paragraph of AI feedback is easy to read and hard to automate.

For a human-only workflow, prose is fine. For a CI workflow, prose is a problem. A script cannot reliably tell whether "this might be worth revisiting" should block a PR.

The model can still be wrong. The schema does not make it truthful.

What the schema does is make the next step testable. A script can check whether  is empty, format PR comments consistently, and safely reject malformed output.

## 4. Let scripts decide what blocks the PR

I do not want the model deciding whether a pull request is approved.

The model can describe findings. A deterministic script should decide how those findings map to GitHub review states.

That separation matters. It keeps the model from turning a stylistic opinion into a blocked PR, and it keeps a serious failure from being buried inside a friendly summary.

- **Blocking:** Use  when the finding should stop the merge: broken builds, accessibility regressions, missing required props, or known design-system violations.

- **Non-blocking:** Use  for feedback that may be useful but should not stop the PR: naming, refactors, minor cleanup, or subjective UI polish.

- **Clean:** Use  or a summary comment only when there are no blocking findings.

> **Implemented:**  handles , , and  states.

The model proposes the facts. The script applies the policy.

## 5. Use CI failures as context, not permission to auto-merge

CI failures are useful because they are specific. They tell the agent where the pain is.

But a failing test should not give an agent permission to silently rewrite the project. The safer pattern is to treat the failure as context for a repair suggestion.

The workflow is:

1. CI fails.

2. A script extracts the relevant log section.

3. The repair agent receives the log, changed files, and recent diff.

4. The agent comments or proposes a patch.

5. A human reviews the result before merge.

That last step is not ceremony. It is the safety boundary.

## 6. Use Playwright screenshots as a tripwire

For a UI-heavy site, "the tests pass" is not the same as "the page still looks right."

A layout can shift. A button can wrap. A mobile nav can cover the page. TypeScript will not care.

That is why I use Playwright screenshots as a tripwire. They do not decide whether a design change is good. They just tell me something changed.

This works best for stable routes: home pages, article pages, navigation states, and important UI shells. It works poorly for pages with constantly changing content unless you mask or stabilize the dynamic areas.

> **Pattern:** Playwright visual regression is the architecture this repo is moving toward. The test runner config exists. Baseline screenshot generation and CI comparison are not yet fully automated; that is the next step.

## The smallest useful version

You do not need the whole pipeline to get value from this pattern.

The smallest useful version is just two steps:

1. Create a review context file.

2. Ask Gemini to review that file.

Everything else, including GitHub comments, review states, CI repair, and screenshot analysis, can come later.

Even if you never post the result back to GitHub automatically, you still get a repeatable review artifact that can be inspected, improved, and rerun.

## What this does not solve

This pipeline makes review more repeatable. It does not make the model infallible.

LLMs can still:

- hallucinate non-existent file paths

- miss subtle edge cases or race conditions

- over-focus on cosmetic style choices

- misunderstand implicit project conventions

- produce confident but invalid suggestions

That is why the model is boxed in on both sides.

Before the model, deterministic scripts collect the context. After the model, deterministic scripts decide how to handle the findings.

The model is useful, but it is not the source of truth.

## The lesson: shrink the model's job

The biggest improvement was not switching models. It was changing the shape of the task.

> Ask the model to inspect the repo, infer the architecture, find the diff, understand CI, and review the code.

That is the bad pattern. It produces feedback that is hard to trust and harder to automate.

> Give the model a prepared packet and ask it to perform one narrow review task.

That is the better pattern.

Deterministic code should handle everything before and after the inference step: context gathering, token budgeting, format validation, and review state mapping. Start by shrinking the job.

# src/content/research/graduate-engineering-projects.md

# Graduate Engineering Projects

A showcase of advanced graduate-level engineering systems developed at MIT. These projects span real-time computer vision control, ordinal machine learning ranking, and parameterized hardware accelerators built using Bluespec SystemVerilog.

### Designing Closed-Loop Vision Trajectory Tracking for Micro-Quadrotors

### System Architecture & Control Loop

Autonomous flight using low-cost micro-drones poses severe real-time compute and sensor noise constraints. My primary contributions focused on the image processing architecture and integration into the Rolling Spider framework:

#### A. Offline Image Processing & Data Capture Pipeline

- **Pixel Offset Calculation:** Implemented a lightweight line detection algorithm iterating over pixel arrays to compute the position-wise pixel offset relative to the center line.

#### B. Cascaded Control & System Integration

- **Bang-Bang Controller Prototype:** Initially integrated the pixel offset algorithm into a bang-bang controller modifying  and  to test custom input command streaming.

### Hardware & Flight Verification

- **Platform:** Parrot Rolling Spider micro quadrotor equipped with a down-facing camera, pressure sensor, and ultrasonic altitude sensor.

- **Ground Station Interface:** Custom MATLAB/Simulink and Python communication links transmitting control packets at high refresh rates.

### Evaluating Learning Algorithms for Bounding Box Reranking

### Core Problem & Approach

Object detection systems used in mobile robotic manipulation frequently yield imperfect candidate bounding boxes. Standard regression models fail to account for relative ranking preferences across candidate detections.

Key technical highlights:

1. **Ordinal Regression:** Formulated pairwise loss functions to prioritize high-precision detection candidates over background noise.

2. **P-Norm Push:** Implemented the P-norm push ranking algorithm to enforce strict top-rank accuracy for target manipulation objects.

3. **Experimental Validation:** Evaluated bounding box confidence scoring across real-world cluttered kitchen environments.

### Key Results

- Demonstrated significant ranking accuracy improvements over standard linear regression baseline models.

- Established optimal feature representation strategies for bounding box candidate reranking in robotic manipulation.

### Implementing Parameterized Montgomery Modular Arithmetic

### Architecture & Hardware Specification

RSA public-key cryptography relies on modular exponentiation over large integers, which is computationally expensive in software.

Key architecture features:

1. **Montgomery Modular Multiplication:** Accelerated large integer modular arithmetic while eliminating expensive division steps.

2. **Pipelined Datapath:** Parameterized bit-width datapath allowing custom throughput/area trade-offs.

3. **BSV Rule Synthesizability:** Modeled concurrency using guarded atomic actions to ensure deadlock-free hardware execution.

### Project Significance

- Achieved efficient cycle-accurate execution for multi-hundred bit RSA key processing on FPGA target platforms.

- Validated hardware verification methodologies for formal safety in cryptographic hardware modules.

# src/content/research/leac-monitoring-software.md

# LEAC Fume Hood Energy Monitoring Software

## Laboratory Sustainability & Telemetry Infrastructure

## The Challenge: Laboratory Energy Intensity

Without low-cost, automated telemetry, laboratory managers and sustainability teams lacked granular visibility into equipment power draw, unutilized open sash positions, and campus-wide energy waste.

## System Architecture & Software Implementation

To address these challenges, I built and deployed a multi-faceted monitoring platform tailored for academic research environments:

- Designed the initial data logging architecture and command-line execution flows to capture high-frequency power measurements.

### 2. Computer Vision State Detection

- For hardwired laboratory equipment such as fume hoods and overhead lighting where inline smart plugs cannot be inserted, we incorporated lightweight computer vision pipelines to identify on/off states and sash positions.

## Student Mentorship & Program Execution

Following initial prototype development, I worked closely with our team—including co-founders, EHS liaisons, and talented undergraduate researchers—to support campus-wide audits:

## Grant Recognition & Impact

- **Actionable Telemetry:** Provided free, minimally invasive energy audits and data-driven recommendations to campus research groups, establishing a scalable model for lab decarbonization.

# src/content/research/light-therapy-mit.md

# Light Therapy at MIT

## Mitigating Seasonal Affective Disorder Across Campus

## Background & Personal Context

Moving to Boston from California, I was initially terrified of the harsh New England winter. During my second winter, working long hours between my office, the lab, and the gym in the Ray and Maria Stata Center, I developed severe wrist pain and fatigue. A doctor diagnosed me with a vitamin D deficiency linked to a lack of sunlight.

Once I started taking supplements, spending extra time walking in the morning sun, and using a light box at my desk, my mood lifted and my physical symptoms cleared up within a couple of weeks. When the MindHandHeart Innovation Fund launched, it felt like a natural step to bring light boxes to campus spaces so others could experience that same relief.

Clinical research demonstrates that daily exposure to artificial light therapy effectively treats SAD by mimicking natural outdoor light to regulate circadian rhythms and melatonin levels in the hypothalamus. However, high-grade phototherapy lightboxes can be bulky and expensive for individual students to purchase.

## Project Execution & Campus Deployment

Supported by the **MIT MindHandHeart Innovation Fund**, I proposed and executed a campus-wide phototherapy deployment plan:

### 1. EHS Approval & Safety Coordination

### 2. High-Traffic Phototherapy Stations

### 3. Equipment Evaluation

Users were given full control to switch the bright-light lamps on and off depending on their preference. I collected ongoing feedback via suggestion boxes and my project website to evaluate the pilot's success.

## Outcomes & Legacy

- **Institutional Funding:** Successfully secured initial grant funding from MindHandHeart's inaugural Innovation Fund round.

- **Mental Health Awareness:** Educated the campus community about SAD—a condition that Massachusetts residents are particularly vulnerable to during long winter months.

- **Campus Adoption:** The pilot project served as a template for expanding mental health support and student-led wellness initiatives across MIT dormitories and departments.

# src/content/research/masters-thesis.md

# Learning a Strategy for Whole-Arm Grasping

* **Author:** Ariel Anders

* **Advisors:** Prof. Leslie Pack Kaelbling & Prof. Tomás Lozano-Pérez

## Demonstration Video

*Whole-arm and bimanual grasping demonstrations securing bulky, irregular objects on the PR2.*

## Project Overview

Traditional robotic grasping separates the problem into two distinct stages: finding optimal contact points for the fingertips and planning collision-free trajectories to reach them. While effective for small items with known CAD models, this approach breaks down when handling large, heavy, or irregularly shaped objects where fingertip pinch grasps lack the required torque and contact area.

In my Master's thesis, I formulated a framework for **whole-arm grasping**. Instead of restricting contact to end-effectors, the robot leverages the full kinematic chain—forearms, upper arms, and torso—to envelope, scoop, and cradle unmodeled objects under physical and pose uncertainty.

*Figure 1: Experimental setup and kinematics for whole-arm grasping on the PR2 platform.*

## Technical Approach & Methodology

### 1. Unified Policy Formulation

* Replaced the decoupled grasp-then-plan paradigm with a policy search formulation that directly maps object states and robot configurations into coordinated multi-joint trajectories.

* Optimized motions over a distribution of object poses and geometries to ensure robustness without requiring high-precision 3D reconstruction.

### 2. Reinforcement Learning for Whole-Arm Envelopment

* Formulated the enveloping and lifting sequence as a policy optimization problem.

* Trained policies in physics simulation to discover dynamic multi-joint motions that cradle objects against the robot's body while managing contact constraints and gravity.

### 3. Bimanual & Torso Coordination

* Transferred learned simulation policies directly to the physical Willow Garage PR2 platform.

*Figure 2: Word cloud of core themes from my MIT S.M. thesis.*

## Reinforcement Learning Simulations

Simulation trials evaluating policy convergence, trajectory generation, and stability across object dimensions and initial offsets:

Validation of learned whole-arm manipulation policies on the physical PR2:

## Key Takeaways

* **Form-Closure Caging Over Precision Points:** Enveloping objects with the full arm structure creates robust form-closure and support surfaces, bypassing the need for exact fingertip friction modeling.

* **Payload Scaling:** Utilizing the arms and torso distributes load and joint torques, enabling manipulation of items far exceeding the PR2 gripper payload limits.

# src/content/research/robocon-mit.md

# RoboCon MIT

**Goals**

* **Connect Campus Labs:** Give graduate students and postdocs a shared space to present hardware demos, posters, and talks across departments.

* **Centralize Event Info:** Provide a single page where attendees could check the schedule, find room locations at the Media Lab, and see submission guidelines.

**What I Did**

* **Built the Website:** Designed and wrote the front-end HTML/CSS from scratch to display the multi-track schedule, speaker lists, and event details on a simple, responsive page.

* **Deployed on Athena:** Hosted and maintained the site files in MIT’s Athena  environment, updating schedules and speaker info as the program came together.

* **Handled Submissions:** Coordinated the abstract intake for spotlight talks and poster sessions across topics like manipulation, control, and soft robotics.

* **Helped Run the Event:** Managed day-of logistics, room transitions, and attendee check-in at the Media Lab.

**Results**

* Gathered over 150 MIT researchers, students, and local industry attendees for a day of talks and demos.

* Kept the event logistics and schedule running smoothly through a lightweight site that needed no complex backend maintenance.

# src/content/research/undergraduate-projects.md

### CMPE 100: Logic Design

* **Focus:** Fundamental combinational and sequential logic design, gate-level implementations, and hardware verification.

* **Highlights:** Designed and tested robust digital subsystems, finite state machines, and hardware description language workflows on FPGA development boards.

#### CMPE 100L Laboratory: Breadboard D Flip-Flop

### CMPE 121: Microprocessor System Design

* **Focus:** Microprocessor architecture, memory mapping, peripheral interfacing, and low-level C and Assembly programming.

* **Highlights:** Engineered a fully integrated microcontroller-based system, managing custom peripheral drivers, interrupt service routines, and serial communication protocols.

## 68HC11 Microcontroller Board for Mechanical Gripper Control

### Hardware Architecture

Building the system required an intensive wire-wrapping and soldering process to construct a custom circuit layout. The hardware configuration consists of the following components:

* **Microcontroller & Memory:** A Motorola 68HC11E1 chip configured in expanded bus mode operating alongside 8KB external SRAM and 8KB EPROM. I performed rigorous bus interface timing analysis to verify read/write constraints and avoid bus contention across hardware operating modes.

* **Power Regulation:** An integrated 7-12V DC power regulation circuit to supply stable power to the logic and peripherals.

* **Peripherals & Connectivity:** A DB9 serial port connection integrated with standard RS-232 communication lines connected directly to a mechanical gripper, alongside the SPI serial protocol for auxiliary peripheral expansion.

### Software Implementation

The software was structured to manage real-time communication and hardware feedback loops using the RS-232 communication protocol:

* **Pseudo-Force Control:** Motor resistance is regulated by specifying direct current levels. I mapped out eight distinct current settings into their hexadecimal representations, creating a structured command look-up table for both opening and closing actions.

* **Dynamic Lookup System:** When an operator presses a digital push-button, the program measures the active voltage across the potentiometer and uses that value to index the corresponding open or close command from the lookup table.

### Downloadable Technical Report

### CMPE 118: Introduction to Mechatronics

* **Focus:** Interdisciplinary electromechanical systems blending microcontrollers, analog signal conditioning, DC/stepper motor control, and sensor feedback loops.

* **Highlights:** Built autonomous embedded robotic platforms capable of real-time environmental navigation, obstacle detection, and precise actuation under tight hardware constraints.

## **Project Overview: MAK Attack Autonomous Mechatronic System**

### **At a Glance**

* **Objective**: Designed and engineered an 11" x 11" x 11" fully autonomous robot programmed to navigate an 8' x 8' competitive course, locate and engage an opponent island via infrared beacons, deploy a mechanical projectile system, and return safely to the home island.

* **Roles**: Served as Systems Engineer, Programming Lead, and Circuit Debugger.

### **Engineering Design & Implementation**

#### **1. Software Architecture & Control Systems**

* **Ambient-Resilient Event Detection**: Developed a differential sampling state machine for the robot’s IR tape sensors. By capturing active and passive states sequentially, the software calculated ambient light deltas to stabilize detection thresholds under variable environmental lighting.

#### **2. Hardware & Electrical Engineering**

* **Mixed-Signal Circuit Debugging**: Led the integration, isolation, and validation of the robot's sensory circuits, including high-pass and low-pass trans-resistive op-amp filter stages to clean noisy phototransistor signals.

* **Sensor & Actuator Integration**: Successfully implemented an active-high IR beacon-tracking filter, basic binary bump-sensor networks, a high-current H-bridge driver circuit, and dedicated TIP122 Darlington transistor circuits to govern mechanical subsystems.

#### **3. Mechanical Design Strategy**

* **Modular Parametric Chassis**: Participated in the collaborative design of a modular CAD framework in SolidWorks. The architecture isolated structural power distribution and drive elements from specialized operational modules, simplifying physical debugging and enabling efficient on-the-fly hardware replacement.

* **Servo-Driven Launching Mechanism**: Integrated dual high-velocity toy motors paired with a high-torque servo-actuated feeding mechanism to sequentially chamber and discharge ping-pong projectiles at target vectors.

### **Key Results & Engineering Takeaways**

* **Integration-Driven Development**: Successfully mitigated integration bottlenecks by designing testing harnesses and sub-assembly code in parallel with mechanical builds throughout a 5-week integration runway.

* **High-Precision Target Acquisition**: Achieved exceptional accuracy with the projectile launcher, consistently landing multiple impacts on target by relying on dynamic software thresholding to counter complex external ambient light interference.

* **Agile Problem Solving**: Overcame a critical, late-stage failure of the robot's primary micro-servos by adapting the physical chassis to house robust, larger-scale servos and utilizing custom ground shielding around signaling lines to eliminate high-current motor noise.

### **System & Component Gallery**

| **MAK Attack Autonomous Robot Assembly** | **Sensory and Signal Processing Circuitry** |

| :---: | :---: |

| **Top-Down Chassis Interior** | **CAD Chassis Model & Structural Layout** |

| **Complete System with Sensor Array** | |

### Standalone Side Project: Microcontroller-Based LED Game

* **Focus:** Interactive embedded hardware, custom firmware state machines, and resource-constrained peripheral control.

* **Highlights:** Developed a portable arcade-style LED game powered by a standalone microcontroller, featuring custom multiplexed matrix displays, debounced user inputs, and responsive gameplay logic.

We created this interactive arcade game for the Tau Beta Pi student organization during Engineering Week at UC Santa Cruz in February 2020. Built by Ariel Anders, Nathan Abercrombie, and Julian Dahan, the game challenges players to press a large button and stop a fast-moving light on a specific target LED.

## Technical Summary & Core Takeaways

These undergraduate endeavors established my core engineering methodology across:

- **Embedded C & Microcontrollers:** Low-level register configuration, interrupt-driven I/O, and serial protocols.

- **Mechatronics Integration:** Interfacing analog sensors, shaft encoders, DC motors, and stepper drivers.

- **Real-Time Control:** PID feedback loops, finite state machine architectures, and hardware-in-the-loop debugging.

# src/content/research/versiontruth.md

To eliminate these hallucinations, we built and submitted **VersionTruth** at NandaHack — a live ground-truth lookup service and standardized  that enables coding agents to verify dependency versions against official registries *before* writing changes.

participant Skill as SKILL.md Specification

Agent->>Skill: Reads tool definition & endpoints

Agent->>API: GET /api/compare-version?ecosystem=gh-action&name=actions/checkout&candidate=v4

API->>Registry: Fetches real-time releases & tags

Agent->>Agent: Retains v6 instead of hallucinated downgrade

GET /api/latest-version?ecosystem=gh-action&name=actions/checkout HTTP/1.1

Host: boomtick.blog

"ecosystem": "gh-action",

"name": "actions/checkout",

"latest": "v6.0.1",

"updatedAt": "2026-07-08T12:00:00Z"

GET /api/compare-version?ecosystem=gh-action&name=actions/checkout&candidate=v4 HTTP/1.1

Host: boomtick.blog

"candidate": "v4",

"latest": "v6.0.1",

"isOutdated": true,

"isDeprecated": false,

"recommendation": "Do not downgrade. v6.0.1 is valid and current."

# VersionTruth Agent Skill

- Oracle API:

- Ecosystems supported: , ,

Rule: Unfamiliarity is NOT evidence of hallucination. If a version exceeds your training context cut-off, query VersionTruth first.

return False

return True

if __name__ == "__main__":

if not valid:

`

## Experimental Results & Hackathon Validation

| Metric | Baseline Agent | Agent + VersionTruth Skill |

| :--- | :---: | :---: |

| Accidental Downgrade Rate | 42.0% | **0.0%** |

| CI Minute Waste / PR | 14.2 min | **0.0 min** |

| Average Registry Query Latency | N/A | **85 ms** |

By providing coding agents with real-time ground truth, VersionTruth transforms agentic dependency management from risky speculation into deterministic engineering.

# src/data/aboutData.ts

Ariel Anders, PhD

Roboticist & Senior Software Engineer

MIT CSAIL

Robust.AI

Civ Robotics

Google Scholar

BoomTick Blog

2012 – 2019

2019 – 2022

First roboticist & behavior lead — real-time indoor social navigation.

2022 – 2024

Senior SWE, Planning team — onboard motion planning & decision-making.

2025 – 2026

# src/data/academicResearch.ts

Focused on reliable robotic manipulation under pose uncertainty using conformant belief-state planning and fixture optimization, improving physical multi-step assembly success from 1.9% to 80.7%.

Learning a Strategy for Whole-Arm Grasping

Developed reinforcement learning policies and sensorimotor frameworks for bimanual and whole-arm grasping of bulky, irregular objects under real-world clutter.

Reliably Arranging Objects in Uncertain Domains

Introduced an efficient belief-state planning algorithm that optimizes physical fixture placements to guarantee reliable object manipulation in uncertain physical environments.

Policy Search for Multi-Robot Coordination under Uncertainty

Formulated scalable decentralized POMDP policy search methods for multi-robot team coordination under stochastic motion and communication uncertainty.

Programming Self-Driving Race Cars at MIT BeaverWorks

Designed hands-on algorithmic robotics curriculum for 1/10th scale autonomous race cars, teaching perception, obstacle avoidance, and control.

# src/data/home.ts

Ariel Anders Portfolio

Roboticist & Agentic Orchestration Architect

Ariel Anders, PhD

Roboticist & Senior Software Engineer

AI-Accelerated Rigor

I build agentic CI/CD workflows and automated code reviews that aggressively catch technical debt—accelerating engineering speed without compromising rigor.

Make Robots Behave

I combine machine learning, motion planning, and precise system design to ensure predictable, reliable robotic performance in uncertain environments.

Motion Planning & Autonomy

Planning and autonomy for reliable real-world robotic systems.

Agentic DevAI

AI agents and developer tooling for modern software engineering.

Production Software

Production C++, Python, and ROS 2 for real-time onboard autonomy.

Deployment & Edge Infrastructure

Docker, CI/CD, cloud, and robotics deployment infrastructure.

I build reliable software for robotics and autonomous systems, from motion planning and localization to production infrastructure and AI-assisted development.

# src/data/research/autonomousTools.ts

An open-source, low-cost robotics education and research platform for autonomous driving, multi-agent fleet coordination, and lane tracking for rubber ducks.

Robotics & Autonomy

Instructional curricula and course lead for autonomous miniature racecars utilizing visual servoing, motion planning, and ROS.

Graduate Engineering Projects

MIT Advanced Systems

A showcase of advanced graduate-level engineering systems developed at MIT spanning real-time computer vision control, ordinal machine learning ranking, and parameterized hardware accelerators.

Graduate Engineering

Video Demo

ML PDF Report

RSA PDF Report

Boop Light Detector

Light Therapy at MIT

Community Health & Wellness

Lead Technology Developer creating network monitoring software to analyze lab energy consumption in collaboration with MIT Green Labs and MIT Sustainability.

RoboCon Technical Workshop Platform

Committee chairperson and lead web designer for the inaugural cross-departmental robotics workshop at MIT.

CAD/CAM Robotic Dental Crowning Workflow

UCSC Bionics Lab

Robotic trajectory planning, 6-DOF manipulation, and dynamic registration for autonomous dental crowning with Dr. Jacob Rosen.

Medical Robotics

Undergraduate Engineering Projects

UCSC Robotics & Hardware Systems

Archive of foundational undergraduate robotics and embedded hardware projects from UCSC—spanning CMPE 100 logic design, CMPE 121 microprocessor systems, CMPE 118 mechatronics, and custom microcontroller-based LED game side projects.

Robotics & Hardware

# src/data/research/flagshipTools.ts

Web Bluetooth heart-rate telemetry synced across multiple clients via persistent WebSocket server, with Spotify API integration and a synchronized timer. Built end-to-end as a DevAI-assisted engineering project.

Product Development

Automated GitHub PR auditing built on a Gemini-driven CI/CD pipeline with Jules autonomous coding agent integration. An independent project demonstrating agentic engineering workflow — not prior paid work.

DevAI Tooling

BoomTick.blog

LIVE DEVELOPMENT ENVIRONMENT

West Coast Swing community platform and active testbed for RAG pipelines and LLM-assisted content workflows currently in development. Includes SEO-optimized publishing, analytics, and Printful API integration for automated merch listing generation.

Product development

Pack smart.

Dance more.

Reliably Arranging Objects

MIT CSAIL PH.D. THESIS

Conformant planning approach to reliable robot manipulation under severe sensing and control uncertainty. Combines fixture-augmented plan optimization and physics-driven belief state transitions to elevate assembly reliability from 1.9% to 80.7% on a PR2 robot.

Robotics & AI

Learning a Strategy for Whole-Arm Grasping

MIT S.M. THESIS — CSAIL

Investigated tactile-driven, sensorimotor reinforcement learning policies for bimanual and whole-arm grasping of bulky, irregular objects under real-world physical uncertainty. Formulated contact-rich control strategies that leverage compliant arm surfaces and multi-modal feedback to stabilize grasping without prior geometric part models.

# src/data/research/systemTools.ts

GitHub Actions LLM Code Review Automated

Automated PR Auditing

LLM-powered PR auditing pipeline that performs automated review and structured feedback on pull requests.

DevAI System

Visual Impact / UX Audit

VISUAL IMPACT ANALYSIS PIPELINE

AI Experiments

WCS Scraper, Ecommerce Automation, and AI Blog Drafter

A collection of custom dev tools, background ETL pipelines, and automated workflows I am currently building.

Version Truth & Hackathons Submission

The antidote to version hallucinations

The antidote to version hallucinations: real-time ground-truth for npm, Node, and GitHub Actions, built as a live agent skill for NandaHack.

DevAI Tooling

# src/data/resume/education.ts

PhD & SM in Computer Science and Electrical Engineering

BS in Computer Engineering

University of California, Santa Cruz

# src/data/resume/experience.ts

Senior Algorithms Developer

Civ Robotics

Independent AI Engineering & Research

Autonomous Fitness Ecosystem & AI DevOps Pipeline

Dedicated research & development period focused on agentic AI pipelines and telemetry infrastructure.

Senior Software Engineer

Roboticist in the Planning team, developing onboard motion planning and decision-making software for safe self-driving technology.

Senior Roboticist & Tech Lead

Robust.AI

First roboticist hire for building the world's first industrial-grade cognitive engine.

Senior Roboticist / Tech Lead

Learning and Intelligent Systems, CSAIL MIT

Advised by Leslie P. Kaelbling and Tomas Lozano-Perez.

Graduate Software Engineer Intern

Intel Corporation

Bionics Lab, UC Santa Cruz

Advised by Jacob Rosen.

Developing core navigation and localization software for autonomous forklifts using C++, Python, and ROS 2.

Built and optimized IMU drivers and GPS filtering; implemented tilt-compensation logic to refine pose estimation.

Led root-cause analysis for critical localization drift, increasing fleet uptime significantly.

Enhanced CI/CD pipeline with python linting and authored AWS IoT certificate tools for containerized robotics software.

Real-Time Telemetry: Built Web Bluetooth & WebSocket pipelines streaming live sensor data to multi-client dashboards.

Agentic CI/CD: Architected automated PR review agents using RAG on Gemini to generate verified patches.

Contextual Intelligence: Engineered RAG systems to inject project docs and CI logs into AI prompts for targeted code reviews.

Technical Debt Management: Implemented automated extraction of technical debt into actionable GitHub issues.

Focused on improving pullover performance, decreasing user walking distance and congestion.

Utilized software engineering, robotics, and machine learning to build autonomous driving capabilities.

Tech lead for redesigning major architectural components for navigation spanning behavior, perception, and localization.

Integrated new hardware components into software frameworks and created novel behaviors.

Wrote production-quality software, tests, and documentation.

Developed robust real-time robot behaviors for indoor navigation in dynamic environments with contextual awareness.

Led social navigation work pivotal in raising Series A funding.

Established and executed testing procedures for robot navigation.

Research focus: Robot manipulation for household helpers under considerable uncertainty due to inaccurate sensing and imperfect actuation.

Programmed Willow Garage PR2 robot using ROS, Python, and C++.

Developed scalable methods for solving complex planar manipulation problems.

Designed and documented design automation software using machine learning techniques.

Determined proper and efficient simulation points for future Intel Architecture based products.

Research focus: CAD/CAM applications in dentistry and autonomous control with mechanical systems.

Developed UI for robotic programs and a workflow for dental crowning procedures verified experimentally.

# src/data/resume/honorsTeaching.ts

Robohub’s 30 Women in Robotics You Need to Know About

MIT Graduate Women of Excellence

MIT Office of Graduate Education

MIT Office of Sustainability

Beer Bots - CSAIL Research Highlights

MIT CSAIL

UC Santa Cruz Regents Scholarship

UC Santa Cruz

University Center for Exemplary Mentoring at MIT

Frederick C. Hennie III Teaching Award

Educational Outreach & Technical Instructor

# src/data/resume/index.ts

Ariel Anders, PhD

Roboticist & Senior Software Engineer

Roboticist and Senior Software Engineer with an MIT CSAIL PhD and track record across Waymo, Robust.AI, and Civ Robotics. Specializing in onboard motion planning, reactive navigation, and state estimation, as well as multi-agent DevAI workflows and CI/CD automation.

Google Scholar

# src/data/resume/projects.ts

Accessible Tech: Boop Light Detector

Developed 'Boop Light Detector' iOS app providing real-time audio pitch modulation and haptic feedback based on ambient light sensor data to assist visual impairment. Over 6,000 App Store downloads.

Campus Wellness: Light Therapy at MIT

Secured grants from the MindHandHeart Innovation Fund to install light therapy lamps across 10+ MIT campus libraries to combat Seasonal Affective Disorder with public checkout infrastructure.

Awarded $5,000 MIT Green Labs Innovation Award. Built network-connected acoustic sensor monitoring systems to reduce energy waste across MIT labs.

# src/data/resume/publications.ts

Reliably Arranging Objects in Uncertain Domains

journal_conference

Policy Search for Multi-Robot Coordination under Uncertainty

Electrowetting-on-dielectric Actuation of a Vertical Translation and Angular Manipulation Stage

Active Fume Hood Sash Height Monitoring with Audible Feedback

Programming Self-Driving Race Cars at MIT: Project-Based, Collaborative, Algorithmic Robotics for High School Students

Visual Servoing

symposium_other

Dynamic Registration for Dental Robotics

# src/data/resume/skills.ts

Tools & Robotics

# src/layouts/Footer.tsx

&ldquo;Try to be a rainbow in someone&rsquo;s cloud.&rdquo; &ndash; Maya Angelou

# src/pages/About.tsx

About Ariel

Robotics background, research history, and personal interests.

🎨 Beyond the Code

Current Availability

# src/pages/DevAIListPage.tsx

DevAI &amp; Software Systems | Ariel Anders

DevAI &amp; Software Systems

System architectures, agentic CI/CD pipelines, autonomous developer tooling, and shipped production applications.

Products built with DevAI

Live full-stack consumer apps and platforms built with autonomous agent workflows.

View Products

Why this matters

Shipping high-fidelity autonomous systems and developer workflows requires

practical AI orchestration

, not hype. I focus on engineering deterministic state-verification feedback loops and isolated execution boundaries to scale development teams with absolute safety.

DevAI Orchestration

How I build: Engineering multi-agent workflows, automated code-auditing guardrails, and agentic CI/CD pipelines to enforce production standards.

# src/pages/Home.tsx

; case 'workflow': return

; case 'laptop': return

; case 'server': return

; case 'cloud': return

; default: return

View Agentic AI Work

View Robotics Research

Engineering Philosophy

# src/pages/ResearchDetailPage.tsx

Article Not Found

The requested research paper could not be found.

Back to Research

Back to Articles

Download PDF Report

Watch Video Demo

Watch Playlist

Source Repository

Open on YouTube ↗

Figure:

# src/pages/ResearchListPage.tsx

Robotics &amp; Algorithmic Research | Ariel Anders

Robotics &amp; Algorithmic Research

Planning under uncertainty, conformant belief-state manipulation, multi-robot coordination, and hardware automation systems.

Graduate Theses

MIT CSAIL

Peer-Reviewed Publications

ICRA, IJRR, ISEC

Robotics and Academic Projects

# src/test/AcademicReports.test.tsx

Test Paper Title

Test summary statement.

Test Tool

Test description

Test Category

# src/test/CardUXAndDetailPage.test.tsx

Test Flagship Project

Test description

Test Category

# src/test/ResearchCard.test.tsx

Test Robotics Title

Summary of the test post.

# src/test/ToolCard.test.tsx

GitOps Code Review Agent

LLM-powered PR auditing pipeline

DevAI System
