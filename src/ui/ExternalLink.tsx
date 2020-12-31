import {css} from '@linaria/core';
import {CFC} from '../types/react';
import {unit, px} from '../theme/units';
import {color} from '../theme/palette';
import {bem} from '../bem';

export const mainInner = `
  font-family: Arial, Helvetica, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: ${unit(2, px)};
  color: ${color('minor')};
  outline: none;

  &:hover {
    color: ${color('decore')};
    transition: 0.4s;
  }
`;

export const main = css`
  ${mainInner}
`;

export interface Props {
  path: string;
}

export const ExternalLink: CFC<Props> = ({children, className, path}) => {
  return (
    <a href={path} className={bem(main, className)}>
      {children}
    </a>
  );
};
