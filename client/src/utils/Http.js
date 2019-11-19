import axios from 'axios';
import { getToken } from '../utils/token';
// const token = localStorage.getItem('token');
// axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

axios.interceptors.request.use(config => {
  const token = getToken();
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
});

export default axios;
