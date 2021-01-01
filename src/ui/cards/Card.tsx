import {css} from '@linaria/core';
import {CFC} from '../../types/react';
import {bem} from '../../bem';
import {Col} from '../boxs/Col';
import {unit, px} from '../../theme/units';
import {BorderStyles} from './Border';

const template = `
  padding: ${unit(2, px)};
  ${BorderStyles.template}
`;

const card = css`
  ${template}
`;

export const Card: CFC = ({children, className}) => {
  return <Col className={bem(card, className)}>{children}</Col>;
};

export const CardStyles = {
  template,
  card
};
