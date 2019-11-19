import axios from 'axios';
import { getToken } from '../utils/token';
import { authOperations } from '../modules/auth';

const configureAxios = store => {
  axios.interceptors.request.use(config => {
    const token = getToken();
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  });

  axios.interceptors.response.use(
    response => response,
    error => {
      console.log('axios response interceptor error: ', error.response);
      store.dispatch(authOperations.logout());
    }
  );
};

export default configureAxios;
