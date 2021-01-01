import {createContext, useContext} from 'react';
import {CFC} from '../types/react';
import {Flags} from '../types/flags';

const flagsContext = createContext<Flags>({
  responseHeader: false
});

interface Props {
  initFlags: Flags;
}

export const FlagsProvider: CFC<Props> = ({children, initFlags}) => {
  return <flagsContext.Provider value={initFlags}>{children}</flagsContext.Provider>;
};

export const useFlags = () => {
  const flags = useContext(flagsContext);
  return flags;
};
