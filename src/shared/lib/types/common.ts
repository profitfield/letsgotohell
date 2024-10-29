// src/shared/lib/types/common.ts
export interface Location {
  id: string;
  name: string;
  address: string;
  type: 'popular' | 'airport' | 'station' | 'mall' | 'recent' | 'favorite';
  coordinates?: {
    lat: number;
    lng: number;
  };
}

export interface Trip {
  id: string;
  from: Location;
  to: Location;
  date: string;
  time: string;
  status: 'completed' | 'cancelled' | 'active';
  price: string;
  carType: string;
  paymentMethod: string;
}

export interface CarType {
  id: string;
  name: string;
  icon: string;
  description: string;
  details: string;
  price: number;
  features: string[];
  capacity: number;
}

export interface Mission {
  id: string;
  title: string;
  description: string;
  reward: number;
  progress: number;
  total: number;
  status: 'active' | 'completed' | 'locked';
}
