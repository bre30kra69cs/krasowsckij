import NextLink from 'next/link';
import {css} from '@linaria/core';
import {CFC} from '../types/react';
import {unit, color} from '../design';
import {Routes, route} from '../routes';
import {bem} from '../bem';

const main = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: Arial, Helvetica, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: ${unit(2)}px;
  text-decoration: none;

  @keyframes hovering-light {
    from {
      color: ${color('white')};
    }
    to {
      color: ${color('pink')};
    }
  }

  @keyframes hovering-dark {
    from {
      color: ${color('grayDark')};
    }
    to {
      color: ${color('pink')};
    }
  }

  &__light {
    color: ${color('white')};

    &:hover {
      color: ${color('pink')};
      animation-name: hovering-light;
      animation-duration: 0.4s;
    }
  }

  &__dark {
    color: ${color('grayDark')};

    &:hover {
      color: ${color('pink')};
      animation-name: hovering-dark;
      animation-duration: 0.4s;
    }
  }
`;

interface Props {
  href?: Routes;
  type?: 'light' | 'dark';
}

export const Link: CFC<Props> = ({children, className, href = route('home'), type = 'light'}) => {
  return (
    <NextLink href={href}>
      <a className={bem({[main]: {[type]: type}}, className)}>{children}</a>
    </NextLink>
  );
};
