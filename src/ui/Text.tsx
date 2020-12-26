import {css} from '@linaria/core';
import {CFC} from '@app/types';
import {unit, px, color} from '@app/theme';
import {bem} from '@app/bem';

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
