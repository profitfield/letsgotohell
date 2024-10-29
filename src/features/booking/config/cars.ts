// src/features/booking/config/cars.ts
export interface CarConfig {
    id: string;
    name: string;
    icon: string;
    description: string;
    details: string;
    price: number;
    features: string[];
    capacity: number;
  }
  
  export const CARS_CONFIG: CarConfig[] = [
    {
      id: 'economy',
      name: 'Эконом',
      icon: '🚗',
      description: 'Комфортная поездка по доступной цене',
      details: 'До 4 пассажиров',
      price: 1200,
      features: [
        'Кондиционер',
        'Детское кресло по запросу',
        'Безналичная оплата'
      ],
      capacity: 4
    },
    {
      id: 'comfort',
      name: 'Комфорт',
      icon: '🚙',
      description: 'Комфортный класс для города',
      details: 'До 4 пассажиров • Премиум сервис',
      price: 1800,
      features: [
        'Премиум салон',
        'Опытный водитель',
        'Встреча с табличкой'
      ],
      capacity: 4
    },
    {
      id: 'business',
      name: 'Бизнес',
      icon: '🚘',
      description: 'Премиум автомобили для деловых поездок',
      details: 'До 4 пассажиров • Премиум сервис',
      price: 2400,
      features: [
        'Представительский класс',
        'Персональный водитель',
        'Премиум сервис'
      ],
      capacity: 4
    },
    {
      id: 'minivan',
      name: 'Минивэн',
      icon: '🚐',
      description: 'Вместительный минивэн для группы',
      details: 'До 6 пассажиров • Много места',
      price: 2000,
      features: [
        'Большой багажник',
        'До 6 пассажиров',
        'Кондиционер'
      ],
      capacity: 6
    }
  ];