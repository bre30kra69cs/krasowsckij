import {css} from '@linaria/core';
import {CFC} from '../../types/react';
import {unit, px} from '../../theme/units';
import {color} from '../../theme/palette';
import {bem} from '../../bem';

const main = `
  font-family: Arial, Helvetica, sans-serif;
  font-style: normal;
  font-weight: bold;
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

const titleText = css`
  ${template}
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

export const TitleTextStyles = {
  main,
  s,
  m,
  l,
  template,
  titleText
};
