export const ToUpper = (word) => {
  return word
    .split('-')
    .map((el) => el.replace(el.split('')[0], el.split('')[0].toUpperCase()))
    .join(' ');
};
