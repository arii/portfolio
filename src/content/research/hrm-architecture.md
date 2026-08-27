---
title: "HRM: Real-Time Biometric Telemetry & Distributed Workout Synchronization"
author: "Ariel Anders, PhD"
category: "DevAI"
tags: ["React", "Web Bluetooth", "WebSockets", "Spotify API", "Telemetry"]
---

I developed the Heart Rate Monitor (HRM) as a comprehensive system for real-time biometric telemetry and distributed workout synchronization. Built as a DevAI-assisted engineering project, HRM bridges personal fitness hardware with immersive, multi-device software environments. The architecture integrates low-level Bluetooth communication, real-time WebSocket state replication, and responsive media controls to create a seamless workout experience.

## Web Bluetooth GATT Lifecycle

The foundation of the telemetry system relies on the Web Bluetooth API to establish a robust connection with peripheral heart rate sensors.

I implemented a robust GATT (Generic Attribute Profile) client lifecycle that begins by scanning for devices advertising the standard Heart Rate Service (UUID `0x180D`). Once connected, the client subscribes to the Heart Rate Measurement Characteristic (`0x2A37`). The incoming data streams as a raw byte buffer, which I decode in real-time to extract beats-per-minute (BPM) and sensor contact status. To ensure uninterrupted data flow during rigorous workouts, the client includes an auto-reconnect handler that gracefully manages transient signal losses and state recovery without requiring user intervention.

## Persistent WebSocket Synchronization Server

To project the biometric data across multiple displays, I engineered a persistent WebSocket synchronization server.

This server acts as the central hub for multi-client state broadcast. It guarantees sub-100ms latency for state replication, ensuring that BPM updates, workout phases, and UI interactions appear instantaneously across all connected display devices. Furthermore, the server orchestrates synchronized HIIT (High-Intensity Interval Training) interval timers, driving the core logic of the workout and keeping all clients temporally aligned regardless of local device clock drift.

## Spotify API & Web Playback Integration

A critical component of the immersive workout experience is dynamic audio control. I integrated the Spotify API and the Spotify Web Playback SDK to synchronize music with the active workout state.

The integration utilizes OAuth PKCE (Proof Key for Code Exchange) for secure, client-side token negotiation without exposing client secrets. A background token refresh loop maintains an uninterrupted session. During a workout, the system exerts real-time playback control synced directly to the HIIT intervals, automatically adjusting playback state based on the current interval.

## System Topology

The following diagram illustrates the data flow and system topology, from the biometric peripheral through the web client to the synchronized servers and external APIs.

```mermaid
graph TD
    classDef hardware fill:#0f172a,stroke:#3b82f6,stroke-width:2px,color:#ffffff,font-weight:bold;
    classDef client fill:#1e293b,stroke:#10b981,stroke-width:2px,color:#ffffff,font-weight:bold;
    classDef server fill:#1e293b,stroke:#f59e0b,stroke-width:2px,color:#ffffff,font-weight:bold;
    classDef api fill:#0f172a,stroke:#6366f1,stroke-width:2px,color:#ffffff,font-weight:bold;

    Peripheral[Bluetooth HR Sensor] ::: hardware
    WebClient[Primary Web Client] ::: client
    WSServer[WebSocket Sync Server] ::: server
    SecondaryClients[Secondary Display Clients] ::: client
    Spotify[Spotify Web API] ::: api

    Peripheral -- "GATT Data" --> WebClient
    WebClient -- "State Updates" --> WSServer
    WSServer -- "Broadcast Sync" --> WebClient
    WSServer -- "Broadcast Sync" --> SecondaryClients
    WebClient -- "OAuth & Playback" --> Spotify
```
