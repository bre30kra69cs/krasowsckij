import {Lang} from './inter';
import {ThemeName} from './theme';
import {Preview, Article} from './data';
import {Flags} from './flags';

export interface Params {
  theme: ThemeName;
}

export interface Query {
  theme: ThemeName;
  lng: Lang;
}

export interface Options {
  id?: string;
}

export interface Routes {
  home: '/';
  about: '/about';
  article: '/article';
}

export interface PageProps extends Query {
  flags: Flags;
}

export interface HomePageProps extends PageProps {
  previews: Preview[];
}

export interface ArticlePageProps extends PageProps {
  article: Article;
}
