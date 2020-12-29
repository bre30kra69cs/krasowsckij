import {Lang} from './inter';

interface PreviewContent {
  title: string;
  image: string;
  preview: string;
}

export interface Preview {
  id: string;
  defaultLng: Lang;
  ru: PreviewContent;
  en: PreviewContent;
}
