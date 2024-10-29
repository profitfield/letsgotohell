// src/components/ui/Card.tsx
import React from 'react';
import { clsx } from 'clsx';

interface CardProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

export const Card: React.FC<CardProps> = ({
  children,
  onClick,
  className,
  padding = 'md'
}) => {
  const paddingStyles = {
    none: '',
    sm: 'p-3',
    md: 'p-4',
    lg: 'p-6'
  };

  return (
    <div
      onClick={onClick}
      className={clsx(
        'bg-white rounded-2xl',
        paddingStyles[padding],
        onClick && 'cursor-pointer hover:bg-tg-secondary/5 active:bg-tg-secondary/10',
        className
      )}
    >
      {children}
    </div>
  );
};