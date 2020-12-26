export const capitalize = (value: string) => {
  const [head, ...rest] = value;
  return [head.toUpperCase(), ...rest].join('');
};
