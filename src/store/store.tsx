import {createContext, useContext, useState, useMemo} from 'react';
import {Store, State} from '../types/store';
import {CFC} from '../types/react';

const initState: State = {
  viewType: 'normal'
};

const storeContext = createContext<Store>({
  state: initState,
  dispatch: () => undefined
});

export const StoreProvider: CFC = ({children}) => {
  const [state, setState] = useState(initState);

  const value = useMemo((): Store => {
    return {
      state,
      dispatch: (action) => {
        const nextState = action(state);
        setState({...nextState});
      }
    };
  }, [state]);

  return <storeContext.Provider value={value}>{children}</storeContext.Provider>;
};

export const useStore = () => {
  const store = useContext(storeContext);
  return store;
};
