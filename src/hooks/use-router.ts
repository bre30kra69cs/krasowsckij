import {useRouter as useRouterNext} from 'next/router';
import {useCallback} from 'react';
import {useRoute} from './use-route';
import {Routes, Params} from '../types/routes';

export const useRouter = () => {
  const router = useRouterNext();

  const route = useRoute();

  const routeTo = useCallback(
    (path?: keyof Routes, options?: Partial<Params>) => {
      router.push(route(path, options));
    },
    [router, route]
  );

  return routeTo;
};
