// src/app/App.tsx
import React, { useState } from 'react';
import { MainScreen } from '@/screens/MainScreen';
import { BookingScreen } from '@/screens/BookingScreen';
import { ReferralScreen } from '@/screens/ReferralScreen';
import { TripsScreen } from '@/screens/TripsScreen';
import { Location } from '@/shared/lib/types/common';

type Screen = 'main' | 'booking' | 'referral' | 'trips';

export const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>('main');
  const [selectedFromPlace, setSelectedFromPlace] = useState<Location | null>(null);
  const [selectedToPlace, setSelectedToPlace] = useState<Location | null>(null);

  const handlePlaceSelect = (place: Location, type: 'from' | 'to') => {
    if (type === 'from') {
      setSelectedFromPlace(place);
    } else {
      setSelectedToPlace(place);
    }
  };

  const handleStartBooking = () => {
    if (selectedFromPlace && selectedToPlace) {
      setCurrentScreen('booking');
    }
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'booking':
        if (!selectedFromPlace || !selectedToPlace) return null;
        return (
          <BookingScreen
            onBack={() => setCurrentScreen('main')}
            fromPlace={selectedFromPlace}
            toPlace={selectedToPlace}
          />
        );

      case 'referral':
        return (
          <ReferralScreen
            onBack={() => setCurrentScreen('main')}
          />
        );

      case 'trips':
        return (
          <TripsScreen
            onBack={() => setCurrentScreen('main')}
          />
        );

      default:
        return (
          <MainScreen
            selectedFromPlace={selectedFromPlace}
            selectedToPlace={selectedToPlace}
            onPlaceSelect={handlePlaceSelect}
            onStartBooking={handleStartBooking}
            onReferralClick={() => setCurrentScreen('referral')}
            onTripsClick={() => setCurrentScreen('trips')}
          />
        );
    }
  };

  return (
    <div className="h-full min-h-screen bg-gray-50">
      {renderScreen()}
    </div>
  );
};