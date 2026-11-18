import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import ResearchDetailPage from '@/pages/ResearchDetailPage';

describe('ResearchDetailPage markdown images', () => {
  it('does not leak the react-markdown node prop into the DOM', () => {
    const { container } = render(
      <MemoryRouter>
        <ResearchDetailPage slug="sf-promises" onBack={() => {}} />
      </MemoryRouter>
    );
    const imgs = container.querySelectorAll('img');
    expect(imgs.length).toBeGreaterThan(0);
    imgs.forEach((img) => expect(img.hasAttribute('node')).toBe(false));
  });

  it('renders a markdown .mp4 link as a video, not an image', () => {
    const { container } = render(
      <MemoryRouter>
        <ResearchDetailPage slug="feels" onBack={() => {}} />
      </MemoryRouter>
    );
    const source = container.querySelector('video source');
    expect(source?.getAttribute('src')).toBe('https://arii.github.io/feels/images/feels_web.mp4');
    expect(container.querySelector('img[src*="feels_web.mp4"]')).toBeNull();
  });
});
