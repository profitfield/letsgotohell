// src/app/api/constants.ts
export const API_URL = 'https://api.letsgotohell.com'; // Замените на ваш реальный API URL

export const API_ENDPOINTS = {
  // Бронирование
  booking: {
    create: '/bookings',
    cancel: (id: string) => `/bookings/${id}/cancel`,
    status: (id: string) => `/bookings/${id}/status`,
  },

  // Места
  places: {
    popular: '/places/popular',
    airports: '/places/airports',
    search: '/places/search',
  },

  // Рефералы
  referral: {
    stats: '/referral/stats',
    missions: '/referral/missions',
    leaderboard: '/referral/leaderboard',
    invite: '/referral/invite',
  },

  // История поездок
  trips: {
    list: '/trips',
    details: (id: string) => `/trips/${id}`,
  },
};

export const TELEGRAM_BOT_USERNAME = 'LetsGoToHellBot';