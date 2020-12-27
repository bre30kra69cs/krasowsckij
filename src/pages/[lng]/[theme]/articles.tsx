import {GetStaticPaths, GetStaticProps} from 'next';
import {CFC} from '../../../types/react';
import {ArticlesPage} from '../../../features/articles/Page';
import {InterProvider, LNG_VALUES} from '../../../inter';
import {ThemeProvider, THEME_VALUES} from '../../../theme/theme';
import {Params} from '../../../types/routes';
import {Layout} from '../../../features/shared/Layout';

// TODO: add typings
export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      {
        params: {
          lng: LNG_VALUES['EN'],
          theme: THEME_VALUES['DARK']
        }
      },
      {
        params: {
          lng: LNG_VALUES['RU'],
          theme: THEME_VALUES['DARK']
        }
      },
      {
        params: {
          lng: LNG_VALUES['EN'],
          theme: THEME_VALUES['LIGHT']
        }
      },
      {
        params: {
          lng: LNG_VALUES['RU'],
          theme: THEME_VALUES['LIGHT']
        }
      }
    ],
    fallback: false
  };
};

// TODO: add typings
export const getStaticProps: GetStaticProps = async ({params}) => {
  return {
    props: {
      params
    }
  };
};

interface Props {
  params: Params;
}

const Articles: CFC<Props> = () => {
  return (
    <InterProvider>
      <ThemeProvider>
        <Layout>
          <ArticlesPage />
        </Layout>
      </ThemeProvider>
    </InterProvider>
  );
};

export default Articles;
