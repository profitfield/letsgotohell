// src/features/booking/components/PaymentSelect.tsx
import React from 'react';
import { Wallet, CreditCard, AlertCircle, Info, CheckCircle, Banknote, Lock } from 'lucide-react';
import { Modal } from '@/shared/ui/Modal';
import { Card } from '@/shared/ui/Card';
import { PAYMENT_METHODS } from '@/shared/lib/constants';

interface PaymentSelectProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (methodId: string) => void;
  selectedMethodId?: string | null;
}

export const PaymentSelect: React.FC<PaymentSelectProps> = ({
  isOpen,
  onClose,
  onSelect,
  selectedMethodId
}) => {
  const paymentMethods = PAYMENT_METHODS;

  const getMethodIcon = (type: string) => {
    switch (type) {
      case 'ton':
        return (
          <div className="w-10 h-10 bg-[#0098EA]/10 rounded-xl flex items-center justify-center">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
              <path 
                d="M12 2L3 7V17L12 22L21 17V7L12 2Z" 
                stroke="#0098EA" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </div>
        );
      case 'cash':
        return (
          <div className="w-10 h-10 bg-green-500/10 rounded-xl flex items-center justify-center">
            <Banknote className="w-6 h-6 text-green-500" />
          </div>
        );
      default:
        return (
          <div className="w-10 h-10 bg-gray-500/10 rounded-xl flex items-center justify-center">
            <CreditCard className="w-6 h-6 text-gray-500" />
          </div>
        );
    }
  };

  const getMethodBenefits = (type: string) => {
    switch (type) {
      case 'ton':
        return [
          'Мгновенные транзакции',
          'Минимальная комиссия',
          'Безопасные платежи',
          'Поддержка 24/7'
        ];
      case 'cash':
        return [
          'Оплата по факту',
          'Без комиссии',
          'Любая сумма',
          'Чек при оплате'
        ];
      default:
        return [];
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Способ оплаты"
    >
      <div className="flex flex-col min-h-[50vh]">
        {/* Payment Methods List */}
        <div className="flex-1 divide-y divide-gray-100">
          {paymentMethods.map((method) => (
            <button
              key={method.id}
              className={`
                w-full p-4 transition-colors
                ${method.status === 'disabled' || method.status === 'soon'
                  ? 'opacity-50 cursor-not-allowed'
                  : selectedMethodId === method.id
                  ? 'bg-tg-secondary'
                  : 'hover:bg-tg-secondary active:bg-tg-secondary/80'
                }
              `}
              disabled={method.status === 'disabled' || method.status === 'soon'}
              onClick={() => method.status === 'active' && onSelect(method.id)}
            >
              <div className="flex items-start gap-3">
                {getMethodIcon(method.type)}
                
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-tg-text">
                      {method.name}
                    </span>
                    {method.status === 'soon' && (
                      <span className="text-xs px-2 py-0.5 bg-tg-secondary rounded-full text-tg-hint">
                        Скоро
                      </span>
                    )}
                  </div>
                  <div className="text-sm text-tg-hint mt-0.5">
                    {method.description}
                  </div>

                  {method.status === 'active' && (
                    <div className="mt-3 grid grid-cols-2 gap-2">
                      {getMethodBenefits(method.type).map((benefit, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-2"
                        >
                          <CheckCircle className="w-4 h-4 text-tg-button" />
                          <span className="text-sm text-tg-text">
                            {benefit}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Info Sections */}
        <div className="p-4 space-y-3">
          {/* Security Notice */}
          <Card className="bg-[#0098EA]/10">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-[#0098EA] flex-shrink-0 mt-0.5" />
              <div className="text-sm">
                <p className="font-medium text-tg-text mb-1">
                  Безопасные платежи
                </p>
                <p className="text-tg-hint">
                  Все платежи проходят через защищенные каналы с использованием современных методов шифрования.
                </p>
              </div>
            </div>
          </Card>

          {/* Coming Soon Notice */}
          <Card className="bg-tg-secondary">
            <div className="flex items-start gap-3">
              <Info className="w-5 h-5 text-tg-hint flex-shrink-0 mt-0.5" />
              <div className="text-sm">
                <p className="font-medium text-tg-text mb-1">
                  Скоро
                </p>
                <p className="text-tg-hint">
                  Оплата банковской картой и другие способы оплаты будут доступны в ближайшее время.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </Modal>
  );
};