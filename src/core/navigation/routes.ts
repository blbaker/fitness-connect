import Home from '../../pages/Home/Home';
import Login from '../../pages/Login/Login';
import Class from '../../pages/Classes/Class/Class';
import Classes from '../../pages/Classes/Classes';
import NotFound from '../../pages/NotFound/NotFound';
import { AuthStore } from '../../stores/store.types';
import PrivateLayout from '../../components/PrivateLayout/PrivateLayout';
import PublicLayout from '../../components/PublicLayout/PublicLayout';
import { Route } from './models';

export const routesSchema = (authStore: AuthStore): Route[] => [
  {
    name: 'Login',
    path: '/login',
    exact: true,
    component: Login,
    layout: PublicLayout,
  },
  {
    name: 'Classes',
    path: '/classes',
    exact: true,
    component: Classes,
    canActivate: authStore.isLoggedIn,
    failurePath: '/login',
    layout: PrivateLayout,
  },
  {
    name: 'Class',
    path: '/classes/:classId',
    component: Class,
    canActivate: authStore.isLoggedIn,
    failurePath: '/login',
    layout: PrivateLayout,
  },
  {
    name: 'Home',
    path: '/',
    component: Home,
    exact: true,
    redirectTo: authStore.isLoggedIn ? '/account' : null,
    layout: PublicLayout,
  },
  {
    name: '404',
    component: NotFound,
    layout: PublicLayout,
  },
];
