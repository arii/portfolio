---
title: "Applying Machine Learning Techniques to Improve LIS Object Detection"
date: "2012-12-15"
readTime: 6
tags:
  - Machine Learning
  - Computer Vision
  - Ordinal Regression
  - MIT CSAIL
category: "Machine Learning"
summary: "Evaluated ordinal regression and P-norm push algorithms to optimize object detection confidence scores for household robotic manipulation."
---

# Applying Machine Learning Techniques to Improve the Object Detector Used by LIS

## Machine Learning Research at MIT CSAIL

This research project, completed for **6.867 Machine Learning** at MIT CSAIL in collaboration with Sanja Popovic, evaluated learning algorithms to improve object detection ranking and scoring used by the **Learning and Intelligent Systems (LIS) group**.

---

## Core Problem & Approach

Object detection systems used in mobile robotic manipulation frequently yield imperfect candidate bounding boxes. Standard regression models fail to account for relative ranking preferences across candidate detections.

Key technical highlights:
1. **Ordinal Regression:** Formulated pairwise loss functions to prioritize high-precision detection candidates over background noise.
2. **P-Norm Push:** Implemented the P-norm push ranking algorithm to enforce strict top-rank accuracy for target manipulation objects.
3. **Experimental Validation:** Evaluated bounding box confidence scoring across real-world cluttered kitchen environments.

---

## Video Demonstrations & Media

- ▶️ [Watch IBVS Visual Servoing & Object Reranking Video](https://www.youtube.com/watch?v=0U0pPbWhLVE)

---

## Downloadable Technical Report

- 📄 [Download Machine Learning Technical Report (PDF)](/reports/report_ml.pdf)

---

## Key Results

- Demonstrated significant ranking accuracy improvements over standard linear regression baseline models.
- Established optimal feature representation strategies for bounding box candidate reranking in robotic manipulation.
