export const ToUpper = (word: string) => {
  return word
    .split('-')
    .map((el) => el.charAt(0).toUpperCase() + el.slice(1))
    .join(' ');
};

type OriginalPriceProps = {
  price: number;
  discountPercentage: number;
};

export const OriginalPrice = ({ price, discountPercentage }: OriginalPriceProps): number => {
  const num = price / (1 - discountPercentage / 100);
  return parseFloat(num.toFixed(2));
};
