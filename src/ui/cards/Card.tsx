import {css} from '@linaria/core';
import {CFC} from '../../types/react';
import {bem} from '../../bem';
import {Col} from '../boxs/Col';
import {unit, px} from '../../theme/units';

const card = css`
  padding: ${unit(2, px)};
  border-radius: ${unit(1, px)};
  overflow: hidden;
`;

export const Card: CFC = ({children, className}) => {
  return <Col className={bem(card, className)}>{children}</Col>;
};
