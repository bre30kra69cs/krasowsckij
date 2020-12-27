import cn from 'classnames';

type BemElement = Record<string, Record<string, string | boolean | undefined>>;

type Bem = BemElement | string | boolean | undefined;

const element = (value?: BemElement) => {
  if (value) {
    return Object.keys(value).map((key) => {
      const mods = Object.keys(value[key])
        .filter((modKey) => !!value[key][modKey])
        .map((mod) => `${key}__${mod}`);

      return [key, ...mods];
    });
  }

  return '';
};

export const bem = (...values: Bem[]) => {
  const classNames = values.map((value) => {
    return typeof value === 'string' ? value : typeof value === 'boolean' ? '' : element(value);
  });

  return cn(...classNames);
};
