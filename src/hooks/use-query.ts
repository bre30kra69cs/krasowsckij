import {useRouter} from 'next/router';
import {DEFAULT_THEME} from '../theme/theme';
import {DEFAULT_LNG} from '../inter';
import {Params} from '../types/routes';

export const useQuery = () => {
  const router = useRouter();

  const theme = router.query?.theme || DEFAULT_THEME;
  const lng = router.query?.lng || DEFAULT_LNG;

  return {theme, lng} as Params;
};
