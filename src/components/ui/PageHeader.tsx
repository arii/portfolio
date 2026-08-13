import { ReactNode } from 'react';
import { Box, Stack, Text } from '@/layouts/Primitives';

interface PageHeaderProps {
  label: string;
  title: string;
  description?: string;
  as?: any;
  paddingBottom?: any;
  border?: any;
  descriptionMaxWidth?: any;
  titleSize?: any;
  cta?: ReactNode;
  ctaMarginTop?: any;
}

export function PageHeader({
  label,
  title,
  description,
  as = "h1",
  paddingBottom = 12,
  border = "b",
  descriptionMaxWidth = "prose",
  titleSize = "fluid-5",
  cta,
  ctaMarginTop = 6
}: PageHeaderProps) {
  return (
    <Box
      paddingBottom={paddingBottom}
      border={border}
    >
      <Stack gap={4}>
        <Text variant="mono" size="xs" color="accent" weight="font-black" tracking="wide-editorial" uppercase>
          {label}
        </Text>
        <Text as={as} variant="headline" size={titleSize} weight="font-black" leading="tight" tracking="tight">
          {title}
        </Text>
        {description && (
          <Text
            variant="body"
            size={{ base: "lg", lg: "xl" }}
            color="dim"
            maxWidth={descriptionMaxWidth}
            marginTop={4}
            className="leading-relaxed text-pretty text-slate-300"
          >
            {description}
          </Text>
        )}
        {cta && (
          <Box marginTop={ctaMarginTop}>
            {cta}
          </Box>
        )}
      </Stack>
    </Box>
  );
}
