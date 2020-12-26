import NextLink from 'next/link';
import {css} from '@linaria/core';
import {CFC} from '@app/types';
import {unit, px, color} from '@app/theme';
import {Routes, route} from '@app/routes';
import {bem} from '@app/bem';

const main = css`
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

  @keyframes hovering {
    from {
      color: ${color('minor')};
    }
    to {
      color: ${color('decore')};
    }
  }

  &:hover {
    color: ${color('decore')};
    animation-name: hovering;
    animation-duration: 0.4s;
  }
`;

interface Props {
  href?: keyof Routes;
}

export const Link: CFC<Props> = ({children, className, href = route('home')}) => {
  return (
    <NextLink href={href}>
      <a className={bem(main, className)}>{children}</a>
    </NextLink>
  );
};
