import {useRouter as useRouterNext} from 'next/router';
import {useCallback} from 'react';
import {Routes} from '../types/routes';

const ROUTES: Routes = {
  home: '/',
  about: '/about'
};

export const route = (path: keyof Routes) => {
  return ROUTES[path];
};

export const useRouter = () => {
  const router = useRouterNext();

  const routeTo = useCallback(
    (path: keyof Routes) => {
      router.push(route(path));
    },
    [router]
  );

  return routeTo;
};
