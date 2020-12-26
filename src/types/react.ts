import {FC, ReactNode, CSSProperties} from 'react';

export type CFC<T = unknown> = FC<
  T & {
    className?: string;
    children?: ReactNode;
    style?: CSSProperties;
  }
>;

export type CFCS<T = unknown> = FC<
  T & {
    className?: string;
    children?: ReactNode[];
    style?: CSSProperties;
  }
>;
