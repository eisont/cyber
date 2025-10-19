export const ToUpper = (word) => {
  return word
    .split('-')
    .map((el) => el.charAt(0).toUpperCase() + el.slice(1))
    .join(' ');
};

export const OriginalPrice = ({ price, discountPercentage }) => {
  const num = price / (1 - discountPercentage / 100);
  const result = num.toFixed(2);
  return result;
};
