import {css} from '@linaria/core';
import {CFC} from '../../types/react';
import {unit, px} from '../../theme/units';
import {color} from '../../theme/palette';
import {bem} from '../../bem';

export const mainInner = `
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
    'Open Sans', 'Helvetica Neue', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: ${unit(2.5, px)};
  color: ${color('minorShade')};
`;

const main = css`
  ${mainInner}

  &__major {
    color: ${color('majorShade')};
  }

  &__minor {
    color: ${color('minorShade')};
  }
`;

interface Props {
  type?: 'major' | 'minor';
}

export const Text: CFC<Props> = ({children, className, type = 'major'}) => {
  return <p className={bem({[main]: {[type]: true}}, className)}>{children}</p>;
};
