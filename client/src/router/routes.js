import {
  LoginPage,
  RegisterPage,
  HomePage,
  AnotherPage,
  ApartmentCreatePage,
} from '../pages';
import { ShoppingList } from '../components';

export const PUBLIC_ROUTES = {
  LOGIN: { title: 'Login', path: '/login', component: LoginPage },
  REGISTER: { title: 'Register', path: '/register', component: RegisterPage },
};

export const PROTECTED_ROUTES = {
  HOME: { title: 'Home page', path: '/', component: HomePage },
  APARTMENT_CREATE: {
    title: 'Create apartment',
    path: '/apartments/create',
    component: ApartmentCreatePage,
  },
  SHOPPING_LIST: {
    title: 'Shopping list',
    path: '/shopping-list',
    component: ShoppingList,
  },
  ANOTHER_PAGE: {
    title: 'Another page',
    path: '/anotherpage',
    component: AnotherPage,
  },
};
