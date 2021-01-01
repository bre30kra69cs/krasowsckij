import {css} from '@linaria/core';
import {CFC} from '../../types/react';
import {bem} from '../../bem';
import {Card} from '../cards/Card';
import {unit, px} from '../../theme/units';
import {color} from '../../theme/palette';
import {CloseButton} from '../buttons/CloseButton';

const template = `
  position: relative;
  padding: ${unit(8, px)};
  background-color: ${color('majorLight')};
  overflow: hidden;
  box-shadow: 0 0 ${unit(1.5, px)} ${unit(0.1, px)};
`;

const modalContent = css`
  ${template}
`;

const modalContentClose = css`
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
    <Card className={bem(modalContent, className)}>
      {isClose && <CloseButton className={modalContentClose} onClick={onClose} />}
      {children}
    </Card>
  );
};

export const ModalContentStyles = {
  template,
  modalContent
};
