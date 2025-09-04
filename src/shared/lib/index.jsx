export const ToUpper = (word) => {
  return word
    .split('-')
    .map((el) => el.replace(el.split('')[0], el.split('')[0].toUpperCase()))
    .join(' ');
};

export const OriginalPrice = (value) => {
  const num = value.price / (1 - value.discountPercentage / 100);
  const result = num.toFixed(2);
  return result;
};
