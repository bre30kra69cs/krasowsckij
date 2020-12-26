export const PALETTE = {
  white: '#FDFDFD',
  whiteLight: '#FFFFFF',
  whiteShade: '#FCFCFC',
  whiteDark: '#A0A0A0',
  gray: '#63666b',
  grayLight: '#A3A6Ab',
  grayShade: '#505257',
  grayDark: '#3f4145',
  black: '#000000',
  pink: '#cf8fff',
  pinkLight: '#dfdfff',
  pinkShade: '#a174c2',
  pinkDark: '#521180',
  tomato: 'tomato',
  yellow: 'yellow'
};

export interface Theme {
  major: string;
  majorLight: string;
  majorShade: string;
  majorDark: string;
  minor: string;
  minorLight: string;
  minorShade: string;
  minorDark: string;
  decore: string;
  decoreLight: string;
  decoreShade: string;
  decoreDark: string;
  error: string;
  warning: string;
}

export const THEME_LIGHT: Theme = {
  major: PALETTE.gray,
  majorLight: PALETTE.grayLight,
  majorShade: PALETTE.grayShade,
  majorDark: PALETTE.grayDark,
  minor: PALETTE.white,
  minorLight: PALETTE.whiteLight,
  minorShade: PALETTE.whiteShade,
  minorDark: PALETTE.grayDark,
  decore: PALETTE.pink,
  decoreLight: PALETTE.pinkLight,
  decoreShade: PALETTE.pinkShade,
  decoreDark: PALETTE.pinkDark,
  error: PALETTE.tomato,
  warning: PALETTE.yellow
};

export const THEME_DARK: Theme = {
  major: PALETTE.gray,
  majorLight: PALETTE.grayLight,
  majorShade: PALETTE.grayShade,
  majorDark: PALETTE.grayDark,
  minor: PALETTE.white,
  minorLight: PALETTE.whiteLight,
  minorShade: PALETTE.whiteShade,
  minorDark: PALETTE.grayDark,
  decore: PALETTE.pink,
  decoreLight: PALETTE.pinkLight,
  decoreShade: PALETTE.pinkShade,
  decoreDark: PALETTE.pinkDark,
  error: PALETTE.tomato,
  warning: PALETTE.yellow
};

export const color = (key: keyof Theme) => {
  return `var(--${key})`;
};