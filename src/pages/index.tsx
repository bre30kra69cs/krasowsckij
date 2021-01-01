import {GetServerSideProps} from 'next';
import {CFC} from '../types/react';
import {HomePage} from '../features/home/HomePage';
import {HomePageProps} from '../types/routes';
import {getQuery, getPreviwes} from '../server/parsers';

export const getServerSideProps: GetServerSideProps<HomePageProps> = async (context) => {
  const query = getQuery(context);
  const previews = getPreviwes();

  return {
    props: {
      ...query,
      previews
    }
  };
};

const Home: CFC<HomePageProps> = ({previews}) => {
  return <HomePage previews={previews} />;
};

export default Home;
