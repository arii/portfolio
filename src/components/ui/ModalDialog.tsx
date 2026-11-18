import React, { useEffect, useRef } from 'react';

interface ModalDialogProps {
  label: string;
  onClose: () => void;
  className?: string;
  children: React.ReactNode;
}

const ModalDialog: React.FC<ModalDialogProps> = ({ label, onClose, className = '', children }) => {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = ref.current!;
    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = 'hidden';
    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
      if (previousFocus instanceof HTMLElement && previousFocus.isConnected) previousFocus.focus();
    };
  }, []);

  return (
    <dialog
      ref={ref}
      aria-label={label}
      aria-modal="true"
      onCancel={(event) => { event.preventDefault(); onClose(); }}
      onClick={(event) => { if (event.target === event.currentTarget) onClose(); }}
      className={`fixed inset-0 m-0 h-dvh max-h-none w-screen max-w-none border-0 bg-bg/80 p-0 text-text-body backdrop:bg-transparent backdrop-blur-md ${className}`}
    >
      {children}
    </dialog>
  );
};

export default ModalDialog;
