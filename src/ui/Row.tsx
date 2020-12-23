import cn from 'classnames';
import {css} from '@linaria/core';
import {CFC} from '../types/react';

const main = css`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

export const Row: CFC = ({children, className}) => {
  return <div className={cn(main, className)}>{children}</div>;
};
