import {AppProps} from 'next/app';
import {CFC} from '@app/types';
import {Layout} from '@app/ui';
import {InterProvider} from '@app/inter';
import {ThemeProvider} from '@app/theme';

import '../../styles/reset.css';
import '../../styles/global.css';

const App: CFC<AppProps> = ({Component, pageProps}) => {
  return (
    <InterProvider>
      <ThemeProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </InterProvider>
  );
};

export default App;
