import NextLink from 'next/link';
import cn from 'classnames';
import {css} from '@linaria/core';
import {CFC} from '../types/react';
import {unit, color} from '../design';
import {Routes, route} from '../routes';

const main = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: Arial, Helvetica, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: ${unit(2)}px;
  color: ${color('white')};
  text-decoration: none;

  @keyframes hovering {
    from {
      color: ${color('white')};
    }
    to {
      color: ${color('whiteDark')};
    }
  }

  &:hover {
    color: ${color('whiteDark')};
    animation-name: hovering;
    animation-duration: 0.4s;
  }
`;

interface Props {
  href?: Routes;
}

export const Link: CFC<Props> = ({children, className, href = route('home')}) => {
  return (
    <NextLink href={href}>
      <a className={cn(main, className)}>{children}</a>
    </NextLink>
  );
};
