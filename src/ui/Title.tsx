import {css} from '@linaria/core';
import {CFC} from '../types/react';
import {unit, px} from '../theme/units';
import {color} from '../theme/palette';
import {bem} from '../bem';

export const mainInner = `
  font-family: Arial, Helvetica, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: ${unit(3, px)};
  color: ${color('minorDark')};
`;

const main = css`
  ${mainInner}

  &__major {
    color: ${color('majorDark')};
  }

  &__minor {
    color: ${color('minorDark')};
  }
`;

export interface Props {
  type?: 'major' | 'minor';
  onClick?: () => void;
}

export const Title: CFC<Props> = ({children, className, type = 'major', onClick}) => {
  return (
    <p className={bem({[main]: {[type]: true}}, className)} onClick={onClick}>
      {children}
    </p>
  );
};
