import React from 'react';
import { Box, Stack, Text } from '@/layouts/Primitives';
import { Grid } from '@/layouts/Primitives';

export const WorkWithMeSection: React.FC = () => {
  return (
    <Grid cols={{ base: 1, md: 12 }} gap={10} padding={8} surface="muted" radius="xl" className="border border-line/20" id="work-with-me" align="center" width="full">
      <Stack gap={4} span={{ base: 1, md: 7 }} justify="center">
        <Box paddingBottom={2} className="border-b border-line/10">
          <Text as="h2" variant="headline" size="3xl" weight="font-black">Work with me</Text>
        </Box>
        <Text variant="body" size="lg" color="dim" leading="relaxed" maxWidth="prose">
          These are my own projects, built to solve real problems I care about. If you need a senior roboticist, DevAI engineering infrastructure, or someone who can do both, I'm available for project-based contracts and full-time roles.
        </Text>
      </Stack>

      <Stack gap={4} span={{ base: 1, md: 5 }} align={{ base: "start", md: "end" }} textAlign={{ base: "left", md: "right" }}>
        <Text variant="mono" size="xs" color="dim" uppercase tracking="widest" weight="font-bold" opacityVariant="subtle">Get in touch</Text>
        <Box display="flex" align="center" gap={4} wrap="wrap" justify={{ base: "start", md: "end" }} marginTop={2}>
          <Box as="a" href="mailto:anders.ariel@gmail.com" className="hover:text-accent transition-colors">
            <Text variant="mono" size="xs" weight="font-bold" color="accent" uppercase tracking="widest">Email</Text>
          </Box>
          <Text color="dim" opacityVariant="muted" size="xs">·</Text>
          <Box as="a" href="https://www.linkedin.com/in/ariel-anders/?skipRedirect=true" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
            <Text variant="mono" size="xs" weight="font-bold" color="accent" uppercase tracking="widest">LinkedIn</Text>
          </Box>
          <Text color="dim" opacityVariant="muted" size="xs">·</Text>
          <Box as="a" href="https://github.com/arii" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
            <Text variant="mono" size="xs" weight="font-bold" color="accent" uppercase tracking="widest">GitHub</Text>
          </Box>
        </Box>
      </Stack>
    </Grid>
  );
};
