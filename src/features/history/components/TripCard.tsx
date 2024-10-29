// src/features/history/components/TripCard.tsx
import React from 'react';
import { Card } from '@/shared/ui/Card';
import { Trip } from '@/shared/lib/types/common';
import { MapPin, Clock } from 'lucide-react';

interface TripCardProps {
  trip: Trip;
  onClick?: () => void;
  showDetails?: boolean;
}

export const TripCard: React.FC<TripCardProps> = ({
  trip,
  onClick,
  showDetails = false
}) => {
  const getStatusColor = (status: Trip['status']) => {
    switch (status) {
      case 'completed':
        return 'bg-green-500';
      case 'cancelled':
        return 'bg-red-500';
      case 'active':
        return 'bg-yellow-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getStatusText = (status: Trip['status']) => {
    switch (status) {
      case 'completed':
        return 'Поездка завершена';
      case 'cancelled':
        return 'Поездка отменена';
      case 'active':
        return 'В пути';
      default:
        return 'Статус неизвестен';
    }
  };

  return (
    <Card
      onClick={onClick}
      className={onClick ? 'cursor-pointer active:bg-tg-secondary' : ''}
    >
      <div className="flex justify-between items-start mb-3">
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-tg-hint" />
            <div className="font-medium">{trip.from.name}</div>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <MapPin className="w-4 h-4 text-tg-hint" />
            <div className="text-tg-hint">{trip.to.name}</div>
          </div>
        </div>
        <div className="text-right">
          <div className="font-medium text-tg-button">{trip.price}</div>
          <div className="text-sm text-tg-hint flex items-center gap-1 justify-end mt-1">
            <Clock className="w-4 h-4" />
            <span>{trip.time}</span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <div className={`w-2 h-2 rounded-full ${getStatusColor(trip.status)}`} />
        <span className="text-sm text-tg-hint">
          {getStatusText(trip.status)}
        </span>
      </div>

      {showDetails && (
        <div className="mt-3 pt-3 border-t border-gray-100">
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-tg-hint">Тип авто</span>
              <span className="text-tg-text">{trip.carType}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-tg-hint">Способ оплаты</span>
              <span className="text-tg-text">{trip.paymentMethod}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-tg-hint">Дата</span>
              <span className="text-tg-text">{trip.date}</span>
            </div>
          </div>
        </div>
      )}
    </Card>
  );
};