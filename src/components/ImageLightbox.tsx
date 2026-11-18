import React from 'react';
import { X } from 'lucide-react';
import SafeImage from '@/components/ui/SafeImage';
import ModalDialog from '@/components/ui/ModalDialog';

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

  return (
    <ModalDialog
      label={altText}
      className="flex items-center justify-center bg-bg/95 cursor-zoom-out p-4"
      onClose={onClose}
    >
      <button
        className="absolute top-4 right-4 z-10 text-text-main hover:text-accent p-2 transition-colors cursor-pointer"
        onClick={onClose}
        aria-label="Close modal"
      >
        <X className="h-8 w-8" />
      </button>
      <SafeImage
        src={imageSrc}
        alt={altText}
        loading="eager"
        decoding="async"
        className="max-w-full max-h-[90vh] object-contain rounded-3xl border border-line shadow-2xl"
        containerClassName="flex items-center justify-center bg-transparent"
      />
    </ModalDialog>
  );
};

export default ImageLightbox;
