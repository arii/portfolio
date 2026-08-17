import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Cpu, Layers } from 'lucide-react';
import { Button } from '@/layouts/Button';
import { Box, Stack, Grid, Text } from '@/layouts/Primitives';
import {
  HERO_SUBHEADING,
  HERO_BIO,
  EXPERIENCE_BADGES,
  PHILOSOPHY_TENETS,
  FOCUS_CARDS,
  SKILL_CATEGORIES
} from '@/data/home';

const Home: React.FC = () => {
  return (
    <Box className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 space-y-16">
      {/* Hero Header Section */}
      <section className="relative overflow-hidden rounded-2xl border border-line bg-surface p-8 sm:p-12 shadow-sm space-y-8">
        <Stack gap="6">
          <Box className="inline-flex items-center space-x-2 text-xs font-semibold text-text-dim w-fit">
            <span>Robotics &amp; DevAI — Autonomous Systems &amp; AI-Orchestrated Software Engineering</span>
          </Box>

          <Text variant="heading">Ariel Anders, PhD</Text>

          <Text variant="body" className="text-xl text-text-main font-medium leading-snug">
            {HERO_SUBHEADING}
          </Text>

          <div className="space-y-3 text-sm text-text-dim leading-relaxed max-w-4xl">
            {HERO_BIO.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          <Stack direction="row" gap="4" className="pt-2 flex-wrap" align="center">
            <Link to="/research">
              <Button variant="primary" size="md" className="flex items-center space-x-2">
                <span>View portfolio</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </Stack>
        </Stack>

        {/* Experience Badges Strip */}
        <Box className="pt-6 border-t border-line">
          <Text variant="subheading" className="text-xs uppercase tracking-wider text-text-dim mb-4">
            Proven Industry Track Record
          </Text>
          <Grid cols="1 sm:grid-cols-2 lg:grid-cols-4" gap="4">
            {EXPERIENCE_BADGES.map((item, idx) => (
              <div key={idx} className="rounded-xl border border-line/60 bg-bg p-4 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-text-main text-sm">{item.company}</span>
                </div>
                <p className="text-xs text-accent font-medium">{item.role}</p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {item.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="px-2 py-0.5 rounded bg-surface border border-line text-[10px] text-text-dim font-mono">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </Grid>
        </Box>
      </section>

      {/* Engineering Philosophy Dedicated Section */}
      <section className="space-y-6">
        <Box className="border-b border-line pb-4">
          <Text variant="subheading" className="text-2xl font-bold">Engineering Philosophy</Text>
          <Text variant="dim" className="text-sm mt-1">Autonomous systems principles applied to full-stack software development.</Text>
        </Box>
        <Grid cols="1 md:grid-cols-3" gap="6">
          {PHILOSOPHY_TENETS.map((tenet, idx) => (
            <div key={idx} className="rounded-xl border border-line bg-surface p-6 shadow-sm space-y-3">
              <h3 className="font-bold text-text-main text-lg border-b border-line/40 pb-2">{tenet.title}</h3>
              <p className="text-sm text-text-dim leading-relaxed">{tenet.desc}</p>
            </div>
          ))}
        </Grid>
      </section>

      {/* Main Focus Cards Section */}
      <Grid cols="1 md:grid-cols-3" gap="8">
        {FOCUS_CARDS.map((card, idx) => (
          <Stack key={idx} justify="between" className="rounded-xl border border-line bg-surface p-8 shadow-sm transition-all hover:border-accent/50 hover:shadow-md h-full">
            <Stack gap="4">
              <Text variant="subheading" className="text-xl">{card.title}</Text>
              <Text variant="dim" className="text-sm">{card.desc}</Text>
              <div className="flex flex-wrap gap-2 pt-2">
                {card.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="px-2.5 py-1 rounded-md bg-surface-alt border border-line text-xs font-mono text-accent">
                    {tag}
                  </span>
                ))}
              </div>
            </Stack>
            <Box className="mt-8 pt-4 border-t border-line">
              <Link to={card.link} className="inline-flex items-center space-x-2 text-sm font-semibold text-accent hover:underline">
                <span>{card.linkText}</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Box>
          </Stack>
        ))}
      </Grid>

      {/* Technical Stack Grid Banner */}
      <Box className="rounded-xl border border-line bg-surface-alt p-6 sm:p-8 space-y-4">
        <Text variant="subheading" className="text-base font-bold flex items-center space-x-2">
          <Cpu className="h-5 w-5 text-accent" />
          <span>Core Engineering Stack</span>
        </Text>
        <Grid cols="1 md:grid-cols-2" gap="6">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <div key={idx} className="space-y-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-text-dim flex items-center space-x-1.5">
                <Layers className="h-3.5 w-3.5 text-accent" />
                <span>{cat.category}</span>
              </span>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item, iIdx) => (
                  <span key={iIdx} className="px-3 py-1 rounded-lg bg-surface border border-line text-xs font-medium text-text-main">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Home;
