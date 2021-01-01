import {GetServerSideProps} from 'next';
import {CFC} from '../types/react';
import {HomePage} from '../features/home/HomePage';
import {InterProvider} from '../inter';
import {ThemeProvider} from '../theme/theme';
import {HomePageProps} from '../types/routes';
import {Cookie} from '../cookie';
import {StoreProvider} from '../store/store';
import {FlagsProvider} from '../flags/flags';
import {flagsManager} from '../flags/manager';
import {previewManager} from '../data/preview';

export const getServerSideProps: GetServerSideProps<HomePageProps> = async (context) => {
  const reqCookie = context.req.cookies ?? {};
  const cookie: Cookie = {
    LNG: 'ru',
    THEME: 'dark',
    ...reqCookie
  };

  const flags = flagsManager.get();

  const previews = previewManager.get();

  return {
    props: {
      theme: cookie.THEME,
      lng: cookie.LNG,
      previews,
      flags
    }
  };
};

const Home: CFC<HomePageProps> = ({theme, lng, previews, flags}) => {
  return (
    <StoreProvider>
      <FlagsProvider initFlags={flags}>
        <InterProvider initLng={lng}>
          <ThemeProvider initTheme={theme}>
            <HomePage previews={previews} />
          </ThemeProvider>
        </InterProvider>
      </FlagsProvider>
    </StoreProvider>
  );
};

export default Home;
