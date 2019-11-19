import {
  LoginPage,
  HomePage,
  AnotherPage,
  ApartmentSinglePage,
  ApartmentListPage,
} from '../pages';
import { ShoppingList } from '../components';

export const PUBLIC_ROUTES = {
  LOGIN: { title: 'Login', path: '/login', component: LoginPage },
  REGISTER: { title: 'Register', path: '/register', component: LoginPage },
};

export const PROTECTED_ROUTES = {
  HOME: { title: 'Home page', path: '/', component: HomePage },
  APARTMENT_LIST: {
    title: 'Apartment list',
    path: '/apartments',
    component: ApartmentListPage,
  },
  APARTMENT_CREATE: {
    title: 'Create apartment',
    path: '/apartments/create',
    component: ApartmentSinglePage,
  },
  APARTMENT_EDIT: {
    title: 'Create apartment',
    path: '/apartments/:id',
    component: ApartmentSinglePage,
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
  ANY_PAGE: {
    title: 'Another page',
    path: '*',
    component: AnotherPage,
  },
};
