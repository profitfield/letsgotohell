// src/features/history/components/TripCard.tsx
import React from 'react';
import { Clock, MapPin } from 'lucide-react';
import { Card } from '@/shared/ui/Card';
import type { Trip } from '@/shared/lib/types/common';

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
    }
  };

  return (
    <Card
      onClick={onClick}
      className={onClick ? 'cursor-pointer active:bg-tg-secondary' : ''}
    >
      {/* Основная информация */}
      <div className="flex justify-between items-start mb-3">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <MapPin className="w-4 h-4 text-tg-button" />
            <span className="font-medium">{trip.from.name}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-red-500" />
            <span className="text-tg-hint">{trip.to.name}</span>
          </div>
        </div>

        <div className="text-right">
          <div className="font-medium text-tg-button">{trip.price}</div>
          <div className="flex items-center gap-1 text-sm text-tg-hint mt-1">
            <Clock className="w-4 h-4" />
            <span>{trip.time}</span>
          </div>
        </div>
      </div>

      {/* Статус */}
      <div className="flex items-center gap-2">
        <div className={`w-2 h-2 rounded-full ${getStatusColor(trip.status)}`} />
        <span className="text-sm text-tg-hint">
          {getStatusText(trip.status)}
        </span>
      </div>

      {/* Детали (опционально) */}
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