// src/features/locations/components/AirportCard.tsx
import React from 'react';
import { Plane, MapPin, ChevronRight } from 'lucide-react';
import { Card } from '@/shared/ui/Card';

interface AirportCardProps {
  name: string;
  code: string;
  address: string;
  distance?: string;
  onClick?: () => void;
}

export const AirportCard: React.FC<AirportCardProps> = ({
  name,
  code,
  address,
  distance,
  onClick
}) => {
  return (
    <Card 
      onClick={onClick}
      className="flex items-center gap-4 cursor-pointer active:bg-tg-secondary"
    >
      <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center">
        <Plane className="w-6 h-6 text-purple-600" />
      </div>
      
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <span className="font-medium">{name}</span>
          <span className="text-sm text-tg-hint">{code}</span>
        </div>
        <div className="text-sm text-tg-hint flex items-center gap-1 mt-1">
          <MapPin className="w-4 h-4" />
          <span>{address}</span>
          {distance && (
            <>
              <span className="mx-1">•</span>
              <span>{distance}</span>
            </>
          )}
        </div>
      </div>

      <ChevronRight className="w-5 h-5 text-tg-hint" />
    </Card>
  );
};