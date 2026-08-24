---
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

# Boop Light Detector App

## iOS Assistive Technology for Visually Impaired Users

**Boop Light Detector** is an iOS accessibility application designed to translate ambient light levels into audible frequencies and tactile haptic feedback. Developed following the **MIT Assistive Technology Hackathon (ATHack 2016)**, the app has served blind and visually impaired users worldwide with over **6,000+ downloads** on the Apple App Store.

![Boop Light Detector app testing during development and user trials](/assets/research/app_testing.jpg)

---

## The Problem & Motivation

For blind and visually impaired individuals, simple daily tasks—such as checking whether household lights are turned on, verifying whether a Wi-Fi router status light is active, or locating open windows during the daytime—require specialized tools.

Existing light detection apps were often:
1. **Expensive or ad-laden**
2. **Inaccurate**, relying solely on raw camera pixel values without adjusting for automatic camera exposure and sensitivity adjustments.
3. **Slow or unresponsive**, requiring navigation through complex multi-screen UI menus.
4. **Lacking tactile feedback** for quiet environments like libraries or offices.

---

## Engineering Design & Key Features

Boop was engineered from the ground up with a minimalist, accessible single-screen architecture:

### 1. Multi-Factor Luminescence Sensing Algorithm
Rather than computing simple pixel RGB averages, Boop's light calculation factors in:
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
