import {css} from '@linaria/core';
import {useMemo, useEffect, CSSProperties} from 'react';
import {CFC} from '../../types/react';
import {useTheme} from '../../theme/theme';
import {Theme} from '../../theme/palette';
import {bem} from '../../bem';

export const main = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  flex: 1 0 auto;
  min-height: 100%;
`;

const setOuterTheme = (theme: Theme) => {
  document.body.style.backgroundColor = theme.majorShade;
};

type Vars = CSSProperties &
  {
    [K in keyof Theme as K extends string ? `--${K}` : never]: string;
  };

export const Layout: CFC = ({children, className}) => {
  const {theme} = useTheme();

  const style = useMemo((): Vars => {
    return {
      '--major': theme.major,
      '--majorLight': theme.majorLight,
      '--majorShade': theme.majorShade,
      '--majorDark': theme.majorDark,
      '--minor': theme.minor,
      '--minorLight': theme.minorLight,
      '--minorShade': theme.minorShade,
      '--minorDark': theme.minorDark,
      '--decore': theme.decore,
      '--decoreLight': theme.decoreLight,
      '--decoreShade': theme.decoreShade,
      '--decoreDark': theme.decoreDark,
      '--error': theme.error,
      '--warning': theme.warning
    };
  }, [theme]);

  useEffect(() => {
    setOuterTheme(theme);
  }, [theme]);

  return (
    <div className={bem(main, className)} style={style}>
      {children}
    </div>
  );
};
