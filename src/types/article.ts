import {Lang} from './inter';

interface ArticleContent {
  title: string;
  image: string;
  preview: string;
}

export interface Article {
  id: string;
  defaultLng: Lang;
  ru: ArticleContent;
  en: ArticleContent;
}
