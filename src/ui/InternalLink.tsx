import {useMemo} from 'react';
import NextLink from 'next/link';
import {css} from '@linaria/core';
import {CFC} from '../types/react';
import {unit, px} from '../theme/units';
import {color} from '../theme/palette';
import {Routes, Options} from '../types/routes';
import {bem} from '../bem';
import {route} from '../hooks/use-router';

export const main = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: Arial, Helvetica, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: ${unit(2, px)};
  text-decoration: none;
  color: ${color('minor')};
  outline: none;

  &:hover {
    color: ${color('decore')};
    transition: 0.4s;
  }
`;

export interface Props {
  path: keyof Routes;
  id?: string;
}

export const InternalLink: CFC<Props> = ({children, className, path = 'home', id}) => {
  const options = useMemo(
    (): Options => ({
      id
    }),
    [id]
  );

  return (
    <NextLink href={route(path, options)}>
      <a className={bem(main, className)}>{children}</a>
    </NextLink>
  );
};
