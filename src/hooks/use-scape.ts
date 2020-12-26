import {useCallback, useEffect} from 'react';
import {noop} from '../utils/noop';

export const useEscape = (onClose: () => void = noop) => {
  const onCloseKeypress = useCallback(
    (event: any) => {
      if (event?.code === 'Escape') {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener('keydown', onCloseKeypress);
    return () => {
      document.removeEventListener('keydown', onCloseKeypress);
    };
  }, [onCloseKeypress]);
};
