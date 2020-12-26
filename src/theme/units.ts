export const UNIT = 8;

type Dem = (value?: string | number) => string;

export const px: Dem = (value) => {
  return value ? `${value}px` : '';
};

const scale = (value = 0) => {
  return value * UNIT;
};

interface Unit {
  (value?: number): number;
  (value: number, dem: Dem): string;
}

export const unit: Unit = (value: any, dem?: any) => {
  if (!dem) {
    return scale(value);
  }

  return dem(scale(value));
};
