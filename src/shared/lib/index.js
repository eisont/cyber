export const ToUpper = (word) => {
  return word
    .split('-')
    .map((el) => el.replace(el.split('')[0], el.split('')[0].toUpperCase()))
    .join(' ');
};

export const OriginalPrice = ({ price, discountPercentage }) => {
  const num = price / (1 - discountPercentage / 100);
  const result = num.toFixed(2);
  return result;
};
