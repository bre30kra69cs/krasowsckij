import {FC, ReactNode, CSSProperties} from 'react';

export type CP<T> = T & {
  className?: string;
  style?: CSSProperties;
  dangerouslySetInnerHTML?: {
    __html: string;
  };
};

export type CFP<T> = CP<
  T & {
    children?: ReactNode;
  }
>;

export type CFPS<T> = CP<
  T & {
    children?: ReactNode[];
  }
>;

export type CFC<T = unknown> = FC<CFP<T>>;

export type CFCS<T = unknown> = FC<CFPS<T>>;
