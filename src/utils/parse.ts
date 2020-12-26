import {isString, isNumber, Value} from './predict';

export const toNumber = (value?: Value): number => {
  if (isNumber(value)) {
    return value;
  }

  if (isString(value)) {
    Number.parseFloat(value);
  }

  return NaN;
};
