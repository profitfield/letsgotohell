// src/features/booking/components/OrderDetails.tsx
import React from 'react';
import { Phone, User } from 'lucide-react';
import { Card } from '@/shared/ui/Card';
import { Input } from '@/shared/ui/Input';

interface OrderDetailsProps {
  name: string;
  phone: string;
  onNameChange: (value: string) => void;
  onPhoneChange: (value: string) => void;
  countryCode?: string;
  onCountryCodeChange?: (value: string) => void;
}

export const OrderDetails: React.FC<OrderDetailsProps> = ({
  name,
  phone,
  onNameChange,
  onPhoneChange,
  countryCode = 'RU (+7)',
  onCountryCodeChange
}) => {
  return (
    <Card className="space-y-4">
      <div className="space-y-2">
        <div className="font-medium">Введите ваше имя</div>
        <Input
          icon={<User className="w-5 h-5" />}
          type="text"
          placeholder="Имя (до 30 символов)"
          value={name}
          onChange={(e) => onNameChange(e.target.value)}
          maxLength={30}
        />
      </div>

      <div className="space-y-2">
        <div className="font-medium">Введите номер телефона</div>
        <div className="flex gap-2">
          <button 
            className="px-4 py-3 border rounded-xl flex items-center gap-2 min-w-[120px]"
            onClick={() => onCountryCodeChange?.(countryCode)}
          >
            <span>{countryCode}</span>
            <span className="text-tg-hint">▼</span>
          </button>
          <Input
            icon={<Phone className="w-5 h-5" />}
            type="tel"
            placeholder="Номер телефона"
            value={phone}
            onChange={(e) => onPhoneChange(e.target.value)}
          />
        </div>
      </div>
    </Card>
  );
};