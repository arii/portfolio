export interface ResearchPost {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  date: string;
  readingTime: string;
  tags: string[];
  summary: string;
  content: string;
  category: string;
  status?: string;
  sourceUrl?: string;
  externalUrl?: string;
  externalLinkDisplayLabel?: string;
  inDevMessage?: {
    highlight: string;
    rest: string;
  };
  customPreview?: {
    logo: {
      prefix: string;
      accent: string;
      suffix: string;
    };
    headline: {
      text: string;
      accent?: boolean;
    }[];
    tagline: string;
  };
}

export const RESEARCH_POSTS: ResearchPost[] = [
  {
    id: 'model-context-protocol-robotics',
    slug: 'model-context-protocol-robotics',
    title: 'Model Context Protocol Integrations in Production Robotics',
    subtitle: 'Connecting LLM contexts directly to ROS2 nodes and autonomous workflows',
    date: '2026-07-14',
    readingTime: '6 min read',
    tags: ['Robotics', 'MCP', 'CI/CD'],
    category: 'Product Development',
    status: 'published',
    summary: 'Architectural patterns for connecting LLM context servers directly to ROS2 nodes and autonomous workflows.',
    content: `
# Model Context Protocol Integrations in Production Robotics

Integrating LLMs with physical robotic hardware requires strict context isolation and real-time state synchronization.

## Architecture

By utilizing the **Model Context Protocol (MCP)**, tool endpoints expose telemetry directly from ROS2 executor nodes to AI agents:

\`\`\`typescript
const mcpServer = new Server({
  name: "robotics-telemetry",
  version: "1.0.0"
});
\`\`\`

### Key Benefits
* Deterministic state verification
* Low-latency RPC communication
* Isolated execution bounds for safety-critical actuators
`.trim()
  },
  {
    id: 'github-actions-workflow-optimization',
    slug: 'github-actions-workflow-optimization',
    title: 'Optimizing Heterogeneous CI/CD Pipelines with GitHub Actions',
    subtitle: 'Structuring multi-agent code reviews and automated repair loops',
    date: '2026-04-18',
    readingTime: '5 min read',
    tags: ['DevOps', 'GitHub Actions', 'Automation'],
    category: 'DevAI Tooling',
    status: 'published',
    summary: 'How to structure multi-agent code reviews and automated repair loops across monorepo submodules.',
    content: `
# Optimizing Heterogeneous CI/CD Pipelines

Automated repair agents require deterministic feedback loops to prevent hallucinated code fixes.

## Multi-Agent Coordination

1. **Pre-flight linting**: Fail fast on formatting.
2. **Deterministic dry-runs**: Execute CLI validations.
3. **Structured reports**: Return JSON artifacts to the agent orchestrator.
`.trim()
  },
  {
    id: 'hrm-flagship',
    slug: 'hrm-flagship',
    title: 'HRM (Heart Rate Monitor)',
    subtitle: 'Web Bluetooth heart-rate telemetry synced across multiple clients',
    date: '2026-08-10',
    readingTime: '8 min read',
    tags: ['Robotics', 'Web Bluetooth', 'Spotify API', 'Product'],
    category: 'Product Development',
    summary: 'Web Bluetooth heart-rate telemetry synced across multiple clients via a persistent WebSocket server, featuring full Spotify API integration and a synchronized workout timer.',
    sourceUrl: 'https://github.com/arii/hrm',
    externalUrl: 'https://hrm.boomtick.blog',
    externalLinkDisplayLabel: 'Open Websocket Overlay',
    inDevMessage: {
      highlight: 'Active Hardware Lab: ',
      rest: 'Requires a Bluetooth chest strap or compatible Polar sensor.'
    },
    customPreview: {
      logo: { prefix: 'HR', accent: 'M', suffix: '' },
      headline: [
        { text: 'Real-time biometrics ' },
        { text: 'synced via WebSockets', accent: true }
      ],
      tagline: 'Web Bluetooth telemetry & Spotify API zone controller.'
    },
    content: `
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
`.trim()
  },
  {
    id: 'repo-auditor-ai',
    slug: 'repo-auditor-ai',
    title: 'RepoAuditor AI',
    subtitle: 'Automated GitHub Pull Request auditing powered by Gemini',
    date: '2026-07-28',
    readingTime: '7 min read',
    tags: ['DevAI', 'GitHub API', 'Multi-Agent', 'Workflow'],
    category: 'DevAI Tooling',
    summary: 'Automated GitHub Pull Request auditing built on a Gemini-driven CI/CD pipeline with Jules autonomous coding agent integration.',
    sourceUrl: 'https://github.com/arii/repo-auditor-ai',
    customPreview: {
      logo: { prefix: 'Repo', accent: 'Auditor', suffix: '.ai' },
      headline: [
        { text: 'Multi-Agent PR reviews ' },
        { text: 'fully automated', accent: true }
      ],
      tagline: 'CI/CD integration for automated code quality and visual regression audits.'
    },
    content: `
# RepoAuditor AI

Automated GitHub Pull Request auditing built on a Gemini-driven CI/CD pipeline with Jules autonomous coding agent integration.

## Strategic Capabilities

An independent showcase project highlighting autonomous engineering, RepoAuditor AI offers several critical capabilities:

1. **Intelligent PR Triage:** Analyzes PR size, dependency changes, and file metadata to determine review path depth.
2. **Vision-Driven UX Regression Auditing:** Leverages Gemini Pro Vision API alongside Playwright to visually audit frontend layout changes.
3. **Multi-Agent Conflict Resolution:** Deploys targeted agent clusters to resolve overlapping merge conflicts.
`.trim()
  },
  {
    id: 'deployment-impact-analyzer',
    slug: 'deployment-impact-analyzer',
    title: 'Deployment Impact Analyzer',
    subtitle: 'Determining affected routes & visual changes per PR',
    date: '2026-06-05',
    readingTime: '6 min read',
    tags: ['Playwright', 'Pixelmatch', 'Dependency Graph', 'CI/CD'],
    category: 'DevAI System',
    summary: 'Continuous Integration pipeline that determines which routes and visual components are affected by a pull request.',
    sourceUrl: 'https://github.com/arii/deployment-impact-analyzer',
    customPreview: {
      logo: { prefix: 'Impact', accent: 'Analyzer', suffix: '' },
      headline: [
        { text: 'Isolate UI regression ' },
        { text: 'using pixelmatch & graph analytics', accent: true }
      ],
      tagline: 'Build-time import tree resolution & Playwright visual diffing.'
    },
    content: `
# Deployment Impact Analyzer

Continuous Integration pipeline that determines which routes and visual components are affected by a pull request.

## Deep-Dive Analysis

Tracing change propagation through React applications is traditionally slow or incomplete. The Deployment Impact Analyzer automates this by constructing a local import graph:

\`\`\`bash
dependency-cruiser --output-type json src/
\`\`\`

By mapping modified source files to individual routes, the CI runner targets only affected endpoints. It fires up headless Playwright instances to capture post-change screenshots, compares them to baseline images via pixelmatch, and scores layout regression automatically.
`.trim()
  },
  {
    id: 'wcs-scraper',
    slug: 'wcs-scraper',
    title: 'High-Scale Telemetry Ingestion ETL',
    subtitle: 'Transforming raw records into compressed Parquet formats',
    date: '2026-05-12',
    readingTime: '5 min read',
    tags: ['ETL', 'Apache Parquet', 'Scraping', 'Data Pipelines'],
    category: 'Data Engineering',
    status: 'stable',
    summary: 'A data engineering showcase for DevAI systems, transforming raw competitive records into compressed Parquet formats.',
    content: `
# High-Scale Telemetry Ingestion ETL

A data engineering showcase for DevAI systems, transforming raw competitive records into compressed Parquet formats.

## Architecture

This pipeline automates raw competitive record collection from various historical repositories, performs deduplication, and formats data directly to Parquet.

This enables super-fast analytical RAG indexing and complex analytics queries over tens of thousands of event records with minimal overhead.
`.trim()
  },
  {
    id: 'blog-drafter',
    slug: 'blog-drafter',
    title: 'AI Blog Drafter',
    subtitle: 'A human-in-the-loop editorial platform designed for brand consistency',
    date: '2026-03-22',
    readingTime: '4 min read',
    tags: ['LLM', 'Content Generation', 'Productivity'],
    category: 'Content Tools',
    status: 'stable',
    summary: 'A human-in-the-loop editorial platform designed for brand-consistent content generation.',
    content: `
# AI Blog Drafter

A human-in-the-loop editorial platform designed for brand-consistent content generation.

## Key Focus Areas

- **RAG-based Ingestion:** Indexes historical articles to extract distinct tone, vocabulary, and formatting guidelines.
- **Dynamic Content Scaffolding:** Drafts complete skeletons with proper section headings and initial data hooks.
- **Editorial Loop:** Provides an interactive editing experience for final human polish.
`.trim()
  },
  {
    id: 'ecommerce-automation',
    slug: 'ecommerce-automation',
    title: 'Ecommerce Automation Experiments',
    subtitle: 'Programmatic storefront sync and incoming affiliate integrations',
    date: '2026-02-15',
    readingTime: '3 min read',
    tags: ['Printful API', 'Image Gen', 'Amazon Sync', 'Workflow'],
    category: 'Business Automation',
    status: 'experimental',
    summary: 'Automated merch operations including programmatic design generation, Printful API storefront sync, and incoming Amazon affiliate integration workflows.',
    content: `
# Ecommerce Automation Experiments

Automated merch operations including programmatic design generation, Printful API storefront sync, and incoming Amazon affiliate integration workflows.

## Objectives

- **Storefront Sync:** Synchronizes custom designs directly to ecommerce listings without manual data entry.
- **Affiliate Integrations:** Automatically matches blog content recommendations to Amazon affiliate targets.
`.trim()
  }
];

export const getAllResearchPosts = (): ResearchPost[] => {
  return [...RESEARCH_POSTS].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

export const getResearchPostBySlug = (slug: string): ResearchPost | undefined => {
  return RESEARCH_POSTS.find((post) => post.slug === slug);
};
