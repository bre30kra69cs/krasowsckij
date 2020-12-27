import {useCallback} from 'react';
import {CFC} from '../../types/react';
import {Modal} from '../../ui/Modal';
import {ModalContent} from '../../ui/ModalContent';
import {CardLine} from '../../ui/CardLine';
import {Title} from '../../ui/Title';
import {ToggleTheme} from '../../ui//ToggleTheme';
import {ToggleLng} from '../../ui/ToggleLng';
import {ColLine} from '../../ui//ColLine';
import {useInter, DEFAULT_LNG, LNG_VALUES} from '../../inter';
import {capitalize} from '../../utils/string';
import {useTheme, DEFAULT_THEME, THEME_VALUES} from '../../theme/theme';
import {ThemeName} from '../../types/theme';
import {Lang} from '../../types/inter';

const MAP_LNG: Record<Lang, Lang> = {
  [LNG_VALUES['EN']]: LNG_VALUES['RU'],
  [LNG_VALUES['RU']]: LNG_VALUES['EN']
};

const MAP_THEME: Record<ThemeName, ThemeName> = {
  [THEME_VALUES['LIGHT']]: THEME_VALUES['DARK'],
  [THEME_VALUES['DARK']]: THEME_VALUES['LIGHT']
};

export interface Props {
  onClose?: () => void;
}

export const MenuModal: CFC<Props> = ({onClose}) => {
  const {lng, t, setLng} = useInter();

  const {themeName, setTheme} = useTheme();

  const toggleTheme = useCallback(() => {
    const nextTheme = MAP_THEME[themeName] || DEFAULT_THEME;
    setTheme(nextTheme);
  }, [themeName, setTheme]);

  const toggleLng = useCallback(() => {
    const nextLng = MAP_LNG[lng] || DEFAULT_LNG;
    setLng(nextLng);
  }, [lng, setLng]);

  return (
    <Modal onClose={onClose} isShadowBack>
      <ModalContent isClose onClose={onClose}>
        <ColLine>
          <CardLine>
            <Title>{capitalize(t('theme'))}</Title>
            <ToggleTheme onToggle={toggleTheme} toggled={themeName === 'light'} />
          </CardLine>
          <CardLine>
            <Title>{capitalize(t('language'))}</Title>
            <ToggleLng onToggle={toggleLng} toggled={lng === 'en'} />
          </CardLine>
        </ColLine>
      </ModalContent>
    </Modal>
  );
};
