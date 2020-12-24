import {css} from '@linaria/core';
import {CFC} from '../types/react';
import {unit, color} from '../design';
import {bem} from '../bem';

const main = css`
  font-family: Arial, Helvetica, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: ${unit(3)}px;
  color: ${color('white')};
`;

export const Title: CFC = ({children, className}) => {
  return <p className={bem(main, className)}>{children}</p>;
};
