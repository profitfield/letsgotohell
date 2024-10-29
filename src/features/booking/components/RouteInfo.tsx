// src/features/booking/components/RouteInfo.tsx
import React from 'react';
import { Location } from '@/shared/lib/types/common';
import { Card } from '@/shared/ui/Card';

interface RouteInfoProps {
  from: Location;
  to: Location;
  onEdit?: (type: 'from' | 'to') => void;
}

export const RouteInfo: React.FC<RouteInfoProps> = ({ from, to, onEdit }) => {
  return (
    <Card className="bg-gray-50">
      <div className="space-y-4">
        {/* Точка отправления */}
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 mt-1">
            <div className="w-3 h-3 rounded-full border-2 border-blue-500 bg-white" />
          </div>
          <div className="flex-1">
            <div className="font-medium">{from.name}</div>
            <div className="text-sm text-tg-hint">{from.address}</div>
          </div>
          {onEdit && (
            <button 
              onClick={() => onEdit('from')}
              className="text-sm px-3 py-1 rounded-lg border border-gray-200 hover:bg-gray-100"
            >
              Изменить
            </button>
          )}
        </div>

        {/* Точка прибытия */}
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 mt-1">
            <div className="w-3 h-3 rounded-full border-2 border-red-500 bg-white" />
          </div>
          <div className="flex-1">
            <div className="font-medium">{to.name}</div>
            <div className="text-sm text-tg-hint">{to.address}</div>
          </div>
          {onEdit && (
            <button 
              onClick={() => onEdit('to')}
              className="text-sm px-3 py-1 rounded-lg border border-gray-200 hover:bg-gray-100"
            >
              Изменить
            </button>
          )}
        </div>
      </div>
    </Card>
  );
};