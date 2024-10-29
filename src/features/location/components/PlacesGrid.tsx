// src/features/locations/components/PlacesGrid.tsx
import React from 'react';
import { Card } from '@/shared/ui/Card';
import { Location } from '@/shared/lib/types/common';

interface PlacesGridProps {
  onPlaceSelect: (place: Location, type: 'from' | 'to') => void;
}

export const PlacesGrid: React.FC<PlacesGridProps> = ({ onPlaceSelect }) => {
  const popularPlace: Location = {
    id: 'popular',
    name: 'Популярные места',
    address: 'Москва',
    type: 'popular'
  };

  const airportPlace: Location = {
    id: 'airports',
    name: 'Аэропорты',
    address: 'Москва',
    type: 'airport'
  };

  return (
    <div className="space-y-2">
      <h2 className="text-base text-tg-hint px-1">Рекомендуемые места</h2>
      <div className="grid grid-cols-2 gap-3">
        <Card
          className="overflow-hidden cursor-pointer active:opacity-90"
          onClick={() => onPlaceSelect(popularPlace, 'to')}
        >
          <div className="h-24 bg-gradient-to-br from-purple-500 to-purple-600 relative">
            <div className="absolute inset-0 p-3 flex flex-col justify-end">
              <div className="text-white font-medium">Популярные места</div>
              <div className="text-white/80 text-sm">Москва</div>
            </div>
          </div>
        </Card>

        <Card
          className="overflow-hidden cursor-pointer active:opacity-90"
          onClick={() => onPlaceSelect(airportPlace, 'to')}
        >
          <div className="h-24 bg-gradient-to-br from-blue-500 to-blue-600 relative">
            <div className="absolute inset-0 p-3 flex flex-col justify-end">
              <div className="text-white font-medium">Аэропорты</div>
              <div className="text-white/80 text-sm">Выбрать терминал</div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};