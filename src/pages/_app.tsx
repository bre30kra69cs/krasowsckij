import {AppProps} from 'next/app';
import {CFC} from '../types/react';
import {Layout} from '../ui/Layout';
import '../../styles/reset.css';
import '../../styles/global.css';

const App: CFC<AppProps> = ({Component, pageProps}) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default App;
