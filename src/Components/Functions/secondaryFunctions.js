
export const totalPriceItems = order => order.price * order.count;

export const toCurrencyString = (total) => {
  return total.toLocaleString('ru-RU', {style: 'currency', currency: 'RUB'});
};