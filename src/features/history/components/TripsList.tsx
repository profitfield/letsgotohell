// src/features/history/components/TripsList.tsx
import React from 'react';
import { TripCard } from './TripCard';
import { Trip } from '@/shared/lib/types/common';

interface TripsListProps {
  trips: Trip[];
  onTripClick?: (trip: Trip) => void;
  showDetails?: boolean;
}

export const TripsList: React.FC<TripsListProps> = ({
  trips,
  onTripClick,
  showDetails = false
}) => {
  const groupTripsByMonth = (trips: Trip[]) => {
    const grouped = trips.reduce<Record<string, Trip[]>>((acc, trip) => {
      const monthYear = trip.date.split(' ').slice(1).join(' ');
      if (!acc[monthYear]) {
        acc[monthYear] = [];
      }
      acc[monthYear].push(trip);
      return acc;
    }, {});

    return Object.entries(grouped).map(([monthYear, trips]) => ({
      monthYear,
      trips
    }));
  };

  const groupedTrips = groupTripsByMonth(trips);

  if (trips.length === 0) {
    return (
      <div className="py-12 text-center">
        <div className="text-lg font-medium text-tg-text mb-2">
          История поездок пуста
        </div>
        <div className="text-sm text-tg-hint">
          Здесь будут отображаться ваши поездки
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {groupedTrips.map(({ monthYear, trips }) => (
        <div key={monthYear}>
          <div className="text-sm text-tg-hint mb-2 px-1">
            {monthYear}
          </div>
          <div className="space-y-3">
            {trips.map((trip) => (
              <TripCard
                key={trip.id}
                trip={trip}
                onClick={onTripClick ? () => onTripClick(trip) : undefined}
                showDetails={showDetails}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};