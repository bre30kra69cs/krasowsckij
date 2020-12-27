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
  blue: '#4297c2',
  blueLight: '#4fbaf0',
  blueShade: '#377da1',
  blueDark: '#2d6785',
  red: '#b02f12',
  redLight: '#db3a16',
  redShade: '#8c250e',
  redDark: '#661b0a',
  // TODO: swap to hex
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

export const THEME_DARK: Theme = {
  major: PALETTE.gray,
  majorLight: PALETTE.grayLight,
  majorShade: PALETTE.grayShade,
  majorDark: PALETTE.grayDark,
  minor: PALETTE.white,
  minorLight: PALETTE.whiteLight,
  minorShade: PALETTE.whiteShade,
  minorDark: PALETTE.whiteDark,
  decore: PALETTE.pink,
  decoreLight: PALETTE.pinkLight,
  decoreShade: PALETTE.pinkShade,
  decoreDark: PALETTE.pinkDark,
  error: PALETTE.tomato,
  warning: PALETTE.yellow
};

export const THEME_LIGHT: Theme = {
  major: PALETTE.white,
  majorLight: PALETTE.whiteLight,
  majorShade: PALETTE.whiteShade,
  majorDark: PALETTE.grayLight,
  minor: PALETTE.grayDark,
  minorLight: PALETTE.grayLight,
  minorShade: PALETTE.grayShade,
  minorDark: PALETTE.grayDark,
  decore: PALETTE.red,
  decoreLight: PALETTE.redLight,
  decoreShade: PALETTE.redShade,
  decoreDark: PALETTE.redDark,
  error: PALETTE.tomato,
  warning: PALETTE.yellow
};

const parseColor = (color: string) => {
  const value = color.substr(1);
  const rh = value.substr(0, 2);
  const gh = value.substr(2, 2);
  const bh = value.substr(4, 2);
  const r = parseInt(rh, 16);
  const g = parseInt(gh, 16);
  const b = parseInt(bh, 16);
  return [r, g, b];
};

export const color = (key: keyof Theme) => {
  return `var(--${key})`;
};

export const palette = (key: keyof typeof PALETTE, opacity = 1) => {
  const [r, g, b] = parseColor(PALETTE[key]);
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};
