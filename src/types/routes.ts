import {Lang} from './inter';
import {ThemeName} from './theme';
import {Preview} from './data';
import {Flags} from './flags';

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
  flags: Flags;
}

export interface HomePageProps extends PageProps {
  previews: Preview[];
}
