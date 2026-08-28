import React, { useState } from 'react';
import { resolveAssetUrl } from '@/utils/asset';

export interface VideoSource {
  src: string;
  type?: string;
}

export interface OptimizedVideoProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
  webmSrc?: string;
  mp4Src?: string;
  sources?: VideoSource[];
  poster?: string;
  containerClassName?: string;
  ariaLabel?: string;
  fallbackText?: string;
}

const OptimizedVideo: React.FC<OptimizedVideoProps> = ({
  src,
  webmSrc,
  mp4Src,
  sources = [],
  poster,
  containerClassName = '',
  className = '',
  ariaLabel,
  fallbackText,
  autoPlay = true,
  loop = true,
  muted = true,
  playsInline = true,
  ...props
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const resolvedPoster = resolveAssetUrl(poster);

  const resolvedSources: VideoSource[] = [...sources];

  if (webmSrc) {
    resolvedSources.push({ src: webmSrc, type: 'video/webm' });
  }
  if (mp4Src) {
    resolvedSources.push({ src: mp4Src, type: 'video/mp4' });
  }
  if (src && !webmSrc && !mp4Src && resolvedSources.length === 0) {
    const type = src.endsWith('.webm') ? 'video/webm' : src.endsWith('.mp4') ? 'video/mp4' : undefined;
    resolvedSources.push({ src, type });
  }

  const normalizedSources = resolvedSources.map((s) => ({
    ...s,
    src: resolveAssetUrl(s.src) || s.src,
  }));

  return (
    <div className={`relative overflow-hidden bg-surface ${containerClassName}`}>
      {isLoading && (
        <div className="absolute inset-0 animate-pulse bg-surface-alt" aria-hidden="true" />
      )}
      {!hasError ? (
        <video
          autoPlay={autoPlay}
          loop={loop}
          muted={muted}
          playsInline={playsInline}
          poster={resolvedPoster}
          aria-label={ariaLabel}
          className={`w-full h-full object-cover transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'} ${className}`}
          onLoadedData={() => setIsLoading(false)}
          onError={() => {
            setHasError(true);
            setIsLoading(false);
          }}
          {...props}
        >
          {normalizedSources.map((source, index) => (
            <source key={index} src={source.src} type={source.type} />
          ))}
          {fallbackText || 'Your browser does not support video playback.'}
        </video>
      ) : (
        <div
          className="flex h-full w-full items-center justify-center bg-surface-alt/80 px-4 text-center text-xs text-text-dim"
          role="region"
          aria-label={ariaLabel || 'Video player unavailable'}
        >
          <span>{fallbackText || ariaLabel || 'Video playback unavailable'}</span>
        </div>
      )}
    </div>
  );
};

export default OptimizedVideo;
