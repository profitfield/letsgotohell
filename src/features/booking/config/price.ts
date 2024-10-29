// src/features/booking/config/prices.ts
interface PricingRule {
    id: string;
    name: string;
    multiplier: number;
    condition: (distance: number, time: string, passengers: number) => boolean;
  }
  
  export const BASE_PRICE_PER_KM = 30;
  export const MIN_PRICE = 1200;
  
  export const PRICING_RULES: PricingRule[] = [
    {
      id: 'night',
      name: 'Ночной тариф',
      multiplier: 1.2,
      condition: (_, time) => {
        const hour = parseInt(time.split(':')[0]);
        return hour >= 23 || hour < 6;
      }
    },
    {
      id: 'rush-hour',
      name: 'Час пик',
      multiplier: 1.3,
      condition: (_, time) => {
        const hour = parseInt(time.split(':')[0]);
        return (hour >= 8 && hour <= 10) || (hour >= 17 && hour <= 19);
      }
    },
    {
      id: 'long-distance',
      name: 'Дальняя поездка',
      multiplier: 0.9,
      condition: (distance) => distance > 30
    }
  ];
  
  export const calculatePrice = (
    basePrice: number,
    distance: number,
    time: string,
    passengers: number
  ): number => {
    let finalPrice = Math.max(basePrice, MIN_PRICE);
  
    // Применяем правила ценообразования
    PRICING_RULES.forEach(rule => {
      if (rule.condition(distance, time, passengers)) {
        finalPrice *= rule.multiplier;
      }
    });
  
    return Math.round(finalPrice / 50) * 50; // Округляем до 50 рублей
  };