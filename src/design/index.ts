export const PALETTE = {
  white: '#FFFFFF',
  whiteShade: '#FCFCFC',
  whiteDark: '#A0A0A0',
  gray: '#63666b',
  grayShade: '#505257',
  grayDark: '#3f4145',
  black: '#000000',
  pink: '#8158e8',
  pinkShade: '#6c4ac2',
  pinkDark: '#553a99'
};

export const color = (key: keyof typeof PALETTE) => {
  return PALETTE[key];
};

export const UNIT = 8;

export const unit = (value: number) => {
  return UNIT * value;
};
