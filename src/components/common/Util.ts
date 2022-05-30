export const MAX_STARS = 5;
export const CURRENCY = "BRL";

export const showCurrencyValue = (value: number): string => {
  return value !== null && value !== undefined && value > -1
    ? (value / 100).toLocaleString("pt-BR", {
        style: "currency",
        currency: CURRENCY,
      })
    : "";
};
