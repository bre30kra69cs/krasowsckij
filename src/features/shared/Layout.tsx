import {useMemo, CSSProperties} from 'react';
import {CFC} from '../../types/react';
import {useTheme} from '../../theme/theme';
import {Theme} from '../../theme/palette';
import {main} from '../../ui/Layout';

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
  }, [theme]);

  return (
    <div className={main} style={style}>
      {children}
    </div>
  );
};
