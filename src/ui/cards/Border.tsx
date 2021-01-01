import {css} from '@linaria/core';
import {CFC} from '../../types/react';
import {bem} from '../../bem';
import {Col} from '../boxs/Col';
import {unit, px} from '../../theme/units';

const template = `
  border-radius: ${unit(1, px)};
  overflow: hidden;
`;

const border = css`
  ${template}
`;

export const Border: CFC = ({children, className}) => {
  return <Col className={bem(border, className)}>{children}</Col>;
};

export const BorderStyles = {
  template,
  border
};
