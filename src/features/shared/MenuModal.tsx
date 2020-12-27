import {useCallback} from 'react';
import {CFC} from '../../types/react';
import {Modal} from '../../ui/Modal';
import {ModalContent} from '../../ui/ModalContent';
import {CardLine} from '../../ui/CardLine';
import {Title} from '../../ui/Title';
import {Toggle} from '../../ui//Toggle';
import {ColLine} from '../../ui//ColLine';
import {useInter, Lang} from '../../inter';

const MAP_LNG: Record<Lang, Lang> = {
  en: 'ru',
  ru: 'en'
};

export interface Props {
  onClose?: () => void;
}

export const MenuModal: CFC<Props> = ({onClose}) => {
  const {lng, t, setLng} = useInter();

  const toggleLng = useCallback(() => {
    const nextLng = MAP_LNG[lng] || 'ru';
    setLng(nextLng);
  }, [lng, setLng]);

  return (
    <Modal onClose={onClose} isShadowBack>
      <ModalContent isClose onClose={onClose}>
        <ColLine>
          <CardLine>
            <Title>{t('theme')}</Title>
            <Toggle />
          </CardLine>
          <CardLine>
            <Title>{t('language')}</Title>
            <Toggle onToggle={toggleLng} />
          </CardLine>
        </ColLine>
      </ModalContent>
    </Modal>
  );
};
