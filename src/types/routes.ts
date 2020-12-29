import {Lang} from './inter';
import {ThemeName} from './theme';

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
}
