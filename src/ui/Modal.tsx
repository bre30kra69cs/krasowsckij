import {css} from '@linaria/core';
import {CFC} from '../types/react';
import {bem} from '../bem';
import {Col} from './Col';
import {palette} from '../theme/palette';
import {noop} from '../utils/noop';
import {useEscape} from '../hooks/use-scape';

const main = css`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  justify-content: center;
  align-items: center;
  animation-name: mouting;
  animation-duration: 0.2s;

  @keyframes mouting {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const back = css`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;

  &__shadow-back {
    background-color: ${palette('black', 0.5)};
  }
`;

export type Props = {
  isShadowBack?: boolean;
  onClose?: () => void;
};

export const Modal: CFC<Props> = ({children, className, isShadowBack, onClose = noop}) => {
  useEscape(onClose);

  return (
    <Col className={bem(main, className)}>
      <Col className={bem({[back]: {'shadow-back': isShadowBack}})} onClick={onClose} />
      {children}
    </Col>
  );
};
