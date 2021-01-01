import {ParsedUrlQuery} from 'querystring';
import {GetServerSidePropsContext} from 'next';
import {DEFAULT_THEME_NAME} from '../theme/theme';
import {DEFAULT_LNG} from '../inter';
import {Query, Options} from '../types/routes';
import {previewManager} from './preview';
import {flagsManager} from './flags';
import {articlesManager} from './articles';
import {Cookie} from '../cookie';

type QqueryContext = GetServerSidePropsContext<ParsedUrlQuery>;

type ArticleContext = GetServerSidePropsContext<Required<Options>>;

export const getQuery = (context: QqueryContext): Query => {
  const reqCookie = context.req.cookies ?? {};

  const cookie: Cookie = {
    LNG: DEFAULT_LNG,
    THEME: DEFAULT_THEME_NAME,
    ...reqCookie
  };

  return {
    theme: cookie.THEME,
    lng: cookie.LNG
  };
};

export const getArticle = (context: ArticleContext) => {
  const articleId = context.params?.id ?? '';
  return articlesManager.get(articleId);
};

export const getPreviwes = () => {
  return previewManager.get();
};

export const getFlags = () => {
  return flagsManager.get();
};
