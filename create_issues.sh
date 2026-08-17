#!/bin/bash

# Create GitHub issues for portfolio cards

gh issue create \
  --title "Portfolio Card: Reliably Arranging Objects" \
  --body "Category: PhD Research & Autonomous Manipulation (Flagship Core)

**Focus:** Willow Garage PR2 robot manipulation under uncertainty, fixture optimization for push/assembly reliability (increasing Tetris reliability from 1.9% to 80.7%), and belief-state planning without external sensing." \
  --label "portfolio-card"

gh issue create \
  --title "Portfolio Card: Belief State Visualization & Action Noise Characterization" \
  --body "Category: PhD Research & Autonomous Manipulation (Flagship Core)

**Focus:** Experimental noise characterization of grasping/placing actions and algorithm belief-state overlays." \
  --label "portfolio-card"

gh issue create \
  --title "Portfolio Card: Boop Light Detector" \
  --body "Category: Academic & Impact Projects

**Focus:** iOS accessibility utility translating ambient light intensity into audible frequencies for visually impaired users (6,000+ downloads)." \
  --label "portfolio-card"

gh issue create \
  --title "Portfolio Card: Light Therapy at MIT" \
  --body "Category: Academic & Impact Projects

**Focus:** Campus-wide seasonal affective disorder (SAD) wellness initiative funded by the MindHandHeart Innovation Fund." \
  --label "portfolio-card"

gh issue create \
  --title "Portfolio Card: BeaverWorks Summer Institute: RACECAR" \
  --body "Category: Academic & Impact Projects

**Focus:** Autonomous miniature racecar curriculum covering computer vision, visual servoing, motion planning, and obstacle avoidance." \
  --label "portfolio-card"

gh issue create \
  --title "Portfolio Card: Delivery Bots" \
  --body "Category: Academic & Impact Projects

**Focus:** Decentralized multi-agent package delivery in dynamic human environments (RSS 2015 Best Paper Finalist & IJRR journal publication)." \
  --label "portfolio-card"

gh issue create \
  --title "Portfolio Card: Learning Strategy for Whole-Arm Grasping (SWAG)" \
  --body "Category: Academic & Impact Projects

**Focus:** Master’s thesis utilizing reinforcement learning for bulky and irregular dynamic whole-arm manipulation." \
  --label "portfolio-card"

gh issue create \
  --title "Portfolio Card: Autonomous Drone Line Following" \
  --body "Category: Academic & Impact Projects

**Focus:** Feedback and control systems (16.31) with visual line tracking on a Parrot Rolling Spider drone." \
  --label "portfolio-card"

gh issue create \
  --title "Portfolio Card: Lab Energy Assessment Center (LEAC) Monitoring Software" \
  --body "Category: Academic & Impact Projects

**Focus:** Network monitoring software and energy audit infrastructure for fume hood efficiency (MIT Green Labs Innovation Award)." \
  --label "portfolio-card"

gh issue create \
  --title "Portfolio Card: RoboCon MIT" \
  --body "Category: Academic & Impact Projects

**Focus:** Cross-departmental robotics research conference organization and web platform." \
  --label "portfolio-card"

gh issue create \
  --title "Portfolio Card: CAD/CAM Robotic Dental Crowning Workflow" \
  --body "Category: Academic & Impact Projects

**Focus:** Robotic UI and verified experimental workflows for autonomous dental crowning." \
  --label "portfolio-card"

echo "Successfully created all portfolio card issues!"
