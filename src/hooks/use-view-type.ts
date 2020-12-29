import {useEffect, useCallback} from 'react';
import {useStore} from '../store/store';
import {setNormalViewType, setSmalViewType} from '../store/actions';
import {throttle} from '../utils/throttle';

const OFFSET = 50;

const TIMEOUT = 200;

export const useViewType = () => {
  const {state, dispatch} = useStore();

  const listner = useCallback(
    throttle(() => {
      if (window.scrollY >= OFFSET) {
        if (state.viewType === 'normal') {
          dispatch(setSmalViewType);
        }
      } else {
        if (state.viewType === 'small') {
          dispatch(setNormalViewType);
        }
      }
    }, TIMEOUT),
    [state, dispatch]
  );

  useEffect(() => {
    document.addEventListener('wheel', listner);
    return () => {
      document.removeEventListener('wheel', listner);
    };
  }, [listner]);
};
