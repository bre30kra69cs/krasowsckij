export const capitalize = (value?: string) => {
  if (!value) {
    return value ?? undefined;
  }

  const [head, ...rest] = value;
  return [head.toUpperCase(), ...rest].join('');
};
