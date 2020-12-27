import {createContext, useContext, useMemo, useState} from 'react';
import {THEME_DARK, THEME_LIGHT, Theme} from './palette';
import {CFC} from '../types/react';

export type ThemeName = 'light' | 'dark';

export const DEFAULT_THEME: ThemeName = 'dark';

interface ThemeContext {
  name: ThemeName;
  theme: Theme;
  setTheme(nextTheme: ThemeName): void;
}

const themeContext = createContext<ThemeContext>({
  name: DEFAULT_THEME,
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

export const ThemeProvider: CFC<Props> = ({children, theme = DEFAULT_THEME}) => {
  const [currentTheme, setTheme] = useState(theme);

  const value = useMemo((): ThemeContext => {
    const nextTheme = THEME_MAP[currentTheme] || THEME_MAP[DEFAULT_THEME];

    return {
      name: currentTheme,
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
