import {Lang} from './inter';
import {ThemeName} from './theme';

export interface Params {
  theme: ThemeName;
  lng: Lang;
}

export interface Routes {
  home: string;
  articles: string;
}

export type Route = `/${Lang}/${ThemeName}/${keyof Routes | ''}`;
