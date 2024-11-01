// src/shared/ui/Modal.tsx
import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ChevronLeft, X } from 'lucide-react';
import { clsx } from 'clsx';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  showBackButton?: boolean;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  showBackButton = false
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const modal = (
    <div className="fixed inset-0 z-50">
      <div 
        className="absolute inset-0 bg-black/50 transition-opacity"
        onClick={onClose}
      />
      <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-[20px] max-h-[90vh] flex flex-col">
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-gray-300 rounded-full" />

        <div className="sticky top-0 z-10 px-4 py-4 bg-white border-b border-gray-100">
          <div className="flex items-center min-h-[40px]">
            {showBackButton ? (
              <button
                onClick={onClose}
                className="absolute left-4 p-2 -ml-2 hover:bg-tg-secondary rounded-full"
              >
                <ChevronLeft className="w-6 h-6 text-tg-button" />
              </button>
            ) : (
              <button
                onClick={onClose}
                className="absolute right-4 p-2 -mr-2 hover:bg-tg-secondary rounded-full"
              >
                <X className="w-6 h-6 text-tg-text" />
              </button>
            )}
            <h2 className="flex-1 text-center text-lg font-semibold text-tg-text">
              {title}
            </h2>
          </div>
        </div>

        <div className="overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );

  return createPortal(modal, document.body);
};