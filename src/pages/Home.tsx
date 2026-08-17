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
              <span>Applied AI Engineer — Shipping Production Software Across Domains</span>
            </Box>

            <Text variant="heading">Ariel Anders, PhD</Text>

            <div className="flex flex-wrap items-center gap-3 text-sm font-medium text-muted-foreground pb-2">
              <span className="flex items-center space-x-1.5"><span className="h-1.5 w-1.5 rounded-full bg-primary/70"></span><span>MIT PhD</span></span>
              <span>&middot;</span>
              <span className="flex items-center space-x-1.5"><span className="h-1.5 w-1.5 rounded-full bg-primary/70"></span><span>ex-Waymo</span></span>
              <span>&middot;</span>
              <span className="flex items-center space-x-1.5"><span className="h-1.5 w-1.5 rounded-full bg-primary/70"></span><span>ex-Robust.AI</span></span>
            </div>

            <Text variant="body" className="text-lg text-text-main">
              I use AI-orchestrated engineering to rapidly ship production software across domains — robotics, consumer web platforms, and data pipelines — regardless of whether I have years of prior domain experience.
            </Text>

            <Text variant="dim" className="text-sm">
              I orchestrate AI agents and custom tooling to build and ship real products fast — from CI pipelines for autonomous robots, to a live community platform (boomtick.blog), to a Bluetooth fitness app. Same method, different domains.
            </Text>

            <Stack direction="row" gap="4" className="pt-2 flex-wrap" align="center">
              <Link to="/about">
                <Button variant="primary" size="md" className="flex items-center space-x-2">
                  <span>How I Work</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </Stack>
          </Stack>

          <Box className="hidden lg:block lg:col-span-4">
             <div className="rounded-xl border border-line/50 bg-bg p-6 space-y-4">
               <Text variant="subheading" className="text-sm border-b border-line pb-2">The Mechanism</Text>
               <Text variant="dim" className="text-sm">
                 I treat AI agents as a force multiplier that lets me ramp into domains I don't have years of experience in. This isn't just theory—it's how I ship cross-domain code.
               </Text>
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
              <h3 className="font-semibold text-text-main text-sm">Cross-Domain Delivery</h3>
              <p className="text-xs text-text-dim mt-1">
                Same orchestration method shipped a robotics pipeline, a consumer SaaS, and a fitness app.
              </p>
            </Box>
          </Stack>
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
            <LayoutTemplate className="h-5 w-5 text-accent shrink-0 mt-0.5" />
            <Box>
              <h3 className="font-semibold text-text-main text-sm">Deterministic CLI</h3>
              <p className="text-xs text-text-dim mt-1">
                Custom orchestrators managing both local and remote agent workflows safely.
              </p>
            </Box>
          </Stack>
        </Grid>
      </Box>
    </Box>
  );
};

export default Home;
