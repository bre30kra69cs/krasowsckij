import {AppProps} from 'next/app';
import {CFC} from '../types/react';
import {Layout} from '../ui/Layout';
import {InterProvider} from '../inter';
import {ThemeProvider} from '../theme/theme';

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
