import {css} from '@linaria/core';
import {CFC} from '../types/react';
import {unit, px} from '../theme/units';
import {color} from '../theme/palette';
import {bem} from '../bem';

const main = css`
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: ${unit(2.5, px)};

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
