import { ResearchPost } from '@/types/research';

export const RESEARCH_POSTS: ResearchPost[] = [
  {
    slug: 'model-context-protocol-robotics',
    title: 'Model Context Protocol Integrations in Production Robotics',
    date: '2026-07-14',
    readingTime: '6 min read',
    tags: ['Robotics', 'MCP', 'CI/CD'],
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
    slug: 'github-actions-workflow-optimization',
    title: 'Optimizing Heterogeneous CI/CD Pipelines with GitHub Actions',
    date: '2026-04-18',
    readingTime: '5 min read',
    tags: ['DevOps', 'GitHub Actions', 'Automation'],
    summary: 'How to structure multi-agent code reviews and automated repair loops across monorepo submodules.',
    content: `
# Optimizing Heterogeneous CI/CD Pipelines

Automated repair agents require deterministic feedback loops to prevent hallucinated code fixes.

## Multi-Agent Coordination

1. **Pre-flight linting**: Fail fast on formatting.
2. **Deterministic dry-runs**: Execute CLI validations.
3. **Structured reports**: Return JSON artifacts to the agent orchestrator.
`.trim()
  }
];

export const getAllResearchPosts = (): ResearchPost[] => {
  return RESEARCH_POSTS.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

export const getResearchPostBySlug = (slug: string): ResearchPost | undefined => {
  return RESEARCH_POSTS.find((post) => post.slug === slug);
};
