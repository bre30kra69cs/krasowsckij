import {AppProps} from 'next/app';
import {CFC} from '../types/react';
import '../../styles/reset.css';
import '../../styles/global.css';

const App: CFC<AppProps> = ({Component, pageProps}) => {
  return <Component {...pageProps} />;
};

export default App;
