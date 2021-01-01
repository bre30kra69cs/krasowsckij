import {GetServerSideProps} from 'next';
import {CFC} from '../types/react';
import {InterProvider} from '../inter';
import {ThemeProvider} from '../theme/theme';
import {PageProps} from '../types/routes';
import {Cookie} from '../cookie';
import {StoreProvider} from '../store/store';
import {FlagsProvider} from '../flags/flags';
import {flagsManager} from '../flags/manager';

export const getServerSideProps: GetServerSideProps<PageProps> = async (context) => {
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
      flags
    }
  };
};

const About: CFC<PageProps> = ({theme, lng, flags}) => {
  return (
    <StoreProvider>
      <FlagsProvider initFlags={flags}>
        <InterProvider initLng={lng}>
          <ThemeProvider initTheme={theme}>
            <div />
          </ThemeProvider>
        </InterProvider>
      </FlagsProvider>
    </StoreProvider>
  );
};

export default About;
