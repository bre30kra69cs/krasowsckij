interface ArticleContent {
  title: string;
  image: string;
  preview: string;
}

export interface Article {
  id: string;
  ru: ArticleContent;
  en: ArticleContent;
}
