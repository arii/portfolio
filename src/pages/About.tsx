import React from 'react';
import { Cpu, Terminal, Layers, Award, ShieldCheck } from 'lucide-react';
import { Box, Stack, Grid, Text } from '@/layouts/Primitives';

export interface AboutProps {
  className?: string;
}

const About: React.FC<AboutProps> = ({ className = '' }) => {
  return (
    <Stack gap={12} maxWidth="4xl" marginX="auto" paddingY={6} className={className}>
      {/* Header section */}
      <Stack gap={4}>
        <Text as="h1" variant="display" size="5xl" weight="font-extrabold" tracking="tight">
          About Me
        </Text>
        <Text variant="mono" size="lg" color="accent">
          Robotics & DevAI Infrastructure Engineer
        </Text>
      </Stack>

      {/* Intro section */}
      <Stack gap={6} padding={8} className="bg-brand-bg-surface/30 border border-slate-800 rounded-xl">
        <Box display="flex" align="center" gap={2}>
          <Terminal className="h-5 w-5 text-brand-cyan-light" />
          <Text as="h2" size="xl" weight="font-bold">Professional Background</Text>
        </Box>
        <Text size="sm" color="dim" leading="relaxed">
          I am a senior engineering specialist focused on connecting autonomous physical systems, robotic hardware execution nodes, and advanced AI-assisted agentic software development pipelines. My work bridges the gap between low-latency hardware/middleware controls and modern, developer-first tooling systems.
        </Text>
        <Text size="sm" color="dim" leading="relaxed">
          Throughout my career, I have dedicated myself to optimizing engineering developer experience, building reliable continuous integration loops, and architecting robust, highly-predictable automated workflows.
        </Text>
      </Stack>

      {/* Focus Areas */}
      <Grid cols={{ base: 1, md: 2 }} gap={6}>
        <Stack gap={3} padding={6} className="bg-brand-bg-surface/30 border border-slate-800 rounded-xl">
          <Box width={10} height={10} radius="lg" display="flex" align="center" justify="center" className="bg-brand-cyan/10 text-brand-cyan">
            <Cpu className="h-5 w-5" />
          </Box>
          <Text as="h3" size="lg" weight="font-bold">Robotics Engineering</Text>
          <Text size="xs" color="dim" leading="relaxed">
            Architecting safety-critical execution nodes, sensor-telemetry streams, and middleware configurations with ROS/ROS2, C++, and Python. Focused on deterministic, isolated control environments.
          </Text>
        </Stack>

        <Stack gap={3} padding={6} className="bg-brand-bg-surface/30 border border-slate-800 rounded-xl">
          <Box width={10} height={10} radius="lg" display="flex" align="center" justify="center" className="bg-brand-green/10 text-brand-green">
            <Layers className="h-5 w-5" />
          </Box>
          <Text as="h3" size="lg" weight="font-bold">DevAI Infrastructure</Text>
          <Text size="xs" color="dim" leading="relaxed">
            Constructing agentic code generation, continuous audit, and automated layout-regression systems. Bringing production LLMs directly into the build pipeline with deterministic validation loops.
          </Text>
        </Stack>
      </Grid>

      {/* Principles */}
      <Stack gap={6} className="border-t border-slate-900 pt-8">
        <Box display="flex" align="center" gap={2}>
          <ShieldCheck className="h-5 w-5 text-brand-green" />
          <Text as="h2" size="xl" weight="font-bold">Engineering Philosophy</Text>
        </Box>
        <Grid cols={{ base: 1, sm: 3 }} gap={4}>
          <Stack gap={2} padding={4} className="bg-brand-bg-surface/20 rounded-lg border border-slate-850">
            <Box display="flex" align="center" gap={1.5}>
              <Award className="h-4 w-4 text-brand-cyan-light" />
              <Text as="h4" weight="font-bold">Reliability First</Text>
            </Box>
            <Text size="xs" color="dim" leading="relaxed">
              Every system, whether physical or digital, must fail gracefully and provide deterministic telemetry for prompt diagnostics.
            </Text>
          </Stack>
          <Stack gap={2} padding={4} className="bg-brand-bg-surface/20 rounded-lg border border-slate-850">
            <Box display="flex" align="center" gap={1.5}>
              <Award className="h-4 w-4 text-brand-green" />
              <Text as="h4" weight="font-bold">Developer UX</Text>
            </Box>
            <Text size="xs" color="dim" leading="relaxed">
              Frictionless, fully-automated continuous integration is the bedrock of rapid, high-confidence engineering output.
            </Text>
          </Stack>
          <Stack gap={2} padding={4} className="bg-brand-bg-surface/20 rounded-lg border border-slate-850">
            <Box display="flex" align="center" gap={1.5}>
              <Award className="h-4 w-4 text-brand-accent" />
              <Text as="h4" weight="font-bold">Pragmatic Innovation</Text>
            </Box>
            <Text size="xs" color="dim" leading="relaxed">
              Adopting state-of-the-art AI-orchestrated tools only when backed by reproducible metrics and deterministic sandboxes.
            </Text>
          </Stack>
        </Grid>
      </Stack>
    </Stack>
  );
};

export default About;
