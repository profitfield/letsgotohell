// src/features/history/components/EmptyTrips.tsx
import React from 'react';
import { Calendar } from 'lucide-react';

export const EmptyTrips: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4">
      <div className="w-16 h-16 bg-tg-secondary rounded-full flex items-center justify-center mb-4">
        <Calendar className="w-8 h-8 text-tg-hint" />
      </div>
      <div className="text-lg font-medium text-tg-text mb-2">
        История поездок пуста
      </div>
      <div className="text-sm text-tg-hint text-center">
        Здесь будут отображаться ваши поездки.
        <br />
        Закажите первую поездку прямо сейчас!
      </div>
    </div>
  );
};