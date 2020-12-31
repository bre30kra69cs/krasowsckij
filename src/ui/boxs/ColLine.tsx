import {css} from '@linaria/core';
import {CFCS} from '../../types/react';
import {Col} from './Col';
import {Row} from './Row';
import {unit, px} from '../../theme/units';
import {bem} from '../../bem';

const colLine = css`
  &__s {
    margin-bottom: ${unit(2, px)};
  }

  &__m {
    margin-bottom: ${unit(4, px)};
  }

  &__l {
    margin-bottom: ${unit(6, px)};
  }
`;

export interface Props {
  gap?: 's' | 'm' | 'l';
}

export const ColLine: CFCS<Props> = ({children = [], className, gap = 'm'}) => {
  return (
    <Col className={className}>
      {children.map((item, index) => {
        return (
          <Row
            key={index}
            className={index !== children.length - 1 ? bem({[colLine]: {[gap]: true}}) : ''}
          >
            {item}
          </Row>
        );
      })}
    </Col>
  );
};
