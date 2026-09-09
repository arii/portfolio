const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/mermaid.core-Cxrnw3CG.js","assets/index-Dn6hL0ab.js","assets/vendor-react-BD-e1e1Q.js","assets/index-Do-st99S.css","assets/svg-pan-zoom-Bed-R1tv.js"])))=>i.map(i=>d[i]);
import{r as sn,j as A,g as ro,R as Pn}from"./vendor-react-BD-e1e1Q.js";import{c as Ge,A as ha,G as oo,k as fa,l as pa,F as ma,C as ga,X as ya,S as er,m as ba,n as wa,o as ka,p as tr,q as xa,D as va,B as so,_ as nr}from"./index-Dn6hL0ab.js";import{E as ao,S as Sa}from"./Stack-BB2U1SSd.js";import{r as nt}from"./asset-Z0iRSI_U.js";import{D as Aa}from"./download-w-4lH3fy.js";/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ia=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],ir=Ge("arrow-left",Ia);/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ca=[["path",{d:"M8 2v3",key:"1ioesn"}],["path",{d:"M16 2v3",key:"otl347"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",key:"h1oib"}],["path",{d:"M3 9h18",key:"1pudct"}]],Ta=Ge("calendar",Ca);/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ea=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6l4 2",key:"mmk7yg"}]],Pa=Ge("clock",Ea);/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Da=[["path",{d:"M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2",key:"18mbvz"}],["path",{d:"M6.453 15h11.094",key:"3shlmq"}],["path",{d:"M8.5 2h7",key:"csnxdl"}]],La=Ge("flask-conical",Da);/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _a=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],lo=Ge("play",_a);/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ma=[["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}],["path",{d:"M3.103 6.034h17.794",key:"awc11p"}],["path",{d:"M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z",key:"o988cm"}]],Ra=Ge("shopping-bag",Ma);/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oa=[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",key:"ftymec"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2",key:"158x01"}]],co=Ge("video",Oa),Na=`---
type: study
title: "AI Experiments (In Progress)"
date: "2026-08-15"
author: "Ariel Anders"
category: "AI Experiments"
tags: ["ETL", "WCS Scraper", "Printful API", "LLM", "RAG", "Automation", "Visual Testing"]
excerpt: "A collection of custom dev tools, background ETL pipelines, and automated UI testing workflows I am currently building."
readTime: 10
status: "In Progress"
---

A collection of custom dev tools, background ETL pipelines, and automated UI testing workflows I am currently building.

---

### Quick Status

- **[WCS Scraping & ETL](#1-wcs-event-telemetry-scraping-etl-pipeline)** *(Production)* — 100% automated weekly sync with zero manual maintenance.
- **[Storefront Automation](#2-ecommerce-merchandising-storefront-automation)** *(Active)* — Converts vector art and pushes variant configurations directly to Printful.
- **[RAG AI Blog Drafter](#3-context-aware-technical-blog-drafter)** *(In Progress)* — Speeds up first-draft technical writing by 4x using past posts as core context.

---

## 1. WCS Event Telemetry Scraping & ETL Pipeline

**Stack:** React • TypeScript • Python • Pydantic • GitHub Actions • BeautifulSoup

![WCS Telemetry Scraper execution console and schema validation interface](/assets/research/ai-experiments/wcs-scraper.png)

Tracking regional West Coast Swing event schedules and dancer registries from the [World Swing Dance Council](https://worldwestcoastswingcouncil.com/events/) manually was a headache. Registration links broke often, and dates fell out of sync.

To fix this, I wrote a lightweight scraper using \`BeautifulSoup\` and \`Pydantic\`. It ensures HTML table parsing resilience by searching across structural variations (such as both \`tr.event-row\` and \`div.event-item\` containers). It also handles missing registry links by creating fallback temporary hashes (\`tmp_{hash(name)}\`) so valid events never get dropped during ingestion.

\`\`\`python
# etl/scraper.py - Pydantic validation & fallback hashing
from pydantic import BaseModel, Field
from typing import Optional

class WCSEvent(BaseModel):
    name: str = Field(..., min_length=1)
    location: str
    date: str
    registry_id: Optional[str] = None

# Fallback generator for missing WSDC registry IDs
def parse_registry_id(link_tag, event_name: str) -> str:
    if link_tag and 'href' in link_tag.attrs:
        return link_tag['href'].split('/')[-1]
    return f"tmp_{hash(event_name)}"
\`\`\`

The pipeline runs on a weekly GitHub Actions cron job. Before committing changes to \`public/data/event_queue.json\`, it checks \`git diff --staged\` to make sure I don't spam commit logs when event data hasn't changed.

\`\`\`yaml
# .github/workflows/wcs_etl.yml - Git diff guardrail
- name: Commit and Push Data
  run: |
    git add public/data/event_queue.json
    if git diff --staged --quiet; then
      echo "No changes in event data. Skipping commit."
    else
      git commit -m "chore: Sync latest WSDC Event Data"
      git push
    fi
\`\`\`

To prevent bundle bloat, the React client consumes this data via a custom \`useWCSData\` hook that asynchronously fetches \`public/data/event_queue.json\`:

\`\`\`typescript
// src/features/research/useWCSData.ts
import { useState, useEffect } from 'react';

export function useWCSData() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch('/data/event_queue.json')
      .then(res => res.json())
      .then(data => setEvents(data))
      .catch(err => console.error("Failed to load WCS events", err));
  }, []);

  return events;
}
\`\`\`

- **The Result:** The pipeline runs quietly in the background every Wednesday, keeping my frontend JSON data fresh with zero manual maintenance, while the lightweight client fetching prevents initial bundle bloat.

---

## 2. Ecommerce Merchandising & Storefront Automation

**Stack:** TypeScript • Printful REST API • Vector Processing

![Printful REST API integration console showing automated variant mapping and catalog synchronization](/assets/research/ai-experiments/ecommerce-automation.png)

Setting up products manually on Printful—uploading artwork, recalculating margins, and mapping variants—became incredibly repetitive. To fix this, I built an automated pipeline that ingests source vector files, auto-clips dimensions to stay safely inside print zones, and syncs variants directly via the [Printful API](https://developers.printful.com/docs/).

\`\`\`typescript
// sync/printful.ts - Automated variant payload creation
export async function syncProductVariant(variantId: number, printFileUrl: string) {
  const res = await fetch(\`https://api.printful.com/store/products/\${variantId}\`, {
    method: 'PUT',
    headers: {
      'Authorization': \`Bearer \${process.env.PRINTFUL_API_KEY}\`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      sync_product: { name: 'BoomTick Commemorative Apparel' },
      sync_variants: [{ retail_price: '28.00', files: [{ type: 'default', url: printFileUrl }] }]
    })
  });
  return res.json();
}
\`\`\`

- **Why it matters:** It removes the manual merchandising overhead and keeps product pricing and catalog nodes aligned in real time.

---

## 3. Context-Aware Technical Blog Drafter

**Stack:** Vector DB • LLM • Markdown

![AI Blog Drafter prompt generation and contextual vector retrieval interface](/assets/research/ai-experiments/blog-drafter.png)

Drafting technical posts from scratch usually means wasting time fixing inconsistent code formatting or drift from established style guidelines.

To speed up my workflow, I built a local RAG tool. It indexes previous Markdown posts into a local vector store, pulling my exact writing style, phrasing preferences, and code conventions straight into the LLM prompts.

- **The Impact:** It hits the right structural hierarchy on the first try, cutting down initial drafting times by roughly 4x while keeping human editorial control.

---
`,ja=Object.freeze(Object.defineProperty({__proto__:null,default:Na},Symbol.toStringTag,{value:"Module"})),Fa=`---
title: "Boop Light Detector App"
date: "2016-08-10"
readTime: 6
tags:
  - iOS
  - Accessibility
  - Audio
  - Mobile
category: "Accessibility & Mobile"
summary: "iOS accessibility utility translating ambient light intensity into audible frequencies for visually impaired users (6,000+ downloads)."
---

## Boop Light Detector App

## iOS Assistive Technology for Visually Impaired Users

**Boop Light Detector** is an iOS accessibility application designed to translate ambient light levels into audible frequencies and tactile haptic feedback. I developed the app following the **MIT Assistive Technology Hackathon (ATHack 2016)**, and it has served blind and visually impaired users worldwide with over **6,000+ downloads** on the Apple App Store.

![Boop Light Detector app testing during development and user trials](/assets/research/app_testing.jpg)

---

## The Problem & Motivation

When I developed this at an assistive technology hackathon in 2016, modern smartphones were not yet equipped with the advanced image recognition and accessibility tools they have today. At that time, for blind and visually impaired individuals, simple daily tasks—such as checking whether household lights are on, verifying whether a Wi-Fi router status light is active, or locating open windows during the daytime—required specialized tools.

Existing light detection apps were often:
1. **Expensive or ad-laden**
2. **Inaccurate**, relying solely on raw camera pixel values without adjusting for automatic camera exposure and sensitivity adjustments.
3. **Slow or unresponsive**, requiring navigation through complex multi-screen UI menus.
4. **Lacking tactile feedback** for quiet environments like libraries or offices.

---

## Engineering Design & Key Features

I engineered Boop from the ground up with a minimalist, accessible single-screen architecture:

### 1. Multi-Factor Luminescence Sensing Algorithm
Rather than computing simple pixel RGB averages, my light calculation factors in:
- Camera ISO sensitivity
- Frame exposure duration
- Lens aperture and RGB pixel brightness at the center of the viewport

This produces a normalized luminescence rating from **0 to 100**, enabling precise directional light tracking (e.g., pinpointing a small LED indicator on an appliance).

### 2. Real-Time Audio & Haptic Telemetry
- **Audible Pitch Modulation:** As light intensity increases, Boop modulates the frequency of an audible tone in real time.
- **Haptic Vibration Feedback:** For quiet environments, users can toggle vibration mode. The frequency of vibration pulses scales directly with light intensity.

### 3. Deep iOS VoiceOver Integration
- **Magic Tap Gesture:** Full support for two-finger double-tap ("Magic Tap") to instantly exit or control the application.
- **Escape Scrub Gesture:** Supports two-finger Z-scrub gesture for rapid accessibility navigation.
- **Audible Value Speech:** Tapping the center of the screen prompts VoiceOver to announce the exact numeric luminescence score.

---

## Community Impact & Outreach

- **6,000+ Downloads:** Published on the Apple App Store as a completely free tool with zero ads, data collection, or tracking.
- **ATHack 2016 Awardee:** Received Honorable Mention at MIT ATHack 2016 in collaboration with co-creators and blind accessibility advocate Jonathan Gale.
- **Recommended Accessibility Tool:** Highlighted on community directories supporting independent living for blind individuals.
`,Ba=Object.freeze(Object.defineProperty({__proto__:null,default:Fa},Symbol.toStringTag,{value:"Module"})),za=`---
title: "BeaverWorks Summer Institute (RACECAR)"
date: "2018-07-01"
readTime: 6
tags:
  - Robotics & Autonomy
  - Computer Vision
  - Visual Servoing
  - Motion Planning
  - ROS
category: "Education & Autonomous Systems"
summary: "Instructional curricula and course lead for autonomous miniature racecars utilizing visual servoing, motion planning, and ROS."
videoUrl: "https://www.youtube.com/watch?v=UjVatZ3NK5U"
---

## BeaverWorks Summer Institute (RACECAR)

![BeaverWorks RACECAR students and autonomous vehicles](/assets/research/bw.jpg)

## 1. Introduction & Overview

**MIT RACECAR** stands for Rapid Autonomous Complex-Environment Competing Ackermann-steering Robot. It is an open-source, project-based robotics platform and course designed for research and education. The platform utilizes 1/10-scale mini race cars equipped with state-of-the-art sensors and computing hardware. Through this program, students learn to program autonomous vehicles, typically starting with a virtual twin simulator before applying their skills to physical robots. The development of the RACECAR platform is a joint effort between MIT Lincoln Laboratory’s Beaver Works Initiative, the Department of Aeronautics & Astronautics, and the Laboratory for Information and Decision Systems.

**BWSI (Beaver Works Summer Institute)** is an intensive, project-based summer STEM program for high school students. Closely associated with MIT and MIT Lincoln Laboratory, the institute introduces students to advanced technical fields, including autonomous systems, machine learning, quantum computing, and cybersecurity. The program provides hands-on, workshop-style experiences, and students are often required to complete online prerequisite coursework to be considered for the four-week intensive summer program. The Autonomous RACECAR course is a flagship offering within the BWSI curriculum.

---

## 2. The Hardware Platform

The RACECAR vehicle platform combines high-performance compute with agile physical dynamics to create a robust research and educational testbed:

- **Compute:** NVIDIA Jetson embedded GPU platform running Ubuntu and ROS (Robot Operating System).
- **Sensing:** Hokuyo 2D LIDAR, ZED Stereo Camera, and IMU telemetry.
- **Actuation:** VESC electronic speed controller and brushless DC motor on a 1/10th scale rally chassis with Ackermann steering.

---

## 3. Instructional Roles & Publications

My work with the MIT RACECAR platform spanned two complementary roles, where my responsibilities evolved from supporting the Robotics: Science and Systems (RSS) course to leading instruction at the Beaver Works Summer Institute (BWSI). I also used the curriculum I developed for these courses to author a Model AI assignment.

### 16.405/6.141 Robotics: Science and Systems (RSS) – Teaching Assistant
In my capacity as a TA for the RSS course with Sertac Karaman, I focused on the technical foundations of the course and direct student guidance.
- **Curriculum & Support:** I developed course labs—including the visual servoing lab—and provided student teams with the starter code and technical assistance they needed to navigate the semester.
- **Instruction:** I delivered one unrecorded lecture for the class.

### Beaver Works Summer Institute (BWSI) – Lead Associate Instructor
As the Lead Associate Instructor for the BWSI RACECAR summer course, my role transitioned to program management, curriculum design, and formal instruction.
- **Instructional Leadership:** I managed the team of Associate Instructors, coordinated team support, and handled the logistical side of the program, such as lab scheduling and mapping subject titles to the course calendar to ensure consistency.
- **Curriculum Development:** I developed comprehensive lab handouts for the course.
- **Lecturing:** I delivered two recorded lectures as part of the formal syllabus:
  - **Visual Servoing** (July 20, 2017)
  - **Navigation** (July 27, 2017)

### Model AI Assignment (AAAI/EAAI Publication)
As one of the course instructors, I was asked to develop the visual servoing laboratory assignment. I then submitted the curriculum to the Model AI Assignments workshop—part of the Educational Advances in Artificial Intelligence (EAAI) symposium at the AAAI Conference—where I also presented these educational materials and methodologies.

| Specification | Details |
| :--- | :--- |
| **Project Link** | [Model AI: Visual Servoing Assignment ↗](https://modelai.gettysburg.edu/2017/visual-servo/index.html) |
| **Core Technologies** | Python, C++, OpenCV, and ROS |
| **Assignment Focus** | Image-Based Visual Servoing (IBVS), orange cone detection and parking, monocular camera line-following, closed-loop proportional control |

---

## 4. Core Curriculum & Lecture Series

The instructional curriculum is structured into core lecture series delivered during the program, blending classical controls, computer vision, and mapping algorithms.

### 📖 Lecture 1: Motion Planning & Localization (with ROS)
Teaching the transition from low-level control to high-level goals using Robot Operating System (ROS) communications (publisher-subscriber nodes, coordinate transformations \`tf\`):
- **Core Focus:** Transitioning from low-level control to high-level achievement goals in robotics (mapping, localization, and motion planning).
- **Representation:** Explores 2D/3D poses ($X, Y, \\theta$) and map types, contrasting continuous vector/landmark maps with discretized occupancy grids.
- **Localization:** Examines dead reckoning limitations (error accumulation) and sensor-based state estimation using AR tags and filters.
- **Motion Planning:** Compares the simple online Bug algorithm with optimal, graph-based Visibility Graphs, factoring in robot geometry and obstacle expansion.
- **Lab Roadmap:** Outlines upcoming hands-on tasks, including AR tag localization, potential field navigation, and a multi-car "leader-follower" demo.

[![Motion Planning Lecture Demonstration](/assets/research/bwsi-racecar/lecture_planning.gif)](https://www.youtube.com/watch?v=CdRs0l9f5WM#no-embed)
*[Watch Planning Lecture on YouTube ↗](https://www.youtube.com/watch?v=CdRs0l9f5WM#no-embed)*

---

### 📖 Lecture 2: Computer Vision & Visual Servoing (with LIDAR)
Developing OpenCV-based lane detection, color blob tracking, and feedback control loops integrated with planar LIDAR scans and trajectory limits:
- **Core Focus:** Introduction to **visual servoing** (controlling a robot using computer vision feedback) for tasks like cone parking and line following.
- **Control Systems Review:**
  - *Feed-Forward (Open-Loop):* Sends direct motor commands without feedback; prone to rapid drift and error accumulation.
  - *Feedback (Closed-Loop):* Uses output signals to dynamically adjust behavior and correct errors against a reference point.
- **Control Framework & Design Steps:**
  1. Define a normalized image coordinate system (e.g., width from $-0.5$ to $0.5$).
  2. Define the desired reference signal ($R(t)$) and system state/error ($Y(t)$).
  3. Compute the error signal ($E(t) = R(t) - Y(t)$).
  4. Implement a **Proportional (P) controller** (scaling error by a gain) and expand to **PID** to eliminate steady-state error and oscillations.
- **Application Implementations:**
  - *Cone Parking:* Decouples steering control from forward/backward velocity (using cone height/area as a distance metric) while processing planar LIDAR scans for safe obstacle avoidance.
  - *Line Following:* Modifies the visual servoing approach (e.g., cropping the top half of the image) to keep the car centered on a track.
- **Practical Tips & OpenCV Tools:** Use **ROS bags** for testing playback, downsample camera resolution to reduce lag, extract custom HSV thresholds directly from your images, and utilize OpenCV functions like \`putText\`, \`findContours\`, and \`rectangle\`.

[![Visual Servoing Lecture Demonstration](/assets/research/bwsi-racecar/lecture_visual_servoing.gif)](https://www.youtube.com/watch?v=bAAatB2IvUM#no-embed)
*[Watch Visual Servoing Lecture on YouTube ↗](https://www.youtube.com/watch?v=bAAatB2IvUM#no-embed)*

---

## 5. Project Demonstrations & Competition

The practical side of the RACECAR curriculum culminates in student demonstrations and a high-speed, autonomous racing competition.

### 🎥 Part A: Line Following Demonstration
[![Autonomous Navigation & Visual Servoing Behaviors](/assets/research/bwsi-racecar/racecar_behaviors.gif)](https://www.youtube.com/watch?v=0U0pPbWhLVE#no-embed)
*[Watch Full Demonstration on YouTube ↗](https://www.youtube.com/watch?v=0U0pPbWhLVE#no-embed)*

Closed-loop proportional control tracking paths using monocular camera input.

---

### 🎥 Part B: Cone Tracking & Visual Servoing
[![Student Cone Tracking Visual Servoing Demo](/assets/research/bwsi-racecar/racecar_students.gif)](https://www.youtube.com/watch?v=qSe8JmWQnYk#no-embed)
*[Watch Full Demonstration on YouTube ↗](https://www.youtube.com/watch?v=qSe8JmWQnYk#no-embed)*

Real-time visual tracking, color isolation, and safety-limited collision avoidance.

---

### 🎥 Main RACECAR Challenge Demonstration
An intensive final-day speed loop challenge where 1/10th scale autonomous racecars navigate complex indoor corridors. Vehicles must perform real-time visual servoing, LIDAR-based obstacle avoidance, and precise wall-following to achieve rapid lap times without collision.

[![Main RACECAR Challenge Demonstration](/assets/research/bwsi-racecar/racecar_main.gif)](https://www.youtube.com/watch?v=UjVatZ3NK5U#no-embed)
*[Watch Full Video Demonstration on YouTube ↗](https://www.youtube.com/watch?v=UjVatZ3NK5U#no-embed)*

---

### Educational Impact & Competition

Students culminated their intensive workshop by programming the cars to perform a variety of tasks—including pure pursuit, SLAM, and visual servoing—and competing in an autonomous race through complex indoor hallways and obstacle courses, demonstrating high-level execution of integrated software systems on real-world hardware.
`,Ua=Object.freeze(Object.defineProperty({__proto__:null,default:za},Symbol.toStringTag,{value:"Module"})),$a=`---
title: "CAD/CAM Robotic Dental Crowning Workflow"
date: "2014-06-01"
readTime: 6
tags:
  - Robotics
  - Medical UI
  - CAD/CAM
  - Kinematics
  - Bionics Lab UCSC
category: "Medical Robotics"
summary: "Dynamic registration, kinematic calibration, and interactive UI for autonomous dental crowning."
---

## CAD/CAM Robotic Dental Crowning & Dynamic Registration Workflow

## Autonomous Surgical Robotics at Bionics Lab UCSC

The **CAD/CAM Dental Robotics** project at the **Bionics Lab, University of California, Santa Cruz (UCSC)** focused on the development of an autonomous robotic system for semi-autonomous dental restoration. My research encompassed two primary areas:

1.  **Dental Crowning Preparation:** I developed a workflow to generate milling trajectories from 3D-digitized tooth models, enabling the robotic arm to autonomously mill a boundary around the tooth.
2.  **Dental Implant Preparation:** I extended this work to execute implant placement procedures. To account for patient movement during the procedure, I designed and implemented **dynamic registration**. This involved using a passive robotic arm (Microscribe MX) as a real-time feedback mechanism to track the position of the jaw.

To facilitate this, I developed surgical control software—integrating Visual Studio, Matlab, and ORiN APIs—to synchronize the active robotic arm (Denso VM-B01G) with real-time positional data, allowing for high-precision milling and drilling aligned with patient-specific intraoral geometry.

![CAD/CAM Robotic Dental Crowning Setup](/assets/research/dental.jpg)
*Figure 1: Robotic dental crowning experimental setup and software user interface at UCSC Bionics Lab.*

---

## Technical Context & Surgical Challenge

Traditional dental restoration and implant preparation rely on manual handpieces, impression molds, and mechanical jigs. Integrating industrial 6-DOF robotic arms (such as the Denso VM-B01G) with real-time tracking (via MicroScribe 3D digitization arms) enables sub-millimeter precision during enamel preparation and crown alignment.

![Robotic Dental System Architecture](/assets/research/dental/dental_robotics-000.png)
*Figure 2: Architectural diagram of the dynamic registration dental robotics setup, featuring the Denso 6-DOF robot arm, MicroScribe tracking arm, and intraoral jaw model.*

Key engineering challenges included:
1. **Dynamic Kinematic Registration:** Continuously updating target coordinates as patient/jaw movement occurs during drilling.
2. **Homogeneous Transformation Chain:** Computing frame transformations between the robot base, MicroScribe base, end-effector tool tip, and patient implant site.
3. **Safety-Critical Clinician UI:** Providing real-time toolpath visual feedback, registration status monitoring, and emergency override controls.

---

## Kinematic Formulation & Frame Calibration

To achieve precise alignment between the robotic tool tip and the target tooth site, I established coordinate frames across the arm and tracking sensor:

![Coordinate Frame Mapping](/assets/research/dental/dental_robotics-001.png)
*Figure 3: Kinematic coordinate frame mapping between robot base D{0}, end-effector D{6}, tracking base MX{0}, and tracking probe tip MX{6}.*

![Transform Chain Flowchart](/assets/research/dental/dental_robotics-002.png)
*Figure 4: Kinematic transformation chain flow used to solve for relative tool-to-implant spatial transforms.*

### Homogeneous Transformation Math

I solved the spatial position of the target tooth implant site relative to the robot end-effector \`M6_P_ImplantLoc\` through the transformation chain:

\`\`\`
T_Implant = T_D6_to_Base * T_Base_to_MXBase * T_MXBase_to_MX6 * P_Tip
\`\`\`

Where:
- \`T_D6_to_Base\`: Forward kinematics matrix of the Denso 6-DOF arm.
- \`T_Base_to_MXBase\`: Static calibration transform between robot base frame \`D{0}\` and MicroScribe base frame \`MX{0}\`.
- \`T_MXBase_to_MX6\`: Joint position readout matrix from the MicroScribe tracking arm.
- \`P_Tip\`: Offset vector for the target point relative to the probe tip frame \`MX{6}\`.

![Implant Target Frame Transformation](/assets/research/dental/dental_robotics-008.png)
*Figure 5: Vector transformation diagram mapping target implant location vector M6_P_ImplantLoc within the end-effector frame.*

---

## Closed-Loop Dynamic Tracking System

I implemented a closed-loop controller that continuously queries the tracking arm position and adjusts the Denso robot manipulator commands in real time.

![Closed Loop Controller Architecture](/assets/research/dental/dental_robotics-003.png)
*Figure 6: Closed-loop dynamic tracking control system diagram for real-time jaw motion compensation.*

![Real-time Tracking Control Software UI](/assets/research/dental/dental_robotics-004.png)
*Figure 7: Real-time surgical monitoring software interface showing active frame tracking and toolpath progress.*

---

## Experimental Results & Tracking Accuracy

I benchmarked tracking accuracy across simulated patient motion profiles using anatomical dental phantom models.

![Positional Tracking Error Plot](/assets/research/dental/dental_robotics-006.png)
*Figure 8: Measured 3D positional tracking error over time during dynamic compensation testing.*

![Drill Tip Alignment Accuracy Plot](/assets/research/dental/dental_robotics-007.png)
*Figure 9: Alignment error distribution across experimental drilling trials, demonstrating sub-millimeter geometric accuracy.*

Experimental results verified:
- **Mean Spatial Tracking Accuracy:** Sub-millimeter position accuracy (< 0.45 mm) across dynamic movement profiles.
- **Control Loop Rate:** Real-time compensation loop running at 100 Hz update frequency.

---

## Video Demonstrations & Media

[![Dental Robotics Demonstration Video | Watch Full Video Demonstration on YouTube ↗ | https://www.youtube.com/watch?v=tXif7xeZmGI#no-embed](/assets/research/dental/dental_robotics.gif#max-w-2xl)](https://www.youtube.com/watch?v=tXif7xeZmGI#no-embed)

---

## Downloadable Technical Report

- 📄 [Download Dynamic Registration for Dental Robotics Report (PDF)](https://raw.githubusercontent.com/arii/arii.github.io/main/reports/report_dental.pdf)

---

## Research Significance

- Demonstrated real-time dynamic registration for dental implant preparation and crowning.
- Verified sub-millimeter trajectory execution under clinician-in-the-loop oversight.
`,Ha=Object.freeze(Object.defineProperty({__proto__:null,default:$a},Symbol.toStringTag,{value:"Module"})),Va=`---
title: "Reliably Arranging Objects: Conformant Planning"
date: "2021-05-20"
readTime: 12
tags:
  - Robotics
  - Planning
  - PhD Thesis
  - Belief State
  - ROS
category: "Robotics & Autonomy"
summary: "My MIT CSAIL PhD dissertation on conformant planning for robot manipulation under uncertainty, featuring fixture-augmented optimization, belief-state transition search, and empirical action noise characterization."
---

## Overview

This research forms the core of my PhD dissertation at **MIT CSAIL**, advised by **Prof. Leslie Pack Kaelbling** and **Prof. Tomás Lozano-Pérez**, with committee member **Prof. Sertac Karaman**. My work enables general-purpose helper robots to reliably arrange unanchored objects into desired target configurations despite severe pose uncertainty caused by inaccurate sensing, control errors, and unknown physical friction. If you are developing physical automation systems and seeking [autonomous systems advisory](https://arii.github.io/about/), explore my consulting background and engineering experience.

[![Figure 1: Willow Garage PR2 robot performing physical conformant manipulation to arrange blocks into tight arrangements under pose uncertainty without visual feedback. | Watch Full Video Demonstration on YouTube ↗ | https://www.youtube.com/watch?v=omdHFeBBYZ0#no-embed](/assets/research/phd/icra_presentation.gif#max-w-2xl)](https://www.youtube.com/watch?v=omdHFeBBYZ0#no-embed)


---

### Approaches Explored

This research explores two distinct paradigms for conformant manipulation under severe uncertainty:

1. **Plan Improvement via Fixtures:** Optimizing open-loop trajectories using physical guide fences and contact dynamics to funnel parts into deterministic poses.
2. **Belief-State Search (Planning by Construction):** Formulating multi-step manipulation as a search over belief spaces, guaranteeing monotonic uncertainty reduction without real-time visual feedback.

The belief-state approach is detailed in our **ICRA 2018** paper:
* **Paper & Overview:** [Reliably Arranging Objects in the Real World (ICRA 2018) ↗](https://scholar.google.com/citations?view_op=view_citation&hl=en&user=NM6SfiEAAAAJ&citation_for_view=NM6SfiEAAAAJ:MXK_kJrjxJIC)

---

[![Figure 2: ICRA 2018 paper presentation and conference spotlight breakdown. | Watch Full Video Demonstration on YouTube ↗ | https://www.youtube.com/watch?v=so-9kkQXlxc#no-embed](/assets/research/phd/conformant_demo.gif#max-w-2xl)](https://www.youtube.com/watch?v=so-9kkQXlxc#no-embed)

---

## Part 1: Conformant Planning through Plan Improvement

When manipulators perform multi-step assembly or packaging tasks—such as placing 1-inch polyomino Tetris blocks into tight grid slots—small position and angle errors accumulate across sequential actions. Open-loop trajectory execution frequently fails because slight misalignments cause binding, jamming, or collision.

Furthermore, camera lines-of-sight are frequently obstructed by robot end-effectors or nearby fixtures. **Conformant planning** overcomes these perception dead-zones by synthesizing control strategies that apply contact mechanics (such as pushing, sliding, and funneling) to systematically reduce state uncertainty purely through physical interactions without requiring continuous visual feedback.

### Fixture-Augmented Trajectory Optimization
- **Concept:** Augments open-loop trajectories by introducing **movable fixtures** (fences or guide structures) for the robot to push parts against.
- **Optimization:** Solves for ideal fixture geometry, contact angles, and push trajectories, transforming high-variance placements into deterministic funnels.


#### Plan Improvement Video Breakdowns

### 1. Nominal Trajectory: Plan Improvement with Fixture Placement (1/3)

[![Nominal Trajectory: Plan Improvement with Fixture Placement | Watch Full Video Demonstration on YouTube ↗ | https://www.youtube.com/watch?v=MBsnNbD18tU#no-embed](/assets/research/phd/belief_1.gif#max-w-2xl)](https://www.youtube.com/watch?v=MBsnNbD18tU#no-embed)

* **Goal:** Execute planar assembly of disjoint block clusters into a single composite structure via non-prehensile pushing and fixturing.
* **Execution:** A linear pusher translates the lower cluster along an open-loop trajectory to mate seamlessly with the stationary upper target.
* **Outcome:** Demonstrates deterministic nominal kinematics in the absence of initial pose or actuation noise.

---

### 2. Failure Mode: Open-Loop Drift Under Uncertainty (2/3)

[![Failure Mode: Open-Loop Drift Under Uncertainty | Watch Full Video Demonstration on YouTube ↗ | https://www.youtube.com/watch?v=yjhySqcgLi4#no-embed](/assets/research/phd/belief_2.gif#max-w-2xl)](https://www.youtube.com/watch?v=yjhySqcgLi4#no-embed)

* **Perturbation:** Introduced stochastic noise into initial object poses and actuation dynamics.
* **Failure Mechanism:** Unconstrained degrees of freedom lead to compounding kinematic drift and premature rotation.
* **Outcome:** Assembly fails as the sub-assemblies scatter and miss contact interfaces without active state feedback.

---

### 3. Robust Execution: Passive Mechanical Funneling via Fixture Placement (3/3)

[![Robust Execution: Passive Mechanical Funneling via Fixture Placement | Watch Full Video Demonstration on YouTube ↗ | https://www.youtube.com/watch?v=ubUMq8Rnb18#no-embed](/assets/research/phd/refinement.gif#max-w-2xl)](https://www.youtube.com/watch?v=ubUMq8Rnb18#no-embed)

* **Strategy:** Augment the action space with static intermediate fixtures (e.g., L-brackets) along the configuration boundary.
* **Mechanism:** Fixtures act as physical invariant sets, passively arresting off-axis drift and squaring block orientations upon contact.
* **Outcome:** Re-establishes conformant convergence, guaranteeing monotonic support reduction ($\\text{Support}(b_{t+1}) \\subseteq \\text{Support}(b_t)$) without sensor-in-the-loop control.
---

## Part 2: Conformant Planning by Construction (Belief-State Transition Search & Noise Characterization)

The second core paradigm formulates manipulation as an explicit forward search over non-parametric belief probability distributions \`b(s) = P(s)\`.

### Belief-State Transition Search
- **Concept:** Searches directly in belief space to find sequence of actions that guarantee bounded final pose uncertainty.
- **Dynamics:** Combines physics engines (Box2D / Bullet) with empirical transition models \`P(b' | b, a)\` under contact interactions.
- **Shrinkage Guarantee:** Identifies action sequences \`a ∈ A\` that guarantee monotonic support reduction prior to final insertion:

\`\`\`text
Support(b_{t+1}) ⊆ Support(b_t)
\`\`\`

![The initial object placement uncertainty for the PR2 robot was modeled as ±0.2 inches in both x and y coordinates and ±15 degrees in rotation based on physical experiment data](/assets/research/phd/sliding_2.gif) ![Six block arrangement task on PR2](/assets/research/phd/sixblock.png)
*Figure 3 & 4: Precision placement via contact funneling (left) and six-block arrangement setup on PR2 (right).*



### Belief State Overlay & Action Noise Characterization
To ground simulated transitions in physical reality, empirical noise characterization and spatial particle overlays visualize contact uncertainty during execution.

![Belief State Overlay Visualization](/assets/research/phd/sliding_1.gif#max-w-xl)
*Figure 10: Algorithm belief-state overlay depicting particle distributions and empirical contact confidence bounds during manipulation.*

### Table and Board Relative Localization Pipeline

- **Coarse Visual Estimation:** The PR2 performs initial obstacle and table-edge detection using point cloud data from the perception pipeline, broadcasting a coarse table-frame estimate via TF at 2–3 Hz.
- **Tactile Surface Exploration:** To resolve visual occlusions and calibration offsets, the robot switches to a compliant Cartesian controller, guiding its end-effector/paddle to slide directly against the rigid reference edges (e.g., the sides of the fixture/board).
- **Pose Registration & Transform Fitting:** By logging the contact trajectory along the physical boundaries, the system fits a rigid geometric transform, producing a high-precision spatial calibration between the PR2 base and the workspace.

[![Table and Board Relative Localization Pipeline | Watch Full Video Demonstration on YouTube ↗ | https://www.youtube.com/watch?v=bWjzn89H1x4#no-embed](/assets/research/phd/noise_model.gif#max-w-2xl)](https://www.youtube.com/watch?v=bWjzn89H1x4#no-embed)


---

## Citation & Thesis Downloads

### IEEE ICRA Paper & Dissertation Record
* **Thesis Title:** *Reliably Arranging Objects: A Conformant Planning Approach to Robot Manipulation*
* **Author:** Ariel S. Anders, PhD
* **Advisors:** Prof. Leslie Pack Kaelbling & Prof. Tomás Lozano-Pérez
* **Committee:** Prof. Sertac Karaman
* **Institution:** Massachusetts Institute of Technology (MIT CSAIL, 2019)
* **MIT DSpace Publication:** [MIT DSpace Record](https://dspace.mit.edu/entities/publication/d489a172-efbf-4e35-b81c-04e4acf3d24d)
* **Google Scholar:** [Citation Record](https://scholar.google.com/citations?view_op=view_citation&hl=en&user=NM6SfiEAAAAJ&citation_for_view=NM6SfiEAAAAJ:4DMP91E08xMC)
* **Conference Publication:** *Reliably Arranging Objects in Uncertain Domains*, IEEE International Conference on Robotics and Automation (ICRA), 2018.

### BibTeX Citation

\`\`\`bibtex
@phdthesis{anders2019reliably,
  author       = {Anders, Ariel S.},
  title        = {Reliably Arranging Objects: A Conformant Planning Approach to Robot Manipulation},
  school       = {Massachusetts Institute of Technology},
  year         = {2019},
  url          = {https://dspace.mit.edu/entities/publication/d489a172-efbf-4e35-b81c-04e4acf3d24d}
}
\`\`\`

---

## Defense Presentation & Visuals

![Eric the Robot Thesis Mascot](/assets/research/phd/eric.png#max-w-md)
*Figure 12: "Eric", the robot thesis mascot used to visually convey belief-state uncertainty and contact constraints.*

### Thesis Mascot: "Eric" the Robot
To communicate these theoretical planning concepts during the defense presentation and dissertation, I created graphics of **"Eric the red robot"**, a cartoon robot mascot inspired by Leslie's stick figures:
- **"Blindfolded Eric":** Illustrating sensorless manipulation sequences where physical contact boundaries replace visual perception.
- **"Picketing Eric":** Highlighting edge cases where open-loop trajectories fail due to unexpected friction or rotational torque.

![Blindfolded Eric mascot illustrating sensorless manipulation](/assets/research/phd/eric2.png#max-w-sm) ![Picketing Eric mascot illustrating open-loop failure modes](/assets/research/phd/eric1.png#max-w-sm)
*Figure 13 & 14: "Blindfolded Eric" demonstrating sensorless contact funnels (left) and "Picketing Eric" illustrating trajectory failure modes under friction (right).*
`,qa=Object.freeze(Object.defineProperty({__proto__:null,default:Va},Symbol.toStringTag,{value:"Module"})),Wa=`---
title: "Delivery Bots: Multi-Robot Coordination"
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

## Delivery Bots: Multi-Robot Coordination under Uncertainty

![Autonomous Delivery Bot Transporting Item](/assets/research/beer.png)

## Decentralized Autonomous Logistics in Dynamic Human Environments

The **Delivery Bots** research initiative addressed the challenge of deploying multi-robot autonomous fleets for package and item delivery within complex, populated indoor environments (such as university campuses and hospital corridors) where human motion and task durations are highly uncertain.

To demonstrate the system in action, I converted the MIT CSAIL lab into a miniature "bar" featuring a PR2 robot "bartender" and two Turtlebot "waiters". As the demo lead for this project, I guided the live demonstration showcasing how decentralized robots can coordinate efficiently even with intermittent communication.

### Decentralized Beerbot Handoff & Delivery Demonstration
The following demonstration showcases the complete decentralized multi-robot coordination pipeline operating in real-time within the MIT CSAIL corridors. A PR2 robotic bartender prepares and hands off a beverage to a Turtlebot delivery agent, which then autonomously navigates dynamic human obstacles to perform a successful delivery:

[![Decentralized Beerbot Delivery Coordination | Watch Full Video on YouTube ↗ | https://www.youtube.com/watch?v=Jfzun9pP74U#no-embed](/assets/research/delivery-bots/coordination.gif#max-w-xl)](https://www.youtube.com/watch?v=Jfzun9pP74U#no-embed)

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
`,Ka=Object.freeze(Object.defineProperty({__proto__:null,default:Wa},Symbol.toStringTag,{value:"Module"})),Ga=`---
type: study
title: "Visual Impact / UX Audit"
date: "2026-06-19"
author: "Ariel Anders, PhD"
category: "DevAI"
tags: ["Playwright", "CI/CD", "UX Audit", "Dependency Graph", "Automation"]
excerpt: "How I built a semantic visual impact analysis pipeline using dependency-cruiser, Playwright screenshot diffing, and automated severity scoring."
readTime: 12
status: "published"
---

LLM code generation introduces unintended visual side effects—hallucinated UI components, modified badge styles, shifted accents, or unintended layout changes. Reviewing these multi-file diffs manually is error-prone, running full end-to-end test suites on every commit is too slow, and standard unit tests completely miss visual artifacts.

I built the **Deployment Impact Analyzer** to catch these discrepancies automatically. The pipeline traces every code modification through the project's dependency graph, identifies which user-facing routes are touched, and triggers targeted Playwright visual diffs using Pixelmatch. By scoping screenshots strictly to impacted views, it flags hallucinated elements and styling shifts directly in the pull request while cutting visual testing volume by up to 90%.

## The Architecture

\`\`\`mermaid
flowchart TD
    A[Pull Request Event] -->|Webhook Trigger| B[Identify Changed Files]
    B -->|git diff-tree| C[dependency-cruiser Analysis]
    C -->|Blast Radius Array| D[Map to Affected Routes]
    
    subgraph Envs ["Target Environments"]
        Prod[Production Baseline]
        Branch[Feature Branch Preview]
    end

    D -->|Target URLs| E[Playwright Screenshot Engine]
    Prod -.->|HTTP GET| E
    Branch -.->|HTTP GET| E
    
    E -->|Pixel Delta Map| F[Severity Scoring Engine]
    F -->|Markdown Report| G[PR Comment & Status Check]

    classDef trigger fill:#1e293b,stroke:#38bdf8,stroke-width:2px,color:#f8fafc;
    classDef runner fill:#0f172a,stroke:#818cf8,stroke-width:2px,color:#f8fafc;
    classDef env fill:#064e3b,stroke:#34d399,stroke-width:2px,color:#f8fafc;

    class A,G trigger;
    class B,C,D,E,F runner;
    class Prod,Branch env;
\`\`\`

- **Dependency Graph Parsing**: Traces modified files up to entry points to establish an explicit visual blast radius.
- **Route Resolution**: Maps structural code entry points directly to active application routing domains.
- **Targeted Visual Diffing**: Executes localized Playwright automated captures against a production baseline.
- **Asynchronous PR Feedback**: Generates layout shift metrics and updates the pull request conversation via GitHub APIs.

---

## 1. Import Graph Parsing with dependency-cruiser

I didn't want to test every page if only the "About" section changed. To achieve targeted testing, I use \`dependency-cruiser\` to analyze the project's import graph.

When modifying a file, I trace its dependents up the tree until I reach an entry point (a route or a page component).

\`\`\`bash
# Example logic for finding dependents
npx depcruise --exclude "^node_modules" --output-type json src | \\
  jq '.modules[] | select(.dependencies[].resolved == "src/components/Button.tsx") | .source'
\`\`\`

---

## 2. Automated Playwright Screenshot Diffing

Once I have a list of affected routes, I trigger a Playwright-based capture service.

The pipeline performs a "sandwich" comparison:
1.  **Baseline**: Capture screenshots of the affected routes on the \`main\` branch.
2.  **Current**: Capture screenshots of the same routes on the feature branch.
3.  **Diff**: Use \`pixelmatch\` to generate a pixel-level delta.

To improve the signal-to-noise ratio, I automatically crop the diff to the bounding box of the changed area. This helps reviewers focus on the specific UI shift rather than scanning a full-page screenshot.

---

## 3. Severity Scoring & Reporting

Pixel diffs aren't all equal. A 1px shift in a footer is different from a broken hero section.

My scoring engine calculates a **Severity Score** based on:
- **Pixel Count**: The absolute number of changed pixels.
- **Percentage**: The ratio of changed pixels to the total area.
- **Layout Shift**: Detection of significant element movement.

If the score exceeds a configurable threshold, the pipeline marks the check as failed and requests a manual visual review.

---

## 4. GitHub Actions Integration

I orchestrated the entire system via GitHub Actions. I've optimized the workflow to use caching for the \`dependency-cruiser\` graph and parallelize Playwright workers to keep execution times under 5 minutes.

\`\`\`yaml
name: Deployment Impact Analysis
on: [pull_request]

jobs:
  impact:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: pnpm install
      - name: Run Impact Analysis
        run: pnpm run impact:analysis
      - name: Visual Diffing
        run: pnpm run impact:visual-diff
      - name: Post Report
        run: python scripts/send-jules-impact.py
\`\`\`

### Example Report Output

When opening a PR, the analyzer posts a summary directly to the GitHub conversation. This allows developers to see the impact at a glance without leaving their workflow.

| Route | Visual Diff | Severity | Action |
| :--- | :--- | :--- | :--- |
| \`/blog/:slug\` | 12.4% | 🔴 HIGH | Manual Review Required |
| \`/about\` | 0.0% | 🟢 LOW | Auto-passed |
| \`/merch\` | 1.2% | 🟡 MEDIUM | Review Suggested |

> **Implemented:** I use the \`cropped\` diff artifacts to show exactly where the pixels changed, saving reviewers from playing "spot the difference" on full-page screenshots.

| Before | After | Diff |
| :---: | :---: | :---: |
| ![Baseline](/assets/studies/deployment-impact-analyzer/before.svg) | ![Current](/assets/studies/deployment-impact-analyzer/after.svg) | ![Visual Delta](/assets/studies/deployment-impact-analyzer/diff.svg) |

*A "sandwich" comparison showing the baseline, the new state, and the highlighted pixel delta.*

### Real-World Finding: From 404 to Overflow Resolution

Visual regression testing is particularly effective for catching "cumulative" bugs—issues that only appear once I integrate multiple components. During the development of this tool, I encountered a three-stage regression that perfectly illustrated the system's value.

#### 1. The Initial State (Missing Route)
Initially, a routing configuration error caused the analyzer to hit a "Content Not Found" page. While the code for the tool existed, I hadn't registered the dynamic route in the main portfolio index.

#### 2. The Regression (Text Overflow)
After fixing the routing, the page rendered, but a new issue emerged on mobile viewports. Long file paths in the \`ArchitecturalAssetsList\` component were overflowing their containers, breaking the layout and pushing the "Category" labels off-screen. This is a classic "invisible" regression that passes unit tests and type-checks but fails the "eyeball test."

#### 3. The Resolution (Truncation & Wrapping)
I implemented a fix using Tailwind's \`truncate\` and \`flex-wrap\` utilities, ensuring that assets are readable even on the narrowest devices.

| 1. Missing | 2. Diff | 3. Fixed |
| :---: | :---: | :---: |
| ![404 Error](/assets/studies/deployment-impact-analyzer/before-mobile.svg) | ![Regression Delta](/assets/studies/deployment-impact-analyzer/diff-mobile.svg) | ![Resolution](/assets/studies/deployment-impact-analyzer/after-mobile.svg) |

*The mobile resolution sequence: from a 404 state to an overflow regression, and finally the resolved responsive layout.*

## Lessons Learned

The core engineering insight from this project is the value of multi-layered verification. Static analysis maps the system's structural vulnerabilities, but visual diffing provides the actual confirmation of interface integrity. Merging these workflows converts unpredictable visual evaluation into a deterministic, programmatic check.

The next evolution of this tool involves agentic auto-resolution: using LLMs to analyze the visual diff and decide if a change is an intentional improvement or an accidental regression.
`,Ya=Object.freeze(Object.defineProperty({__proto__:null,default:Ga},Symbol.toStringTag,{value:"Module"})),Ja=`---
title: "MIT Duckietown (Autonomous Taxi Fleet)"
date: "2016-05-01"
readTime: 5
tags:
  - Robotics & Autonomy
  - Computer Vision
  - Lane Tracking
  - ROS
  - Multi-Agent
  - MIT
category: "Robotics & Autonomy"
summary: "An open-source, low-cost robotics education and research platform for autonomous driving, multi-agent fleet coordination, and lane tracking for rubber ducks."
videoUrl: "[![Duckietown Autonomous Driving Demonstration 1 | Watch Full Video Demonstration on YouTube ↗ | https://www.youtube.com/watch?v=rPpewHIF2KU#no-embed](/assets/research/duckietown/navigation_1.gif#max-w-2xl)](https://www.youtube.com/watch?v=rPpewHIF2KU#no-embed)"
---

## Duckietown: Autonomous Taxi Fleet

![Inaugural MIT 2.166 Duckietown Class](/assets/research/duckietown.jpg)

## Overview & Inaugural MIT 2.166 Class

**Duckietown** is an open-source, hands-on robotics platform created at MIT to make autonomy education accessible and standardized. The project features a fleet of miniature autonomous vehicles ("Duckiebots") navigating scaled urban environments ("Duckietowns") populated by rubber duck passengers.

I was a member of the inaugural MIT 2.166 class taking Duckietown as a student as part of my major requirements for my doctorate degree. Working directly on the platform in its founding year, I helped develop and test fundamental autonomous driving pipelines—including visual lane detection, state estimation, and multi-robot fleet coordination under real-world sensing constraints. This pedagogical framework has grown from our initial MIT classroom cohorts into an international benchmark for robotics education and research competitions (such as the AI Driving Olympics), bridging the gap between clean simulated environments and deployed autonomous systems characterized by physical uncertainties and low-cost hardware limitations.

For more background on the class and its history:
- [MIT News: Self-driving cars, meet rubber duckies](https://news.mit.edu/2016/duckietown-self-driving-car-class-0420)
- [A Brief History of Duckietown](https://www.duckietown.org/about/history)

## System Architecture & Technical Components

The Duckietown platform represents a powerful integration of classical computer vision, real-time feedback control, and hands-on robotics education. By translating complex autonomous driving concepts into a standardized, low-cost physical testbed, it bridges the gap between simulated environments and deployed autonomous systems characterized by physical uncertainties.

The modular software architecture utilizes a distributed ROS (Robot Operating System) stack:

- **Monocular Vision & Lane Tracking:** Processing onboard single-camera input to detect line segments, fit road lane boundaries, and compute heading errors using color space transformations and Hough transforms.
- **State Estimation & Kinematics:** Utilizing differential-drive robot kinematics and extended Kalman filtering to estimate position relative to lane centerlines.
- **Intersection & Signal Navigation:** Detecting visual AprilTags at intersections to handle right-of-way rules, stop sign negotiation, and multi-robot traffic flow.
- **ROS Middleware Architecture:** Modular ROS nodes for camera pipelines, controller loops, motor PWM output, and inter-bot wireless state broadcasting.
- **Classroom Easter Eggs & Quirks:** 
  - *Accidental Duck Detection:* The color-segmentation pipeline engineered specifically to isolate orange traffic cones unexpectedly cross-detected the rubber duck fleet passengers by locking perfectly onto their bright orange beaks.
  - *Midnight Calibration Quirks:* The initial baseline tuning thresholds for visual lane detection and line-following control were over-optimized during late-night engineering sessions in the laboratory, meaning the system only successfully worked in evening lighting conditions.

---

## Demonstrations & Fleet Videos

Every Duckiebot started its journey as a disassembled kit of raw components. Before deployable autonomy could be developed, we had to assemble the differential-drive chassis, interface the Raspberry Pi and motor controller shields, and calibrate the open-loop motor velocities.

### Phase 1: Hardware Assembly & Open-Loop Calibration

Our initial milestone was the physical assembly and electrical integration of the robot chassis. Once the hardware setup was completed, we focused on calibrating the pulse-width modulation (PWM) signals to align the raw motor outputs, ensuring the robot would drive in a straight line during open-loop tests.

[![First Functional Build Verification (Oreo) | Watch Full Video Demonstration on YouTube ↗ | https://www.youtube.com/watch?v=YTB2FgN_4zo#no-embed](/assets/research/duckietown/oreo_wheelie.gif#max-w-2xl)](https://www.youtube.com/watch?v=YTB2FgN_4zo#no-embed)

Initial hardware test of my personal Duckiebot, affectionately named Oreo, immediately following its first complete assembly. The video documents an unexpected wheelie milestone during early open-loop motor calibration.

---

### Phase 2: Isolated Visual Perception & Color Segmentation

With the physical robot calibrated, we transitioned to developing the visual perception pipelines. Before establishing closed-loop control, we isolated and verified our color-segmentation algorithms, tuning visual threshold filters to detect orange features under variable classroom lighting conditions.

[![Standalone Obstacle Isolation | Watch Full Video Demonstration on YouTube ↗ | https://www.youtube.com/watch?v=HfS5Yj63H34#no-embed](/assets/research/duckietown/navigation_2.gif#max-w-2xl)](https://www.youtube.com/watch?v=HfS5Yj63H34#no-embed)

Demonstration of a custom color-segmentation pipeline originally tuned for orange traffic cones, which successfully cross-detects rubber duck obstacles via their orange beaks.

---

### Phase 3: Fully Integrated Closed-Loop Control & Avoidance

This phase showcases the full integration of the individual perception and control stacks driving in closed-loop. The system links the real-time vision-based lane tracking pipeline directly with a proportional-derivative (PD) heading controller, while concurrently running the standalone obstacle detector to trigger a reactive safety override whenever a hazard appears.

[![Fully Integrated Autonomous Lane Following & Avoidance | Watch Full Video Demonstration on YouTube ↗ | https://www.youtube.com/watch?v=rPpewHIF2KU#no-embed](/assets/research/duckietown/navigation_1.gif#max-w-2xl)](https://www.youtube.com/watch?v=rPpewHIF2KU#no-embed)

Demonstration of the combined lines-and-obstacle pipeline working in tandem to maintain lane centerlines while reliably executing safety-stops for proximity hazards.
`,Qa=Object.freeze(Object.defineProperty({__proto__:null,default:Ja},Symbol.toStringTag,{value:"Module"})),Xa=`---
title: "Automating PR Reviews with Gemini & GitHub Actions"
date: "2026-05-10"
author: "Ariel Anders, PhD"
category: "DevAI"
tags: ["DevOps", "AI", "Gemini", "GitHub Actions", "MCP", "CLI", "Boomtick"]
excerpt: "A comprehensive deep dive into the Boomtick DevAI ecosystem—featuring a dual-layer architecture with boomtick-mcp for agentic tool calls, td-cli for deterministic fallbacks, and Gemini-powered PR review pipelines."
readTime: 12
status: "published"
---

The first version of my AI review workflow made a classic mistake: I asked the model to do everything. It had to understand the repo, inspect the diff, infer the design system, read CI logs, and decide what mattered. Sometimes it worked; often it produced a confident wall of feedback that was hard to trust.

The better pattern is to shrink the model's job: collect the important pull request context first, then ask the model to review that prepared packet through structured tools.

I engineered the **Boomtick DevAI Ecosystem** (open source across [arii/boomtick](https://github.com/arii/boomtick) and [arii/tech-dancer](https://github.com/arii/tech-dancer)) around this exact principle. At its core is a **Dual-Layer Architecture** combining \`boomtick-mcp\` (a Model Context Protocol server for structured macro-agent tool invocation) and \`td-cli\` (a standalone terminal CLI serving as a deterministic local execution layer and human fallback). Together with a **Zero-Submodule Strategy** and a multi-tiered AI review system, this architecture provides unified governance across agentic and developer workflows.

---

## Dual-Layer Control & Execution Architecture

The Boomtick architecture strictly separates the control plane (agentic reasoning via MCP) from the data and execution plane (deterministic CLI commands and API integrations).

\`\`\`mermaid
flowchart TD
    subgraph ControlPlane ["Tier 1: Agentic Control Plane"]
        Agent[Macro-Agent / Jules / Claude]
        MCP[boomtick-mcp Server]
        Agent <-->|JSON-RPC / MCP Protocol| MCP
    end

    subgraph ExecutionPlane ["Tier 2: Execution & Fallback"]
        CLI[td-cli Terminal Engine]
        Doctor[td-cli doctor / Health Checks]
        Audit[td-cli gh audit-pr]
        MCP -->|Direct Local Invocation| CLI
        CLI --> Doctor
        CLI --> Audit
    end

    subgraph ExternalAPIs ["Target Infrastructure"]
        GH[GitHub REST / GraphQL API]
        Repo[Local File System & Git Engine]
        Audit -->|REST / Event Telemetry| GH
        CLI <-->|Git Diff & Import Graph| Repo
    end

    classDef agent fill:#1e293b,stroke:#38bdf8,stroke-width:2px,color:#f8fafc;
    classDef mcp fill:#0f172a,stroke:#818cf8,stroke-width:2px,color:#f8fafc;
    classDef cli fill:#064e3b,stroke:#34d399,stroke-width:2px,color:#f8fafc;

    class Agent agent;
    class MCP mcp;
    class CLI,Doctor,Audit cli;
\`\`\`

### Key Architectural Principles

- **Zero-Submodule Strategy**: Rather than embedding tooling via Git submodules across downstream repositories, tools are distributed as zero-dependency binaries and standalone execution packages resolved dynamically via workspace path resolution scripts (\`scripts/resolve-cli.sh\` in [arii/boomtick](https://github.com/arii/boomtick)).
- **Multi-Tier AI Review System**: Incoming pull requests trigger structural evaluation pipelines where macro-agents utilize \`boomtick-mcp\` tools or \`td-cli\` commands to inspect diffs, verify static analysis artifacts, and render structured review recommendations (\`APPROVE\`, \`REQUEST_CHANGES\`, or \`COMMENT\`).
- **Strict Tool Hierarchy**: \`boomtick-mcp\` exposes strongly typed, schema-validated tools to the agent. If the MCP protocol layer is unreachable or running in an isolated environment, the agent or developer seamlessly falls back to direct \`td-cli\` command execution.

![Boomtick Ecosystem Architecture Overview](/assets/research/boomtick-devai-tools/boomtick-arch.png)
*Figure 1: High-level system map illustrating the dual-layer flow from macro-agents down to local CLI fallback and GitHub API endpoints.*

---

## 1. Aggregate PR Context Into a Structured Packet

Instead of having the model search the repository, run a script to assemble the review context. For BoomTick.blog and portfolio repos, I use \`td-cli gh audit-pr <PR_NUMBER>\` (or \`boomtick-mcp.audit_pull_request\`) to bundle:

- The PR title and description
- The changed files and their relative diffs
- Failing CI logs
- Linked issue content
- Project-specific review rules and design-token guidelines

This gathers everything the model needs into a single \`.devai/review-context.md\` file.

\`\`\`bash
# Example aggregation pattern via td-cli engine
$ td-cli gh audit-pr --pr 42 --fetch
[INFO] Inspecting PR #42 diff against target branch 'main'...
[INFO] Parsing import dependency graph via dependency-cruiser...
[SUCCESS] Assembled .devai/review-context.md context packet
\`\`\`

---

## 2. Boomtick MCP Server (\`boomtick-mcp\`) for Agentic Workflows

The primary interface for AI agents is \`boomtick-mcp\`, built natively on the Model Context Protocol (MCP) specification ([modelcontextprotocol.io](https://modelcontextprotocol.io)). It translates abstract agent intents into validated, schema-constrained operations.

### Schema Safety and Context Optimization

By utilizing JSON Schema definitions for every exposed tool, \`boomtick-mcp\` prevents parameter hallucination before execution reaches the system shell.

\`\`\`json
{
  "name": "audit_pull_request",
  "description": "Executes a multi-stage pull request health and impact audit.",
  "parameters": {
    "type": "object",
    "properties": {
      "pr_number": {
        "type": "integer",
        "description": "Target GitHub Pull Request number"
      },
      "include_impact_analysis": {
        "type": "boolean",
        "default": true
      }
    },
    "required": ["pr_number"]
  }
}
\`\`\`

![Boomtick MCP Integration in Desktop Client](/assets/research/boomtick-devai-tools/boomtick-mcp-desktop.png)
*Figure 2: \`boomtick-mcp\` loaded inside an agentic desktop interface, exposing structured audit and repository analysis tools.*

---

## 3. Tier 2 Fallback: Terminal CLI (\`td-cli\`)

While \`boomtick-mcp\` serves agentic clients, \`td-cli\` (maintained in the open-source [arii/tech-dancer](https://github.com/arii/tech-dancer/tree/main/dev-tools) repository) provides the underlying deterministic command-line execution engine. It ensures that developers and CI/CD scripts maintain identical execution capabilities independently of LLM availability.

\`\`\`bash
# Running local environment verification and PR audit fallback
$ td-cli doctor
[OK] Node.js environment detected (v24.x)
[OK] PATH resolution script active (/github/workspace/scripts/resolve-cli.sh)
[OK] GitHub API authentication verified

$ td-cli gh audit-pr --pr 42
[INFO] Inspecting PR #42 diff...
[INFO] Impact Analysis: 3 components affected across 2 routes
[SUCCESS] Multi-model review generated: APPROVE
\`\`\`

![td-cli Terminal Execution and Health Check](/assets/research/boomtick-devai-tools/boomtick-cli-audit.png)
*Figure 3: High-contrast terminal output demonstrating \`td-cli gh audit-pr\` and \`td-cli doctor\` health checks in action.*

---

## 4. Orchestrate Inference with the Gemini API

I engineered the inference orchestration to call the Google Gemini API directly with the prepared context. I deliberately rely on Gemini's large context window to ingest massive diffs and build artifacts without truncation, ensuring the review agent has a complete picture before generating feedback.

\`\`\`python
import os
import requests
import json
from pathlib import Path

GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")
ENDPOINT = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-3.5-pro:generateContent?key={GEMINI_API_KEY}"

context = Path(".devai/review-context.md").read_text()

prompt = f"""
You are reviewing a pull request.

Focus on:
1. correctness bugs
2. broken UI states
3. accessibility regressions
4. design-token violations
5. missing tests

Return valid JSON with this schema:
{{
  "blocking": [{{"file": "string", "reason": "string", "suggestion": "string"}}],
  "non_blocking": [{{"file": "string", "reason": "string"}}],
  "summary": "string"
}}

Context:
{context}
"""

response = requests.post(
    ENDPOINT,
    headers={"Content-Type": "application/json"},
    json={
        "contents": [{"parts": [{"text": prompt}]}],
        "generationConfig": {
            "responseMimeType": "application/json",
            "temperature": 0.2
        }
    },
    timeout=120,
)

response.raise_for_status()
result = response.json()
print(result["candidates"][0]["content"]["parts"][0]["text"])
\`\`\`

### Example Structured Review Output

Configuring Gemini with structured JSON output (\`responseMimeType: "application/json"\`) ensures that downstream gatekeepers can parse and act on findings programmatically:

\`\`\`json
{
  "recommendation": "REQUEST_CHANGES",
  "blocking": [
    {
      "file": "src/components/Navigation.tsx",
      "reason": "Navigation item missing required min-h-[48px] touch target for mobile accessibility",
      "suggestion": "Add min-h-[48px] class to interactive link elements"
    }
  ],
  "non_blocking": [
    {
      "file": "src/data/home.ts",
      "reason": "Consider extracting role title constant"
    }
  ],
  "summary": "Found 1 accessibility regression requiring changes before merging."
}
\`\`\`

---

## 5. Map Review States Deterministically

I designed the pipeline to explicitly prohibit the model from directly approving or blocking a pull request. Instead, a deterministic script reads the structured JSON findings and maps them strictly to GitHub review states:

- **\`REQUEST_CHANGES\`:** Triggers automatically if there are any items populated in the \`blocking\` list (e.g., build failures, accessibility regressions, missing props).
- **\`COMMENT\`:** Posts non-blocking suggestions from the \`non_blocking\` list (e.g., naming, cleanup, styling tips).
- **\`APPROVE\`:** Executes safely only when the \`blocking\` list is completely empty.

For instance, \`td-cli ai review\` or \`scripts/send-jules-impact.py\` submits the review payload directly to the GitHub API.

![Automated Pull Request Code Review Feedback](/assets/research/gitops-pr-reviewer-comment.png)
*Figure 4: Automated review feedback comment posted directly to a GitHub Pull Request.*

---

## 6. The Autonomous Repair Loop

To close the gap between detection and resolution, I engineered an autonomous repair loop utilizing Jules and specialized coding agents. When the CI pipeline fails, it does not just report the error—it triggers an active repair session.

The process is orchestrated via \`.github/workflows/jules-fix-trigger.yml\` in [arii/boomtick](https://github.com/arii/boomtick), which detects CI failures and executes \`td-cli ai repair\`. This workflow bundles the failing CI logs, the active PR diff, and project-specific constraints into a secure repair context packet.

### The CI Repair Flow:
1. **CI Failure Detection:** GitHub Actions detects a failing test, linting error, or build step.
2. **Context Aggregation:** A script extracts the exact failing log block and relevant source diffs.
3. **Autonomous Repair Session:** \`jules-fix-trigger.yml\` initiates a coding agent session (via Jules or TD CLI) armed with the failing logs, diffs, and project constraints.
4. **Patch Generation:** The agent synthesizes a patch addressing the specific failure and either commits it directly to a fix branch or proposes it as PR feedback.
5. **Human Verification:** I review and merge the synthesized fix, ensuring human oversight remains in the loop.

---

## Summary of the Architecture & Open Source Repositories

By consolidating the PR review orchestration into the **Boomtick DevAI Ecosystem**:
1. Agents interact via structured Model Context Protocol tools (\`boomtick-mcp\`).
2. Developers and CI workflows utilize deterministic CLI fallbacks (\`td-cli\` open-sourced at [github.com/arii/tech-dancer](https://github.com/arii/tech-dancer)).
3. Google Gemini generates structured JSON findings over complete context packets.
4. Deterministic gatekeeper scripts apply GitHub review states without hallucination risks.

All pipeline code, path resolution scripts (\`scripts/resolve-cli.sh\`), and GitHub Actions workflow triggers are publicly accessible in [arii/boomtick](https://github.com/arii/boomtick) and [arii/tech-dancer](https://github.com/arii/tech-dancer). For technical advisory or custom agentic CI integration, learn more about my [consulting on multi-agent architectures](https://arii.github.io/about/) and developer tooling.
`,Za=Object.freeze(Object.defineProperty({__proto__:null,default:Xa},Symbol.toStringTag,{value:"Module"})),el=`---
title: "Graduate Engineering Projects"
date: "2015-12-05"
readTime: 12
tags:
  - Robotics
  - Machine Learning
  - Hardware Acceleration
  - MIT
category: "Robotics & Hardware"
summary: "A showcase of advanced graduate-level engineering systems developed at MIT. These projects span real-time computer vision control, ordinal machine learning ranking, and parameterized hardware accelerators built using Bluespec SystemVerilog."
---

A showcase of advanced graduate-level engineering systems developed at MIT. These projects span real-time computer vision control, ordinal machine learning ranking, and parameterized hardware accelerators built using Bluespec SystemVerilog.

---

## 1. Autonomous Quadrotor Control — MIT 16.30 / 16.31 (C / MATLAB)

### Designing Closed-Loop Vision Trajectory Tracking for Micro-Quadrotors

The **Drone Line Following Autonomous Controller** ("Follow the Yellow Brick Road") project was a collaborative effort with teammates Raghav Aggarwal, Julia Sokol, and Patrick Lowe to engineer a real-time computer vision and state feedback control loop for a micro quadrotor (Parrot Rolling Spider) to autonomously detect, align with, and track floor-marked paths.

[![Rolling Spider micro-drone executing closed-loop visual path tracking along yellow floor-marked trajectories. | Watch Full Video Demonstration on YouTube ↗ | https://www.youtube.com/watch?v=f5l8GA1PHm8#no-embed](/assets/research/drone_follow.gif)](https://www.youtube.com/watch?v=f5l8GA1PHm8#no-embed)

### System Architecture & Control Loop

Autonomous flight using low-cost micro-drones poses severe real-time compute and sensor noise constraints. My primary contributions focused on the image processing architecture and integration into the Rolling Spider framework:

#### A. Offline Image Processing & Data Capture Pipeline
- **Yavta Integration:** Developed custom scripts utilizing the Yet Another V4L2 Test Application (\`yavta\`) to rapidly capture and download test images directly from the quadcopter.
- **Format Conversion & Testing:** Rendered images in JPEG and raw YUV formats, analyzing luminance (Y) components to separate line targets from varying floor textures without heavy RGB conversion overhead.
- **Pixel Offset Calculation:** Implemented a lightweight line detection algorithm iterating over pixel arrays to compute the position-wise pixel offset relative to the center line.

#### B. Cascaded Control & System Integration
- **Bang-Bang Controller Prototype:** Initially integrated the pixel offset algorithm into a bang-bang controller modifying \`rsedu_vis.c\` and \`rsedu_control.c\` to test custom input command streaming.
- **Refined Flight Controllers:** While the initial bang-bang approach served as a foundational proof-of-concept, teammates (Julia Sokol and Raghav Aggarwal) integrated more advanced PID controllers and yaw/position estimations to achieve stable trajectory tracking across continuous curved paths and sharp turns.

### Hardware & Flight Verification

- **Platform:** Parrot Rolling Spider micro quadrotor equipped with a down-facing camera, pressure sensor, and ultrasonic altitude sensor.
- **Ground Station Interface:** Custom MATLAB/Simulink and Python communication links transmitting control packets at high refresh rates.
- **Experimental Results:** Successfully achieved closed-loop flight tracking across continuous paths and distinct floor markers (such as yellow or black tape) with reliable state estimation.

---

## 2. Bounding Box Reranking — MIT 6.867 Machine Learning (Python)

### Evaluating Learning Algorithms for Bounding Box Reranking

In this research project for **6.867 Machine Learning** at MIT CSAIL, my teammate Sanja Popovic and I evaluated learning algorithms to refine object detection ranking and confidence scoring for the **Learning and Intelligent Systems (LIS) group**.

![Distance discrepancy decay functions evaluated to transform spatial offsets into bounding box confidence scores.](/assets/research/report-ml-lis/fig1_score_discrepancy.png)

### Core Problem & Approach

Object detection models running on mobile manipulation platforms frequently generate dozens of candidate bounding boxes around cluttered household items. Standard linear regression models treat candidate confidence as absolute values, failing to prioritize relative ranking order—which often leads the robot to attempt grasps on low-confidence background artifacts.

To solve this issue, I focused on formulating learning-to-rank models specifically tailored for robotic scene perception:

1. **Ordinal Regression:** Formulated pairwise loss functions to prioritize high-precision target detections over ambiguous background noise.
2. **P-Norm Push:** Implemented the P-norm push ranking algorithm, placing higher mathematical penalty on errors at the top of the ranked list so the robot's top choice is correct.
3. **Experimental Validation:** Evaluated bounding box candidate scoring across real-world cluttered kitchen environments captured by mobile manipulators.

![Performance evaluation showing how our learned weight vectors successfully improve high-precision bounding box candidate scores.](/assets/research/report-ml-lis/fig2_ranking_performance.png)

### Key Results & Takeaways

- **Superior Candidate Ranking:** Demonstrated significant candidate ranking accuracy improvements compared to baseline linear regression models.
- **Robust Feature Representation:** Identified optimal spatial feature representations for candidate reranking in household manipulation tasks.
- **Direct Practical Impact:** Provided the LIS research group with a framework to filter candidate clutter before passing target poses to motion planners.

### Downloads

- 📄 [Download Machine Learning Technical Report (PDF)](https://raw.githubusercontent.com/arii/arii.github.io/main/reports/report_ml.pdf)

---

## 3. Parameterized Cryptographic Accelerator — MIT 6.375 Complex Digital Systems (Bluespec SystemVerilog)

### Implementing Parameterized Montgomery Modular Arithmetic

For **MIT 6.375 Complex Digital Systems**, my teammates Timur Balbekov, Neil Forrester, and I engineered a high-performance, parameterized **Hardware RSA Accelerator** using **Bluespec SystemVerilog (BSV)**.

![System architecture of the RSA accelerator showing memory interface, control rule state machines, and modular exponentiation datapath.](/assets/research/report-6375-rsa/rsa_hardware_architecture.png#invert-dark)

### Architecture & Hardware Specification

RSA public-key cryptography relies heavily on modular exponentiation over large integers—an operation that poses significant computational bottlenecks when executed in software.

To achieve maximum hardware throughput, I designed and synthesized custom datapath blocks:

1. **Montgomery Modular Multiplication:** Implemented Montgomery multiplication units to compute large integer modular arithmetic without relying on costly hardware division steps.
2. **Pipelined Datapath Design:** Built a flexible, parameterized bit-width datapath that allows developers to trade off FPGA area against target clock frequency and throughput.
3. **BSV Guarded Atomic Actions:** Modeled execution concurrency using BSV rule synthesizability, ensuring deadlock-free hardware scheduling and clean control logic.

![Pipelined Montgomery modular multiplication unit designed for high-throughput integer exponentiation.](/assets/research/report-6375-rsa/montgomery_multiplier_datapath.png#invert-dark)

### Technical Outcomes & Lessons Learned

- **Cycle-Accurate Performance:** Achieved efficient, low-latency execution for multi-hundred bit RSA key processing targeted at FPGA platforms.
- **Formal Verification in Hardware:** Validated hardware verification methodologies to ensure strict formal correctness and memory safety across cryptographic state transitions.
- **Parameterized Design:** Created a modular codebase that can scale key lengths based on available hardware logic slices.

### Downloads

- 📄 [Download Hardware RSA Accelerator Report (PDF)](https://raw.githubusercontent.com/arii/arii.github.io/main/reports/report_6375.pdf)
`,tl=Object.freeze(Object.defineProperty({__proto__:null,default:el},Symbol.toStringTag,{value:"Module"})),nl=`---
title: "HRM: Real-Time Biometric Telemetry & Workouts"
author: "Ariel Anders, PhD"
category: "DevAI"
tags: ["React", "Web Bluetooth", "WebSockets", "Spotify API", "DevAI Testbed", "Telemetry"]
date: "2026-05-01"
snippet: "The architectural journey of HRM: from a 2020 OpenCV virtual camera pandemic prototype to a full-stack, DevAI-driven v2 overhaul that inspired the creation of RepoAuditor and agentic CI review pipelines."
---

The Heart Rate Monitor (HRM) project bridges consumer fitness hardware with real-time browser environments. Originally built in 2020 as a fast remote-training prototype, HRM was completely re-architected in 2026 as a flagship testbed for DevAI workflows—proving how autonomous PR auditing, agentic CI/CD pipelines, and multi-client telemetry can streamline full-stack system delivery.

## Origin Story & Architectural Evolution

HRM was originally conceived and built during the COVID-19 pandemic for my mother, myself, and our personal trainer, Tim (from FitForLife gym). The goal was to maintain real-time biometric telemetry during remote group workouts when physical gyms were closed. Achieving a stable, frictionless experience required distinct architectural phases:

### Iteration 1: OpenCV Video Loopback

![Iteration 1](/assets/research/hrm/evolve1.webp#max-w-xl#aspect-video)

Initially, I captured BLE heart rate data via Python, overlaid a HUD text display onto the active video stream using \`cv2.putText\`, and outputted the composited stream to a \`v4l2loopback\` virtual camera device. I quickly abandoned this approach due to cross-platform OS driver fragility (struggling with DirectShow on Windows versus v4l2 on Linux).

### Iteration 2: Web Bluetooth + OBS VirtualCam

![Iteration 2](/assets/research/hrm/evolve2.webp#max-w-xl#aspect-video)

The second iteration utilized a Web Bluetooth client rendered in a browser window, which I composited into Zoom using OBS Studio VirtualCam. I abandoned this due to Zoom aggressively locking camera devices, video mirroring inconsistencies, and window resize scaling artifacts that broke the HUD alignment.

### v2 Distributed Topology (2026)

![Iteration 3](/assets/research/hrm/evolve3.webp#max-w-xl#aspect-video)

![Client Connection](/assets/research/hrm/client_connect.webp#max-w-xl#aspect-video)

The final architecture moved to a decoupled, multi-client web topology. Browser clients stream BLE telemetry to a persistent WebSocket server, relaying active zone metrics, calorie calculations, and Tabata timer state to a unified trainer dashboard.


## The DevAI Catalyst (v1 -> v2 Rewrite)

Refactoring the multi-client WebSocket topology and complex Web Bluetooth mock states in v2 became tedious to verify manually. Managing continuous multi-client refactors directly prompted me to build RepoAuditor and automated PR review bots in GitHub Actions. Using GitHub Actions, Gemini-powered PR reviews, and automated visual regression testing (Playwright), I was able to validate complex Web Bluetooth mock states and UI layout integrity across updates.

## Core Technical Implementation

### Web Bluetooth GATT Lifecycle & Decoding

![Browser Capability](/assets/research/hrm/browser_capability.webp#max-w-xl#aspect-video)


The foundation relies on the Web Bluetooth API to connect with peripheral sensors using the standard Bluetooth 4.0 / ANT+ Heart Rate Profile.

The client lifecycle begins by scanning for devices advertising the Heart Rate Service (UUID \`0x180D\`). Once connected, it subscribes to the Heart Rate Measurement Characteristic (\`0x2A37\`). The incoming data streams as a raw byte buffer. I decode the flags byte in real-time to determine if the HR value is 8-bit or 16-bit, and to extract optional fields like energy expended or RR-interval buffers. The client includes an auto-reconnect handler that gracefully manages transient signal losses.

### Zone Engine

To provide immediate visual feedback, I implemented a Zone Engine based on the standard maximum heart rate formula: $HR_{max} = 220 - \\text{age}$.

The telemetry is mapped into dynamic zone buckets:
- **Zone 1 (Grey):** 50-60% (Very Light)
- **Zone 2 (Blue):** 60-70% (Light)
- **Zone 3 (Green):** 70-80% (Moderate)
- **Zone 4 (Orange):** 80-90% (Hard)
- **Zone 5 (Red):** 90-100% (Maximum)

### WebSocket Protocol & Stale Data Guardrails

Multi-client synchronization is handled over Socket.io. To maintain a reliable dashboard, I engineered strict stale data guardrails and heartbeat handling. If telemetry from a client ceases for more than 4 seconds, the dashboard displays \`--\`. If the client remains inactive for over 30 seconds, the user's card automatically unmounts from the instructor's grid to prevent clutter.

### Mock Simulator Test Harness

![Mock Simulator](/assets/research/hrm/mock.webp#max-w-xl#aspect-video)


To ensure the system could scale and handle network jitter, I built a dedicated mocking engine (\`/hrm_mock\`). This simulator allows for multi-user stress testing and synthetic biometric signal generation without requiring physical peripherals.

### Synchronized Workout Intervals & Spotify API

![Running Application](/assets/research/hrm/running.webp#max-w-xl#aspect-video)


The central server orchestrates a synchronized Tabata HIIT timer (countdown, work intervals, rest periods, audio feedback beeps) across all client views, guaranteeing sub-100ms latency for state replication.

Furthermore, I integrated the Spotify API and Web Playback SDK to synchronize music with the active workout state using OAuth PKCE for client-side token negotiation. A background token refresh loop maintains an uninterrupted session. The system exerts real-time playback control synced directly to the HIIT intervals, automatically adjusting playback based on the current timer phase.

### Interactive Controls & Analytics

The live application features interactive controls with a dual-mode timer (Tabata vs. Stopwatch), audio feedback cues, and in-browser Spotify player token management. I also built a workout history and analytics persistence layer that tracks elapsed duration, active calories burned, and historical session logs across multiple dates.

## System Topology

![HRM Server Dashboard](/assets/research/hrm/hrm_server.webp#max-w-xl#aspect-video)


The following diagram illustrates the data flow and system topology, from the biometric peripheral through the web client to the synchronized servers and external APIs.

\`\`\`mermaid
flowchart TD
    subgraph Client ["Client Device (Browser)"]
        BLE[BLE HR Sensor] -->|GATT 0x180D| WB[Web Bluetooth Client]
        WB --> ZE[Zone Engine & Analytics]
        WB --> MOCK[Mock Simulator Harness]
    end

    subgraph Relays ["Server & Media Layer"]
        ZE -->|Socket.io Telemetry| WS[WebSocket Server]
        ZE -->|OAuth PKCE| SPOT[Spotify Web Playback SDK]
    end

    subgraph Outputs ["Unified Views & Integrations"]
        WS --> DASH[Trainer & Multi-Client Dashboard]
        ZE -.->|OAuth In Development| STRAVA[Strava API]
    end

    subgraph CI ["DevAI & Quality Guardrails"]
        REPO[RepoAuditor PR Reviewer] --> GA[GitHub Actions CI/CD]
        GA --> PW[Playwright E2E & Visual Diff Tests]
    end

    classDef client fill:#1e293b,stroke:#38bdf8,stroke-width:2px,color:#f8fafc;
    classDef server fill:#0f172a,stroke:#818cf8,stroke-width:2px,color:#f8fafc;
    classDef output fill:#064e3b,stroke:#34d399,stroke-width:2px,color:#f8fafc;
    classDef devai fill:#312e81,stroke:#a855f7,stroke-width:2px,color:#f8fafc;

    class BLE,WB,ZE,MOCK client;
    class WS,SPOT server;
    class DASH,STRAVA output;
    class REPO,GA,PW devai;
\`\`\`
`,il=Object.freeze(Object.defineProperty({__proto__:null,default:nl},Symbol.toStringTag,{value:"Module"})),rl=`---
title: "LEAC: Lab Energy Assessment Monitoring Software"
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

## LEAC Fume Hood Energy Monitoring Software

## Laboratory Sustainability & Telemetry Infrastructure

The **Lab Energy Assessment Center (LEAC)** project ([leac-mit.github.io](https://leac-mit.github.io/)) engineered networked telemetry infrastructure and assessment methodologies to track and optimize energy consumption across academic research laboratories at MIT. Serving as the Lead Technology Developer, I designed the project's website, wrote the initial core telemetry prototypes (\`green_net\`), and mentored undergraduate researchers who conducted comprehensive energy assessments across campus labs.

---

## The Challenge: Laboratory Energy Intensity

MIT buildings containing research laboratories consume over 300% more energy per square foot than non-lab academic facilities. Variable Air Volume (VAV) fume hoods, high-powered equipment, and constant lighting draw massive electrical and HVAC loads. For example, a single open fume hood sash can draw as much conditioned air as multiple average American homes, costing thousands of dollars per year in wasted energy.

Without low-cost, automated telemetry, laboratory managers and sustainability teams lacked granular visibility into equipment power draw, unutilized open sash positions, and campus-wide energy waste.

---

## System Architecture & Software Implementation

![LEAC Fume Hood Network Monitoring Interface](/assets/research/leac.jpg)

To address these challenges, I built and deployed a multi-faceted monitoring platform tailored for academic research environments:

### 1. Smart Outlet Network Monitoring (\`green_net\`)
- Developed Python-based telemetry scripts utilizing the Ouimeaux API to interface with smart plugs (such as WeMo Insight switches), scanning local networks, querying real-time power draw, and outputting structured time-series logs (\`data.csv\`).
- Designed the initial data logging architecture and command-line execution flows to capture high-frequency power measurements.

### 2. Computer Vision State Detection
- For hardwired laboratory equipment such as fume hoods and overhead lighting where inline smart plugs cannot be inserted, we incorporated lightweight computer vision pipelines to identify on/off states and sash positions.

---

## Student Mentorship & Program Execution

Following initial prototype development, I worked closely with the team—including co-founders, EHS liaisons, and talented undergraduate researchers—to support campus-wide audits:
- **Mentorship:** Guided undergraduate team members (such as Dheekshita Kumar, Juan Ferrua, and Maxwell Drake) in configuring hardware, managing data logging repositories, and analyzing lab power draw.
- **Collaborative Research:** This work contributed to broader campus sustainability frameworks and publications, including collaborative findings detailed in *Energy Reports* (Becerra et al., 2018).

---

## Grant Recognition & Impact

- **MIT Green Labs Innovation Award:** Recognized with the 2017 Innovation Award ($5,000) for developing sustainable campus technology.
- **Actionable Telemetry:** Provided free, minimally invasive energy audits and data-driven recommendations to campus research groups, establishing a scalable model for lab decarbonization.
`,ol=Object.freeze(Object.defineProperty({__proto__:null,default:rl},Symbol.toStringTag,{value:"Module"})),sl=`---
title: "Light Therapy at MIT"
date: "2016-11-12"
readTime: 5
tags:
  - MindHandHeart
  - Community
  - Wellness
  - MIT
category: "Community Health & Wellness"
summary: "Campus-wide seasonal affective disorder (SAD) wellness initiative funded by the MindHandHeart Innovation Fund."
---

## Light Therapy at MIT

## Mitigating Seasonal Affective Disorder Across Campus

As a fourth-year PhD student in EECS at the Massachusetts Institute of Technology, I created **Light Therapy at MIT**—a community wellness initiative conceived, funded, and deployed to combat Seasonal Affective Disorder (SAD) and winter depression among students and researchers.

*(Read the full feature on my work in [MIT News](https://news.mit.edu/2016/stata-center-phone-booths-light-therapy-aims-to-brighten-moods-0729).)*

---

## Background & Personal Context

![Light therapy campus setup](/assets/research/light.jpg)

Moving to Boston from California, I was initially terrified of the harsh New England winter. During my second winter, working long hours between my office, the lab, and the gym in the Ray and Maria Stata Center, I developed severe wrist pain and fatigue. A doctor diagnosed me with a vitamin D deficiency linked to a lack of sunlight.

Once I started taking supplements, spending extra time walking in the morning sun, and using a light box at my desk, my mood lifted and my physical symptoms cleared up within a couple of weeks. When the MindHandHeart Innovation Fund launched, it felt like a natural step to bring light boxes to campus spaces so others could experience that same relief.

Clinical research demonstrates that daily exposure to artificial light therapy effectively treats SAD by mimicking natural outdoor light to regulate circadian rhythms and melatonin levels in the hypothalamus. However, high-grade phototherapy lightboxes can be bulky and expensive for individual students to purchase.

---

## Project Execution & Campus Deployment

Supported by the **MIT MindHandHeart Innovation Fund**, I proposed and executed a campus-wide phototherapy deployment plan:

### 1. EHS Approval & Safety Coordination
I coordinated with MIT Environment, Health & Safety (EHS) and MIT Medical to establish safety guidelines and provide contact info for campus wellness resources.

### 2. Strategic Placement and Campus Outreach
To maximize impact, I reached out to various mailing lists, requesting that project announcements be forwarded to dorms and laboratories. I strategically placed light therapy stations in high-traffic shared spaces across several dorms and residences, in addition to the CSAIL phone booths within the Stata Center.

### 3. User Autonomy and Light Management
A primary requirement for the project was ensuring that light usage remained strictly voluntary for students. I prioritized user comfort by giving everyone full control to switch the lamps on or off based on their personal preference. Furthermore, I carefully installed the equipment; for instance, inside the Stata Center phone booths, I angled the lamps away from the windows to ensure that passersby were not subjected to unintentional light exposure. I also collected ongoing feedback via suggestion boxes and my project website to evaluate the pilot's success.

---

## Outcomes & Legacy

- **Institutional Funding:** Successfully secured initial grant funding from MindHandHeart's inaugural Innovation Fund round.
- **Mental Health Awareness:** Educated the campus community about SAD—a condition that Massachusetts residents are particularly vulnerable to during long winter months.
- **Campus Adoption:** The pilot project served as a template for expanding mental health support and student-led wellness initiatives across MIT dormitories and departments.
`,al=Object.freeze(Object.defineProperty({__proto__:null,default:sl},Symbol.toStringTag,{value:"Module"})),ll=`---
title: "Learning a Strategy for Whole-Arm Grasping"
date: "2014-06-01"
readTime: 6
tags:
  - Whole-Arm Grasping
  - Bimanual Manipulation
  - Reinforcement Learning
  - Policy Search
  - Manipulation Under Uncertainty
  - MIT CSAIL
category: "Robotics & AI"
summary: "My Master's thesis on learning robust whole-arm and bimanual grasping policies to cradle and secure bulky, unmodeled objects under physical and pose uncertainty."
pdfUrl: "https://raw.githubusercontent.com/arii/arii.github.io/main/reports/report_ml.pdf"
---

## MIT S.M. Thesis — Computer Science and Artificial Intelligence Laboratory (CSAIL)

* **Author:** Ariel Anders
* **Advisors:** Prof. Leslie Pack Kaelbling & Prof. Tomás Lozano-Pérez
* **Institution:** Massachusetts Institute of Technology (MIT CSAIL)

---

## Project Overview

Traditional robotic grasping separates the problem into two distinct stages: finding optimal contact points for the fingertips and planning collision-free trajectories to reach them. While effective for small items with known CAD models, this approach breaks down when handling large, heavy, or irregularly shaped objects where fingertip pinch grasps lack the required torque and contact area.

I formulated a framework for **whole-arm grasping**. Instead of restricting contact to end-effectors, I enabled the robot to use its full kinematic chain—forearms, upper arms, and torso—to envelope, scoop, and cradle unmodeled objects under physical and pose uncertainty.

![Whole-arm grasping experimental setup](/assets/research/swag.jpg)
*Figure 1: Experimental setup and kinematics for whole-arm grasping on the PR2 platform.*

---

## Technical Approach & Methodology

### 1. Unified Policy Formulation
* Replaced the decoupled grasp-then-plan paradigm with a policy search formulation that directly maps object states and robot configurations into coordinated multi-joint trajectories.
* Optimized motions over a distribution of object poses and geometries to ensure robustness without requiring high-precision 3D reconstruction.

### 2. Reinforcement Learning for Whole-Arm Envelopment
* Formulated the enveloping and lifting sequence as a policy optimization problem.
* Trained policies in physics simulation to discover dynamic multi-joint motions that cradle objects against the robot's body while managing contact constraints and gravity.

### 3. Bimanual & Torso Coordination
* Coordinated dual-arm trajectories and torso positioning to execute complex enveloping maneuvers on bulky everyday items (boxes, spheres, and irregular containers).
* Transferred my learned simulation policies directly to the physical Willow Garage PR2 platform.

![Thesis Key Concepts Word Cloud](/assets/research/thesis_wordle.png)
*Figure 2: Word cloud highlighting core themes from my MIT S.M. thesis research.*

---

## Reinforcement Learning Simulations

Simulation trials evaluating policy convergence, trajectory generation, and stability across object dimensions and initial offsets:

### Early Point-Contact Formulations (Runs 1-4)
The earliest phase of the research focused on a simplified model containing discrete point contacts to verify basic force-closure boundaries:

| Phase | Description | Demonstration |
| :--- | :--- | :--- |
| **RL Simulation Run 1** | Point contact formulation for basic force-closure boundary verification. | [![Run 1 \\| Watch Full Video on YouTube ↗ \\| https://www.youtube.com/watch?v=PIhXfWyNPzQ#no-embed](/assets/research/masters-thesis/rl_sim_1.gif#max-w-xs)](https://www.youtube.com/watch?v=PIhXfWyNPzQ#no-embed) |
| **RL Simulation Run 2** | Static evaluation of discrete MDP value iteration. | [![Run 2 \\| Watch Full Video on YouTube ↗ \\| https://www.youtube.com/watch?v=M5PbYaPY0RE#no-embed](/assets/research/masters-thesis/rl_sim_2.gif#max-w-xs)](https://www.youtube.com/watch?v=M5PbYaPY0RE#no-embed) |
| **RL Simulation Run 3** | Multi-contact stability under varying payload offsets. | [![Run 3 \\| Watch Full Video on YouTube ↗ \\| https://www.youtube.com/watch?v=8TKJiJnDOSo#no-embed](/assets/research/masters-thesis/rl_sim_3.gif#max-w-xs)](https://www.youtube.com/watch?v=8TKJiJnDOSo#no-embed) |
| **RL Simulation Run 4** | Point contact modeling with frictional boundaries via Sarsa. | [![Run 4 \\| Watch Full Video on YouTube ↗ \\| https://www.youtube.com/watch?v=lnHDDjkWKfE#no-embed](/assets/research/masters-thesis/rl_sim_4.gif#max-w-xs)](https://www.youtube.com/watch?v=lnHDDjkWKfE#no-embed) |

### Advanced Enveloping & Whole-Arm Grasping (Runs 5-7)
The subsequent iterations transitioned to whole-arm caging, continuous state space control, and active dual-arm manipulation:

* **RL Simulation Run 5**
  [![RL Simulation Run 5 | Watch Full Video Demonstration on YouTube ↗ | https://www.youtube.com/watch?v=s1vjsvnPfdc#no-embed](/assets/research/masters-thesis/rl_sim_5.gif#max-w-xl)](https://www.youtube.com/watch?v=s1vjsvnPfdc#no-embed)
* **RL Simulation Run 6**
  [![RL Simulation Run 6 | Watch Full Video Demonstration on YouTube ↗ | https://www.youtube.com/watch?v=-V2KtcETAi8#no-embed](/assets/research/masters-thesis/rl_sim_6.gif#max-w-xl)](https://www.youtube.com/watch?v=-V2KtcETAi8#no-embed)
* **RL Simulation Run 7**
  [![RL Simulation Run 7 | Watch Full Video Demonstration on YouTube ↗ | https://www.youtube.com/watch?v=gf2vNOKEKXc#no-embed](/assets/research/masters-thesis/rl_sim_7.gif#max-w-xl)](https://www.youtube.com/watch?v=gf2vNOKEKXc#no-embed)

---

## Physical Robot Experiments (PR2 Platform)

Validation of my learned whole-arm manipulation policies on the physical PR2:

* **PR2 Grasping Demonstration 1**
  [![PR2 Grasping Demonstration 1 | Watch Full Video Demonstration on YouTube ↗ | https://www.youtube.com/watch?v=2mGN3ka_7i0#no-embed](/assets/research/masters-thesis/pr2_grasp_1.gif#max-w-xl)](https://www.youtube.com/watch?v=2mGN3ka_7i0#no-embed)
* **PR2 Grasping Demonstration 2**
  [![PR2 Grasping Demonstration 2 | Watch Full Video Demonstration on YouTube ↗ | https://www.youtube.com/watch?v=QgoJKaoZ3dY#no-embed](/assets/research/masters-thesis/pr2_grasp_2.gif#max-w-xl)](https://www.youtube.com/watch?v=QgoJKaoZ3dY#no-embed)
* **PR2 Grasping Demonstration 3**
  [![PR2 Grasping Demonstration 3 | Watch Full Video Demonstration on YouTube ↗ | https://www.youtube.com/watch?v=bgHzqflrkCE#no-embed](/assets/research/masters-thesis/pr2_grasp_3.gif#max-w-xl)](https://www.youtube.com/watch?v=bgHzqflrkCE#no-embed)

---

## Key Takeaways

* **Form-Closure Caging Over Precision Points:** Enveloping objects with the full arm structure creates robust form-closure and support surfaces, bypassing the need for exact fingertip friction modeling.
* **Payload Scaling:** Utilizing the arms and torso distributes load and joint torques, enabling manipulation of items far exceeding standard PR2 gripper payload limits.
`,cl=Object.freeze(Object.defineProperty({__proto__:null,default:ll},Symbol.toStringTag,{value:"Module"})),ul=`---
title: "RoboCon MIT"
date: "2018-04-20"
readTime: 3
tags:
  - Robotics
  - Conference
  - Web Design
  - MIT
category: "Robotics Community"
summary: "Co-organizing a student-run robotics conference and building its static web platform at MIT."
---

## RoboCon MIT

![RoboCon event portal showcase](/assets/research/robocon.jpg)

**RoboCon MIT** was a student-run research conference organized to bring together robotics groups across MIT—including CSAIL, MechE, AeroAstro, and the Media Lab. I co-organized the event and built the conference website at [robocon.mit.edu](http://robocon.mit.edu/), which was one of my first web design projects and remains online today.

---

**Goals**

* **Connect Campus Labs:** Give graduate students and postdocs a shared space to present hardware demos, posters, and talks across departments.
* **Centralize Event Info:** Provide a single page where attendees could check the schedule, find room locations at the Media Lab, and see submission guidelines.

---

**What I Did**

* **Built the Website:** Designed and wrote the front-end HTML/CSS from scratch to display the multi-track schedule, speaker lists, and event details on a simple, responsive page.
* **Deployed on Athena:** Hosted and maintained the site files in MIT’s Athena \`web_scripts\` environment, updating schedules and speaker info as the program came together.
* **Handled Submissions:** Coordinated the abstract intake for spotlight talks and poster sessions across topics like manipulation, control, and soft robotics.
* **Helped Run the Event:** Managed day-of logistics, room transitions, and attendee check-in at the Media Lab.

---

**Results**

* Gathered over 150 MIT researchers, students, and local industry attendees for a day of talks and demos.
* Kept the event logistics and schedule running smoothly through a lightweight site that needed no complex backend maintenance.
`,dl=Object.freeze(Object.defineProperty({__proto__:null,default:ul},Symbol.toStringTag,{value:"Module"})),hl=`---
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

## CMPE 100: Digital Logic Design

* **Focus:** Fundamental combinational and sequential logic design, gate-level implementations, and hardware verification.
* **Highlights:** Designed and tested robust digital subsystems, finite state machines, and hardware description language workflows on FPGA development boards.

### Breadboard D Flip-Flop Circuit & Hardware Testing

**Timeline:** Fall 2010 | **Role:** Digital Logic Designer | **Tech Stack:** Breadboard TTL Logic, D Flip-Flops, Oscilloscope, Logic Analyzer

[![Breadboard D Flip-Flop hardware loops. | Watch Full Video Demonstration on YouTube ↗ | https://www.youtube.com/watch?v=G0uw5PP9fuw#no-embed](/assets/research/undergraduate-projects/flip_flop.gif#max-w-2xl)](https://www.youtube.com/watch?v=G0uw5PP9fuw#no-embed)

---

## CMPE 121: Microprocessor System Design

* **Focus:** Microprocessor architecture, memory mapping, peripheral interfacing, and low-level C and Assembly programming.
* **Highlights:** Engineered a fully integrated microcontroller-based system, managing custom peripheral drivers, interrupt service routines, and serial communication protocols.

### 68HC11 Microcontroller Board for Mechanical Gripper Control

**Timeline:** Spring 2011 | **Role:** Embedded Systems & Hardware Engineer | **Tech Stack:** Motorola 68HC11, C / Assembly, RS-232 UART, SRAM / EPROM Bus Interfacing, Soldering & Wire-Wrap

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

**Timeline:** Winter 2012 | **Role:** Systems Engineer, Programming Lead & Circuit Debugger | **Tech Stack:** PIC32 Microcontroller, C, Hierarchical State Machines, IR Sensors, Op-Amp Filters, PWM Motor Control, SolidWorks

In **CMPE-118 Introduction to Mechatronics** at UC Santa Cruz, my team (Matthew Luxton, Kyle Huey, and I) designed, constructed, and programmed **MAK Attack**—an autonomous mobile robot built to solve real-time arena navigation and object manipulation challenges under strict operational deadlines.

![The MAK Attack autonomous mobile robot platform, highlighting optical sensors, bumper switches, and custom motor drive electronics.](/assets/research/report-ce118-mechatronics/mak_attack_robot.png#max-w-2xl)

#### Project Overview & Core Requirements

Designed and engineered an 11" x 11" x 11" fully autonomous robot programmed to navigate an 8' x 8' competitive course, locate and engage an opponent island via infrared beacons, deploy a mechanical projectile system, and return safely to the home island.

#### Engineering Design & Implementation

##### 1. Software Architecture & Control Systems

  * **Hierarchical Finite State Machine (FSM)**: Architected and programmed a complex control structure featuring modular sub-state machines (e.g., dedicated centering algorithms and localized sensor-sampling logic).

![Hierarchical event-driven state machine architecture governing autonomous robot behavior during arena trials.](/assets/research/report-ce118-mechatronics/hierarchical_state_machine.png#max-w-2xl#tall#contain)

  * **Ambient-Resilient Event Detection**: Developed a differential sampling state machine for the robot’s IR tape sensors. By capturing active and passive states sequentially, the software calculated ambient light deltas to stabilize detection thresholds under variable environmental lighting.
  * **Adaptive Battery Voltage Scaling**: Engineered an algorithmic solution to address supply fluctuations (from a 14.4V dual-battery series configuration). Built continuous PWM duty-cycle scaling code utilizing a 10-bit ADC reference to normalize motor outputs relative to a steady 12V operational baseline, ensuring consistent maneuverability and projectile power.

##### 2. Hardware & Electrical Engineering

  * **Mixed-Signal Circuit Debugging**: Led the integration, isolation, and validation of the robot's sensory circuits, including high-pass and low-pass trans-resistive op-amp filter stages to clean noisy phototransistor signals.
  * **Sensor & Actuator Integration**: Successfully implemented an active-high IR beacon-tracking filter, basic binary bump-sensor networks, a high-current H-bridge driver circuit, and dedicated TIP122 Darlington transistor circuits to govern mechanical subsystems.

##### 3. Mechanical Design Strategy

  * **Modular Parametric Chassis**: Participated in the collaborative design of a modular CAD framework in SolidWorks. The architecture isolated structural power distribution and drive elements from specialized operational modules, simplifying physical debugging and enabling efficient on-the-fly hardware replacement.
  * **Servo-Driven Launching Mechanism**: Integrated dual high-velocity toy motors paired with a high-torque servo-actuated feeding mechanism to sequentially chamber and discharge ping-pong projectiles at target vectors.

#### Key Results & Engineering Takeaways

  * **Integration-Driven Development**: Successfully mitigated integration bottlenecks by designing testing harnesses and sub-assembly code in parallel with mechanical builds throughout a 5-week integration runway.
  * **High-Precision Target Acquisition**: Achieved exceptional accuracy with the projectile launcher, consistently landing multiple impacts on target by relying on dynamic software thresholding to counter complex external ambient light interference.
  * **Agile Problem Solving**: Overcame a critical, late-stage failure of the robot's primary micro-servos by adapting the physical chassis to house robust, larger-scale servos and utilizing custom ground shielding around signaling lines to eliminate high-current motor noise.

#### Downloads

- 📄 [Download Mechatronics Lab Report (PDF)](https://raw.githubusercontent.com/arii/arii.github.io/main/reports/report_ce118.pdf)

#### System & Component Gallery

![MAK Attack Front View | MAK Attack Autonomous Robot Assembly](/assets/research/undergraduate-projects/ce118-001.webp#aspect-4/3#object-cover) ![Sensory & Signal Processing Circuits | Sensory and Signal Processing Circuitry](/assets/research/undergraduate-projects/ce118-007.webp#aspect-4/3#object-cover)

![Chassis Interior | Top-Down Chassis Interior](/assets/research/undergraduate-projects/ce118-008.webp#aspect-4/3#object-cover) ![Chassis SolidWorks Design | CAD Chassis Model & Structural Layout](/assets/research/undergraduate-projects/ce118-009.webp#aspect-4/3#object-cover)

![Complete System Setup | Complete System with Sensor Array](/assets/research/undergraduate-projects/ce118-010.webp#aspect-4/3#object-cover#max-w-2xl)

---

## Standalone Embedded Hardware Projects

* **Focus:** Interactive embedded hardware, custom firmware state machines, and resource-constrained peripheral control.
* **Highlights:** Developed portable arcade-style embedded hardware projects powered by standalone microcontrollers, featuring custom multiplexed matrix displays, debounced user inputs, and responsive gameplay logic.

### Microcontroller-Based LED Ring Reaction Game for UCSC Engineering Week

**Timeline:** February 2012 | **Role:** Embedded Hardware Developer (Team with Nathan Abercrombie & Julian Dahan) | **Tech Stack:** Microcontroller, C, LED Output Multiplexing, Analog Input Sensing, Serial Communications

We created this interactive arcade game for the Tau Beta Pi student organization during Engineering Week at UC Santa Cruz in February 2012. Built by Ariel Anders, Nathan Abercrombie, and Julian Dahan, the game challenges players to press a large button and stop a fast-moving light on a specific target LED.

We wired an array of 28 individual LEDs across digital output pins 22 through 49. The code lights up one LED at a time with a quick 10ms delay, making the light look like it is spinning in a continuous circle. The game button connects to an analog input pin (A0). The microcontroller constantly reads this pin, and when the button press drops the reading below our set threshold of 500, the movement loop stops completely. This freezes the light, sends the final score data through a 9600 baud Serial pipeline, and keeps the game at the end screen until you press reset to play again.

[![Microcontroller-Based LED Ring Reaction Game hardware loops. | Watch Full Video Demonstration on YouTube ↗ | https://www.youtube.com/watch?v=p1W5xtdLUWk#no-embed](/assets/research/undergraduate-projects/led_game.gif#max-w-2xl)](https://www.youtube.com/watch?v=p1W5xtdLUWk#no-embed)

---

## Technical Summary & Core Takeaways

These undergraduate endeavors established my core engineering methodology across:
- **Embedded C & Microcontrollers:** Low-level register configuration, interrupt-driven I/O, and serial protocols.
- **Mechatronics Integration:** Interfacing analog sensors, shaft encoders, DC motors, and stepper drivers.
- **Real-Time Control:** PID feedback loops, finite state machine architectures, and hardware-in-the-loop debugging.
`,fl=Object.freeze(Object.defineProperty({__proto__:null,default:hl},Symbol.toStringTag,{value:"Module"})),pl=`---
type: study
title: "VersionTruth: Fix Version Hallucinations in CI"
date: "2026-07-10"
author: "Ariel Anders, PhD"
category: "DevAI"
tags: ["automation", "ci", "dependencies", "ai", "NandaHack", "Agent Skill"]
excerpt: "A step-by-step technical guide and reference report on building and deploying VersionTruth: a real-time ground-truth registry lookup API and agent skill for hallucination mitigation."
readTime: 10
status: "published"
---

When LLMs and autonomous coding agents edit software repositories, they frequently suffer from **out-of-distribution version hallucinations**: when an agent encounters a version tag newer than its training cutoff (for example, \`actions/checkout@v6\`), it often assumes the tag is invalid and silently downgrades it to an older, cached version (such as \`v4\`) — a subtle regression that's easy to miss in review.

To eliminate this failure mode, I built and submitted **VersionTruth** at **NandaHack** (MIT Media Lab's agentic-AI hackathon) — a live ground-truth lookup service paired with a standardized \`SKILL.md\` that lets coding agents verify dependency versions against official registries *before* writing changes.

![VersionTruth Solution](/images/studies/AI_Version_Hallucination_Solution.webp)

VersionTruth operates as an out-of-band ground-truth oracle for AI coding assistants. Instead of trusting its own training data for "is this version real," the agent asks VersionTruth's API, which checks the live upstream registry.

\`\`\`http
GET /api/latest-version?ecosystem=gh-action&name=actions/checkout HTTP/1.1
Host: boomtick.blog

200 OK
{ "ecosystem": "gh-action", "name": "actions/checkout", "latest": "v6.0.1" }
\`\`\`

## Root Cause Incident: The Out-of-Distribution Downgrade

The pattern repeats across three surfaces in modern repositories:

- \`package.json\` dependency versions
- \`.nvmrc\` / \`.node-version\` / \`engines.node\`
- \`.github/workflows/*.yml\` \`uses:\` pins

In every case, the failure is the same: an agent's internal sense of "the latest version I know about" silently overrides what's actually true right now.

The catalyst for VersionTruth was a recurring failure in agentic code review workflows. When deploying targeted reviewer agents—designed for low token usage, minimal context, and fast execution—both primary coding and reviewer agents confidently recommended downgrading \`actions/checkout\` to \`@v4\`.

For historical context, \`v4.1.0\` was released in September 2023, while \`v5.0.1\` launched in November 2025, and subsequent stable releases reached \`v7.0.0\`.

![AI incorrectly flagging v6 as invalid and suggesting a downgrade to v4](/images/studies/ai-incorrect-v4-suggestion.webp)

This represents a classic out-of-distribution data error. The models encountered version tags (e.g., \`v6\`) released after their training cutoffs. Lacking real-time registry access, they hallucinated that the unfamiliar version was invalid and suggested reverting to the latest version present in their training data.


This failure was not isolated to lightweight models like \`gpt-4o-mini\`. Testing confirmed that larger reasoning models, including Gemini 3.1 Pro, exhibited the exact same regression behavior, falsely identifying \`v4\` as the latest stable major release.


![GitHub Releases showing v7.0.0, confirming versions beyond v4 are stable](/images/studies/github-checkout-v7-release.webp)

While Agentic DevAI increases engineering velocity, this incident highlights the critical need for deterministic, external validation when handling dynamic infrastructure dependencies. Learn more about my [agentic AI tooling consulting](https://arii.github.io/about/) services for developer infrastructure.

## The Solution: VersionTruth Architecture

Instead of just diagnosing the failure mode, I packaged the live-registry-lookup logic as a small public API called VersionTruth, along with a hosted \`SKILL.md\` that tells any agent how to use it. The instruction to the agent is deliberately blunt: if you don't recognize a version string, that's a reason to *check*, not a reason to *revert*. Unfamiliarity isn't evidence of error.

![VersionTruth Solution Architecture](/images/studies/AI_Version_Hallucination_Solution.webp)

The API lives as serverless functions sitting next to an existing Vite SPA—operating with zero changes to primary application codebases.



\`\`\`mermaid
sequenceDiagram
    autonumber

    actor Agent as AI Coding Agent (Jules / Claude)
    participant Skill as SKILL.md Specification
    participant API as VersionTruth API (Vercel Edge)
    participant Reg as Upstream Registry (npm / GitHub / Node)

    Agent->>Skill: Reads tool definition & endpoints
    activate Skill
    Skill-->>Agent: Returns schema & parameters
    deactivate Skill

    Agent->>+API: GET /api/compare-version (ecosystem=gh-action, candidate=v4)

    API->>+Reg: Fetches real-time releases & tags
    Reg-->>-API: Returns latest tagged release (v6.0.1)

    API-->>-Agent: 200 OK: candidate="v4", latest="v6.0.1", isOutdated=true

    Agent->>Agent: Retains v6 instead of hallucinated downgrade
\`\`\`


---

Developers can interactively test the live API and explore the skill definition at [https://boomtick.blog/versiontruth](https://boomtick.blog/versiontruth).

## API & Tool Specification

VersionTruth exposes lightweight HTTP endpoints that accept ecosystem queries and return structured status metadata.

### 1. Latest Version Query

\`\`\`http
GET /api/latest-version?ecosystem=gh-action&name=actions/checkout HTTP/1.1
Host: boomtick.blog
\`\`\`

**Response (\`200 OK\`):**
\`\`\`json
{
  "ecosystem": "gh-action",
  "name": "actions/checkout",
  "latest": "v6.0.1",
  "updatedAt": "2026-07-08T12:00:00Z"
}
\`\`\`

### 2. Candidate Version Comparison

\`\`\`http
GET /api/compare-version?ecosystem=gh-action&name=actions/checkout&candidate=v4 HTTP/1.1
Host: boomtick.blog
\`\`\`

**Response (\`200 OK\`):**
\`\`\`json
{
  "candidate": "v4",
  "latest": "v6.0.1",
  "isOutdated": true,
  "isDeprecated": false,
  "recommendation": "Do not downgrade. v6.0.1 is valid and current."
}
\`\`\`

---

## Step-by-Step Reproduction & Agent Integration Guide

Follow this guide to integrate VersionTruth into your own agentic dev pipeline or AI review agent context.

### Step 1: Add the SKILL.md Definition

In your repository's \`.github/skills/versiontruth.md\` or system prompt configuration, include the tool directive:

\`\`\`markdown
# VersionTruth Agent Skill

When editing dependency files (\`package.json\`, \`.node-version\`, GitHub Actions workflows),
ALWAYS check candidate versions before reverting unfamiliar version strings.

- Oracle API: \`https://boomtick.blog/api/compare-version\`
- Ecosystems supported: \`npm\`, \`node\`, \`gh-action\`

Rule: Unfamiliarity is NOT evidence of hallucination.
If a version exceeds your training context cut-off, query VersionTruth first.
\`\`\`

### Step 2: Implement the Deterministic Backstop in CI

Combine the pre-edit agent skill with an explicit post-edit CI check script (\`scripts/verify_versions.py\`):

\`\`\`python
import sys
import requests

def verify_action_version(action_name, candidate_version):
    url = (
        "https://boomtick.blog/api/compare-version"
        f"?ecosystem=gh-action&name={action_name}&candidate={candidate_version}"
    )
    res = requests.get(url, timeout=5).json()
    if res.get("isOutdated"):
        print(
            f"⚠️ Warning: {action_name}@{candidate_version} is outdated.\\n"
            f"Real latest is {res.get('latest')}"
        )
        return False
    return True

if __name__ == "__main__":
    valid = verify_action_version("actions/checkout", "v4")
    if not valid:
        sys.exit(1)
\`\`\`
### What's Next: Handling EOL and Deprecation

While preventing out-of-distribution downgrades is the immediate fix, the next evolution of VersionTruth will address the opposite problem: agents confidently recommending versions that have reached End-of-Life (EOL) or have been explicitly deprecated by maintainers.

Future iterations of the \`/api/compare-version\` endpoint will expand its upstream registry integrations to query vulnerability databases and deprecation metadata, allowing the \`isDeprecated\` flag to proactively guide agents away from unmaintained branches (like Node 18) towards current LTS releases.
`,ml=Object.freeze(Object.defineProperty({__proto__:null,default:pl},Symbol.toStringTag,{value:"Module"})),yi=Symbol.for("yaml.alias"),ei=Symbol.for("yaml.document"),Ne=Symbol.for("yaml.map"),uo=Symbol.for("yaml.pair"),Ie=Symbol.for("yaml.scalar"),ht=Symbol.for("yaml.seq"),ye=Symbol.for("yaml.node.type"),ft=e=>!!e&&typeof e=="object"&&e[ye]===yi,pn=e=>!!e&&typeof e=="object"&&e[ye]===ei,Ft=e=>!!e&&typeof e=="object"&&e[ye]===Ne,Z=e=>!!e&&typeof e=="object"&&e[ye]===uo,Y=e=>!!e&&typeof e=="object"&&e[ye]===Ie,Bt=e=>!!e&&typeof e=="object"&&e[ye]===ht;function Q(e){if(e&&typeof e=="object")switch(e[ye]){case Ne:case ht:return!0}return!1}function X(e){if(e&&typeof e=="object")switch(e[ye]){case yi:case Ne:case Ie:case ht:return!0}return!1}const ho=e=>(Y(e)||Q(e))&&!!e.anchor,Ue=Symbol("break visit"),gl=Symbol("skip children"),Pt=Symbol("remove node");function pt(e,t){const n=yl(t);pn(e)?rt(null,e.contents,n,Object.freeze([e]))===Pt&&(e.contents=null):rt(null,e,n,Object.freeze([]))}pt.BREAK=Ue;pt.SKIP=gl;pt.REMOVE=Pt;function rt(e,t,n,i){const r=bl(e,t,n,i);if(X(r)||Z(r))return wl(e,i,r),rt(e,r,n,i);if(typeof r!="symbol"){if(Q(t)){i=Object.freeze(i.concat(t));for(let o=0;o<t.items.length;++o){const s=rt(o,t.items[o],n,i);if(typeof s=="number")o=s-1;else{if(s===Ue)return Ue;s===Pt&&(t.items.splice(o,1),o-=1)}}}else if(Z(t)){i=Object.freeze(i.concat(t));const o=rt("key",t.key,n,i);if(o===Ue)return Ue;o===Pt&&(t.key=null);const s=rt("value",t.value,n,i);if(s===Ue)return Ue;s===Pt&&(t.value=null)}}return r}function yl(e){return typeof e=="object"&&(e.Collection||e.Node||e.Value)?Object.assign({Alias:e.Node,Map:e.Node,Scalar:e.Node,Seq:e.Node},e.Value&&{Map:e.Value,Scalar:e.Value,Seq:e.Value},e.Collection&&{Map:e.Collection,Seq:e.Collection},e):e}function bl(e,t,n,i){var r,o,s,a,l;if(typeof n=="function")return n(e,t,i);if(Ft(t))return(r=n.Map)==null?void 0:r.call(n,e,t,i);if(Bt(t))return(o=n.Seq)==null?void 0:o.call(n,e,t,i);if(Z(t))return(s=n.Pair)==null?void 0:s.call(n,e,t,i);if(Y(t))return(a=n.Scalar)==null?void 0:a.call(n,e,t,i);if(ft(t))return(l=n.Alias)==null?void 0:l.call(n,e,t,i)}function wl(e,t,n){const i=t[t.length-1];if(Q(i))i.items[e]=n;else if(Z(i))e==="key"?i.key=n:i.value=n;else if(pn(i))i.contents=n;else{const r=ft(i)?"alias":"scalar";throw new Error(`Cannot replace node with ${r} parent`)}}const kl={"!":"%21",",":"%2C","[":"%5B","]":"%5D","{":"%7B","}":"%7D"},xl=e=>e.replace(/[!,[\]{}]/g,t=>kl[t]);class re{constructor(t,n){this.docStart=null,this.docEnd=!1,this.yaml=Object.assign({},re.defaultYaml,t),this.tags=Object.assign({},re.defaultTags,n)}clone(){const t=new re(this.yaml,this.tags);return t.docStart=this.docStart,t}atDocument(){const t=new re(this.yaml,this.tags);switch(this.yaml.version){case"1.1":this.atNextDocument=!0;break;case"1.2":this.atNextDocument=!1,this.yaml={explicit:re.defaultYaml.explicit,version:"1.2"},this.tags=Object.assign({},re.defaultTags);break}return t}add(t,n){this.atNextDocument&&(this.yaml={explicit:re.defaultYaml.explicit,version:"1.1"},this.tags=Object.assign({},re.defaultTags),this.atNextDocument=!1);const i=t.trim().split(/[ \t]+/),r=i.shift();switch(r){case"%TAG":{if(i.length!==2&&(n(0,"%TAG directive should contain exactly two parts"),i.length<2))return!1;const[o,s]=i;return this.tags[o]=s,!0}case"%YAML":{if(this.yaml.explicit=!0,i.length!==1)return n(0,"%YAML directive should contain exactly one part"),!1;const[o]=i;if(o==="1.1"||o==="1.2")return this.yaml.version=o,!0;{const s=/^\d+\.\d+$/.test(o);return n(6,`Unsupported YAML version ${o}`,s),!1}}default:return n(0,`Unknown directive ${r}`,!0),!1}}tagName(t,n){if(t==="!")return"!";if(t[0]!=="!")return n(`Not a valid tag: ${t}`),null;if(t[1]==="<"){const s=t.slice(2,-1);return s==="!"||s==="!!"?(n(`Verbatim tags aren't resolved, so ${t} is invalid.`),null):(t[t.length-1]!==">"&&n("Verbatim tags must end with a >"),s)}const[,i,r]=t.match(/^(.*!)([^!]*)$/s);r||n(`The ${t} tag has no suffix`);const o=this.tags[i];if(o)try{return o+decodeURIComponent(r)}catch(s){return n(String(s)),null}return i==="!"?t:(n(`Could not resolve tag: ${t}`),null)}tagString(t){for(const[n,i]of Object.entries(this.tags))if(t.startsWith(i))return n+xl(t.substring(i.length));return t[0]==="!"?t:`!<${t}>`}toString(t){const n=this.yaml.explicit?[`%YAML ${this.yaml.version||"1.2"}`]:[],i=Object.entries(this.tags);let r;if(t&&i.length>0&&X(t.contents)){const o={};pt(t.contents,(s,a)=>{X(a)&&a.tag&&(o[a.tag]=!0)}),r=Object.keys(o)}else r=[];for(const[o,s]of i)o==="!!"&&s==="tag:yaml.org,2002:"||(!t||r.some(a=>a.startsWith(s)))&&n.push(`%TAG ${o} ${s}`);return n.join(`
`)}}re.defaultYaml={explicit:!1,version:"1.2"};re.defaultTags={"!!":"tag:yaml.org,2002:"};function fo(e){if(/[\x00-\x19\s,[\]{}]/.test(e)){const n=`Anchor must not contain whitespace or control characters: ${JSON.stringify(e)}`;throw new Error(n)}return!0}function po(e){const t=new Set;return pt(e,{Value(n,i){i.anchor&&t.add(i.anchor)}}),t}function mo(e,t){for(let n=1;;++n){const i=`${e}${n}`;if(!t.has(i))return i}}function vl(e,t){const n=[],i=new Map;let r=null;return{onAnchor:o=>{n.push(o),r??(r=po(e));const s=mo(t,r);return r.add(s),s},setAnchors:()=>{for(const o of n){const s=i.get(o);if(typeof s=="object"&&s.anchor&&(Y(s.node)||Q(s.node)))s.node.anchor=s.anchor;else{const a=new Error("Failed to resolve repeated object (this should not happen)");throw a.source=o,a}}},sourceObjects:i}}function ot(e,t,n,i){if(i&&typeof i=="object")if(Array.isArray(i))for(let r=0,o=i.length;r<o;++r){const s=i[r],a=ot(e,i,String(r),s);a===void 0?delete i[r]:a!==s&&(i[r]=a)}else if(i instanceof Map)for(const r of Array.from(i.keys())){const o=i.get(r),s=ot(e,i,r,o);s===void 0?i.delete(r):s!==o&&i.set(r,s)}else if(i instanceof Set)for(const r of Array.from(i)){const o=ot(e,i,r,r);o===void 0?i.delete(r):o!==r&&(i.delete(r),i.add(o))}else for(const[r,o]of Object.entries(i)){const s=ot(e,i,r,o);s===void 0?delete i[r]:s!==o&&(i[r]=s)}return e.call(t,n,i)}function ge(e,t,n){if(Array.isArray(e))return e.map((i,r)=>ge(i,String(r),n));if(e&&typeof e.toJSON=="function"){if(!n||!ho(e))return e.toJSON(t,n);const i={aliasCount:0,count:1,res:void 0};n.anchors.set(e,i),n.onCreate=o=>{i.res=o,delete n.onCreate};const r=e.toJSON(t,n);return n.onCreate&&n.onCreate(r),r}return typeof e=="bigint"&&!(n!=null&&n.keep)?Number(e):e}class bi{constructor(t){Object.defineProperty(this,ye,{value:t})}clone(){const t=Object.create(Object.getPrototypeOf(this),Object.getOwnPropertyDescriptors(this));return this.range&&(t.range=this.range.slice()),t}toJS(t,{mapAsMap:n,maxAliasCount:i,onAnchor:r,reviver:o}={}){if(!pn(t))throw new TypeError("A document argument is required");const s={anchors:new Map,doc:t,keep:!0,mapAsMap:n===!0,mapKeyWarned:!1,maxAliasCount:typeof i=="number"?i:100},a=ge(this,"",s);if(typeof r=="function")for(const{count:l,res:c}of s.anchors.values())r(c,l);return typeof o=="function"?ot(o,{"":a},"",a):a}}class wi extends bi{constructor(t){super(yi),this.source=t,Object.defineProperty(this,"tag",{set(){throw new Error("Alias nodes cannot have tags")}})}resolve(t,n){if((n==null?void 0:n.maxAliasCount)===0)throw new ReferenceError("Alias resolution is disabled");let i;n!=null&&n.aliasResolveCache?i=n.aliasResolveCache:(i=[],pt(t,{Node:(o,s)=>{(ft(s)||ho(s))&&i.push(s)}}),n&&(n.aliasResolveCache=i));let r;for(const o of i){if(o===this)break;o.anchor===this.source&&(r=o)}return r}toJSON(t,n){if(!n)return{source:this.source};const{anchors:i,doc:r,maxAliasCount:o}=n,s=this.resolve(r,n);if(!s){const l=`Unresolved alias (the anchor must be set before the alias): ${this.source}`;throw new ReferenceError(l)}let a=i.get(s);if(a||(ge(s,null,n),a=i.get(s)),(a==null?void 0:a.res)===void 0){const l="This should not happen: Alias anchor was not resolved?";throw new ReferenceError(l)}if(o>=0&&(a.count+=1,a.aliasCount===0&&(a.aliasCount=tn(r,s,i)),a.count*a.aliasCount>o)){const l="Excessive alias count indicates a resource exhaustion attack";throw new ReferenceError(l)}return a.res}toString(t,n,i){const r=`*${this.source}`;if(t){if(fo(this.source),t.options.verifyAliasOrder&&!t.anchors.has(this.source)){const o=`Unresolved alias (the anchor must be set before the alias): ${this.source}`;throw new Error(o)}if(t.implicitKey)return`${r} `}return r}}function tn(e,t,n){if(ft(t)){const i=t.resolve(e),r=n&&i&&n.get(i);return r?r.count*r.aliasCount:0}else if(Q(t)){let i=0;for(const r of t.items){const o=tn(e,r,n);o>i&&(i=o)}return i}else if(Z(t)){const i=tn(e,t.key,n),r=tn(e,t.value,n);return Math.max(i,r)}return 1}const go=e=>!e||typeof e!="function"&&typeof e!="object";class U extends bi{constructor(t){super(Ie),this.value=t}toJSON(t,n){return n!=null&&n.keep?this.value:ge(this.value,t,n)}toString(){return String(this.value)}}U.BLOCK_FOLDED="BLOCK_FOLDED";U.BLOCK_LITERAL="BLOCK_LITERAL";U.PLAIN="PLAIN";U.QUOTE_DOUBLE="QUOTE_DOUBLE";U.QUOTE_SINGLE="QUOTE_SINGLE";const Sl="tag:yaml.org,2002:";function Al(e,t,n){if(t){const i=n.filter(o=>o.tag===t),r=i.find(o=>!o.format)??i[0];if(!r)throw new Error(`Tag ${t} not found`);return r}return n.find(i=>{var r;return((r=i.identify)==null?void 0:r.call(i,e))&&!i.format})}function Rt(e,t,n){var u,f,h;if(pn(e)&&(e=e.contents),X(e))return e;if(Z(e)){const m=(f=(u=n.schema[Ne]).createNode)==null?void 0:f.call(u,n.schema,null,n);return m.items.push(e),m}(e instanceof String||e instanceof Number||e instanceof Boolean||typeof BigInt<"u"&&e instanceof BigInt)&&(e=e.valueOf());const{aliasDuplicateObjects:i,onAnchor:r,onTagObj:o,schema:s,sourceObjects:a}=n;let l;if(i&&e&&typeof e=="object"){if(l=a.get(e),l)return l.anchor??(l.anchor=r(e)),new wi(l.anchor);l={anchor:null,node:null},a.set(e,l)}t!=null&&t.startsWith("!!")&&(t=Sl+t.slice(2));let c=Al(e,t,s.tags);if(!c){if(e&&typeof e.toJSON=="function"&&(e=e.toJSON()),!e||typeof e!="object"){const m=new U(e);return l&&(l.node=m),m}c=e instanceof Map?s[Ne]:Symbol.iterator in Object(e)?s[ht]:s[Ne]}o&&(o(c),delete n.onTagObj);const d=c!=null&&c.createNode?c.createNode(n.schema,e,n):typeof((h=c==null?void 0:c.nodeClass)==null?void 0:h.from)=="function"?c.nodeClass.from(n.schema,e,n):new U(e);return t?d.tag=t:c.default||(d.tag=c.tag),l&&(l.node=d),d}function an(e,t,n){let i=n;for(let r=t.length-1;r>=0;--r){const o=t[r];if(typeof o=="number"&&Number.isInteger(o)&&o>=0){const s=[];s[o]=i,i=s}else i=new Map([[o,i]])}return Rt(i,void 0,{aliasDuplicateObjects:!1,keepUndefined:!1,onAnchor:()=>{throw new Error("This should not happen, please report a bug.")},schema:e,sourceObjects:new Map})}const Tt=e=>e==null||typeof e=="object"&&!!e[Symbol.iterator]().next().done;class yo extends bi{constructor(t,n){super(t),Object.defineProperty(this,"schema",{value:n,configurable:!0,enumerable:!1,writable:!0})}clone(t){const n=Object.create(Object.getPrototypeOf(this),Object.getOwnPropertyDescriptors(this));return t&&(n.schema=t),n.items=n.items.map(i=>X(i)||Z(i)?i.clone(t):i),this.range&&(n.range=this.range.slice()),n}addIn(t,n){if(Tt(t))this.add(n);else{const[i,...r]=t,o=this.get(i,!0);if(Q(o))o.addIn(r,n);else if(o===void 0&&this.schema)this.set(i,an(this.schema,r,n));else throw new Error(`Expected YAML collection at ${i}. Remaining path: ${r}`)}}deleteIn(t){const[n,...i]=t;if(i.length===0)return this.delete(n);const r=this.get(n,!0);if(Q(r))return r.deleteIn(i);throw new Error(`Expected YAML collection at ${n}. Remaining path: ${i}`)}getIn(t,n){const[i,...r]=t,o=this.get(i,!0);return r.length===0?!n&&Y(o)?o.value:o:Q(o)?o.getIn(r,n):void 0}hasAllNullValues(t){return this.items.every(n=>{if(!Z(n))return!1;const i=n.value;return i==null||t&&Y(i)&&i.value==null&&!i.commentBefore&&!i.comment&&!i.tag})}hasIn(t){const[n,...i]=t;if(i.length===0)return this.has(n);const r=this.get(n,!0);return Q(r)?r.hasIn(i):!1}setIn(t,n){const[i,...r]=t;if(r.length===0)this.set(i,n);else{const o=this.get(i,!0);if(Q(o))o.setIn(r,n);else if(o===void 0&&this.schema)this.set(i,an(this.schema,r,n));else throw new Error(`Expected YAML collection at ${i}. Remaining path: ${r}`)}}}const Il=e=>e.replace(/^(?!$)(?: $)?/gm,"#");function De(e,t){return/^\n+$/.test(e)?e.substring(1):t?e.replace(/^(?! *$)/gm,t):e}const He=(e,t,n)=>e.endsWith(`
`)?De(n,t):n.includes(`
`)?`
`+De(n,t):(e.endsWith(" ")?"":" ")+n,bo="flow",ti="block",nn="quoted";function mn(e,t,n="flow",{indentAtStart:i,lineWidth:r=80,minContentWidth:o=20,onFold:s,onOverflow:a}={}){if(!r||r<0)return e;r<o&&(o=0);const l=Math.max(1+o,1+r-t.length);if(e.length<=l)return e;const c=[],d={};let u=r-t.length;typeof i=="number"&&(i>r-Math.max(2,o)?c.push(0):u=r-i);let f,h,m=!1,g=-1,b=-1,p=-1;n===ti&&(g=rr(e,g,t.length),g!==-1&&(u=g+l));for(let x;x=e[g+=1];){if(n===nn&&x==="\\"){switch(b=g,e[g+1]){case"x":g+=3;break;case"u":g+=5;break;case"U":g+=9;break;default:g+=1}p=g}if(x===`
`)n===ti&&(g=rr(e,g,t.length)),u=g+t.length+l,f=void 0;else{if(x===" "&&h&&h!==" "&&h!==`
`&&h!=="	"){const T=e[g+1];T&&T!==" "&&T!==`
`&&T!=="	"&&(f=g)}if(g>=u)if(f)c.push(f),u=f+l,f=void 0;else if(n===nn){for(;h===" "||h==="	";)h=x,x=e[g+=1],m=!0;const T=g>p+1?g-2:b-1;if(d[T])return e;c.push(T),d[T]=!0,u=T+l,f=void 0}else m=!0}h=x}if(m&&a&&a(),c.length===0)return e;s&&s();let k=e.slice(0,c[0]);for(let x=0;x<c.length;++x){const T=c[x],I=c[x+1]||e.length;T===0?k=`
${t}${e.slice(0,I)}`:(n===nn&&d[T]&&(k+=`${e[T]}\\`),k+=`
${t}${e.slice(T+1,I)}`)}return k}function rr(e,t,n){let i=t,r=t+1,o=e[r];for(;o===" "||o==="	";)if(t<r+n)o=e[++t];else{do o=e[++t];while(o&&o!==`
`);i=t,r=t+1,o=e[r]}return i}const gn=(e,t)=>({indentAtStart:t?e.indent.length:e.indentAtStart,lineWidth:e.options.lineWidth,minContentWidth:e.options.minContentWidth}),yn=e=>/^(%|---|\.\.\.)/m.test(e);function Cl(e,t,n){if(!t||t<0)return!1;const i=t-n,r=e.length;if(r<=i)return!1;for(let o=0,s=0;o<r;++o)if(e[o]===`
`){if(o-s>i)return!0;if(s=o+1,r-s<=i)return!1}return!0}function Dt(e,t){const n=JSON.stringify(e);if(t.options.doubleQuotedAsJSON)return n;const{implicitKey:i}=t,r=t.options.doubleQuotedMinMultiLineLength,o=t.indent||(yn(e)?"  ":"");let s="",a=0;for(let l=0,c=n[l];c;c=n[++l])if(c===" "&&n[l+1]==="\\"&&n[l+2]==="n"&&(s+=n.slice(a,l)+"\\ ",l+=1,a=l,c="\\"),c==="\\")switch(n[l+1]){case"u":{s+=n.slice(a,l);const d=n.substr(l+2,4);switch(d){case"0000":s+="\\0";break;case"0007":s+="\\a";break;case"000b":s+="\\v";break;case"001b":s+="\\e";break;case"0085":s+="\\N";break;case"00a0":s+="\\_";break;case"2028":s+="\\L";break;case"2029":s+="\\P";break;default:d.substr(0,2)==="00"?s+="\\x"+d.substr(2):s+=n.substr(l,6)}l+=5,a=l+1}break;case"n":if(i||n[l+2]==='"'||n.length<r)l+=1;else{for(s+=n.slice(a,l)+`

`;n[l+2]==="\\"&&n[l+3]==="n"&&n[l+4]!=='"';)s+=`
`,l+=2;s+=o,n[l+2]===" "&&(s+="\\"),l+=1,a=l+1}break;default:l+=1}return s=a?s+n.slice(a):n,i?s:mn(s,o,nn,gn(t,!1))}function ni(e,t){if(t.options.singleQuote===!1||t.implicitKey&&e.includes(`
`)||/[ \t]\n|\n[ \t]/.test(e))return Dt(e,t);const n=t.indent||(yn(e)?"  ":""),i="'"+e.replace(/'/g,"''").replace(/\n+/g,`$&
${n}`)+"'";return t.implicitKey?i:mn(i,n,bo,gn(t,!1))}function st(e,t){const{singleQuote:n}=t.options;let i;if(n===!1)i=Dt;else{const r=e.includes('"'),o=e.includes("'");r&&!o?i=ni:o&&!r?i=Dt:i=n?ni:Dt}return i(e,t)}let ii;try{ii=new RegExp(`(^|(?<!
))
+(?!
|$)`,"g")}catch{ii=/\n+(?!\n|$)/g}function rn({comment:e,type:t,value:n},i,r,o){const{blockQuote:s,commentString:a,lineWidth:l}=i.options;if(!s||/\n[\t ]+$/.test(n))return st(n,i);const c=i.indent||(i.forceBlockIndent||yn(n)?"  ":""),d=s==="literal"?!0:s==="folded"||t===U.BLOCK_FOLDED?!1:t===U.BLOCK_LITERAL?!0:!Cl(n,l,c.length);if(!n)return d?`|
`:`>
`;let u,f;for(f=n.length;f>0;--f){const I=n[f-1];if(I!==`
`&&I!=="	"&&I!==" ")break}let h=n.substring(f);const m=h.indexOf(`
`);m===-1?u="-":n===h||m!==h.length-1?(u="+",o&&o()):u="",h&&(n=n.slice(0,-h.length),h[h.length-1]===`
`&&(h=h.slice(0,-1)),h=h.replace(ii,`$&${c}`));let g=!1,b,p=-1;for(b=0;b<n.length;++b){const I=n[b];if(I===" ")g=!0;else if(I===`
`)p=b;else break}let k=n.substring(0,p<b?p+1:b);k&&(n=n.substring(k.length),k=k.replace(/\n+/g,`$&${c}`));let T=(g?c?"2":"1":"")+u;if(e&&(T+=" "+a(e.replace(/ ?[\r\n]+/g," ")),r&&r()),!d){const I=n.replace(/\n+/g,`
$&`).replace(/(?:^|\n)([\t ].*)(?:([\n\t ]*)\n(?![\n\t ]))?/g,"$1$2").replace(/\n+/g,`$&${c}`);let v=!1;const E=gn(i,!0);s!=="folded"&&t!==U.BLOCK_FOLDED&&(E.onOverflow=()=>{v=!0});const P=mn(`${k}${I}${h}`,c,ti,E);if(!v)return`>${T}
${c}${P}`}return n=n.replace(/\n+/g,`$&${c}`),`|${T}
${c}${k}${n}${h}`}function Tl(e,t,n,i){const{type:r,value:o}=e,{actualString:s,implicitKey:a,indent:l,indentStep:c,inFlow:d}=t;if(a&&o.includes(`
`)||d&&/[[\]{},]/.test(o))return st(o,t);if(/^[\n\t ,[\]{}#&*!|>'"%@`]|^[?-]$|^[?-][ \t]|[\n:][ \t]|[ \t]\n|[\n\t ]#|[\n\t :]$/.test(o))return a||d||!o.includes(`
`)?st(o,t):rn(e,t,n,i);if(!a&&!d&&r!==U.PLAIN&&o.includes(`
`))return rn(e,t,n,i);if(yn(o)){if(l==="")return t.forceBlockIndent=!0,rn(e,t,n,i);if(a&&l===c)return st(o,t)}const u=o.replace(/\n+/g,`$&
${l}`);if(s){const f=g=>{var b;return g.default&&g.tag!=="tag:yaml.org,2002:str"&&((b=g.test)==null?void 0:b.test(u))},{compat:h,tags:m}=t.doc.schema;if(m.some(f)||h!=null&&h.some(f))return st(o,t)}return a?u:mn(u,l,bo,gn(t,!1))}function ki(e,t,n,i){const{implicitKey:r,inFlow:o}=t,s=typeof e.value=="string"?e:Object.assign({},e,{value:String(e.value)});let{type:a}=e;a!==U.QUOTE_DOUBLE&&/[\x00-\x08\x0b-\x1f\x7f-\x9f\u{D800}-\u{DFFF}]/u.test(s.value)&&(a=U.QUOTE_DOUBLE);const l=d=>{switch(d){case U.BLOCK_FOLDED:case U.BLOCK_LITERAL:return r||o?st(s.value,t):rn(s,t,n,i);case U.QUOTE_DOUBLE:return Dt(s.value,t);case U.QUOTE_SINGLE:return ni(s.value,t);case U.PLAIN:return Tl(s,t,n,i);default:return null}};let c=l(a);if(c===null){const{defaultKeyType:d,defaultStringType:u}=t.options,f=r&&d||u;if(c=l(f),c===null)throw new Error(`Unsupported default string type ${f}`)}return c}function wo(e,t){const n=Object.assign({blockQuote:!0,commentString:Il,defaultKeyType:null,defaultStringType:"PLAIN",directives:null,doubleQuotedAsJSON:!1,doubleQuotedMinMultiLineLength:40,falseStr:"false",flowCollectionPadding:!0,indentSeq:!0,lineWidth:80,minContentWidth:20,nullStr:"null",simpleKeys:!1,singleQuote:null,trailingComma:!1,trueStr:"true",verifyAliasOrder:!0},e.schema.toStringOptions,t);let i;switch(n.collectionStyle){case"block":i=!1;break;case"flow":i=!0;break;default:i=null}return{anchors:new Set,doc:e,flowCollectionPadding:n.flowCollectionPadding?" ":"",indent:"",indentStep:typeof n.indent=="number"?" ".repeat(n.indent):"  ",inFlow:i,options:n}}function El(e,t){var r;if(t.tag){const o=e.filter(s=>s.tag===t.tag);if(o.length>0)return o.find(s=>s.format===t.format)??o[0]}let n,i;if(Y(t)){i=t.value;let o=e.filter(s=>{var a;return(a=s.identify)==null?void 0:a.call(s,i)});if(o.length>1){const s=o.filter(a=>a.test);s.length>0&&(o=s)}n=o.find(s=>s.format===t.format)??o.find(s=>!s.format)}else i=t,n=e.find(o=>o.nodeClass&&i instanceof o.nodeClass);if(!n){const o=((r=i==null?void 0:i.constructor)==null?void 0:r.name)??(i===null?"null":typeof i);throw new Error(`Tag not resolved for ${o} value`)}return n}function Pl(e,t,{anchors:n,doc:i}){if(!i.directives)return"";const r=[],o=(Y(e)||Q(e))&&e.anchor;o&&fo(o)&&(n.add(o),r.push(`&${o}`));const s=e.tag??(t.default?null:t.tag);return s&&r.push(i.directives.tagString(s)),r.join(" ")}function ct(e,t,n,i){var l;if(Z(e))return e.toString(t,n,i);if(ft(e)){if(t.doc.directives)return e.toString(t);if((l=t.resolvedAliases)!=null&&l.has(e))throw new TypeError("Cannot stringify circular structure without alias nodes");t.resolvedAliases?t.resolvedAliases.add(e):t.resolvedAliases=new Set([e]),e=e.resolve(t.doc)}let r;const o=X(e)?e:t.doc.createNode(e,{onTagObj:c=>r=c});r??(r=El(t.doc.schema.tags,o));const s=Pl(o,r,t);s.length>0&&(t.indentAtStart=(t.indentAtStart??0)+s.length+1);const a=typeof r.stringify=="function"?r.stringify(o,t,n,i):Y(o)?ki(o,t,n,i):o.toString(t,n,i);return s?Y(o)||a[0]==="{"||a[0]==="["?`${s} ${a}`:`${s}
${t.indent}${a}`:a}function Dl({key:e,value:t},n,i,r){const{allNullValues:o,doc:s,indent:a,indentStep:l,options:{commentString:c,indentSeq:d,simpleKeys:u}}=n;let f=X(e)&&e.comment||null;if(u){if(f)throw new Error("With simple keys, key nodes cannot have comments");if(Q(e)||!X(e)&&typeof e=="object"){const E="With simple keys, collection cannot be used as a key value";throw new Error(E)}}let h=!u&&(!e||f&&t==null&&!n.inFlow||Q(e)||(Y(e)?e.type===U.BLOCK_FOLDED||e.type===U.BLOCK_LITERAL:typeof e=="object"));n=Object.assign({},n,{allNullValues:!1,implicitKey:!h&&(u||!o),indent:a+l});let m=!1,g=!1,b=ct(e,n,()=>m=!0,()=>g=!0);if(!h&&!n.inFlow&&b.length>1024){if(u)throw new Error("With simple keys, single line scalar must not span more than 1024 characters");h=!0}if(n.inFlow){if(o||t==null)return m&&i&&i(),b===""?"?":h?`? ${b}`:b}else if(o&&!u||t==null&&h)return b=`? ${b}`,f&&!m?b+=He(b,n.indent,c(f)):g&&r&&r(),b;m&&(f=null),h?(f&&(b+=He(b,n.indent,c(f))),b=`? ${b}
${a}:`):(b=`${b}:`,f&&(b+=He(b,n.indent,c(f))));let p,k,x;X(t)?(p=!!t.spaceBefore,k=t.commentBefore,x=t.comment):(p=!1,k=null,x=null,t&&typeof t=="object"&&(t=s.createNode(t))),n.implicitKey=!1,!h&&!f&&Y(t)&&(n.indentAtStart=b.length+1),g=!1,!d&&l.length>=2&&!n.inFlow&&!h&&Bt(t)&&!t.flow&&!t.tag&&!t.anchor&&(n.indent=n.indent.substring(2));let T=!1;const I=ct(t,n,()=>T=!0,()=>g=!0);let v=" ";if(f||p||k){if(v=p?`
`:"",k){const E=c(k);v+=`
${De(E,n.indent)}`}I===""&&!n.inFlow?v===`
`&&x&&(v=`

`):v+=`
${n.indent}`}else if(!h&&Q(t)){const E=I[0],P=I.indexOf(`
`),O=P!==-1,S=n.inFlow??t.flow??t.items.length===0;if(O||!S){let M=!1;if(O&&(E==="&"||E==="!")){let _=I.indexOf(" ");E==="&"&&_!==-1&&_<P&&I[_+1]==="!"&&(_=I.indexOf(" ",_+1)),(_===-1||P<_)&&(M=!0)}M||(v=`
${n.indent}`)}}else(I===""||I[0]===`
`)&&(v="");return b+=v+I,n.inFlow?T&&i&&i():x&&!T?b+=He(b,n.indent,c(x)):g&&r&&r(),b}function ko(e,t){(e==="debug"||e==="warn")&&console.warn(t)}const Wt="<<",Le={identify:e=>e===Wt||typeof e=="symbol"&&e.description===Wt,default:"key",tag:"tag:yaml.org,2002:merge",test:/^<<$/,resolve:()=>Object.assign(new U(Symbol(Wt)),{addToJSMap:xo}),stringify:()=>Wt},Ll=(e,t)=>(Le.identify(t)||Y(t)&&(!t.type||t.type===U.PLAIN)&&Le.identify(t.value))&&(e==null?void 0:e.doc.schema.tags.some(n=>n.tag===Le.tag&&n.default));function xo(e,t,n){const i=vo(e,n);if(Bt(i))for(const r of i.items)Dn(e,t,r);else if(Array.isArray(i))for(const r of i)Dn(e,t,r);else Dn(e,t,i)}function Dn(e,t,n){const i=vo(e,n);if(!Ft(i))throw new Error("Merge sources must be maps or map aliases");const r=i.toJSON(null,e,Map);for(const[o,s]of r)t instanceof Map?t.has(o)||t.set(o,s):t instanceof Set?t.add(o):Object.prototype.hasOwnProperty.call(t,o)||Object.defineProperty(t,o,{value:s,writable:!0,enumerable:!0,configurable:!0});return t}function vo(e,t){return e&&ft(t)?t.resolve(e.doc,e):t}function So(e,t,{key:n,value:i}){if(X(n)&&n.addToJSMap)n.addToJSMap(e,t,i);else if(Ll(e,n))xo(e,t,i);else{const r=ge(n,"",e);if(t instanceof Map)t.set(r,ge(i,r,e));else if(t instanceof Set)t.add(r);else{const o=_l(n,r,e),s=ge(i,o,e);o in t?Object.defineProperty(t,o,{value:s,writable:!0,enumerable:!0,configurable:!0}):t[o]=s}}return t}function _l(e,t,n){if(t===null)return"";if(typeof t!="object")return String(t);if(X(e)&&(n!=null&&n.doc)){const i=wo(n.doc,{});i.anchors=new Set;for(const o of n.anchors.keys())i.anchors.add(o.anchor);i.inFlow=!0,i.inStringifyKey=!0;const r=e.toString(i);if(!n.mapKeyWarned){let o=JSON.stringify(r);o.length>40&&(o=o.substring(0,36)+'..."'),ko(n.doc.options.logLevel,`Keys with collection values will be stringified due to JS Object restrictions: ${o}. Set mapAsMap: true to use object keys.`),n.mapKeyWarned=!0}return r}return JSON.stringify(t)}function xi(e,t,n){const i=Rt(e,void 0,n),r=Rt(t,void 0,n);return new se(i,r)}class se{constructor(t,n=null){Object.defineProperty(this,ye,{value:uo}),this.key=t,this.value=n}clone(t){let{key:n,value:i}=this;return X(n)&&(n=n.clone(t)),X(i)&&(i=i.clone(t)),new se(n,i)}toJSON(t,n){const i=n!=null&&n.mapAsMap?new Map:{};return So(n,i,this)}toString(t,n,i){return t!=null&&t.doc?Dl(this,t,n,i):JSON.stringify(this)}}function Ao(e,t,n){return(t.inFlow??e.flow?Rl:Ml)(e,t,n)}function Ml({comment:e,items:t},n,{blockItemPrefix:i,flowChars:r,itemIndent:o,onChompKeep:s,onComment:a}){const{indent:l,options:{commentString:c}}=n,d=Object.assign({},n,{indent:o,type:null});let u=!1;const f=[];for(let m=0;m<t.length;++m){const g=t[m];let b=null;if(X(g))!u&&g.spaceBefore&&f.push(""),ln(n,f,g.commentBefore,u),g.comment&&(b=g.comment);else if(Z(g)){const k=X(g.key)?g.key:null;k&&(!u&&k.spaceBefore&&f.push(""),ln(n,f,k.commentBefore,u))}u=!1;let p=ct(g,d,()=>b=null,()=>u=!0);b&&(p+=He(p,o,c(b))),u&&b&&(u=!1),f.push(i+p)}let h;if(f.length===0)h=r.start+r.end;else{h=f[0];for(let m=1;m<f.length;++m){const g=f[m];h+=g?`
${l}${g}`:`
`}}return e?(h+=`
`+De(c(e),l),a&&a()):u&&s&&s(),h}function Rl({items:e},t,{flowChars:n,itemIndent:i}){const{indent:r,indentStep:o,flowCollectionPadding:s,options:{commentString:a}}=t;i+=o;const l=Object.assign({},t,{indent:i,inFlow:!0,type:null});let c=!1,d=0;const u=[];for(let m=0;m<e.length;++m){const g=e[m];let b=null;if(X(g))g.spaceBefore&&u.push(""),ln(t,u,g.commentBefore,!1),g.comment&&(b=g.comment);else if(Z(g)){const k=X(g.key)?g.key:null;k&&(k.spaceBefore&&u.push(""),ln(t,u,k.commentBefore,!1),k.comment&&(c=!0));const x=X(g.value)?g.value:null;x?(x.comment&&(b=x.comment),x.commentBefore&&(c=!0)):g.value==null&&(k!=null&&k.comment)&&(b=k.comment)}b&&(c=!0);let p=ct(g,l,()=>b=null);c||(c=u.length>d||p.includes(`
`)),m<e.length-1?p+=",":t.options.trailingComma&&(t.options.lineWidth>0&&(c||(c=u.reduce((k,x)=>k+x.length+2,2)+(p.length+2)>t.options.lineWidth)),c&&(p+=",")),b&&(p+=He(p,i,a(b))),u.push(p),d=u.length}const{start:f,end:h}=n;if(u.length===0)return f+h;if(!c){const m=u.reduce((g,b)=>g+b.length+2,2);c=t.options.lineWidth>0&&m>t.options.lineWidth}if(c){let m=f;for(const g of u)m+=g?`
${o}${r}${g}`:`
`;return`${m}
${r}${h}`}else return`${f}${s}${u.join(" ")}${s}${h}`}function ln({indent:e,options:{commentString:t}},n,i,r){if(i&&r&&(i=i.replace(/^\n+/,"")),i){const o=De(t(i),e);n.push(o.trimStart())}}function Ve(e,t){const n=Y(t)?t.value:t;for(const i of e)if(Z(i)&&(i.key===t||i.key===n||Y(i.key)&&i.key.value===n))return i}class me extends yo{static get tagName(){return"tag:yaml.org,2002:map"}constructor(t){super(Ne,t),this.items=[]}static from(t,n,i){const{keepUndefined:r,replacer:o}=i,s=new this(t),a=(l,c)=>{if(typeof o=="function")c=o.call(n,l,c);else if(Array.isArray(o)&&!o.includes(l))return;(c!==void 0||r)&&s.items.push(xi(l,c,i))};if(n instanceof Map)for(const[l,c]of n)a(l,c);else if(n&&typeof n=="object")for(const l of Object.keys(n))a(l,n[l]);return typeof t.sortMapEntries=="function"&&s.items.sort(t.sortMapEntries),s}add(t,n){var s;let i;Z(t)?i=t:!t||typeof t!="object"||!("key"in t)?i=new se(t,t==null?void 0:t.value):i=new se(t.key,t.value);const r=Ve(this.items,i.key),o=(s=this.schema)==null?void 0:s.sortMapEntries;if(r){if(!n)throw new Error(`Key ${i.key} already set`);Y(r.value)&&go(i.value)?r.value.value=i.value:r.value=i.value}else if(o){const a=this.items.findIndex(l=>o(i,l)<0);a===-1?this.items.push(i):this.items.splice(a,0,i)}else this.items.push(i)}delete(t){const n=Ve(this.items,t);return n?this.items.splice(this.items.indexOf(n),1).length>0:!1}get(t,n){const i=Ve(this.items,t),r=i==null?void 0:i.value;return(!n&&Y(r)?r.value:r)??void 0}has(t){return!!Ve(this.items,t)}set(t,n){this.add(new se(t,n),!0)}toJSON(t,n,i){const r=i?new i:n!=null&&n.mapAsMap?new Map:{};n!=null&&n.onCreate&&n.onCreate(r);for(const o of this.items)So(n,r,o);return r}toString(t,n,i){if(!t)return JSON.stringify(this);for(const r of this.items)if(!Z(r))throw new Error(`Map items must all be pairs; found ${JSON.stringify(r)} instead`);return!t.allNullValues&&this.hasAllNullValues(!1)&&(t=Object.assign({},t,{allNullValues:!0})),Ao(this,t,{blockItemPrefix:"",flowChars:{start:"{",end:"}"},itemIndent:t.indent||"",onChompKeep:i,onComment:n})}}const mt={collection:"map",default:!0,nodeClass:me,tag:"tag:yaml.org,2002:map",resolve(e,t){return Ft(e)||t("Expected a mapping for this tag"),e},createNode:(e,t,n)=>me.from(e,t,n)};class We extends yo{static get tagName(){return"tag:yaml.org,2002:seq"}constructor(t){super(ht,t),this.items=[]}add(t){this.items.push(t)}delete(t){const n=Kt(t);return typeof n!="number"?!1:this.items.splice(n,1).length>0}get(t,n){const i=Kt(t);if(typeof i!="number")return;const r=this.items[i];return!n&&Y(r)?r.value:r}has(t){const n=Kt(t);return typeof n=="number"&&n<this.items.length}set(t,n){const i=Kt(t);if(typeof i!="number")throw new Error(`Expected a valid index, not ${t}.`);const r=this.items[i];Y(r)&&go(n)?r.value=n:this.items[i]=n}toJSON(t,n){const i=[];n!=null&&n.onCreate&&n.onCreate(i);let r=0;for(const o of this.items)i.push(ge(o,String(r++),n));return i}toString(t,n,i){return t?Ao(this,t,{blockItemPrefix:"- ",flowChars:{start:"[",end:"]"},itemIndent:(t.indent||"")+"  ",onChompKeep:i,onComment:n}):JSON.stringify(this)}static from(t,n,i){const{replacer:r}=i,o=new this(t);if(n&&Symbol.iterator in Object(n)){let s=0;for(let a of n){if(typeof r=="function"){const l=n instanceof Set?a:String(s++);a=r.call(n,l,a)}o.items.push(Rt(a,void 0,i))}}return o}}function Kt(e){let t=Y(e)?e.value:e;return t&&typeof t=="string"&&(t=Number(t)),typeof t=="number"&&Number.isInteger(t)&&t>=0?t:null}const gt={collection:"seq",default:!0,nodeClass:We,tag:"tag:yaml.org,2002:seq",resolve(e,t){return Bt(e)||t("Expected a sequence for this tag"),e},createNode:(e,t,n)=>We.from(e,t,n)},bn={identify:e=>typeof e=="string",default:!0,tag:"tag:yaml.org,2002:str",resolve:e=>e,stringify(e,t,n,i){return t=Object.assign({actualString:!0},t),ki(e,t,n,i)}},wn={identify:e=>e==null,createNode:()=>new U(null),default:!0,tag:"tag:yaml.org,2002:null",test:/^(?:~|[Nn]ull|NULL)?$/,resolve:()=>new U(null),stringify:({source:e},t)=>typeof e=="string"&&wn.test.test(e)?e:t.options.nullStr},vi={identify:e=>typeof e=="boolean",default:!0,tag:"tag:yaml.org,2002:bool",test:/^(?:[Tt]rue|TRUE|[Ff]alse|FALSE)$/,resolve:e=>new U(e[0]==="t"||e[0]==="T"),stringify({source:e,value:t},n){if(e&&vi.test.test(e)){const i=e[0]==="t"||e[0]==="T";if(t===i)return e}return t?n.options.trueStr:n.options.falseStr}};function Se({format:e,minFractionDigits:t,tag:n,value:i}){if(typeof i=="bigint")return String(i);const r=typeof i=="number"?i:Number(i);if(!isFinite(r))return isNaN(r)?".nan":r<0?"-.inf":".inf";let o=Object.is(i,-0)?"-0":JSON.stringify(i);if(!e&&t&&(!n||n==="tag:yaml.org,2002:float")&&/^-?\d/.test(o)&&!o.includes("e")){let s=o.indexOf(".");s<0&&(s=o.length,o+=".");let a=t-(o.length-s-1);for(;a-- >0;)o+="0"}return o}const Io={identify:e=>typeof e=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^(?:[-+]?\.(?:inf|Inf|INF)|\.nan|\.NaN|\.NAN)$/,resolve:e=>e.slice(-3).toLowerCase()==="nan"?NaN:e[0]==="-"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,stringify:Se},Co={identify:e=>typeof e=="number",default:!0,tag:"tag:yaml.org,2002:float",format:"EXP",test:/^[-+]?(?:\.[0-9]+|[0-9]+(?:\.[0-9]*)?)[eE][-+]?[0-9]+$/,resolve:e=>parseFloat(e),stringify(e){const t=Number(e.value);return isFinite(t)?t.toExponential():Se(e)}},To={identify:e=>typeof e=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^[-+]?(?:\.[0-9]+|[0-9]+\.[0-9]*)$/,resolve(e){const t=new U(parseFloat(e)),n=e.indexOf(".");return n!==-1&&e[e.length-1]==="0"&&(t.minFractionDigits=e.length-n-1),t},stringify:Se},kn=e=>typeof e=="bigint"||Number.isInteger(e),Si=(e,t,n,{intAsBigInt:i})=>i?BigInt(e):parseInt(e.substring(t),n);function Eo(e,t,n){const{value:i}=e;return kn(i)&&i>=0?n+i.toString(t):Se(e)}const Po={identify:e=>kn(e)&&e>=0,default:!0,tag:"tag:yaml.org,2002:int",format:"OCT",test:/^0o[0-7]+$/,resolve:(e,t,n)=>Si(e,2,8,n),stringify:e=>Eo(e,8,"0o")},Do={identify:kn,default:!0,tag:"tag:yaml.org,2002:int",test:/^[-+]?[0-9]+$/,resolve:(e,t,n)=>Si(e,0,10,n),stringify:Se},Lo={identify:e=>kn(e)&&e>=0,default:!0,tag:"tag:yaml.org,2002:int",format:"HEX",test:/^0x[0-9a-fA-F]+$/,resolve:(e,t,n)=>Si(e,2,16,n),stringify:e=>Eo(e,16,"0x")},Ol=[mt,gt,bn,wn,vi,Po,Do,Lo,Io,Co,To];function or(e){return typeof e=="bigint"||Number.isInteger(e)}const Gt=({value:e})=>JSON.stringify(e),Nl=[{identify:e=>typeof e=="string",default:!0,tag:"tag:yaml.org,2002:str",resolve:e=>e,stringify:Gt},{identify:e=>e==null,createNode:()=>new U(null),default:!0,tag:"tag:yaml.org,2002:null",test:/^null$/,resolve:()=>null,stringify:Gt},{identify:e=>typeof e=="boolean",default:!0,tag:"tag:yaml.org,2002:bool",test:/^true$|^false$/,resolve:e=>e==="true",stringify:Gt},{identify:or,default:!0,tag:"tag:yaml.org,2002:int",test:/^-?(?:0|[1-9][0-9]*)$/,resolve:(e,t,{intAsBigInt:n})=>n?BigInt(e):parseInt(e,10),stringify:({value:e})=>or(e)?e.toString():JSON.stringify(e)},{identify:e=>typeof e=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^-?(?:0|[1-9][0-9]*)(?:\.[0-9]*)?(?:[eE][-+]?[0-9]+)?$/,resolve:e=>parseFloat(e),stringify:Gt}],jl={default:!0,tag:"",test:/^/,resolve(e,t){return t(`Unresolved plain scalar ${JSON.stringify(e)}`),e}},Fl=[mt,gt].concat(Nl,jl),Ai={identify:e=>e instanceof Uint8Array,default:!1,tag:"tag:yaml.org,2002:binary",resolve(e,t){if(typeof atob=="function"){const n=atob(e.replace(/[\n\r]/g,"")),i=new Uint8Array(n.length);for(let r=0;r<n.length;++r)i[r]=n.charCodeAt(r);return i}else return t("This environment does not support reading binary tags; either Buffer or atob is required"),e},stringify({comment:e,type:t,value:n},i,r,o){if(!n)return"";const s=n;let a;if(typeof btoa=="function"){let l="";for(let c=0;c<s.length;++c)l+=String.fromCharCode(s[c]);a=btoa(l)}else throw new Error("This environment does not support writing binary tags; either Buffer or btoa is required");if(t??(t=U.BLOCK_LITERAL),t!==U.QUOTE_DOUBLE){const l=Math.max(i.options.lineWidth-i.indent.length,i.options.minContentWidth),c=Math.ceil(a.length/l),d=new Array(c);for(let u=0,f=0;u<c;++u,f+=l)d[u]=a.substr(f,l);a=d.join(t===U.BLOCK_LITERAL?`
`:" ")}return ki({comment:e,type:t,value:a},i,r,o)}};function _o(e,t){if(Bt(e))for(let n=0;n<e.items.length;++n){let i=e.items[n];if(!Z(i)){if(Ft(i)){i.items.length>1&&t("Each pair must have its own sequence indicator");const r=i.items[0]||new se(new U(null));if(i.commentBefore&&(r.key.commentBefore=r.key.commentBefore?`${i.commentBefore}
${r.key.commentBefore}`:i.commentBefore),i.comment){const o=r.value??r.key;o.comment=o.comment?`${i.comment}
${o.comment}`:i.comment}i=r}e.items[n]=Z(i)?i:new se(i)}}else t("Expected a sequence for this tag");return e}function Mo(e,t,n){const{replacer:i}=n,r=new We(e);r.tag="tag:yaml.org,2002:pairs";let o=0;if(t&&Symbol.iterator in Object(t))for(let s of t){typeof i=="function"&&(s=i.call(t,String(o++),s));let a,l;if(Array.isArray(s))if(s.length===2)a=s[0],l=s[1];else throw new TypeError(`Expected [key, value] tuple: ${s}`);else if(s&&s instanceof Object){const c=Object.keys(s);if(c.length===1)a=c[0],l=s[a];else throw new TypeError(`Expected tuple with one key, not ${c.length} keys`)}else a=s;r.items.push(xi(a,l,n))}return r}const Ii={collection:"seq",default:!1,tag:"tag:yaml.org,2002:pairs",resolve:_o,createNode:Mo};class at extends We{constructor(){super(),this.add=me.prototype.add.bind(this),this.delete=me.prototype.delete.bind(this),this.get=me.prototype.get.bind(this),this.has=me.prototype.has.bind(this),this.set=me.prototype.set.bind(this),this.tag=at.tag}toJSON(t,n){if(!n)return super.toJSON(t);const i=new Map;n!=null&&n.onCreate&&n.onCreate(i);for(const r of this.items){let o,s;if(Z(r)?(o=ge(r.key,"",n),s=ge(r.value,o,n)):o=ge(r,"",n),i.has(o))throw new Error("Ordered maps must not include duplicate keys");i.set(o,s)}return i}static from(t,n,i){const r=Mo(t,n,i),o=new this;return o.items=r.items,o}}at.tag="tag:yaml.org,2002:omap";const Ci={collection:"seq",identify:e=>e instanceof Map,nodeClass:at,default:!1,tag:"tag:yaml.org,2002:omap",resolve(e,t){const n=_o(e,t),i=[];for(const{key:r}of n.items)Y(r)&&(i.includes(r.value)?t(`Ordered maps must not include duplicate keys: ${r.value}`):i.push(r.value));return Object.assign(new at,n)},createNode:(e,t,n)=>at.from(e,t,n)};function Ro({value:e,source:t},n){return t&&(e?Oo:No).test.test(t)?t:e?n.options.trueStr:n.options.falseStr}const Oo={identify:e=>e===!0,default:!0,tag:"tag:yaml.org,2002:bool",test:/^(?:Y|y|[Yy]es|YES|[Tt]rue|TRUE|[Oo]n|ON)$/,resolve:()=>new U(!0),stringify:Ro},No={identify:e=>e===!1,default:!0,tag:"tag:yaml.org,2002:bool",test:/^(?:N|n|[Nn]o|NO|[Ff]alse|FALSE|[Oo]ff|OFF)$/,resolve:()=>new U(!1),stringify:Ro},Bl={identify:e=>typeof e=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^(?:[-+]?\.(?:inf|Inf|INF)|\.nan|\.NaN|\.NAN)$/,resolve:e=>e.slice(-3).toLowerCase()==="nan"?NaN:e[0]==="-"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,stringify:Se},zl={identify:e=>typeof e=="number",default:!0,tag:"tag:yaml.org,2002:float",format:"EXP",test:/^[-+]?(?:[0-9][0-9_]*)?(?:\.[0-9_]*)?[eE][-+]?[0-9]+$/,resolve:e=>parseFloat(e.replace(/_/g,"")),stringify(e){const t=Number(e.value);return isFinite(t)?t.toExponential():Se(e)}},Ul={identify:e=>typeof e=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^[-+]?(?:[0-9][0-9_]*)?\.[0-9_]*$/,resolve(e){const t=new U(parseFloat(e.replace(/_/g,""))),n=e.indexOf(".");if(n!==-1){const i=e.substring(n+1).replace(/_/g,"");i[i.length-1]==="0"&&(t.minFractionDigits=i.length)}return t},stringify:Se},zt=e=>typeof e=="bigint"||Number.isInteger(e);function xn(e,t,n,{intAsBigInt:i}){const r=e[0];if((r==="-"||r==="+")&&(t+=1),e=e.substring(t).replace(/_/g,""),i){switch(n){case 2:e=`0b${e}`;break;case 8:e=`0o${e}`;break;case 16:e=`0x${e}`;break}const s=BigInt(e);return r==="-"?BigInt(-1)*s:s}const o=parseInt(e,n);return r==="-"?-1*o:o}function Ti(e,t,n){const{value:i}=e;if(zt(i)){const r=i.toString(t);return i<0?"-"+n+r.substr(1):n+r}return Se(e)}const $l={identify:zt,default:!0,tag:"tag:yaml.org,2002:int",format:"BIN",test:/^[-+]?0b[0-1_]+$/,resolve:(e,t,n)=>xn(e,2,2,n),stringify:e=>Ti(e,2,"0b")},Hl={identify:zt,default:!0,tag:"tag:yaml.org,2002:int",format:"OCT",test:/^[-+]?0[0-7_]+$/,resolve:(e,t,n)=>xn(e,1,8,n),stringify:e=>Ti(e,8,"0")},Vl={identify:zt,default:!0,tag:"tag:yaml.org,2002:int",test:/^[-+]?[0-9][0-9_]*$/,resolve:(e,t,n)=>xn(e,0,10,n),stringify:Se},ql={identify:zt,default:!0,tag:"tag:yaml.org,2002:int",format:"HEX",test:/^[-+]?0x[0-9a-fA-F_]+$/,resolve:(e,t,n)=>xn(e,2,16,n),stringify:e=>Ti(e,16,"0x")};class lt extends me{constructor(t){super(t),this.tag=lt.tag}add(t){let n;Z(t)?n=t:t&&typeof t=="object"&&"key"in t&&"value"in t&&t.value===null?n=new se(t.key,null):n=new se(t,null),Ve(this.items,n.key)||this.items.push(n)}get(t,n){const i=Ve(this.items,t);return!n&&Z(i)?Y(i.key)?i.key.value:i.key:i}set(t,n){if(typeof n!="boolean")throw new Error(`Expected boolean value for set(key, value) in a YAML set, not ${typeof n}`);const i=Ve(this.items,t);i&&!n?this.items.splice(this.items.indexOf(i),1):!i&&n&&this.items.push(new se(t))}toJSON(t,n){return super.toJSON(t,n,Set)}toString(t,n,i){if(!t)return JSON.stringify(this);if(this.hasAllNullValues(!0))return super.toString(Object.assign({},t,{allNullValues:!0}),n,i);throw new Error("Set items must all have null values")}static from(t,n,i){const{replacer:r}=i,o=new this(t);if(n&&Symbol.iterator in Object(n))for(let s of n)typeof r=="function"&&(s=r.call(n,s,s)),o.items.push(xi(s,null,i));return o}}lt.tag="tag:yaml.org,2002:set";const Ei={collection:"map",identify:e=>e instanceof Set,nodeClass:lt,default:!1,tag:"tag:yaml.org,2002:set",createNode:(e,t,n)=>lt.from(e,t,n),resolve(e,t){if(Ft(e)){if(e.hasAllNullValues(!0))return Object.assign(new lt,e);t("Set items must all have null values")}else t("Expected a mapping for this tag");return e}};function Pi(e,t){const n=e[0],i=n==="-"||n==="+"?e.substring(1):e,r=s=>t?BigInt(s):Number(s),o=i.replace(/_/g,"").split(":").reduce((s,a)=>s*r(60)+r(a),r(0));return n==="-"?r(-1)*o:o}function jo(e){let{value:t}=e,n=s=>s;if(typeof t=="bigint")n=s=>BigInt(s);else if(isNaN(t)||!isFinite(t))return Se(e);let i="";t<0&&(i="-",t*=n(-1));const r=n(60),o=[t%r];return t<60?o.unshift(0):(t=(t-o[0])/r,o.unshift(t%r),t>=60&&(t=(t-o[0])/r,o.unshift(t))),i+o.map(s=>String(s).padStart(2,"0")).join(":").replace(/000000\d*$/,"")}const Fo={identify:e=>typeof e=="bigint"||Number.isInteger(e),default:!0,tag:"tag:yaml.org,2002:int",format:"TIME",test:/^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+$/,resolve:(e,t,{intAsBigInt:n})=>Pi(e,n),stringify:jo},Bo={identify:e=>typeof e=="number",default:!0,tag:"tag:yaml.org,2002:float",format:"TIME",test:/^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\.[0-9_]*$/,resolve:e=>Pi(e,!1),stringify:jo},vn={identify:e=>e instanceof Date,default:!0,tag:"tag:yaml.org,2002:timestamp",test:RegExp("^([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})(?:(?:t|T|[ \\t]+)([0-9]{1,2}):([0-9]{1,2}):([0-9]{1,2}(\\.[0-9]+)?)(?:[ \\t]*(Z|[-+][012]?[0-9](?::[0-9]{2})?))?)?$"),resolve(e){const t=e.match(vn.test);if(!t)throw new Error("!!timestamp expects a date, starting with yyyy-mm-dd");const[,n,i,r,o,s,a]=t.map(Number),l=t[7]?Number((t[7]+"00").substr(1,3)):0;let c=Date.UTC(n,i-1,r,o||0,s||0,a||0,l);const d=t[8];if(d&&d!=="Z"){let u=Pi(d,!1);Math.abs(u)<30&&(u*=60),c-=6e4*u}return new Date(c)},stringify:({value:e})=>(e==null?void 0:e.toISOString().replace(/(T00:00:00)?\.000Z$/,""))??""},sr=[mt,gt,bn,wn,Oo,No,$l,Hl,Vl,ql,Bl,zl,Ul,Ai,Le,Ci,Ii,Ei,Fo,Bo,vn],ar=new Map([["core",Ol],["failsafe",[mt,gt,bn]],["json",Fl],["yaml11",sr],["yaml-1.1",sr]]),lr={binary:Ai,bool:vi,float:To,floatExp:Co,floatNaN:Io,floatTime:Bo,int:Do,intHex:Lo,intOct:Po,intTime:Fo,map:mt,merge:Le,null:wn,omap:Ci,pairs:Ii,seq:gt,set:Ei,timestamp:vn},Wl={"tag:yaml.org,2002:binary":Ai,"tag:yaml.org,2002:merge":Le,"tag:yaml.org,2002:omap":Ci,"tag:yaml.org,2002:pairs":Ii,"tag:yaml.org,2002:set":Ei,"tag:yaml.org,2002:timestamp":vn};function Ln(e,t,n){const i=ar.get(t);if(i&&!e)return n&&!i.includes(Le)?i.concat(Le):i.slice();let r=i;if(!r)if(Array.isArray(e))r=[];else{const o=Array.from(ar.keys()).filter(s=>s!=="yaml11").map(s=>JSON.stringify(s)).join(", ");throw new Error(`Unknown schema "${t}"; use one of ${o} or define customTags array`)}if(Array.isArray(e))for(const o of e)r=r.concat(o);else typeof e=="function"&&(r=e(r.slice()));return n&&(r=r.concat(Le)),r.reduce((o,s)=>{const a=typeof s=="string"?lr[s]:s;if(!a){const l=JSON.stringify(s),c=Object.keys(lr).map(d=>JSON.stringify(d)).join(", ");throw new Error(`Unknown custom tag ${l}; use one of ${c}`)}return o.includes(a)||o.push(a),o},[])}const Kl=(e,t)=>e.key<t.key?-1:e.key>t.key?1:0;let Gl=class zo{constructor({compat:t,customTags:n,merge:i,resolveKnownTags:r,schema:o,sortMapEntries:s,toStringDefaults:a}){this.compat=Array.isArray(t)?Ln(t,"compat"):t?Ln(null,t):null,this.name=typeof o=="string"&&o||"core",this.knownTags=r?Wl:{},this.tags=Ln(n,this.name,i),this.toStringOptions=a??null,Object.defineProperty(this,Ne,{value:mt}),Object.defineProperty(this,Ie,{value:bn}),Object.defineProperty(this,ht,{value:gt}),this.sortMapEntries=typeof s=="function"?s:s===!0?Kl:null}clone(){const t=Object.create(zo.prototype,Object.getOwnPropertyDescriptors(this));return t.tags=this.tags.slice(),t}};function Yl(e,t){var l;const n=[];let i=t.directives===!0;if(t.directives!==!1&&e.directives){const c=e.directives.toString(e);c?(n.push(c),i=!0):e.directives.docStart&&(i=!0)}i&&n.push("---");const r=wo(e,t),{commentString:o}=r.options;if(e.commentBefore){n.length!==1&&n.unshift("");const c=o(e.commentBefore);n.unshift(De(c,""))}let s=!1,a=null;if(e.contents){if(X(e.contents)){if(e.contents.spaceBefore&&i&&n.push(""),e.contents.commentBefore){const u=o(e.contents.commentBefore);n.push(De(u,""))}r.forceBlockIndent=!!e.comment,a=e.contents.comment}const c=a?void 0:()=>s=!0;let d=ct(e.contents,r,()=>a=null,c);a&&(d+=He(d,"",o(a))),(d[0]==="|"||d[0]===">")&&n[n.length-1]==="---"?n[n.length-1]=`--- ${d}`:n.push(d)}else n.push(ct(e.contents,r));if((l=e.directives)!=null&&l.docEnd)if(e.comment){const c=o(e.comment);c.includes(`
`)?(n.push("..."),n.push(De(c,""))):n.push(`... ${c}`)}else n.push("...");else{let c=e.comment;c&&s&&(c=c.replace(/^\n+/,"")),c&&((!s||a)&&n[n.length-1]!==""&&n.push(""),n.push(De(o(c),"")))}return n.join(`
`)+`
`}class Sn{constructor(t,n,i){this.commentBefore=null,this.comment=null,this.errors=[],this.warnings=[],Object.defineProperty(this,ye,{value:ei});let r=null;typeof n=="function"||Array.isArray(n)?r=n:i===void 0&&n&&(i=n,n=void 0);const o=Object.assign({intAsBigInt:!1,keepSourceTokens:!1,logLevel:"warn",prettyErrors:!0,strict:!0,stringKeys:!1,uniqueKeys:!0,version:"1.2"},i);this.options=o;let{version:s}=o;i!=null&&i._directives?(this.directives=i._directives.atDocument(),this.directives.yaml.explicit&&(s=this.directives.yaml.version)):this.directives=new re({version:s}),this.setSchema(s,i),this.contents=t===void 0?null:this.createNode(t,r,i)}clone(){const t=Object.create(Sn.prototype,{[ye]:{value:ei}});return t.commentBefore=this.commentBefore,t.comment=this.comment,t.errors=this.errors.slice(),t.warnings=this.warnings.slice(),t.options=Object.assign({},this.options),this.directives&&(t.directives=this.directives.clone()),t.schema=this.schema.clone(),t.contents=X(this.contents)?this.contents.clone(t.schema):this.contents,this.range&&(t.range=this.range.slice()),t}add(t){Ze(this.contents)&&this.contents.add(t)}addIn(t,n){Ze(this.contents)&&this.contents.addIn(t,n)}createAlias(t,n){if(!t.anchor){const i=po(this);t.anchor=!n||i.has(n)?mo(n||"a",i):n}return new wi(t.anchor)}createNode(t,n,i){let r;if(typeof n=="function")t=n.call({"":t},"",t),r=n;else if(Array.isArray(n)){const b=k=>typeof k=="number"||k instanceof String||k instanceof Number,p=n.filter(b).map(String);p.length>0&&(n=n.concat(p)),r=n}else i===void 0&&n&&(i=n,n=void 0);const{aliasDuplicateObjects:o,anchorPrefix:s,flow:a,keepUndefined:l,onTagObj:c,tag:d}=i??{},{onAnchor:u,setAnchors:f,sourceObjects:h}=vl(this,s||"a"),m={aliasDuplicateObjects:o??!0,keepUndefined:l??!1,onAnchor:u,onTagObj:c,replacer:r,schema:this.schema,sourceObjects:h},g=Rt(t,d,m);return a&&Q(g)&&(g.flow=!0),f(),g}createPair(t,n,i={}){const r=this.createNode(t,null,i),o=this.createNode(n,null,i);return new se(r,o)}delete(t){return Ze(this.contents)?this.contents.delete(t):!1}deleteIn(t){return Tt(t)?this.contents==null?!1:(this.contents=null,!0):Ze(this.contents)?this.contents.deleteIn(t):!1}get(t,n){return Q(this.contents)?this.contents.get(t,n):void 0}getIn(t,n){return Tt(t)?!n&&Y(this.contents)?this.contents.value:this.contents:Q(this.contents)?this.contents.getIn(t,n):void 0}has(t){return Q(this.contents)?this.contents.has(t):!1}hasIn(t){return Tt(t)?this.contents!==void 0:Q(this.contents)?this.contents.hasIn(t):!1}set(t,n){this.contents==null?this.contents=an(this.schema,[t],n):Ze(this.contents)&&this.contents.set(t,n)}setIn(t,n){Tt(t)?this.contents=n:this.contents==null?this.contents=an(this.schema,Array.from(t),n):Ze(this.contents)&&this.contents.setIn(t,n)}setSchema(t,n={}){typeof t=="number"&&(t=String(t));let i;switch(t){case"1.1":this.directives?this.directives.yaml.version="1.1":this.directives=new re({version:"1.1"}),i={resolveKnownTags:!1,schema:"yaml-1.1"};break;case"1.2":case"next":this.directives?this.directives.yaml.version=t:this.directives=new re({version:t}),i={resolveKnownTags:!0,schema:"core"};break;case null:this.directives&&delete this.directives,i=null;break;default:{const r=JSON.stringify(t);throw new Error(`Expected '1.1', '1.2' or null as first argument, but found: ${r}`)}}if(n.schema instanceof Object)this.schema=n.schema;else if(i)this.schema=new Gl(Object.assign(i,n));else throw new Error("With a null YAML version, the { schema: Schema } option is required")}toJS({json:t,jsonArg:n,mapAsMap:i,maxAliasCount:r,onAnchor:o,reviver:s}={}){const a={anchors:new Map,doc:this,keep:!t,mapAsMap:i===!0,mapKeyWarned:!1,maxAliasCount:typeof r=="number"?r:100},l=ge(this.contents,n??"",a);if(typeof o=="function")for(const{count:c,res:d}of a.anchors.values())o(d,c);return typeof s=="function"?ot(s,{"":l},"",l):l}toJSON(t,n){return this.toJS({json:!0,jsonArg:t,mapAsMap:!1,onAnchor:n})}toString(t={}){if(this.errors.length>0)throw new Error("Document with errors cannot be stringified");if("indent"in t&&(!Number.isInteger(t.indent)||Number(t.indent)<=0)){const n=JSON.stringify(t.indent);throw new Error(`"indent" option must be a positive integer, not ${n}`)}return Yl(this,t)}}function Ze(e){if(Q(e))return!0;throw new Error("Expected a YAML collection as document contents")}class Uo extends Error{constructor(t,n,i,r){super(),this.name=t,this.code=i,this.message=r,this.pos=n}}class Et extends Uo{constructor(t,n,i){super("YAMLParseError",t,n,i)}}class Jl extends Uo{constructor(t,n,i){super("YAMLWarning",t,n,i)}}const cr=(e,t)=>n=>{if(n.pos[0]===-1)return;n.linePos=n.pos.map(a=>t.linePos(a));const{line:i,col:r}=n.linePos[0];n.message+=` at line ${i}, column ${r}`;let o=r-1,s=e.substring(t.lineStarts[i-1],t.lineStarts[i]).replace(/[\n\r]+$/,"");if(o>=60&&s.length>80){const a=Math.min(o-39,s.length-79);s="…"+s.substring(a),o-=a-1}if(s.length>80&&(s=s.substring(0,79)+"…"),i>1&&/^ *$/.test(s.substring(0,o))){let a=e.substring(t.lineStarts[i-2],t.lineStarts[i-1]);a.length>80&&(a=a.substring(0,79)+`…
`),s=a+s}if(/[^ ]/.test(s)){let a=1;const l=n.linePos[1];(l==null?void 0:l.line)===i&&l.col>r&&(a=Math.max(1,Math.min(l.col-r,80-o)));const c=" ".repeat(o)+"^".repeat(a);n.message+=`:

${s}
${c}
`}};function ut(e,{flow:t,indicator:n,next:i,offset:r,onError:o,parentIndent:s,startOnNewline:a}){let l=!1,c=a,d=a,u="",f="",h=!1,m=!1,g=null,b=null,p=null,k=null,x=null,T=null,I=null;for(const P of e)switch(m&&(P.type!=="space"&&P.type!=="newline"&&P.type!=="comma"&&o(P.offset,"MISSING_CHAR","Tags and anchors must be separated from the next token by white space"),m=!1),g&&(c&&P.type!=="comment"&&P.type!=="newline"&&o(g,"TAB_AS_INDENT","Tabs are not allowed as indentation"),g=null),P.type){case"space":!t&&(n!=="doc-start"||(i==null?void 0:i.type)!=="flow-collection")&&P.source.includes("	")&&(g=P),d=!0;break;case"comment":{d||o(P,"MISSING_CHAR","Comments must be separated from other tokens by white space characters");const O=P.source.substring(1)||" ";u?u+=f+O:u=O,f="",c=!1;break}case"newline":c?u?u+=P.source:(!T||n!=="seq-item-ind")&&(l=!0):f+=P.source,c=!0,h=!0,(b||p)&&(k=P),d=!0;break;case"anchor":b&&o(P,"MULTIPLE_ANCHORS","A node can have at most one anchor"),P.source.endsWith(":")&&o(P.offset+P.source.length-1,"BAD_ALIAS","Anchor ending in : is ambiguous",!0),b=P,I??(I=P.offset),c=!1,d=!1,m=!0;break;case"tag":{p&&o(P,"MULTIPLE_TAGS","A node can have at most one tag"),p=P,I??(I=P.offset),c=!1,d=!1,m=!0;break}case n:(b||p)&&o(P,"BAD_PROP_ORDER",`Anchors and tags must be after the ${P.source} indicator`),T&&o(P,"UNEXPECTED_TOKEN",`Unexpected ${P.source} in ${t??"collection"}`),T=P,c=n==="seq-item-ind"||n==="explicit-key-ind",d=!1;break;case"comma":if(t){x&&o(P,"UNEXPECTED_TOKEN",`Unexpected , in ${t}`),x=P,c=!1,d=!1;break}default:o(P,"UNEXPECTED_TOKEN",`Unexpected ${P.type} token`),c=!1,d=!1}const v=e[e.length-1],E=v?v.offset+v.source.length:r;return m&&i&&i.type!=="space"&&i.type!=="newline"&&i.type!=="comma"&&(i.type!=="scalar"||i.source!=="")&&o(i.offset,"MISSING_CHAR","Tags and anchors must be separated from the next token by white space"),g&&(c&&g.indent<=s||(i==null?void 0:i.type)==="block-map"||(i==null?void 0:i.type)==="block-seq")&&o(g,"TAB_AS_INDENT","Tabs are not allowed as indentation"),{comma:x,found:T,spaceBefore:l,comment:u,hasNewline:h,anchor:b,tag:p,newlineAfterProp:k,end:E,start:I??E}}function Ot(e){if(!e)return null;switch(e.type){case"alias":case"scalar":case"double-quoted-scalar":case"single-quoted-scalar":if(e.source.includes(`
`))return!0;if(e.end){for(const t of e.end)if(t.type==="newline")return!0}return!1;case"flow-collection":for(const t of e.items){for(const n of t.start)if(n.type==="newline")return!0;if(t.sep){for(const n of t.sep)if(n.type==="newline")return!0}if(Ot(t.key)||Ot(t.value))return!0}return!1;default:return!0}}function ri(e,t,n){if((t==null?void 0:t.type)==="flow-collection"){const i=t.end[0];i.indent===e&&(i.source==="]"||i.source==="}")&&Ot(t)&&n(i,"BAD_INDENT","Flow end indicator should be more indented than parent",!0)}}function $o(e,t,n){const{uniqueKeys:i}=e.options;if(i===!1)return!1;const r=typeof i=="function"?i:(o,s)=>o===s||Y(o)&&Y(s)&&o.value===s.value;return t.some(o=>r(o.key,n))}const ur="All mapping items must start at the same column";function Ql({composeNode:e,composeEmptyNode:t},n,i,r,o){var d;const s=(o==null?void 0:o.nodeClass)??me,a=new s(n.schema);n.atRoot&&(n.atRoot=!1);let l=i.offset,c=null;for(const u of i.items){const{start:f,key:h,sep:m,value:g}=u,b=ut(f,{indicator:"explicit-key-ind",next:h??(m==null?void 0:m[0]),offset:l,onError:r,parentIndent:i.indent,startOnNewline:!0}),p=!b.found;if(p){if(h&&(h.type==="block-seq"?r(l,"BLOCK_AS_IMPLICIT_KEY","A block sequence may not be used as an implicit map key"):"indent"in h&&h.indent!==i.indent&&r(l,"BAD_INDENT",ur)),!b.anchor&&!b.tag&&!m){c=b.end,b.comment&&(a.comment?a.comment+=`
`+b.comment:a.comment=b.comment);continue}(b.newlineAfterProp||Ot(h))&&r(h??f[f.length-1],"MULTILINE_IMPLICIT_KEY","Implicit keys need to be on a single line")}else((d=b.found)==null?void 0:d.indent)!==i.indent&&r(l,"BAD_INDENT",ur);n.atKey=!0;const k=b.end,x=h?e(n,h,b,r):t(n,k,f,null,b,r);n.schema.compat&&ri(i.indent,h,r),n.atKey=!1,$o(n,a.items,x)&&r(k,"DUPLICATE_KEY","Map keys must be unique");const T=ut(m??[],{indicator:"map-value-ind",next:g,offset:x.range[2],onError:r,parentIndent:i.indent,startOnNewline:!h||h.type==="block-scalar"});if(l=T.end,T.found){p&&((g==null?void 0:g.type)==="block-map"&&!T.hasNewline&&r(l,"BLOCK_AS_IMPLICIT_KEY","Nested mappings are not allowed in compact mappings"),n.options.strict&&b.start<T.found.offset-1024&&r(x.range,"KEY_OVER_1024_CHARS","The : indicator must be at most 1024 chars after the start of an implicit block mapping key"));const I=g?e(n,g,T,r):t(n,l,m,null,T,r);n.schema.compat&&ri(i.indent,g,r),l=I.range[2];const v=new se(x,I);n.options.keepSourceTokens&&(v.srcToken=u),a.items.push(v)}else{p&&r(x.range,"MISSING_CHAR","Implicit map keys need to be followed by map values"),T.comment&&(x.comment?x.comment+=`
`+T.comment:x.comment=T.comment);const I=new se(x);n.options.keepSourceTokens&&(I.srcToken=u),a.items.push(I)}}return c&&c<l&&r(c,"IMPOSSIBLE","Map comment with trailing content"),a.range=[i.offset,l,c??l],a}function Xl({composeNode:e,composeEmptyNode:t},n,i,r,o){const s=(o==null?void 0:o.nodeClass)??We,a=new s(n.schema);n.atRoot&&(n.atRoot=!1),n.atKey&&(n.atKey=!1);let l=i.offset,c=null;for(const{start:d,value:u}of i.items){const f=ut(d,{indicator:"seq-item-ind",next:u,offset:l,onError:r,parentIndent:i.indent,startOnNewline:!0});if(!f.found)if(f.anchor||f.tag||u)(u==null?void 0:u.type)==="block-seq"?r(f.end,"BAD_INDENT","All sequence items must start at the same column"):r(l,"MISSING_CHAR","Sequence item without - indicator");else{c=f.end,f.comment&&(a.comment=f.comment);continue}const h=u?e(n,u,f,r):t(n,f.end,d,null,f,r);n.schema.compat&&ri(i.indent,u,r),l=h.range[2],a.items.push(h)}return a.range=[i.offset,l,c??l],a}function Ut(e,t,n,i){let r="";if(e){let o=!1,s="";for(const a of e){const{source:l,type:c}=a;switch(c){case"space":o=!0;break;case"comment":{n&&!o&&i(a,"MISSING_CHAR","Comments must be separated from other tokens by white space characters");const d=l.substring(1)||" ";r?r+=s+d:r=d,s="";break}case"newline":r&&(s+=l),o=!0;break;default:i(a,"UNEXPECTED_TOKEN",`Unexpected ${c} at node end`)}t+=l.length}}return{comment:r,offset:t}}const _n="Block collections are not allowed within flow collections",Mn=e=>e&&(e.type==="block-map"||e.type==="block-seq");function Zl({composeNode:e,composeEmptyNode:t},n,i,r,o){var b;const s=i.start.source==="{",a=s?"flow map":"flow sequence",l=(o==null?void 0:o.nodeClass)??(s?me:We),c=new l(n.schema);c.flow=!0;const d=n.atRoot;d&&(n.atRoot=!1),n.atKey&&(n.atKey=!1);let u=i.offset+i.start.source.length;for(let p=0;p<i.items.length;++p){const k=i.items[p],{start:x,key:T,sep:I,value:v}=k,E=ut(x,{flow:a,indicator:"explicit-key-ind",next:T??(I==null?void 0:I[0]),offset:u,onError:r,parentIndent:i.indent,startOnNewline:!1});if(!E.found){if(!E.anchor&&!E.tag&&!I&&!v){p===0&&E.comma?r(E.comma,"UNEXPECTED_TOKEN",`Unexpected , in ${a}`):p<i.items.length-1&&r(E.start,"UNEXPECTED_TOKEN",`Unexpected empty item in ${a}`),E.comment&&(c.comment?c.comment+=`
`+E.comment:c.comment=E.comment),u=E.end;continue}!s&&n.options.strict&&Ot(T)&&r(T,"MULTILINE_IMPLICIT_KEY","Implicit keys of flow sequence pairs need to be on a single line")}if(p===0)E.comma&&r(E.comma,"UNEXPECTED_TOKEN",`Unexpected , in ${a}`);else if(E.comma||r(E.start,"MISSING_CHAR",`Missing , between ${a} items`),E.comment){let P="";e:for(const O of x)switch(O.type){case"comma":case"space":break;case"comment":P=O.source.substring(1);break e;default:break e}if(P){let O=c.items[c.items.length-1];Z(O)&&(O=O.value??O.key),O.comment?O.comment+=`
`+P:O.comment=P,E.comment=E.comment.substring(P.length+1)}}if(!s&&!I&&!E.found){const P=v?e(n,v,E,r):t(n,E.end,I,null,E,r);c.items.push(P),u=P.range[2],Mn(v)&&r(P.range,"BLOCK_IN_FLOW",_n)}else{n.atKey=!0;const P=E.end,O=T?e(n,T,E,r):t(n,P,x,null,E,r);Mn(T)&&r(O.range,"BLOCK_IN_FLOW",_n),n.atKey=!1;const S=ut(I??[],{flow:a,indicator:"map-value-ind",next:v,offset:O.range[2],onError:r,parentIndent:i.indent,startOnNewline:!1});if(S.found){if(!s&&!E.found&&n.options.strict){if(I)for(const F of I){if(F===S.found)break;if(F.type==="newline"){r(F,"MULTILINE_IMPLICIT_KEY","Implicit keys of flow sequence pairs need to be on a single line");break}}E.start<S.found.offset-1024&&r(S.found,"KEY_OVER_1024_CHARS","The : indicator must be at most 1024 chars after the start of an implicit flow sequence key")}}else v&&("source"in v&&((b=v.source)==null?void 0:b[0])===":"?r(v,"MISSING_CHAR",`Missing space after : in ${a}`):r(S.start,"MISSING_CHAR",`Missing , or : between ${a} items`));const M=v?e(n,v,S,r):S.found?t(n,S.end,I,null,S,r):null;M?Mn(v)&&r(M.range,"BLOCK_IN_FLOW",_n):S.comment&&(O.comment?O.comment+=`
`+S.comment:O.comment=S.comment);const _=new se(O,M);if(n.options.keepSourceTokens&&(_.srcToken=k),s){const F=c;$o(n,F.items,O)&&r(P,"DUPLICATE_KEY","Map keys must be unique"),F.items.push(_)}else{const F=new me(n.schema);F.flow=!0,F.items.push(_);const N=(M??O).range;F.range=[O.range[0],N[1],N[2]],c.items.push(F)}u=M?M.range[2]:S.end}}const f=s?"}":"]",[h,...m]=i.end;let g=u;if((h==null?void 0:h.source)===f)g=h.offset+h.source.length;else{const p=a[0].toUpperCase()+a.substring(1),k=d?`${p} must end with a ${f}`:`${p} in block collection must be sufficiently indented and end with a ${f}`;r(u,d?"MISSING_CHAR":"BAD_INDENT",k),h&&h.source.length!==1&&m.unshift(h)}if(m.length>0){const p=Ut(m,g,n.options.strict,r);p.comment&&(c.comment?c.comment+=`
`+p.comment:c.comment=p.comment),c.range=[i.offset,g,p.offset]}else c.range=[i.offset,g,g];return c}function Rn(e,t,n,i,r,o){const s=n.type==="block-map"?Ql(e,t,n,i,o):n.type==="block-seq"?Xl(e,t,n,i,o):Zl(e,t,n,i,o),a=s.constructor;return r==="!"||r===a.tagName?(s.tag=a.tagName,s):(r&&(s.tag=r),s)}function ec(e,t,n,i,r){var f;const o=i.tag,s=o?t.directives.tagName(o.source,h=>r(o,"TAG_RESOLVE_FAILED",h)):null;if(n.type==="block-seq"){const{anchor:h,newlineAfterProp:m}=i,g=h&&o?h.offset>o.offset?h:o:h??o;g&&(!m||m.offset<g.offset)&&r(g,"MISSING_CHAR","Missing newline after block sequence props")}const a=n.type==="block-map"?"map":n.type==="block-seq"?"seq":n.start.source==="{"?"map":"seq";if(!o||!s||s==="!"||s===me.tagName&&a==="map"||s===We.tagName&&a==="seq")return Rn(e,t,n,r,s);let l=t.schema.tags.find(h=>h.tag===s&&h.collection===a);if(!l){const h=t.schema.knownTags[s];if((h==null?void 0:h.collection)===a)t.schema.tags.push(Object.assign({},h,{default:!1})),l=h;else return h?r(o,"BAD_COLLECTION_TYPE",`${h.tag} used for ${a} collection, but expects ${h.collection??"scalar"}`,!0):r(o,"TAG_RESOLVE_FAILED",`Unresolved tag: ${s}`,!0),Rn(e,t,n,r,s)}const c=Rn(e,t,n,r,s,l),d=((f=l.resolve)==null?void 0:f.call(l,c,h=>r(o,"TAG_RESOLVE_FAILED",h),t.options))??c,u=X(d)?d:new U(d);return u.range=c.range,u.tag=s,l!=null&&l.format&&(u.format=l.format),u}function tc(e,t,n){const i=t.offset,r=nc(t,e.options.strict,n);if(!r)return{value:"",type:null,comment:"",range:[i,i,i]};const o=r.mode===">"?U.BLOCK_FOLDED:U.BLOCK_LITERAL,s=t.source?ic(t.source):[];let a=s.length;for(let g=s.length-1;g>=0;--g){const b=s[g][1];if(b===""||b==="\r")a=g;else break}if(a===0){const g=r.chomp==="+"&&s.length>0?`
`.repeat(Math.max(1,s.length-1)):"";let b=i+r.length;return t.source&&(b+=t.source.length),{value:g,type:o,comment:r.comment,range:[i,b,b]}}let l=t.indent+r.indent,c=t.offset+r.length,d=0;for(let g=0;g<a;++g){const[b,p]=s[g];if(p===""||p==="\r")r.indent===0&&b.length>l&&(l=b.length);else{b.length<l&&n(c+b.length,"MISSING_CHAR","Block scalars with more-indented leading empty lines must use an explicit indentation indicator"),r.indent===0&&(l=b.length),d=g,l===0&&!e.atRoot&&n(c,"BAD_INDENT","Block scalar values in collections must be indented");break}c+=b.length+p.length+1}for(let g=s.length-1;g>=a;--g)s[g][0].length>l&&(a=g+1);let u="",f="",h=!1;for(let g=0;g<d;++g)u+=s[g][0].slice(l)+`
`;for(let g=d;g<a;++g){let[b,p]=s[g];c+=b.length+p.length+1;const k=p[p.length-1]==="\r";if(k&&(p=p.slice(0,-1)),p&&b.length<l){const T=`Block scalar lines must not be less indented than their ${r.indent?"explicit indentation indicator":"first line"}`;n(c-p.length-(k?2:1),"BAD_INDENT",T),b=""}o===U.BLOCK_LITERAL?(u+=f+b.slice(l)+p,f=`
`):b.length>l||p[0]==="	"?(f===" "?f=`
`:!h&&f===`
`&&(f=`

`),u+=f+b.slice(l)+p,f=`
`,h=!0):p===""?f===`
`?u+=`
`:f=`
`:(u+=f+p,f=" ",h=!1)}switch(r.chomp){case"-":break;case"+":for(let g=a;g<s.length;++g)u+=`
`+s[g][0].slice(l);u[u.length-1]!==`
`&&(u+=`
`);break;default:u+=`
`}const m=i+r.length+t.source.length;return{value:u,type:o,comment:r.comment,range:[i,m,m]}}function nc({offset:e,props:t},n,i){if(t[0].type!=="block-scalar-header")return i(t[0],"IMPOSSIBLE","Block scalar header not found"),null;const{source:r}=t[0],o=r[0];let s=0,a="",l=-1;for(let f=1;f<r.length;++f){const h=r[f];if(!a&&(h==="-"||h==="+"))a=h;else{const m=Number(h);!s&&m?s=m:l===-1&&(l=e+f)}}l!==-1&&i(l,"UNEXPECTED_TOKEN",`Block scalar header includes extra characters: ${r}`);let c=!1,d="",u=r.length;for(let f=1;f<t.length;++f){const h=t[f];switch(h.type){case"space":c=!0;case"newline":u+=h.source.length;break;case"comment":n&&!c&&i(h,"MISSING_CHAR","Comments must be separated from other tokens by white space characters"),u+=h.source.length,d=h.source.substring(1);break;case"error":i(h,"UNEXPECTED_TOKEN",h.message),u+=h.source.length;break;default:{const m=`Unexpected token in block scalar header: ${h.type}`;i(h,"UNEXPECTED_TOKEN",m);const g=h.source;g&&typeof g=="string"&&(u+=g.length)}}}return{mode:o,indent:s,chomp:a,comment:d,length:u}}function ic(e){const t=e.split(/\n( *)/),n=t[0],i=n.match(/^( *)/),o=[i!=null&&i[1]?[i[1],n.slice(i[1].length)]:["",n]];for(let s=1;s<t.length;s+=2)o.push([t[s],t[s+1]]);return o}function rc(e,t,n){const{offset:i,type:r,source:o,end:s}=e;let a,l;const c=(f,h,m)=>n(i+f,h,m);switch(r){case"scalar":a=U.PLAIN,l=oc(o,c);break;case"single-quoted-scalar":a=U.QUOTE_SINGLE,l=sc(o,c);break;case"double-quoted-scalar":a=U.QUOTE_DOUBLE,l=ac(o,c);break;default:return n(e,"UNEXPECTED_TOKEN",`Expected a flow scalar value, but found: ${r}`),{value:"",type:null,comment:"",range:[i,i+o.length,i+o.length]}}const d=i+o.length,u=Ut(s,d,t,n);return{value:l,type:a,comment:u.comment,range:[i,d,u.offset]}}function oc(e,t){let n="";switch(e[0]){case"	":n="a tab character";break;case",":n="flow indicator character ,";break;case"%":n="directive indicator character %";break;case"|":case">":{n=`block scalar indicator ${e[0]}`;break}case"@":case"`":{n=`reserved character ${e[0]}`;break}}return n&&t(0,"BAD_SCALAR_START",`Plain value cannot start with ${n}`),Ho(e)}function sc(e,t){return(e[e.length-1]!=="'"||e.length===1)&&t(e.length,"MISSING_CHAR","Missing closing 'quote"),Ho(e.slice(1,-1)).replace(/''/g,"'")}function Ho(e){let t,n;try{t=new RegExp(`(.*?)(?<![ 	])[ 	]*\r?
`,"sy"),n=new RegExp(`[ 	]*(.*?)(?:(?<![ 	])[ 	]*)?\r?
`,"sy")}catch{t=/(.*?)[ \t]*\r?\n/sy,n=/[ \t]*(.*?)[ \t]*\r?\n/sy}let i=t.exec(e);if(!i)return e;let r=i[1],o=" ",s=t.lastIndex;for(n.lastIndex=s;i=n.exec(e);)i[1]===""?o===`
`?r+=o:o=`
`:(r+=o+i[1],o=" "),s=n.lastIndex;const a=/[ \t]*(.*)/sy;return a.lastIndex=s,i=a.exec(e),r+o+((i==null?void 0:i[1])??"")}function ac(e,t){let n="";for(let i=1;i<e.length-1;++i){const r=e[i];if(!(r==="\r"&&e[i+1]===`
`))if(r===`
`){const{fold:o,offset:s}=lc(e,i);n+=o,i=s}else if(r==="\\"){let o=e[++i];const s=cc[o];if(s)n+=s;else if(o===`
`)for(o=e[i+1];o===" "||o==="	";)o=e[++i+1];else if(o==="\r"&&e[i+1]===`
`)for(o=e[++i+1];o===" "||o==="	";)o=e[++i+1];else if(o==="x"||o==="u"||o==="U"){const a=o==="x"?2:o==="u"?4:8;n+=uc(e,i+1,a,t),i+=a}else{const a=e.substr(i-1,2);t(i-1,"BAD_DQ_ESCAPE",`Invalid escape sequence ${a}`),n+=a}}else if(r===" "||r==="	"){const o=i;let s=e[i+1];for(;s===" "||s==="	";)s=e[++i+1];s!==`
`&&!(s==="\r"&&e[i+2]===`
`)&&(n+=i>o?e.slice(o,i+1):r)}else n+=r}return(e[e.length-1]!=='"'||e.length===1)&&t(e.length,"MISSING_CHAR",'Missing closing "quote'),n}function lc(e,t){let n="",i=e[t+1];for(;(i===" "||i==="	"||i===`
`||i==="\r")&&!(i==="\r"&&e[t+2]!==`
`);)i===`
`&&(n+=`
`),t+=1,i=e[t+1];return n||(n=" "),{fold:n,offset:t}}const cc={0:"\0",a:"\x07",b:"\b",e:"\x1B",f:"\f",n:`
`,r:"\r",t:"	",v:"\v",N:"",_:" ",L:"\u2028",P:"\u2029"," ":" ",'"':'"',"/":"/","\\":"\\","	":"	"};function uc(e,t,n,i){const r=e.substr(t,n),s=r.length===n&&/^[0-9a-fA-F]+$/.test(r)?parseInt(r,16):NaN;try{return String.fromCodePoint(s)}catch{const a=e.substr(t-2,n+2);return i(t-2,"BAD_DQ_ESCAPE",`Invalid escape sequence ${a}`),a}}function Vo(e,t,n,i){const{value:r,type:o,comment:s,range:a}=t.type==="block-scalar"?tc(e,t,i):rc(t,e.options.strict,i),l=n?e.directives.tagName(n.source,u=>i(n,"TAG_RESOLVE_FAILED",u)):null;let c;e.options.stringKeys&&e.atKey?c=e.schema[Ie]:l?c=dc(e.schema,r,l,n,i):t.type==="scalar"?c=hc(e,r,t,i):c=e.schema[Ie];let d;try{const u=c.resolve(r,f=>i(n??t,"TAG_RESOLVE_FAILED",f),e.options);d=Y(u)?u:new U(u)}catch(u){const f=u instanceof Error?u.message:String(u);i(n??t,"TAG_RESOLVE_FAILED",f),d=new U(r)}return d.range=a,d.source=r,o&&(d.type=o),l&&(d.tag=l),c.format&&(d.format=c.format),s&&(d.comment=s),d}function dc(e,t,n,i,r){var a;if(n==="!")return e[Ie];const o=[];for(const l of e.tags)if(!l.collection&&l.tag===n)if(l.default&&l.test)o.push(l);else return l;for(const l of o)if((a=l.test)!=null&&a.test(t))return l;const s=e.knownTags[n];return s&&!s.collection?(e.tags.push(Object.assign({},s,{default:!1,test:void 0})),s):(r(i,"TAG_RESOLVE_FAILED",`Unresolved tag: ${n}`,n!=="tag:yaml.org,2002:str"),e[Ie])}function hc({atKey:e,directives:t,schema:n},i,r,o){const s=n.tags.find(a=>{var l;return(a.default===!0||e&&a.default==="key")&&((l=a.test)==null?void 0:l.test(i))})||n[Ie];if(n.compat){const a=n.compat.find(l=>{var c;return l.default&&((c=l.test)==null?void 0:c.test(i))})??n[Ie];if(s.tag!==a.tag){const l=t.tagString(s.tag),c=t.tagString(a.tag),d=`Value may be parsed as either ${l} or ${c}`;o(r,"TAG_RESOLVE_FAILED",d,!0)}}return s}function fc(e,t,n){if(t){n??(n=t.length);for(let i=n-1;i>=0;--i){let r=t[i];switch(r.type){case"space":case"comment":case"newline":e-=r.source.length;continue}for(r=t[++i];(r==null?void 0:r.type)==="space";)e+=r.source.length,r=t[++i];break}}return e}const pc={composeNode:qo,composeEmptyNode:Di};function qo(e,t,n,i){const r=e.atKey,{spaceBefore:o,comment:s,anchor:a,tag:l}=n;let c,d=!0;switch(t.type){case"alias":c=mc(e,t,i),(a||l)&&i(t,"ALIAS_PROPS","An alias node must not specify any properties");break;case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":case"block-scalar":c=Vo(e,t,l,i),a&&(c.anchor=a.source.substring(1));break;case"block-map":case"block-seq":case"flow-collection":try{c=ec(pc,e,t,n,i),a&&(c.anchor=a.source.substring(1))}catch(u){const f=u instanceof Error?u.message:String(u);i(t,"RESOURCE_EXHAUSTION",f)}break;default:{const u=t.type==="error"?t.message:`Unsupported token (type: ${t.type})`;i(t,"UNEXPECTED_TOKEN",u),d=!1}}return c??(c=Di(e,t.offset,void 0,null,n,i)),a&&c.anchor===""&&i(a,"BAD_ALIAS","Anchor cannot be an empty string"),r&&e.options.stringKeys&&(!Y(c)||typeof c.value!="string"||c.tag&&c.tag!=="tag:yaml.org,2002:str")&&i(l??t,"NON_STRING_KEY","With stringKeys, all keys must be strings"),o&&(c.spaceBefore=!0),s&&(t.type==="scalar"&&t.source===""?c.comment=s:c.commentBefore=s),e.options.keepSourceTokens&&d&&(c.srcToken=t),c}function Di(e,t,n,i,{spaceBefore:r,comment:o,anchor:s,tag:a,end:l},c){const d={type:"scalar",offset:fc(t,n,i),indent:-1,source:""},u=Vo(e,d,a,c);return s&&(u.anchor=s.source.substring(1),u.anchor===""&&c(s,"BAD_ALIAS","Anchor cannot be an empty string")),r&&(u.spaceBefore=!0),o&&(u.comment=o,u.range[2]=l),u}function mc({options:e},{offset:t,source:n,end:i},r){const o=new wi(n.substring(1));o.source===""&&r(t,"BAD_ALIAS","Alias cannot be an empty string"),o.source.endsWith(":")&&r(t+n.length-1,"BAD_ALIAS","Alias ending in : is ambiguous",!0);const s=t+n.length,a=Ut(i,s,e.strict,r);return o.range=[t,s,a.offset],a.comment&&(o.comment=a.comment),o}function gc(e,t,{offset:n,start:i,value:r,end:o},s){const a=Object.assign({_directives:t},e),l=new Sn(void 0,a),c={atKey:!1,atRoot:!0,directives:l.directives,options:l.options,schema:l.schema},d=ut(i,{indicator:"doc-start",next:r??(o==null?void 0:o[0]),offset:n,onError:s,parentIndent:0,startOnNewline:!0});d.found&&(l.directives.docStart=!0,r&&(r.type==="block-map"||r.type==="block-seq")&&!d.hasNewline&&s(d.end,"MISSING_CHAR","Block collection cannot start on same line with directives-end marker")),l.contents=r?qo(c,r,d,s):Di(c,d.end,i,null,d,s);const u=l.contents.range[2],f=Ut(o,u,!1,s);return f.comment&&(l.comment=f.comment),l.range=[n,u,f.offset],l}function vt(e){if(typeof e=="number")return[e,e+1];if(Array.isArray(e))return e.length===2?e:[e[0],e[1]];const{offset:t,source:n}=e;return[t,t+(typeof n=="string"?n.length:1)]}function dr(e){var r;let t="",n=!1,i=!1;for(let o=0;o<e.length;++o){const s=e[o];switch(s[0]){case"#":t+=(t===""?"":i?`

`:`
`)+(s.substring(1)||" "),n=!0,i=!1;break;case"%":((r=e[o+1])==null?void 0:r[0])!=="#"&&(o+=1),n=!1;break;default:n||(i=!0),n=!1}}return{comment:t,afterEmptyLine:i}}class yc{constructor(t={}){this.doc=null,this.atDirectives=!1,this.prelude=[],this.errors=[],this.warnings=[],this.onError=(n,i,r,o)=>{const s=vt(n);o?this.warnings.push(new Jl(s,i,r)):this.errors.push(new Et(s,i,r))},this.directives=new re({version:t.version||"1.2"}),this.options=t}decorate(t,n){const{comment:i,afterEmptyLine:r}=dr(this.prelude);if(i){const o=t.contents;if(n)t.comment=t.comment?`${t.comment}
${i}`:i;else if(r||t.directives.docStart||!o)t.commentBefore=i;else if(Q(o)&&!o.flow&&o.items.length>0){let s=o.items[0];Z(s)&&(s=s.key);const a=s.commentBefore;s.commentBefore=a?`${i}
${a}`:i}else{const s=o.commentBefore;o.commentBefore=s?`${i}
${s}`:i}}if(n){for(let o=0;o<this.errors.length;++o)t.errors.push(this.errors[o]);for(let o=0;o<this.warnings.length;++o)t.warnings.push(this.warnings[o])}else t.errors=this.errors,t.warnings=this.warnings;this.prelude=[],this.errors=[],this.warnings=[]}streamInfo(){return{comment:dr(this.prelude).comment,directives:this.directives,errors:this.errors,warnings:this.warnings}}*compose(t,n=!1,i=-1){for(const r of t)yield*this.next(r);yield*this.end(n,i)}*next(t){switch(t.type){case"directive":this.directives.add(t.source,(n,i,r)=>{const o=vt(t);o[0]+=n,this.onError(o,"BAD_DIRECTIVE",i,r)}),this.prelude.push(t.source),this.atDirectives=!0;break;case"document":{const n=gc(this.options,this.directives,t,this.onError);this.atDirectives&&!n.directives.docStart&&this.onError(t,"MISSING_CHAR","Missing directives-end/doc-start indicator line"),this.decorate(n,!1),this.doc&&(yield this.doc),this.doc=n,this.atDirectives=!1;break}case"byte-order-mark":case"space":break;case"comment":case"newline":this.prelude.push(t.source);break;case"error":{const n=t.source?`${t.message}: ${JSON.stringify(t.source)}`:t.message,i=new Et(vt(t),"UNEXPECTED_TOKEN",n);this.atDirectives||!this.doc?this.errors.push(i):this.doc.errors.push(i);break}case"doc-end":{if(!this.doc){const i="Unexpected doc-end without preceding document";this.errors.push(new Et(vt(t),"UNEXPECTED_TOKEN",i));break}this.doc.directives.docEnd=!0;const n=Ut(t.end,t.offset+t.source.length,this.doc.options.strict,this.onError);if(this.decorate(this.doc,!0),n.comment){const i=this.doc.comment;this.doc.comment=i?`${i}
${n.comment}`:n.comment}this.doc.range[2]=n.offset;break}default:this.errors.push(new Et(vt(t),"UNEXPECTED_TOKEN",`Unsupported token ${t.type}`))}}*end(t=!1,n=-1){if(this.doc)this.decorate(this.doc,!0),yield this.doc,this.doc=null;else if(t){const i=Object.assign({_directives:this.directives},this.options),r=new Sn(void 0,i);this.atDirectives&&this.onError(n,"MISSING_CHAR","Missing directives-end indicator line"),r.range=[0,n,n],this.decorate(r,!1),yield r}}}const Wo="\uFEFF",Ko="",Go="",oi="";function bc(e){switch(e){case Wo:return"byte-order-mark";case Ko:return"doc-mode";case Go:return"flow-error-end";case oi:return"scalar";case"---":return"doc-start";case"...":return"doc-end";case"":case`
`:case`\r
`:return"newline";case"-":return"seq-item-ind";case"?":return"explicit-key-ind";case":":return"map-value-ind";case"{":return"flow-map-start";case"}":return"flow-map-end";case"[":return"flow-seq-start";case"]":return"flow-seq-end";case",":return"comma"}switch(e[0]){case" ":case"	":return"space";case"#":return"comment";case"%":return"directive-line";case"*":return"alias";case"&":return"anchor";case"!":return"tag";case"'":return"single-quoted-scalar";case'"':return"double-quoted-scalar";case"|":case">":return"block-scalar-header"}return null}function xe(e){switch(e){case void 0:case" ":case`
`:case"\r":case"	":return!0;default:return!1}}const hr=new Set("0123456789ABCDEFabcdef"),wc=new Set("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-#;/?:@&=+$_.!~*'()"),Yt=new Set(",[]{}"),kc=new Set(` ,[]{}
\r	`),On=e=>!e||kc.has(e);class xc{constructor(){this.atEnd=!1,this.blockScalarIndent=-1,this.blockScalarKeep=!1,this.buffer="",this.flowKey=!1,this.flowLevel=0,this.indentNext=0,this.indentValue=0,this.lineEndPos=null,this.next=null,this.pos=0}*lex(t,n=!1){if(t){if(typeof t!="string")throw TypeError("source is not a string");this.buffer=this.buffer?this.buffer+t:t,this.lineEndPos=null}this.atEnd=!n;let i=this.next??"stream";for(;i&&(n||this.hasChars(1));)i=yield*this.parseNext(i)}atLineEnd(){let t=this.pos,n=this.buffer[t];for(;n===" "||n==="	";)n=this.buffer[++t];return!n||n==="#"||n===`
`?!0:n==="\r"?this.buffer[t+1]===`
`:!1}charAt(t){return this.buffer[this.pos+t]}continueScalar(t){let n=this.buffer[t];if(this.indentNext>0){let i=0;for(;n===" ";)n=this.buffer[++i+t];if(n==="\r"){const r=this.buffer[i+t+1];if(r===`
`||!r&&!this.atEnd)return t+i+1}return n===`
`||i>=this.indentNext||!n&&!this.atEnd?t+i:-1}if(n==="-"||n==="."){const i=this.buffer.substr(t,3);if((i==="---"||i==="...")&&xe(this.buffer[t+3]))return-1}return t}getLine(){let t=this.lineEndPos;return(typeof t!="number"||t!==-1&&t<this.pos)&&(t=this.buffer.indexOf(`
`,this.pos),this.lineEndPos=t),t===-1?this.atEnd?this.buffer.substring(this.pos):null:(this.buffer[t-1]==="\r"&&(t-=1),this.buffer.substring(this.pos,t))}hasChars(t){return this.pos+t<=this.buffer.length}setNext(t){return this.buffer=this.buffer.substring(this.pos),this.pos=0,this.lineEndPos=null,this.next=t,null}peek(t){return this.buffer.substr(this.pos,t)}*parseNext(t){switch(t){case"stream":return yield*this.parseStream();case"line-start":return yield*this.parseLineStart();case"block-start":return yield*this.parseBlockStart();case"doc":return yield*this.parseDocument();case"flow":return yield*this.parseFlowCollection();case"quoted-scalar":return yield*this.parseQuotedScalar();case"block-scalar":return yield*this.parseBlockScalar();case"plain-scalar":return yield*this.parsePlainScalar()}}*parseStream(){let t=this.getLine();if(t===null)return this.setNext("stream");if(t[0]===Wo&&(yield*this.pushCount(1),t=t.substring(1)),t[0]==="%"){let n=t.length,i=t.indexOf("#");for(;i!==-1;){const o=t[i-1];if(o===" "||o==="	"){n=i-1;break}else i=t.indexOf("#",i+1)}for(;;){const o=t[n-1];if(o===" "||o==="	")n-=1;else break}const r=(yield*this.pushCount(n))+(yield*this.pushSpaces(!0));return yield*this.pushCount(t.length-r),this.pushNewline(),"stream"}if(this.atLineEnd()){const n=yield*this.pushSpaces(!0);return yield*this.pushCount(t.length-n),yield*this.pushNewline(),"stream"}return yield Ko,yield*this.parseLineStart()}*parseLineStart(){const t=this.charAt(0);if(!t&&!this.atEnd)return this.setNext("line-start");if(t==="-"||t==="."){if(!this.atEnd&&!this.hasChars(4))return this.setNext("line-start");const n=this.peek(3);if((n==="---"||n==="...")&&xe(this.charAt(3)))return yield*this.pushCount(3),this.indentValue=0,this.indentNext=0,n==="---"?"doc":"stream"}return this.indentValue=yield*this.pushSpaces(!1),this.indentNext>this.indentValue&&!xe(this.charAt(1))&&(this.indentNext=this.indentValue),yield*this.parseBlockStart()}*parseBlockStart(){const[t,n]=this.peek(2);if(!n&&!this.atEnd)return this.setNext("block-start");if((t==="-"||t==="?"||t===":")&&xe(n)){const i=(yield*this.pushCount(1))+(yield*this.pushSpaces(!0));return this.indentNext=this.indentValue+1,this.indentValue+=i,"block-start"}return"doc"}*parseDocument(){yield*this.pushSpaces(!0);const t=this.getLine();if(t===null)return this.setNext("doc");let n=yield*this.pushIndicators();switch(t[n]){case"#":yield*this.pushCount(t.length-n);case void 0:return yield*this.pushNewline(),yield*this.parseLineStart();case"{":case"[":return yield*this.pushCount(1),this.flowKey=!1,this.flowLevel=1,"flow";case"}":case"]":return yield*this.pushCount(1),"doc";case"*":return yield*this.pushUntil(On),"doc";case'"':case"'":return yield*this.parseQuotedScalar();case"|":case">":return n+=yield*this.parseBlockScalarHeader(),n+=yield*this.pushSpaces(!0),yield*this.pushCount(t.length-n),yield*this.pushNewline(),yield*this.parseBlockScalar();default:return yield*this.parsePlainScalar()}}*parseFlowCollection(){let t,n,i=-1;do t=yield*this.pushNewline(),t>0?(n=yield*this.pushSpaces(!1),this.indentValue=i=n):n=0,n+=yield*this.pushSpaces(!0);while(t+n>0);const r=this.getLine();if(r===null)return this.setNext("flow");if((i!==-1&&i<this.indentNext&&r[0]!=="#"||i===0&&(r.startsWith("---")||r.startsWith("..."))&&xe(r[3]))&&!(i===this.indentNext-1&&this.flowLevel===1&&(r[0]==="]"||r[0]==="}")))return this.flowLevel=0,yield Go,yield*this.parseLineStart();let o=0;for(;r[o]===",";)o+=yield*this.pushCount(1),o+=yield*this.pushSpaces(!0),this.flowKey=!1;switch(o+=yield*this.pushIndicators(),r[o]){case void 0:return"flow";case"#":return yield*this.pushCount(r.length-o),"flow";case"{":case"[":return yield*this.pushCount(1),this.flowKey=!1,this.flowLevel+=1,"flow";case"}":case"]":return yield*this.pushCount(1),this.flowKey=!0,this.flowLevel-=1,this.flowLevel?"flow":"doc";case"*":return yield*this.pushUntil(On),"flow";case'"':case"'":return this.flowKey=!0,yield*this.parseQuotedScalar();case":":{const s=this.charAt(1);if(this.flowKey||xe(s)||s===",")return this.flowKey=!1,yield*this.pushCount(1),yield*this.pushSpaces(!0),"flow"}default:return this.flowKey=!1,yield*this.parsePlainScalar()}}*parseQuotedScalar(){const t=this.charAt(0);let n=this.buffer.indexOf(t,this.pos+1);if(t==="'")for(;n!==-1&&this.buffer[n+1]==="'";)n=this.buffer.indexOf("'",n+2);else for(;n!==-1;){let o=0;for(;this.buffer[n-1-o]==="\\";)o+=1;if(o%2===0)break;n=this.buffer.indexOf('"',n+1)}const i=this.buffer.substring(0,n);let r=i.indexOf(`
`,this.pos);if(r!==-1){for(;r!==-1;){const o=this.continueScalar(r+1);if(o===-1)break;r=i.indexOf(`
`,o)}r!==-1&&(n=r-(i[r-1]==="\r"?2:1))}if(n===-1){if(!this.atEnd)return this.setNext("quoted-scalar");n=this.buffer.length}return yield*this.pushToIndex(n+1,!1),this.flowLevel?"flow":"doc"}*parseBlockScalarHeader(){this.blockScalarIndent=-1,this.blockScalarKeep=!1;let t=this.pos;for(;;){const n=this.buffer[++t];if(n==="+")this.blockScalarKeep=!0;else if(n>"0"&&n<="9")this.blockScalarIndent=Number(n)-1;else if(n!=="-")break}return yield*this.pushUntil(n=>xe(n)||n==="#")}*parseBlockScalar(){let t=this.pos-1,n=0,i;e:for(let o=this.pos;i=this.buffer[o];++o)switch(i){case" ":n+=1;break;case`
`:t=o,n=0;break;case"\r":{const s=this.buffer[o+1];if(!s&&!this.atEnd)return this.setNext("block-scalar");if(s===`
`)break}default:break e}if(!i&&!this.atEnd)return this.setNext("block-scalar");if(n>=this.indentNext){this.blockScalarIndent===-1?this.indentNext=n:this.indentNext=this.blockScalarIndent+(this.indentNext===0?1:this.indentNext);do{const o=this.continueScalar(t+1);if(o===-1)break;t=this.buffer.indexOf(`
`,o)}while(t!==-1);if(t===-1){if(!this.atEnd)return this.setNext("block-scalar");t=this.buffer.length}}let r=t+1;for(i=this.buffer[r];i===" ";)i=this.buffer[++r];if(i==="	"){for(;i==="	"||i===" "||i==="\r"||i===`
`;)i=this.buffer[++r];t=r-1}else if(!this.blockScalarKeep)do{let o=t-1,s=this.buffer[o];s==="\r"&&(s=this.buffer[--o]);const a=o;for(;s===" ";)s=this.buffer[--o];if(s===`
`&&o>=this.pos&&o+1+n>a)t=o;else break}while(!0);return yield oi,yield*this.pushToIndex(t+1,!0),yield*this.parseLineStart()}*parsePlainScalar(){const t=this.flowLevel>0;let n=this.pos-1,i=this.pos-1,r;for(;r=this.buffer[++i];)if(r===":"){const o=this.buffer[i+1];if(xe(o)||t&&Yt.has(o))break;n=i}else if(xe(r)){let o=this.buffer[i+1];if(r==="\r"&&(o===`
`?(i+=1,r=`
`,o=this.buffer[i+1]):n=i),o==="#"||t&&Yt.has(o))break;if(r===`
`){const s=this.continueScalar(i+1);if(s===-1)break;i=Math.max(i,s-2)}}else{if(t&&Yt.has(r))break;n=i}return!r&&!this.atEnd?this.setNext("plain-scalar"):(yield oi,yield*this.pushToIndex(n+1,!0),t?"flow":"doc")}*pushCount(t){return t>0?(yield this.buffer.substr(this.pos,t),this.pos+=t,t):0}*pushToIndex(t,n){const i=this.buffer.slice(this.pos,t);return i?(yield i,this.pos+=i.length,i.length):(n&&(yield""),0)}*pushIndicators(){let t=0;e:for(;;){switch(this.charAt(0)){case"!":t+=yield*this.pushTag(),t+=yield*this.pushSpaces(!0);continue e;case"&":t+=yield*this.pushUntil(On),t+=yield*this.pushSpaces(!0);continue e;case"-":case"?":case":":{const n=this.flowLevel>0,i=this.charAt(1);if(xe(i)||n&&Yt.has(i)){n?this.flowKey&&(this.flowKey=!1):this.indentNext=this.indentValue+1,t+=yield*this.pushCount(1),t+=yield*this.pushSpaces(!0);continue e}}}break e}return t}*pushTag(){if(this.charAt(1)==="<"){let t=this.pos+2,n=this.buffer[t];for(;!xe(n)&&n!==">";)n=this.buffer[++t];return yield*this.pushToIndex(n===">"?t+1:t,!1)}else{let t=this.pos+1,n=this.buffer[t];for(;n;)if(wc.has(n))n=this.buffer[++t];else if(n==="%"&&hr.has(this.buffer[t+1])&&hr.has(this.buffer[t+2]))n=this.buffer[t+=3];else break;return yield*this.pushToIndex(t,!1)}}*pushNewline(){const t=this.buffer[this.pos];return t===`
`?yield*this.pushCount(1):t==="\r"&&this.charAt(1)===`
`?yield*this.pushCount(2):0}*pushSpaces(t){let n=this.pos-1,i;do i=this.buffer[++n];while(i===" "||t&&i==="	");const r=n-this.pos;return r>0&&(yield this.buffer.substr(this.pos,r),this.pos=n),r}*pushUntil(t){let n=this.pos,i=this.buffer[n];for(;!t(i);)i=this.buffer[++n];return yield*this.pushToIndex(n,!1)}}class vc{constructor(){this.lineStarts=[],this.addNewLine=t=>this.lineStarts.push(t),this.linePos=t=>{let n=0,i=this.lineStarts.length;for(;n<i;){const o=n+i>>1;this.lineStarts[o]<t?n=o+1:i=o}if(this.lineStarts[n]===t)return{line:n+1,col:1};if(n===0)return{line:0,col:t};const r=this.lineStarts[n-1];return{line:n,col:t-r+1}}}}function Oe(e,t){for(let n=0;n<e.length;++n)if(e[n].type===t)return!0;return!1}function fr(e){for(let t=0;t<e.length;++t)switch(e[t].type){case"space":case"comment":case"newline":break;default:return t}return-1}function Yo(e){switch(e==null?void 0:e.type){case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":case"flow-collection":return!0;default:return!1}}function Jt(e){switch(e.type){case"document":return e.start;case"block-map":{const t=e.items[e.items.length-1];return t.sep??t.start}case"block-seq":return e.items[e.items.length-1].start;default:return[]}}function et(e){var n;if(e.length===0)return[];let t=e.length;e:for(;--t>=0;)switch(e[t].type){case"doc-start":case"explicit-key-ind":case"map-value-ind":case"seq-item-ind":case"newline":break e}for(;((n=e[++t])==null?void 0:n.type)==="space";);return e.splice(t,e.length)}function cn(e,t){if(t.length<1e5)Array.prototype.push.apply(e,t);else for(let n=0;n<t.length;++n)e.push(t[n])}function pr(e){if(e.start.type==="flow-seq-start")for(const t of e.items)t.sep&&!t.value&&!Oe(t.start,"explicit-key-ind")&&!Oe(t.sep,"map-value-ind")&&(t.key&&(t.value=t.key),delete t.key,Yo(t.value)?t.value.end?cn(t.value.end,t.sep):t.value.end=t.sep:cn(t.start,t.sep),delete t.sep)}class Sc{constructor(t){this.atNewLine=!0,this.atScalar=!1,this.indent=0,this.offset=0,this.onKeyLine=!1,this.stack=[],this.source="",this.type="",this.lexer=new xc,this.onNewLine=t}*parse(t,n=!1){this.onNewLine&&this.offset===0&&this.onNewLine(0);for(const i of this.lexer.lex(t,n))yield*this.next(i);n||(yield*this.end())}*next(t){if(this.source=t,this.atScalar){this.atScalar=!1,yield*this.step(),this.offset+=t.length;return}const n=bc(t);if(n)if(n==="scalar")this.atNewLine=!1,this.atScalar=!0,this.type="scalar";else{switch(this.type=n,yield*this.step(),n){case"newline":this.atNewLine=!0,this.indent=0,this.onNewLine&&this.onNewLine(this.offset+t.length);break;case"space":this.atNewLine&&t[0]===" "&&(this.indent+=t.length);break;case"explicit-key-ind":case"map-value-ind":case"seq-item-ind":this.atNewLine&&(this.indent+=t.length);break;case"doc-mode":case"flow-error-end":return;default:this.atNewLine=!1}this.offset+=t.length}else{const i=`Not a YAML token: ${t}`;yield*this.pop({type:"error",offset:this.offset,message:i,source:t}),this.offset+=t.length}}*end(){for(;this.stack.length>0;)yield*this.pop()}get sourceToken(){return{type:this.type,offset:this.offset,indent:this.indent,source:this.source}}*step(){const t=this.peek(1);if(this.type==="doc-end"&&(t==null?void 0:t.type)!=="doc-end"){for(;this.stack.length>0;)yield*this.pop();this.stack.push({type:"doc-end",offset:this.offset,source:this.source});return}if(!t)return yield*this.stream();switch(t.type){case"document":return yield*this.document(t);case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":return yield*this.scalar(t);case"block-scalar":return yield*this.blockScalar(t);case"block-map":return yield*this.blockMap(t);case"block-seq":return yield*this.blockSequence(t);case"flow-collection":return yield*this.flowCollection(t);case"doc-end":return yield*this.documentEnd(t)}yield*this.pop()}peek(t){return this.stack[this.stack.length-t]}*pop(t){const n=t??this.stack.pop();if(!n)yield{type:"error",offset:this.offset,source:"",message:"Tried to pop an empty stack"};else if(this.stack.length===0)yield n;else{const i=this.peek(1);switch(n.type==="block-scalar"?n.indent="indent"in i?i.indent:0:n.type==="flow-collection"&&i.type==="document"&&(n.indent=0),n.type==="flow-collection"&&pr(n),i.type){case"document":i.value=n;break;case"block-scalar":i.props.push(n);break;case"block-map":{const r=i.items[i.items.length-1];if(r.value){i.items.push({start:[],key:n,sep:[]}),this.onKeyLine=!0;return}else if(r.sep)r.value=n;else{Object.assign(r,{key:n,sep:[]}),this.onKeyLine=!r.explicitKey;return}break}case"block-seq":{const r=i.items[i.items.length-1];r.value?i.items.push({start:[],value:n}):r.value=n;break}case"flow-collection":{const r=i.items[i.items.length-1];!r||r.value?i.items.push({start:[],key:n,sep:[]}):r.sep?r.value=n:Object.assign(r,{key:n,sep:[]});return}default:yield*this.pop(),yield*this.pop(n)}if((i.type==="document"||i.type==="block-map"||i.type==="block-seq")&&(n.type==="block-map"||n.type==="block-seq")){const r=n.items[n.items.length-1];r&&!r.sep&&!r.value&&r.start.length>0&&fr(r.start)===-1&&(n.indent===0||r.start.every(o=>o.type!=="comment"||o.indent<n.indent))&&(i.type==="document"?i.end=r.start:i.items.push({start:r.start}),n.items.splice(-1,1))}}}*stream(){switch(this.type){case"directive-line":yield{type:"directive",offset:this.offset,source:this.source};return;case"byte-order-mark":case"space":case"comment":case"newline":yield this.sourceToken;return;case"doc-mode":case"doc-start":{const t={type:"document",offset:this.offset,start:[]};this.type==="doc-start"&&t.start.push(this.sourceToken),this.stack.push(t);return}}yield{type:"error",offset:this.offset,message:`Unexpected ${this.type} token in YAML stream`,source:this.source}}*document(t){if(t.value)return yield*this.lineEnd(t);switch(this.type){case"doc-start":{fr(t.start)!==-1?(yield*this.pop(),yield*this.step()):t.start.push(this.sourceToken);return}case"anchor":case"tag":case"space":case"comment":case"newline":t.start.push(this.sourceToken);return}const n=this.startBlockValue(t);n?this.stack.push(n):yield{type:"error",offset:this.offset,message:`Unexpected ${this.type} token in YAML document`,source:this.source}}*scalar(t){if(this.type==="map-value-ind"){const n=Jt(this.peek(2)),i=et(n);let r;t.end?(r=t.end,r.push(this.sourceToken),delete t.end):r=[this.sourceToken];const o={type:"block-map",offset:t.offset,indent:t.indent,items:[{start:i,key:t,sep:r}]};this.onKeyLine=!0,this.stack[this.stack.length-1]=o}else yield*this.lineEnd(t)}*blockScalar(t){switch(this.type){case"space":case"comment":case"newline":t.props.push(this.sourceToken);return;case"scalar":if(t.source=this.source,this.atNewLine=!0,this.indent=0,this.onNewLine){let n=this.source.indexOf(`
`)+1;for(;n!==0;)this.onNewLine(this.offset+n),n=this.source.indexOf(`
`,n)+1}yield*this.pop();break;default:yield*this.pop(),yield*this.step()}}*blockMap(t){var i;const n=t.items[t.items.length-1];switch(this.type){case"newline":if(this.onKeyLine=!1,n.value){const r="end"in n.value?n.value.end:void 0,o=Array.isArray(r)?r[r.length-1]:void 0;(o==null?void 0:o.type)==="comment"?r==null||r.push(this.sourceToken):t.items.push({start:[this.sourceToken]})}else n.sep?n.sep.push(this.sourceToken):n.start.push(this.sourceToken);return;case"space":case"comment":if(n.value)t.items.push({start:[this.sourceToken]});else if(n.sep)n.sep.push(this.sourceToken);else{if(this.atIndentedComment(n.start,t.indent)){const r=t.items[t.items.length-2],o=(i=r==null?void 0:r.value)==null?void 0:i.end;if(Array.isArray(o)){cn(o,n.start),o.push(this.sourceToken),t.items.pop();return}}n.start.push(this.sourceToken)}return}if(this.indent>=t.indent){const r=!this.onKeyLine&&this.indent===t.indent,o=r&&(n.sep||n.explicitKey)&&this.type!=="seq-item-ind";let s=[];if(o&&n.sep&&!n.value){const a=[];for(let l=0;l<n.sep.length;++l){const c=n.sep[l];switch(c.type){case"newline":a.push(l);break;case"space":break;case"comment":c.indent>t.indent&&(a.length=0);break;default:a.length=0}}a.length>=2&&(s=n.sep.splice(a[1]))}switch(this.type){case"anchor":case"tag":o||n.value?(s.push(this.sourceToken),t.items.push({start:s}),this.onKeyLine=!0):n.sep?n.sep.push(this.sourceToken):n.start.push(this.sourceToken);return;case"explicit-key-ind":!n.sep&&!n.explicitKey?(n.start.push(this.sourceToken),n.explicitKey=!0):o||n.value?(s.push(this.sourceToken),t.items.push({start:s,explicitKey:!0})):this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:[this.sourceToken],explicitKey:!0}]}),this.onKeyLine=!0;return;case"map-value-ind":if(n.explicitKey)if(n.sep)if(n.value)t.items.push({start:[],key:null,sep:[this.sourceToken]});else if(Oe(n.sep,"map-value-ind"))this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:s,key:null,sep:[this.sourceToken]}]});else if(Yo(n.key)&&!Oe(n.sep,"newline")){const a=et(n.start),l=n.key,c=n.sep;c.push(this.sourceToken),delete n.key,delete n.sep,this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:a,key:l,sep:c}]})}else s.length>0?n.sep=n.sep.concat(s,this.sourceToken):n.sep.push(this.sourceToken);else if(Oe(n.start,"newline"))Object.assign(n,{key:null,sep:[this.sourceToken]});else{const a=et(n.start);this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:a,key:null,sep:[this.sourceToken]}]})}else n.sep?n.value||o?t.items.push({start:s,key:null,sep:[this.sourceToken]}):Oe(n.sep,"map-value-ind")?this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:[],key:null,sep:[this.sourceToken]}]}):n.sep.push(this.sourceToken):Object.assign(n,{key:null,sep:[this.sourceToken]});this.onKeyLine=!0;return;case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":{const a=this.flowScalar(this.type);o||n.value?(t.items.push({start:s,key:a,sep:[]}),this.onKeyLine=!0):n.sep?this.stack.push(a):(Object.assign(n,{key:a,sep:[]}),this.onKeyLine=!0);return}default:{const a=this.startBlockValue(t);if(a){if(a.type==="block-seq"){if(!n.explicitKey&&n.sep&&!Oe(n.sep,"newline")){yield*this.pop({type:"error",offset:this.offset,message:"Unexpected block-seq-ind on same line with key",source:this.source});return}}else r&&t.items.push({start:s});this.stack.push(a);return}}}}yield*this.pop(),yield*this.step()}*blockSequence(t){var i;const n=t.items[t.items.length-1];switch(this.type){case"newline":if(n.value){const r="end"in n.value?n.value.end:void 0,o=Array.isArray(r)?r[r.length-1]:void 0;(o==null?void 0:o.type)==="comment"?r==null||r.push(this.sourceToken):t.items.push({start:[this.sourceToken]})}else n.start.push(this.sourceToken);return;case"space":case"comment":if(n.value)t.items.push({start:[this.sourceToken]});else{if(this.atIndentedComment(n.start,t.indent)){const r=t.items[t.items.length-2],o=(i=r==null?void 0:r.value)==null?void 0:i.end;if(Array.isArray(o)){cn(o,n.start),o.push(this.sourceToken),t.items.pop();return}}n.start.push(this.sourceToken)}return;case"anchor":case"tag":if(n.value||this.indent<=t.indent)break;n.start.push(this.sourceToken);return;case"seq-item-ind":if(this.indent!==t.indent)break;n.value||Oe(n.start,"seq-item-ind")?t.items.push({start:[this.sourceToken]}):n.start.push(this.sourceToken);return}if(this.indent>t.indent){const r=this.startBlockValue(t);if(r){this.stack.push(r);return}}yield*this.pop(),yield*this.step()}*flowCollection(t){const n=t.items[t.items.length-1];if(this.type==="flow-error-end"){let i;do yield*this.pop(),i=this.peek(1);while((i==null?void 0:i.type)==="flow-collection")}else if(t.end.length===0){switch(this.type){case"comma":case"explicit-key-ind":!n||n.sep?t.items.push({start:[this.sourceToken]}):n.start.push(this.sourceToken);return;case"map-value-ind":!n||n.value?t.items.push({start:[],key:null,sep:[this.sourceToken]}):n.sep?n.sep.push(this.sourceToken):Object.assign(n,{key:null,sep:[this.sourceToken]});return;case"space":case"comment":case"newline":case"anchor":case"tag":!n||n.value?t.items.push({start:[this.sourceToken]}):n.sep?n.sep.push(this.sourceToken):n.start.push(this.sourceToken);return;case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":{const r=this.flowScalar(this.type);!n||n.value?t.items.push({start:[],key:r,sep:[]}):n.sep?this.stack.push(r):Object.assign(n,{key:r,sep:[]});return}case"flow-map-end":case"flow-seq-end":t.end.push(this.sourceToken);return}const i=this.startBlockValue(t);i?this.stack.push(i):(yield*this.pop(),yield*this.step())}else{const i=this.peek(2);if(i.type==="block-map"&&(this.type==="map-value-ind"&&i.indent===t.indent||this.type==="newline"&&!i.items[i.items.length-1].sep))yield*this.pop(),yield*this.step();else if(this.type==="map-value-ind"&&i.type!=="flow-collection"){const r=Jt(i),o=et(r);pr(t);const s=t.end.splice(1,t.end.length);s.push(this.sourceToken);const a={type:"block-map",offset:t.offset,indent:t.indent,items:[{start:o,key:t,sep:s}]};this.onKeyLine=!0,this.stack[this.stack.length-1]=a}else yield*this.lineEnd(t)}}flowScalar(t){if(this.onNewLine){let n=this.source.indexOf(`
`)+1;for(;n!==0;)this.onNewLine(this.offset+n),n=this.source.indexOf(`
`,n)+1}return{type:t,offset:this.offset,indent:this.indent,source:this.source}}startBlockValue(t){switch(this.type){case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":return this.flowScalar(this.type);case"block-scalar-header":return{type:"block-scalar",offset:this.offset,indent:this.indent,props:[this.sourceToken],source:""};case"flow-map-start":case"flow-seq-start":return{type:"flow-collection",offset:this.offset,indent:this.indent,start:this.sourceToken,items:[],end:[]};case"seq-item-ind":return{type:"block-seq",offset:this.offset,indent:this.indent,items:[{start:[this.sourceToken]}]};case"explicit-key-ind":{this.onKeyLine=!0;const n=Jt(t),i=et(n);return i.push(this.sourceToken),{type:"block-map",offset:this.offset,indent:this.indent,items:[{start:i,explicitKey:!0}]}}case"map-value-ind":{this.onKeyLine=!0;const n=Jt(t),i=et(n);return{type:"block-map",offset:this.offset,indent:this.indent,items:[{start:i,key:null,sep:[this.sourceToken]}]}}}return null}atIndentedComment(t,n){return this.type!=="comment"||this.indent<=n?!1:t.every(i=>i.type==="newline"||i.type==="space")}*documentEnd(t){this.type!=="doc-mode"&&(t.end?t.end.push(this.sourceToken):t.end=[this.sourceToken],this.type==="newline"&&(yield*this.pop()))}*lineEnd(t){switch(this.type){case"comma":case"doc-start":case"doc-end":case"flow-seq-end":case"flow-map-end":case"map-value-ind":yield*this.pop(),yield*this.step();break;case"newline":this.onKeyLine=!1;case"space":case"comment":default:t.end?t.end.push(this.sourceToken):t.end=[this.sourceToken],this.type==="newline"&&(yield*this.pop())}}}function Ac(e){const t=e.prettyErrors!==!1;return{lineCounter:e.lineCounter||t&&new vc||null,prettyErrors:t}}function Ic(e,t={}){const{lineCounter:n,prettyErrors:i}=Ac(t),r=new Sc(n==null?void 0:n.addNewLine),o=new yc(t);let s=null;for(const a of o.compose(r.parse(e),!0,e.length))if(!s)s=a;else if(s.options.logLevel!=="silent"){s.errors.push(new Et(a.range.slice(0,2),"MULTIPLE_DOCS","Source contains multiple documents; please use YAML.parseAllDocuments()"));break}return i&&n&&(s.errors.forEach(cr(e,n)),s.warnings.forEach(cr(e,n))),s}function Cc(e,t,n){let i;const r=Ic(e,n);if(!r)return null;if(r.warnings.forEach(o=>ko(r.options.logLevel,o)),r.errors.length>0){if(r.options.logLevel!=="silent")throw r.errors[0];r.errors=[]}return r.toJS(Object.assign({reviver:i},n))}const Tc=[{id:"hrm-flagship",inDevMessage:{highlight:"Intended to run locally on your own server.",rest:" No live site available."},taxonomyBucket:"product",title:"HRM (Heart Rate Monitor)",description:"Real-time Web Bluetooth HR telemetry synchronized across multi-client sessions via WebSockets, featuring dynamic zone calculations, Spotify SDK automation, and workout analytics. Originally prototyped in 2020 for remote training, HRM's v2 rewrite served as the foundational testbed for [RepoAuditor](https://repo-auditor-ai.vercel.app/) and autonomous CI/CD PR review guardrails.",category:"Product Development",status:"Live",tags:["React","Web Bluetooth","WebSockets","Spotify API","DevAI Testbed"],canonicalPath:"/devai/hrm-architecture/",externalUrl:"https://arii.github.io/hrm/",externalLinkDisplayLabel:"Live Demo",sourceUrl:"https://github.com/arii/hrm",isFlagship:!0,imageAlt:"Screenshot of the HRM heart rate monitor training dashboard with real-time biometric telemetry and Spotify integration"},{id:"repo-auditor-ai",inDevMessage:{highlight:"Available now for testing",rest:" with your own repository."},taxonomyBucket:"product",title:"RepoAuditor",description:"I engineered a live, open-access agent orchestration platform for automated repository audits and health monitoring. Implemented multi-model PR reviews, custom rule constraints, and autonomous triage workflows accessible to any GitHub developer.",category:"DEVAI TOOLKIT",status:"Live",tags:["DevAI","GitHub API","Multi-Agent","Workflow"],externalUrl:"https://repo-auditor-ai.vercel.app/",externalLinkDisplayLabel:"Live Demo",sourceUrl:"https://github.com/arii/hrm-project-management",isFlagship:!0,imageAlt:"Screenshot of the RepoAuditor workflow console displaying multi-repo pull request audit findings and issue prioritization"},{id:"boomtick-blog",inDevMessage:{highlight:"RAG + LLM tooling in active development.",rest:" This site is the production environment where I am building and validating those pipelines."},taxonomyBucket:"product",title:"BoomTick.blog",subtitle:"LIVE DEVELOPMENT ENVIRONMENT",description:"I built a West Coast Swing community platform and active testbed for RAG pipelines and LLM-assisted content workflows currently in development. Includes SEO-optimized publishing, analytics, and experiments with Printful API integration for automated merch listing generation.",category:"Product development",status:"In development",tags:["Next.js","LLM workflows","SEO"],externalUrl:"https://boomtick.blog",externalLinkDisplayLabel:"Live Demo",sourceUrl:"https://github.com/arii/tech-dancer",isFlagship:!0,customPreview:{logo:{prefix:"boom",accent:"tick",suffix:".blog"},headline:[{text:"Pack smart."},{text:"Dance more.",accent:"Dance more."}],tagline:"The west coast swing dancer's guide to gear, travel, and better dance weekends."}},{id:"phd-thesis",taxonomyBucket:"product",title:"Reliably Arranging Objects",subtitle:"MIT CSAIL PH.D. THESIS",description:"I developed a conformant planning approach to reliable robot manipulation under severe sensing and control uncertainty. Combines fixture-augmented plan optimization and physics-driven belief state transitions to increase assembly reliability from 1.9% to 80.7% on a PR2 robot.",category:"Robotics & AI",status:"Completed (2019)",tags:["PR2","Conformant planning","Belief state","Manipulation","MIT CSAIL"],isFlagship:!0,canonicalPath:"/research/conformant-planning-manipulation/",image:"/assets/research/phd/icra_presentation.gif",imageAlt:"PR2 robot executing conformant planning manipulation and reliable block alignment during ICRA presentation",externalUrl:"https://dspace.mit.edu/entities/publication/d489a172-efbf-4e35-b81c-04e4acf3d24d",externalLinkDisplayLabel:"MIT DSpace Thesis"},{id:"masters-thesis",taxonomyBucket:"product",title:"Learning a Strategy for Whole-Arm Grasping",subtitle:"MIT S.M. THESIS — CSAIL",description:"I investigated reinforcement learning policies for bimanual and whole-arm grasping of bulky, irregular objects under real-world physical uncertainty. I formulated contact-rich control strategies that use compliant arm surfaces and multi-modal feedback to stabilize grasping without prior geometric part models.",category:"Robotics & AI",status:"Completed (2014)",tags:["Whole-arm grasping","Bimanual manipulation","Reinforcement learning","Sensorimotor control","Tactile feedback","MIT CSAIL"],isFlagship:!0,image:"/assets/research/masters-thesis/pr2_grasp_3.gif",imageAlt:"PR2 robot executing whole-arm contact and grasping strategy on irregular objects",canonicalPath:"/research/masters-thesis/",externalUrl:"https://dspace.mit.edu/entities/publication/ead0c10d-3401-46a1-bcc5-42f5a56fe0b8",externalLinkDisplayLabel:"MIT DSpace Thesis"}],Ec=[{id:"gitops-pr-reviewer",taxonomyBucket:"infrastructure",title:"Boomtick DevAI PR Reviewer & MCP Architecture",subtitle:"Automated PR Auditing & Dual-Layer Harness",description:"I engineered an LLM-powered PR auditing pipeline and dual-layer harness combining boomtick-mcp for agentic tool calls and td-cli for deterministic execution and GitHub Actions automation.",category:"DevAI System",status:"Active",tags:["GitHub Actions","MCP","CLI","Gemini","DevAI","PR automation"],canonicalPath:"/research/gitops-pr-reviewer/",sourceUrl:"https://github.com/arii/boomtick",parentFlagship:{id:"repo-auditor-ai",title:"RepoAuditor"}},{id:"deployment-impact-analyzer",taxonomyBucket:"infrastructure",title:"Visual Impact / UX Audit",subtitle:"VISUAL IMPACT ANALYSIS PIPELINE",description:"Traces code changes through import graphs to execute targeted Playwright visual validation, catching layout shifts from AI-generated code and cutting screenshot volume by up to 90%.",category:"DevAI System",status:"Active",tags:["Playwright","CI/CD","UX Audit","Dependency graph","Pixelmatch"],canonicalPath:"/research/deployment-impact-analyzer/",sourceUrl:"https://github.com/arii/boomtick",isFlagship:!0},{id:"ai-experiments",taxonomyBucket:"infrastructure",title:"AI Experiments",subtitle:"WCS Scraper, Ecommerce Automation, and AI Blog Drafter",description:"A collection of custom dev tools, background ETL pipelines, and automated workflows I am currently building.",category:"AI Experiments",status:"In Progress",tags:["ETL","WCS Scraper","Printful API","LLM","RAG","Automation"],canonicalPath:"/research/ai-experiments/"},{id:"versiontruth",inDevMessage:{highlight:"⚠ Hackathon submission (NandaHack, 2026)",rest:"— not yet in production"},taxonomyBucket:"infrastructure",title:"VersionTruth: Eliminating Version Hallucinations in Agentic CI",subtitle:"The antidote to version hallucinations",description:"I created a tool that provides real-time ground-truth for npm, Node, and GitHub Actions, built as a live agent skill for NandaHack.",category:"DevAI Tooling",status:"Active",tags:["Versions","CI","Dependencies","Hallucination-mitigation","npm","Node","GitHub Actions","Agents"],canonicalPath:"/research/versiontruth/",sourceUrl:"https://github.com/arii/tech-dancer/tree/main/api"}],Pc=[{id:"duckietown",taxonomyBucket:"infrastructure",title:"MIT Duckietown (Autonomous Taxi Fleet)",description:"An open-source, low-cost robotics education and research platform for autonomous driving, multi-agent fleet coordination, and lane tracking for rubber ducks.",category:"Robotics & Autonomy",status:"Completed",tags:["Robotics & autonomy","Computer vision","Lane tracking","ROS","Multi-agent","MIT"],image:"/assets/research/duckietown.jpg",imageAlt:"Duckietown autonomous vehicles and inaugural MIT 2.166 class",canonicalPath:"/research/duckietown/",videoUrl:"https://www.youtube.com/watch?v=rPpewHIF2KU",externalUrl:"https://www.duckietown.org/"},{id:"bwsi-racecar",taxonomyBucket:"infrastructure",title:"BeaverWorks Summer Institute (RACECAR)",description:"I led instruction and developed curricula for autonomous miniature racecars with labs on visual servoing, motion planning, and ROS (ISEC 2017 & AAAI/EAAI Model AI Publication).",category:"Education",status:"Completed",tags:["Robotics & autonomy","Computer vision","ISEC 2017","Visual servoing","Motion planning","ROS"],image:"/assets/research/bwsi-racecar/racecar_main.gif",imageAlt:"Students programming miniature autonomous vehicles",canonicalPath:"/research/bwsi-racecar/",videoUrl:"https://www.youtube.com/watch?v=UjVatZ3NK5U",externalUrl:"https://scholar.google.com/citations?view_op=view_citation&hl=en&user=NM6SfiEAAAAJ&citation_for_view=NM6SfiEAAAAJ:W7OEmFMy1HYC"},{id:"delivery-bots",taxonomyBucket:"infrastructure",title:"Delivery Bots (Multi-Robot Coordination under Uncertainty)",description:"Decentralized multi-agent package delivery in dynamic human environments (RSS 2015 Best Paper Finalist & IJRR journal publication).",category:"Robotics & Autonomy",status:"Completed",tags:["Robotics & autonomy","Multi-agent","IJRR Journal","RSS 2015 Finalist","POMDP"],image:"/assets/research/delivery-bots/coordination.gif",imageAlt:"Decentralized multi-robot package delivery and coordination under uncertainty",canonicalPath:"/research/delivery-bots/",externalUrl:"https://scholar.google.com/citations?view_op=view_citation&hl=en&user=NM6SfiEAAAAJ&citation_for_view=NM6SfiEAAAAJ:zYLM7Y9cAGgC"},{id:"graduate-engineering-projects",taxonomyBucket:"infrastructure",title:"Graduate Engineering Projects",subtitle:"MIT Advanced Systems",description:"I built advanced graduate-level engineering systems at MIT spanning real-time computer vision control, ordinal machine learning ranking, and parameterized hardware accelerators.",category:"Robotics & Hardware",status:"Completed",tags:["Robotics","Machine learning","Hardware acceleration","MIT"],image:"/assets/research/drone_follow.gif",imageAlt:"Parrot Rolling Spider Drone hovering over path",canonicalPath:"/research/graduate-engineering-projects/",mediaLinks:[{type:"video",label:"Video Demo",url:"https://www.youtube.com/watch?v=f5l8GA1PHm8"},{type:"pdf",label:"ML PDF Report",url:"https://raw.githubusercontent.com/arii/arii.github.io/main/reports/report_ml.pdf"},{type:"pdf",label:"RSA PDF Report",url:"https://raw.githubusercontent.com/arii/arii.github.io/main/reports/report_6375.pdf"}]},{id:"boop-light-detector",taxonomyBucket:"product",title:"Boop Light Detector",description:"I developed an iOS app for blind and visually impaired users to detect light levels (from daylight to lamps) and interpret values through sound.",category:"Software",status:"Completed",metrics:"6,000+ Downloads",tags:["iOS","Accessibility","Audio","Mobile"],image:"/assets/research/app_testing.jpg",imageAlt:"User testing the Boop Light Detector mobile app",canonicalPath:"/research/boop-light-detector/",externalUrl:"http://arii.github.io/boop/",sourceUrl:"https://github.com/arii/boop"},{id:"light-therapy-mit",taxonomyBucket:"infrastructure",title:"Light Therapy at MIT",description:"I launched a campus-wide seasonal affective disorder (SAD) wellness initiative funded by the MindHandHeart Innovation Fund.",category:"Community Health & Wellness",status:"Completed",tags:["MindHandHeart","Community","Wellness","MIT"],image:"/assets/research/light.jpg",imageAlt:"Light therapy lamps installed across MIT campus locations",canonicalPath:"/research/light-therapy-mit/",externalUrl:"https://arii.github.io/SAD/",sourceUrl:"https://github.com/arii/SAD"},{id:"leac-monitoring-software",taxonomyBucket:"infrastructure",title:"Lab Energy Assessment Center (LEAC)",description:"I created network monitoring software to analyze lab energy consumption as the Lead Technology Developer in collaboration with MIT Green Labs and MIT Sustainability.",category:"Software",status:"Completed",tags:["Sustainability","Hardware","Energy audit","MIT Green Labs"],image:"/assets/research/leac.jpg",imageAlt:"LEAC server network monitoring interface",canonicalPath:"/research/leac-monitoring-software/",externalUrl:"https://leac-mit.github.io/"},{id:"robocon-mit",taxonomyBucket:"infrastructure",title:"RoboCon Technical Workshop Platform",description:"I served as committee chairperson and lead web designer for the inaugural cross-departmental robotics workshop at MIT.",category:"Web",status:"Completed",tags:["Robotics","Conference","Web platform","MIT"],image:"/assets/research/robocon.jpg",imageAlt:"RoboCon event portal showcase",canonicalPath:"/research/robocon-mit/",externalUrl:"http://robocon.mit.edu"},{id:"cad-cam-dental-workflow",taxonomyBucket:"product",title:"CAD/CAM Robotic Dental Crowning Workflow",subtitle:"UCSC Bionics Lab",description:"I implemented robotic trajectory planning, 6-DOF manipulation, and dynamic registration for autonomous dental crowning and implant preparation with Dr. Jacob Rosen.",category:"Medical Robotics",status:"Completed",tags:["Robotics","Medical UI","CAD/CAM","Bionics Lab UCSC"],image:"/assets/research/dental.jpg",imageAlt:"CAD/CAM Robotic Dental Crowning Workflow UI",canonicalPath:"/research/cad-cam-dental-workflow/",pdfUrl:"https://raw.githubusercontent.com/arii/arii.github.io/main/reports/report_dental.pdf",videoUrl:"https://www.youtube.com/watch?v=tXif7xeZmGI",externalUrl:"https://raw.githubusercontent.com/arii/arii.github.io/main/reports/report_dental.pdf"},{id:"undergraduate-projects",taxonomyBucket:"infrastructure",title:"Undergraduate Engineering Projects",subtitle:"UCSC Robotics & Hardware Systems",description:"I built foundational undergraduate robotics and embedded hardware projects at UCSC—spanning CMPE 100 logic design, CMPE 121 microprocessor systems, CMPE 118 mechatronics, and custom microcontroller-based LED game side projects.",category:"Robotics & Hardware",status:"Completed",tags:["Robotics","Mechatronics","Embedded systems","Digital logic","Microcontrollers","UCSC","Hardware"],image:"/assets/research/undergraduate-projects/flip_flop.gif",canonicalPath:"/research/undergraduate-projects/"}],Dc=[...Tc,...Ec,...Pc];function Lc(e){const t=e.match(/^---\r?\n([\s\S]+?)\r?\n---\r?\n([\s\S]*)$/);if(!t)return{data:{},content:e};const n=t[1],i=t[2];try{const r=Cc(n);return{data:r&&typeof r=="object"?r:{},content:i}}catch(r){return console.error("Error parsing frontmatter:",r),{data:{},content:i}}}const _c=Object.assign({"/src/content/research/ai-experiments.md":ja,"/src/content/research/boop-light-detector.md":Ba,"/src/content/research/bwsi-racecar.md":Ua,"/src/content/research/cad-cam-dental-workflow.md":Ha,"/src/content/research/conformant-planning-manipulation.md":qa,"/src/content/research/delivery-bots.md":Ka,"/src/content/research/deployment-impact-analyzer.md":Ya,"/src/content/research/duckietown.md":Qa,"/src/content/research/gitops-pr-reviewer.md":Za,"/src/content/research/graduate-engineering-projects.md":tl,"/src/content/research/hrm-architecture.md":il,"/src/content/research/leac-monitoring-software.md":ol,"/src/content/research/light-therapy-mit.md":al,"/src/content/research/masters-thesis.md":cl,"/src/content/research/robocon-mit.md":dl,"/src/content/research/undergraduate-projects.md":fl,"/src/content/research/versiontruth.md":ml}),Jo=Object.entries(_c).map(([e,t])=>{var s;const n=t.default,{data:i,content:r}=Lc(n);return{slug:((s=e.split("/").pop())==null?void 0:s.replace(".md",""))||"",title:String(i.title||"Untitled"),date:String(i.date||""),readingTime:i.readTime?`${i.readTime} min read`:"5 min read",tags:Array.isArray(i.tags)?i.tags:[],summary:String(i.excerpt||i.summary||""),content:r.trim(),category:String(i.category||"DevAI"),author:String(i.author||"Ariel Anders"),status:String(i.status||"published")}}),hg=()=>Array.from(new Map(Jo.map(t=>[t.title,t])).values()).sort((t,n)=>new Date(n.date).getTime()-new Date(t.date).getTime()),Mc=e=>Jo.find(t=>t.slug===e),Qo=({src:e,alt:t,fallbackSrc:n,containerClassName:i="",className:r="",webpSrc:o,sources:s,disableWebpAutoInfer:a=!1,...l})=>{const[c,d]=sn.useState(!1),[u,f]=sn.useState(!0),h=nt(e);let m=nt(o);if(!m&&e&&!a&&/\.(png|jpe?g)$/i.test(e)){const k=e.replace(/\.(png|jpe?g)$/i,".webp");m=nt(k)}const g=s==null?void 0:s.map(k=>({...k,srcSet:nt(k.srcSet)||k.srcSet})),b=!!(m||g&&g.length>0),p=A.jsx("img",{src:h,alt:t,className:`transition-opacity duration-300 ${u?"opacity-0":"opacity-100"} ${r}`,onLoad:()=>f(!1),onError:()=>{d(!0),f(!1)},...l});return A.jsxs("div",{className:`relative overflow-hidden bg-surface ${i}`,children:[u&&A.jsx("div",{className:"absolute inset-0 animate-pulse bg-surface-alt","aria-hidden":"true"}),c?n?A.jsx("img",{src:nt(n),alt:t,className:`object-cover ${r}`,...l}):A.jsx("div",{className:"flex h-full w-full items-center justify-center bg-surface-alt/80 px-4 text-center text-xs text-text-dim",role:"img","aria-label":t,children:A.jsx("span",{children:t||"Preview unavailable"})}):b?A.jsxs("picture",{children:[g==null?void 0:g.map((k,x)=>A.jsx("source",{srcSet:k.srcSet,type:k.type,media:k.media},x)),m&&A.jsx("source",{srcSet:m,type:"image/webp"}),p]}):p]})},fg=({tool:e,onNavigate:t,onImageClick:n})=>{const r=(u=>u.id.includes("hrm")?fa:u.id.includes("experiments")?La:u.id.includes("scraper")?pa:u.id.includes("blog-drafter")?ma:u.id.includes("ecommerce")?Ra:ga)(e),o=e.id==="hrm-flagship"?"/assets/research/hrm-flagship.png":e.id==="repo-auditor-ai"?"/assets/research/repo-auditor-ai.png":e.image||null,s=!!(e.externalUrl||e.sourceUrl||e.canonicalPath),a=e.canonicalPath?e.canonicalPath.replace(/^\/(research|devai)\//,"").replace(/\/$/,""):"",l=()=>{e.canonicalPath&&a?t(a):e.externalUrl?window.open(e.externalUrl,"_blank","noopener,noreferrer"):e.sourceUrl&&window.open(e.sourceUrl,"_blank","noopener,noreferrer")},c=()=>{s&&l()},d=u=>{(u.key==="Enter"||u.key===" ")&&s&&(u.key===" "&&u.preventDefault(),l())};return A.jsxs("div",{onClick:c,onKeyDown:d,tabIndex:s?0:void 0,role:s?"button":void 0,className:`group rounded-3xl border border-line bg-surface p-0 flex flex-col justify-between overflow-hidden transition-all hover:border-accent hover:shadow-glow ${s?"cursor-pointer":""}`,children:[e.customPreview?A.jsxs("div",{className:"p-6 bg-bg border-b border-line aspect-[16/10] max-h-48 sm:max-h-64 flex flex-col justify-center space-y-2",children:[A.jsxs("div",{className:"text-accent font-extrabold text-sm font-display",children:[e.customPreview.logo.prefix,A.jsx("span",{className:"text-text-main",children:e.customPreview.logo.accent}),A.jsx("span",{className:"text-text-dim font-light",children:e.customPreview.logo.suffix})]}),A.jsx("div",{className:"text-text-main font-black text-lg leading-tight font-display",children:e.customPreview.headline.map((u,f)=>A.jsxs("span",{className:u.accent?"text-accent":"",children:[u.text," "]},f))}),A.jsx("div",{className:"text-xs text-text-dim",children:e.customPreview.tagline})]}):o?A.jsx("div",{onClick:u=>{u.stopPropagation(),n(o)},className:"relative aspect-[16/10] max-h-48 sm:max-h-64 overflow-hidden bg-bg border-b border-line cursor-zoom-in group/img",children:A.jsx(Qo,{src:o,alt:e.imageAlt||e.title,className:"w-full h-full object-cover object-top transition-transform duration-500 group-hover/img:scale-102",containerClassName:"w-full h-full"})}):null,A.jsxs("div",{className:"p-6 flex-grow flex flex-col justify-between space-y-4",children:[A.jsxs("div",{className:"space-y-3",children:[A.jsxs("div",{className:"flex items-center justify-between",children:[A.jsx("div",{className:"h-10 w-10 rounded-2xl bg-accent/10 flex items-center justify-center border border-accent/20",children:A.jsx(r,{className:"h-5 w-5 text-accent"})}),e.id!=="phd-thesis"&&e.id!=="masters-thesis"&&A.jsxs("div",{className:"flex items-center space-x-1.5 bg-surface border border-line px-2 py-1 rounded-md",children:[A.jsx("span",{className:`w-2 h-2 rounded-md ${e.status==="Live"||e.status==="Local only"?"bg-accent":e.status==="In development"?"bg-accent-sky":"bg-muted-foreground"}`}),A.jsx("span",{className:"text-xs font-semibold text-text-main pr-0.5",children:e.status})]})]}),A.jsxs("div",{children:[A.jsx("span",{className:"text-xs text-accent font-semibold block font-sans",children:e.category}),A.jsx("h3",{className:"text-xl font-bold text-text-main mt-1 font-display group-hover:text-accent transition-colors text-balance",children:e.title}),e.subtitle&&A.jsx("p",{className:"text-xs text-accent font-semibold mt-1 text-balance",children:e.subtitle})]}),A.jsx("p",{className:"text-sm text-text-dim leading-relaxed text-pretty",children:e.description})]}),A.jsxs("div",{className:"space-y-4 pt-4 border-t border-line",children:[A.jsx("div",{className:"flex flex-wrap gap-1.5",children:e.tags.map(u=>A.jsx("span",{className:"px-2.5 py-0.5 rounded-md text-[10px] bg-surface text-text-dim border border-line",children:u},u))}),A.jsxs("div",{className:"flex flex-wrap gap-3",onClick:u=>u.stopPropagation(),children:[e.canonicalPath&&A.jsxs("button",{onClick:u=>{u.stopPropagation(),a&&t(a)},className:"inline-flex items-center space-x-1.5 bg-accent/10 border border-accent/20 px-3.5 py-2 rounded-xl text-xs font-semibold text-accent hover:bg-accent/20 transition-colors min-h-[44px] cursor-pointer",children:[A.jsx("span",{children:"Deep-Dive"}),A.jsx(ha,{className:"h-3.5 w-3.5"})]}),e.videoUrl&&A.jsxs("a",{href:e.videoUrl,target:"_blank",rel:"noopener noreferrer",onClick:u=>u.stopPropagation(),className:"inline-flex items-center space-x-1.5 bg-surface border border-line px-3.5 py-2 rounded-xl text-xs font-semibold text-text-dim hover:bg-surface-alt hover:text-text-main transition-colors min-h-[44px]",children:[A.jsx(co,{className:"h-3.5 w-3.5 text-accent"}),A.jsx("span",{children:"Watch Video"})]}),e.externalUrl&&A.jsxs("a",{href:e.externalUrl,target:"_blank",rel:"noopener noreferrer",onClick:u=>u.stopPropagation(),className:`inline-flex items-center space-x-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold transition-colors min-h-[44px] ${e.canonicalPath?"bg-surface border border-line text-text-dim hover:bg-surface-alt hover:text-text-main":"bg-accent/10 border border-accent/20 text-accent hover:bg-accent/20"}`,children:[A.jsx("span",{children:e.externalLinkDisplayLabel||"Open Link"}),A.jsx(ao,{className:"h-3.5 w-3.5"})]}),e.playlistUrl&&A.jsxs("a",{href:e.playlistUrl,target:"_blank",rel:"noopener noreferrer",onClick:u=>u.stopPropagation(),className:"inline-flex items-center space-x-1.5 bg-surface border border-line px-3.5 py-2 rounded-xl text-xs font-semibold text-text-dim hover:bg-surface-alt hover:text-text-main transition-colors min-h-[44px]",children:[A.jsx(lo,{className:"h-3.5 w-3.5 text-accent"}),A.jsx("span",{children:"Watch Playlist"})]}),e.sourceUrl&&A.jsxs("a",{href:e.sourceUrl,target:"_blank",rel:"noopener noreferrer",onClick:u=>u.stopPropagation(),className:"inline-flex items-center space-x-1.5 bg-surface border border-line px-3.5 py-2 rounded-xl text-xs font-semibold text-text-dim hover:bg-surface-alt hover:text-text-main transition-colors min-h-[44px]",children:[A.jsx("span",{children:"Source Repo"}),A.jsx(oo,{className:"h-3.5 w-3.5"})]})]})]})]})]})},pg=({imageSrc:e,onClose:t,altText:n="Enlarged screenshot preview"})=>{if(!e)return null;const i=nt(e),r=/\.(png|jpe?g)$/i.test(i),o=r?i.replace(/\.(png|jpe?g)$/i,".webp"):null;return A.jsxs("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-bg/95 cursor-zoom-out p-4 backdrop-blur-sm",onClick:t,children:[A.jsx("button",{className:"absolute top-4 right-4 text-text-main hover:text-accent p-2 transition-colors focus:outline-none cursor-pointer",onClick:t,"aria-label":"Close modal",children:A.jsx(ya,{className:"h-8 w-8"})}),r&&o?A.jsxs("picture",{children:[A.jsx("source",{srcSet:o,type:"image/webp"}),A.jsx("img",{src:i,alt:n,className:"max-w-full max-h-[90vh] object-contain rounded-3xl border border-line shadow-2xl"})]}):A.jsx("img",{src:i,alt:n,className:"max-w-full max-h-[90vh] object-contain rounded-3xl border border-line shadow-2xl"})]})};function Rc(e,t){const n={};return(e[e.length-1]===""?[...e,""]:e).join((n.padRight?" ":"")+","+(n.padLeft===!1?"":" ")).trim()}const Oc=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,Nc=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,jc={};function mr(e,t){return(jc.jsx?Nc:Oc).test(e)}const Fc=/[ \t\n\f\r]/g;function Bc(e){return typeof e=="object"?e.type==="text"?gr(e.value):!1:gr(e)}function gr(e){return e.replace(Fc,"")===""}class $t{constructor(t,n,i){this.normal=n,this.property=t,i&&(this.space=i)}}$t.prototype.normal={};$t.prototype.property={};$t.prototype.space=void 0;function Xo(e,t){const n={},i={};for(const r of e)Object.assign(n,r.property),Object.assign(i,r.normal);return new $t(n,i,t)}function si(e){return e.toLowerCase()}class ce{constructor(t,n){this.attribute=n,this.property=t}}ce.prototype.attribute="";ce.prototype.booleanish=!1;ce.prototype.boolean=!1;ce.prototype.commaOrSpaceSeparated=!1;ce.prototype.commaSeparated=!1;ce.prototype.defined=!1;ce.prototype.mustUseProperty=!1;ce.prototype.number=!1;ce.prototype.overloadedBoolean=!1;ce.prototype.property="";ce.prototype.spaceSeparated=!1;ce.prototype.space=void 0;let zc=0;const B=Ye(),ee=Ye(),ai=Ye(),D=Ye(),K=Ye(),qe=Ye(),de=Ye();function Ye(){return 2**++zc}const li=Object.freeze(Object.defineProperty({__proto__:null,boolean:B,booleanish:ee,commaOrSpaceSeparated:de,commaSeparated:qe,number:D,overloadedBoolean:ai,spaceSeparated:K},Symbol.toStringTag,{value:"Module"})),Nn=Object.keys(li);class Li extends ce{constructor(t,n,i,r){let o=-1;if(super(t,n),yr(this,"space",r),typeof i=="number")for(;++o<Nn.length;){const s=Nn[o];yr(this,Nn[o],(i&li[s])===li[s])}}}Li.prototype.defined=!0;function yr(e,t,n){n&&(e[t]=n)}function yt(e){const t={},n={};for(const[i,r]of Object.entries(e.properties)){const o=new Li(i,e.transform(e.attributes||{},i),r,e.space);e.mustUseProperty&&e.mustUseProperty.includes(i)&&(o.mustUseProperty=!0),t[i]=o,n[si(i)]=i,n[si(o.attribute)]=i}return new $t(t,n,e.space)}const Zo=yt({properties:{ariaActiveDescendant:null,ariaAtomic:ee,ariaAutoComplete:null,ariaBusy:ee,ariaChecked:ee,ariaColCount:D,ariaColIndex:D,ariaColSpan:D,ariaControls:K,ariaCurrent:null,ariaDescribedBy:K,ariaDetails:null,ariaDisabled:ee,ariaDropEffect:K,ariaErrorMessage:null,ariaExpanded:ee,ariaFlowTo:K,ariaGrabbed:ee,ariaHasPopup:null,ariaHidden:ee,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:K,ariaLevel:D,ariaLive:null,ariaModal:ee,ariaMultiLine:ee,ariaMultiSelectable:ee,ariaOrientation:null,ariaOwns:K,ariaPlaceholder:null,ariaPosInSet:D,ariaPressed:ee,ariaReadOnly:ee,ariaRelevant:null,ariaRequired:ee,ariaRoleDescription:K,ariaRowCount:D,ariaRowIndex:D,ariaRowSpan:D,ariaSelected:ee,ariaSetSize:D,ariaSort:null,ariaValueMax:D,ariaValueMin:D,ariaValueNow:D,ariaValueText:null,role:null},transform(e,t){return t==="role"?t:"aria-"+t.slice(4).toLowerCase()}});function es(e,t){return t in e?e[t]:t}function ts(e,t){return es(e,t.toLowerCase())}const Uc=yt({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:qe,acceptCharset:K,accessKey:K,action:null,allow:null,allowFullScreen:B,allowPaymentRequest:B,allowUserMedia:B,alpha:B,alt:null,as:null,async:B,autoCapitalize:null,autoComplete:K,autoFocus:B,autoPlay:B,blocking:K,capture:null,charSet:null,checked:B,cite:null,className:K,closedBy:null,colorSpace:null,cols:D,colSpan:D,command:null,commandFor:null,content:null,contentEditable:ee,controls:B,controlsList:K,coords:D|qe,crossOrigin:null,data:null,dateTime:null,decoding:null,default:B,defer:B,dir:null,dirName:null,disabled:B,download:ai,draggable:ee,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:B,formTarget:null,headers:K,height:D,hidden:ai,high:D,href:null,hrefLang:null,htmlFor:K,httpEquiv:K,id:null,imageSizes:null,imageSrcSet:null,inert:B,inputMode:null,integrity:null,is:null,isMap:B,itemId:null,itemProp:K,itemRef:K,itemScope:B,itemType:K,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:B,low:D,manifest:null,max:null,maxLength:D,media:null,method:null,min:null,minLength:D,multiple:B,muted:B,name:null,nonce:null,noModule:B,noValidate:B,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:B,optimum:D,pattern:null,ping:K,placeholder:null,playsInline:B,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:B,referrerPolicy:null,rel:K,required:B,reversed:B,rows:D,rowSpan:D,sandbox:K,scope:null,scoped:B,seamless:B,selected:B,shadowRootClonable:B,shadowRootCustomElementRegistry:B,shadowRootDelegatesFocus:B,shadowRootMode:null,shadowRootSerializable:B,shape:null,size:D,sizes:null,slot:null,span:D,spellCheck:ee,src:null,srcDoc:null,srcLang:null,srcSet:null,start:D,step:null,style:null,tabIndex:D,target:null,title:null,translate:null,type:null,typeMustMatch:B,useMap:null,value:ee,width:D,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:K,axis:null,background:null,bgColor:null,border:D,borderColor:null,bottomMargin:D,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:B,declare:B,event:null,face:null,frame:null,frameBorder:null,hSpace:D,leftMargin:D,link:null,longDesc:null,lowSrc:null,marginHeight:D,marginWidth:D,noResize:B,noHref:B,noShade:B,noWrap:B,object:null,profile:null,prompt:null,rev:null,rightMargin:D,rules:null,scheme:null,scrolling:ee,standby:null,summary:null,text:null,topMargin:D,valueType:null,version:null,vAlign:null,vLink:null,vSpace:D,allowTransparency:null,autoCorrect:null,autoSave:null,credentialless:B,disablePictureInPicture:B,disableRemotePlayback:B,exportParts:qe,part:K,prefix:null,property:null,results:D,security:null,unselectable:null},space:"html",transform:ts}),$c=yt({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",maskType:"mask-type",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:de,accentHeight:D,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:D,amplitude:D,arabicForm:null,ascent:D,attributeName:null,attributeType:null,azimuth:D,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:D,by:null,calcMode:null,capHeight:D,className:K,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:D,diffuseConstant:D,direction:null,display:null,dur:null,divisor:D,dominantBaseline:null,download:B,dx:null,dy:null,edgeMode:null,editable:null,elevation:D,enableBackground:null,end:null,event:null,exponent:D,externalResourcesRequired:null,fill:null,fillOpacity:D,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:qe,g2:qe,glyphName:qe,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:D,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:D,horizOriginX:D,horizOriginY:D,id:null,ideographic:D,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:D,k:D,k1:D,k2:D,k3:D,k4:D,kernelMatrix:de,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:D,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskType:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:D,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:D,overlineThickness:D,paintOrder:null,panose1:null,path:null,pathLength:D,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:K,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:D,pointsAtY:D,pointsAtZ:D,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:de,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:de,rev:de,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:de,requiredFeatures:de,requiredFonts:de,requiredFormats:de,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:D,specularExponent:D,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:D,strikethroughThickness:D,string:null,stroke:null,strokeDashArray:de,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:D,strokeOpacity:D,strokeWidth:null,style:null,surfaceScale:D,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:de,tabIndex:D,tableValues:null,target:null,targetX:D,targetY:D,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:de,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:D,underlineThickness:D,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:D,values:null,vAlphabetic:D,vMathematical:D,vectorEffect:null,vHanging:D,vIdeographic:D,version:null,vertAdvY:D,vertOriginX:D,vertOriginY:D,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:D,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:es}),ns=yt({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(e,t){return"xlink:"+t.slice(5).toLowerCase()}}),is=yt({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:ts}),rs=yt({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(e,t){return"xml:"+t.slice(3).toLowerCase()}}),Hc={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},Vc=/[A-Z]/g,br=/-[a-z]/g,qc=/^data[-\w.:]+$/i;function Wc(e,t){const n=si(t);let i=t,r=ce;if(n in e.normal)return e.property[e.normal[n]];if(n.length>4&&n.slice(0,4)==="data"&&qc.test(t)){if(t.charAt(4)==="-"){const o=t.slice(5).replace(br,Gc);i="data"+o.charAt(0).toUpperCase()+o.slice(1)}else{const o=t.slice(4);if(!br.test(o)){let s=o.replace(Vc,Kc);s.charAt(0)!=="-"&&(s="-"+s),t="data"+s}}r=Li}return new r(i,t)}function Kc(e){return"-"+e.toLowerCase()}function Gc(e){return e.charAt(1).toUpperCase()}const Yc=Xo([Zo,Uc,ns,is,rs],"html"),_i=Xo([Zo,$c,ns,is,rs],"svg");function Jc(e){return e.join(" ").trim()}var tt={},jn,wr;function Qc(){if(wr)return jn;wr=1;var e=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,t=/\n/g,n=/^\s*/,i=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,r=/^:\s*/,o=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,s=/^[;\s]*/,a=/^\s+|\s+$/g,l=`
`,c="/",d="*",u="",f="comment",h="declaration";function m(b,p){if(typeof b!="string")throw new TypeError("First argument must be a string");if(!b)return[];p=p||{};var k=1,x=1;function T(N){var R=N.match(t);R&&(k+=R.length);var q=N.lastIndexOf(l);x=~q?N.length-q:x+N.length}function I(){var N={line:k,column:x};return function(R){return R.position=new v(N),O(),R}}function v(N){this.start=N,this.end={line:k,column:x},this.source=p.source}v.prototype.content=b;function E(N){var R=new Error(p.source+":"+k+":"+x+": "+N);if(R.reason=N,R.filename=p.source,R.line=k,R.column=x,R.source=b,!p.silent)throw R}function P(N){var R=N.exec(b);if(R){var q=R[0];return T(q),b=b.slice(q.length),R}}function O(){P(n)}function S(N){var R;for(N=N||[];R=M();)R!==!1&&N.push(R);return N}function M(){var N=I();if(!(c!=b.charAt(0)||d!=b.charAt(1))){for(var R=2;u!=b.charAt(R)&&(d!=b.charAt(R)||c!=b.charAt(R+1));)++R;if(R+=2,u===b.charAt(R-1))return E("End of comment missing");var q=b.slice(2,R-2);return x+=2,T(q),b=b.slice(R),x+=2,N({type:f,comment:q})}}function _(){var N=I(),R=P(i);if(R){if(M(),!P(r))return E("property missing ':'");var q=P(o),J=N({type:h,property:g(R[0].replace(e,u)),value:q?g(q[0].replace(e,u)):u});return P(s),J}}function F(){var N=[];S(N);for(var R;R=_();)R!==!1&&(N.push(R),S(N));return N}return O(),F()}function g(b){return b?b.replace(a,u):u}return jn=m,jn}var kr;function Xc(){if(kr)return tt;kr=1;var e=tt&&tt.__importDefault||function(i){return i&&i.__esModule?i:{default:i}};Object.defineProperty(tt,"__esModule",{value:!0}),tt.default=n;const t=e(Qc());function n(i,r){let o=null;if(!i||typeof i!="string")return o;const s=(0,t.default)(i),a=typeof r=="function";return s.forEach(l=>{if(l.type!=="declaration")return;const{property:c,value:d}=l;a?r(c,d,l):d&&(o=o||{},o[c]=d)}),o}return tt}var St={},xr;function Zc(){if(xr)return St;xr=1,Object.defineProperty(St,"__esModule",{value:!0}),St.camelCase=void 0;var e=/^--[a-zA-Z0-9_-]+$/,t=/-([a-z])/g,n=/^[^-]+$/,i=/^-(webkit|moz|ms|o|khtml)-/,r=/^-(ms)-/,o=function(c){return!c||n.test(c)||e.test(c)},s=function(c,d){return d.toUpperCase()},a=function(c,d){return"".concat(d,"-")},l=function(c,d){return d===void 0&&(d={}),o(c)?c:(c=c.toLowerCase(),d.reactCompat?c=c.replace(r,a):c=c.replace(i,a),c.replace(t,s))};return St.camelCase=l,St}var At,vr;function eu(){if(vr)return At;vr=1;var e=At&&At.__importDefault||function(r){return r&&r.__esModule?r:{default:r}},t=e(Xc()),n=Zc();function i(r,o){var s={};return!r||typeof r!="string"||(0,t.default)(r,function(a,l){a&&l&&(s[(0,n.camelCase)(a,o)]=l)}),s}return i.default=i,At=i,At}var tu=eu();const nu=ro(tu),os=ss("end"),Mi=ss("start");function ss(e){return t;function t(n){const i=n&&n.position&&n.position[e]||{};if(typeof i.line=="number"&&i.line>0&&typeof i.column=="number"&&i.column>0)return{line:i.line,column:i.column,offset:typeof i.offset=="number"&&i.offset>-1?i.offset:void 0}}}function iu(e){const t=Mi(e),n=os(e);if(t&&n)return{start:t,end:n}}function Lt(e){return!e||typeof e!="object"?"":"position"in e||"type"in e?Sr(e.position):"start"in e||"end"in e?Sr(e):"line"in e||"column"in e?ci(e):""}function ci(e){return Ar(e&&e.line)+":"+Ar(e&&e.column)}function Sr(e){return ci(e&&e.start)+"-"+ci(e&&e.end)}function Ar(e){return e&&typeof e=="number"?e:1}class ie extends Error{constructor(t,n,i){super(),typeof n=="string"&&(i=n,n=void 0);let r="",o={},s=!1;if(n&&("line"in n&&"column"in n?o={place:n}:"start"in n&&"end"in n?o={place:n}:"type"in n?o={ancestors:[n],place:n.position}:o={...n}),typeof t=="string"?r=t:!o.cause&&t&&(s=!0,r=t.message,o.cause=t),!o.ruleId&&!o.source&&typeof i=="string"){const l=i.indexOf(":");l===-1?o.ruleId=i:(o.source=i.slice(0,l),o.ruleId=i.slice(l+1))}if(!o.place&&o.ancestors&&o.ancestors){const l=o.ancestors[o.ancestors.length-1];l&&(o.place=l.position)}const a=o.place&&"start"in o.place?o.place.start:o.place;this.ancestors=o.ancestors||void 0,this.cause=o.cause||void 0,this.column=a?a.column:void 0,this.fatal=void 0,this.file="",this.message=r,this.line=a?a.line:void 0,this.name=Lt(o.place)||"1:1",this.place=o.place||void 0,this.reason=this.message,this.ruleId=o.ruleId||void 0,this.source=o.source||void 0,this.stack=s&&o.cause&&typeof o.cause.stack=="string"?o.cause.stack:"",this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0}}ie.prototype.file="";ie.prototype.name="";ie.prototype.reason="";ie.prototype.message="";ie.prototype.stack="";ie.prototype.column=void 0;ie.prototype.line=void 0;ie.prototype.ancestors=void 0;ie.prototype.cause=void 0;ie.prototype.fatal=void 0;ie.prototype.place=void 0;ie.prototype.ruleId=void 0;ie.prototype.source=void 0;const Ri={}.hasOwnProperty,ru=new Map,ou=/[A-Z]/g,su=new Set(["table","tbody","thead","tfoot","tr"]),au=new Set(["td","th"]),as="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function lu(e,t){if(!t||t.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const n=t.filePath||void 0;let i;if(t.development){if(typeof t.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");i=gu(n,t.jsxDEV)}else{if(typeof t.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof t.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");i=mu(n,t.jsx,t.jsxs)}const r={Fragment:t.Fragment,ancestors:[],components:t.components||{},create:i,elementAttributeNameCase:t.elementAttributeNameCase||"react",evaluater:t.createEvaluater?t.createEvaluater():void 0,filePath:n,ignoreInvalidStyle:t.ignoreInvalidStyle||!1,passKeys:t.passKeys!==!1,passNode:t.passNode||!1,schema:t.space==="svg"?_i:Yc,stylePropertyNameCase:t.stylePropertyNameCase||"dom",tableCellAlignToStyle:t.tableCellAlignToStyle!==!1},o=ls(r,e,void 0);return o&&typeof o!="string"?o:r.create(e,r.Fragment,{children:o||void 0},void 0)}function ls(e,t,n){if(t.type==="element")return cu(e,t,n);if(t.type==="mdxFlowExpression"||t.type==="mdxTextExpression")return uu(e,t);if(t.type==="mdxJsxFlowElement"||t.type==="mdxJsxTextElement")return hu(e,t,n);if(t.type==="mdxjsEsm")return du(e,t);if(t.type==="root")return fu(e,t,n);if(t.type==="text")return pu(e,t)}function cu(e,t,n){const i=e.schema;let r=i;t.tagName.toLowerCase()==="svg"&&i.space==="html"&&(r=_i,e.schema=r),e.ancestors.push(t);const o=us(e,t.tagName,!1),s=yu(e,t);let a=Ni(e,t);return su.has(t.tagName)&&(a=a.filter(function(l){return typeof l=="string"?!Bc(l):!0})),cs(e,s,o,t),Oi(s,a),e.ancestors.pop(),e.schema=i,e.create(t,o,s,n)}function uu(e,t){if(t.data&&t.data.estree&&e.evaluater){const i=t.data.estree.body[0];return i.type,e.evaluater.evaluateExpression(i.expression)}Nt(e,t.position)}function du(e,t){if(t.data&&t.data.estree&&e.evaluater)return e.evaluater.evaluateProgram(t.data.estree);Nt(e,t.position)}function hu(e,t,n){const i=e.schema;let r=i;t.name==="svg"&&i.space==="html"&&(r=_i,e.schema=r),e.ancestors.push(t);const o=t.name===null?e.Fragment:us(e,t.name,!0),s=bu(e,t),a=Ni(e,t);return cs(e,s,o,t),Oi(s,a),e.ancestors.pop(),e.schema=i,e.create(t,o,s,n)}function fu(e,t,n){const i={};return Oi(i,Ni(e,t)),e.create(t,e.Fragment,i,n)}function pu(e,t){return t.value}function cs(e,t,n,i){typeof n!="string"&&n!==e.Fragment&&e.passNode&&(t.node=i)}function Oi(e,t){if(t.length>0){const n=t.length>1?t:t[0];n&&(e.children=n)}}function mu(e,t,n){return i;function i(r,o,s,a){const c=Array.isArray(s.children)?n:t;return a?c(o,s,a):c(o,s)}}function gu(e,t){return n;function n(i,r,o,s){const a=Array.isArray(o.children),l=Mi(i);return t(r,o,s,a,{columnNumber:l?l.column-1:void 0,fileName:e,lineNumber:l?l.line:void 0},void 0)}}function yu(e,t){const n={};let i,r;for(r in t.properties)if(r!=="children"&&Ri.call(t.properties,r)){const o=wu(e,r,t.properties[r]);if(o){const[s,a]=o;e.tableCellAlignToStyle&&s==="align"&&typeof a=="string"&&au.has(t.tagName)?i=a:n[s]=a}}if(i){const o=n.style||(n.style={});o[e.stylePropertyNameCase==="css"?"text-align":"textAlign"]=i}return n}function bu(e,t){const n={};for(const i of t.attributes)if(i.type==="mdxJsxExpressionAttribute")if(i.data&&i.data.estree&&e.evaluater){const o=i.data.estree.body[0];o.type;const s=o.expression;s.type;const a=s.properties[0];a.type,Object.assign(n,e.evaluater.evaluateExpression(a.argument))}else Nt(e,t.position);else{const r=i.name;let o;if(i.value&&typeof i.value=="object")if(i.value.data&&i.value.data.estree&&e.evaluater){const a=i.value.data.estree.body[0];a.type,o=e.evaluater.evaluateExpression(a.expression)}else Nt(e,t.position);else o=i.value===null?!0:i.value;n[r]=o}return n}function Ni(e,t){const n=[];let i=-1;const r=e.passKeys?new Map:ru;for(;++i<t.children.length;){const o=t.children[i];let s;if(e.passKeys){const l=o.type==="element"?o.tagName:o.type==="mdxJsxFlowElement"||o.type==="mdxJsxTextElement"?o.name:void 0;if(l){const c=r.get(l)||0;s=l+"-"+c,r.set(l,c+1)}}const a=ls(e,o,s);a!==void 0&&n.push(a)}return n}function wu(e,t,n){const i=Wc(e.schema,t);if(!(n==null||typeof n=="number"&&Number.isNaN(n))){if(Array.isArray(n)&&(n=i.commaSeparated?Rc(n):Jc(n)),i.property==="style"){let r=typeof n=="object"?n:ku(e,String(n));return e.stylePropertyNameCase==="css"&&(r=xu(r)),["style",r]}return[e.elementAttributeNameCase==="react"&&i.space?Hc[i.property]||i.property:i.attribute,n]}}function ku(e,t){try{return nu(t,{reactCompat:!0})}catch(n){if(e.ignoreInvalidStyle)return{};const i=n,r=new ie("Cannot parse `style` attribute",{ancestors:e.ancestors,cause:i,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw r.file=e.filePath||void 0,r.url=as+"#cannot-parse-style-attribute",r}}function us(e,t,n){let i;if(!n)i={type:"Literal",value:t};else if(t.includes(".")){const r=t.split(".");let o=-1,s;for(;++o<r.length;){const a=mr(r[o])?{type:"Identifier",name:r[o]}:{type:"Literal",value:r[o]};s=s?{type:"MemberExpression",object:s,property:a,computed:!!(o&&a.type==="Literal"),optional:!1}:a}i=s}else i=mr(t)&&!/^[a-z]/.test(t)?{type:"Identifier",name:t}:{type:"Literal",value:t};if(i.type==="Literal"){const r=i.value;return Ri.call(e.components,r)?e.components[r]:r}if(e.evaluater)return e.evaluater.evaluateExpression(i);Nt(e)}function Nt(e,t){const n=new ie("Cannot handle MDX estrees without `createEvaluater`",{ancestors:e.ancestors,place:t,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw n.file=e.filePath||void 0,n.url=as+"#cannot-handle-mdx-estrees-without-createevaluater",n}function xu(e){const t={};let n;for(n in e)Ri.call(e,n)&&(t[vu(n)]=e[n]);return t}function vu(e){let t=e.replace(ou,Su);return t.slice(0,3)==="ms-"&&(t="-"+t),t}function Su(e){return"-"+e.toLowerCase()}const Fn={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},Au={};function ji(e,t){const n=Au,i=typeof n.includeImageAlt=="boolean"?n.includeImageAlt:!0,r=typeof n.includeHtml=="boolean"?n.includeHtml:!0;return ds(e,i,r)}function ds(e,t,n){if(Iu(e)){if("value"in e)return e.type==="html"&&!n?"":e.value;if(t&&"alt"in e&&e.alt)return e.alt;if("children"in e)return Ir(e.children,t,n)}return Array.isArray(e)?Ir(e,t,n):""}function Ir(e,t,n){const i=[];let r=-1;for(;++r<e.length;)i[r]=ds(e[r],t,n);return i.join("")}function Iu(e){return!!(e&&typeof e=="object")}const Cr=document.createElement("i");function Fi(e){const t="&"+e+";";Cr.innerHTML=t;const n=Cr.textContent;return n.charCodeAt(n.length-1)===59&&e!=="semi"||n===t?!1:n}function he(e,t,n,i){const r=e.length;let o=0,s;if(t<0?t=-t>r?0:r+t:t=t>r?r:t,n=n>0?n:0,i.length<1e4)s=Array.from(i),s.unshift(t,n),e.splice(...s);else for(n&&e.splice(t,n);o<i.length;)s=i.slice(o,o+1e4),s.unshift(t,0),e.splice(...s),o+=1e4,t+=1e4}function pe(e,t){return e.length>0?(he(e,e.length,0,t),e):t}const Tr={}.hasOwnProperty;function hs(e){const t={};let n=-1;for(;++n<e.length;)Cu(t,e[n]);return t}function Cu(e,t){let n;for(n in t){const r=(Tr.call(e,n)?e[n]:void 0)||(e[n]={}),o=t[n];let s;if(o)for(s in o){Tr.call(r,s)||(r[s]=[]);const a=o[s];Tu(r[s],Array.isArray(a)?a:a?[a]:[])}}}function Tu(e,t){let n=-1;const i=[];for(;++n<t.length;)(t[n].add==="after"?e:i).push(t[n]);he(e,0,0,i)}function fs(e,t){const n=Number.parseInt(e,t);return n<9||n===11||n>13&&n<32||n>126&&n<160||n>55295&&n<57344||n>64975&&n<65008||(n&65535)===65535||(n&65535)===65534||n>1114111?"�":String.fromCodePoint(n)}function ve(e){return e.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const oe=je(/[A-Za-z]/),ne=je(/[\dA-Za-z]/),Eu=je(/[#-'*+\--9=?A-Z^-~]/);function un(e){return e!==null&&(e<32||e===127)}const ui=je(/\d/),Pu=je(/[\dA-Fa-f]/),Du=je(/[!-/:-@[-`{-~]/);function j(e){return e!==null&&e<-2}function G(e){return e!==null&&(e<0||e===32)}function $(e){return e===-2||e===-1||e===32}const An=je(new RegExp("\\p{P}|\\p{S}","u")),Ke=je(/\s/);function je(e){return t;function t(n){return n!==null&&n>-1&&e.test(String.fromCharCode(n))}}function bt(e){const t=[];let n=-1,i=0,r=0;for(;++n<e.length;){const o=e.charCodeAt(n);let s="";if(o===37&&ne(e.charCodeAt(n+1))&&ne(e.charCodeAt(n+2)))r=2;else if(o<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(o))||(s=String.fromCharCode(o));else if(o>55295&&o<57344){const a=e.charCodeAt(n+1);o<56320&&a>56319&&a<57344?(s=String.fromCharCode(o,a),r=1):s="�"}else s=String.fromCharCode(o);s&&(t.push(e.slice(i,n),encodeURIComponent(s)),i=n+r+1,s=""),r&&(n+=r,r=0)}return t.join("")+e.slice(i)}function V(e,t,n,i){const r=i?i-1:Number.POSITIVE_INFINITY;let o=0;return s;function s(l){return $(l)?(e.enter(n),a(l)):t(l)}function a(l){return $(l)&&o++<r?(e.consume(l),a):(e.exit(n),t(l))}}const Lu={tokenize:_u};function _u(e){const t=e.attempt(this.parser.constructs.contentInitial,i,r);let n;return t;function i(a){if(a===null){e.consume(a);return}return e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),V(e,t,"linePrefix")}function r(a){return e.enter("paragraph"),o(a)}function o(a){const l=e.enter("chunkText",{contentType:"text",previous:n});return n&&(n.next=l),n=l,s(a)}function s(a){if(a===null){e.exit("chunkText"),e.exit("paragraph"),e.consume(a);return}return j(a)?(e.consume(a),e.exit("chunkText"),o):(e.consume(a),s)}}const Mu={tokenize:Ru},Er={tokenize:Ou};function Ru(e){const t=this,n=[];let i=0,r,o,s;return a;function a(x){if(i<n.length){const T=n[i];return t.containerState=T[1],e.attempt(T[0].continuation,l,c)(x)}return c(x)}function l(x){if(i++,t.containerState._closeFlow){t.containerState._closeFlow=void 0,r&&k();const T=t.events.length;let I=T,v;for(;I--;)if(t.events[I][0]==="exit"&&t.events[I][1].type==="chunkFlow"){v=t.events[I][1].end;break}p(i);let E=T;for(;E<t.events.length;)t.events[E][1].end={...v},E++;return he(t.events,I+1,0,t.events.slice(T)),t.events.length=E,c(x)}return a(x)}function c(x){if(i===n.length){if(!r)return f(x);if(r.currentConstruct&&r.currentConstruct.concrete)return m(x);t.interrupt=!!(r.currentConstruct&&!r._gfmTableDynamicInterruptHack)}return t.containerState={},e.check(Er,d,u)(x)}function d(x){return r&&k(),p(i),f(x)}function u(x){return t.parser.lazy[t.now().line]=i!==n.length,s=t.now().offset,m(x)}function f(x){return t.containerState={},e.attempt(Er,h,m)(x)}function h(x){return i++,n.push([t.currentConstruct,t.containerState]),f(x)}function m(x){if(x===null){r&&k(),p(0),e.consume(x);return}return r=r||t.parser.flow(t.now()),e.enter("chunkFlow",{_tokenizer:r,contentType:"flow",previous:o}),g(x)}function g(x){if(x===null){b(e.exit("chunkFlow"),!0),p(0),e.consume(x);return}return j(x)?(e.consume(x),b(e.exit("chunkFlow")),i=0,t.interrupt=void 0,a):(e.consume(x),g)}function b(x,T){const I=t.sliceStream(x);if(T&&I.push(null),x.previous=o,o&&(o.next=x),o=x,r.defineSkip(x.start),r.write(I),t.parser.lazy[x.start.line]){let v=r.events.length;for(;v--;)if(r.events[v][1].start.offset<s&&(!r.events[v][1].end||r.events[v][1].end.offset>s))return;const E=t.events.length;let P=E,O,S;for(;P--;)if(t.events[P][0]==="exit"&&t.events[P][1].type==="chunkFlow"){if(O){S=t.events[P][1].end;break}O=!0}for(p(i),v=E;v<t.events.length;)t.events[v][1].end={...S},v++;he(t.events,P+1,0,t.events.slice(E)),t.events.length=v}}function p(x){let T=n.length;for(;T-- >x;){const I=n[T];t.containerState=I[1],I[0].exit.call(t,e)}n.length=x}function k(){r.write([null]),o=void 0,r=void 0,t.containerState._closeFlow=void 0}}function Ou(e,t,n){return V(e,e.attempt(this.parser.constructs.document,t,n),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function dt(e){if(e===null||G(e)||Ke(e))return 1;if(An(e))return 2}function In(e,t,n){const i=[];let r=-1;for(;++r<e.length;){const o=e[r].resolveAll;o&&!i.includes(o)&&(t=o(t,n),i.push(o))}return t}const di={name:"attention",resolveAll:Nu,tokenize:ju};function Nu(e,t){let n=-1,i,r,o,s,a,l,c,d;for(;++n<e.length;)if(e[n][0]==="enter"&&e[n][1].type==="attentionSequence"&&e[n][1]._close){for(i=n;i--;)if(e[i][0]==="exit"&&e[i][1].type==="attentionSequence"&&e[i][1]._open&&t.sliceSerialize(e[i][1]).charCodeAt(0)===t.sliceSerialize(e[n][1]).charCodeAt(0)){if((e[i][1]._close||e[n][1]._open)&&(e[n][1].end.offset-e[n][1].start.offset)%3&&!((e[i][1].end.offset-e[i][1].start.offset+e[n][1].end.offset-e[n][1].start.offset)%3))continue;l=e[i][1].end.offset-e[i][1].start.offset>1&&e[n][1].end.offset-e[n][1].start.offset>1?2:1;const u={...e[i][1].end},f={...e[n][1].start};Pr(u,-l),Pr(f,l),s={type:l>1?"strongSequence":"emphasisSequence",start:u,end:{...e[i][1].end}},a={type:l>1?"strongSequence":"emphasisSequence",start:{...e[n][1].start},end:f},o={type:l>1?"strongText":"emphasisText",start:{...e[i][1].end},end:{...e[n][1].start}},r={type:l>1?"strong":"emphasis",start:{...s.start},end:{...a.end}},e[i][1].end={...s.start},e[n][1].start={...a.end},c=[],e[i][1].end.offset-e[i][1].start.offset&&(c=pe(c,[["enter",e[i][1],t],["exit",e[i][1],t]])),c=pe(c,[["enter",r,t],["enter",s,t],["exit",s,t],["enter",o,t]]),c=pe(c,In(t.parser.constructs.insideSpan.null,e.slice(i+1,n),t)),c=pe(c,[["exit",o,t],["enter",a,t],["exit",a,t],["exit",r,t]]),e[n][1].end.offset-e[n][1].start.offset?(d=2,c=pe(c,[["enter",e[n][1],t],["exit",e[n][1],t]])):d=0,he(e,i-1,n-i+3,c),n=i+c.length-d-2;break}}for(n=-1;++n<e.length;)e[n][1].type==="attentionSequence"&&(e[n][1].type="data");return e}function ju(e,t){const n=this.parser.constructs.attentionMarkers.null,i=this.previous,r=dt(i);let o;return s;function s(l){return o=l,e.enter("attentionSequence"),a(l)}function a(l){if(l===o)return e.consume(l),a;const c=e.exit("attentionSequence"),d=dt(l),u=!d||d===2&&r||n.includes(l),f=!r||r===2&&d||n.includes(i);return c._open=!!(o===42?u:u&&(r||!f)),c._close=!!(o===42?f:f&&(d||!u)),t(l)}}function Pr(e,t){e.column+=t,e.offset+=t,e._bufferIndex+=t}const Fu={name:"autolink",tokenize:Bu};function Bu(e,t,n){let i=0;return r;function r(h){return e.enter("autolink"),e.enter("autolinkMarker"),e.consume(h),e.exit("autolinkMarker"),e.enter("autolinkProtocol"),o}function o(h){return oe(h)?(e.consume(h),s):h===64?n(h):c(h)}function s(h){return h===43||h===45||h===46||ne(h)?(i=1,a(h)):c(h)}function a(h){return h===58?(e.consume(h),i=0,l):(h===43||h===45||h===46||ne(h))&&i++<32?(e.consume(h),a):(i=0,c(h))}function l(h){return h===62?(e.exit("autolinkProtocol"),e.enter("autolinkMarker"),e.consume(h),e.exit("autolinkMarker"),e.exit("autolink"),t):h===null||h===32||h===60||un(h)?n(h):(e.consume(h),l)}function c(h){return h===64?(e.consume(h),d):Eu(h)?(e.consume(h),c):n(h)}function d(h){return ne(h)?u(h):n(h)}function u(h){return h===46?(e.consume(h),i=0,d):h===62?(e.exit("autolinkProtocol").type="autolinkEmail",e.enter("autolinkMarker"),e.consume(h),e.exit("autolinkMarker"),e.exit("autolink"),t):f(h)}function f(h){if((h===45||ne(h))&&i++<63){const m=h===45?f:u;return e.consume(h),m}return n(h)}}const Ht={partial:!0,tokenize:zu};function zu(e,t,n){return i;function i(o){return $(o)?V(e,r,"linePrefix")(o):r(o)}function r(o){return o===null||j(o)?t(o):n(o)}}const ps={continuation:{tokenize:$u},exit:Hu,name:"blockQuote",tokenize:Uu};function Uu(e,t,n){const i=this;return r;function r(s){if(s===62){const a=i.containerState;return a.open||(e.enter("blockQuote",{_container:!0}),a.open=!0),e.enter("blockQuotePrefix"),e.enter("blockQuoteMarker"),e.consume(s),e.exit("blockQuoteMarker"),o}return n(s)}function o(s){return $(s)?(e.enter("blockQuotePrefixWhitespace"),e.consume(s),e.exit("blockQuotePrefixWhitespace"),e.exit("blockQuotePrefix"),t):(e.exit("blockQuotePrefix"),t(s))}}function $u(e,t,n){const i=this;return r;function r(s){return $(s)?V(e,o,"linePrefix",i.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(s):o(s)}function o(s){return e.attempt(ps,t,n)(s)}}function Hu(e){e.exit("blockQuote")}const ms={name:"characterEscape",tokenize:Vu};function Vu(e,t,n){return i;function i(o){return e.enter("characterEscape"),e.enter("escapeMarker"),e.consume(o),e.exit("escapeMarker"),r}function r(o){return Du(o)?(e.enter("characterEscapeValue"),e.consume(o),e.exit("characterEscapeValue"),e.exit("characterEscape"),t):n(o)}}const gs={name:"characterReference",tokenize:qu};function qu(e,t,n){const i=this;let r=0,o,s;return a;function a(u){return e.enter("characterReference"),e.enter("characterReferenceMarker"),e.consume(u),e.exit("characterReferenceMarker"),l}function l(u){return u===35?(e.enter("characterReferenceMarkerNumeric"),e.consume(u),e.exit("characterReferenceMarkerNumeric"),c):(e.enter("characterReferenceValue"),o=31,s=ne,d(u))}function c(u){return u===88||u===120?(e.enter("characterReferenceMarkerHexadecimal"),e.consume(u),e.exit("characterReferenceMarkerHexadecimal"),e.enter("characterReferenceValue"),o=6,s=Pu,d):(e.enter("characterReferenceValue"),o=7,s=ui,d(u))}function d(u){if(u===59&&r){const f=e.exit("characterReferenceValue");return s===ne&&!Fi(i.sliceSerialize(f))?n(u):(e.enter("characterReferenceMarker"),e.consume(u),e.exit("characterReferenceMarker"),e.exit("characterReference"),t)}return s(u)&&r++<o?(e.consume(u),d):n(u)}}const Dr={partial:!0,tokenize:Ku},Lr={concrete:!0,name:"codeFenced",tokenize:Wu};function Wu(e,t,n){const i=this,r={partial:!0,tokenize:I};let o=0,s=0,a;return l;function l(v){return c(v)}function c(v){const E=i.events[i.events.length-1];return o=E&&E[1].type==="linePrefix"?E[2].sliceSerialize(E[1],!0).length:0,a=v,e.enter("codeFenced"),e.enter("codeFencedFence"),e.enter("codeFencedFenceSequence"),d(v)}function d(v){return v===a?(s++,e.consume(v),d):s<3?n(v):(e.exit("codeFencedFenceSequence"),$(v)?V(e,u,"whitespace")(v):u(v))}function u(v){return v===null||j(v)?(e.exit("codeFencedFence"),i.interrupt?t(v):e.check(Dr,g,T)(v)):(e.enter("codeFencedFenceInfo"),e.enter("chunkString",{contentType:"string"}),f(v))}function f(v){return v===null||j(v)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),u(v)):$(v)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),V(e,h,"whitespace")(v)):v===96&&v===a?n(v):(e.consume(v),f)}function h(v){return v===null||j(v)?u(v):(e.enter("codeFencedFenceMeta"),e.enter("chunkString",{contentType:"string"}),m(v))}function m(v){return v===null||j(v)?(e.exit("chunkString"),e.exit("codeFencedFenceMeta"),u(v)):v===96&&v===a?n(v):(e.consume(v),m)}function g(v){return e.attempt(r,T,b)(v)}function b(v){return e.enter("lineEnding"),e.consume(v),e.exit("lineEnding"),p}function p(v){return o>0&&$(v)?V(e,k,"linePrefix",o+1)(v):k(v)}function k(v){return v===null||j(v)?e.check(Dr,g,T)(v):(e.enter("codeFlowValue"),x(v))}function x(v){return v===null||j(v)?(e.exit("codeFlowValue"),k(v)):(e.consume(v),x)}function T(v){return e.exit("codeFenced"),t(v)}function I(v,E,P){let O=0;return S;function S(R){return v.enter("lineEnding"),v.consume(R),v.exit("lineEnding"),M}function M(R){return v.enter("codeFencedFence"),$(R)?V(v,_,"linePrefix",i.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(R):_(R)}function _(R){return R===a?(v.enter("codeFencedFenceSequence"),F(R)):P(R)}function F(R){return R===a?(O++,v.consume(R),F):O>=s?(v.exit("codeFencedFenceSequence"),$(R)?V(v,N,"whitespace")(R):N(R)):P(R)}function N(R){return R===null||j(R)?(v.exit("codeFencedFence"),E(R)):P(R)}}}function Ku(e,t,n){const i=this;return r;function r(s){return s===null?n(s):(e.enter("lineEnding"),e.consume(s),e.exit("lineEnding"),o)}function o(s){return i.parser.lazy[i.now().line]?n(s):t(s)}}const Bn={name:"codeIndented",tokenize:Yu},Gu={partial:!0,tokenize:Ju};function Yu(e,t,n){const i=this;return r;function r(c){return e.enter("codeIndented"),V(e,o,"linePrefix",5)(c)}function o(c){const d=i.events[i.events.length-1];return d&&d[1].type==="linePrefix"&&d[2].sliceSerialize(d[1],!0).length>=4?s(c):n(c)}function s(c){return c===null?l(c):j(c)?e.attempt(Gu,s,l)(c):(e.enter("codeFlowValue"),a(c))}function a(c){return c===null||j(c)?(e.exit("codeFlowValue"),s(c)):(e.consume(c),a)}function l(c){return e.exit("codeIndented"),t(c)}}function Ju(e,t,n){const i=this;return r;function r(s){return i.parser.lazy[i.now().line]?n(s):j(s)?(e.enter("lineEnding"),e.consume(s),e.exit("lineEnding"),r):V(e,o,"linePrefix",5)(s)}function o(s){const a=i.events[i.events.length-1];return a&&a[1].type==="linePrefix"&&a[2].sliceSerialize(a[1],!0).length>=4?t(s):j(s)?r(s):n(s)}}const Qu={name:"codeText",previous:Zu,resolve:Xu,tokenize:ed};function Xu(e){let t=e.length-4,n=3,i,r;if((e[n][1].type==="lineEnding"||e[n][1].type==="space")&&(e[t][1].type==="lineEnding"||e[t][1].type==="space")){for(i=n;++i<t;)if(e[i][1].type==="codeTextData"){e[n][1].type="codeTextPadding",e[t][1].type="codeTextPadding",n+=2,t-=2;break}}for(i=n-1,t++;++i<=t;)r===void 0?i!==t&&e[i][1].type!=="lineEnding"&&(r=i):(i===t||e[i][1].type==="lineEnding")&&(e[r][1].type="codeTextData",i!==r+2&&(e[r][1].end=e[i-1][1].end,e.splice(r+2,i-r-2),t-=i-r-2,i=r+2),r=void 0);return e}function Zu(e){return e!==96||this.events[this.events.length-1][1].type==="characterEscape"}function ed(e,t,n){let i=0,r,o;return s;function s(u){return e.enter("codeText"),e.enter("codeTextSequence"),a(u)}function a(u){return u===96?(e.consume(u),i++,a):(e.exit("codeTextSequence"),l(u))}function l(u){return u===null?n(u):u===32?(e.enter("space"),e.consume(u),e.exit("space"),l):u===96?(o=e.enter("codeTextSequence"),r=0,d(u)):j(u)?(e.enter("lineEnding"),e.consume(u),e.exit("lineEnding"),l):(e.enter("codeTextData"),c(u))}function c(u){return u===null||u===32||u===96||j(u)?(e.exit("codeTextData"),l(u)):(e.consume(u),c)}function d(u){return u===96?(e.consume(u),r++,d):r===i?(e.exit("codeTextSequence"),e.exit("codeText"),t(u)):(o.type="codeTextData",c(u))}}class td{constructor(t){this.left=t?[...t]:[],this.right=[]}get(t){if(t<0||t>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+t+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return t<this.left.length?this.left[t]:this.right[this.right.length-t+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(t,n){const i=n??Number.POSITIVE_INFINITY;return i<this.left.length?this.left.slice(t,i):t>this.left.length?this.right.slice(this.right.length-i+this.left.length,this.right.length-t+this.left.length).reverse():this.left.slice(t).concat(this.right.slice(this.right.length-i+this.left.length).reverse())}splice(t,n,i){const r=n||0;this.setCursor(Math.trunc(t));const o=this.right.splice(this.right.length-r,Number.POSITIVE_INFINITY);return i&&It(this.left,i),o.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(t){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(t)}pushMany(t){this.setCursor(Number.POSITIVE_INFINITY),It(this.left,t)}unshift(t){this.setCursor(0),this.right.push(t)}unshiftMany(t){this.setCursor(0),It(this.right,t.reverse())}setCursor(t){if(!(t===this.left.length||t>this.left.length&&this.right.length===0||t<0&&this.left.length===0))if(t<this.left.length){const n=this.left.splice(t,Number.POSITIVE_INFINITY);It(this.right,n.reverse())}else{const n=this.right.splice(this.left.length+this.right.length-t,Number.POSITIVE_INFINITY);It(this.left,n.reverse())}}}function It(e,t){let n=0;if(t.length<1e4)e.push(...t);else for(;n<t.length;)e.push(...t.slice(n,n+1e4)),n+=1e4}function ys(e){const t={};let n=-1,i,r,o,s,a,l,c;const d=new td(e);for(;++n<d.length;){for(;n in t;)n=t[n];if(i=d.get(n),n&&i[1].type==="chunkFlow"&&d.get(n-1)[1].type==="listItemPrefix"&&(l=i[1]._tokenizer.events,o=0,o<l.length&&l[o][1].type==="lineEndingBlank"&&(o+=2),o<l.length&&l[o][1].type==="content"))for(;++o<l.length&&l[o][1].type!=="content";)l[o][1].type==="chunkText"&&(l[o][1]._isInFirstContentOfListItem=!0,o++);if(i[0]==="enter")i[1].contentType&&(Object.assign(t,nd(d,n)),n=t[n],c=!0);else if(i[1]._container){for(o=n,r=void 0;o--;)if(s=d.get(o),s[1].type==="lineEnding"||s[1].type==="lineEndingBlank")s[0]==="enter"&&(r&&(d.get(r)[1].type="lineEndingBlank"),s[1].type="lineEnding",r=o);else if(!(s[1].type==="linePrefix"||s[1].type==="listItemIndent"))break;r&&(i[1].end={...d.get(r)[1].start},a=d.slice(r,n),a.unshift(i),d.splice(r,n-r+1,a))}}return he(e,0,Number.POSITIVE_INFINITY,d.slice(0)),!c}function nd(e,t){const n=e.get(t)[1],i=e.get(t)[2];let r=t-1;const o=[];let s=n._tokenizer;s||(s=i.parser[n.contentType](n.start),n._contentTypeTextTrailing&&(s._contentTypeTextTrailing=!0));const a=s.events,l=[],c={};let d,u,f=-1,h=n,m=0,g=0;const b=[g];for(;h;){for(;e.get(++r)[1]!==h;);o.push(r),h._tokenizer||(d=i.sliceStream(h),h.next||d.push(null),u&&s.defineSkip(h.start),h._isInFirstContentOfListItem&&(s._gfmTasklistFirstContentOfListItem=!0),s.write(d),h._isInFirstContentOfListItem&&(s._gfmTasklistFirstContentOfListItem=void 0)),u=h,h=h.next}for(h=n;++f<a.length;)a[f][0]==="exit"&&a[f-1][0]==="enter"&&a[f][1].type===a[f-1][1].type&&a[f][1].start.line!==a[f][1].end.line&&(g=f+1,b.push(g),h._tokenizer=void 0,h.previous=void 0,h=h.next);for(s.events=[],h?(h._tokenizer=void 0,h.previous=void 0):b.pop(),f=b.length;f--;){const p=a.slice(b[f],b[f+1]),k=o.pop();l.push([k,k+p.length-1]),e.splice(k,2,p)}for(l.reverse(),f=-1;++f<l.length;)c[m+l[f][0]]=m+l[f][1],m+=l[f][1]-l[f][0]-1;return c}const id={resolve:od,tokenize:sd},rd={partial:!0,tokenize:ad};function od(e){return ys(e),e}function sd(e,t){let n;return i;function i(a){return e.enter("content"),n=e.enter("chunkContent",{contentType:"content"}),r(a)}function r(a){return a===null?o(a):j(a)?e.check(rd,s,o)(a):(e.consume(a),r)}function o(a){return e.exit("chunkContent"),e.exit("content"),t(a)}function s(a){return e.consume(a),e.exit("chunkContent"),n.next=e.enter("chunkContent",{contentType:"content",previous:n}),n=n.next,r}}function ad(e,t,n){const i=this;return r;function r(s){return e.exit("chunkContent"),e.enter("lineEnding"),e.consume(s),e.exit("lineEnding"),V(e,o,"linePrefix")}function o(s){if(s===null||j(s))return n(s);const a=i.events[i.events.length-1];return!i.parser.constructs.disable.null.includes("codeIndented")&&a&&a[1].type==="linePrefix"&&a[2].sliceSerialize(a[1],!0).length>=4?t(s):e.interrupt(i.parser.constructs.flow,n,t)(s)}}function bs(e,t,n,i,r,o,s,a,l){const c=l||Number.POSITIVE_INFINITY;let d=0;return u;function u(p){return p===60?(e.enter(i),e.enter(r),e.enter(o),e.consume(p),e.exit(o),f):p===null||p===32||p===41||un(p)?n(p):(e.enter(i),e.enter(s),e.enter(a),e.enter("chunkString",{contentType:"string"}),g(p))}function f(p){return p===62?(e.enter(o),e.consume(p),e.exit(o),e.exit(r),e.exit(i),t):(e.enter(a),e.enter("chunkString",{contentType:"string"}),h(p))}function h(p){return p===62?(e.exit("chunkString"),e.exit(a),f(p)):p===null||p===60||j(p)?n(p):(e.consume(p),p===92?m:h)}function m(p){return p===60||p===62||p===92?(e.consume(p),h):h(p)}function g(p){return!d&&(p===null||p===41||G(p))?(e.exit("chunkString"),e.exit(a),e.exit(s),e.exit(i),t(p)):d<c&&p===40?(e.consume(p),d++,g):p===41?(e.consume(p),d--,g):p===null||p===32||p===40||un(p)?n(p):(e.consume(p),p===92?b:g)}function b(p){return p===40||p===41||p===92?(e.consume(p),g):g(p)}}function ws(e,t,n,i,r,o){const s=this;let a=0,l;return c;function c(h){return e.enter(i),e.enter(r),e.consume(h),e.exit(r),e.enter(o),d}function d(h){return a>999||h===null||h===91||h===93&&!l||h===94&&!a&&"_hiddenFootnoteSupport"in s.parser.constructs?n(h):h===93?(e.exit(o),e.enter(r),e.consume(h),e.exit(r),e.exit(i),t):j(h)?(e.enter("lineEnding"),e.consume(h),e.exit("lineEnding"),d):(e.enter("chunkString",{contentType:"string"}),u(h))}function u(h){return h===null||h===91||h===93||j(h)||a++>999?(e.exit("chunkString"),d(h)):(e.consume(h),l||(l=!$(h)),h===92?f:u)}function f(h){return h===91||h===92||h===93?(e.consume(h),a++,u):u(h)}}function ks(e,t,n,i,r,o){let s;return a;function a(f){return f===34||f===39||f===40?(e.enter(i),e.enter(r),e.consume(f),e.exit(r),s=f===40?41:f,l):n(f)}function l(f){return f===s?(e.enter(r),e.consume(f),e.exit(r),e.exit(i),t):(e.enter(o),c(f))}function c(f){return f===s?(e.exit(o),l(s)):f===null?n(f):j(f)?(e.enter("lineEnding"),e.consume(f),e.exit("lineEnding"),V(e,c,"linePrefix")):(e.enter("chunkString",{contentType:"string"}),d(f))}function d(f){return f===s||f===null||j(f)?(e.exit("chunkString"),c(f)):(e.consume(f),f===92?u:d)}function u(f){return f===s||f===92?(e.consume(f),d):d(f)}}function _t(e,t){let n;return i;function i(r){return j(r)?(e.enter("lineEnding"),e.consume(r),e.exit("lineEnding"),n=!0,i):$(r)?V(e,i,n?"linePrefix":"lineSuffix")(r):t(r)}}const ld={name:"definition",tokenize:ud},cd={partial:!0,tokenize:dd};function ud(e,t,n){const i=this;let r;return o;function o(h){return e.enter("definition"),s(h)}function s(h){return ws.call(i,e,a,n,"definitionLabel","definitionLabelMarker","definitionLabelString")(h)}function a(h){return r=ve(i.sliceSerialize(i.events[i.events.length-1][1]).slice(1,-1)),h===58?(e.enter("definitionMarker"),e.consume(h),e.exit("definitionMarker"),l):n(h)}function l(h){return G(h)?_t(e,c)(h):c(h)}function c(h){return bs(e,d,n,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(h)}function d(h){return e.attempt(cd,u,u)(h)}function u(h){return $(h)?V(e,f,"whitespace")(h):f(h)}function f(h){return h===null||j(h)?(e.exit("definition"),i.parser.defined.push(r),t(h)):n(h)}}function dd(e,t,n){return i;function i(a){return G(a)?_t(e,r)(a):n(a)}function r(a){return ks(e,o,n,"definitionTitle","definitionTitleMarker","definitionTitleString")(a)}function o(a){return $(a)?V(e,s,"whitespace")(a):s(a)}function s(a){return a===null||j(a)?t(a):n(a)}}const hd={name:"hardBreakEscape",tokenize:fd};function fd(e,t,n){return i;function i(o){return e.enter("hardBreakEscape"),e.consume(o),r}function r(o){return j(o)?(e.exit("hardBreakEscape"),t(o)):n(o)}}const pd={name:"headingAtx",resolve:md,tokenize:gd};function md(e,t){let n=e.length-2,i=3,r,o;return e[i][1].type==="whitespace"&&(i+=2),n-2>i&&e[n][1].type==="whitespace"&&(n-=2),e[n][1].type==="atxHeadingSequence"&&(i===n-1||n-4>i&&e[n-2][1].type==="whitespace")&&(n-=i+1===n?2:4),n>i&&(r={type:"atxHeadingText",start:e[i][1].start,end:e[n][1].end},o={type:"chunkText",start:e[i][1].start,end:e[n][1].end,contentType:"text"},he(e,i,n-i+1,[["enter",r,t],["enter",o,t],["exit",o,t],["exit",r,t]])),e}function gd(e,t,n){let i=0;return r;function r(d){return e.enter("atxHeading"),o(d)}function o(d){return e.enter("atxHeadingSequence"),s(d)}function s(d){return d===35&&i++<6?(e.consume(d),s):d===null||G(d)?(e.exit("atxHeadingSequence"),a(d)):n(d)}function a(d){return d===35?(e.enter("atxHeadingSequence"),l(d)):d===null||j(d)?(e.exit("atxHeading"),t(d)):$(d)?V(e,a,"whitespace")(d):(e.enter("atxHeadingText"),c(d))}function l(d){return d===35?(e.consume(d),l):(e.exit("atxHeadingSequence"),a(d))}function c(d){return d===null||d===35||G(d)?(e.exit("atxHeadingText"),a(d)):(e.consume(d),c)}}const yd=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],_r=["pre","script","style","textarea"],bd={concrete:!0,name:"htmlFlow",resolveTo:xd,tokenize:vd},wd={partial:!0,tokenize:Ad},kd={partial:!0,tokenize:Sd};function xd(e){let t=e.length;for(;t--&&!(e[t][0]==="enter"&&e[t][1].type==="htmlFlow"););return t>1&&e[t-2][1].type==="linePrefix"&&(e[t][1].start=e[t-2][1].start,e[t+1][1].start=e[t-2][1].start,e.splice(t-2,2)),e}function vd(e,t,n){const i=this;let r,o,s,a,l;return c;function c(w){return d(w)}function d(w){return e.enter("htmlFlow"),e.enter("htmlFlowData"),e.consume(w),u}function u(w){return w===33?(e.consume(w),f):w===47?(e.consume(w),o=!0,g):w===63?(e.consume(w),r=3,i.interrupt?t:y):oe(w)?(e.consume(w),s=String.fromCharCode(w),b):n(w)}function f(w){return w===45?(e.consume(w),r=2,h):w===91?(e.consume(w),r=5,a=0,m):oe(w)?(e.consume(w),r=4,i.interrupt?t:y):n(w)}function h(w){return w===45?(e.consume(w),i.interrupt?t:y):n(w)}function m(w){const we="CDATA[";return w===we.charCodeAt(a++)?(e.consume(w),a===we.length?i.interrupt?t:_:m):n(w)}function g(w){return oe(w)?(e.consume(w),s=String.fromCharCode(w),b):n(w)}function b(w){if(w===null||w===47||w===62||G(w)){const we=w===47,Fe=s.toLowerCase();return!we&&!o&&_r.includes(Fe)?(r=1,i.interrupt?t(w):_(w)):yd.includes(s.toLowerCase())?(r=6,we?(e.consume(w),p):i.interrupt?t(w):_(w)):(r=7,i.interrupt&&!i.parser.lazy[i.now().line]?n(w):o?k(w):x(w))}return w===45||ne(w)?(e.consume(w),s+=String.fromCharCode(w),b):n(w)}function p(w){return w===62?(e.consume(w),i.interrupt?t:_):n(w)}function k(w){return $(w)?(e.consume(w),k):S(w)}function x(w){return w===47?(e.consume(w),S):w===58||w===95||oe(w)?(e.consume(w),T):$(w)?(e.consume(w),x):S(w)}function T(w){return w===45||w===46||w===58||w===95||ne(w)?(e.consume(w),T):I(w)}function I(w){return w===61?(e.consume(w),v):$(w)?(e.consume(w),I):x(w)}function v(w){return w===null||w===60||w===61||w===62||w===96?n(w):w===34||w===39?(e.consume(w),l=w,E):$(w)?(e.consume(w),v):P(w)}function E(w){return w===l?(e.consume(w),l=null,O):w===null||j(w)?n(w):(e.consume(w),E)}function P(w){return w===null||w===34||w===39||w===47||w===60||w===61||w===62||w===96||G(w)?I(w):(e.consume(w),P)}function O(w){return w===47||w===62||$(w)?x(w):n(w)}function S(w){return w===62?(e.consume(w),M):n(w)}function M(w){return w===null||j(w)?_(w):$(w)?(e.consume(w),M):n(w)}function _(w){return w===45&&r===2?(e.consume(w),q):w===60&&r===1?(e.consume(w),J):w===62&&r===4?(e.consume(w),be):w===63&&r===3?(e.consume(w),y):w===93&&r===5?(e.consume(w),fe):j(w)&&(r===6||r===7)?(e.exit("htmlFlowData"),e.check(wd,Te,F)(w)):w===null||j(w)?(e.exit("htmlFlowData"),F(w)):(e.consume(w),_)}function F(w){return e.check(kd,N,Te)(w)}function N(w){return e.enter("lineEnding"),e.consume(w),e.exit("lineEnding"),R}function R(w){return w===null||j(w)?F(w):(e.enter("htmlFlowData"),_(w))}function q(w){return w===45?(e.consume(w),y):_(w)}function J(w){return w===47?(e.consume(w),s="",ae):_(w)}function ae(w){if(w===62){const we=s.toLowerCase();return _r.includes(we)?(e.consume(w),be):_(w)}return oe(w)&&s.length<8?(e.consume(w),s+=String.fromCharCode(w),ae):_(w)}function fe(w){return w===93?(e.consume(w),y):_(w)}function y(w){return w===62?(e.consume(w),be):w===45&&r===2?(e.consume(w),y):_(w)}function be(w){return w===null||j(w)?(e.exit("htmlFlowData"),Te(w)):(e.consume(w),be)}function Te(w){return e.exit("htmlFlow"),t(w)}}function Sd(e,t,n){const i=this;return r;function r(s){return j(s)?(e.enter("lineEnding"),e.consume(s),e.exit("lineEnding"),o):n(s)}function o(s){return i.parser.lazy[i.now().line]?n(s):t(s)}}function Ad(e,t,n){return i;function i(r){return e.enter("lineEnding"),e.consume(r),e.exit("lineEnding"),e.attempt(Ht,t,n)}}const Id={name:"htmlText",tokenize:Cd};function Cd(e,t,n){const i=this;let r,o,s;return a;function a(y){return e.enter("htmlText"),e.enter("htmlTextData"),e.consume(y),l}function l(y){return y===33?(e.consume(y),c):y===47?(e.consume(y),I):y===63?(e.consume(y),x):oe(y)?(e.consume(y),P):n(y)}function c(y){return y===45?(e.consume(y),d):y===91?(e.consume(y),o=0,m):oe(y)?(e.consume(y),k):n(y)}function d(y){return y===45?(e.consume(y),h):n(y)}function u(y){return y===null?n(y):y===45?(e.consume(y),f):j(y)?(s=u,J(y)):(e.consume(y),u)}function f(y){return y===45?(e.consume(y),h):u(y)}function h(y){return y===62?q(y):y===45?f(y):u(y)}function m(y){const be="CDATA[";return y===be.charCodeAt(o++)?(e.consume(y),o===be.length?g:m):n(y)}function g(y){return y===null?n(y):y===93?(e.consume(y),b):j(y)?(s=g,J(y)):(e.consume(y),g)}function b(y){return y===93?(e.consume(y),p):g(y)}function p(y){return y===62?q(y):y===93?(e.consume(y),p):g(y)}function k(y){return y===null||y===62?q(y):j(y)?(s=k,J(y)):(e.consume(y),k)}function x(y){return y===null?n(y):y===63?(e.consume(y),T):j(y)?(s=x,J(y)):(e.consume(y),x)}function T(y){return y===62?q(y):x(y)}function I(y){return oe(y)?(e.consume(y),v):n(y)}function v(y){return y===45||ne(y)?(e.consume(y),v):E(y)}function E(y){return j(y)?(s=E,J(y)):$(y)?(e.consume(y),E):q(y)}function P(y){return y===45||ne(y)?(e.consume(y),P):y===47||y===62||G(y)?O(y):n(y)}function O(y){return y===47?(e.consume(y),q):y===58||y===95||oe(y)?(e.consume(y),S):j(y)?(s=O,J(y)):$(y)?(e.consume(y),O):q(y)}function S(y){return y===45||y===46||y===58||y===95||ne(y)?(e.consume(y),S):M(y)}function M(y){return y===61?(e.consume(y),_):j(y)?(s=M,J(y)):$(y)?(e.consume(y),M):O(y)}function _(y){return y===null||y===60||y===61||y===62||y===96?n(y):y===34||y===39?(e.consume(y),r=y,F):j(y)?(s=_,J(y)):$(y)?(e.consume(y),_):(e.consume(y),N)}function F(y){return y===r?(e.consume(y),r=void 0,R):y===null?n(y):j(y)?(s=F,J(y)):(e.consume(y),F)}function N(y){return y===null||y===34||y===39||y===60||y===61||y===96?n(y):y===47||y===62||G(y)?O(y):(e.consume(y),N)}function R(y){return y===47||y===62||G(y)?O(y):n(y)}function q(y){return y===62?(e.consume(y),e.exit("htmlTextData"),e.exit("htmlText"),t):n(y)}function J(y){return e.exit("htmlTextData"),e.enter("lineEnding"),e.consume(y),e.exit("lineEnding"),ae}function ae(y){return $(y)?V(e,fe,"linePrefix",i.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(y):fe(y)}function fe(y){return e.enter("htmlTextData"),s(y)}}const Bi={name:"labelEnd",resolveAll:Dd,resolveTo:Ld,tokenize:_d},Td={tokenize:Md},Ed={tokenize:Rd},Pd={tokenize:Od};function Dd(e){let t=-1;const n=[];for(;++t<e.length;){const i=e[t][1];if(n.push(e[t]),i.type==="labelImage"||i.type==="labelLink"||i.type==="labelEnd"){const r=i.type==="labelImage"?4:2;i.type="data",t+=r}}return e.length!==n.length&&he(e,0,e.length,n),e}function Ld(e,t){let n=e.length,i=0,r,o,s,a;for(;n--;)if(r=e[n][1],o){if(r.type==="link"||r.type==="labelLink"&&r._inactive)break;e[n][0]==="enter"&&r.type==="labelLink"&&(r._inactive=!0)}else if(s){if(e[n][0]==="enter"&&(r.type==="labelImage"||r.type==="labelLink")&&!r._balanced&&(o=n,r.type!=="labelLink")){i=2;break}}else r.type==="labelEnd"&&(s=n);const l={type:e[o][1].type==="labelLink"?"link":"image",start:{...e[o][1].start},end:{...e[e.length-1][1].end}},c={type:"label",start:{...e[o][1].start},end:{...e[s][1].end}},d={type:"labelText",start:{...e[o+i+2][1].end},end:{...e[s-2][1].start}};return a=[["enter",l,t],["enter",c,t]],a=pe(a,e.slice(o+1,o+i+3)),a=pe(a,[["enter",d,t]]),a=pe(a,In(t.parser.constructs.insideSpan.null,e.slice(o+i+4,s-3),t)),a=pe(a,[["exit",d,t],e[s-2],e[s-1],["exit",c,t]]),a=pe(a,e.slice(s+1)),a=pe(a,[["exit",l,t]]),he(e,o,e.length,a),e}function _d(e,t,n){const i=this;let r=i.events.length,o,s;for(;r--;)if((i.events[r][1].type==="labelImage"||i.events[r][1].type==="labelLink")&&!i.events[r][1]._balanced){o=i.events[r][1];break}return a;function a(f){return o?o._inactive?u(f):(s=i.parser.defined.includes(ve(i.sliceSerialize({start:o.end,end:i.now()}))),e.enter("labelEnd"),e.enter("labelMarker"),e.consume(f),e.exit("labelMarker"),e.exit("labelEnd"),l):n(f)}function l(f){return f===40?e.attempt(Td,d,s?d:u)(f):f===91?e.attempt(Ed,d,s?c:u)(f):s?d(f):u(f)}function c(f){return e.attempt(Pd,d,u)(f)}function d(f){return t(f)}function u(f){return o._balanced=!0,n(f)}}function Md(e,t,n){return i;function i(u){return e.enter("resource"),e.enter("resourceMarker"),e.consume(u),e.exit("resourceMarker"),r}function r(u){return G(u)?_t(e,o)(u):o(u)}function o(u){return u===41?d(u):bs(e,s,a,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(u)}function s(u){return G(u)?_t(e,l)(u):d(u)}function a(u){return n(u)}function l(u){return u===34||u===39||u===40?ks(e,c,n,"resourceTitle","resourceTitleMarker","resourceTitleString")(u):d(u)}function c(u){return G(u)?_t(e,d)(u):d(u)}function d(u){return u===41?(e.enter("resourceMarker"),e.consume(u),e.exit("resourceMarker"),e.exit("resource"),t):n(u)}}function Rd(e,t,n){const i=this;return r;function r(a){return ws.call(i,e,o,s,"reference","referenceMarker","referenceString")(a)}function o(a){return i.parser.defined.includes(ve(i.sliceSerialize(i.events[i.events.length-1][1]).slice(1,-1)))?t(a):n(a)}function s(a){return n(a)}}function Od(e,t,n){return i;function i(o){return e.enter("reference"),e.enter("referenceMarker"),e.consume(o),e.exit("referenceMarker"),r}function r(o){return o===93?(e.enter("referenceMarker"),e.consume(o),e.exit("referenceMarker"),e.exit("reference"),t):n(o)}}const Nd={name:"labelStartImage",resolveAll:Bi.resolveAll,tokenize:jd};function jd(e,t,n){const i=this;return r;function r(a){return e.enter("labelImage"),e.enter("labelImageMarker"),e.consume(a),e.exit("labelImageMarker"),o}function o(a){return a===91?(e.enter("labelMarker"),e.consume(a),e.exit("labelMarker"),e.exit("labelImage"),s):n(a)}function s(a){return a===94&&"_hiddenFootnoteSupport"in i.parser.constructs?n(a):t(a)}}const Fd={name:"labelStartLink",resolveAll:Bi.resolveAll,tokenize:Bd};function Bd(e,t,n){const i=this;return r;function r(s){return e.enter("labelLink"),e.enter("labelMarker"),e.consume(s),e.exit("labelMarker"),e.exit("labelLink"),o}function o(s){return s===94&&"_hiddenFootnoteSupport"in i.parser.constructs?n(s):t(s)}}const zn={name:"lineEnding",tokenize:zd};function zd(e,t){return n;function n(i){return e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),V(e,t,"linePrefix")}}const on={name:"thematicBreak",tokenize:Ud};function Ud(e,t,n){let i=0,r;return o;function o(c){return e.enter("thematicBreak"),s(c)}function s(c){return r=c,a(c)}function a(c){return c===r?(e.enter("thematicBreakSequence"),l(c)):i>=3&&(c===null||j(c))?(e.exit("thematicBreak"),t(c)):n(c)}function l(c){return c===r?(e.consume(c),i++,l):(e.exit("thematicBreakSequence"),$(c)?V(e,a,"whitespace")(c):a(c))}}const le={continuation:{tokenize:qd},exit:Kd,name:"list",tokenize:Vd},$d={partial:!0,tokenize:Gd},Hd={partial:!0,tokenize:Wd};function Vd(e,t,n){const i=this,r=i.events[i.events.length-1];let o=r&&r[1].type==="linePrefix"?r[2].sliceSerialize(r[1],!0).length:0,s=0;return a;function a(h){const m=i.containerState.type||(h===42||h===43||h===45?"listUnordered":"listOrdered");if(m==="listUnordered"?!i.containerState.marker||h===i.containerState.marker:ui(h)){if(i.containerState.type||(i.containerState.type=m,e.enter(m,{_container:!0})),m==="listUnordered")return e.enter("listItemPrefix"),h===42||h===45?e.check(on,n,c)(h):c(h);if(!i.interrupt||h===49)return e.enter("listItemPrefix"),e.enter("listItemValue"),l(h)}return n(h)}function l(h){return ui(h)&&++s<10?(e.consume(h),l):(!i.interrupt||s<2)&&(i.containerState.marker?h===i.containerState.marker:h===41||h===46)?(e.exit("listItemValue"),c(h)):n(h)}function c(h){return e.enter("listItemMarker"),e.consume(h),e.exit("listItemMarker"),i.containerState.marker=i.containerState.marker||h,e.check(Ht,i.interrupt?n:d,e.attempt($d,f,u))}function d(h){return i.containerState.initialBlankLine=!0,o++,f(h)}function u(h){return $(h)?(e.enter("listItemPrefixWhitespace"),e.consume(h),e.exit("listItemPrefixWhitespace"),f):n(h)}function f(h){return i.containerState.size=o+i.sliceSerialize(e.exit("listItemPrefix"),!0).length,t(h)}}function qd(e,t,n){const i=this;return i.containerState._closeFlow=void 0,e.check(Ht,r,o);function r(a){return i.containerState.furtherBlankLines=i.containerState.furtherBlankLines||i.containerState.initialBlankLine,V(e,t,"listItemIndent",i.containerState.size+1)(a)}function o(a){return i.containerState.furtherBlankLines||!$(a)?(i.containerState.furtherBlankLines=void 0,i.containerState.initialBlankLine=void 0,s(a)):(i.containerState.furtherBlankLines=void 0,i.containerState.initialBlankLine=void 0,e.attempt(Hd,t,s)(a))}function s(a){return i.containerState._closeFlow=!0,i.interrupt=void 0,V(e,e.attempt(le,t,n),"linePrefix",i.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(a)}}function Wd(e,t,n){const i=this;return V(e,r,"listItemIndent",i.containerState.size+1);function r(o){const s=i.events[i.events.length-1];return s&&s[1].type==="listItemIndent"&&s[2].sliceSerialize(s[1],!0).length===i.containerState.size?t(o):n(o)}}function Kd(e){e.exit(this.containerState.type)}function Gd(e,t,n){const i=this;return V(e,r,"listItemPrefixWhitespace",i.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function r(o){const s=i.events[i.events.length-1];return!$(o)&&s&&s[1].type==="listItemPrefixWhitespace"?t(o):n(o)}}const Mr={name:"setextUnderline",resolveTo:Yd,tokenize:Jd};function Yd(e,t){let n=e.length,i,r,o;for(;n--;)if(e[n][0]==="enter"){if(e[n][1].type==="content"){i=n;break}e[n][1].type==="paragraph"&&(r=n)}else e[n][1].type==="content"&&e.splice(n,1),!o&&e[n][1].type==="definition"&&(o=n);const s={type:"setextHeading",start:{...e[i][1].start},end:{...e[e.length-1][1].end}};return e[r][1].type="setextHeadingText",o?(e.splice(r,0,["enter",s,t]),e.splice(o+1,0,["exit",e[i][1],t]),e[i][1].end={...e[o][1].end}):e[i][1]=s,e.push(["exit",s,t]),e}function Jd(e,t,n){const i=this;let r;return o;function o(c){let d=i.events.length,u;for(;d--;)if(i.events[d][1].type!=="lineEnding"&&i.events[d][1].type!=="linePrefix"&&i.events[d][1].type!=="content"){u=i.events[d][1].type==="paragraph";break}return!i.parser.lazy[i.now().line]&&(i.interrupt||u)?(e.enter("setextHeadingLine"),r=c,s(c)):n(c)}function s(c){return e.enter("setextHeadingLineSequence"),a(c)}function a(c){return c===r?(e.consume(c),a):(e.exit("setextHeadingLineSequence"),$(c)?V(e,l,"lineSuffix")(c):l(c))}function l(c){return c===null||j(c)?(e.exit("setextHeadingLine"),t(c)):n(c)}}const Qd={tokenize:Xd};function Xd(e){const t=this,n=e.attempt(Ht,i,e.attempt(this.parser.constructs.flowInitial,r,V(e,e.attempt(this.parser.constructs.flow,r,e.attempt(id,r)),"linePrefix")));return n;function i(o){if(o===null){e.consume(o);return}return e.enter("lineEndingBlank"),e.consume(o),e.exit("lineEndingBlank"),t.currentConstruct=void 0,n}function r(o){if(o===null){e.consume(o);return}return e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),t.currentConstruct=void 0,n}}const Zd={resolveAll:vs()},eh=xs("string"),th=xs("text");function xs(e){return{resolveAll:vs(e==="text"?nh:void 0),tokenize:t};function t(n){const i=this,r=this.parser.constructs[e],o=n.attempt(r,s,a);return s;function s(d){return c(d)?o(d):a(d)}function a(d){if(d===null){n.consume(d);return}return n.enter("data"),n.consume(d),l}function l(d){return c(d)?(n.exit("data"),o(d)):(n.consume(d),l)}function c(d){if(d===null)return!0;const u=r[d];let f=-1;if(u)for(;++f<u.length;){const h=u[f];if(!h.previous||h.previous.call(i,i.previous))return!0}return!1}}}function vs(e){return t;function t(n,i){let r=-1,o;for(;++r<=n.length;)o===void 0?n[r]&&n[r][1].type==="data"&&(o=r,r++):(!n[r]||n[r][1].type!=="data")&&(r!==o+2&&(n[o][1].end=n[r-1][1].end,n.splice(o+2,r-o-2),r=o+2),o=void 0);return e?e(n,i):n}}function nh(e,t){let n=0;for(;++n<=e.length;)if((n===e.length||e[n][1].type==="lineEnding")&&e[n-1][1].type==="data"){const i=e[n-1][1],r=t.sliceStream(i);let o=r.length,s=-1,a=0,l;for(;o--;){const c=r[o];if(typeof c=="string"){for(s=c.length;c.charCodeAt(s-1)===32;)a++,s--;if(s)break;s=-1}else if(c===-2)l=!0,a++;else if(c!==-1){o++;break}}if(t._contentTypeTextTrailing&&n===e.length&&(a=0),a){const c={type:n===e.length||l||a<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:o?s:i.start._bufferIndex+s,_index:i.start._index+o,line:i.end.line,column:i.end.column-a,offset:i.end.offset-a},end:{...i.end}};i.end={...c.start},i.start.offset===i.end.offset?Object.assign(i,c):(e.splice(n,0,["enter",c,t],["exit",c,t]),n+=2)}n++}return e}const ih={42:le,43:le,45:le,48:le,49:le,50:le,51:le,52:le,53:le,54:le,55:le,56:le,57:le,62:ps},rh={91:ld},oh={[-2]:Bn,[-1]:Bn,32:Bn},sh={35:pd,42:on,45:[Mr,on],60:bd,61:Mr,95:on,96:Lr,126:Lr},ah={38:gs,92:ms},lh={[-5]:zn,[-4]:zn,[-3]:zn,33:Nd,38:gs,42:di,60:[Fu,Id],91:Fd,92:[hd,ms],93:Bi,95:di,96:Qu},ch={null:[di,Zd]},uh={null:[42,95]},dh={null:[]},hh=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:uh,contentInitial:rh,disable:dh,document:ih,flow:sh,flowInitial:oh,insideSpan:ch,string:ah,text:lh},Symbol.toStringTag,{value:"Module"}));function fh(e,t,n){let i={_bufferIndex:-1,_index:0,line:n&&n.line||1,column:n&&n.column||1,offset:n&&n.offset||0};const r={},o=[];let s=[],a=[];const l={attempt:E(I),check:E(v),consume:k,enter:x,exit:T,interrupt:E(v,{interrupt:!0})},c={code:null,containerState:{},defineSkip:g,events:[],now:m,parser:e,previous:null,sliceSerialize:f,sliceStream:h,write:u};let d=t.tokenize.call(c,l);return t.resolveAll&&o.push(t),c;function u(M){return s=pe(s,M),b(),s[s.length-1]!==null?[]:(P(t,0),c.events=In(o,c.events,c),c.events)}function f(M,_){return mh(h(M),_)}function h(M){return ph(s,M)}function m(){const{_bufferIndex:M,_index:_,line:F,column:N,offset:R}=i;return{_bufferIndex:M,_index:_,line:F,column:N,offset:R}}function g(M){r[M.line]=M.column,S()}function b(){let M;for(;i._index<s.length;){const _=s[i._index];if(typeof _=="string")for(M=i._index,i._bufferIndex<0&&(i._bufferIndex=0);i._index===M&&i._bufferIndex<_.length;)p(_.charCodeAt(i._bufferIndex));else p(_)}}function p(M){d=d(M)}function k(M){j(M)?(i.line++,i.column=1,i.offset+=M===-3?2:1,S()):M!==-1&&(i.column++,i.offset++),i._bufferIndex<0?i._index++:(i._bufferIndex++,i._bufferIndex===s[i._index].length&&(i._bufferIndex=-1,i._index++)),c.previous=M}function x(M,_){const F=_||{};return F.type=M,F.start=m(),c.events.push(["enter",F,c]),a.push(F),F}function T(M){const _=a.pop();return _.end=m(),c.events.push(["exit",_,c]),_}function I(M,_){P(M,_.from)}function v(M,_){_.restore()}function E(M,_){return F;function F(N,R,q){let J,ae,fe,y;return Array.isArray(N)?Te(N):"tokenize"in N?Te([N]):be(N);function be(te){return wt;function wt(Me){const Je=Me!==null&&te[Me],Qe=Me!==null&&te.null,qt=[...Array.isArray(Je)?Je:Je?[Je]:[],...Array.isArray(Qe)?Qe:Qe?[Qe]:[]];return Te(qt)(Me)}}function Te(te){return J=te,ae=0,te.length===0?q:w(te[ae])}function w(te){return wt;function wt(Me){return y=O(),fe=te,te.partial||(c.currentConstruct=te),te.name&&c.parser.constructs.disable.null.includes(te.name)?Fe():te.tokenize.call(_?Object.assign(Object.create(c),_):c,l,we,Fe)(Me)}}function we(te){return M(fe,y),R}function Fe(te){return y.restore(),++ae<J.length?w(J[ae]):q}}}function P(M,_){M.resolveAll&&!o.includes(M)&&o.push(M),M.resolve&&he(c.events,_,c.events.length-_,M.resolve(c.events.slice(_),c)),M.resolveTo&&(c.events=M.resolveTo(c.events,c))}function O(){const M=m(),_=c.previous,F=c.currentConstruct,N=c.events.length,R=Array.from(a);return{from:N,restore:q};function q(){i=M,c.previous=_,c.currentConstruct=F,c.events.length=N,a=R,S()}}function S(){i.line in r&&i.column<2&&(i.column=r[i.line],i.offset+=r[i.line]-1)}}function ph(e,t){const n=t.start._index,i=t.start._bufferIndex,r=t.end._index,o=t.end._bufferIndex;let s;if(n===r)s=[e[n].slice(i,o)];else{if(s=e.slice(n,r),i>-1){const a=s[0];typeof a=="string"?s[0]=a.slice(i):s.shift()}o>0&&s.push(e[r].slice(0,o))}return s}function mh(e,t){let n=-1;const i=[];let r;for(;++n<e.length;){const o=e[n];let s;if(typeof o=="string")s=o;else switch(o){case-5:{s="\r";break}case-4:{s=`
`;break}case-3:{s=`\r
`;break}case-2:{s=t?" ":"	";break}case-1:{if(!t&&r)continue;s=" ";break}default:s=String.fromCharCode(o)}r=o===-2,i.push(s)}return i.join("")}function gh(e){const i={constructs:hs([hh,...(e||{}).extensions||[]]),content:r(Lu),defined:[],document:r(Mu),flow:r(Qd),lazy:{},string:r(eh),text:r(th)};return i;function r(o){return s;function s(a){return fh(i,o,a)}}}function yh(e){for(;!ys(e););return e}const Rr=/[\0\t\n\r]/g;function bh(){let e=1,t="",n=!0,i;return r;function r(o,s,a){const l=[];let c,d,u,f,h;for(o=t+(typeof o=="string"?o.toString():new TextDecoder(s||void 0).decode(o)),u=0,t="",n&&(o.charCodeAt(0)===65279&&u++,n=void 0);u<o.length;){if(Rr.lastIndex=u,c=Rr.exec(o),f=c&&c.index!==void 0?c.index:o.length,h=o.charCodeAt(f),!c){t=o.slice(u);break}if(h===10&&u===f&&i)l.push(-3),i=void 0;else switch(i&&(l.push(-5),i=void 0),u<f&&(l.push(o.slice(u,f)),e+=f-u),h){case 0:{l.push(65533),e++;break}case 9:{for(d=Math.ceil(e/4)*4,l.push(-2);e++<d;)l.push(-1);break}case 10:{l.push(-4),e=1;break}default:i=!0,e=1}u=f+1}return a&&(i&&l.push(-5),t&&l.push(t),l.push(null)),l}}const wh=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function kh(e){return e.replace(wh,xh)}function xh(e,t,n){if(t)return t;if(n.charCodeAt(0)===35){const r=n.charCodeAt(1),o=r===120||r===88;return fs(n.slice(o?2:1),o?16:10)}return Fi(n)||e}const Ss={}.hasOwnProperty;function vh(e,t,n){return t&&typeof t=="object"&&(n=t,t=void 0),Sh(n)(yh(gh(n).document().write(bh()(e,t,!0))))}function Sh(e){const t={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:o(Xi),autolinkProtocol:O,autolinkEmail:O,atxHeading:o(Yi),blockQuote:o(Qe),characterEscape:O,characterReference:O,codeFenced:o(qt),codeFencedFenceInfo:s,codeFencedFenceMeta:s,codeIndented:o(qt,s),codeText:o(ia,s),codeTextData:O,data:O,codeFlowValue:O,definition:o(ra),definitionDestinationString:s,definitionLabelString:s,definitionTitleString:s,emphasis:o(oa),hardBreakEscape:o(Ji),hardBreakTrailing:o(Ji),htmlFlow:o(Qi,s),htmlFlowData:O,htmlText:o(Qi,s),htmlTextData:O,image:o(sa),label:s,link:o(Xi),listItem:o(aa),listItemValue:f,listOrdered:o(Zi,u),listUnordered:o(Zi),paragraph:o(la),reference:w,referenceString:s,resourceDestinationString:s,resourceTitleString:s,setextHeading:o(Yi),strong:o(ca),thematicBreak:o(da)},exit:{atxHeading:l(),atxHeadingSequence:I,autolink:l(),autolinkEmail:Je,autolinkProtocol:Me,blockQuote:l(),characterEscapeValue:S,characterReferenceMarkerHexadecimal:Fe,characterReferenceMarkerNumeric:Fe,characterReferenceValue:te,characterReference:wt,codeFenced:l(b),codeFencedFence:g,codeFencedFenceInfo:h,codeFencedFenceMeta:m,codeFlowValue:S,codeIndented:l(p),codeText:l(R),codeTextData:S,data:S,definition:l(),definitionDestinationString:T,definitionLabelString:k,definitionTitleString:x,emphasis:l(),hardBreakEscape:l(_),hardBreakTrailing:l(_),htmlFlow:l(F),htmlFlowData:S,htmlText:l(N),htmlTextData:S,image:l(J),label:fe,labelText:ae,lineEnding:M,link:l(q),listItem:l(),listOrdered:l(),listUnordered:l(),paragraph:l(),referenceString:we,resourceDestinationString:y,resourceTitleString:be,resource:Te,setextHeading:l(P),setextHeadingLineSequence:E,setextHeadingText:v,strong:l(),thematicBreak:l()}};As(t,(e||{}).mdastExtensions||[]);const n={};return i;function i(C){let L={type:"root",children:[]};const z={stack:[L],tokenStack:[],config:t,enter:a,exit:c,buffer:s,resume:d,data:n},H=[];let W=-1;for(;++W<C.length;)if(C[W][1].type==="listOrdered"||C[W][1].type==="listUnordered")if(C[W][0]==="enter")H.push(W);else{const ke=H.pop();W=r(C,ke,W)}for(W=-1;++W<C.length;){const ke=t[C[W][0]];Ss.call(ke,C[W][1].type)&&ke[C[W][1].type].call(Object.assign({sliceSerialize:C[W][2].sliceSerialize},z),C[W][1])}if(z.tokenStack.length>0){const ke=z.tokenStack[z.tokenStack.length-1];(ke[1]||Or).call(z,void 0,ke[0])}for(L.position={start:Re(C.length>0?C[0][1].start:{line:1,column:1,offset:0}),end:Re(C.length>0?C[C.length-2][1].end:{line:1,column:1,offset:0})},W=-1;++W<t.transforms.length;)L=t.transforms[W](L)||L;return L}function r(C,L,z){let H=L-1,W=-1,ke=!1,Be,Ee,kt,xt;for(;++H<=z;){const ue=C[H];switch(ue[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{ue[0]==="enter"?W++:W--,xt=void 0;break}case"lineEndingBlank":{ue[0]==="enter"&&(Be&&!xt&&!W&&!kt&&(kt=H),xt=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:xt=void 0}if(!W&&ue[0]==="enter"&&ue[1].type==="listItemPrefix"||W===-1&&ue[0]==="exit"&&(ue[1].type==="listUnordered"||ue[1].type==="listOrdered")){if(Be){let Xe=H;for(Ee=void 0;Xe--;){const Pe=C[Xe];if(Pe[1].type==="lineEnding"||Pe[1].type==="lineEndingBlank"){if(Pe[0]==="exit")continue;Ee&&(C[Ee][1].type="lineEndingBlank",ke=!0),Pe[1].type="lineEnding",Ee=Xe}else if(!(Pe[1].type==="linePrefix"||Pe[1].type==="blockQuotePrefix"||Pe[1].type==="blockQuotePrefixWhitespace"||Pe[1].type==="blockQuoteMarker"||Pe[1].type==="listItemIndent"))break}kt&&(!Ee||kt<Ee)&&(Be._spread=!0),Be.end=Object.assign({},Ee?C[Ee][1].start:ue[1].end),C.splice(Ee||H,0,["exit",Be,ue[2]]),H++,z++}if(ue[1].type==="listItemPrefix"){const Xe={type:"listItem",_spread:!1,start:Object.assign({},ue[1].start),end:void 0};Be=Xe,C.splice(H,0,["enter",Xe,ue[2]]),H++,z++,kt=void 0,xt=!0}}}return C[L][1]._spread=ke,z}function o(C,L){return z;function z(H){a.call(this,C(H),H),L&&L.call(this,H)}}function s(){this.stack.push({type:"fragment",children:[]})}function a(C,L,z){this.stack[this.stack.length-1].children.push(C),this.stack.push(C),this.tokenStack.push([L,z||void 0]),C.position={start:Re(L.start),end:void 0}}function l(C){return L;function L(z){C&&C.call(this,z),c.call(this,z)}}function c(C,L){const z=this.stack.pop(),H=this.tokenStack.pop();if(H)H[0].type!==C.type&&(L?L.call(this,C,H[0]):(H[1]||Or).call(this,C,H[0]));else throw new Error("Cannot close `"+C.type+"` ("+Lt({start:C.start,end:C.end})+"): it’s not open");z.position.end=Re(C.end)}function d(){return ji(this.stack.pop())}function u(){this.data.expectingFirstListItemValue=!0}function f(C){if(this.data.expectingFirstListItemValue){const L=this.stack[this.stack.length-2];L.start=Number.parseInt(this.sliceSerialize(C),10),this.data.expectingFirstListItemValue=void 0}}function h(){const C=this.resume(),L=this.stack[this.stack.length-1];L.lang=C}function m(){const C=this.resume(),L=this.stack[this.stack.length-1];L.meta=C}function g(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function b(){const C=this.resume(),L=this.stack[this.stack.length-1];L.value=C.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function p(){const C=this.resume(),L=this.stack[this.stack.length-1];L.value=C.replace(/(\r?\n|\r)$/g,"")}function k(C){const L=this.resume(),z=this.stack[this.stack.length-1];z.label=L,z.identifier=ve(this.sliceSerialize(C)).toLowerCase()}function x(){const C=this.resume(),L=this.stack[this.stack.length-1];L.title=C}function T(){const C=this.resume(),L=this.stack[this.stack.length-1];L.url=C}function I(C){const L=this.stack[this.stack.length-1];if(!L.depth){const z=this.sliceSerialize(C).length;L.depth=z}}function v(){this.data.setextHeadingSlurpLineEnding=!0}function E(C){const L=this.stack[this.stack.length-1];L.depth=this.sliceSerialize(C).codePointAt(0)===61?1:2}function P(){this.data.setextHeadingSlurpLineEnding=void 0}function O(C){const z=this.stack[this.stack.length-1].children;let H=z[z.length-1];(!H||H.type!=="text")&&(H=ua(),H.position={start:Re(C.start),end:void 0},z.push(H)),this.stack.push(H)}function S(C){const L=this.stack.pop();L.value+=this.sliceSerialize(C),L.position.end=Re(C.end)}function M(C){const L=this.stack[this.stack.length-1];if(this.data.atHardBreak){const z=L.children[L.children.length-1];z.position.end=Re(C.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&t.canContainEols.includes(L.type)&&(O.call(this,C),S.call(this,C))}function _(){this.data.atHardBreak=!0}function F(){const C=this.resume(),L=this.stack[this.stack.length-1];L.value=C}function N(){const C=this.resume(),L=this.stack[this.stack.length-1];L.value=C}function R(){const C=this.resume(),L=this.stack[this.stack.length-1];L.value=C}function q(){const C=this.stack[this.stack.length-1];if(this.data.inReference){const L=this.data.referenceType||"shortcut";C.type+="Reference",C.referenceType=L,delete C.url,delete C.title}else delete C.identifier,delete C.label;this.data.referenceType=void 0}function J(){const C=this.stack[this.stack.length-1];if(this.data.inReference){const L=this.data.referenceType||"shortcut";C.type+="Reference",C.referenceType=L,delete C.url,delete C.title}else delete C.identifier,delete C.label;this.data.referenceType=void 0}function ae(C){const L=this.sliceSerialize(C),z=this.stack[this.stack.length-2];z.label=kh(L),z.identifier=ve(L).toLowerCase()}function fe(){const C=this.stack[this.stack.length-1],L=this.resume(),z=this.stack[this.stack.length-1];if(this.data.inReference=!0,z.type==="link"){const H=C.children;z.children=H}else z.alt=L}function y(){const C=this.resume(),L=this.stack[this.stack.length-1];L.url=C}function be(){const C=this.resume(),L=this.stack[this.stack.length-1];L.title=C}function Te(){this.data.inReference=void 0}function w(){this.data.referenceType="collapsed"}function we(C){const L=this.resume(),z=this.stack[this.stack.length-1];z.label=L,z.identifier=ve(this.sliceSerialize(C)).toLowerCase(),this.data.referenceType="full"}function Fe(C){this.data.characterReferenceType=C.type}function te(C){const L=this.sliceSerialize(C),z=this.data.characterReferenceType;let H;z?(H=fs(L,z==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):H=Fi(L);const W=this.stack[this.stack.length-1];W.value+=H}function wt(C){const L=this.stack.pop();L.position.end=Re(C.end)}function Me(C){S.call(this,C);const L=this.stack[this.stack.length-1];L.url=this.sliceSerialize(C)}function Je(C){S.call(this,C);const L=this.stack[this.stack.length-1];L.url="mailto:"+this.sliceSerialize(C)}function Qe(){return{type:"blockquote",children:[]}}function qt(){return{type:"code",lang:null,meta:null,value:""}}function ia(){return{type:"inlineCode",value:""}}function ra(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function oa(){return{type:"emphasis",children:[]}}function Yi(){return{type:"heading",depth:0,children:[]}}function Ji(){return{type:"break"}}function Qi(){return{type:"html",value:""}}function sa(){return{type:"image",title:null,url:"",alt:null}}function Xi(){return{type:"link",title:null,url:"",children:[]}}function Zi(C){return{type:"list",ordered:C.type==="listOrdered",start:null,spread:C._spread,children:[]}}function aa(C){return{type:"listItem",spread:C._spread,checked:null,children:[]}}function la(){return{type:"paragraph",children:[]}}function ca(){return{type:"strong",children:[]}}function ua(){return{type:"text",value:""}}function da(){return{type:"thematicBreak"}}}function Re(e){return{line:e.line,column:e.column,offset:e.offset}}function As(e,t){let n=-1;for(;++n<t.length;){const i=t[n];Array.isArray(i)?As(e,i):Ah(e,i)}}function Ah(e,t){let n;for(n in t)if(Ss.call(t,n))switch(n){case"canContainEols":{const i=t[n];i&&e[n].push(...i);break}case"transforms":{const i=t[n];i&&e[n].push(...i);break}case"enter":case"exit":{const i=t[n];i&&Object.assign(e[n],i);break}}}function Or(e,t){throw e?new Error("Cannot close `"+e.type+"` ("+Lt({start:e.start,end:e.end})+"): a different token (`"+t.type+"`, "+Lt({start:t.start,end:t.end})+") is open"):new Error("Cannot close document, a token (`"+t.type+"`, "+Lt({start:t.start,end:t.end})+") is still open")}function Ih(e){const t=this;t.parser=n;function n(i){return vh(i,{...t.data("settings"),...e,extensions:t.data("micromarkExtensions")||[],mdastExtensions:t.data("fromMarkdownExtensions")||[]})}}function Ch(e,t){const n={type:"element",tagName:"blockquote",properties:{},children:e.wrap(e.all(t),!0)};return e.patch(t,n),e.applyData(t,n)}function Th(e,t){const n={type:"element",tagName:"br",properties:{},children:[]};return e.patch(t,n),[e.applyData(t,n),{type:"text",value:`
`}]}function Eh(e,t){const n=t.value?t.value+`
`:"",i={},r=t.lang?t.lang.split(/\s+/):[];r.length>0&&(i.className=["language-"+r[0]]);let o={type:"element",tagName:"code",properties:i,children:[{type:"text",value:n}]};return t.meta&&(o.data={meta:t.meta}),e.patch(t,o),o=e.applyData(t,o),o={type:"element",tagName:"pre",properties:{},children:[o]},e.patch(t,o),o}function Ph(e,t){const n={type:"element",tagName:"del",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Dh(e,t){const n={type:"element",tagName:"em",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Lh(e,t){const n=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",i=String(t.identifier).toUpperCase(),r=bt(i.toLowerCase()),o=e.footnoteOrder.indexOf(i);let s,a=e.footnoteCounts.get(i);a===void 0?(a=0,e.footnoteOrder.push(i),s=e.footnoteOrder.length):s=o+1,a+=1,e.footnoteCounts.set(i,a);const l={type:"element",tagName:"a",properties:{href:"#"+n+"fn-"+r,id:n+"fnref-"+r+(a>1?"-"+a:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(s)}]};e.patch(t,l);const c={type:"element",tagName:"sup",properties:{},children:[l]};return e.patch(t,c),e.applyData(t,c)}function _h(e,t){const n={type:"element",tagName:"h"+t.depth,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Mh(e,t){if(e.options.allowDangerousHtml){const n={type:"raw",value:t.value};return e.patch(t,n),e.applyData(t,n)}}function Is(e,t){const n=t.referenceType;let i="]";if(n==="collapsed"?i+="[]":n==="full"&&(i+="["+(t.label||t.identifier)+"]"),t.type==="imageReference")return[{type:"text",value:"!["+t.alt+i}];const r=e.all(t),o=r[0];o&&o.type==="text"?o.value="["+o.value:r.unshift({type:"text",value:"["});const s=r[r.length-1];return s&&s.type==="text"?s.value+=i:r.push({type:"text",value:i}),r}function Rh(e,t){const n=String(t.identifier).toUpperCase(),i=e.definitionById.get(n);if(!i)return Is(e,t);const r={src:bt(i.url||""),alt:t.alt};i.title!==null&&i.title!==void 0&&(r.title=i.title);const o={type:"element",tagName:"img",properties:r,children:[]};return e.patch(t,o),e.applyData(t,o)}function Oh(e,t){const n={src:bt(t.url)};t.alt!==null&&t.alt!==void 0&&(n.alt=t.alt),t.title!==null&&t.title!==void 0&&(n.title=t.title);const i={type:"element",tagName:"img",properties:n,children:[]};return e.patch(t,i),e.applyData(t,i)}function Nh(e,t){const n={type:"text",value:t.value.replace(/\r?\n|\r/g," ")};e.patch(t,n);const i={type:"element",tagName:"code",properties:{},children:[n]};return e.patch(t,i),e.applyData(t,i)}function jh(e,t){const n=String(t.identifier).toUpperCase(),i=e.definitionById.get(n);if(!i)return Is(e,t);const r={href:bt(i.url||"")};i.title!==null&&i.title!==void 0&&(r.title=i.title);const o={type:"element",tagName:"a",properties:r,children:e.all(t)};return e.patch(t,o),e.applyData(t,o)}function Fh(e,t){const n={href:bt(t.url)};t.title!==null&&t.title!==void 0&&(n.title=t.title);const i={type:"element",tagName:"a",properties:n,children:e.all(t)};return e.patch(t,i),e.applyData(t,i)}function Bh(e,t,n){const i=e.all(t),r=n?zh(n):Cs(t),o={},s=[];if(typeof t.checked=="boolean"){const d=i[0];let u;d&&d.type==="element"&&d.tagName==="p"?u=d:(u={type:"element",tagName:"p",properties:{},children:[]},i.unshift(u)),u.children.length>0&&u.children.unshift({type:"text",value:" "}),u.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:t.checked,disabled:!0},children:[]}),o.className=["task-list-item"]}let a=-1;for(;++a<i.length;){const d=i[a];(r||a!==0||d.type!=="element"||d.tagName!=="p")&&s.push({type:"text",value:`
`}),d.type==="element"&&d.tagName==="p"&&!r?s.push(...d.children):s.push(d)}const l=i[i.length-1];l&&(r||l.type!=="element"||l.tagName!=="p")&&s.push({type:"text",value:`
`});const c={type:"element",tagName:"li",properties:o,children:s};return e.patch(t,c),e.applyData(t,c)}function zh(e){let t=!1;if(e.type==="list"){t=e.spread||!1;const n=e.children;let i=-1;for(;!t&&++i<n.length;)t=Cs(n[i])}return t}function Cs(e){const t=e.spread;return t??e.children.length>1}function Uh(e,t){const n={},i=e.all(t);let r=-1;for(typeof t.start=="number"&&t.start!==1&&(n.start=t.start);++r<i.length;){const s=i[r];if(s.type==="element"&&s.tagName==="li"&&s.properties&&Array.isArray(s.properties.className)&&s.properties.className.includes("task-list-item")){n.className=["contains-task-list"];break}}const o={type:"element",tagName:t.ordered?"ol":"ul",properties:n,children:e.wrap(i,!0)};return e.patch(t,o),e.applyData(t,o)}function $h(e,t){const n={type:"element",tagName:"p",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Hh(e,t){const n={type:"root",children:e.wrap(e.all(t))};return e.patch(t,n),e.applyData(t,n)}function Vh(e,t){const n={type:"element",tagName:"strong",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function qh(e,t){const n=e.all(t),i=n.shift(),r=[];if(i){const s={type:"element",tagName:"thead",properties:{},children:e.wrap([i],!0)};e.patch(t.children[0],s),r.push(s)}if(n.length>0){const s={type:"element",tagName:"tbody",properties:{},children:e.wrap(n,!0)},a=Mi(t.children[1]),l=os(t.children[t.children.length-1]);a&&l&&(s.position={start:a,end:l}),r.push(s)}const o={type:"element",tagName:"table",properties:{},children:e.wrap(r,!0)};return e.patch(t,o),e.applyData(t,o)}function Wh(e,t,n){const i=n?n.children:void 0,o=(i?i.indexOf(t):1)===0?"th":"td",s=n&&n.type==="table"?n.align:void 0,a=s?s.length:t.children.length;let l=-1;const c=[];for(;++l<a;){const u=t.children[l],f={},h=s?s[l]:void 0;h&&(f.align=h);let m={type:"element",tagName:o,properties:f,children:[]};u&&(m.children=e.all(u),e.patch(u,m),m=e.applyData(u,m)),c.push(m)}const d={type:"element",tagName:"tr",properties:{},children:e.wrap(c,!0)};return e.patch(t,d),e.applyData(t,d)}function Kh(e,t){const n={type:"element",tagName:"td",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}const Nr=9,jr=32;function Gh(e){const t=String(e),n=/\r?\n|\r/g;let i=n.exec(t),r=0;const o=[];for(;i;)o.push(Fr(t.slice(r,i.index),r>0,!0),i[0]),r=i.index+i[0].length,i=n.exec(t);return o.push(Fr(t.slice(r),r>0,!1)),o.join("")}function Fr(e,t,n){let i=0,r=e.length;if(t){let o=e.codePointAt(i);for(;o===Nr||o===jr;)i++,o=e.codePointAt(i)}if(n){let o=e.codePointAt(r-1);for(;o===Nr||o===jr;)r--,o=e.codePointAt(r-1)}return r>i?e.slice(i,r):""}function Yh(e,t){const n={type:"text",value:Gh(String(t.value))};return e.patch(t,n),e.applyData(t,n)}function Jh(e,t){const n={type:"element",tagName:"hr",properties:{},children:[]};return e.patch(t,n),e.applyData(t,n)}const Qh={blockquote:Ch,break:Th,code:Eh,delete:Ph,emphasis:Dh,footnoteReference:Lh,heading:_h,html:Mh,imageReference:Rh,image:Oh,inlineCode:Nh,linkReference:jh,link:Fh,listItem:Bh,list:Uh,paragraph:$h,root:Hh,strong:Vh,table:qh,tableCell:Kh,tableRow:Wh,text:Yh,thematicBreak:Jh,toml:Qt,yaml:Qt,definition:Qt,footnoteDefinition:Qt};function Qt(){}const Ts=-1,Cn=0,Mt=1,dn=2,zi=3,Ui=4,$i=5,Hi=6,Es=7,Ps=8,Ds=typeof self=="object"?self:globalThis,Br=(e,t)=>{switch(e){case"Function":case"SharedWorker":case"Worker":case"eval":case"setInterval":case"setTimeout":throw new TypeError("unable to deserialize "+e)}return new Ds[e](t)},Xh=(e,t)=>{const n=(r,o)=>(e.set(o,r),r),i=r=>{if(e.has(r))return e.get(r);const[o,s]=t[r];switch(o){case Cn:case Ts:return n(s,r);case Mt:{const a=n([],r);for(const l of s)a.push(i(l));return a}case dn:{const a=n({},r);for(const[l,c]of s)a[i(l)]=i(c);return a}case zi:return n(new Date(s),r);case Ui:{const{source:a,flags:l}=s;return n(new RegExp(a,l),r)}case $i:{const a=n(new Map,r);for(const[l,c]of s)a.set(i(l),i(c));return a}case Hi:{const a=n(new Set,r);for(const l of s)a.add(i(l));return a}case Es:{const{name:a,message:l}=s;return n(typeof Ds[a]=="function"?Br(a,l):new Error(l),r)}case Ps:return n(BigInt(s),r);case"BigInt":return n(Object(BigInt(s)),r);case"ArrayBuffer":return n(new Uint8Array(s).buffer,s);case"DataView":{const{buffer:a}=new Uint8Array(s);return n(new DataView(a),s)}}return n(Br(o,s),r)};return i},zr=e=>Xh(new Map,e)(0),$e="",{toString:Zh}={},{keys:ef}=Object,Ct=e=>{const t=typeof e;if(t!=="object"||!e)return[Cn,t];const n=Zh.call(e).slice(8,-1);switch(n){case"Array":return[Mt,$e];case"Object":return[dn,$e];case"Date":return[zi,$e];case"RegExp":return[Ui,$e];case"Map":return[$i,$e];case"Set":return[Hi,$e];case"DataView":return[Mt,n]}return n.includes("Array")?[Mt,n]:e instanceof Error?[Es,e.name||"Error"]:[dn,n]},Xt=([e,t])=>e===Cn&&(t==="function"||t==="symbol"),tf=(e,t,n,i)=>{const r=(s,a)=>{const l=i.push(s)-1;return n.set(a,l),l},o=s=>{if(n.has(s))return n.get(s);let[a,l]=Ct(s);switch(a){case Cn:{let d=s;switch(l){case"bigint":a=Ps,d=s.toString();break;case"function":case"symbol":if(e)throw new TypeError("unable to serialize "+l);d=null;break;case"undefined":return r([Ts],s)}return r([a,d],s)}case Mt:{if(l){let f=s;return l==="DataView"?f=new Uint8Array(s.buffer):l==="ArrayBuffer"&&(f=new Uint8Array(s)),r([l,[...f]],s)}const d=[],u=r([a,d],s);for(const f of s)d.push(o(f));return u}case dn:{if(l)switch(l){case"BigInt":return r([l,s.toString()],s);case"Boolean":case"Number":case"String":return r([l,s.valueOf()],s)}if(t&&"toJSON"in s)return o(s.toJSON());const d=[],u=r([a,d],s);for(const f of ef(s))(e||!Xt(Ct(s[f])))&&d.push([o(f),o(s[f])]);return u}case zi:return r([a,isNaN(s.getTime())?$e:s.toISOString()],s);case Ui:{const{source:d,flags:u}=s;return r([a,{source:d,flags:u}],s)}case $i:{const d=[],u=r([a,d],s);for(const[f,h]of s)(e||!(Xt(Ct(f))||Xt(Ct(h))))&&d.push([o(f),o(h)]);return u}case Hi:{const d=[],u=r([a,d],s);for(const f of s)(e||!Xt(Ct(f)))&&d.push(o(f));return u}}const{message:c}=s;return r([a,{name:l,message:c}],s)};return o},Ur=(e,{json:t,lossy:n}={})=>{const i=[];return tf(!(t||n),!!t,new Map,i)(e),i},hn=typeof structuredClone=="function"?(e,t)=>t&&("json"in t||"lossy"in t)?zr(Ur(e,t)):structuredClone(e):(e,t)=>zr(Ur(e,t));function nf(e,t){const n=[{type:"text",value:"↩"}];return t>1&&n.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(t)}]}),n}function rf(e,t){return"Back to reference "+(e+1)+(t>1?"-"+t:"")}function of(e){const t=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",n=e.options.footnoteBackContent||nf,i=e.options.footnoteBackLabel||rf,r=e.options.footnoteLabel||"Footnotes",o=e.options.footnoteLabelTagName||"h2",s=e.options.footnoteLabelProperties||{className:["sr-only"]},a=[];let l=-1;for(;++l<e.footnoteOrder.length;){const c=e.footnoteById.get(e.footnoteOrder[l]);if(!c)continue;const d=e.all(c),u=String(c.identifier).toUpperCase(),f=bt(u.toLowerCase());let h=0;const m=[],g=e.footnoteCounts.get(u);for(;g!==void 0&&++h<=g;){m.length>0&&m.push({type:"text",value:" "});let k=typeof n=="string"?n:n(l,h);typeof k=="string"&&(k={type:"text",value:k}),m.push({type:"element",tagName:"a",properties:{href:"#"+t+"fnref-"+f+(h>1?"-"+h:""),dataFootnoteBackref:"",ariaLabel:typeof i=="string"?i:i(l,h),className:["data-footnote-backref"]},children:Array.isArray(k)?k:[k]})}const b=d[d.length-1];if(b&&b.type==="element"&&b.tagName==="p"){const k=b.children[b.children.length-1];k&&k.type==="text"?k.value+=" ":b.children.push({type:"text",value:" "}),b.children.push(...m)}else d.push(...m);const p={type:"element",tagName:"li",properties:{id:t+"fn-"+f},children:e.wrap(d,!0)};e.patch(c,p),a.push(p)}if(a.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:o,properties:{...hn(s),id:"footnote-label"},children:[{type:"text",value:r}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:e.wrap(a,!0)},{type:"text",value:`
`}]}}const Tn=(function(e){if(e==null)return cf;if(typeof e=="function")return En(e);if(typeof e=="object")return Array.isArray(e)?sf(e):af(e);if(typeof e=="string")return lf(e);throw new Error("Expected function, string, or object as test")});function sf(e){const t=[];let n=-1;for(;++n<e.length;)t[n]=Tn(e[n]);return En(i);function i(...r){let o=-1;for(;++o<t.length;)if(t[o].apply(this,r))return!0;return!1}}function af(e){const t=e;return En(n);function n(i){const r=i;let o;for(o in e)if(r[o]!==t[o])return!1;return!0}}function lf(e){return En(t);function t(n){return n&&n.type===e}}function En(e){return t;function t(n,i,r){return!!(uf(n)&&e.call(this,n,typeof i=="number"?i:void 0,r||void 0))}}function cf(){return!0}function uf(e){return e!==null&&typeof e=="object"&&"type"in e}const Ls=[],df=!0,hi=!1,hf="skip";function _s(e,t,n,i){let r;typeof t=="function"&&typeof n!="function"?(i=n,n=t):r=t;const o=Tn(r),s=i?-1:1;a(e,void 0,[])();function a(l,c,d){const u=l&&typeof l=="object"?l:{};if(typeof u.type=="string"){const h=typeof u.tagName=="string"?u.tagName:typeof u.name=="string"?u.name:void 0;Object.defineProperty(f,"name",{value:"node ("+(l.type+(h?"<"+h+">":""))+")"})}return f;function f(){let h=Ls,m,g,b;if((!t||o(l,c,d[d.length-1]||void 0))&&(h=ff(n(l,d)),h[0]===hi))return h;if("children"in l&&l.children){const p=l;if(p.children&&h[0]!==hf)for(g=(i?p.children.length:-1)+s,b=d.concat(p);g>-1&&g<p.children.length;){const k=p.children[g];if(m=a(k,g,b)(),m[0]===hi)return m;g=typeof m[1]=="number"?m[1]:g+s}}return h}}}function ff(e){return Array.isArray(e)?e:typeof e=="number"?[df,e]:e==null?Ls:[e]}function Vi(e,t,n,i){let r,o,s;typeof t=="function"&&typeof n!="function"?(o=void 0,s=t,r=n):(o=t,s=n,r=i),_s(e,o,a,r);function a(l,c){const d=c[c.length-1],u=d?d.children.indexOf(l):void 0;return s(l,u,d)}}const fi={}.hasOwnProperty,pf={};function mf(e,t){const n=t||pf,i=new Map,r=new Map,o=new Map,s={...Qh,...n.handlers},a={all:c,applyData:yf,definitionById:i,footnoteById:r,footnoteCounts:o,footnoteOrder:[],handlers:s,one:l,options:n,patch:gf,wrap:wf};return Vi(e,function(d){if(d.type==="definition"||d.type==="footnoteDefinition"){const u=d.type==="definition"?i:r,f=String(d.identifier).toUpperCase();u.has(f)||u.set(f,d)}}),a;function l(d,u){const f=d.type,h=a.handlers[f];if(fi.call(a.handlers,f)&&h)return h(a,d,u);if(a.options.passThrough&&a.options.passThrough.includes(f)){if("children"in d){const{children:g,...b}=d,p=hn(b);return p.children=a.all(d),p}return hn(d)}return(a.options.unknownHandler||bf)(a,d,u)}function c(d){const u=[];if("children"in d){const f=d.children;let h=-1;for(;++h<f.length;){const m=a.one(f[h],d);if(m){if(h&&f[h-1].type==="break"&&(!Array.isArray(m)&&m.type==="text"&&(m.value=$r(m.value)),!Array.isArray(m)&&m.type==="element")){const g=m.children[0];g&&g.type==="text"&&(g.value=$r(g.value))}Array.isArray(m)?u.push(...m):u.push(m)}}}return u}}function gf(e,t){e.position&&(t.position=iu(e))}function yf(e,t){let n=t;if(e&&e.data){const i=e.data.hName,r=e.data.hChildren,o=e.data.hProperties;if(typeof i=="string")if(n.type==="element")n.tagName=i;else{const s="children"in n?n.children:[n];n={type:"element",tagName:i,properties:{},children:s}}n.type==="element"&&o&&Object.assign(n.properties,hn(o)),"children"in n&&n.children&&r!==null&&r!==void 0&&(n.children=r)}return n}function bf(e,t){const n=t.data||{},i="value"in t&&!(fi.call(n,"hProperties")||fi.call(n,"hChildren"))?{type:"text",value:t.value}:{type:"element",tagName:"div",properties:{},children:e.all(t)};return e.patch(t,i),e.applyData(t,i)}function wf(e,t){const n=[];let i=-1;for(t&&n.push({type:"text",value:`
`});++i<e.length;)i&&n.push({type:"text",value:`
`}),n.push(e[i]);return t&&e.length>0&&n.push({type:"text",value:`
`}),n}function $r(e){let t=0,n=e.charCodeAt(t);for(;n===9||n===32;)t++,n=e.charCodeAt(t);return e.slice(t)}function Hr(e,t){const n=mf(e,t),i=n.one(e,void 0),r=of(n),o=Array.isArray(i)?{type:"root",children:i}:i||{type:"root",children:[]};return r&&o.children.push({type:"text",value:`
`},r),o}function kf(e,t){return e&&"run"in e?async function(n,i){const r=Hr(n,{file:i,...t});await e.run(r,i)}:function(n,i){return Hr(n,{file:i,...e||t})}}function Vr(e){if(e)throw e}var Un,qr;function xf(){if(qr)return Un;qr=1;var e=Object.prototype.hasOwnProperty,t=Object.prototype.toString,n=Object.defineProperty,i=Object.getOwnPropertyDescriptor,r=function(c){return typeof Array.isArray=="function"?Array.isArray(c):t.call(c)==="[object Array]"},o=function(c){if(!c||t.call(c)!=="[object Object]")return!1;var d=e.call(c,"constructor"),u=c.constructor&&c.constructor.prototype&&e.call(c.constructor.prototype,"isPrototypeOf");if(c.constructor&&!d&&!u)return!1;var f;for(f in c);return typeof f>"u"||e.call(c,f)},s=function(c,d){n&&d.name==="__proto__"?n(c,d.name,{enumerable:!0,configurable:!0,value:d.newValue,writable:!0}):c[d.name]=d.newValue},a=function(c,d){if(d==="__proto__")if(e.call(c,d)){if(i)return i(c,d).value}else return;return c[d]};return Un=function l(){var c,d,u,f,h,m,g=arguments[0],b=1,p=arguments.length,k=!1;for(typeof g=="boolean"&&(k=g,g=arguments[1]||{},b=2),(g==null||typeof g!="object"&&typeof g!="function")&&(g={});b<p;++b)if(c=arguments[b],c!=null)for(d in c)u=a(g,d),f=a(c,d),g!==f&&(k&&f&&(o(f)||(h=r(f)))?(h?(h=!1,m=u&&r(u)?u:[]):m=u&&o(u)?u:{},s(g,{name:d,newValue:l(k,m,f)})):typeof f<"u"&&s(g,{name:d,newValue:f}));return g},Un}var vf=xf();const $n=ro(vf);function pi(e){if(typeof e!="object"||e===null)return!1;const t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function Sf(){const e=[],t={run:n,use:i};return t;function n(...r){let o=-1;const s=r.pop();if(typeof s!="function")throw new TypeError("Expected function as last argument, not "+s);a(null,...r);function a(l,...c){const d=e[++o];let u=-1;if(l){s(l);return}for(;++u<r.length;)(c[u]===null||c[u]===void 0)&&(c[u]=r[u]);r=c,d?Af(d,a)(...c):s(null,...c)}}function i(r){if(typeof r!="function")throw new TypeError("Expected `middelware` to be a function, not "+r);return e.push(r),t}}function Af(e,t){let n;return i;function i(...s){const a=e.length>s.length;let l;a&&s.push(r);try{l=e.apply(this,s)}catch(c){const d=c;if(a&&n)throw d;return r(d)}a||(l&&l.then&&typeof l.then=="function"?l.then(o,r):l instanceof Error?r(l):o(l))}function r(s,...a){n||(n=!0,t(s,...a))}function o(s){r(null,s)}}const Ae={basename:If,dirname:Cf,extname:Tf,join:Ef,sep:"/"};function If(e,t){if(t!==void 0&&typeof t!="string")throw new TypeError('"ext" argument must be a string');Vt(e);let n=0,i=-1,r=e.length,o;if(t===void 0||t.length===0||t.length>e.length){for(;r--;)if(e.codePointAt(r)===47){if(o){n=r+1;break}}else i<0&&(o=!0,i=r+1);return i<0?"":e.slice(n,i)}if(t===e)return"";let s=-1,a=t.length-1;for(;r--;)if(e.codePointAt(r)===47){if(o){n=r+1;break}}else s<0&&(o=!0,s=r+1),a>-1&&(e.codePointAt(r)===t.codePointAt(a--)?a<0&&(i=r):(a=-1,i=s));return n===i?i=s:i<0&&(i=e.length),e.slice(n,i)}function Cf(e){if(Vt(e),e.length===0)return".";let t=-1,n=e.length,i;for(;--n;)if(e.codePointAt(n)===47){if(i){t=n;break}}else i||(i=!0);return t<0?e.codePointAt(0)===47?"/":".":t===1&&e.codePointAt(0)===47?"//":e.slice(0,t)}function Tf(e){Vt(e);let t=e.length,n=-1,i=0,r=-1,o=0,s;for(;t--;){const a=e.codePointAt(t);if(a===47){if(s){i=t+1;break}continue}n<0&&(s=!0,n=t+1),a===46?r<0?r=t:o!==1&&(o=1):r>-1&&(o=-1)}return r<0||n<0||o===0||o===1&&r===n-1&&r===i+1?"":e.slice(r,n)}function Ef(...e){let t=-1,n;for(;++t<e.length;)Vt(e[t]),e[t]&&(n=n===void 0?e[t]:n+"/"+e[t]);return n===void 0?".":Pf(n)}function Pf(e){Vt(e);const t=e.codePointAt(0)===47;let n=Df(e,!t);return n.length===0&&!t&&(n="."),n.length>0&&e.codePointAt(e.length-1)===47&&(n+="/"),t?"/"+n:n}function Df(e,t){let n="",i=0,r=-1,o=0,s=-1,a,l;for(;++s<=e.length;){if(s<e.length)a=e.codePointAt(s);else{if(a===47)break;a=47}if(a===47){if(!(r===s-1||o===1))if(r!==s-1&&o===2){if(n.length<2||i!==2||n.codePointAt(n.length-1)!==46||n.codePointAt(n.length-2)!==46){if(n.length>2){if(l=n.lastIndexOf("/"),l!==n.length-1){l<0?(n="",i=0):(n=n.slice(0,l),i=n.length-1-n.lastIndexOf("/")),r=s,o=0;continue}}else if(n.length>0){n="",i=0,r=s,o=0;continue}}t&&(n=n.length>0?n+"/..":"..",i=2)}else n.length>0?n+="/"+e.slice(r+1,s):n=e.slice(r+1,s),i=s-r-1;r=s,o=0}else a===46&&o>-1?o++:o=-1}return n}function Vt(e){if(typeof e!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}const Lf={cwd:_f};function _f(){return"/"}function mi(e){return!!(e!==null&&typeof e=="object"&&"href"in e&&e.href&&"protocol"in e&&e.protocol&&e.auth===void 0)}function Mf(e){if(typeof e=="string")e=new URL(e);else if(!mi(e)){const t=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+"`");throw t.code="ERR_INVALID_ARG_TYPE",t}if(e.protocol!=="file:"){const t=new TypeError("The URL must be of scheme file");throw t.code="ERR_INVALID_URL_SCHEME",t}return Rf(e)}function Rf(e){if(e.hostname!==""){const i=new TypeError('File URL host must be "localhost" or empty on darwin');throw i.code="ERR_INVALID_FILE_URL_HOST",i}const t=e.pathname;let n=-1;for(;++n<t.length;)if(t.codePointAt(n)===37&&t.codePointAt(n+1)===50){const i=t.codePointAt(n+2);if(i===70||i===102){const r=new TypeError("File URL path must not include encoded / characters");throw r.code="ERR_INVALID_FILE_URL_PATH",r}}return decodeURIComponent(t)}const Hn=["history","path","basename","stem","extname","dirname"];class Ms{constructor(t){let n;t?mi(t)?n={path:t}:typeof t=="string"||Of(t)?n={value:t}:n=t:n={},this.cwd="cwd"in n?"":Lf.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let i=-1;for(;++i<Hn.length;){const o=Hn[i];o in n&&n[o]!==void 0&&n[o]!==null&&(this[o]=o==="history"?[...n[o]]:n[o])}let r;for(r in n)Hn.includes(r)||(this[r]=n[r])}get basename(){return typeof this.path=="string"?Ae.basename(this.path):void 0}set basename(t){qn(t,"basename"),Vn(t,"basename"),this.path=Ae.join(this.dirname||"",t)}get dirname(){return typeof this.path=="string"?Ae.dirname(this.path):void 0}set dirname(t){Wr(this.basename,"dirname"),this.path=Ae.join(t||"",this.basename)}get extname(){return typeof this.path=="string"?Ae.extname(this.path):void 0}set extname(t){if(Vn(t,"extname"),Wr(this.dirname,"extname"),t){if(t.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(t.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=Ae.join(this.dirname,this.stem+(t||""))}get path(){return this.history[this.history.length-1]}set path(t){mi(t)&&(t=Mf(t)),qn(t,"path"),this.path!==t&&this.history.push(t)}get stem(){return typeof this.path=="string"?Ae.basename(this.path,this.extname):void 0}set stem(t){qn(t,"stem"),Vn(t,"stem"),this.path=Ae.join(this.dirname||"",t+(this.extname||""))}fail(t,n,i){const r=this.message(t,n,i);throw r.fatal=!0,r}info(t,n,i){const r=this.message(t,n,i);return r.fatal=void 0,r}message(t,n,i){const r=new ie(t,n,i);return this.path&&(r.name=this.path+":"+r.name,r.file=this.path),r.fatal=!1,this.messages.push(r),r}toString(t){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(t||void 0).decode(this.value)}}function Vn(e,t){if(e&&e.includes(Ae.sep))throw new Error("`"+t+"` cannot be a path: did not expect `"+Ae.sep+"`")}function qn(e,t){if(!e)throw new Error("`"+t+"` cannot be empty")}function Wr(e,t){if(!e)throw new Error("Setting `"+t+"` requires `path` to be set too")}function Of(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const Nf=(function(e){const i=this.constructor.prototype,r=i[e],o=function(){return r.apply(o,arguments)};return Object.setPrototypeOf(o,i),o}),jf={}.hasOwnProperty;class qi extends Nf{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=Sf()}copy(){const t=new qi;let n=-1;for(;++n<this.attachers.length;){const i=this.attachers[n];t.use(...i)}return t.data($n(!0,{},this.namespace)),t}data(t,n){return typeof t=="string"?arguments.length===2?(Gn("data",this.frozen),this.namespace[t]=n,this):jf.call(this.namespace,t)&&this.namespace[t]||void 0:t?(Gn("data",this.frozen),this.namespace=t,this):this.namespace}freeze(){if(this.frozen)return this;const t=this;for(;++this.freezeIndex<this.attachers.length;){const[n,...i]=this.attachers[this.freezeIndex];if(i[0]===!1)continue;i[0]===!0&&(i[0]=void 0);const r=n.call(t,...i);typeof r=="function"&&this.transformers.use(r)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(t){this.freeze();const n=Zt(t),i=this.parser||this.Parser;return Wn("parse",i),i(String(n),n)}process(t,n){const i=this;return this.freeze(),Wn("process",this.parser||this.Parser),Kn("process",this.compiler||this.Compiler),n?r(void 0,n):new Promise(r);function r(o,s){const a=Zt(t),l=i.parse(a);i.run(l,a,function(d,u,f){if(d||!u||!f)return c(d);const h=u,m=i.stringify(h,f);zf(m)?f.value=m:f.result=m,c(d,f)});function c(d,u){d||!u?s(d):o?o(u):n(void 0,u)}}}processSync(t){let n=!1,i;return this.freeze(),Wn("processSync",this.parser||this.Parser),Kn("processSync",this.compiler||this.Compiler),this.process(t,r),Gr("processSync","process",n),i;function r(o,s){n=!0,Vr(o),i=s}}run(t,n,i){Kr(t),this.freeze();const r=this.transformers;return!i&&typeof n=="function"&&(i=n,n=void 0),i?o(void 0,i):new Promise(o);function o(s,a){const l=Zt(n);r.run(t,l,c);function c(d,u,f){const h=u||t;d?a(d):s?s(h):i(void 0,h,f)}}}runSync(t,n){let i=!1,r;return this.run(t,n,o),Gr("runSync","run",i),r;function o(s,a){Vr(s),r=a,i=!0}}stringify(t,n){this.freeze();const i=Zt(n),r=this.compiler||this.Compiler;return Kn("stringify",r),Kr(t),r(t,i)}use(t,...n){const i=this.attachers,r=this.namespace;if(Gn("use",this.frozen),t!=null)if(typeof t=="function")l(t,n);else if(typeof t=="object")Array.isArray(t)?a(t):s(t);else throw new TypeError("Expected usable value, not `"+t+"`");return this;function o(c){if(typeof c=="function")l(c,[]);else if(typeof c=="object")if(Array.isArray(c)){const[d,...u]=c;l(d,u)}else s(c);else throw new TypeError("Expected usable value, not `"+c+"`")}function s(c){if(!("plugins"in c)&&!("settings"in c))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");a(c.plugins),c.settings&&(r.settings=$n(!0,r.settings,c.settings))}function a(c){let d=-1;if(c!=null)if(Array.isArray(c))for(;++d<c.length;){const u=c[d];o(u)}else throw new TypeError("Expected a list of plugins, not `"+c+"`")}function l(c,d){let u=-1,f=-1;for(;++u<i.length;)if(i[u][0]===c){f=u;break}if(f===-1)i.push([c,...d]);else if(d.length>0){let[h,...m]=d;const g=i[f][1];pi(g)&&pi(h)&&(h=$n(!0,g,h)),i[f]=[c,h,...m]}}}}const Ff=new qi().freeze();function Wn(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `parser`")}function Kn(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `compiler`")}function Gn(e,t){if(t)throw new Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function Kr(e){if(!pi(e)||typeof e.type!="string")throw new TypeError("Expected node, got `"+e+"`")}function Gr(e,t,n){if(!n)throw new Error("`"+e+"` finished async. Use `"+t+"` instead")}function Zt(e){return Bf(e)?e:new Ms(e)}function Bf(e){return!!(e&&typeof e=="object"&&"message"in e&&"messages"in e)}function zf(e){return typeof e=="string"||Uf(e)}function Uf(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const $f="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",Yr=[],Jr={allowDangerousHtml:!0},Hf=/^(https?|ircs?|mailto|xmpp)$/i,Vf=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"className",id:"remove-classname"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function qf(e){const t=Wf(e),n=Kf(e);return Gf(t.runSync(t.parse(n),n),e)}function Wf(e){const t=e.rehypePlugins||Yr,n=e.remarkPlugins||Yr,i=e.remarkRehypeOptions?{...e.remarkRehypeOptions,...Jr}:Jr;return Ff().use(Ih).use(n).use(kf,i).use(t)}function Kf(e){const t=e.children||"",n=new Ms;return typeof t=="string"&&(n.value=t),n}function Gf(e,t){const n=t.allowedElements,i=t.allowElement,r=t.components,o=t.disallowedElements,s=t.skipHtml,a=t.unwrapDisallowed,l=t.urlTransform||Yf;for(const d of Vf)Object.hasOwn(t,d.from)&&(""+d.from+(d.to?"use `"+d.to+"` instead":"remove it")+$f+d.id,void 0);return Vi(e,c),lu(e,{Fragment:A.Fragment,components:r,ignoreInvalidStyle:!0,jsx:A.jsx,jsxs:A.jsxs,passKeys:!0,passNode:!0});function c(d,u,f){if(d.type==="raw"&&f&&typeof u=="number")return s?f.children.splice(u,1):f.children[u]={type:"text",value:d.value},u;if(d.type==="element"){let h;for(h in Fn)if(Object.hasOwn(Fn,h)&&Object.hasOwn(d.properties,h)){const m=d.properties[h],g=Fn[h];(g===null||g.includes(d.tagName))&&(d.properties[h]=l(String(m||""),h,d))}}if(d.type==="element"){let h=n?!n.includes(d.tagName):o?o.includes(d.tagName):!1;if(!h&&i&&typeof u=="number"&&(h=!i(d,u,f)),h&&f&&typeof u=="number")return a&&d.children?f.children.splice(u,1,...d.children):f.children.splice(u,1),u}}}function Yf(e){const t=e.indexOf(":"),n=e.indexOf("?"),i=e.indexOf("#"),r=e.indexOf("/");return t===-1||r!==-1&&t>r||n!==-1&&t>n||i!==-1&&t>i||Hf.test(e.slice(0,t))?e:""}function Qr(e,t){const n=String(e);if(typeof t!="string")throw new TypeError("Expected character");let i=0,r=n.indexOf(t);for(;r!==-1;)i++,r=n.indexOf(t,r+t.length);return i}function Jf(e){if(typeof e!="string")throw new TypeError("Expected a string");return e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}function Qf(e,t,n){const r=Tn((n||{}).ignore||[]),o=Xf(t);let s=-1;for(;++s<o.length;)_s(e,"text",a);function a(c,d){let u=-1,f;for(;++u<d.length;){const h=d[u],m=f?f.children:void 0;if(r(h,m?m.indexOf(h):void 0,f))return;f=h}if(f)return l(c,d)}function l(c,d){const u=d[d.length-1],f=o[s][0],h=o[s][1];let m=0;const b=u.children.indexOf(c);let p=!1,k=[];f.lastIndex=0;let x=f.exec(c.value);for(;x;){const T=x.index,I={index:x.index,input:x.input,stack:[...d,c]};let v=h(...x,I);if(typeof v=="string"&&(v=v.length>0?{type:"text",value:v}:void 0),v===!1?f.lastIndex=T+1:(m!==T&&k.push({type:"text",value:c.value.slice(m,T)}),Array.isArray(v)?k.push(...v):v&&k.push(v),m=T+x[0].length,p=!0),!f.global)break;x=f.exec(c.value)}return p?(m<c.value.length&&k.push({type:"text",value:c.value.slice(m)}),u.children.splice(b,1,...k)):k=[c],b+k.length}}function Xf(e){const t=[];if(!Array.isArray(e))throw new TypeError("Expected find and replace tuple or list of tuples");const n=!e[0]||Array.isArray(e[0])?e:[e];let i=-1;for(;++i<n.length;){const r=n[i];t.push([Zf(r[0]),ep(r[1])])}return t}function Zf(e){return typeof e=="string"?new RegExp(Jf(e),"g"):e}function ep(e){return typeof e=="function"?e:function(){return e}}const Yn="phrasing",Jn=["autolink","link","image","label"];function tp(){return{transforms:[lp],enter:{literalAutolink:ip,literalAutolinkEmail:Qn,literalAutolinkHttp:Qn,literalAutolinkWww:Qn},exit:{literalAutolink:ap,literalAutolinkEmail:sp,literalAutolinkHttp:rp,literalAutolinkWww:op}}}function np(){return{unsafe:[{character:"@",before:"[+\\-.\\w]",after:"[\\-.\\w]",inConstruct:Yn,notInConstruct:Jn},{character:".",before:"[Ww]",after:"[\\-.\\w]",inConstruct:Yn,notInConstruct:Jn},{character:":",before:"[ps]",after:"\\/",inConstruct:Yn,notInConstruct:Jn}]}}function ip(e){this.enter({type:"link",title:null,url:"",children:[]},e)}function Qn(e){this.config.enter.autolinkProtocol.call(this,e)}function rp(e){this.config.exit.autolinkProtocol.call(this,e)}function op(e){this.config.exit.data.call(this,e);const t=this.stack[this.stack.length-1];t.type,t.url="http://"+this.sliceSerialize(e)}function sp(e){this.config.exit.autolinkEmail.call(this,e)}function ap(e){this.exit(e)}function lp(e){Qf(e,[[/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi,cp],[new RegExp("(?<=^|\\s|\\p{P}|\\p{S})([-.\\w+]+)@([-\\w]+(?:\\.[-\\w]+)+)","gu"),up]],{ignore:["link","linkReference"]})}function cp(e,t,n,i,r){let o="";if(!Rs(r)||(/^w/i.test(t)&&(n=t+n,t="",o="http://"),!dp(n)))return!1;const s=hp(n+i);if(!s[0])return!1;const a={type:"link",title:null,url:o+t+s[0],children:[{type:"text",value:t+s[0]}]};return s[1]?[a,{type:"text",value:s[1]}]:a}function up(e,t,n,i){return!Rs(i,!0)||/[-\d_]$/.test(n)?!1:{type:"link",title:null,url:"mailto:"+t+"@"+n,children:[{type:"text",value:t+"@"+n}]}}function dp(e){const t=e.split(".");return!(t.length<2||t[t.length-1]&&(/_/.test(t[t.length-1])||!/[a-zA-Z\d]/.test(t[t.length-1]))||t[t.length-2]&&(/_/.test(t[t.length-2])||!/[a-zA-Z\d]/.test(t[t.length-2])))}function hp(e){const t=/[!"&'),.:;<>?\]}]+$/.exec(e);if(!t)return[e,void 0];e=e.slice(0,t.index);let n=t[0],i=n.indexOf(")");const r=Qr(e,"(");let o=Qr(e,")");for(;i!==-1&&r>o;)e+=n.slice(0,i+1),n=n.slice(i+1),i=n.indexOf(")"),o++;return[e,n]}function Rs(e,t){const n=e.input.charCodeAt(e.index-1);return(e.index===0||Ke(n)||An(n))&&(!t||n!==47)}Os.peek=xp;function fp(){this.buffer()}function pp(e){this.enter({type:"footnoteReference",identifier:"",label:""},e)}function mp(){this.buffer()}function gp(e){this.enter({type:"footnoteDefinition",identifier:"",label:"",children:[]},e)}function yp(e){const t=this.resume(),n=this.stack[this.stack.length-1];n.type,n.identifier=ve(this.sliceSerialize(e)).toLowerCase(),n.label=t}function bp(e){this.exit(e)}function wp(e){const t=this.resume(),n=this.stack[this.stack.length-1];n.type,n.identifier=ve(this.sliceSerialize(e)).toLowerCase(),n.label=t}function kp(e){this.exit(e)}function xp(){return"["}function Os(e,t,n,i){const r=n.createTracker(i);let o=r.move("[^");const s=n.enter("footnoteReference"),a=n.enter("reference");return o+=r.move(n.safe(n.associationId(e),{after:"]",before:o})),a(),s(),o+=r.move("]"),o}function vp(){return{enter:{gfmFootnoteCallString:fp,gfmFootnoteCall:pp,gfmFootnoteDefinitionLabelString:mp,gfmFootnoteDefinition:gp},exit:{gfmFootnoteCallString:yp,gfmFootnoteCall:bp,gfmFootnoteDefinitionLabelString:wp,gfmFootnoteDefinition:kp}}}function Sp(e){let t=!1;return e&&e.firstLineBlank&&(t=!0),{handlers:{footnoteDefinition:n,footnoteReference:Os},unsafe:[{character:"[",inConstruct:["label","phrasing","reference"]}]};function n(i,r,o,s){const a=o.createTracker(s);let l=a.move("[^");const c=o.enter("footnoteDefinition"),d=o.enter("label");return l+=a.move(o.safe(o.associationId(i),{before:l,after:"]"})),d(),l+=a.move("]:"),i.children&&i.children.length>0&&(a.shift(4),l+=a.move((t?`
`:" ")+o.indentLines(o.containerFlow(i,a.current()),t?Ns:Ap))),c(),l}}function Ap(e,t,n){return t===0?e:Ns(e,t,n)}function Ns(e,t,n){return(n?"":"    ")+e}const Ip=["autolink","destinationLiteral","destinationRaw","reference","titleQuote","titleApostrophe"];js.peek=Dp;function Cp(){return{canContainEols:["delete"],enter:{strikethrough:Ep},exit:{strikethrough:Pp}}}function Tp(){return{unsafe:[{character:"~",inConstruct:"phrasing",notInConstruct:Ip}],handlers:{delete:js}}}function Ep(e){this.enter({type:"delete",children:[]},e)}function Pp(e){this.exit(e)}function js(e,t,n,i){const r=n.createTracker(i),o=n.enter("strikethrough");let s=r.move("~~");return s+=n.containerPhrasing(e,{...r.current(),before:s,after:"~"}),s+=r.move("~~"),o(),s}function Dp(){return"~"}function Lp(e){return e.length}function _p(e,t){const n=t||{},i=(n.align||[]).concat(),r=n.stringLength||Lp,o=[],s=[],a=[],l=[];let c=0,d=-1;for(;++d<e.length;){const g=[],b=[];let p=-1;for(e[d].length>c&&(c=e[d].length);++p<e[d].length;){const k=Mp(e[d][p]);if(n.alignDelimiters!==!1){const x=r(k);b[p]=x,(l[p]===void 0||x>l[p])&&(l[p]=x)}g.push(k)}s[d]=g,a[d]=b}let u=-1;if(typeof i=="object"&&"length"in i)for(;++u<c;)o[u]=Xr(i[u]);else{const g=Xr(i);for(;++u<c;)o[u]=g}u=-1;const f=[],h=[];for(;++u<c;){const g=o[u];let b="",p="";g===99?(b=":",p=":"):g===108?b=":":g===114&&(p=":");let k=n.alignDelimiters===!1?1:Math.max(1,l[u]-b.length-p.length);const x=b+"-".repeat(k)+p;n.alignDelimiters!==!1&&(k=b.length+k+p.length,k>l[u]&&(l[u]=k),h[u]=k),f[u]=x}s.splice(1,0,f),a.splice(1,0,h),d=-1;const m=[];for(;++d<s.length;){const g=s[d],b=a[d];u=-1;const p=[];for(;++u<c;){const k=g[u]||"";let x="",T="";if(n.alignDelimiters!==!1){const I=l[u]-(b[u]||0),v=o[u];v===114?x=" ".repeat(I):v===99?I%2?(x=" ".repeat(I/2+.5),T=" ".repeat(I/2-.5)):(x=" ".repeat(I/2),T=x):T=" ".repeat(I)}n.delimiterStart!==!1&&!u&&p.push("|"),n.padding!==!1&&!(n.alignDelimiters===!1&&k==="")&&(n.delimiterStart!==!1||u)&&p.push(" "),n.alignDelimiters!==!1&&p.push(x),p.push(k),n.alignDelimiters!==!1&&p.push(T),n.padding!==!1&&p.push(" "),(n.delimiterEnd!==!1||u!==c-1)&&p.push("|")}m.push(n.delimiterEnd===!1?p.join("").replace(/ +$/,""):p.join(""))}return m.join(`
`)}function Mp(e){return e==null?"":String(e)}function Xr(e){const t=typeof e=="string"?e.codePointAt(0):0;return t===67||t===99?99:t===76||t===108?108:t===82||t===114?114:0}function Rp(e,t,n,i){const r=n.enter("blockquote"),o=n.createTracker(i);o.move("> "),o.shift(2);const s=n.indentLines(n.containerFlow(e,o.current()),Op);return r(),s}function Op(e,t,n){return">"+(n?"":" ")+e}function Np(e,t){return Zr(e,t.inConstruct,!0)&&!Zr(e,t.notInConstruct,!1)}function Zr(e,t,n){if(typeof t=="string"&&(t=[t]),!t||t.length===0)return n;let i=-1;for(;++i<t.length;)if(e.includes(t[i]))return!0;return!1}function eo(e,t,n,i){let r=-1;for(;++r<n.unsafe.length;)if(n.unsafe[r].character===`
`&&Np(n.stack,n.unsafe[r]))return/[ \t]/.test(i.before)?"":" ";return`\\
`}function jp(e,t){const n=String(e);let i=n.indexOf(t),r=i,o=0,s=0;if(typeof t!="string")throw new TypeError("Expected substring");for(;i!==-1;)i===r?++o>s&&(s=o):o=1,r=i+t.length,i=n.indexOf(t,r);return s}function Fp(e,t){return!!(t.options.fences===!1&&e.value&&!e.lang&&/[^ \r\n]/.test(e.value)&&!/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(e.value))}function Bp(e){const t=e.options.fence||"`";if(t!=="`"&&t!=="~")throw new Error("Cannot serialize code with `"+t+"` for `options.fence`, expected `` ` `` or `~`");return t}function zp(e,t,n,i){const r=Bp(n),o=e.value||"",s=r==="`"?"GraveAccent":"Tilde";if(Fp(e,n)){const u=n.enter("codeIndented"),f=n.indentLines(o,Up);return u(),f}const a=n.createTracker(i),l=r.repeat(Math.max(jp(o,r)+1,3)),c=n.enter("codeFenced");let d=a.move(l);if(e.lang){const u=n.enter(`codeFencedLang${s}`);d+=a.move(n.safe(e.lang,{before:d,after:" ",encode:["`"],...a.current()})),u()}if(e.lang&&e.meta){const u=n.enter(`codeFencedMeta${s}`);d+=a.move(" "),d+=a.move(n.safe(e.meta,{before:d,after:`
`,encode:["`"],...a.current()})),u()}return d+=a.move(`
`),o&&(d+=a.move(o+`
`)),d+=a.move(l),c(),d}function Up(e,t,n){return(n?"":"    ")+e}function Wi(e){const t=e.options.quote||'"';if(t!=='"'&&t!=="'")throw new Error("Cannot serialize title with `"+t+"` for `options.quote`, expected `\"`, or `'`");return t}function $p(e,t,n,i){const r=Wi(n),o=r==='"'?"Quote":"Apostrophe",s=n.enter("definition");let a=n.enter("label");const l=n.createTracker(i);let c=l.move("[");return c+=l.move(n.safe(n.associationId(e),{before:c,after:"]",...l.current()})),c+=l.move("]: "),a(),!e.url||/[\0- \u007F]/.test(e.url)?(a=n.enter("destinationLiteral"),c+=l.move("<"),c+=l.move(n.safe(e.url,{before:c,after:">",...l.current()})),c+=l.move(">")):(a=n.enter("destinationRaw"),c+=l.move(n.safe(e.url,{before:c,after:e.title?" ":`
`,...l.current()}))),a(),e.title&&(a=n.enter(`title${o}`),c+=l.move(" "+r),c+=l.move(n.safe(e.title,{before:c,after:r,...l.current()})),c+=l.move(r),a()),s(),c}function Hp(e){const t=e.options.emphasis||"*";if(t!=="*"&&t!=="_")throw new Error("Cannot serialize emphasis with `"+t+"` for `options.emphasis`, expected `*`, or `_`");return t}function jt(e){return"&#x"+e.toString(16).toUpperCase()+";"}function fn(e,t,n){const i=dt(e),r=dt(t);return i===void 0?r===void 0?n==="_"?{inside:!0,outside:!0}:{inside:!1,outside:!1}:r===1?{inside:!0,outside:!0}:{inside:!1,outside:!0}:i===1?r===void 0?{inside:!1,outside:!1}:r===1?{inside:!0,outside:!0}:{inside:!1,outside:!1}:r===void 0?{inside:!1,outside:!1}:r===1?{inside:!0,outside:!1}:{inside:!1,outside:!1}}Fs.peek=Vp;function Fs(e,t,n,i){const r=Hp(n),o=n.enter("emphasis"),s=n.createTracker(i),a=s.move(r);let l=s.move(n.containerPhrasing(e,{after:r,before:a,...s.current()}));const c=l.charCodeAt(0),d=fn(i.before.charCodeAt(i.before.length-1),c,r);d.inside&&(l=jt(c)+l.slice(1));const u=l.charCodeAt(l.length-1),f=fn(i.after.charCodeAt(0),u,r);f.inside&&(l=l.slice(0,-1)+jt(u));const h=s.move(r);return o(),n.attentionEncodeSurroundingInfo={after:f.outside,before:d.outside},a+l+h}function Vp(e,t,n){return n.options.emphasis||"*"}function qp(e,t){let n=!1;return Vi(e,function(i){if("value"in i&&/\r?\n|\r/.test(i.value)||i.type==="break")return n=!0,hi}),!!((!e.depth||e.depth<3)&&ji(e)&&(t.options.setext||n))}function Wp(e,t,n,i){const r=Math.max(Math.min(6,e.depth||1),1),o=n.createTracker(i);if(qp(e,n)){const d=n.enter("headingSetext"),u=n.enter("phrasing"),f=n.containerPhrasing(e,{...o.current(),before:`
`,after:`
`});return u(),d(),f+`
`+(r===1?"=":"-").repeat(f.length-(Math.max(f.lastIndexOf("\r"),f.lastIndexOf(`
`))+1))}const s="#".repeat(r),a=n.enter("headingAtx"),l=n.enter("phrasing");o.move(s+" ");let c=n.containerPhrasing(e,{before:"# ",after:`
`,...o.current()});return/^[\t ]/.test(c)&&(c=jt(c.charCodeAt(0))+c.slice(1)),c=c?s+" "+c:s,n.options.closeAtx&&(c+=" "+s),l(),a(),c}Bs.peek=Kp;function Bs(e){return e.value||""}function Kp(){return"<"}zs.peek=Gp;function zs(e,t,n,i){const r=Wi(n),o=r==='"'?"Quote":"Apostrophe",s=n.enter("image");let a=n.enter("label");const l=n.createTracker(i);let c=l.move("![");return c+=l.move(n.safe(e.alt,{before:c,after:"]",...l.current()})),c+=l.move("]("),a(),!e.url&&e.title||/[\0- \u007F]/.test(e.url)?(a=n.enter("destinationLiteral"),c+=l.move("<"),c+=l.move(n.safe(e.url,{before:c,after:">",...l.current()})),c+=l.move(">")):(a=n.enter("destinationRaw"),c+=l.move(n.safe(e.url,{before:c,after:e.title?" ":")",...l.current()}))),a(),e.title&&(a=n.enter(`title${o}`),c+=l.move(" "+r),c+=l.move(n.safe(e.title,{before:c,after:r,...l.current()})),c+=l.move(r),a()),c+=l.move(")"),s(),c}function Gp(){return"!"}Us.peek=Yp;function Us(e,t,n,i){const r=e.referenceType,o=n.enter("imageReference");let s=n.enter("label");const a=n.createTracker(i);let l=a.move("![");const c=n.safe(e.alt,{before:l,after:"]",...a.current()});l+=a.move(c+"]["),s();const d=n.stack;n.stack=[],s=n.enter("reference");const u=n.safe(n.associationId(e),{before:l,after:"]",...a.current()});return s(),n.stack=d,o(),r==="full"||!c||c!==u?l+=a.move(u+"]"):r==="shortcut"?l=l.slice(0,-1):l+=a.move("]"),l}function Yp(){return"!"}$s.peek=Jp;function $s(e,t,n){let i=e.value||"",r="`",o=-1;for(;new RegExp("(^|[^`])"+r+"([^`]|$)").test(i);)r+="`";for(/[^ \r\n]/.test(i)&&(/^[ \r\n]/.test(i)&&/[ \r\n]$/.test(i)||/^`|`$/.test(i))&&(i=" "+i+" ");++o<n.unsafe.length;){const s=n.unsafe[o],a=n.compilePattern(s);let l;if(s.atBreak)for(;l=a.exec(i);){let c=l.index;i.charCodeAt(c)===10&&i.charCodeAt(c-1)===13&&c--,i=i.slice(0,c)+" "+i.slice(l.index+1)}}return r+i+r}function Jp(){return"`"}function Hs(e,t){const n=ji(e);return!!(!t.options.resourceLink&&e.url&&!e.title&&e.children&&e.children.length===1&&e.children[0].type==="text"&&(n===e.url||"mailto:"+n===e.url)&&/^[a-z][a-z+.-]+:/i.test(e.url)&&!/[\0- <>\u007F]/.test(e.url))}Vs.peek=Qp;function Vs(e,t,n,i){const r=Wi(n),o=r==='"'?"Quote":"Apostrophe",s=n.createTracker(i);let a,l;if(Hs(e,n)){const d=n.stack;n.stack=[],a=n.enter("autolink");let u=s.move("<");return u+=s.move(n.containerPhrasing(e,{before:u,after:">",...s.current()})),u+=s.move(">"),a(),n.stack=d,u}a=n.enter("link"),l=n.enter("label");let c=s.move("[");return c+=s.move(n.containerPhrasing(e,{before:c,after:"](",...s.current()})),c+=s.move("]("),l(),!e.url&&e.title||/[\0- \u007F]/.test(e.url)?(l=n.enter("destinationLiteral"),c+=s.move("<"),c+=s.move(n.safe(e.url,{before:c,after:">",...s.current()})),c+=s.move(">")):(l=n.enter("destinationRaw"),c+=s.move(n.safe(e.url,{before:c,after:e.title?" ":")",...s.current()}))),l(),e.title&&(l=n.enter(`title${o}`),c+=s.move(" "+r),c+=s.move(n.safe(e.title,{before:c,after:r,...s.current()})),c+=s.move(r),l()),c+=s.move(")"),a(),c}function Qp(e,t,n){return Hs(e,n)?"<":"["}qs.peek=Xp;function qs(e,t,n,i){const r=e.referenceType,o=n.enter("linkReference");let s=n.enter("label");const a=n.createTracker(i);let l=a.move("[");const c=n.containerPhrasing(e,{before:l,after:"]",...a.current()});l+=a.move(c+"]["),s();const d=n.stack;n.stack=[],s=n.enter("reference");const u=n.safe(n.associationId(e),{before:l,after:"]",...a.current()});return s(),n.stack=d,o(),r==="full"||!c||c!==u?l+=a.move(u+"]"):r==="shortcut"?l=l.slice(0,-1):l+=a.move("]"),l}function Xp(){return"["}function Ki(e){const t=e.options.bullet||"*";if(t!=="*"&&t!=="+"&&t!=="-")throw new Error("Cannot serialize items with `"+t+"` for `options.bullet`, expected `*`, `+`, or `-`");return t}function Zp(e){const t=Ki(e),n=e.options.bulletOther;if(!n)return t==="*"?"-":"*";if(n!=="*"&&n!=="+"&&n!=="-")throw new Error("Cannot serialize items with `"+n+"` for `options.bulletOther`, expected `*`, `+`, or `-`");if(n===t)throw new Error("Expected `bullet` (`"+t+"`) and `bulletOther` (`"+n+"`) to be different");return n}function em(e){const t=e.options.bulletOrdered||".";if(t!=="."&&t!==")")throw new Error("Cannot serialize items with `"+t+"` for `options.bulletOrdered`, expected `.` or `)`");return t}function Ws(e){const t=e.options.rule||"*";if(t!=="*"&&t!=="-"&&t!=="_")throw new Error("Cannot serialize rules with `"+t+"` for `options.rule`, expected `*`, `-`, or `_`");return t}function tm(e,t,n,i){const r=n.enter("list"),o=n.bulletCurrent;let s=e.ordered?em(n):Ki(n);const a=e.ordered?s==="."?")":".":Zp(n);let l=t&&n.bulletLastUsed?s===n.bulletLastUsed:!1;if(!e.ordered){const d=e.children?e.children[0]:void 0;if((s==="*"||s==="-")&&d&&(!d.children||!d.children[0])&&n.stack[n.stack.length-1]==="list"&&n.stack[n.stack.length-2]==="listItem"&&n.stack[n.stack.length-3]==="list"&&n.stack[n.stack.length-4]==="listItem"&&n.indexStack[n.indexStack.length-1]===0&&n.indexStack[n.indexStack.length-2]===0&&n.indexStack[n.indexStack.length-3]===0&&(l=!0),Ws(n)===s&&d){let u=-1;for(;++u<e.children.length;){const f=e.children[u];if(f&&f.type==="listItem"&&f.children&&f.children[0]&&f.children[0].type==="thematicBreak"){l=!0;break}}}}l&&(s=a),n.bulletCurrent=s;const c=n.containerFlow(e,i);return n.bulletLastUsed=s,n.bulletCurrent=o,r(),c}function nm(e){const t=e.options.listItemIndent||"one";if(t!=="tab"&&t!=="one"&&t!=="mixed")throw new Error("Cannot serialize items with `"+t+"` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");return t}function im(e,t,n,i){const r=nm(n);let o=n.bulletCurrent||Ki(n);t&&t.type==="list"&&t.ordered&&(o=(typeof t.start=="number"&&t.start>-1?t.start:1)+(n.options.incrementListMarker===!1?0:t.children.indexOf(e))+o);let s=o.length+1;(r==="tab"||r==="mixed"&&(t&&t.type==="list"&&t.spread||e.spread))&&(s=Math.ceil(s/4)*4);const a=n.createTracker(i);a.move(o+" ".repeat(s-o.length)),a.shift(s);const l=n.enter("listItem"),c=n.indentLines(n.containerFlow(e,a.current()),d);return l(),c;function d(u,f,h){return f?(h?"":" ".repeat(s))+u:(h?o:o+" ".repeat(s-o.length))+u}}function rm(e,t,n,i){const r=n.enter("paragraph"),o=n.enter("phrasing"),s=n.containerPhrasing(e,i);return o(),r(),s}const om=Tn(["break","delete","emphasis","footnote","footnoteReference","image","imageReference","inlineCode","inlineMath","link","linkReference","mdxJsxTextElement","mdxTextExpression","strong","text","textDirective"]);function sm(e,t,n,i){return(e.children.some(function(s){return om(s)})?n.containerPhrasing:n.containerFlow).call(n,e,i)}function am(e){const t=e.options.strong||"*";if(t!=="*"&&t!=="_")throw new Error("Cannot serialize strong with `"+t+"` for `options.strong`, expected `*`, or `_`");return t}Ks.peek=lm;function Ks(e,t,n,i){const r=am(n),o=n.enter("strong"),s=n.createTracker(i),a=s.move(r+r);let l=s.move(n.containerPhrasing(e,{after:r,before:a,...s.current()}));const c=l.charCodeAt(0),d=fn(i.before.charCodeAt(i.before.length-1),c,r);d.inside&&(l=jt(c)+l.slice(1));const u=l.charCodeAt(l.length-1),f=fn(i.after.charCodeAt(0),u,r);f.inside&&(l=l.slice(0,-1)+jt(u));const h=s.move(r+r);return o(),n.attentionEncodeSurroundingInfo={after:f.outside,before:d.outside},a+l+h}function lm(e,t,n){return n.options.strong||"*"}function cm(e,t,n,i){return n.safe(e.value,i)}function um(e){const t=e.options.ruleRepetition||3;if(t<3)throw new Error("Cannot serialize rules with repetition `"+t+"` for `options.ruleRepetition`, expected `3` or more");return t}function dm(e,t,n){const i=(Ws(n)+(n.options.ruleSpaces?" ":"")).repeat(um(n));return n.options.ruleSpaces?i.slice(0,-1):i}const Gs={blockquote:Rp,break:eo,code:zp,definition:$p,emphasis:Fs,hardBreak:eo,heading:Wp,html:Bs,image:zs,imageReference:Us,inlineCode:$s,link:Vs,linkReference:qs,list:tm,listItem:im,paragraph:rm,root:sm,strong:Ks,text:cm,thematicBreak:dm};function hm(){return{enter:{table:fm,tableData:to,tableHeader:to,tableRow:mm},exit:{codeText:gm,table:pm,tableData:Xn,tableHeader:Xn,tableRow:Xn}}}function fm(e){const t=e._align;this.enter({type:"table",align:t.map(function(n){return n==="none"?null:n}),children:[]},e),this.data.inTable=!0}function pm(e){this.exit(e),this.data.inTable=void 0}function mm(e){this.enter({type:"tableRow",children:[]},e)}function Xn(e){this.exit(e)}function to(e){this.enter({type:"tableCell",children:[]},e)}function gm(e){let t=this.resume();this.data.inTable&&(t=t.replace(/\\([\\|])/g,ym));const n=this.stack[this.stack.length-1];n.type,n.value=t,this.exit(e)}function ym(e,t){return t==="|"?t:e}function bm(e){const t=e||{},n=t.tableCellPadding,i=t.tablePipeAlign,r=t.stringLength,o=n?" ":"|";return{unsafe:[{character:"\r",inConstruct:"tableCell"},{character:`
`,inConstruct:"tableCell"},{atBreak:!0,character:"|",after:"[	 :-]"},{character:"|",inConstruct:"tableCell"},{atBreak:!0,character:":",after:"-"},{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{inlineCode:f,table:s,tableCell:l,tableRow:a}};function s(h,m,g,b){return c(d(h,g,b),h.align)}function a(h,m,g,b){const p=u(h,g,b),k=c([p]);return k.slice(0,k.indexOf(`
`))}function l(h,m,g,b){const p=g.enter("tableCell"),k=g.enter("phrasing"),x=g.containerPhrasing(h,{...b,before:o,after:o});return k(),p(),x}function c(h,m){return _p(h,{align:m,alignDelimiters:i,padding:n,stringLength:r})}function d(h,m,g){const b=h.children;let p=-1;const k=[],x=m.enter("table");for(;++p<b.length;)k[p]=u(b[p],m,g);return x(),k}function u(h,m,g){const b=h.children;let p=-1;const k=[],x=m.enter("tableRow");for(;++p<b.length;)k[p]=l(b[p],h,m,g);return x(),k}function f(h,m,g){let b=Gs.inlineCode(h,m,g);return g.stack.includes("tableCell")&&(b=b.replace(/\|/g,"\\$&")),b}}function wm(){return{exit:{taskListCheckValueChecked:no,taskListCheckValueUnchecked:no,paragraph:xm}}}function km(){return{unsafe:[{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{listItem:vm}}}function no(e){const t=this.stack[this.stack.length-2];t.type,t.checked=e.type==="taskListCheckValueChecked"}function xm(e){const t=this.stack[this.stack.length-2];if(t&&t.type==="listItem"&&typeof t.checked=="boolean"){const n=this.stack[this.stack.length-1];n.type;const i=n.children[0];if(i&&i.type==="text"){const r=t.children;let o=-1,s;for(;++o<r.length;){const a=r[o];if(a.type==="paragraph"){s=a;break}}s===n&&(i.value=i.value.slice(1),i.value.length===0?n.children.shift():n.position&&i.position&&typeof i.position.start.offset=="number"&&(i.position.start.column++,i.position.start.offset++,n.position.start=Object.assign({},i.position.start)))}}this.exit(e)}function vm(e,t,n,i){const r=e.children[0],o=typeof e.checked=="boolean"&&r&&r.type==="paragraph",s="["+(e.checked?"x":" ")+"] ",a=n.createTracker(i);o&&a.move(s);let l=Gs.listItem(e,t,n,{...i,...a.current()});return o&&(l=l.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/,c)),l;function c(d){return d+s}}function Sm(){return[tp(),vp(),Cp(),hm(),wm()]}function Am(e){return{extensions:[np(),Sp(e),Tp(),bm(e),km()]}}const Im={tokenize:Lm,partial:!0},Ys={tokenize:_m,partial:!0},Js={tokenize:Mm,partial:!0},Qs={tokenize:Rm,partial:!0},Cm={tokenize:Om,partial:!0},Xs={name:"wwwAutolink",tokenize:Pm,previous:ea},Zs={name:"protocolAutolink",tokenize:Dm,previous:ta},_e={name:"emailAutolink",tokenize:Em,previous:na},Ce={};function Tm(){return{text:Ce}}let ze=48;for(;ze<123;)Ce[ze]=_e,ze++,ze===58?ze=65:ze===91&&(ze=97);Ce[43]=_e;Ce[45]=_e;Ce[46]=_e;Ce[95]=_e;Ce[72]=[_e,Zs];Ce[104]=[_e,Zs];Ce[87]=[_e,Xs];Ce[119]=[_e,Xs];function Em(e,t,n){const i=this;let r,o;return s;function s(u){return!gi(u)||!na.call(i,i.previous)||Gi(i.events)?n(u):(e.enter("literalAutolink"),e.enter("literalAutolinkEmail"),a(u))}function a(u){return gi(u)?(e.consume(u),a):u===64?(e.consume(u),l):n(u)}function l(u){return u===46?e.check(Cm,d,c)(u):u===45||u===95||ne(u)?(o=!0,e.consume(u),l):d(u)}function c(u){return e.consume(u),r=!0,l}function d(u){return o&&r&&oe(i.previous)?(e.exit("literalAutolinkEmail"),e.exit("literalAutolink"),t(u)):n(u)}}function Pm(e,t,n){const i=this;return r;function r(s){return s!==87&&s!==119||!ea.call(i,i.previous)||Gi(i.events)?n(s):(e.enter("literalAutolink"),e.enter("literalAutolinkWww"),e.check(Im,e.attempt(Ys,e.attempt(Js,o),n),n)(s))}function o(s){return e.exit("literalAutolinkWww"),e.exit("literalAutolink"),t(s)}}function Dm(e,t,n){const i=this;let r="",o=!1;return s;function s(u){return(u===72||u===104)&&ta.call(i,i.previous)&&!Gi(i.events)?(e.enter("literalAutolink"),e.enter("literalAutolinkHttp"),r+=String.fromCodePoint(u),e.consume(u),a):n(u)}function a(u){if(oe(u)&&r.length<5)return r+=String.fromCodePoint(u),e.consume(u),a;if(u===58){const f=r.toLowerCase();if(f==="http"||f==="https")return e.consume(u),l}return n(u)}function l(u){return u===47?(e.consume(u),o?c:(o=!0,l)):n(u)}function c(u){return u===null||un(u)||G(u)||Ke(u)||An(u)?n(u):e.attempt(Ys,e.attempt(Js,d),n)(u)}function d(u){return e.exit("literalAutolinkHttp"),e.exit("literalAutolink"),t(u)}}function Lm(e,t,n){let i=0;return r;function r(s){return(s===87||s===119)&&i<3?(i++,e.consume(s),r):s===46&&i===3?(e.consume(s),o):n(s)}function o(s){return s===null?n(s):t(s)}}function _m(e,t,n){let i,r,o;return s;function s(c){return c===46||c===95?e.check(Qs,l,a)(c):c===null||G(c)||Ke(c)||c!==45&&An(c)?l(c):(o=!0,e.consume(c),s)}function a(c){return c===95?i=!0:(r=i,i=void 0),e.consume(c),s}function l(c){return r||i||!o?n(c):t(c)}}function Mm(e,t){let n=0,i=0;return r;function r(s){return s===40?(n++,e.consume(s),r):s===41&&i<n?o(s):s===33||s===34||s===38||s===39||s===41||s===42||s===44||s===46||s===58||s===59||s===60||s===63||s===93||s===95||s===126?e.check(Qs,t,o)(s):s===null||G(s)||Ke(s)?t(s):(e.consume(s),r)}function o(s){return s===41&&i++,e.consume(s),r}}function Rm(e,t,n){return i;function i(a){return a===33||a===34||a===39||a===41||a===42||a===44||a===46||a===58||a===59||a===63||a===95||a===126?(e.consume(a),i):a===38?(e.consume(a),o):a===93?(e.consume(a),r):a===60||a===null||G(a)||Ke(a)?t(a):n(a)}function r(a){return a===null||a===40||a===91||G(a)||Ke(a)?t(a):i(a)}function o(a){return oe(a)?s(a):n(a)}function s(a){return a===59?(e.consume(a),i):oe(a)?(e.consume(a),s):n(a)}}function Om(e,t,n){return i;function i(o){return e.consume(o),r}function r(o){return ne(o)?n(o):t(o)}}function ea(e){return e===null||e===40||e===42||e===95||e===91||e===93||e===126||G(e)}function ta(e){return!oe(e)}function na(e){return!(e===47||gi(e))}function gi(e){return e===43||e===45||e===46||e===95||ne(e)}function Gi(e){let t=e.length,n=!1;for(;t--;){const i=e[t][1];if((i.type==="labelLink"||i.type==="labelImage")&&!i._balanced){n=!0;break}if(i._gfmAutolinkLiteralWalkedInto){n=!1;break}}return e.length>0&&!n&&(e[e.length-1][1]._gfmAutolinkLiteralWalkedInto=!0),n}const Nm={tokenize:Vm,partial:!0};function jm(){return{document:{91:{name:"gfmFootnoteDefinition",tokenize:Um,continuation:{tokenize:$m},exit:Hm}},text:{91:{name:"gfmFootnoteCall",tokenize:zm},93:{name:"gfmPotentialFootnoteCall",add:"after",tokenize:Fm,resolveTo:Bm}}}}function Fm(e,t,n){const i=this;let r=i.events.length;const o=i.parser.gfmFootnotes||(i.parser.gfmFootnotes=[]);let s;for(;r--;){const l=i.events[r][1];if(l.type==="labelImage"){s=l;break}if(l.type==="gfmFootnoteCall"||l.type==="labelLink"||l.type==="label"||l.type==="image"||l.type==="link")break}return a;function a(l){if(!s||!s._balanced)return n(l);const c=ve(i.sliceSerialize({start:s.end,end:i.now()}));return c.codePointAt(0)!==94||!o.includes(c.slice(1))?n(l):(e.enter("gfmFootnoteCallLabelMarker"),e.consume(l),e.exit("gfmFootnoteCallLabelMarker"),t(l))}}function Bm(e,t){let n=e.length;for(;n--;)if(e[n][1].type==="labelImage"&&e[n][0]==="enter"){e[n][1];break}e[n+1][1].type="data",e[n+3][1].type="gfmFootnoteCallLabelMarker";const i={type:"gfmFootnoteCall",start:Object.assign({},e[n+3][1].start),end:Object.assign({},e[e.length-1][1].end)},r={type:"gfmFootnoteCallMarker",start:Object.assign({},e[n+3][1].end),end:Object.assign({},e[n+3][1].end)};r.end.column++,r.end.offset++,r.end._bufferIndex++;const o={type:"gfmFootnoteCallString",start:Object.assign({},r.end),end:Object.assign({},e[e.length-1][1].start)},s={type:"chunkString",contentType:"string",start:Object.assign({},o.start),end:Object.assign({},o.end)},a=[e[n+1],e[n+2],["enter",i,t],e[n+3],e[n+4],["enter",r,t],["exit",r,t],["enter",o,t],["enter",s,t],["exit",s,t],["exit",o,t],e[e.length-2],e[e.length-1],["exit",i,t]];return e.splice(n,e.length-n+1,...a),e}function zm(e,t,n){const i=this,r=i.parser.gfmFootnotes||(i.parser.gfmFootnotes=[]);let o=0,s;return a;function a(u){return e.enter("gfmFootnoteCall"),e.enter("gfmFootnoteCallLabelMarker"),e.consume(u),e.exit("gfmFootnoteCallLabelMarker"),l}function l(u){return u!==94?n(u):(e.enter("gfmFootnoteCallMarker"),e.consume(u),e.exit("gfmFootnoteCallMarker"),e.enter("gfmFootnoteCallString"),e.enter("chunkString").contentType="string",c)}function c(u){if(o>999||u===93&&!s||u===null||u===91||G(u))return n(u);if(u===93){e.exit("chunkString");const f=e.exit("gfmFootnoteCallString");return r.includes(ve(i.sliceSerialize(f)))?(e.enter("gfmFootnoteCallLabelMarker"),e.consume(u),e.exit("gfmFootnoteCallLabelMarker"),e.exit("gfmFootnoteCall"),t):n(u)}return G(u)||(s=!0),o++,e.consume(u),u===92?d:c}function d(u){return u===91||u===92||u===93?(e.consume(u),o++,c):c(u)}}function Um(e,t,n){const i=this,r=i.parser.gfmFootnotes||(i.parser.gfmFootnotes=[]);let o,s=0,a;return l;function l(m){return e.enter("gfmFootnoteDefinition")._container=!0,e.enter("gfmFootnoteDefinitionLabel"),e.enter("gfmFootnoteDefinitionLabelMarker"),e.consume(m),e.exit("gfmFootnoteDefinitionLabelMarker"),c}function c(m){return m===94?(e.enter("gfmFootnoteDefinitionMarker"),e.consume(m),e.exit("gfmFootnoteDefinitionMarker"),e.enter("gfmFootnoteDefinitionLabelString"),e.enter("chunkString").contentType="string",d):n(m)}function d(m){if(s>999||m===93&&!a||m===null||m===91||G(m))return n(m);if(m===93){e.exit("chunkString");const g=e.exit("gfmFootnoteDefinitionLabelString");return o=ve(i.sliceSerialize(g)),e.enter("gfmFootnoteDefinitionLabelMarker"),e.consume(m),e.exit("gfmFootnoteDefinitionLabelMarker"),e.exit("gfmFootnoteDefinitionLabel"),f}return G(m)||(a=!0),s++,e.consume(m),m===92?u:d}function u(m){return m===91||m===92||m===93?(e.consume(m),s++,d):d(m)}function f(m){return m===58?(e.enter("definitionMarker"),e.consume(m),e.exit("definitionMarker"),r.includes(o)||r.push(o),V(e,h,"gfmFootnoteDefinitionWhitespace")):n(m)}function h(m){return t(m)}}function $m(e,t,n){return e.check(Ht,t,e.attempt(Nm,t,n))}function Hm(e){e.exit("gfmFootnoteDefinition")}function Vm(e,t,n){const i=this;return V(e,r,"gfmFootnoteDefinitionIndent",5);function r(o){const s=i.events[i.events.length-1];return s&&s[1].type==="gfmFootnoteDefinitionIndent"&&s[2].sliceSerialize(s[1],!0).length===4?t(o):n(o)}}function qm(e){let n=(e||{}).singleTilde;const i={name:"strikethrough",tokenize:o,resolveAll:r};return n==null&&(n=!0),{text:{126:i},insideSpan:{null:[i]},attentionMarkers:{null:[126]}};function r(s,a){let l=-1;for(;++l<s.length;)if(s[l][0]==="enter"&&s[l][1].type==="strikethroughSequenceTemporary"&&s[l][1]._close){let c=l;for(;c--;)if(s[c][0]==="exit"&&s[c][1].type==="strikethroughSequenceTemporary"&&s[c][1]._open&&s[l][1].end.offset-s[l][1].start.offset===s[c][1].end.offset-s[c][1].start.offset){s[l][1].type="strikethroughSequence",s[c][1].type="strikethroughSequence";const d={type:"strikethrough",start:Object.assign({},s[c][1].start),end:Object.assign({},s[l][1].end)},u={type:"strikethroughText",start:Object.assign({},s[c][1].end),end:Object.assign({},s[l][1].start)},f=[["enter",d,a],["enter",s[c][1],a],["exit",s[c][1],a],["enter",u,a]],h=a.parser.constructs.insideSpan.null;h&&he(f,f.length,0,In(h,s.slice(c+1,l),a)),he(f,f.length,0,[["exit",u,a],["enter",s[l][1],a],["exit",s[l][1],a],["exit",d,a]]),he(s,c-1,l-c+3,f),l=c+f.length-2;break}}for(l=-1;++l<s.length;)s[l][1].type==="strikethroughSequenceTemporary"&&(s[l][1].type="data");return s}function o(s,a,l){const c=this.previous,d=this.events;let u=0;return f;function f(m){return c===126&&d[d.length-1][1].type!=="characterEscape"?l(m):(s.enter("strikethroughSequenceTemporary"),h(m))}function h(m){const g=dt(c);if(m===126)return u>1?l(m):(s.consume(m),u++,h);if(u<2&&!n)return l(m);const b=s.exit("strikethroughSequenceTemporary"),p=dt(m);return b._open=!p||p===2&&!!g,b._close=!g||g===2&&!!p,a(m)}}}class Wm{constructor(){this.map=[]}add(t,n,i){Km(this,t,n,i)}consume(t){if(this.map.sort(function(o,s){return o[0]-s[0]}),this.map.length===0)return;let n=this.map.length;const i=[];for(;n>0;)n-=1,i.push(t.slice(this.map[n][0]+this.map[n][1]),this.map[n][2]),t.length=this.map[n][0];i.push(t.slice()),t.length=0;let r=i.pop();for(;r;){for(const o of r)t.push(o);r=i.pop()}this.map.length=0}}function Km(e,t,n,i){let r=0;if(!(n===0&&i.length===0)){for(;r<e.map.length;){if(e.map[r][0]===t){e.map[r][1]+=n,e.map[r][2].push(...i);return}r+=1}e.map.push([t,n,i])}}function Gm(e,t){let n=!1;const i=[];for(;t<e.length;){const r=e[t];if(n){if(r[0]==="enter")r[1].type==="tableContent"&&i.push(e[t+1][1].type==="tableDelimiterMarker"?"left":"none");else if(r[1].type==="tableContent"){if(e[t-1][1].type==="tableDelimiterMarker"){const o=i.length-1;i[o]=i[o]==="left"?"center":"right"}}else if(r[1].type==="tableDelimiterRow")break}else r[0]==="enter"&&r[1].type==="tableDelimiterRow"&&(n=!0);t+=1}return i}function Ym(){return{flow:{null:{name:"table",tokenize:Jm,resolveAll:Qm}}}}function Jm(e,t,n){const i=this;let r=0,o=0,s;return a;function a(S){let M=i.events.length-1;for(;M>-1;){const N=i.events[M][1].type;if(N==="lineEnding"||N==="linePrefix")M--;else break}const _=M>-1?i.events[M][1].type:null,F=_==="tableHead"||_==="tableRow"?v:l;return F===v&&i.parser.lazy[i.now().line]?n(S):F(S)}function l(S){return e.enter("tableHead"),e.enter("tableRow"),c(S)}function c(S){return S===124||(s=!0,o+=1),d(S)}function d(S){return S===null?n(S):j(S)?o>1?(o=0,i.interrupt=!0,e.exit("tableRow"),e.enter("lineEnding"),e.consume(S),e.exit("lineEnding"),h):n(S):$(S)?V(e,d,"whitespace")(S):(o+=1,s&&(s=!1,r+=1),S===124?(e.enter("tableCellDivider"),e.consume(S),e.exit("tableCellDivider"),s=!0,d):(e.enter("data"),u(S)))}function u(S){return S===null||S===124||G(S)?(e.exit("data"),d(S)):(e.consume(S),S===92?f:u)}function f(S){return S===92||S===124?(e.consume(S),u):u(S)}function h(S){return i.interrupt=!1,i.parser.lazy[i.now().line]?n(S):(e.enter("tableDelimiterRow"),s=!1,$(S)?V(e,m,"linePrefix",i.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(S):m(S))}function m(S){return S===45||S===58?b(S):S===124?(s=!0,e.enter("tableCellDivider"),e.consume(S),e.exit("tableCellDivider"),g):I(S)}function g(S){return $(S)?V(e,b,"whitespace")(S):b(S)}function b(S){return S===58?(o+=1,s=!0,e.enter("tableDelimiterMarker"),e.consume(S),e.exit("tableDelimiterMarker"),p):S===45?(o+=1,p(S)):S===null||j(S)?T(S):I(S)}function p(S){return S===45?(e.enter("tableDelimiterFiller"),k(S)):I(S)}function k(S){return S===45?(e.consume(S),k):S===58?(s=!0,e.exit("tableDelimiterFiller"),e.enter("tableDelimiterMarker"),e.consume(S),e.exit("tableDelimiterMarker"),x):(e.exit("tableDelimiterFiller"),x(S))}function x(S){return $(S)?V(e,T,"whitespace")(S):T(S)}function T(S){return S===124?m(S):S===null||j(S)?!s||r!==o?I(S):(e.exit("tableDelimiterRow"),e.exit("tableHead"),t(S)):I(S)}function I(S){return n(S)}function v(S){return e.enter("tableRow"),E(S)}function E(S){return S===124?(e.enter("tableCellDivider"),e.consume(S),e.exit("tableCellDivider"),E):S===null||j(S)?(e.exit("tableRow"),t(S)):$(S)?V(e,E,"whitespace")(S):(e.enter("data"),P(S))}function P(S){return S===null||S===124||G(S)?(e.exit("data"),E(S)):(e.consume(S),S===92?O:P)}function O(S){return S===92||S===124?(e.consume(S),P):P(S)}}function Qm(e,t){let n=-1,i=!0,r=0,o=[0,0,0,0],s=[0,0,0,0],a=!1,l=0,c,d,u;const f=new Wm;for(;++n<e.length;){const h=e[n],m=h[1];h[0]==="enter"?m.type==="tableHead"?(a=!1,l!==0&&(io(f,t,l,c,d),d=void 0,l=0),c={type:"table",start:Object.assign({},m.start),end:Object.assign({},m.end)},f.add(n,0,[["enter",c,t]])):m.type==="tableRow"||m.type==="tableDelimiterRow"?(i=!0,u=void 0,o=[0,0,0,0],s=[0,n+1,0,0],a&&(a=!1,d={type:"tableBody",start:Object.assign({},m.start),end:Object.assign({},m.end)},f.add(n,0,[["enter",d,t]])),r=m.type==="tableDelimiterRow"?2:d?3:1):r&&(m.type==="data"||m.type==="tableDelimiterMarker"||m.type==="tableDelimiterFiller")?(i=!1,s[2]===0&&(o[1]!==0&&(s[0]=s[1],u=en(f,t,o,r,void 0,u),o=[0,0,0,0]),s[2]=n)):m.type==="tableCellDivider"&&(i?i=!1:(o[1]!==0&&(s[0]=s[1],u=en(f,t,o,r,void 0,u)),o=s,s=[o[1],n,0,0])):m.type==="tableHead"?(a=!0,l=n):m.type==="tableRow"||m.type==="tableDelimiterRow"?(l=n,o[1]!==0?(s[0]=s[1],u=en(f,t,o,r,n,u)):s[1]!==0&&(u=en(f,t,s,r,n,u)),r=0):r&&(m.type==="data"||m.type==="tableDelimiterMarker"||m.type==="tableDelimiterFiller")&&(s[3]=n)}for(l!==0&&io(f,t,l,c,d),f.consume(t.events),n=-1;++n<t.events.length;){const h=t.events[n];h[0]==="enter"&&h[1].type==="table"&&(h[1]._align=Gm(t.events,n))}return e}function en(e,t,n,i,r,o){const s=i===1?"tableHeader":i===2?"tableDelimiter":"tableData",a="tableContent";n[0]!==0&&(o.end=Object.assign({},it(t.events,n[0])),e.add(n[0],0,[["exit",o,t]]));const l=it(t.events,n[1]);if(o={type:s,start:Object.assign({},l),end:Object.assign({},l)},e.add(n[1],0,[["enter",o,t]]),n[2]!==0){const c=it(t.events,n[2]),d=it(t.events,n[3]),u={type:a,start:Object.assign({},c),end:Object.assign({},d)};if(e.add(n[2],0,[["enter",u,t]]),i!==2){const f=t.events[n[2]],h=t.events[n[3]];if(f[1].end=Object.assign({},h[1].end),f[1].type="chunkText",f[1].contentType="text",n[3]>n[2]+1){const m=n[2]+1,g=n[3]-n[2]-1;e.add(m,g,[])}}e.add(n[3]+1,0,[["exit",u,t]])}return r!==void 0&&(o.end=Object.assign({},it(t.events,r)),e.add(r,0,[["exit",o,t]]),o=void 0),o}function io(e,t,n,i,r){const o=[],s=it(t.events,n);r&&(r.end=Object.assign({},s),o.push(["exit",r,t])),i.end=Object.assign({},s),o.push(["exit",i,t]),e.add(n+1,0,o)}function it(e,t){const n=e[t],i=n[0]==="enter"?"start":"end";return n[1][i]}const Xm={name:"tasklistCheck",tokenize:eg};function Zm(){return{text:{91:Xm}}}function eg(e,t,n){const i=this;return r;function r(l){return i.previous!==null||!i._gfmTasklistFirstContentOfListItem?n(l):(e.enter("taskListCheck"),e.enter("taskListCheckMarker"),e.consume(l),e.exit("taskListCheckMarker"),o)}function o(l){return G(l)?(e.enter("taskListCheckValueUnchecked"),e.consume(l),e.exit("taskListCheckValueUnchecked"),s):l===88||l===120?(e.enter("taskListCheckValueChecked"),e.consume(l),e.exit("taskListCheckValueChecked"),s):n(l)}function s(l){return l===93?(e.enter("taskListCheckMarker"),e.consume(l),e.exit("taskListCheckMarker"),e.exit("taskListCheck"),a):n(l)}function a(l){return j(l)?t(l):$(l)?e.check({tokenize:tg},t,n)(l):n(l)}}function tg(e,t,n){return V(e,i,"whitespace");function i(r){return r===null?n(r):t(r)}}function ng(e){return hs([Tm(),jm(),qm(e),Ym(),Zm()])}const ig={};function rg(e){const t=this,n=e||ig,i=t.data(),r=i.micromarkExtensions||(i.micromarkExtensions=[]),o=i.fromMarkdownExtensions||(i.fromMarkdownExtensions=[]),s=i.toMarkdownExtensions||(i.toMarkdownExtensions=[]);r.push(ng(n)),o.push(Sm()),s.push(Am(n))}function Zn(e){if(!e)return{videoId:null,embedUrl:null,thumbnailUrl:null};const t=e.replace(/[?#]no-embed/,""),n=t.match(/(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/),i=t.match(/youtube\.com\/.*[?&]list=([a-zA-Z0-9_-]+)/);if(n){const r=n[1],o=`https://www.youtube.com/embed/${r}${i?`?list=${i[1]}`:""}`,s=`https://img.youtube.com/vi/${r}/hqdefault.jpg`;return{videoId:r,embedUrl:o,thumbnailUrl:s}}else if(i)return{videoId:null,embedUrl:`https://www.youtube.com/embed/videoseries?list=${i[1]}`,thumbnailUrl:null};return{videoId:null,embedUrl:null,thumbnailUrl:null}}function og(e){const t=e.match(/https?:\/\/(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)[a-zA-Z0-9_-]{11}/g);return t?Array.from(new Set(t)):[]}const sg=({codeString:e})=>{const t=sn.useRef(null);return sn.useEffect(()=>{const n=window.innerWidth<768;let i=e;n&&(i=i.replace(/graph LR/g,"graph TD").replace(/flowchart LR/g,"flowchart TD"));let r=!1;return(async()=>{if(t.current)try{const[{default:s},{default:a}]=await Promise.all([nr(()=>import("./mermaid.core-Cxrnw3CG.js").then(u=>u.cb),__vite__mapDeps([0,1,2,3])),nr(()=>import("./svg-pan-zoom-Bed-R1tv.js").then(u=>u.s),__vite__mapDeps([4,2]))]);if(r)return;s.initialize({startOnLoad:!1,theme:"dark",themeVariables:{fontFamily:"Plus Jakarta Sans, system-ui, -apple-system, sans-serif",primaryColor:"#1e293b",primaryTextColor:"#f8fafc",primaryBorderColor:"#38bdf8",lineColor:"#94a3b8",textColor:"#f8fafc",nodeBorder:"#38bdf8",mainBkg:"transparent",actorBkg:"#1e293b",actorBorder:"#38bdf8",actorTextColor:"#f8fafc",actorLineColor:"#64748b",signalColor:"#38bdf8",signalTextColor:"#f8fafc",labelBoxBkgColor:"#0f172a",labelBoxBorderColor:"#334155",labelTextColor:"#f8fafc",noteBkgColor:"#0f172a",noteBorderColor:"#38bdf8",noteTextColor:"#f8fafc",clusterBkg:"#0b0f19",clusterBorder:"#334155"},securityLevel:"loose",flowchart:{useMaxWidth:!1,htmlLabels:!0,curve:"linear",padding:36},sequence:{actorFontFamily:"Plus Jakarta Sans, system-ui, -apple-system, sans-serif",noteFontFamily:"Plus Jakarta Sans, system-ui, -apple-system, sans-serif",messageFontFamily:"Plus Jakarta Sans, system-ui, -apple-system, sans-serif",boxMargin:16,boxTextMargin:8,noteMargin:12,messageMargin:10,width:170,height:65,useMaxWidth:!1}});const l=`mermaid-${Math.random().toString(36).substr(2,9)}`,{svg:c}=await s.render(l,i);if(r||!t.current)return;t.current.innerHTML=c;const d=t.current.querySelector("svg");d&&(d.style.maxWidth="100%",d.style.height="auto",d.style.minHeight="350px",d.style.overflow="visible",window.innerWidth<768||a(d,{zoomEnabled:!0,controlIconsEnabled:!1,fit:!0,center:!0,minZoom:.5,maxZoom:10}))}catch(s){console.error("Mermaid rendering failed",s)}})(),()=>{r=!0}},[e]),A.jsxs(so,{my:8,className:"mermaid-box overflow-hidden rounded-2xl border border-line bg-surface shadow-md",children:[A.jsx("style",{children:`
        /* Viewport-aware touch action and scroll limits */
        @media (max-width: 767px) {
          .mermaid-box {
            touch-action: auto !important;
          }
          .mermaid-container {
            overflow-x: auto !important;
            overflow-y: hidden !important;
            justify-content: flex-start !important;
            -webkit-overflow-scrolling: touch;
          }
          .mermaid-container svg {
            max-width: none !important;
            width: auto !important;
            min-width: 800px !important; /* Force a minimum readable width on mobile */
            height: auto !important;
          }
        }
        @media (min-width: 768px) {
          .mermaid-box {
            touch-action: none !important;
          }
        }

        /* Guarantee node text is light, crisp, and readable */
        .mermaid .node text,
        .mermaid .node .label,
        .mermaid .label,
        .mermaid text {
          fill: #f8fafc !important;
          color: #f8fafc !important;
          font-family: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif !important;
          font-size: 14px !important;
          font-weight: 600 !important;
        }
        /* Style subgraph/cluster titles */
        .mermaid .cluster text,
        .mermaid .cluster-label,
        .mermaid .cluster-label text,
        .mermaid .cluster text span {
          fill: #38bdf8 !important;
          color: #38bdf8 !important;
          font-family: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif !important;
          font-size: 15px !important;
          font-weight: 700 !important;
          letter-spacing: 0.03em !important;
        }
        .mermaid .cluster rect {
          fill: #0b0f17 !important;
          stroke: #334155 !important;
          stroke-width: 1.5px !important;
          rx: 12px !important;
          ry: 12px !important;
        }
        /* Style node boxes nicely */
        .mermaid .node rect,
        .mermaid .node circle,
        .mermaid .node polygon,
        .mermaid .node path {
          stroke-width: 2px !important;
          rx: 8px !important;
          ry: 8px !important;
        }
        /* Style connection arrows and lines - Steel Grey #94a3b8 */
        .mermaid .edgePath .path,
        .mermaid .transition {
          stroke: #94a3b8 !important;
          stroke-width: 2.5px !important;
          opacity: 1.0 !important;
        }
        .mermaid .marker {
          fill: #94a3b8 !important;
          stroke: #94a3b8 !important;
          stroke-width: 2px !important;
        }
        /* Style edge labels (connection names) elegantly */
        .mermaid .edgeLabel text,
        .mermaid .edgeLabel span {
          fill: #e2e8f0 !important;
          color: #e2e8f0 !important;
          font-family: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif !important;
          font-size: 12px !important;
          font-weight: 600 !important;
        }
        .mermaid .edgeLabel rect {
          fill: #0f172a !important;
          stroke: #334155 !important;
          stroke-width: 1px !important;
          rx: 6px !important;
          ry: 6px !important;
        }
        /* Style sequence diagrams */
        .mermaid .actor {
          stroke: #38bdf8 !important;
          fill: #1e293b !important;
          stroke-width: 2px !important;
          rx: 8px !important;
          ry: 8px !important;
        }
        .mermaid text.actor,
        .mermaid .actor text {
          fill: #f8fafc !important;
          font-size: 13px !important;
          font-weight: 700 !important;
        }
        .mermaid .actor-line {
          stroke: #475569 !important;
          stroke-width: 1.5px !important;
          stroke-dasharray: 4 4 !important;
        }
        .mermaid .messageLine0,
        .mermaid .messageLine1 {
          stroke: #38bdf8 !important;
          stroke-width: 2px !important;
        }
        .mermaid .messageText {
          fill: #e2e8f0 !important;
          stroke: none !important;
          font-size: 12px !important;
          font-weight: 600 !important;
        }
        .mermaid .active0,
        .mermaid .active1 {
          fill: #0f172a !important;
          stroke: #38bdf8 !important;
          stroke-width: 1.5px !important;
        }
        .mermaid .note {
          fill: #0f172a !important;
          stroke: #38bdf8 !important;
          stroke-width: 1.5px !important;
          rx: 6px !important;
          ry: 6px !important;
        }
        .mermaid .noteText,
        .mermaid .noteText span {
          fill: #f8fafc !important;
          font-size: 12px !important;
          font-weight: 500 !important;
        }
        .mermaid .sequenceNumber {
          fill: #38bdf8 !important;
          stroke: #38bdf8 !important;
          color: #0b0f19 !important;
          font-weight: 700 !important;
        }
        .mermaid .labelBox {
          fill: #0f172a !important;
          stroke: #334155 !important;
          stroke-width: 1px !important;
        }
        /* Style padding of SVG cleanly for proper containment */
        .mermaid svg {
          padding: 36px !important;
          overflow: visible !important;
        }
      `}),A.jsx("div",{ref:t,className:"mermaid-container flex flex-row justify-center",style:{width:"100%",minHeight:"600px",padding:"1rem"}})]})},mg=({slug:e,onBack:t})=>{const n=Mc(e),i=Dc.find(p=>p.id===e||p.canonicalPath&&p.canonicalPath.replace("/research/","")===e);if(!n)return A.jsxs("div",{className:"mx-auto max-w-3xl px-4 py-16 text-center rounded-3xl bg-surface/40 border border-line",children:[A.jsx(er,{title:"Article Not Found",description:"The requested research paper could not be found."}),A.jsx("h2",{className:"text-2xl font-bold text-text-main",children:"Article Not Found"}),A.jsx("p",{className:"mt-2 text-text-dim",children:"The requested research paper could not be found."}),A.jsxs("button",{onClick:t,className:"mt-6 inline-flex items-center space-x-2 rounded-xl bg-accent-sky hover:bg-accent-sky/90 text-bg px-4 py-2 text-sm font-semibold transition-colors min-h-[44px]",children:[A.jsx(ir,{className:"h-4 w-4"}),A.jsx("span",{children:"Back to Research"})]})]});const r=n.content.match(/!\[.*?\]\((.*?)\)/),s=(r?r[1].split("#")[0]:void 0)||(i==null?void 0:i.image),a=(n.category||"").toLowerCase().includes("robotics")?"research":"devai",c=a==="research"||n.slug.includes("thesis")||n.slug.includes("planning")||n.slug.includes("report")?ba({headline:n.title,abstract:n.summary,canonicalPath:`/${a}/${n.slug}`,datePublished:n.date,image:s}):wa({headline:n.title,description:n.summary,canonicalPath:`/${a}/${n.slug}`,datePublished:n.date,image:s,keywords:n.tags}),d=ka([{name:"Home",path:"/"},{name:a==="research"?"Robotics Research":"DevAI & Software Systems",path:`/${a}`},{name:n.title,path:`/${a}/${n.slug}`}]),u=[];if(i!=null&&i.videoUrl){const p=i.videoUrl,k=Zn(p);u.push(tr({name:`${n.title} - Demonstration Video`,description:n.summary,contentUrl:p,embedUrl:k.embedUrl||p,thumbnailUrl:k.thumbnailUrl||s,uploadDate:n.date}))}else{const p=og(n.content);p.length>0&&p.slice(0,3).forEach((k,x)=>{const T=Zn(k);T.embedUrl&&u.push(tr({name:`${n.title} - Video Clip ${x+1}`,description:n.summary,contentUrl:k,embedUrl:T.embedUrl,thumbnailUrl:T.thumbnailUrl||s,uploadDate:n.date}))})}const f=[],h=/!\[([^\]]*)\]\(([^)]+)\)/g;let m;const g=new Set;for(;(m=h.exec(n.content))!==null;){const p=m[1]||"",x=(m[2]||"").split("#")[0].trim();if(!x)continue;const T=x.startsWith("http")?x:`${xa}${x.startsWith("/")?"":"/"}${x}`;if(!g.has(T)){g.add(T);let I=p.includes("|")?p.split("|")[0].trim():p;I=I.replace(/^Figure:\s*/i,"").replace(/\[([^\]]+)\]\([^)]+\)/g,"$1").trim(),f.push({"@context":"https://schema.org","@type":"ImageObject","@id":`${T}#image`,url:T,caption:I||n.title,width:1200,height:630,license:va})}}const b={"@context":"https://schema.org","@graph":[c,d,...f,...u]};return A.jsxs("article",{className:"mx-auto max-w-4xl px-4 py-12 space-y-8",children:[A.jsx(er,{title:n.title,description:n.summary,canonicalUrl:`/${a}/${n.slug}`,ogType:"article",ogImage:s,jsonLd:b}),A.jsxs("button",{onClick:t,className:"inline-flex items-center space-x-2 text-sm font-semibold text-text-dim hover:text-accent-sky transition-colors",children:[A.jsx(ir,{className:"h-4 w-4"}),A.jsx("span",{children:"Back to Articles"})]}),A.jsxs("header",{className:"border-b border-line pb-8 space-y-4",children:[A.jsx(Sa,{direction:"row",wrap:!0,className:"gap-2",children:n.tags.map(p=>A.jsx(so,{as:"span",px:3,py:1,className:"rounded-md bg-accent-sky/10 text-xs font-semibold text-accent-sky border border-accent-sky/15",children:p},p))}),A.jsx("h1",{className:"text-3xl sm:text-4xl font-black text-text-main leading-tight",children:n.title}),A.jsxs("div",{className:"flex items-center space-x-6 text-xs text-text-dim",children:[A.jsxs("span",{className:"flex items-center space-x-1.5",children:[A.jsx(Ta,{className:"h-4 w-4 text-text-dim"}),A.jsx("time",{dateTime:n.date,children:n.date})]}),A.jsxs("span",{className:"flex items-center space-x-1.5",children:[A.jsx(Pa,{className:"h-4 w-4 text-text-dim"}),A.jsx("span",{children:n.readingTime})]})]}),i&&(i.pdfUrl||i.videoUrl||i.playlistUrl||i.sourceUrl||i.externalUrl)&&A.jsxs("div",{className:"flex flex-wrap gap-3 pt-4 border-t border-line/50",children:[i.pdfUrl&&A.jsxs("a",{href:i.pdfUrl,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center space-x-2 bg-accent/15 border border-accent/30 text-accent hover:bg-accent/25 px-4 py-2 rounded-xl text-xs font-semibold transition-colors min-h-[44px]",children:[A.jsx(Aa,{className:"h-4 w-4 text-accent"}),A.jsx("span",{children:"Download PDF Report"})]}),i.videoUrl&&A.jsxs("a",{href:i.videoUrl,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center space-x-2 bg-surface border border-line text-text-dim hover:bg-surface-alt hover:text-text-main px-4 py-2 rounded-xl text-xs font-semibold transition-colors min-h-[44px]",children:[A.jsx(co,{className:"h-4 w-4 text-accent"}),A.jsx("span",{children:"Watch Video Demo"})]}),i.playlistUrl&&A.jsxs("a",{href:i.playlistUrl,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center space-x-2 bg-surface border border-line text-text-dim hover:bg-surface-alt hover:text-text-main px-4 py-2 rounded-xl text-xs font-semibold transition-colors min-h-[44px]",children:[A.jsx(lo,{className:"h-4 w-4 text-accent"}),A.jsx("span",{children:"Watch Playlist"})]}),i.sourceUrl&&A.jsxs("a",{href:i.sourceUrl,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center space-x-2 bg-surface border border-line text-text-dim hover:bg-surface-alt hover:text-text-main px-4 py-2 rounded-xl text-xs font-semibold transition-colors min-h-[44px]",children:[A.jsx(oo,{className:"h-4 w-4"}),A.jsx("span",{children:"Source Repository"})]}),i.externalUrl&&!i.pdfUrl&&A.jsxs("a",{href:i.externalUrl,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center space-x-2 bg-surface border border-line text-text-dim hover:bg-surface-alt hover:text-text-main px-4 py-2 rounded-xl text-xs font-semibold transition-colors min-h-[44px]",children:[A.jsx(ao,{className:"h-4 w-4 text-accent"}),A.jsx("span",{children:i.externalLinkDisplayLabel||"External Link"})]})]})]}),A.jsx("div",{className:"prose-editorial",children:A.jsx(qf,{remarkPlugins:[rg],components:{code:({className:p,children:k,...x})=>{const T=/language-(\w+)/.exec(p||""),I=T?T[1]:"",v=String(k).replace(/\n$/,"");return I==="mermaid"?A.jsx(sg,{codeString:v}):v.includes(`
`)||!!I?A.jsxs("div",{className:"my-6 rounded-2xl border border-line overflow-hidden bg-bg",children:[I&&A.jsx("div",{className:"bg-surface px-4 py-2 border-b border-line text-xs font-semibold text-text-dim",children:I}),A.jsx("pre",{className:"p-4 overflow-x-auto text-sm font-mono text-accent-sky/90 leading-relaxed bg-bg whitespace-pre-wrap break-words",children:A.jsx("code",{children:k})})]}):A.jsx("code",{className:"bg-surface text-text-main px-1.5 py-0.5 rounded font-mono text-xs border border-line normal-case",...x,children:k})},table:({children:p,...k})=>A.jsx("div",{className:"my-6 w-full overflow-x-auto rounded-2xl border border-line bg-surface/10",children:A.jsx("table",{className:"w-full border-collapse text-sm",...k,children:p})}),th:({children:p,...k})=>A.jsx("th",{className:"border-b border-line bg-surface/80 p-4 text-left font-sans text-sm font-bold text-text-main",...k,children:p}),td:({children:p,...k})=>A.jsx("td",{className:"border-b border-line/50 p-4 text-text-body",...k,children:p}),h1:({children:p,...k})=>{let x="";typeof p=="string"?x=p:Array.isArray(p)&&(x=p.map(I=>typeof I=="string"?I:"").join(""));const T=x.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)+/g,"");return A.jsx("h2",{id:T||void 0,className:"text-2xl font-bold text-text-main mt-12 mb-4 pb-2 border-b border-line",...k,children:p})},h2:({children:p,...k})=>{let x="";typeof p=="string"?x=p:Array.isArray(p)&&(x=p.map(I=>typeof I=="string"?I:"").join(""));const T=x.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)+/g,"");return A.jsx("h2",{id:T||void 0,className:"text-2xl font-bold text-text-main mt-12 mb-4 pb-2 border-b border-line",...k,children:p})},h3:({children:p,...k})=>{let x="";typeof p=="string"?x=p:Array.isArray(p)&&(x=p.map(I=>typeof I=="string"?I:"").join(""));const T=x.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)+/g,"");return A.jsx("h3",{id:T||void 0,className:"text-lg font-bold text-text-main mt-8 mb-3",...k,children:p})},h4:({children:p,...k})=>{let x="";typeof p=="string"?x=p:Array.isArray(p)&&(x=p.map(I=>typeof I=="string"?I:"").join(""));const T=x.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)+/g,"");return A.jsx("h4",{id:T||void 0,className:"text-base font-bold text-text-main mt-6 mb-2",...k,children:p})},ul:({children:p,...k})=>A.jsx("ul",{className:"list-disc pl-6 my-4 space-y-1.5 text-text-body",...k,children:p}),ol:({children:p,...k})=>A.jsx("ol",{className:"list-decimal pl-6 my-4 space-y-1.5 text-text-body",...k,children:p}),a:({href:p,children:k,...x})=>{if(p){const T=p.includes("no-embed"),I=p.replace(/[?#]no-embed/,""),v=Zn(I),E=(I.includes("youtube.com")||I.includes("youtu.be"))&&!T;return v.embedUrl&&E?A.jsxs("div",{className:"block space-y-2",children:[A.jsx("div",{className:"relative aspect-video w-full rounded-2xl overflow-hidden border border-line bg-surface shadow-md",children:A.jsx("iframe",{src:v.embedUrl,title:typeof k=="string"?k:"YouTube video player",className:"absolute top-0 left-0 w-full h-full border-0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0})}),A.jsx("a",{href:I,target:"_blank",rel:"noopener noreferrer",className:"inline-block text-xs font-medium text-accent hover:underline",...x,children:"Open on YouTube ↗"})]}):A.jsx("a",{href:I,target:I.startsWith("http")?"_blank":void 0,rel:I.startsWith("http")?"noopener noreferrer":void 0,className:"text-accent hover:underline font-medium",...x,children:k})}return A.jsx("a",{href:p,className:"text-accent hover:underline font-medium",...x,children:k})},p:({children:p,...k})=>{const x=Pn.Children.toArray(p);if(x.length>1&&x.every(E=>{if(typeof E=="string"&&E.trim()==="")return!0;if(Pn.isValidElement(E)){const P=E.props;if(P&&P.href&&(P.href.includes("youtube.com")||P.href.includes("youtu.be"))||E.type==="img"||P&&P.src)return!0}return!1}))return A.jsx("div",{className:"my-8 grid grid-cols-1 md:grid-cols-2 gap-6 items-start",children:x.map((E,P)=>typeof E=="string"&&E.trim()===""?null:A.jsx("div",{className:"w-full",children:E},P))});const I=E=>{var S,M,_;if(!Pn.isValidElement(E))return!1;const P=E.type;if(P==="img"||P==="figure"||P==="div"||(S=E.props)!=null&&S.src)return!0;if(P==="a"||(M=E.props)!=null&&M.href){const F=E.props;if(F&&F.href&&(F.href.includes("youtube.com")||F.href.includes("youtu.be"))&&!F.href.includes("no-embed"))return!0}const O=(_=E.props)==null?void 0:_.children;return O?Array.isArray(O)?O.some(I):I(O):!1};return x.some(I)?A.jsx("div",{className:"mb-6",children:p}):A.jsx("p",{className:"text-text-body text-base leading-relaxed mb-6",...k,children:p})},li:({children:p,...k})=>A.jsx("li",{className:"text-text-body leading-relaxed",...k,children:p}),img:({src:p,alt:k,...x})=>{var J,ae,fe;const T=p?p.split("#")[0]:"",I=p&&p.includes("#")?p.split("#").slice(1).join("#"):"",v=I.includes("invert-dark")||I.includes("invert");let E="";I.includes("max-w-xs")?E="max-w-xs mx-auto":I.includes("max-w-sm")?E="max-w-sm mx-auto":I.includes("max-w-md")?E="max-w-md mx-auto":I.includes("max-w-lg")?E="max-w-lg mx-auto":I.includes("max-w-xl")?E="max-w-xl mx-auto":I.includes("max-w-2xl")?E="max-w-2xl mx-auto":I.includes("max-w-3xl")&&(E="max-w-3xl mx-auto");let P="";I.includes("aspect-4/3")?P="aspect-[4/3]":I.includes("aspect-video")?P="aspect-video":I.includes("aspect-square")&&(P="aspect-square");let O="object-contain";I.includes("object-cover")?O="object-cover":(I.includes("object-contain")||I.includes("contain"))&&(O="object-contain");let S="max-h-[380px]";const M=I.match(/max-h-\[[^\]]+\]|max-h-[a-zA-Z0-9]+/);M?S=M[0]:(I.includes("tall")||I.includes("contain"))&&(S="max-h-[500px]");let _=k||"",F="",N="";if(k&&k.includes("|")){const y=k.split("|");_=((J=y[0])==null?void 0:J.trim())||"",F=((ae=y[1])==null?void 0:ae.trim())||"",N=((fe=y[2])==null?void 0:fe.trim())||""}const R=P?`w-full ${P} relative flex justify-center items-center`:"w-full flex justify-center items-center",q=P?`w-full h-full ${O} rounded-xl ${v?"dark:invert dark:hue-rotate-180 dark:mix-blend-screen":""}`:`${S} w-auto max-w-full h-auto ${O} rounded-xl ${v?"dark:invert dark:hue-rotate-180 dark:mix-blend-screen":""}`;return A.jsxs("figure",{className:`my-6 space-y-2 ${E}`,children:[A.jsx("div",{className:"overflow-hidden rounded-2xl border border-line bg-surface/40 p-2 shadow-lg flex items-center justify-center",children:A.jsx(Qo,{src:T,alt:_,containerClassName:R,className:q,...x})}),_&&A.jsxs("figcaption",{className:"text-center text-xs text-text-dim px-2 leading-relaxed",children:[!_.toLowerCase().startsWith("figure")&&A.jsx("span",{className:"font-semibold text-accent-sky",children:"Figure: "}),_,F&&N&&A.jsxs(A.Fragment,{children:[" ",A.jsx("span",{className:"text-accent font-semibold ml-1",children:F})]})]})]})}},children:n.content})})]})};export{Ta as C,fg as F,pg as I,mg as R,Qo as S,Pa as a,Pc as b,Tc as f,hg as g};
