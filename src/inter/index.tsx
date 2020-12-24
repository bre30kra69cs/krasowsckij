import {createContext, useContext, useMemo, useState} from 'react';
import {CFC} from '../types/react';
import dict from '../../i18n/dict.json';

type Lang = 'ru' | 'en';

type Dict = Record<Lang, Record<string, string>>;

interface Inter {
  lng: Lang;
  setLng: (lng: Lang) => void;
  t: (key: string) => string;
}

const interContext = createContext<Inter>({
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

  const value = useMemo((): Inter => {
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