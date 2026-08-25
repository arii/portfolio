import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import OptimizedVideo from '@/components/ui/OptimizedVideo';

describe('OptimizedVideo Component', () => {
  it('renders video element with default attributes and sources', () => {
    const { container } = render(
      <OptimizedVideo
        webmSrc="/assets/demo.webm"
        mp4Src="/assets/demo.mp4"
        ariaLabel="UI Demo Animation"
      />
    );

    const video = container.querySelector('video');
    expect(video).toBeInTheDocument();
    expect(video?.getAttribute('autoplay')).toBe('');
    expect(video?.getAttribute('loop')).toBe('');
    expect(video?.getAttribute('aria-label')).toBe('UI Demo Animation');

    const sources = container.querySelectorAll('source');
    expect(sources).toHaveLength(2);
    expect(sources[0].getAttribute('src')).toBe('/assets/demo.webm');
    expect(sources[0].getAttribute('type')).toBe('video/webm');
    expect(sources[1].getAttribute('src')).toBe('/assets/demo.mp4');
    expect(sources[1].getAttribute('type')).toBe('video/mp4');
  });

  it('handles error state and displays fallback text when video fails to load', () => {
    const { container } = render(
      <OptimizedVideo
        src="/invalid-video.mp4"
        ariaLabel="Broken Video"
        fallbackText="Failed to play video"
      />
    );

    const video = container.querySelector('video');
    expect(video).toBeInTheDocument();

    fireEvent.error(video!);

    expect(screen.getByText('Failed to play video')).toBeInTheDocument();
  });
});
