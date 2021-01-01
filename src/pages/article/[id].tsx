import {GetServerSideProps} from 'next';
import {CFC} from '../../types/react';
import {ArticlePageProps, Options} from '../../types/routes';
import {getQuery, getArticle} from '../../server/parsers';

export const getServerSideProps: GetServerSideProps<ArticlePageProps, Required<Options>> = async (
  context
) => {
  const query = getQuery(context);
  const article = getArticle(context);

  return {
    props: {
      ...query,
      article
    }
  };
};

const Article: CFC<ArticlePageProps> = () => {
  return <div />;
};

export default Article;
