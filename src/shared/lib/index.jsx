export const ToUpper = (word) => {
  const first = word.split('')[0].toUpperCase();
  const second = word.split('').slice(1, word.length).join('');
  return first + second;
};
