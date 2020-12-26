export interface Routes {
  home: string;
}

export const ROUTES: Routes = {
  home: '/'
};

export const route = (key: keyof Routes) => {
  return ROUTES[key] || ROUTES.home;
};
