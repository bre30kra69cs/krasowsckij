import {css} from '@linaria/core';
import {CFC} from '../../types/react';
import {unit, px} from '../../theme/units';
import {color} from '../../theme/palette';
import {bem} from '../../bem';

const main = `
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
  'Open Sans', 'Helvetica Neue', sans-serif;
  font-style: normal;
  font-weight: normal;
  color: ${color('minor')};
`;

const s = `
 font-size: ${unit(2.5, px)};
`;

const m = `
 font-size: ${unit(5, px)};
`;

const l = `
 font-size: ${unit(8, px)};
`;

const template = `
  ${main}

  &__s {
    ${s}
  }

  &__m {
    ${m}
  }

  &__l {
    ${l}
  }
`;

const mainText = css`
  ${template}
`;

interface Props {
  size?: 's' | 'm' | 'l';
}

export const MainText: CFC<Props> = ({children, className, size = 's'}) => {
  return <span className={bem({[mainText]: {[size]: true}}, className)}>{children}</span>;
};

export const MainTextStyles = {
  main,
  s,
  m,
  l,
  template,
  mainText
};
