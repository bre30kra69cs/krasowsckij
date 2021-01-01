import {css} from '@linaria/core';
import {CFC} from '../../types/react';
import {CodeText} from '../typography/CodeText';
import {unit, px} from '../../theme/units';
import {color} from '../../theme/palette';
import {bem} from '../../bem';

const template = `
  padding: ${unit(2, px)};
  border-radius: ${unit(1, px)};
  background-color: ${color('minorDark')};
`;

const code = css`
  ${template}
`;

export const Code: CFC = ({children, className}) => {
  return (
    <code className={bem(code, className)}>
      <CodeText size="s">{children}</CodeText>
    </code>
  );
};

export const CodeStyles = {
  template,
  code
};
