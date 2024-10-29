// src/screens/MainScreen/index.tsx
import React, { useState } from 'react';
import { Trophy, MapPin, Map } from 'lucide-react';
import { Header } from './components/Header';
import { AddressInput } from '@/features/location/components/AddressInput';
import { PlacesGrid } from '@/features/location/components/PlacesGrid';
import { Location } from '@/shared/lib/types/common';
import { TripsList } from '@/features/history/components/TripsList';
import { Card } from '@/shared/ui/Card';
import { Button } from '@/shared/ui/Button';

interface MainScreenProps {
  selectedFromPlace: Location | null;
  selectedToPlace: Location | null;
  onPlaceSelect: (place: Location, type: 'from' | 'to') => void;
  onStartBooking: () => void;
  onReferralClick: () => void;
  onTripsClick: () => void;
}

export const MainScreen: React.FC<MainScreenProps> = ({
  selectedFromPlace,
  selectedToPlace,
  onPlaceSelect,
  onStartBooking,
  onReferralClick,
  onTripsClick
}) => {
  const [isManualInput, setIsManualInput] = useState(false);
  const [fromAddress, setFromAddress] = useState(selectedFromPlace?.name || '');
  const [toAddress, setToAddress] = useState(selectedToPlace?.name || '');

  const handleMapClick = (type: 'from' | 'to') => {
    console.log('Map clicked for:', type);
  };

  const handleAddressInputFocus = (type: 'from' | 'to') => {
    setIsManualInput(true);
  };

  // Моковые данные для примера
  const recentTrips = [
    {
      id: '1',
      from: { 
        id: '1', 
        name: 'Красная площадь', 
        address: 'Москва', 
        type: 'popular' as const  // Указываем конкретный тип
      },
      to: { 
        id: '2', 
        name: 'Шереметьево', 
        address: 'Терминал D', 
        type: 'airport' as const  // Указываем конкретный тип
      },
      date: '24 окт.',
      time: '15:30',
      status: 'completed' as const,
      price: '1800₽',
      carType: 'Комфорт',
      paymentMethod: 'TON Connect'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="p-4 space-y-4 pb-24">
        {/* Адресные поля */}
        <Card>
          <div className="space-y-3">
            <div className="flex items-center gap-3 border-b pb-3">
              <MapPin className="w-5 h-5 text-tg-button flex-shrink-0" />
              <input
                type="text"
                value={fromAddress}
                onChange={(e) => setFromAddress(e.target.value)}
                onFocus={() => handleAddressInputFocus('from')}
                placeholder="Откуда"
                className="flex-1 outline-none text-tg-text placeholder:text-tg-hint bg-transparent"
              />
              <button
                onClick={() => handleMapClick('from')}
                className="p-2 hover:bg-tg-secondary rounded-full"
              >
                <Map className="w-5 h-5 text-tg-button" />
              </button>
            </div>

            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-tg-button flex-shrink-0" />
              <input
                type="text"
                value={toAddress}
                onChange={(e) => setToAddress(e.target.value)}
                onFocus={() => handleAddressInputFocus('to')}
                placeholder="Куда"
                className="flex-1 outline-none text-tg-text placeholder:text-tg-hint bg-transparent"
              />
              <button
                onClick={() => handleMapClick('to')}
                className="p-2 hover:bg-tg-secondary rounded-full"
              >
                <Map className="w-5 h-5 text-tg-button" />
              </button>
            </div>
          </div>
        </Card>

        {/* Кнопка продолжения */}
        {fromAddress && toAddress && (
          <Button
            variant="primary"
            fullWidth
            onClick={onStartBooking}
          >
            Продолжить
          </Button>
        )}

        {/* Рекомендуемые места */}
        <PlacesGrid
          onPlaceSelect={(place, type) => {
            onPlaceSelect(place, type);
            if (type === 'from') {
              setFromAddress(place.name);
            } else {
              setToAddress(place.name);
            }
          }}
        />

        {/* История поездок */}
        <div className="space-y-2">
          <div className="flex justify-between items-center px-1">
            <h2 className="text-base text-tg-hint">История поездок</h2>
            <button 
              className="text-tg-button text-sm font-medium"
              onClick={onTripsClick}
            >
              Все поездки
            </button>
          </div>
          
          <TripsList
            trips={recentTrips}
          />
        </div>
      </div>

      {/* Реферальная кнопка */}
      <div className="fixed bottom-4 inset-x-4">
        <Button 
          variant="primary"
          fullWidth
          onClick={onReferralClick}
          className="flex items-center justify-center gap-2 shadow-lg"
        >
          <Trophy className="w-5 h-5 text-yellow-500" />
          <span>Реферальная программа</span>
        </Button>
      </div>
    </div>
  );
};