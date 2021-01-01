import {useMemo, CSSProperties} from 'react';
import {CFC} from '../../types/react';
import {useTheme} from '../../theme/theme';
import {Theme} from '../../theme/palette';
import {Col} from '../../ui/atoms/Col';
import styles from './Layout.module.css';
import {bem} from '../../bem';

type Style = CSSProperties &
  {
    [K in keyof Theme as K extends string ? `--${K}` : never]: string;
  };

export const Layout: CFC = ({className, children}) => {
  const {theme} = useTheme();

  const style = useMemo((): Style => {
    return {
      '--majorLight': theme.majorLight,
      '--major': theme.major,
      '--majorShade': theme.majorShade,
      '--majorDark': theme.majorDark,
      '--minorLight': theme.minorLight,
      '--minor': theme.minor,
      '--minorShade': theme.minorShade,
      '--minorDark': theme.minorDark,
      '--decoreLight': theme.decoreLight,
      '--decore': theme.decore,
      '--decoreShade': theme.decoreShade,
      '--decoreDark': theme.decoreDark,
      '--warning': theme.warning,
      '--error': theme.error
    };
  }, [theme]);

  return (
    <Col style={style} className={bem(styles.main, className)}>
      {children}
    </Col>
  );
};
