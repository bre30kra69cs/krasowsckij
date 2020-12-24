import {AppProps} from 'next/app';
import {CFC} from '../types/react';
import {Layout} from '../ui/Layout';
import {InterProvider} from '../inter';
import '../../styles/reset.css';
import '../../styles/global.css';

const App: CFC<AppProps> = ({Component, pageProps}) => {
  return (
    <InterProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </InterProvider>
  );
};

export default App;
