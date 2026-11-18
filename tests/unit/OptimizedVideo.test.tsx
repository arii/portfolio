import { render, screen, fireEvent, act } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
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

  it('shows the video when it already has data before onLoadedData is attached', () => {
    const spy = vi.spyOn(HTMLMediaElement.prototype, 'readyState', 'get').mockReturnValue(4);
    const { container } = render(<OptimizedVideo mp4Src="/assets/demo.mp4" ariaLabel="Cached" />);
    expect(container.querySelector('video')?.className).toContain('opacity-100');
    spy.mockRestore();
  });

  it('shows the video once it starts playing even if loadeddata was missed', () => {
    const { container } = render(<OptimizedVideo mp4Src="/assets/demo.mp4" ariaLabel="Playing" />);
    const video = container.querySelector('video')!;
    expect(video.className).toContain('opacity-0');
    fireEvent.playing(video);
    expect(video.className).toContain('opacity-100');
  });

  it('starts paused with controls for reduced motion and responds to preference changes', () => {
    const preference = { matches: true, addEventListener: vi.fn(), removeEventListener: vi.fn() };
    const spy = vi.spyOn(window, 'matchMedia').mockReturnValue(preference as unknown as MediaQueryList);
    const { container, unmount } = render(<OptimizedVideo src="/demo.mp4" />);
    const video = container.querySelector('video')!;
    expect(video.autoplay).toBe(false);
    expect(video.controls).toBe(true);
    fireEvent.loadedMetadata(video);
    expect(video.className).toContain('opacity-100');
    const listener = preference.addEventListener.mock.calls[0][1];
    preference.matches = false;
    act(() => listener());
    expect(video.autoplay).toBe(true);
    const paused = vi.spyOn(video, 'paused', 'get').mockReturnValue(false);
    const pause = vi.spyOn(video, 'pause').mockImplementation(() => {});
    preference.matches = true;
    act(() => listener());
    expect(pause).toHaveBeenCalledOnce();
    expect(video.autoplay).toBe(false);
    unmount();
    expect(preference.removeEventListener).toHaveBeenCalledWith('change', listener);
    paused.mockRestore();
    pause.mockRestore();
    spy.mockRestore();
  });
});
