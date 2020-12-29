import {useRouter} from 'next/router';
import {Query, Routes} from '../types/routes';

interface UseQuery {
  query: Query;
  route: Routes[keyof Routes];
  asPath: string;
}

export const useQuery = () => {
  const router = useRouter();

  return {
    query: {
      lng: router.locale,
      theme: router.query.theme
    },
    route: router.route,
    asPath: router.asPath
  } as UseQuery;
};
