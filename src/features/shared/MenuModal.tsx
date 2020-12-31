import {useCallback} from 'react';
import {CFC} from '../../types/react';
import {Modal} from '../../ui/modals/Modal';
import {ModalContent} from '../../ui/modals/ModalContent';
import {CardLine} from '../../ui/boxs/CardLine';
import {TitleText} from '../../ui/typography/TitleText';
import {ToggleTheme} from '../../ui/toggles/ToggleTheme';
import {ToggleLng} from '../../ui/toggles/ToggleLng';
import {ColLine} from '../../ui/boxs/ColLine';
import {useInter, DEFAULT_LNG, LNG_VALUES} from '../../inter';
import {capitalize} from '../../utils/capitalize';
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
            <TitleText>{capitalize(t('theme'))}</TitleText>
            <ToggleTheme onToggle={toggleTheme} toggled={themeName === 'light'} />
          </CardLine>
          <CardLine>
            <TitleText>{capitalize(t('language'))}</TitleText>
            <ToggleLng onToggle={toggleLng} toggled={lng === 'en'} />
          </CardLine>
        </ColLine>
      </ModalContent>
    </Modal>
  );
};
