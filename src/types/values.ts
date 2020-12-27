import {CapitalizeWorld} from './capitalize';

export type ValuesMap<T> = {
  [K in T as K extends string ? CapitalizeWorld<K> : never]: K;
};
