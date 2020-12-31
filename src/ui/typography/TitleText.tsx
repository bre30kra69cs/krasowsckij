import {css} from '@linaria/core';
import {CFC} from '../../types/react';
import {unit, px} from '../../theme/units';
import {color} from '../../theme/palette';
import {bem} from '../../bem';

const titleText = css`
  font-family: Arial, Helvetica, sans-serif;
  font-style: normal;
  font-weight: bold;
  color: ${color('minor')};

  &__s {
    font-size: ${unit(2.5, px)};
  }

  &__m {
    font-size: ${unit(5, px)};
  }

  &__l {
    font-size: ${unit(8, px)};
  }
`;

export interface Props {
  size?: 's' | 'm' | 'l';
  onClick?: () => void;
}

export const TitleText: CFC<Props> = ({children, className, size = 's', onClick}) => {
  return (
    <span className={bem({[titleText]: {[size]: true}}, className)} onClick={onClick}>
      {children}
    </span>
  );
};
