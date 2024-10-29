// src/features/booking/components/DateTimeModal.tsx
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Clock } from 'lucide-react';
import { Modal } from '@/shared/ui/Modal';
import { Button } from '@/shared/ui/Button';

interface DateTimeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (date: Date, time: string) => void;
  initialDateTime?: { date: Date; time: string } | null;
}

export const DateTimeModal: React.FC<DateTimeModalProps> = ({
  isOpen,
  onClose,
  onSelect,
  initialDateTime
}) => {
  const [selectedDate, setSelectedDate] = useState<Date>(
    initialDateTime?.date || new Date()
  );
  const [selectedTime, setSelectedTime] = useState<string>(
    initialDateTime?.time || ''
  );

  const months = [
    'Январь', 'Февраль', 'Март', 'Апрель',
    'Май', 'Июнь', 'Июль', 'Август',
    'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
  ];

  const weekDays = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

  // Генерация временных слотов
  const generateTimeSlots = () => {
    const slots: string[] = [];
    const currentDate = new Date();
    const isToday = selectedDate.toDateString() === currentDate.toDateString();
    const currentHour = currentDate.getHours();
    const currentMinute = currentDate.getMinutes();

    for (let hour = 0; hour < 24; hour++) {
      for (let minute = 0; minute < 60; minute += 15) {
        if (isToday && (hour < currentHour || (hour === currentHour && minute <= currentMinute))) {
          continue;
        }
        slots.push(`${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`);
      }
    }
    return slots;
  };

  const handleConfirm = () => {
    if (selectedTime) {
      onSelect(selectedDate, selectedTime);
      onClose();
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Выберите время"
    >
      <div className="p-4 space-y-4">
        {/* Календарь */}
        <div className="bg-white rounded-xl p-4">
          {/* Навигация по месяцам */}
          <div className="flex items-center justify-between mb-4">
            <button
              className="p-2 hover:bg-tg-secondary rounded-xl transition-colors"
              onClick={() => {
                const newDate = new Date(selectedDate);
                newDate.setMonth(newDate.getMonth() - 1);
                setSelectedDate(newDate);
              }}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="font-medium">
              {months[selectedDate.getMonth()]} {selectedDate.getFullYear()}
            </div>
            <button
              className="p-2 hover:bg-tg-secondary rounded-xl transition-colors"
              onClick={() => {
                const newDate = new Date(selectedDate);
                newDate.setMonth(newDate.getMonth() + 1);
                setSelectedDate(newDate);
              }}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Дни недели */}
          <div className="grid grid-cols-7 mb-2">
            {weekDays.map(day => (
              <div
                key={day}
                className="h-10 flex items-center justify-center text-sm text-tg-hint"
              >
                {day}
              </div>
            ))}
          </div>

          {/* Календарная сетка */}
          <div className="grid grid-cols-7 gap-1">
            {/* Здесь будет генерация дней */}
          </div>
        </div>

        {/* Выбор времени */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Clock className="w-4 h-4 text-tg-hint" />
            <span className="text-sm text-tg-hint">Доступное время</span>
          </div>
          <div className="grid grid-cols-4 gap-2">
            {generateTimeSlots().map(time => (
              <button
                key={time}
                className={`p-3 rounded-xl text-sm transition-colors
                  ${time === selectedTime
                    ? 'bg-tg-button text-white'
                    : 'bg-tg-secondary text-tg-text hover:bg-tg-secondary/80'
                  }`}
                onClick={() => setSelectedTime(time)}
              >
                {time}
              </button>
            ))}
          </div>
        </div>

        {/* Кнопка подтверждения */}
        <Button
          fullWidth
          onClick={handleConfirm}
          disabled={!selectedTime}
        >
          Подтвердить
        </Button>
      </div>
    </Modal>
  );
};