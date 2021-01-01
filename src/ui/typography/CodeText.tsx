import {css} from '@linaria/core';
import {CFC} from '../../types/react';
import {unit, px} from '../../theme/units';
import {color} from '../../theme/palette';
import {bem} from '../../bem';

const main = `
  font-family: 'Courier New', Courier, monospace;
  font-style: normal;
  font-weight: bold;
  color: ${color('major')};
`;

const s = `
 font-size: ${unit(2, px)};
`;

const m = `
 font-size: ${unit(4, px)};
`;

const l = `
 font-size: ${unit(6, px)};
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

const codeText = css`
  ${template}
`;

interface Props {
  size?: 's' | 'm' | 'l';
}

export const CodeText: CFC<Props> = ({children, className, size = 's'}) => {
  return <span className={bem({[codeText]: {[size]: true}}, className)}>{children}</span>;
};

export const CodeTextStyles = {
  main,
  s,
  m,
  l,
  template,
  codeText
};
