export const capitalize = (value: string) => {
  const [head, ...rest] = value;
  const tail = rest.join('');
  return head.toUpperCase() + tail.toLowerCase();
};
