export const ROUTES = {
  home: '/'
};

export type Routes = keyof typeof ROUTES;

export const route = (key: Routes) => {
  return ROUTES[key] || ROUTES.home;
};
