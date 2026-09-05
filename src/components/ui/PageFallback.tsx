import React from 'react';
import { Box } from '@/components/layout/Box';

const PageFallback: React.FC = () => (
  <Box minH="50vh" className="grid place-items-center">
    <Box w="2rem" h="2rem" className="border-2 border-accent border-t-transparent rounded-full animate-spin" />
  </Box>
);

export default PageFallback;
