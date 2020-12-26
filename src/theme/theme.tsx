import {CFC} from '@app/types';
import {createContext, useContext, useMemo, useState} from 'react';
import {THEME_DARK, THEME_LIGHT, Theme} from './palette';

type ThemeName = 'light' | 'dark';

interface ThemeContext {
  theme: Theme;
  setTheme(nextTheme: ThemeName): void;
}

const themeContext = createContext<ThemeContext>({
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

export const ThemeProvider: CFC<Props> = ({children, theme = 'light'}) => {
  const [currentTheme, setTheme] = useState(theme);

  const value = useMemo((): ThemeContext => {
    const nextTheme = THEME_MAP[currentTheme] || THEME_MAP.light;

    return {
      theme: nextTheme,
      setTheme: (nextTheme) => {
        setTheme(nextTheme);
      }
    };
  }, [currentTheme]);

  return <themeContext.Provider value={value}>{children}</themeContext.Provider>;
};

export const useTheme = () => {
  const theme = useContext(themeContext);
  return theme;
};
