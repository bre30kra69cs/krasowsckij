import {CFC} from '../../types/react';
import {Modal} from '../../ui/Modal';
import {ModalContent} from '../../ui/ModalContent';
import {CardLine} from '../../ui/CardLine';
import {Title} from '../../ui/Title';
import {Toggle} from '../../ui//Toggle';
import {ColLine} from '../../ui//ColLine';
import {useInter} from '../../inter';

export interface Props {
  onClose?: () => void;
}

export const MenuModal: CFC<Props> = ({onClose}) => {
  const {t} = useInter();

  return (
    <Modal onClose={onClose} isShadowBack>
      <ModalContent isClose onClose={onClose}>
        <ColLine>
          <CardLine>
            <Title>{t('theme')}</Title>
            <Toggle />
          </CardLine>
          <CardLine>
            <Title>en/ру</Title>
            <Toggle />
          </CardLine>
        </ColLine>
      </ModalContent>
    </Modal>
  );
};
