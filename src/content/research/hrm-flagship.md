---
title: "HRM (Heart Rate Monitor)"
date: "2026-08-10"
tags: ["Robotics", "Web Bluetooth", "Spotify API", "Product"]
category: "Product Development"
slug: "hrm-flagship"
---

# HRM (Heart Rate Monitor)

Web Bluetooth heart-rate telemetry synced across multiple clients via a persistent WebSocket server, featuring full Spotify API integration and a synchronized workout timer.

## Overview

Designed as an end-to-end, high-fidelity developer showcase, HRM utilizes the browser's native Web Bluetooth API to connect directly to standard heart rate chest straps and armbands (such as Polar or Garmin).

Biometric telemetry is parsed in real time and broadcast to a lightweight WebSocket relay, enabling real-time multi-screen monitoring across tablets, phones, and streaming overlays.

## Features

- **Direct Web Bluetooth Connectivity:** Low-overhead biometric telemetry streaming.
- **WebSocket Synchronization:** Seamlessly cast workout stats to other screens/devices.
- **Spotify API Integration:** Dynamically adjust playlist playback based on current heart rate zones.
- **High-Performance Architecture:** Pure React layout with optimal canvas-based rendering for charts.
