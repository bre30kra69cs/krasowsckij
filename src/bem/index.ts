import cn from 'classnames';

type BemElement = Record<string, Record<string, string | boolean>>;

type Bem = BemElement | string | undefined;

const element = (name?: BemElement) => {
  if (name) {
    return Object.keys(name).map((key) => {
      const mods = Object.keys(name[key])
        .filter(Boolean)
        .map((mod) => `${key}__${mod}`);

      return [key, ...mods];
    });
  }

  return '';
};

export const bem = (...names: Bem[]) => {
  const classNames = names.map((name) => {
    return typeof name === 'string' ? name : element(name);
  });

  return cn(...classNames);
};
