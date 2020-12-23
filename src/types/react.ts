import {FC, ReactNode} from 'react';

export type CFC<T = unknown> = FC<
  T & {
    className?: string;
    children?: ReactNode;
  }
>;
