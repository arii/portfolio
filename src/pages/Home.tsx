import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Bot, Code2, ShieldCheck, Terminal, FileCode2 } from 'lucide-react';
import { Button } from '@/layouts/Button';
import { Box, Stack, Grid, Text } from '@/layouts/Primitives';

const Home: React.FC = () => {
  return (
    <Box className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 space-y-16">
      {/* Hero Header Section */}
      <section className="relative overflow-hidden rounded-2xl border border-line bg-surface p-8 sm:p-12 shadow-sm">
        <Stack gap="6" className="max-w-3xl">
          <Box className="inline-flex items-center space-x-2 rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-xs font-semibold text-accent w-fit">
            <Bot className="h-3.5 w-3.5" />
            <span>Senior Roboticist &amp; DevAI Engineer</span>
          </Box>

          <Text variant="heading">Ariel Anders, PhD</Text>

          <Text variant="body" className="text-lg text-text-dim">
            I'm a senior roboticist building at the intersection of autonomous systems and developer tools.
            This portfolio explores practical AI orchestration—custom CLI tools, multi-agent feedback loops,
            and deterministic CI pipelines designed to scale robotics and engineering teams.
          </Text>

          <Text variant="dim" className="text-sm">
            Shipping high-fidelity systems requires practical AI orchestration, not hype. I focus on
            deterministic feedback loops and isolated execution boundaries.
          </Text>

          <Stack direction="row" gap="4" className="pt-2 flex-wrap" align="center">
            <Link to="/about">
              <Button variant="primary" size="md" className="flex items-center space-x-2">
                <span>Read the Intersection</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </Stack>
        </Stack>
      </section>

      {/* Main Focus Cards Section */}
      <Grid cols="1 md:grid-cols-2" gap="8">
        {/* Card 1: Flagship DevAI Systems */}
        <Stack justify="between" className="rounded-xl border border-line bg-surface p-8 shadow-sm transition-all hover:border-accent/50 hover:shadow-md h-full">
          <Stack gap="4">
            <Box className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
              <Terminal className="h-6 w-6" />
            </Box>
            <Text variant="subheading">Flagship DevAI Systems</Text>
            <Text variant="dim">
              Deep dives into active tooling: autonomous code review agents, web-bluetooth hardware integrations, and end-to-end data pipelines.
            </Text>
          </Stack>
          <Box className="mt-8 pt-4 border-t border-line">
            <Link
              to="/research"
              className="inline-flex items-center space-x-2 text-sm font-semibold text-accent hover:underline"
            >
              <span>Inspect DevAI Systems</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Box>
        </Stack>

        {/* Card 2: Articles & Research Studies */}
        <Stack justify="between" className="rounded-xl border border-line bg-surface p-8 shadow-sm transition-all hover:border-accent/50 hover:shadow-md h-full">
          <Stack gap="4">
            <Box className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
              <Code2 className="h-6 w-6" />
            </Box>
            <Text variant="subheading">Articles &amp; Research Studies</Text>
            <Text variant="dim">
              Technical essays, system architecture breakdowns, and post-mortems on migrating production systems.
            </Text>
          </Stack>
          <Box className="mt-8 pt-4 border-t border-line">
            <Link
              to="/research#articles"
              className="inline-flex items-center space-x-2 text-sm font-semibold text-accent hover:underline"
            >
              <span>View Research Studies</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Box>
        </Stack>
      </Grid>

      {/* Engineering Highlights Banner */}
      <Box className="rounded-xl border border-line bg-surface-alt p-6 sm:p-8">
        <Grid cols="1 md:grid-cols-3" gap="6">
          <Stack direction="row" gap="3" align="start">
            <ShieldCheck className="h-5 w-5 text-accent shrink-0 mt-0.5" />
            <Box>
              <h3 className="font-semibold text-text-main text-sm">Strict Quality Gates</h3>
              <p className="text-xs text-text-dim mt-1">
                Automated Semgrep static analysis, secret detection, and strict linting to catch issues early.
              </p>
            </Box>
          </Stack>
          <Stack direction="row" gap="3" align="start">
            <FileCode2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
            <Box>
              <h3 className="font-semibold text-text-main text-sm">Deterministic CLI</h3>
              <p className="text-xs text-text-dim mt-1">
                Custom `td-cli` orchestrators managing both local and remote agent workflows.
              </p>
            </Box>
          </Stack>
          <Stack direction="row" gap="3" align="start">
            <Bot className="h-5 w-5 text-accent shrink-0 mt-0.5" />
            <Box>
              <h3 className="font-semibold text-text-main text-sm">Agentic Workflows</h3>
              <p className="text-xs text-text-dim mt-1">
                Practical applications of LLMs and autonomous agents to real-world engineering problems.
              </p>
            </Box>
          </Stack>
        </Grid>
      </Box>
    </Box>
  );
};

export default Home;
