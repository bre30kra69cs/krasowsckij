import {createContext, useContext, useState, useMemo} from 'react';
import {THEME_DARK, THEME_LIGHT, Theme} from './palette';
import {CFC} from '../types/react';
import {ThemeName} from '../types/theme';
import {useRouter} from '../hooks/use-router';
import {cookieManager} from '../cookie';

export const DEFAULT_THEME_NAME: ThemeName = 'light';

const THEME_MAP: Record<ThemeName, Theme> = {
  dark: THEME_DARK,
  light: THEME_LIGHT
};

const DEFAULT_THEME = THEME_MAP[DEFAULT_THEME_NAME];

interface ThemeContext {
  themeName: ThemeName;
  theme: Theme;
  setTheme(nextTheme: ThemeName): void;
}

const themeContext = createContext<ThemeContext>({
  themeName: DEFAULT_THEME_NAME,
  theme: DEFAULT_THEME,
  setTheme: () => undefined
});

interface Props {
  initTheme: ThemeName;
}

export const ThemeProvider: CFC<Props> = ({children, initTheme}) => {
  const [themeName, setTheme] = useState(initTheme ?? DEFAULT_THEME_NAME);

  const router = useRouter();

  const value = useMemo((): ThemeContext => {
    const theme = THEME_MAP[themeName];

    return {
      themeName,
      theme,
      setTheme: (nextTheme) => {
        cookieManager.update('THEME', nextTheme);
        setTheme(nextTheme);
      }
    };
  }, [themeName, router]);

  return <themeContext.Provider value={value}>{children}</themeContext.Provider>;
};

export const useTheme = () => {
  const theme = useContext(themeContext);
  return theme;
};
