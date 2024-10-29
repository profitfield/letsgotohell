// src/features/referral/config/missions.ts
export interface Mission {
    id: string;
    title: string;
    description: string;
    reward: number;
    type: 'daily' | 'one-time' | 'recurring';
    condition: {
      type: 'trips' | 'referrals' | 'points';
      target: number;
    };
    icon: string;
  }
  
  export const MISSIONS: Mission[] = [
    {
      id: 'daily-login',
      title: 'Ежедневный вход',
      description: 'Войдите в приложение',
      reward: 100,
      type: 'daily',
      condition: {
        type: 'trips',
        target: 1
      },
      icon: '📱'
    },
    {
      id: 'first-trip',
      title: 'Первая поездка',
      description: 'Совершите свою первую поездку',
      reward: 500,
      type: 'one-time',
      condition: {
        type: 'trips',
        target: 1
      },
      icon: '🚗'
    },
    {
      id: 'invite-friends',
      title: 'Пригласите друзей',
      description: 'Пригласите 3 друзей',
      reward: 1000,
      type: 'one-time',
      condition: {
        type: 'referrals',
        target: 3
      },
      icon: '👥'
    },
    {
      id: 'weekly-trips',
      title: 'Частый пассажир',
      description: 'Совершите 5 поездок за неделю',
      reward: 300,
      type: 'recurring',
      condition: {
        type: 'trips',
        target: 5
      },
      icon: '🎯'
    }
  ];