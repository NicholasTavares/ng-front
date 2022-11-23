export const CurrencyToValidNumber = (value: string): number => {
  let v = value.replace(/\D/g, "");
  v = (+v / 100).toFixed(2);
  return +v;
};
