import React from 'react';
import { X } from 'lucide-react';

export interface ImageLightboxProps {
  imageSrc: string | null;
  onClose: () => void;
  altText?: string;
}

const ImageLightbox: React.FC<ImageLightboxProps> = ({
  imageSrc,
  onClose,
  altText = 'Enlarged screenshot preview',
}) => {
  if (!imageSrc) return null;

  const isWebpAvailable = /\.(png|jpe?g)$/i.test(imageSrc);
  const webpSrc = isWebpAvailable ? imageSrc.replace(/\.(png|jpe?g)$/i, '.webp') : null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-bg/95 cursor-zoom-out p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <button
        className="absolute top-4 right-4 text-text-main hover:text-accent p-2 transition-colors focus:outline-none cursor-pointer"
        onClick={onClose}
        aria-label="Close modal"
      >
        <X className="h-8 w-8" />
      </button>
      {isWebpAvailable && webpSrc ? (
        <picture>
          <source srcSet={webpSrc} type="image/webp" />
          <img
            src={imageSrc}
            alt={altText}
            className="max-w-full max-h-[90vh] object-contain rounded-3xl border border-line shadow-2xl"
          />
        </picture>
      ) : (
        <img
          src={imageSrc}
          alt={altText}
          className="max-w-full max-h-[90vh] object-contain rounded-3xl border border-line shadow-2xl"
        />
      )}
    </div>
  );
};

export default ImageLightbox;
