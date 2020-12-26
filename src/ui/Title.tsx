import {css} from '@linaria/core';
import {CFC} from '../types/react';
import {unit, px} from '../theme/units';
import {color} from '../theme/palette';
import {bem} from '../bem';

const main = css`
  font-family: Arial, Helvetica, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: ${unit(3, px)};
  color: ${color('minor')};
`;

export const Title: CFC = ({children, className}) => {
  return <p className={bem(main, className)}>{children}</p>;
};
