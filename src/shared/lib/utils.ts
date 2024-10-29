// src/shared/lib/utils.ts
export const formatPrice = (price: number): string => {
    return `${price.toLocaleString('ru-RU')}₽`;
  };
  
  export const formatPhoneNumber = (phone: string): string => {
    // Форматирование для российских номеров
    const cleaned = phone.replace(/\D/g, '');
    const match = cleaned.match(/^(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})$/);
    if (match) {
      return `+${match[1]} (${match[2]}) ${match[3]}-${match[4]}-${match[5]}`;
    }
    return phone;
  };
  
  export const calculateTripPrice = (
    distance: number,
    basePrice: number,
    isRushHour: boolean = false
  ): number => {
    let price = Math.max(basePrice, CAR_PRICES.MIN_PRICE);
    price += distance * CAR_PRICES.PER_KM;
    if (isRushHour) {
      price *= CAR_PRICES.SURGE_MULTIPLIER;
    }
    return Math.round(price / 50) * 50; // Округляем до 50 рублей
  };