// src/shared/ui/Input.tsx
import React from 'react';
import { clsx } from 'clsx';

interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'prefix'> {
  icon?: React.ReactNode;
  error?: string;
  rightElement?: React.ReactNode;
}

export const Input: React.FC<InputProps> = ({
  icon,
  error,
  rightElement,
  className,
  ...props
}) => {
  return (
    <div className="relative">
      {icon && (
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-tg-hint">
          {icon}
        </div>
      )}
      <input
        className={clsx(
          'w-full px-4 py-3 rounded-xl outline-none bg-tg-secondary',
          'text-tg-text placeholder:text-tg-hint',
          'focus:ring-2 focus:ring-tg-button/20',
          icon && 'pl-12',
          rightElement && 'pr-12',
          error && 'ring-2 ring-red-500',
          className
        )}
        {...props}
      />
      {rightElement && (
        <div className="absolute right-4 top-1/2 -translate-y-1/2">
          {rightElement}
        </div>
      )}
      {error && (
        <div className="mt-1 text-sm text-red-500">{error}</div>
      )}
    </div>
  );
};