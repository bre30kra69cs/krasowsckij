import {css} from '@linaria/core';
import {CFC} from '../types/react';
import {unit, color} from '../design';
import {bem} from '../bem';

const main = css`
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: ${unit(2.5)}px;
  color: ${color('grayShade')};
`;

export const Text: CFC = ({children, className}) => {
  return <p className={bem(main, className)}>{children}</p>;
};
