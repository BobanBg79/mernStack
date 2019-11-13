import { LoginPage, RegisterPage } from '../pages'
import { ShoppingList } from '../components'

export const PUBLIC_ROUTES = {
  LOGIN: { title: 'Login', path: '/login', component: LoginPage },
  REGISTER: { title: 'Register', path: '/register', component: RegisterPage },
}

export const PROTECTED_ROUTES = {
  SHOPPING_LIST: { title: 'Shopping list', path: '/', component: ShoppingList },
}
