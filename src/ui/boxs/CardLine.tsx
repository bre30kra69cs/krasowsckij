import {css} from '@linaria/core';
import {CFCS} from '../../types/react';
import {Row} from './Row';
import {Col} from './Col';
import {unit, px} from '../../theme/units';
import {bem} from '../../bem';

const cardLine = css`
  justify-content: flex-start;

  &__s {
    width: ${unit(10, px)};
  }

  &__m {
    width: ${unit(20, px)};
  }

  &__l {
    width: ${unit(30, px)};
  }
`;

export interface Props {
  gap?: 's' | 'm' | 'l';
}

export const CardLine: CFCS<Props> = ({className, children = [], gap = 'm'}) => {
  const [head, tail] = children;

  return (
    <Row className={className}>
      <Col className={bem({[cardLine]: {[gap]: true}})}>{head}</Col>
      <Col className={bem({[cardLine]: {[gap]: true}})}>{tail}</Col>
    </Row>
  );
};
