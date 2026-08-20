import React, { useState } from 'react';

export interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string;
  containerClassName?: string;
}

export const SafeImage: React.FC<SafeImageProps> = ({
  src,
  alt,
  fallbackSrc,
  className = '',
  containerClassName = '',
  ...props
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Normalize path with Vite Base URL if relative
  let resolvedSrc = src;
  if (src && !src.startsWith('http') && !src.startsWith('data:')) {
    const baseUrl = import.meta.env.BASE_URL || '/';
    const cleanSrc = src.replace(/^\//, '');
    resolvedSrc = baseUrl.endsWith('/') ? `${baseUrl}${cleanSrc}` : `${baseUrl}/${cleanSrc}`;
  }

  return (
    <div className={`relative overflow-hidden bg-surface ${containerClassName}`}>
      {isLoading && (
        <div className="absolute inset-0 animate-pulse bg-surface-alt" aria-hidden="true" />
      )}
      {!hasError ? (
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
      ) : fallbackSrc ? (
        <img
          src={fallbackSrc}
          alt={alt}
          className={`object-cover ${className}`}
          {...props}
        />
      ) : (
        <div
          className="flex h-full w-full items-center justify-center bg-surface-alt/80 px-4 text-center text-xs font-mono text-text-dim"
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
