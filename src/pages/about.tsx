import {GetServerSideProps} from 'next';
import {CFC} from '../types/react';
import {AboutPage} from '../features/about/Page';
import {InterProvider} from '../inter';
import {ThemeProvider} from '../theme/theme';
import {Query} from '../types/routes';
import {Cookie} from '../cookie';
import {StoreProvider} from '../store/store';

export const getServerSideProps: GetServerSideProps<Query> = async (context) => {
  const reqCookie = context.req.cookies ?? {};
  const cookie: Cookie = {
    LNG: 'ru',
    THEME: 'dark',
    ...reqCookie
  };

  return {
    props: {
      theme: cookie.THEME,
      lng: cookie.LNG
    }
  };
};

const About: CFC<Query> = ({theme, lng}) => {
  return (
    <StoreProvider>
      <InterProvider initLng={lng}>
        <ThemeProvider initTheme={theme}>
          <AboutPage />
        </ThemeProvider>
      </InterProvider>
    </StoreProvider>
  );
};

export default About;
