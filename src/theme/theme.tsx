import {createContext, useContext, useMemo} from 'react';
import {THEME_DARK, THEME_LIGHT, Theme} from './palette';
import {CFC} from '../types/react';
import {ThemeName} from '../types/theme';
import {ConstMap} from '../types/values';
import {useQuery} from '../hooks/use-query';
import {useRoute} from '../hooks/use-route';
import {useRouter} from '../hooks/use-router';

export const THEME_VALUES: ConstMap<ThemeName> = {
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
  const {query} = useQuery();
  const {theme: themeName} = query;

  const router = useRouter();

  const route = useRoute();

  const value = useMemo((): ThemeContext => {
    const theme = THEME_MAP[themeName] || THEME_MAP[DEFAULT_THEME];

    return {
      themeName,
      theme,
      setTheme: (nextTheme) => {
        router(undefined, {
          theme: nextTheme
        });
      }
    };
  }, [themeName, router, route]);

  return <themeContext.Provider value={value}>{children}</themeContext.Provider>;
};

export const useTheme = () => {
  const theme = useContext(themeContext);
  return theme;
};
