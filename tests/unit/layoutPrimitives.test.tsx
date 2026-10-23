import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Box, Stack, Grid } from '@/components/layout';

describe('Layout Primitives (Box, Stack, Grid)', () => {
  it('renders Box with custom element and sanitized classes', () => {
    const { container } = render(
      <Box as="section" px={4} py={2} className="custom-box">
        <span>Box Content</span>
      </Box>
    );

    const section = container.querySelector('section');
    expect(section).toBeInTheDocument();
    expect(section).toHaveClass('custom-box');
    expect(section?.style.paddingLeft).toBe('1rem');
    expect(section?.style.paddingRight).toBe('1rem');
    expect(screen.getByText('Box Content')).toBeInTheDocument();
  });

  it('renders Stack with row direction, alignment, and gap', () => {
    const { container } = render(
      <Stack direction="row" align="center" justify="between" gap={3} className="custom-stack">
        <div>Item 1</div>
        <div>Item 2</div>
      </Stack>
    );

    const stack = container.firstElementChild as HTMLElement;
    expect(stack).toHaveClass('flex');
    expect(stack).toHaveClass('flex-row');
    expect(stack).toHaveClass('items-center');
    expect(stack).toHaveClass('justify-between');
    expect(stack).toHaveClass('gap-3');
    expect(stack).toHaveClass('custom-stack');
  });

  it('renders Stack with responsive direction and space', () => {
    const { container } = render(
      <Stack direction={{ base: 'col', sm: 'row' }} space={{ initial: 8, sm: 12 }}>
        <div>Item 1</div>
      </Stack>
    );

    const stack = container.firstElementChild as HTMLElement;
    expect(stack).toHaveClass('flex-col');
    expect(stack).toHaveClass('sm:flex-row');
    expect(stack).toHaveClass('space-y-8');
    expect(stack).toHaveClass('sm:space-y-12');
  });

  it('renders Grid with cols, responsive breakpoints, and gap', () => {
    const { container } = render(
      <Grid as="ul" cols={1} sm={2} md={3} lg={4} gap={5} className="custom-grid">
        <li>Card 1</li>
      </Grid>
    );

    const grid = container.querySelector('ul');
    expect(grid).toBeInTheDocument();
    expect(grid).toHaveClass('grid');
    expect(grid).toHaveClass('grid-cols-1');
    expect(grid).toHaveClass('sm:grid-cols-2');
    expect(grid).toHaveClass('md:grid-cols-3');
    expect(grid).toHaveClass('lg:grid-cols-4');
    expect(grid).toHaveClass('gap-5');
    expect(grid).toHaveClass('custom-grid');
  });

  it('renders Grid with columns object prop', () => {
    const { container } = render(
      <Grid columns={{ base: 1, md: 3 }} gap={4}>
        <div>Card</div>
      </Grid>
    );

    const grid = container.firstElementChild as HTMLElement;
    expect(grid).toHaveClass('grid');
    expect(grid).toHaveClass('grid-cols-1');
    expect(grid).toHaveClass('md:grid-cols-3');
    expect(grid).toHaveClass('gap-4');
  });
});
