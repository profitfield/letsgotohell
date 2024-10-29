// src/features/locations/data/places.ts
import { Location } from '@/shared/lib/types/common';

export const AIRPORTS: Location[] = [
  {
    id: 'svo',
    name: 'Шереметьево',
    address: 'Московская область, городской округ Химки',
    type: 'airport',
    coordinates: {
      lat: 55.972642,
      lng: 37.414589
    }
  },
  {
    id: 'dme',
    name: 'Домодедово',
    address: 'Московская область, г. Домодедово',
    type: 'airport',
    coordinates: {
      lat: 55.410307,
      lng: 37.902451
    }
  },
  {
    id: 'vko',
    name: 'Внуково',
    address: 'Москва, ул. 1-я Рейсовая, 12',
    type: 'airport',
    coordinates: {
      lat: 55.591531,
      lng: 37.261486
    }
  }
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
  {
    id: 'gorky-park',
    name: 'Парк Горького',
    address: 'Москва, ул. Крымский Вал, 9',
    type: 'popular',
    coordinates: {
      lat: 55.731111,
      lng: 37.603889
    }
  }
];