import {AppProps} from 'next/app';
import {CFC} from '../types/react';
import 'highlight.js/styles/github-gist.css';
import '../../styles/reset.css';
import '../../styles/global.css';

const App: CFC<AppProps> = ({Component, pageProps}) => {
  return <Component {...pageProps} />;
};

export default App;
