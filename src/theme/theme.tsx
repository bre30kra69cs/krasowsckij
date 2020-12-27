import {useRouter} from 'next/router';
import {createContext, useContext, useMemo} from 'react';
import {THEME_DARK, THEME_LIGHT, Theme} from './palette';
import {CFC} from '../types/react';
import {ThemeName} from '../types/theme';
import {ValuesMap} from '../types/values';
import {useQuery} from '../hooks/use-query';

export const THEME_VALUES: ValuesMap<ThemeName> = {
  LIGHT: 'light',
  DARK: 'dark'
};

export const DEFAULT_THEME = THEME_VALUES['DARK'];

interface ThemeContext {
  themeName: ThemeName;
  theme: Theme;
  setTheme(nextTheme: ThemeName): void;
}

const themeContext = createContext<ThemeContext>({
  themeName: DEFAULT_THEME,
  theme: THEME_LIGHT,
  setTheme: () => undefined
});

interface Props {
  theme?: ThemeName;
}

const THEME_MAP: Record<ThemeName, Theme> = {
  dark: THEME_DARK,
  light: THEME_LIGHT
};

export const ThemeProvider: CFC<Props> = ({children}) => {
  const {theme: themeName, lng} = useQuery();

  const router = useRouter();

  const value = useMemo((): ThemeContext => {
    const theme = THEME_MAP[themeName] || THEME_MAP[DEFAULT_THEME];

    return {
      themeName,
      theme,
      setTheme: (nextTheme) => {
        router.push(`/${lng}/${nextTheme}`);
      }
    };
  }, [themeName, lng, router]);

  return <themeContext.Provider value={value}>{children}</themeContext.Provider>;
};

export const useTheme = () => {
  const theme = useContext(themeContext);
  return theme;
};
