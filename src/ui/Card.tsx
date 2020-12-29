import {css} from '@linaria/core';
import {CFC} from '../types/react';
import {bem} from '../bem';
import {Col} from './Col';
import {unit, px} from '../theme/units';

const main = css`
  padding: ${unit(2, px)};
  border-radius: ${unit(1, px)};
  overflow: hidden;
`;

export const Card: CFC = ({children, className}) => {
  return <Col className={bem(main, className)}>{children}</Col>;
};
