// src/features/booking/components/CarSelect.tsx
import React from 'react';
import { Users, Shield, Info, Check } from 'lucide-react';
import { Modal } from '@/shared/ui/Modal';
import { Card } from '@/shared/ui/Card';
import { formatPrice } from '@/shared/lib/utils';
import { CAR_PRICES } from '@/shared/lib/constants';

interface CarSelectProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (carId: string) => void;
  selectedCarId?: string | null;
}

const carTypes = [
  {
    id: 'comfort',
    name: 'Комфорт',
    icon: '🚗',
    description: 'Комфортный класс для города',
    price: CAR_PRICES.MIN_PRICE,
    features: [
      { icon: <Users />, text: '4 места' },
      { icon: <Shield />, text: 'Страховка' }
    ],
    benefits: [
      'Кондиционер',
      'Детское кресло по запросу'
    ]
  },
  {
    id: 'business',
    name: 'Бизнес',
    icon: '🚙',
    description: 'Премиум автомобили',
    price: CAR_PRICES.MIN_PRICE * 1.5,
    features: [
      { icon: <Users />, text: '4 места' },
      { icon: <Shield />, text: 'Премиум страховка' }
    ],
    benefits: [
      'Премиум автомобили',
      'Встреча с табличкой',
      'Помощь с багажом'
    ]
  }
];

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
        {carTypes.map((car) => (
          <button
            key={car.id}
            className={`
              w-full p-4 transition-colors
              ${selectedCarId === car.id 
                ? 'bg-tg-secondary' 
                : 'hover:bg-tg-secondary/50 active:bg-tg-secondary/80'
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
                  {formatPrice(car.price)}
                </div>
                <div className="text-xs text-tg-hint">
                  Фиксированная цена
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="flex gap-4 mb-3">
              {car.features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-1 text-sm text-tg-hint"
                >
                  {feature.icon}
                  <span>{feature.text}</span>
                </div>
              ))}
            </div>

            {/* Benefits */}
            <Card className="bg-tg-secondary p-3">
              <div className="grid grid-cols-2 gap-2">
                {car.benefits.map((benefit, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-2 text-sm text-tg-text"
                  >
                    <Check className="w-4 h-4 text-tg-button" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </Card>
          </button>
        ))}
      </div>

      {/* Info section */}
      <div className="p-4">
        <Card className="bg-tg-secondary">
          <div className="flex items-start gap-3">
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
        </Card>
      </div>
    </Modal>
  );
};