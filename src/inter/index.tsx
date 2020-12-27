import {useRouter} from 'next/router';
import {createContext, useContext, useMemo} from 'react';
import {CFC} from '../types/react';
import {Lang} from '../types/inter';
import {ValuesMap} from '../types/values';
import {useQuery} from '../hooks/use-query';
import dict from '../../dicts/dict.json';

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

const FALLBACK = 'NO_INTER';

export const InterProvider: CFC<Props> = ({children}) => {
  const {theme, lng} = useQuery();

  const router = useRouter();

  const value = useMemo((): InterContext => {
    return {
      lng,
      t: (key) => {
        return DICT?.[lng]?.[key] || key || FALLBACK;
      },
      setLng: (nextLng) => {
        router.push(`/${nextLng}/${theme}`);
      }
    };
  }, [lng, theme, router]);

  return <interContext.Provider value={value}>{children}</interContext.Provider>;
};

export const useInter = () => {
  const context = useContext(interContext);
  return context;
};
