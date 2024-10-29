import React from 'react';
import { clsx } from 'clsx';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
  rightElement?: React.ReactNode;
  error?: string;
}

export const Input: React.FC<InputProps> = ({
  icon,
  rightElement,
  error,
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
          {
            'pl-12': icon,
            'pr-12': rightElement,
            'ring-2 ring-red-500': error
          },
          className
        )}
        {...props}
      />
      {rightElement && (
        <div className="absolute right-4 top-1/2 -translate-y-1/2">
          {rightElement}
        </div>
      )}
      {error && <div className="mt-1 text-sm text-red-500">{error}</div>}
    </div>
  );
};