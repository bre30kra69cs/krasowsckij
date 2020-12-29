import {createContext, useContext, useState, useMemo} from 'react';
import {CFC} from '../types/react';
import {Lang} from '../types/inter';
import {ConstMap} from '../types/values';
import {useRouter} from '../hooks/use-router';
import {cookieManager} from '../cookie';
import dict from '../../dicts/dict.json';

type Dict = Record<Lang, Record<string, string>>;

const DICT = dict as Dict;

export const LNG_VALUES: ConstMap<Lang> = {
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
  initLng: Lang;
}

const FALLBACK = 'NO_INTER';

export const InterProvider: CFC<Props> = ({children, initLng}) => {
  const [lng, setLng] = useState(initLng);

  const router = useRouter();

  const value = useMemo((): InterContext => {
    return {
      lng,
      t: (key) => {
        return DICT?.[lng]?.[key] ?? key ?? FALLBACK;
      },
      setLng: (nextLng) => {
        cookieManager.update('LNG', nextLng);
        setLng(nextLng);
      }
    };
  }, [lng, router]);

  return <interContext.Provider value={value}>{children}</interContext.Provider>;
};

export const useInter = () => {
  const context = useContext(interContext);
  return context;
};
