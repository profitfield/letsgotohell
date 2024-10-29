// src/features/booking/components/CarSelect.tsx
import React from 'react';
import { Users, Shield, Info, Check } from 'lucide-react';
import { Modal } from '@/shared/ui/Modal';
import { Card } from '@/shared/ui/Card';
import { CarType } from '@/shared/lib/types/common';
import { CARS_CONFIG } from '@/shared/lib/constants';

interface CarSelectProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (carId: string) => void;
  selectedCarId?: string | null;
}

export const CarSelect: React.FC<CarSelectProps> = ({
  isOpen,
  onClose,
  onSelect,
  selectedCarId
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Выбор автомобиля"
    >
      <div className="divide-y divide-gray-100">
        {CARS_CONFIG.map((car) => (
          <button
            key={car.id}
            className={`
              w-full p-4 transition-colors
              ${selectedCarId === car.id 
                ? 'bg-tg-secondary' 
                : 'hover:bg-tg-secondary active:bg-tg-secondary/80'
              }
            `}
            onClick={() => onSelect(car.id)}
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-start gap-3">
                <div className="text-2xl mt-1">{car.icon}</div>
                <div className="text-left">
                  <div className="font-medium text-tg-text">
                    {car.name}
                  </div>
                  <div className="text-sm text-tg-hint">
                    {car.description}
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="font-medium text-tg-text">
                  {car.price}₽
                </div>
                <div className="text-xs text-tg-hint">
                  Фиксированная цена
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="flex gap-4 mb-3">
              <div className="flex items-center gap-1 text-sm text-tg-hint">
                <Users className="w-4 h-4" />
                <span>До {car.capacity} мест</span>
              </div>
              <div className="flex items-center gap-1 text-sm text-tg-hint">
                <Shield className="w-4 h-4" />
                <span>Страховка</span>
              </div>
            </div>

            {/* Benefits */}
            <Card className="bg-tg-secondary p-3">
              <div className="grid grid-cols-2 gap-2">
                {car.features.map((feature, index) => (
                  <div 
                    key={index} 
                    className="flex items-center gap-2 text-sm text-tg-text"
                  >
                    <Check className="w-4 h-4 text-tg-button" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </Card>
          </button>
        ))}
      </div>

      {/* Info section */}
      <div className="p-4">
        <div className="bg-tg-secondary rounded-xl p-4 flex items-start gap-3">
          <Info className="w-5 h-5 text-tg-button flex-shrink-0 mt-0.5" />
          <div className="text-sm">
            <p className="font-medium text-tg-text mb-1">
              Важная информация
            </p>
            <p className="text-tg-hint">
              Итоговая стоимость поездки может измениться в зависимости от дорожной ситуации и времени ожидания.
            </p>
          </div>
        </div>
      </div>
    </Modal>
  );
};
