import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import ResearchDetailPage from '@/pages/ResearchDetailPage';

describe('ResearchDetailPage markdown images', () => {
  it('does not leak the react-markdown node prop into the DOM', () => {
    const { container } = render(
      <MemoryRouter>
        <ResearchDetailPage slug="feels" onBack={() => {}} />
      </MemoryRouter>
    );
    const imgs = container.querySelectorAll('img');
    expect(imgs.length).toBeGreaterThan(0);
    imgs.forEach((img) => expect(img.hasAttribute('node')).toBe(false));
  });
});
