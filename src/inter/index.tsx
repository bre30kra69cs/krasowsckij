import {createContext, useContext, useMemo, useState} from 'react';
import {CFC} from '../types/react';
import dict from '../../dicts/dict.json';

type Lang = 'ru' | 'en';

type Dict = Record<Lang, Record<string, string>>;

interface InterContext {
  lng: Lang;
  setLng: (lng: Lang) => void;
  t: (key: string) => string;
}

export const interContext = createContext<InterContext>({
  lng: 'ru',
  setLng: () => undefined,
  t: () => ''
});

interface Props {
  lng?: Lang;
}

const FALLBACK = 'no_inter';

export const InterProvider: CFC<Props> = ({children, lng = 'ru'}) => {
  const [lngValue, setLng] = useState(lng);

  const value = useMemo((): InterContext => {
    return {
      lng: lngValue,
      t: (key) => {
        return (dict as Dict)?.[lngValue]?.[key] || key || FALLBACK;
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
