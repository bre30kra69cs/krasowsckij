import {css} from '@linaria/core';
import {CFC} from '../types/react';
import {bem} from '../bem';

const main = css`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const Col: CFC = ({children, className}) => {
  return <div className={bem(main, className)}>{children}</div>;
};
