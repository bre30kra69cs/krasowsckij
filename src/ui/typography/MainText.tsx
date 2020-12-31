import {css} from '@linaria/core';
import {CFC} from '../../types/react';
import {unit, px} from '../../theme/units';
import {color} from '../../theme/palette';
import {bem} from '../../bem';

const mainText = css`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
    'Open Sans', 'Helvetica Neue', sans-serif;
  font-style: normal;
  font-weight: normal;
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

interface Props {
  size?: 's' | 'm' | 'l';
}

export const MainText: CFC<Props> = ({children, className, size = 's'}) => {
  return <span className={bem({[mainText]: {[size]: true}}, className)}>{children}</span>;
};
