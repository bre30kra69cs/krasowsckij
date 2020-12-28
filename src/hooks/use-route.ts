import {useCallback} from 'react';
import {useQuery} from './use-query';
import {Routes} from '../types/routes';
import {Params} from '../types/routes';

export const ROUTES: Routes = {
  home: '',
  about: 'about'
};

export const useRoute = () => {
  const {query, route} = useQuery();

  const path = useCallback(
    (path?: keyof Routes, options: Partial<Params> = {}) => {
      const nextQuery = {...query, ...options};
      const splitted = route.split('/');
      const last = splitted[splitted.length - 1];
      const target = last[0] === '[' ? '' : last;
      return `/${nextQuery.lng}/${nextQuery.theme}${
        path ? (ROUTES[path] ? `/${ROUTES[path]}` : '') : target ? `/${target}` : ''
      }`;
    },
    [query]
  );

  return path;
};
