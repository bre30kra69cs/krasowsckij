import {useCallback} from 'react';
import {CFC} from '../../types/react';
import {Modal} from '../../ui/Modal';
import {ModalContent} from '../../ui/ModalContent';
import {CardLine} from '../../ui/CardLine';
import {Title} from '../../ui/Title';
import {ToggleTheme} from '../../ui//ToggleTheme';
import {ToggleLng} from '../../ui/ToggleLng';
import {ColLine} from '../../ui//ColLine';
import {useInter, Lang} from '../../inter';
import {capitalize} from '../../utils/string';
import {useTheme, ThemeName, DEFAULT_THEME} from '../../theme/theme';

const MAP_LNG: Record<Lang, Lang> = {
  en: 'ru',
  ru: 'en'
};

const MAP_THEME: Record<ThemeName, ThemeName> = {
  light: 'dark',
  dark: 'light'
};

export interface Props {
  onClose?: () => void;
}

export const MenuModal: CFC<Props> = ({onClose}) => {
  const {lng, t, setLng} = useInter();

  const {name: theme, setTheme} = useTheme();

  const toggleTheme = useCallback(() => {
    const nextTheme = MAP_THEME[theme] || DEFAULT_THEME;
    setTheme(nextTheme);
  }, [theme, setTheme]);

  const toggleLng = useCallback(() => {
    const nextLng = MAP_LNG[lng] || 'ru';
    setLng(nextLng);
  }, [lng, setLng]);

  return (
    <Modal onClose={onClose} isShadowBack>
      <ModalContent isClose onClose={onClose}>
        <ColLine>
          <CardLine>
            <Title>{capitalize(t('theme'))}</Title>
            <ToggleTheme onToggle={toggleTheme} />
          </CardLine>
          <CardLine>
            <Title>{capitalize(t('language'))}</Title>
            <ToggleLng onToggle={toggleLng} />
          </CardLine>
        </ColLine>
      </ModalContent>
    </Modal>
  );
};
