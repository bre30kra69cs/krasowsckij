import {Lang} from '../types/inter';
import {ThemeName} from '../types/theme';

type BaseCookie = string;

type ParsedCookie = string[][];

type UnparsedCookie = string[];

export type Key = 'LNG' | 'THEME';

export type Value<T extends Key> = T extends 'LNG' ? Lang : ThemeName;

export type Cookie = {
  [K in Key]: Value<K>;
};

const createCookieManager = () => {
  const isExist = (key: Key, parsed: ParsedCookie) => {
    return parsed.map(([targetKey]) => targetKey).includes(key);
  };

  const swap = <T extends Key>(key: T, value: Value<T>, parsed: ParsedCookie) => {
    return isExist(key, parsed)
      ? parsed.map(([targetKey, targetValue]) => {
          return targetKey === key ? [key, value] : [targetKey, targetValue];
        })
      : [...parsed, [key, value]];
  };

  const parse = (cookie: BaseCookie): ParsedCookie => {
    return cookie.split(';').map((item) => item.split('='));
  };

  const unparse = (parsed: ParsedCookie): UnparsedCookie => {
    return parsed.filter(([targetKey]) => !!targetKey).map((item) => item.join('='));
  };

  const get = (): BaseCookie => {
    return document.cookie;
  };

  const set = (cookies: UnparsedCookie) => {
    cookies.forEach((cookie) => {
      document.cookie = cookie;
    });
  };

  const update = <T extends Key>(key: T, value: Value<T>) => {
    const cookie = get();
    const parsed = parse(cookie);
    const swapped = swap(key, value, parsed);
    const nextCookies = unparse(swapped);
    console.log(key, value, parsed, swapped, nextCookies);
    set(nextCookies);
  };

  return {
    isExist,
    swap,
    get,
    set,
    update,
    parse,
    unparse
  };
};

export const cookieManager = createCookieManager();
