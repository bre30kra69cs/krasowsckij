import {AppProps} from 'next/app';
import {CFC} from '../types/react';
import {Layout} from '../features/shared/Layout';
import {InterProvider} from '../inter';
import {ThemeProvider} from '../theme/theme';
import {StoreProvider} from '../store/store';
import {Query} from '../types/routes';
import 'highlight.js/styles/github-gist.css';
import '../../styles/reset.css';
import '../../styles/global.css';

const App: CFC<AppProps> = ({Component, pageProps}) => {
  const props: Query = pageProps;
  const {theme, lng} = props;

  return (
    <StoreProvider>
      <ThemeProvider initTheme={theme}>
        <InterProvider initLng={lng}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </InterProvider>
      </ThemeProvider>
    </StoreProvider>
  );
};

export default App;
