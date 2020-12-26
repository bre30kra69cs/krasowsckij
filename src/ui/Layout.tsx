import {useMemo, CSSProperties} from 'react';
import {css} from '@linaria/core';
import {CFC} from '@app/types';
import {Theme, useTheme} from '@app/theme';

const main = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  flex: 1 0 auto;
  min-height: 100%;
`;

type Vars = CSSProperties &
  {
    [K in keyof Theme as K extends string ? `--${K}` : never]: string;
  };

export const Layout: CFC = ({children}) => {
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
  }, []);

  return (
    <div className={main} style={style}>
      {children}
    </div>
  );
};
