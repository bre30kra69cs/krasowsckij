import {createContext, useContext, useMemo, useState} from 'react';
import {CFC} from '../types/react';
import {ValuesMap} from '../types/values';
import dict from '../../dicts/dict.json';

export type Lang = 'ru' | 'en';

type Dict = Record<Lang, Record<string, string>>;

const DICT = dict as Dict;

export const LNG_VALUES: ValuesMap<Lang> = {
  RU: 'ru',
  EN: 'en'
};

export const DEFAULT_LNG = LNG_VALUES['RU'];

interface InterContext {
  lng: Lang;
  setLng: (lng: Lang) => void;
  t: (key: string) => string;
}

export const interContext = createContext<InterContext>({
  lng: DEFAULT_LNG,
  setLng: () => undefined,
  t: () => ''
});

interface Props {
  lng?: Lang;
}

const FALLBACK = 'no_inter';

export const InterProvider: CFC<Props> = ({children, lng = DEFAULT_LNG}) => {
  const [lngValue, setLng] = useState(lng);

  const value = useMemo((): InterContext => {
    return {
      lng: lngValue,
      t: (key) => {
        return DICT?.[lngValue]?.[key] || key || FALLBACK;
      },
      setLng: (nextLng) => {
        return setLng(nextLng);
      }
    };
  }, [lngValue]);

  return <interContext.Provider value={value}>{children}</interContext.Provider>;
};

export const useInter = () => {
  const context = useContext(interContext);
  return context;
};
