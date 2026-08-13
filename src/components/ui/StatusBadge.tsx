import { Box, Text } from '@/layouts/Primitives';
import { cn } from '@/lib/utils';

export const StatusBadge = ({ label, className }: { label?: string; className?: string }) => {
  if (!label) return null;
  const lowerLabel = label.toLowerCase();

  const isSuccess = lowerLabel.includes('active') || lowerLabel.includes('complete') || lowerLabel.includes('published');
  const surface = isSuccess ? 'accent' : 'muted';

  return (
    <Box
      display="inline-flex"
      align="center"
      paddingX={2}
      paddingY={0.5}
      radius="full"
      surface={surface}
      className={cn("border border-white/5", className)}
    >
      <Text variant="mono" size="micro" weight="font-bold" uppercase tracking="widest" color={isSuccess ? "accent" : "dim"}>
        {label}
      </Text>
    </Box>
  );
};
