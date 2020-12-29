import {useMemo, CSSProperties, WheelEvent} from 'react';
import {CFC} from '../../types/react';
import {useTheme} from '../../theme/theme';
import {Theme} from '../../theme/palette';
import {bem} from '../../bem';
import {css} from '@linaria/core';

export const main = css`
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

interface Props {
  onWheel?: (event: WheelEvent) => void;
}

export const Layout: CFC<Props> = ({children, className, onWheel}) => {
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
    <div className={bem(main, className)} style={style} onWheel={onWheel}>
      {children}
    </div>
  );
};
