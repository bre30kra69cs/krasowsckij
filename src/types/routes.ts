import {Lang} from './inter';
import {ThemeName} from './theme';
import {Article} from './article';

export interface Params {
  theme: ThemeName;
}

export interface Query {
  theme: ThemeName;
  lng: Lang;
}

export interface Routes {
  home: '/';
  about: '/about';
  article: '/article';
}

export interface PageProps extends Query {
  articles: Article[];
}
