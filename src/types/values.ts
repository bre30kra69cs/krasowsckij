import {CapitalizeWorld} from './capitalize';

export type ConstMap<T> = {
  [K in T as K extends string ? CapitalizeWorld<K> : never]: K;
};

export type ValueMap<T> = {
  [K in keyof T]: K;
};
