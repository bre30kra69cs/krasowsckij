import {GetServerSideProps} from 'next';
import {CFC} from '../types/react';
import {AboutPage} from '../features/about/Page';
import {InterProvider} from '../inter';
import {ThemeProvider} from '../theme/theme';
import {Query} from '../types/routes';
import {Layout} from '../features/shared/Layout';
import {Cookie} from '../cookie';

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
    <InterProvider initLng={lng}>
      <ThemeProvider initTheme={theme}>
        <Layout>
          <AboutPage />
        </Layout>
      </ThemeProvider>
    </InterProvider>
  );
};

export default About;
