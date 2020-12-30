import {GetServerSideProps} from 'next';
import {CFC} from '../../types/react';
import {ArticlePage} from '../../features/article/Page';
import {InterProvider} from '../../inter';
import {ThemeProvider} from '../../theme/theme';
import {ArticlePageProps, Options} from '../../types/routes';
import {Cookie} from '../../cookie';
import {StoreProvider} from '../../store/store';
import {FlagsProvider} from '../../flags/flags';
import {flagsManager} from '../../flags/manager';
import {articlesManager} from '../../data/articles';

export const getServerSideProps: GetServerSideProps<ArticlePageProps, Required<Options>> = async (
  context
) => {
  const reqCookie = context.req.cookies ?? {};
  const cookie: Cookie = {
    LNG: 'ru',
    THEME: 'dark',
    ...reqCookie
  };

  const flags = flagsManager.get();

  const articleId = context.params?.id ?? '';
  const article = articlesManager.get(articleId);

  return {
    props: {
      theme: cookie.THEME,
      lng: cookie.LNG,
      article,
      flags
    }
  };
};

const Article: CFC<ArticlePageProps> = ({theme, lng, article, flags}) => {
  return (
    <StoreProvider>
      <FlagsProvider initFlags={flags}>
        <InterProvider initLng={lng}>
          <ThemeProvider initTheme={theme}>
            <ArticlePage article={article} />
          </ThemeProvider>
        </InterProvider>
      </FlagsProvider>
    </StoreProvider>
  );
};

export default Article;
