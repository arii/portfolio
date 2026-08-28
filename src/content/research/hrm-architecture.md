---
title: "HRM: Real-Time Biometric Telemetry & Distributed Workout Synchronization"
author: "Ariel Anders, PhD"
category: "DevAI"
tags: ["React", "Web Bluetooth", "WebSockets", "Spotify API", "Telemetry"]
---

I developed the Heart Rate Monitor (HRM) as a comprehensive system for real-time biometric telemetry and distributed workout synchronization. HRM bridges personal fitness hardware with immersive, multi-device software environments, integrating low-level Bluetooth communication, real-time WebSocket state replication, and responsive media controls.

## Origin Story & Architectural Evolution

HRM was originally conceived and built during the COVID-19 pandemic for my mother, myself, and our personal trainer, Tim (from FitForLife gym). The goal was to maintain real-time biometric telemetry during remote group workouts when physical gyms were closed. Achieving a stable, frictionless experience required three distinct architectural iterations:

### Iteration 1: OpenCV Video Loopback

![Iteration 1](/assets/research/hrm/evolve1.png#max-w-xl#aspect-video)

Initially, I captured BLE heart rate data via Python, overlaid a HUD text display onto the active video stream using `cv2.putText`, and outputted the composited stream to a `v4l2loopback` virtual camera device. I quickly abandoned this approach due to cross-platform OS driver fragility (struggling with DirectShow on Windows versus v4l2 on Linux).

### Iteration 2: Web Bluetooth + OBS VirtualCam

![Iteration 2](/assets/research/hrm/evolve2.png#max-w-xl#aspect-video)

The second iteration utilized a Web Bluetooth client rendered in a browser window, which I composited into Zoom using OBS Studio VirtualCam. I abandoned this due to Zoom aggressively locking camera devices, video mirroring inconsistencies, and window resize scaling artifacts that broke the HUD alignment.

### Iteration 3: Distributed Web Client + WebSocket Relay

![Iteration 3](/assets/research/hrm/evolve3.png#max-w-xl#aspect-video)

![Client Connection](/assets/research/hrm/client_connect.png#max-w-xl#aspect-video)

The final and current architecture moved to a decoupled, multi-client web topology. Individual participants connect their standard Bluetooth HR sensors (e.g., Polar, Garmin, Wahoo) to a local web client. This client streams telemetry to a central WebSocket server. The instructor views an aggregated, real-time dashboard displaying everyone's metrics, heart rate zones, and a synchronized Tabata interval timer.

## Deep Technical Implementation

### Web Bluetooth GATT Lifecycle & Decoding

![Browser Capability](/assets/research/hrm/browser_capability.png#max-w-xl#aspect-video)


The foundation relies on the Web Bluetooth API to connect with peripheral sensors using the standard Bluetooth 4.0 / ANT+ Heart Rate Profile.

The client lifecycle begins by scanning for devices advertising the Heart Rate Service (UUID `0x180D`). Once connected, it subscribes to the Heart Rate Measurement Characteristic (`0x2A37`). The incoming data streams as a raw byte buffer. I decode the flags byte in real-time to determine if the HR value is 8-bit or 16-bit, and to extract optional fields like energy expended or RR-interval buffers. The client includes an auto-reconnect handler that gracefully manages transient signal losses.

### Zone Engine

To provide immediate visual feedback, I implemented a Zone Engine based on the standard maximum heart rate formula: $HR_{max} = 220 - \text{age}$.

The telemetry is mapped into dynamic zone buckets:
- **Zone 1 (Grey):** 50-60% (Very Light)
- **Zone 2 (Blue):** 60-70% (Light)
- **Zone 3 (Green):** 70-80% (Moderate)
- **Zone 4 (Orange):** 80-90% (Hard)
- **Zone 5 (Red):** 90-100% (Maximum)

### WebSocket Protocol & Stale Data Guardrails

Multi-client synchronization is handled over Socket.io. To maintain a reliable dashboard, I engineered strict stale data guardrails and heartbeat handling. If telemetry from a client ceases for more than 4 seconds, the dashboard displays `--`. If the client remains inactive for over 30 seconds, the user's card automatically unmounts from the instructor's grid to prevent clutter.

### Mock Simulator Test Harness

![Mock Simulator](/assets/research/hrm/mock.png#max-w-xl#aspect-video)


To ensure the system could scale and handle network jitter, I built a dedicated mocking engine (`/hrm_mock`). This simulator allows for multi-user stress testing and synthetic biometric signal generation without requiring physical peripherals.

### Synchronized Workout Intervals & Spotify API

![Running Application](/assets/research/hrm/running.png#max-w-xl#aspect-video)


The central server orchestrates a synchronized Tabata HIIT timer (countdown, work intervals, rest periods, audio feedback beeps) across all client views, guaranteeing sub-100ms latency for state replication.

Furthermore, I integrated the Spotify API and Web Playback SDK to synchronize music with the active workout state using OAuth PKCE for client-side token negotiation. A background token refresh loop maintains an uninterrupted session. The system exerts real-time playback control synced directly to the HIIT intervals, automatically adjusting playback based on the current timer phase.

## System Topology

![HRM Server Dashboard](/assets/research/hrm/hrm_server.png#max-w-xl#aspect-video)


The following diagram illustrates the data flow and system topology, from the biometric peripheral through the web client to the synchronized servers and external APIs.

```mermaid
graph TD
    classDef hardware fill:#0f172a,stroke:#3b82f6,stroke-width:2px,color:#ffffff
    classDef client fill:#1e293b,stroke:#10b981,stroke-width:2px,color:#ffffff
    classDef server fill:#1e293b,stroke:#f59e0b,stroke-width:2px,color:#ffffff
    classDef api fill:#0f172a,stroke:#6366f1,stroke-width:2px,color:#ffffff

    Peripheral[Bluetooth HR Sensor] ::: hardware
    WebClient[Participant Web Client] ::: client
    Instructor[Instructor Dashboard] ::: client
    WSServer[WebSocket Sync Server] ::: server
    Spotify[Spotify Web API] ::: api

    Peripheral -->|GATT Data| WebClient
    WebClient -->|State Updates| WSServer
    WSServer -->|Broadcast Sync| WebClient
    WSServer -->|Broadcast Sync| Instructor
    WebClient -->|OAuth & Playback| Spotify
```
