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
  type: 'daily' | 'one-time' | 'recurring';
  progress: number;
  total: number;
  status: 'active' | 'completed' | 'locked';
}

export interface User {
  id: string;
  name: string;
  phone: string;
  referralCode?: string;
}

export interface PaymentMethod {
  id: string;
  name: string;
  description: string;
  icon: string;
  status: 'active' | 'disabled' | 'soon';
  type: 'ton' | 'cash' | 'card';
}
