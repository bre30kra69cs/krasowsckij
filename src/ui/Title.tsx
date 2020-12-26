import {css} from '@linaria/core';
import {CFC} from '@app/types';
import {unit, px, color} from '@app/theme';
import {bem} from '@app/bem';

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
