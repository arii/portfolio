import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import SafeImage from '@/components/ui/SafeImage';

describe('SafeImage Component', () => {
  it('renders image and handles error gracefully with placeholder', () => {
    render(
      <SafeImage
        src="/invalid-asset-path.png"
        alt="Test project thumbnail"
        containerClassName="h-40 w-full"
      />
    );

    const img = screen.getByAltText('Test project thumbnail');
    fireEvent.error(img);

    expect(screen.getByText('Test project thumbnail')).toBeInTheDocument();
  });

  it('wraps image in picture tag with webp source when src is PNG/JPG', () => {
    const { container } = render(
      <SafeImage
        src="/assets/research/sample.png"
        alt="Sample Image"
      />
    );

    const picture = container.querySelector('picture');
    expect(picture).toBeInTheDocument();

    const source = container.querySelector('source[type="image/webp"]');
    expect(source).toBeInTheDocument();
    expect(source?.getAttribute('srcset')).toBe('/assets/research/sample.webp');
  });

  it('uses custom webpSrc and additional sources when provided', () => {
    const { container } = render(
      <SafeImage
        src="/assets/research/sample.jpg"
        alt="Sample Image"
        webpSrc="/custom/sample.webp"
        sources={[
          { srcSet: '/custom/sample-avif.avif', type: 'image/avif' }
        ]}
      />
    );

    const avifSource = container.querySelector('source[type="image/avif"]');
    expect(avifSource).toBeInTheDocument();
    expect(avifSource?.getAttribute('srcset')).toBe('/custom/sample-avif.avif');

    const webpSource = container.querySelector('source[type="image/webp"]');
    expect(webpSource).toBeInTheDocument();
    expect(webpSource?.getAttribute('srcset')).toBe('/custom/sample.webp');
  });

  it('renders fallbackSrc image when main image fails to load and fallbackSrc is provided', () => {
    render(
      <SafeImage
        src="/invalid.png"
        fallbackSrc="/fallback.png"
        alt="Fallback Test"
      />
    );

    const img = screen.getByAltText('Fallback Test');
    fireEvent.error(img);

    const fallbackImg = screen.getByAltText('Fallback Test');
    expect(fallbackImg.getAttribute('src')).toBe('/fallback.png');
  });
});
