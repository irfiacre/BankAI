
export const formatPrice = (num: number | string): string => {
  return Number(num).toLocaleString(undefined, { maximumFractionDigits: 0 });
};
