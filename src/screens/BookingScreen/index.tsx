// src/screens/BookingScreen/index.tsx
import React, { useState } from 'react';
import { ChevronLeft } from 'lucide-react';
import { RouteInfo } from '@/features/booking/components/RouteInfo';
import { CarSelect } from '@/features/booking/components/CarSelect';
import { OrderDetails } from '@/features/booking/components/OrderDetails';
import { PaymentSelect } from '@/features/booking/components/PaymentSelect';
import { Button } from '@/shared/ui/Button';
import { Location } from '@/shared/lib/types/common';

interface BookingScreenProps {
  onBack: () => void;
  fromPlace: Location;
  toPlace: Location;
}

export const BookingScreen: React.FC<BookingScreenProps> = ({
  onBack,
  fromPlace,
  toPlace
}) => {
  const [selectedCarId, setSelectedCarId] = useState<string | null>(null);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<string | null>(null);

  const [showCarSelect, setShowCarSelect] = useState(false);
  const [showPaymentSelect, setShowPaymentSelect] = useState(false);

  const canProceed = Boolean(
    selectedCarId && 
    name.trim() && 
    phone.trim() && 
    paymentMethod
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white px-4 py-3 flex items-center justify-between border-b sticky top-0 z-10">
        <button 
          onClick={onBack}
          className="p-2 hover:bg-tg-secondary rounded-xl"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <div className="text-center">
          <div className="text-lg font-medium">Заказ</div>
          <div className="text-sm text-tg-hint">детали поездки</div>
        </div>
        <div className="w-10" /> {/* Для центрирования */}
      </header>

      <div className="p-4 space-y-6">
        <RouteInfo
          from={fromPlace}
          to={toPlace}
          onEdit={(type) => console.log('Edit route:', type)}
        />

        {/* Выбор машины */}
        <div className="space-y-2">
          <div className="font-medium">Тип автомобиля</div>
          <button
            className="w-full"
            onClick={() => setShowCarSelect(true)}
          >
            {selectedCarId ? (
              <div className="p-4 bg-white rounded-xl flex items-center gap-3">
                <span className="text-xl">🚖</span>
                <span className="flex-1 text-left">
                  <span className="font-medium">Premium</span>
                  <span className="text-tg-hint text-sm ml-2">2400₽</span>
                </span>
              </div>
            ) : (
              <div className="p-4 bg-white rounded-xl text-tg-hint">
                Выберите тип автомобиля
              </div>
            )}
          </button>
        </div>

        <OrderDetails
          name={name}
          phone={phone}
          onNameChange={setName}
          onPhoneChange={setPhone}
        />

        {/* Способ оплаты */}
        <div className="space-y-2">
          <div className="font-medium">Способ оплаты</div>
          <button
            className="w-full"
            onClick={() => setShowPaymentSelect(true)}
          >
            {paymentMethod ? (
              <div className="p-4 bg-white rounded-xl flex items-center gap-3">
                <span className="text-xl">💳</span>
                <span className="font-medium">TON Connect</span>
              </div>
            ) : (
              <div className="p-4 bg-white rounded-xl text-tg-hint">
                Выберите способ оплаты
              </div>
            )}
          </button>
        </div>

        <Button
          variant="primary"
          fullWidth
          onClick={() => {
            console.log('Booking:', {
              fromPlace,
              toPlace,
              selectedCarId,
              name,
              phone,
              paymentMethod
            });
          }}
          disabled={!canProceed}
        >
          Заказать
        </Button>
      </div>

      <CarSelect
        isOpen={showCarSelect}
        onClose={() => setShowCarSelect(false)}
        onSelect={(carId) => {
          setSelectedCarId(carId);
          setShowCarSelect(false);
        }}
        selectedCarId={selectedCarId}
      />

      <PaymentSelect
        isOpen={showPaymentSelect}
        onClose={() => setShowPaymentSelect(false)}
        onSelect={(methodId) => {
          setPaymentMethod(methodId);
          setShowPaymentSelect(false);
        }}
        selectedMethodId={paymentMethod}
      />
    </div>
  );
};