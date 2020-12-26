import {css} from '@linaria/core';
import {CFC} from '../types/react';
import {unit, px} from '../theme/units';
import {color} from '../theme/palette';
import {bem} from '../bem';

const main = css`
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: ${unit(2.5, px)};
  color: ${color('majorShade')};
`;

export const Text: CFC = ({children, className}) => {
  return <p className={bem(main, className)}>{children}</p>;
};
