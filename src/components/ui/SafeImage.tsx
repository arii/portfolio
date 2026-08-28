import React, { useState } from 'react';
import { resolveAssetUrl } from '@/utils/asset';

export interface SafeImageSource {
  srcSet: string;
  type?: string;
  media?: string;
}

export interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string;
  containerClassName?: string;
  webpSrc?: string;
  sources?: SafeImageSource[];
  disableWebpAutoInfer?: boolean;
}

const SafeImage: React.FC<SafeImageProps> = ({
  src,
  alt,
  fallbackSrc,
  containerClassName = '',
  className = '',
  webpSrc,
  sources,
  disableWebpAutoInfer = false,
  ...props
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Resolve main image source
  const resolvedSrc = resolveAssetUrl(src);

  // Determine WebP source
  let resolvedWebpSrc = resolveAssetUrl(webpSrc);
  if (!resolvedWebpSrc && src && !disableWebpAutoInfer && /\.(png|jpe?g)$/i.test(src)) {
    const autoWebp = src.replace(/\.(png|jpe?g)$/i, '.webp');
    resolvedWebpSrc = resolveAssetUrl(autoWebp);
  }

  // Resolve additional sources if present
  const resolvedSources = sources?.map((source) => ({
    ...source,
    srcSet: resolveAssetUrl(source.srcSet) || source.srcSet,
  }));

  const hasPictureSources = Boolean(resolvedWebpSrc || (resolvedSources && resolvedSources.length > 0));

  const imageElement = (
    <img
      src={resolvedSrc}
      alt={alt}
      className={`transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'} ${className}`}
      onLoad={() => setIsLoading(false)}
      onError={() => {
        setHasError(true);
        setIsLoading(false);
      }}
      {...props}
    />
  );

  return (
    <div className={`relative overflow-hidden bg-surface ${containerClassName}`}>
      {isLoading && (
        <div className="absolute inset-0 animate-pulse bg-surface-alt" aria-hidden="true" />
      )}
      {!hasError ? (
        hasPictureSources ? (
          <picture>
            {resolvedSources?.map((source, index) => (
              <source
                key={index}
                srcSet={source.srcSet}
                type={source.type}
                media={source.media}
              />
            ))}
            {resolvedWebpSrc && (
              <source srcSet={resolvedWebpSrc} type="image/webp" />
            )}
            {imageElement}
          </picture>
        ) : (
          imageElement
        )
      ) : fallbackSrc ? (
        <img
          src={resolveAssetUrl(fallbackSrc)}
          alt={alt}
          className={`object-cover ${className}`}
          {...props}
        />
      ) : (
        <div
          className="flex h-full w-full items-center justify-center bg-surface-alt/80 px-4 text-center text-xs text-text-dim"
          role="img"
          aria-label={alt}
        >
          <span>{alt || 'Preview unavailable'}</span>
        </div>
      )}
    </div>
  );
};

export default SafeImage;
