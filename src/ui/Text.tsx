import cn from 'classnames';
import {css} from '@linaria/core';
import {CFC} from '../types/react';
import {unit, color} from '../design';

const main = css`
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: ${unit(2.5)}px;
  color: ${color('grayShade')};
`;

export const Text: CFC = ({children, className}) => {
  return <p className={cn(main, className)}>{children}</p>;
};
