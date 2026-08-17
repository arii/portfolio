import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Rocket, LayoutTemplate } from 'lucide-react';
import { Button } from '@/layouts/Button';
import { Box, Stack, Grid, Text } from '@/layouts/Primitives';

const Home: React.FC = () => {
  return (
    <Box className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 space-y-16">
      {/* Hero Header Section */}
      <section className="relative overflow-hidden rounded-2xl border border-line bg-surface p-8 sm:p-12 shadow-sm">
        <Grid cols="1 lg:grid-cols-12" gap="12" className="items-center">
          <Stack gap="6" className="lg:col-span-8">
            <Box className="inline-flex items-center space-x-2 text-xs font-semibold text-text-dim w-fit">
              <span>Robotics &amp; DevAI — Autonomous Systems &amp; AI-Orchestrated Software Engineering</span>
            </Box>

            <Text variant="heading">Ariel Anders, PhD</Text>

            <div className="flex flex-wrap items-center gap-3 text-sm font-medium text-muted-foreground pb-2">
              <span className="flex items-center space-x-1.5"><span className="h-1.5 w-1.5 rounded-full bg-primary/70"></span><span>MIT PhD</span></span>
              <span>&middot;</span>
              <span className="flex items-center space-x-1.5"><span className="h-1.5 w-1.5 rounded-full bg-primary/70"></span><span>Roboticist</span></span>
              <span>&middot;</span>
              <span className="flex items-center space-x-1.5"><span className="h-1.5 w-1.5 rounded-full bg-primary/70"></span><span>DevAI</span></span>
            </div>

            <Text variant="body" className="text-lg text-text-main">
              I architect and build reliable autonomous systems for physical robots — spanning onboard motion planning, real-time localization, sensor fusion, and robust production software.
            </Text>

            <Text variant="dim" className="text-sm">
              With a PhD from MIT CSAIL and years of leadership across industry-leading robotics teams (autonomous forklifts, self-driving vehicles, mobile manipulators), I turn complex planning algorithms into scalable, high-uptime production code.
            </Text>

            <Stack direction="row" gap="4" className="pt-2 flex-wrap" align="center">
              <Link to="/research">
                <Button variant="primary" size="md" className="flex items-center space-x-2">
                  <span>View portfolio</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </Stack>
          </Stack>

          <Box className="hidden lg:block lg:col-span-4">
             <div className="rounded-xl border border-line/50 bg-bg p-6 space-y-4">
               <Text variant="subheading" className="text-sm border-b border-line pb-2">Engineering Philosophy</Text>
               <ul className="space-y-2 text-sm text-text-dim">
                 <li><span className="text-text-main font-medium">Deterministic Autonomy:</span> predictable motion planning and behavior trees under edge-case load.</li>
                 <li><span className="text-text-main font-medium">DevAI Velocity:</span> AI-orchestrated code reviews, RAG documentation tools, and automated CI/CD agents.</li>
                 <li><span className="text-text-main font-medium">Clean Production Systems:</span> robust C++, ROS 2, and scalable software architectures built for long-term maintainability.</li>
               </ul>
             </div>
          </Box>
        </Grid>
      </section>

      {/* Main Focus Cards Section */}
      <Grid cols="1 md:grid-cols-3" gap="8">

        {/* Card 1: Shipped Products */}
        <Stack justify="between" className="rounded-xl border border-line bg-surface p-8 shadow-sm transition-all hover:border-accent/50 hover:shadow-md h-full">
          <Stack gap="4">
            <Text variant="subheading" className="text-xl">Products I've Shipped</Text>
            <Text variant="dim">
              Live consumer applications, fitness trackers, and full-stack community platforms built via AI orchestration. Proof the method transfers to any client's domain.
            </Text>
          </Stack>
          <Box className="mt-8 pt-4 border-t border-line">
            <Link
              to="/research#products"
              className="inline-flex items-center space-x-2 text-sm font-semibold text-accent hover:underline"
            >
              <span>View Live Products</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Box>
        </Stack>

        {/* Card 2: Engineering Infrastructure */}
        <Stack justify="between" className="rounded-xl border border-line bg-surface p-8 shadow-sm transition-all hover:border-accent/50 hover:shadow-md h-full">
          <Stack gap="4">
            <Text variant="subheading" className="text-xl">Engineering Infrastructure</Text>
            <Text variant="dim">
              Deep dives into active tooling: autonomous code review agents, CI pipelines, and strict quality gates for real-world engineering teams.
            </Text>
          </Stack>
          <Box className="mt-8 pt-4 border-t border-line">
            <Link
              to="/research#infrastructure"
              className="inline-flex items-center space-x-2 text-sm font-semibold text-accent hover:underline"
            >
              <span>Inspect Infrastructure</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Box>
        </Stack>

        {/* Card 3: Articles & Research Studies */}
        <Stack justify="between" className="rounded-xl border border-line bg-surface p-8 shadow-sm transition-all hover:border-accent/50 hover:shadow-md h-full">
          <Stack gap="4">
            <Text variant="subheading" className="text-xl">Articles &amp; Research</Text>
            <Text variant="dim">
              Technical essays, system architecture breakdowns, and post-mortems on migrating production systems.
            </Text>
          </Stack>
          <Box className="mt-8 pt-4 border-t border-line">
            <Link
              to="/research#articles"
              className="inline-flex items-center space-x-2 text-sm font-semibold text-accent hover:underline"
            >
              <span>Read Architecture Studies</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Box>
        </Stack>
      </Grid>

      {/* Engineering Highlights Banner */}
      <Box className="rounded-xl border border-line bg-surface-alt p-6 sm:p-8">
        <Grid cols="1 md:grid-cols-3" gap="6">
          <Stack direction="row" gap="3" align="start">
            <Rocket className="h-5 w-5 text-accent shrink-0 mt-0.5" />
            <Box>
              <h3 className="font-semibold text-text-main text-sm">Algorithmic Motion Planning</h3>
              <p className="text-xs text-text-dim mt-1">
                Behavior trees, conformant planning under uncertainty, and dynamic obstacle avoidance built for real-time robot safety.
              </p>
            </Box>
          </Stack>
          <Stack direction="row" gap="3" align="start">
            <ShieldCheck className="h-5 w-5 text-accent shrink-0 mt-0.5" />
            <Box>
              <h3 className="font-semibold text-text-main text-sm">DevAI &amp; AI Workflows</h3>
              <p className="text-xs text-text-dim mt-1">
                Leveraging LLMs, RAG context systems, and automated PR review agents to accelerate engineering cycles and technical debt cleanup.
              </p>
            </Box>
          </Stack>
          <Stack direction="row" gap="3" align="start">
            <LayoutTemplate className="h-5 w-5 text-accent shrink-0 mt-0.5" />
            <Box>
              <h3 className="font-semibold text-text-main text-sm">Production Systems Architecture</h3>
              <p className="text-xs text-text-dim mt-1">
                Production C++, ROS 2, Python, and cloud/IoT pipelines engineered for high uptime, maintainability, and clean system design.
              </p>
            </Box>
          </Stack>
        </Grid>
      </Box>
    </Box>
  );
};

export default Home;
