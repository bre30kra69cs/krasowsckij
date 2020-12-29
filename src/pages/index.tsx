import {GetServerSideProps} from 'next';
import {CFC} from '../types/react';
import {HomePage} from '../features/home/Page';
import {InterProvider} from '../inter';
import {ThemeProvider} from '../theme/theme';
import {HomePageProps} from '../types/routes';
import {Cookie} from '../cookie';
import {StoreProvider} from '../store/store';
import {FlagsProvider} from '../flags/flags';
import {flagsManager} from '../flags/manager';

import test from '../../data/preview/test.json';

export const getServerSideProps: GetServerSideProps<HomePageProps> = async (context) => {
  const reqCookie = context.req.cookies ?? {};
  const cookie: Cookie = {
    LNG: 'ru',
    THEME: 'dark',
    ...reqCookie
  };

  const flags = flagsManager.get();

  return {
    props: {
      theme: cookie.THEME,
      lng: cookie.LNG,
      articles: [test, test, test],
      flags
    }
  };
};

const Home: CFC<HomePageProps> = ({theme, lng, articles, flags}) => {
  return (
    <StoreProvider>
      <FlagsProvider initFlags={flags}>
        <InterProvider initLng={lng}>
          <ThemeProvider initTheme={theme}>
            <HomePage articles={articles} />
          </ThemeProvider>
        </InterProvider>
      </FlagsProvider>
    </StoreProvider>
  );
};

export default Home;
