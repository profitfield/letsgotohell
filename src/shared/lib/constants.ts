// src/shared/lib/constants.ts
import { CarType, Location } from './types/common';

export const CARS_CONFIG: CarType[] = [
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
  // ... остальные типы машин
];

export const POPULAR_PLACES: Location[] = [
  {
    id: 'red-square',
    name: 'Красная площадь',
    address: 'Москва, Красная площадь',
    type: 'popular',
    coordinates: {
      lat: 55.753544,
      lng: 37.621202
    }
  },
  // ... остальные места
];