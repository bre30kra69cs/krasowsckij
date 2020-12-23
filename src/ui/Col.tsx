import cn from 'classnames';
import {css} from '@linaria/core';
import {CFC} from '../types/react';

const main = css`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const Col: CFC = ({children, className}) => {
  return <div className={cn(main, className)}>{children}</div>;
};
