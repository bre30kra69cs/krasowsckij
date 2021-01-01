import {CFCS} from '../../types/react';
import styles from './ColLine.module.scss';
import {Col} from './Col';
import cn from 'classnames';

interface Props {
  gap?: 's' | 'm' | 'l';
}

export const ColLine: CFCS<Props> = ({className, children = [], gap = 's'}) => {
  return (
    <Col className={className}>
      {Array.isArray(children)
        ? children.map((item, index) => {
            const isLast = index === children.length - 1;

            return (
              <Col key={index} className={cn(!isLast && styles[gap])}>
                {item}
              </Col>
            );
          })
        : children}
    </Col>
  );
};
