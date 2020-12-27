import {useRouter} from 'next/router';
import {Params} from '../types/routes';

interface UseQuery {
  query: Params;
  route: string;
}

export const useQuery = () => {
  const router = useRouter();

  return {
    query: {
      lng: router.query.lng,
      theme: router.query.theme
    },
    route: router.route
  } as UseQuery;
};
