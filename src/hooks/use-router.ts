import {useRouter as useRouterNext} from 'next/router';
import {useCallback} from 'react';
import {Routes, Options} from '../types/routes';

const ROUTES: Routes = {
  home: '/',
  about: '/about',
  article: '/article'
};

export const route = (path: keyof Routes, options?: Options) => {
  return path === 'article' ? `${ROUTES[path]}/${options?.id ?? ''}` : ROUTES[path];
};

export const useRouter = () => {
  const router = useRouterNext();

  const routeTo = useCallback(
    (path: keyof Routes, options?: Options) => {
      console.log(options, path);
      router.push(route(path, options));
    },
    [router]
  );

  return routeTo;
};
