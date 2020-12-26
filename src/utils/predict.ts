export type Value = any;

export const isString = (value?: Value) => {
  return typeof value === 'string';
};

export const isNumber = (value?: Value) => {
  return typeof value === 'number';
};
