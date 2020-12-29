import {GetServerSideProps} from 'next';
import {CFC} from '../types/react';
import {HomePage} from '../features/home/Page';
import {InterProvider} from '../inter';
import {ThemeProvider} from '../theme/theme';
import {PageProps} from '../types/routes';
import {Cookie} from '../cookie';
import {StoreProvider} from '../store/store';

import test from '../../data/articles/test.json';

export const getServerSideProps: GetServerSideProps<PageProps> = async (context) => {
  const reqCookie = context.req.cookies ?? {};
  const cookie: Cookie = {
    LNG: 'ru',
    THEME: 'dark',
    ...reqCookie
  };

  return {
    props: {
      theme: cookie.THEME,
      lng: cookie.LNG,
      articles: [test, test, test]
    }
  };
};

const Home: CFC<PageProps> = ({theme, lng, articles}) => {
  return (
    <StoreProvider>
      <InterProvider initLng={lng}>
        <ThemeProvider initTheme={theme}>
          <HomePage articles={articles} />
        </ThemeProvider>
      </InterProvider>
    </StoreProvider>
  );
};

export default Home;
