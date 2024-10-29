// src/features/history/types/trip.ts
import { Trip } from '@/shared/lib/types/common';

export interface TripHistoryState {
  trips: Trip[];
  isLoading: boolean;
  error: string | null;
}

export interface TripFilters {
  startDate?: Date;
  endDate?: Date;
  status?: Trip['status'];
}