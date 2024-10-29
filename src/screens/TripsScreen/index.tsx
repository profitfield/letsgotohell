// src/screens/TripsScreen/index.tsx
import React from 'react';
import { ChevronLeft } from 'lucide-react';
import { TripsList } from '@/features/history/components/TripsList';
import { Trip } from '@/shared/lib/types/common';

interface TripsScreenProps {
  onBack: () => void;
}

export const TripsScreen: React.FC<TripsScreenProps> = ({ onBack }) => {
  // Моковые данные для примера
  const trips: Trip[] = [
    {
      id: '1',
      from: { id: '1', name: 'Красная площадь', address: 'Москва', type: 'popular' },
      to: { id: '2', name: 'Шереметьево', address: 'Терминал D', type: 'airport' },
      date: '24 окт.',
      time: '15:30',
      status: 'completed',
      price: '1800₽',
      carType: 'Комфорт',
      paymentMethod: 'TON Connect'
    },
    {
      id: '2',
      from: { id: '3', name: 'ТЦ Европейский', address: 'Москва', type: 'popular' },
      to: { id: '4', name: 'Внуково', address: 'Терминал A', type: 'airport' },
      date: '23 окт.',
      time: '12:15',
      status: 'completed',
      price: '1500₽',
      carType: 'Эконом',
      paymentMethod: 'Наличные'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white px-4 py-2 flex items-center gap-3 sticky top-0 z-10">
        <button 
          onClick={onBack}
          className="p-2 hover:bg-tg-secondary rounded-xl"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <div>
          <h1 className="text-xl font-medium">История поездок</h1>
          <div className="text-sm text-tg-hint">Все ваши поездки</div>
        </div>
      </header>

      <div className="p-4">
        <TripsList
          trips={trips}
          showDetails={true}
          onTripClick={(trip) => console.log('Trip clicked:', trip)}
        />
      </div>
    </div>
  );
};