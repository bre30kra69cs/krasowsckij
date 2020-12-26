import {css} from '@linaria/core';
import {CFC} from '../types/react';
import {bem} from '../bem';
import {Card} from './Card';
import {unit, px} from '../theme/units';
import {color} from '../theme/palette';
import {CloseButton} from './CloseButton';

const main = css`
  position: relative;
  padding: ${unit(8, px)};
  background-color: ${color('minor')};
  overflow: hidden;
`;

const close = css`
  position: absolute;
  top: 0;
  right: 0;
`;

export interface Props {
  isClose?: boolean;
  onClose?: () => void;
}

export const ModalContent: CFC<Props> = ({children, className, isClose, onClose}) => {
  return (
    <Card className={bem(main, className)}>
      {isClose && <CloseButton className={close} onClick={onClose} />}
      {children}
    </Card>
  );
};
