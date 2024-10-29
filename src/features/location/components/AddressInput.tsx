// src/features/locations/components/AddressInput.tsx
import React from 'react';
import { MapPin, Map } from 'lucide-react';
import { Card } from '@/shared/ui/Card';

interface AddressInputProps {
  fromValue: string;
  toValue: string;
  onFromChange: (value: string) => void;
  onToChange: (value: string) => void;
  onMapClick: (type: 'from' | 'to') => void;
  onFocus: (type: 'from' | 'to') => void;
}

export const AddressInput: React.FC<AddressInputProps> = ({
  fromValue,
  toValue,
  onFromChange,
  onToChange,
  onMapClick,
  onFocus
}) => {
  return (
    <Card>
      <div className="space-y-3">
        {/* From input */}
        <div className="flex items-center gap-3 border-b pb-3">
          <MapPin className="w-5 h-5 text-tg-button flex-shrink-0" />
          <input
            type="text"
            value={fromValue}
            onChange={(e) => onFromChange(e.target.value)}
            onFocus={() => onFocus('from')}
            placeholder="Откуда"
            className="flex-1 outline-none text-tg-text placeholder:text-tg-hint bg-transparent"
          />
          <button
            onClick={() => onMapClick('from')}
            className="p-2 hover:bg-tg-secondary rounded-full"
          >
            <Map className="w-5 h-5 text-tg-button" />
          </button>
        </div>

        {/* To input */}
        <div className="flex items-center gap-3">
          <MapPin className="w-5 h-5 text-tg-button flex-shrink-0" />
          <input
            type="text"
            value={toValue}
            onChange={(e) => onToChange(e.target.value)}
            onFocus={() => onFocus('to')}
            placeholder="Куда"
            className="flex-1 outline-none text-tg-text placeholder:text-tg-hint bg-transparent"
          />
          <button
            onClick={() => onMapClick('to')}
            className="p-2 hover:bg-tg-secondary rounded-full"
          >
            <Map className="w-5 h-5 text-tg-button" />
          </button>
        </div>
      </div>
    </Card>
  );
};