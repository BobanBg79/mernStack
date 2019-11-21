import axios from 'axios';
import authActions from './actions';
import { msgOperations } from '../message';

const authenticateUser = () => async dispatch => {
  try {
    const token = localStorage.getItem('token');
    if (token) {
      dispatch(authActions.authAttempt());
      const response = await axios.get('/api/user/auth');
      dispatch(authActions.authSuccess(response.data));
      dispatch(
        msgOperations.showMsg('User successfully authenticated', 'success')
      );
    }
  } catch (err) {
    dispatch(authActions.authFail());
  }
};

const registerUser = data => async dispatch => {
  dispatch(authActions.registerAttempt());
  try {
    const response = await axios.post('api/user/register', data);
    dispatch(authActions.registerSuccess(response.data));
    dispatch(msgOperations.showMsg('User successfully created', 'success'));
  } catch (err) {
    dispatch(authActions.registerFail());
    dispatch(msgOperations.showMsg(err.response.data.error, 'error'));
  }
};

const login = data => async dispatch => {
  dispatch(authActions.loginAttempt());
  try {
    const response = await axios.post('/api/user/login', data);
    dispatch(authActions.loginSuccess(response.data));
    dispatch(msgOperations.showMsg('Successfully logged in', 'success'));
  } catch (err) {
    dispatch(authActions.loginFail());
    dispatch(msgOperations.showMsg(err.response.data.error, 'error'));
    throw err;
  }
};

const logout = () => async dispatch => {
  try {
    delete axios.defaults.headers.common.Authorization;
    dispatch(authActions.logoutSuccess());
  } catch ({ response }) {
    dispatch(msgOperations.showMsg(response.data.error, 'error'));
  }
};

export default {
  authenticateUser,
  registerUser,
  login,
  logout,
};
