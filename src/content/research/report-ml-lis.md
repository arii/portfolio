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
summary: "Evaluated ordinal regression and P-norm push algorithms to optimize candidate bounding box confidence scoring for household robotic manipulation."
pdfUrl: "https://raw.githubusercontent.com/arii/arii.github.io/main/reports/report_ml.pdf"
videoUrl: "https://www.youtube.com/watch?v=0U0pPbWhLVE"
---

# Applying Machine Learning Techniques to Improve LIS Object Detection

## Machine Learning Research at MIT CSAIL

In this research project for **6.867 Machine Learning** at MIT CSAIL, my teammate Sanja Popovic and I evaluated learning algorithms to refine object detection ranking and confidence scoring for the **Learning and Intelligent Systems (LIS) group**.

![Score versus distance discrepancy](/assets/research/report-ml-lis/fig1_score_discrepancy.png)
*Figure 1: Distance discrepancy decay functions evaluated to transform spatial offsets into bounding box confidence scores.*

---

## Core Problem & My Approach

Object detection models running on mobile manipulation platforms frequently generate dozens of candidate bounding boxes around cluttered household items. Standard linear regression models treat candidate confidence as absolute values, failing to prioritize relative ranking order—which often leads the robot to attempt grasps on low-confidence background artifacts.

To solve this issue, I focused on formulating learning-to-rank models specifically tailored for robotic scene perception:

1. **Ordinal Regression:** Formulated pairwise loss functions to prioritize high-precision target detections over ambiguous background noise.
2. **P-Norm Push:** Implemented the P-norm push ranking algorithm, placing higher mathematical penalty on errors at the top of the ranked list so the robot's top choice is correct.
3. **Experimental Validation:** Evaluated bounding box candidate scoring across real-world cluttered kitchen environments captured by mobile manipulators.

![Ordinal regression confidence scoring evaluation](/assets/research/report-ml-lis/fig2_ranking_performance.png)
*Figure 2: Performance evaluation showing how our learned weight vectors successfully elevate high-precision bounding box candidate scores.*

---

## Key Results & Takeaways

- **Superior Candidate Ranking:** Demonstrated significant candidate ranking accuracy improvements compared to baseline linear regression models.
- **Robust Feature Representation:** Identified optimal spatial feature representations for candidate reranking in household manipulation tasks.
- **Direct Practical Impact:** Provided the LIS research group with a framework to filter candidate clutter before passing target poses to motion planners.

---

## Video Demonstrations & Downloads

- ▶️ [Watch IBVS Visual Servoing & Object Reranking Video](https://www.youtube.com/watch?v=0U0pPbWhLVE)
- 📄 [Download Machine Learning Technical Report (PDF)](https://raw.githubusercontent.com/arii/arii.github.io/main/reports/report_ml.pdf)
